package com.talkz.web.controller;

import java.io.File;
import java.io.IOException;

import com.talkz.init.util.PropertiesLoader;

public class MediaFileNameController {
	/**
	 * @param args
	 * @throws IOException 
	 */
	public static void main(String[] args) throws IOException {
		PropertiesLoader properties = new PropertiesLoader();  
		
		
		String loc = properties.getPropValues("resourceFolderPath");
		loc = loc + "Friends Complete Seasons 1-10 Uncut DVDRip - 480p"+"\\"+"Friends Season 10";
		
		File[] files = new File(loc).listFiles();
		
		
		for (File existingFile : files) {
			System.out.println(existingFile.getName());
		}
	}

}
