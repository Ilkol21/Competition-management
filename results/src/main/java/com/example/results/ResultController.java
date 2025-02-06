package com.example.results;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/results")
public class ResultController {

  @Autowired
  private ResultService resultService;

  @GetMapping
  public List<Result> getAllResults() {
    return resultService.getAllResults();
  }

  @PostMapping
  public Result addResult(@RequestBody Result result) {
    return resultService.addResult(result);
  }

  @DeleteMapping("/{id}")
  public void deleteResult(@PathVariable Long id) {
    resultService.deleteResult(id);
  }
}
