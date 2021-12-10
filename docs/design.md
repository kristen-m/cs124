# Design Document
Kristen Mason & Hilary Nelson

#### Design Decisions & Alternative Designs Considered

Because our web app has from the start been designed with a mobile layout in mind, we found it very straightforward to preserve our previous design decisions from labs 1-5 while working on Lab 6. The Moto G4 layout was very similar to the simulated Apple device layouts in terms of dimensions, so we found ourselves really only having to make superficial changes to the CSS in order to make all of our task item elements appear on the screen as they had in our web app. Other than that, our React Native version of the app appears nearly identical to the version of the app we published for Lab 5– which was our goal.

### User Testing

The user who tested our iOS app had previously tested the web app, and so they were already familiar with the design. They said that the iOS app was very clear and intuitive, and did not have any feedback.

#### Challenges Faced

Having never worked with XCode prior to this attempt to port our app over to React Native, we found ourselves struggling while getting the app to run on XCode’s simulator. We also ran into several design issues with the CSS that came up during the port, with our task list items being awkwardly sized on the screen and also had to adjust the css in order to fit the tasks on the iPhone screen.

#### Parts of Design We're Most Proud Of

Again, as the design is nearly identical to our layout from Lab 5, we’re still very proud of the design choices that we have made in the process of designing this app. Specific to this challenge, we were actually very proud of ourselves for figuring out how to port a React app over to React Native– it was something that neither of us were familiar with, and React Native was a completely new language for us. Outside of the accomplishment of learning how to accomplish the assignment, we remain proud of our OAuth login capabilities with Google and Facebook (which honestly look even more at home as buttons on a Native app than they did on our web app) We are still quite proud of our feature that allows users to text their task lists to their phone via SMS, however we worry that by introducing this feature on the React Native app it may become redundant, as the purpose of enabling SMS sharing was so that users could access the task list off of the web app while on their phones, and the new React Native app allows users to access their task lists within the app interface much more easily than the web app did.
