Example of running and testing Kotlin on both JavaScript and the JVM using Kotlin mutlti platform support


### Running
Running `./gradlew build` will run the tests in the common project for both JVM and Javascript


### Platform Specific Declarations
Examples of platform specific code can be found in `PlatformSpecific.kt`, `JsPlatformSpecific.kt` and `JvmPlatformSpecific.kt`.
Changing the values returned by one of the methods in these files will cause the tests to fail on only that specific platform.

### Intellij
At the time of writing, intellij support for multi platform support is still an early access preview, you will need 
to enable downloading prerelease versions of the plugin like so:
`Tools -> Kotlin -> Configure Kotlin Plugin Updates -> Early Access Preview 1.2` 