# node-basics

# event Loops

event loops contain 4 sequences.
event loop stack is set of 4x block sets

![image](https://user-images.githubusercontent.com/75485255/188318113-e3f76580-6e9d-4287-beab-515adea45cbe.png)

# How to Libuv stack work

![image](https://user-images.githubusercontent.com/75485255/188318840-a5f9dcdc-115d-4b4a-8d67-e643d83db48a.png)

![image](https://user-images.githubusercontent.com/75485255/188318934-e069d13e-2f8e-4aca-a2d3-eece7dea0ec2.png)

event loop first execute os stack (first priority)
then its goes to Libuv and execute call back functions

