package com.cclinux.projects.meeting.mapper;

import com.cclinux.framework.core.mapper.ProjectBaseMapper;
import com.cclinux.projects.meeting.model.NewsModel;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository("MeetingNewsMapper")
@Mapper
public interface NewsMapper extends ProjectBaseMapper<NewsModel> {
}
