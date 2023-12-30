# Code Buddy

Java Spring application that allows peers to conduct mock coding interviews amongst each other either through a preset of selected questions or their own questions.

# Table of Content
1. [Plans for the Future](#plans-for-the-future)
2. [Why did I create this project](#why-did-i-create-this-project?)
3. [Running the application](#running-the-application)
4. [Tools and languages used in this project](#tools-and-languages-used-in-this-project)

# Plans for the Future
- Implement a Peer-to-Peer architecture to allow low latency amongst individuals.
- Implement a CRDT data type model inside the P2P architecture to allow for real time code editing.
- Choose RSocket for request-response model to allow for constant streaming amongst individuals.

# Why did I create this project?
I created this project because I wanted to practice mock coding interviews with a friend in a real life interview scenario without having to pay the premium for a platform.
This was also a great opportunity for me to push my limits as I knew nothing about distributed programming and peer-to-peer software design. 

# Running the application
1. Fork the repository
2. Clone the repository onto your desktop
3. If you are using Eclipse, run the program through the IDE.  
   If you are using VSCode, install the Spring support from the market and run the app.

# Tools and languages used in this project
- [Java Spring framework](https://spring.io/)
- [Spring Initialzr](https://start.spring.io/)
- [ReactJS](https://react.dev/)
- [Monaco Editor](https://microsoft.github.io/monaco-editor/)
