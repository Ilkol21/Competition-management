package com.example.competitionservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/competitions")
public class CompetitionController {

  @Autowired
  private CompetitionService competitionService;

  @GetMapping
  public List<Competition> getAllCompetitions() {
    return competitionService.getAllCompetitions();
  }

  @PostMapping
  public Competition addCompetition(@RequestBody Competition competition) {

    System.out.println("hi");
    return competitionService.addCompetition(competition);
  }

  @DeleteMapping("/{id}")
  public void deleteCompetition(@PathVariable Long id) {
    competitionService.deleteCompetition(id);
  }
}
