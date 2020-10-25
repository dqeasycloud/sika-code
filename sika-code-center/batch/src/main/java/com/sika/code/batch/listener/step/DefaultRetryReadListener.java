package com.sika.code.batch.listener.step;

import com.sika.code.batch.listener.step.base.StepRetryReadListener;
import lombok.extern.slf4j.Slf4j;

/**
 * @author daiqi
 * @create 2019-10-04 22:38
 */
@Slf4j
public class DefaultRetryReadListener implements StepRetryReadListener {

    @Override
    public void onRetryReadException(Exception e) throws Exception {

    }
}
