package com.sika.code.retryer.pojo;

import com.sika.code.basic.util.BaseUtil;
import com.sika.code.retryer.constant.WaitStrategyEnum;
import lombok.Data;
import lombok.experimental.Accessors;

import static com.sika.code.retryer.constant.WaitStrategyEnum.FIXED;

/**
 * 等待策略的入参
 */
@Data
@Accessors
public class WaitStrategyParam extends StrategyParam{

    private WaitStrategyEnum waitStrategyEnum;
    /** 初始化的时长 */
    private long initTime;
    /** 每次递增的时长 --- 对递增枚举类型有效 */
    private long increment;

    public WaitStrategyParam build() {
        super.buildCommon();

        if (BaseUtil.isNull(this.waitStrategyEnum)) {
            this.waitStrategyEnum = FIXED;
        }
        if (this.initTime < ZERO) {
            this.initTime = ZERO;
        }
        if (this.increment < ONE) {
            this.increment = ONE;
        }
        return this;
    }
}