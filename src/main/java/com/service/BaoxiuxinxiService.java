package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.BaoxiuxinxiEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.BaoxiuxinxiVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.BaoxiuxinxiView;


/**
 * 报修信息
 *
 * @author 
 * @email 
 * @date 2023-02-16 20:43:30
 */
public interface BaoxiuxinxiService extends IService<BaoxiuxinxiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<BaoxiuxinxiVO> selectListVO(Wrapper<BaoxiuxinxiEntity> wrapper);
   	
   	BaoxiuxinxiVO selectVO(@Param("ew") Wrapper<BaoxiuxinxiEntity> wrapper);
   	
   	List<BaoxiuxinxiView> selectListView(Wrapper<BaoxiuxinxiEntity> wrapper);
   	
   	BaoxiuxinxiView selectView(@Param("ew") Wrapper<BaoxiuxinxiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<BaoxiuxinxiEntity> wrapper);
   	

    List<Map<String, Object>> selectValue(Map<String, Object> params,Wrapper<BaoxiuxinxiEntity> wrapper);

    List<Map<String, Object>> selectTimeStatValue(Map<String, Object> params,Wrapper<BaoxiuxinxiEntity> wrapper);

    List<Map<String, Object>> selectGroup(Map<String, Object> params,Wrapper<BaoxiuxinxiEntity> wrapper);



}

