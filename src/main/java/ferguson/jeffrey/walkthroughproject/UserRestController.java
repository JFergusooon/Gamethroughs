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
	
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(path="/create/{username}/{password}/{authorityList}", method=RequestMethod.POST)
	public void createUser(@PathVariable String username,
							@PathVariable String password, 
							@PathVariable String authorityList) throws JsonParseException, JsonMappingException, IOException {
		String[] authorities = authorityList.split("&");
		User user = new User(username, passwordEncoder().encode(password), authorities);
		userRepo.save(user);
	}
	
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(path = "/grant/{username}/{authority}" ,method= RequestMethod.POST)
	public void grantAuthority(@PathVariable String username,@PathVariable  String authority) throws JsonParseException, JsonMappingException, IOException {
		User u = userRepo.findOne(username);
		System.out.println("Username found : " + u.getUsername() + "\nUpdating Authorities...");
		SecurityConfiguration.validateAuthorityExists(authority);
		userRepo.addAuthority(u, authority);
		System.out.println("Authority Added to User.");
	}
	
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
