package com.sika.code.batch.test.animal;

import com.sika.code.batch.test.animal.convert.AnimalConvert;
import lombok.Data;
import lombok.experimental.Accessors;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.batch.item.validator.ValidationException;
import org.springframework.batch.item.validator.Validator;

@Data
@Accessors(chain = true)
public class AnimalItemProcessor implements ItemProcessor<AnimalDTO, AnimalEntity> {

    private Validator<AnimalDTO> validator;

    @Override
    public AnimalEntity process(AnimalDTO item) throws ValidationException {
        /**
         * 需要执行super.process(item)才会调用自定义校验器
         */
        /**
         * 对数据进行简单的处理，若民族为汉族，则数据转换为01，其余转换为02
         */
        if (item.getColor().equals("黄色")) {
            item.setColor(item.getColor());
            throw new RuntimeException(item.getColor());
        } else {
            item.setColor(item.getColor());
        }
        return AnimalConvert.INSTANCE.convertToEntity(item);
    }
}