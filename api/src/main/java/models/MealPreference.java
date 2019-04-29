package models;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@ToString
@NoArgsConstructor
public class MealPreference implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", updatable = false, nullable = false)
    private long id;
    private String text;

    public MealPreference(String text) {
        this.text = text;
    }
}