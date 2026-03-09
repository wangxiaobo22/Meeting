package com.cclinux.projects.meeting.mapper;

import com.cclinux.framework.core.mapper.ProjectBaseMapper;
import com.cclinux.projects.meeting.model.MeetJoinModel;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;


@Repository("MeetingMeetJoinMapper")
@Mapper
public interface MeetJoinMapper extends ProjectBaseMapper<MeetJoinModel> {

}
