package ferguson.jeffrey.walkthroughproject;

import java.io.IOException;
import java.util.*;

import javax.annotation.PostConstruct;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.*;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.configuration.*;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{
    

    public static final String AUTH_USER = "USER";
	
	public static final String AUTH_ADMIN = "ADMIN";
	
	private Map<String, User> users = new HashMap<>();
	
	@Autowired
	private UserRepository userRepo;
	
	@PostConstruct
	private void initUsers() throws JsonParseException, JsonMappingException, IOException {
		userRepo.loadAll(users);
		users.put("admin", new User("admin",  passwordEncoder().encode("password"), AUTH_ADMIN));
		users.put("user", new User("user", passwordEncoder().encode("password"),  AUTH_USER));
		System.out.println("USERS: " + users.toString());
	}
	
	@Bean
	public UserDetailsService userDetailsService() {
		return new UserDetailsService() {
			
			@Override
			public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
				return users.get(username);
			}
		};
	}

    @Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
				.antMatchers("/fantasy/people/", "/fantasy/planets/", "/fantasy/series/", "/fantasy/species/")
				.permitAll()
				.antMatchers("/user/").permitAll()
				.and()
				.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
				.and()
				.csrf().disable()
				.httpBasic();
    }
    
    public static void validateAuthorityExists(String authority) {
		if(!AUTH_ADMIN.equals(authority) && !AUTH_USER.equals(authority)) {
			throw new NoSuchAuthorityException(); //MATCH to 400 RESPONSE CODE
		}
		
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
