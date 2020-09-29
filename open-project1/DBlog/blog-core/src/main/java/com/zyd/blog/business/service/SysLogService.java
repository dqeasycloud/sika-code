package com.zyd.blog.business.service;


import com.github.pagehelper.PageInfo;
import com.zyd.blog.business.entity.Log;
import com.zyd.blog.business.enums.PlatformEnum;
import com.zyd.blog.business.log.pojo.query.LogStatisticsQuery;
import com.zyd.blog.business.log.pojo.vo.LogStatisticsVisitVo;
import com.zyd.blog.business.vo.LogConditionVO;
import com.zyd.blog.framework.object.AbstractService;

/**
 * @author yadong.zhang email:yadong.zhang0415(a)gmail.com
 * @version 1.0
 * @date 2018/01/09 17:40
 * @since 1.0
 */
public interface SysLogService extends AbstractService<Log, Long> {

    /**
     * 分页查询
     *
     * @param vo
     * @return
     */
    PageInfo<Log> findPageBreakByCondition(LogConditionVO vo);

    void asyncSaveSystemLog(PlatformEnum platform, String bussinessName);

    /**
     * 统计最近一周的日志数据
     */
    LogStatisticsVisitVo statisticsRecentWeek(LogStatisticsQuery query);

    /**
     * 统计指定天所在年的日志数据
     */
    LogStatisticsVisitVo statisticsSameYear(LogStatisticsQuery query);

    /**
     * 统计指定日期所在月的数据
     */
    LogStatisticsVisitVo statisticsSameMonth(LogStatisticsQuery query);

    /**
     * 统计指定指定天的日志数据
     */
    LogStatisticsVisitVo statisticsSameDay(LogStatisticsQuery query);
}
