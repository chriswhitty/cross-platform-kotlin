package crossplatform.example

import kotlin.test.assertTrue


class CrossPlatformTest {


    @Test
    fun trueShouldAlwaysBeTrue() {
        val crossPlatform = CrossPlatform()

        assertTrue(crossPlatform.getTrue())
    }

}