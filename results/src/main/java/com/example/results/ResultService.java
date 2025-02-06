package com.example.results;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResultService {

  @Autowired
  private ResultRepository resultRepository;

  public List<Result> getAllResults() {
    return resultRepository.findAll();
  }

  public Result addResult(Result result) {
    return resultRepository.save(result);
  }

  public void deleteResult(Long id) {
    resultRepository.deleteById(id);
  }
}
