package com.personal.codebuddy;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class ApplicationController {
	@RequestMapping("/")
	public String index() {
		return "index";
	}
}
