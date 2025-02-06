package com.example.participantservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParticipantService {

  @Autowired
  private ParticipantRepository participantRepository;

  public List<Participant> getAllParticipants() {
    return participantRepository.findAll();
  }

  public Participant addParticipant(Participant participant) {
    return participantRepository.save(participant);
  }

  public void deleteParticipant(Long id) {
    participantRepository.deleteById(id);
  }
}
