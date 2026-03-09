package com.cclinux.projects.meeting.mapper;

import com.cclinux.framework.core.mapper.ProjectBaseMapper;
import com.cclinux.projects.meeting.model.MeetModel;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;


@Repository("MeetingMeetMapper")
@Mapper
public interface MeetMapper extends ProjectBaseMapper<MeetModel> {
}
