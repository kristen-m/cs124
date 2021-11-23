# Design Document
Kristen Mason & Hilary Nelson

#### Design Decisions & Alternative Designs Considered

We tried to make the design as similar as possible between the new task list view and the task view to provide the user with consistency throughout the app. However, we were careful to distinguish the pages enough so as to avoid confusion between the two (the task list view or the task view). We did this by keeping the same styling across both, and leaving the existing style for editing the item’s name, but changing the title at the top of the page and the coloring of tasks vs. task lists. We also decided that deleting a task list is more significant than deleting a task, and thus you can only delete one task list at a time, with the trash icon right on the right side of the task list.

#### Alternative Designs Considered

We discussed a variety of options for allowing users to switch between task lists before settling on our “homepage” style design. One option that we discussed was having no homepage but instead having tabs at the top of every task list that provided access to the other task lists. We eventually steered away from this design because we did not want to favor a certain task list by showing it first, and we worried about how to display all the task lists if a user had many task lists.


### User Testing

User 1 was a user completely new to the application (they had not tested it in previous labs). The user said that the app was very intuitive and had no issues figuring out how to do anything. The user did suggest that they would like the the tasks to start sorted by priority high-low, since most important tasks should be on the bottom, but quickly realized that they did not want to have new tasks come in at high priority or to be forced to establish a priority system at all, and decided that date created was preferable. The user also wanted the priority buttons to scale when they were shown the task list on different sized devices, but otherwise said that the application scaled appropriately.

User 2 was also new to the application and ran into an unfortunate bug with the deployment to github pages. Although the app was running smoothly locally for both of us, User 2 was unable to see the buttons on the single task list view page, and therefore could not add, sort, or delete tasks and also could not return to the home screen. The user did say that they expected there to be buttons at the top of the task list screen, which suggests that the buttons are placed to be expected (since they should’ve been there). We eventually figured out that there was something going amiss with the opacity setting for the buttons, even though it was set to 100% and the buttons were showing up locally.

#### Design Tasks and Accessibility Walkthrough

One of the key goals for this project was to design with accessibility in mind– making our app easily used by users with low vision, users who cannot use a mouse, and users who cannot see their screens at all (requiring screen readers.) 

Trying to retroactively make a webapp accessible turned out to be more of a 


#### Challenges Faced

We faced a lot of challenges when we updated the data we were storing in firebase. We originally tried to add the task data to each task list as a subcollection, which caused a lot of data accessing/updating issues. Eventually, we realized that we could just store the tasks as an array on the list collection and were much more successful with that approach.


#### Parts of Design We're Most Proud Of

We are most proud of the new home screen and the navigation between the home page (where all task lists are viewed) and the task list view page (where tasks of a specific task list are viewed). We chose to provide navigation between the pages with simple arrow buttons, which effectively communicate to the user that they can open or close a task list with just one click. 

