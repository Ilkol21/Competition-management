package com.example.competitionservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompetitionService {

  @Autowired
  private CompetitionRepository competitionRepository;

  public List<Competition> getAllCompetitions() {
    return competitionRepository.findAll();
  }

  public Competition addCompetition(Competition competition) {
    return competitionRepository.save(competition);
  }

  public void deleteCompetition(Long id) {
    competitionRepository.deleteById(id);
  }
}
