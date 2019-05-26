package com.project.doodle.models;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String username;
    private String first_name;
    private String last_name;
    private String email;

    @CreationTimestamp
    private Date createdAt;

    @OneToMany(mappedBy = "users")
    List<Choice> userChoices;

    @ManyToMany(mappedBy = "pollUsers")
    List<Poll> userPolls;

    public User(){}

    public User(String username, String first_name, String last_name, String email, List<Choice> userChoices, List<Poll> userPolls) {
        this.username = username;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.userChoices = userChoices;
        this.userPolls = userPolls;
    }

    public void addPoll(Poll poll){
        this.userPolls.add(poll);
    }

    public void addChoice(Choice choice){
        this.userChoices.add(choice);
    }

    public void removePoll(Poll poll){
        this.userPolls.remove(poll);
    }

    public void removeChoice(Choice choice){
        this.userChoices.remove(choice);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public List<Choice> getUserChoices() {
        return userChoices;
    }

    public void setUserChoices(List<Choice> userChoices) {
        this.userChoices = userChoices;
    }

    public List<Poll> getUserPolls() {
        return userPolls;
    }

    public void setUserPolls(List<Poll> userPolls) {
        this.userPolls = userPolls;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", email='" + email + '\'' +
                ", created_at=" + createdAt +
                '}';
    }
}
