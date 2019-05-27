package com.project.doodle.repositories;

import com.project.doodle.models.Poll;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PollRepository extends JpaRepository<Poll, Long> {
    Optional<Poll> findBySlug(String slug);
    Optional<Poll> findBySlugAdmin(String slugAdmin);
}
