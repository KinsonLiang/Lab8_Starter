# Lab 8 - Starter

**Jiancheng Liang no teammate**


1. Option 1 is correct as it will ensure that any code that is pushed will have to go through some quality checks so that the code is working before moving onto the next part of development. Manually running tests would work, but would be inefficient and a perfect task for automation libraries like Jest to do.

2. No, we should use a unit test for it. Unit tests can ensure the individual components and functions can be returning the correct values.

3. No, unit tests can only determine whether a particular output of that function is correct. With E2E style tests, messaging functions can be better tested because conveying a message to another user involves multiple steps. These steps can include getting the right user, sending and receiving the right message, and so on.

4. Yes, this feature has only one part, message length, which can be easily verified by checking for strings containing messages of length 80 or less.
