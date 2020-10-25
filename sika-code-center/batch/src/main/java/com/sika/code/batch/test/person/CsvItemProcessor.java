package com.sika.code.batch.test.person;

import com.sika.code.common.json.util.JSONUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.item.validator.ValidatingItemProcessor;
import org.springframework.batch.item.validator.ValidationException;

@Slf4j
public class CsvItemProcessor extends ValidatingItemProcessor<PersonEntity> {
    static long beginTime = 0;
    int i = 0;
    @Override
    public PersonEntity process(PersonEntity item) throws ValidationException {
        /**
         * 需要执行super.process(item)才会调用自定义校验器
         */
        super.process(item);
        /**
         * 对数据进行简单的处理，若民族为汉族，则数据转换为01，其余转换为02
         */
        if (item.getNation().equals("汉族")) {
            item.setNation("01");
        } else {
            item.setNation("02");
        }
        if (i == 0) {
            beginTime = System.currentTimeMillis();
        }

        log.info("处理的数据为{}", JSONUtil.toJSONString(item));
        return item;
    }
}