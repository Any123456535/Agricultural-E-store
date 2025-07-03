package com.agricart.service;

import com.agricart.model.Home;
import com.agricart.model.HomeCategory;

import java.util.List;

public interface HomeService {

    Home creatHomePageData(List<HomeCategory> categories);

}
