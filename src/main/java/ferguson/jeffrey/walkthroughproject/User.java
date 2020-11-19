package ferguson.jeffrey.walkthroughproject;

import java.util.*;
import java.util.stream.Collectors;

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class User implements UserDetails {
    private static final long serialVersionUID = 1L;
	private String username;
	
	private String password;
	 
	private List<String> authorities = new ArrayList<>();
	
	public User() {}
	
	public User(String username, String password, String...authorities) {
		this.setUsername(username);
		this.setPassword(password);
		this.authorities.addAll(Arrays.asList(authorities));
	}
	
	public void setUsername(String username) {
		this.username = username;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setAuthorities(List<String> authorities) {
		this.authorities = authorities;
	}

	@Override
	@JsonIgnore
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return this.authorities.stream()
				.map(s -> new GrantedAuthority() {

					private static final long serialVersionUID = 1L;

					@Override
					public String getAuthority() {
						return s;
					}
				})
				.collect(Collectors.toList());
	}

	
	public List<String> getAuthoritiesAsStrings() {
		return this.authorities;
	}
	
	@Override
	public String getPassword() {
		return this.password;
	}

	@Override
	public String getUsername() {
		return this.username;
	}

	@Override
	@JsonIgnore
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	@JsonIgnore
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	@JsonIgnore
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	@JsonIgnore
	public boolean isEnabled() {
		return true;
	}
	
	@Override
	public String toString() {
		return "\nUser: ["
				+ "\nusername: " + getUsername()
				+ "\npassword: " + getPassword()
				+ "\nauthority: " + getAuthoritiesAsStrings()
				+ "\n]\n";
	}
}