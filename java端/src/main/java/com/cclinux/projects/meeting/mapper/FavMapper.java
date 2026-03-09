package com.cclinux.projects.meeting.mapper;

import com.cclinux.framework.core.mapper.ProjectBaseMapper;
import com.cclinux.projects.meeting.model.FavModel;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;


@Repository("MeetingFavMapper")
@Mapper
public interface FavMapper extends ProjectBaseMapper<FavModel> {
}
