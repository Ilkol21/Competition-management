package com.example.results;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Result {
  @Id
  private Long id;
  private Long competitionId;
  private Long participantId;
  private int score;

  public Result() {
  }

  public Result(Long id, Long competitionId, Long participantId, int score) {
    this.id = id;
    this.competitionId = competitionId;
    this.participantId = participantId;
    this.score = score;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Long getCompetitionId() {
    return competitionId;
  }

  public void setCompetitionId(Long competitionId) {
    this.competitionId = competitionId;
  }

  public Long getParticipantId() {
    return participantId;
  }

  public void setParticipantId(Long participantId) {
    this.participantId = participantId;
  }

  public int getScore() {
    return score;
  }

  public void setScore(int score) {
    this.score = score;
  }


}
