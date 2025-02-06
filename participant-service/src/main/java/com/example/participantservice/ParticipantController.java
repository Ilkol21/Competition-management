package com.example.participantservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/participants")
public class ParticipantController {

  @Autowired
  private ParticipantService participantService;

  @GetMapping
  public List<Participant> getAllParticipants() {
    return participantService.getAllParticipants();
  }

  @PostMapping
  public Participant addParticipant(@RequestBody Participant participant) {
    return participantService.addParticipant(participant);
  }

  @DeleteMapping("/{id}")
  public void deleteParticipant(@PathVariable Long id) {
    participantService.deleteParticipant(id);
  }
}
