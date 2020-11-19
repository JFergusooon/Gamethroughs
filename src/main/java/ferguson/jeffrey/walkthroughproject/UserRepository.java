package ferguson.jeffrey.walkthroughproject;

import java.io.*;
import java.util.*;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.*;

public class UserRepository {
    private File file = new File("user.json");
	
	private ObjectMapper objectMapper = new ObjectMapper();
	
	public void loadAll(Map<String, User> users) throws JsonParseException, JsonMappingException, IOException {
		if(!file.exists()) {
			return;
		}
		UserList userList = findAll();
		for(User u : userList) {
			users.put(u.getUsername(), u);
		}
	}
	
	public void save(User user) throws JsonParseException, JsonMappingException, IOException {
		if(!file.exists()) {
			System.out.println("file does not exist.");
		}
		UserList userList = findAll();
		userList.add(user);
		objectMapper.writeValue(file, userList);
	}
	
	public UserList findAll() throws JsonParseException, JsonMappingException, IOException {
		if(!file.exists()) {
			return new UserList();
		}
		UserList users = objectMapper.readValue(file, UserList.class);
		return users;
	}
	
	public void addAuthority(User user, String authority) throws JsonGenerationException, JsonMappingException, IOException {
		UserList users = findAll();
		for (User u : users) {
			if (u.getUsername().equals(user.getUsername())) {
				System.out.println(u.getUsername() + ", " + user.getUsername());
					List<String> temp = u.getAuthoritiesAsStrings();
					temp.add(authority);
					u.setAuthorities(temp);
				}
			}
		objectMapper.writeValue(file, users);
	}
	
	public User findOne(String username) throws JsonParseException, JsonMappingException, IOException {
		return findAll().stream().filter(e -> e.getUsername().equals(username)).findFirst().orElse(null);
	}
	
	public static class UserList extends ArrayList<User> {
		
		private static final long serialVersionUID = 1L;
	}
}
