package ferguson.jeffrey.walkthroughproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class WalkthroughProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(WalkthroughProjectApplication.class, args);
	}

	@Bean
	public UserRepository userRepo() {
		return new UserRepository();
	}

}
