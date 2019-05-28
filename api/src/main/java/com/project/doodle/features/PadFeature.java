package com.project.doodle.features;

import net.gjerull.etherpad.client.EPLiteClient;

import static com.project.doodle.Utils.generateSlug;

public class PadFeature {

    private EPLiteClient client;
    private String padId = generateSlug(6);
    private String padUrl = "http://localhost:9001/";
    private static final String apikey = "00d4bfe69d0cb2bb7c3a3491500d31a89d39335a4c18cc89670b3c6f849c901c";

    public PadFeature() {
        this.client = new EPLiteClient(padUrl, apikey);
        this.client.createPad(padId);
    }

    public void createAuthor(String auth){
        this.client.createAuthor(auth);
    }

    public String getPadUrl(){
        return this.padUrl + "p/"+ this.padId;
    }

    public void deletePad(){
        this.client.deletePad(this.padId);
    }

    public void addUser(String user) {
        String str = client.getText(padId).get("text").toString();
        final String substring = "Give your ideas here :\n";
        int index = str.indexOf(substring);
        if (index == -1) {
            str = substring;
            index = 0;
        }
        index += substring.length();
        String begin = str.substring(0, index);
        String end = str.substring(index);
        str = begin + user + "\n" + end;
        client.setText(padId, str);
    }

    @Override
    public String toString(){
        return getPadUrl();
    }
}