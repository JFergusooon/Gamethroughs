package ferguson.jeffrey.walkthroughproject;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;

import org.springframework.beans.factory.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserRestController {
	
	@Autowired
	private UserRepository userRepo;
	
	@RequestMapping(path="/create/{username}/{password}/{authority}", method=RequestMethod.POST)
	public void createUser(@PathVariable String username,
							@PathVariable String password, 
							@PathVariable String authority) throws JsonParseException, JsonMappingException, IOException {
		User user = new User(username, passwordEncoder().encode(password), authority);
		userRepo.save(user);
	}
	
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
