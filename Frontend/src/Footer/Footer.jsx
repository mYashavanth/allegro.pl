import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box>
      <Box
        display={"grid"}
        gridTemplateColumns={{
          base: "1fr",
          md: "1fr 1fr",
          lg: "1fr 1fr 1fr 1fr",
          xl: "1fr 1fr 1fr 1fr",
        }}
        gap={"11rem"}
        p={5}
        w={"95%"}
        m={"auto"}
      >
        <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
          <Heading size={"md"} mb={"1rem"}>
            Help center
          </Heading>
          <Text>Help Center</Text>
          <Text>Updates</Text>
          <Text>Ask the Community</Text>
          <Text>For Sellers</Text>
          <Text>Sell on Allegro</Text>
          <Text>Returns Policy</Text>
          <Text>Social media privacy policy</Text>
          <Text>Cookie Policy</Text>
          <Text>Cookie settings</Text>
          <Text>Terms & Conditions</Text>
          <Text>Location Sharing </Text>
          <Text>Security</Text>
          <Text>International sales</Text>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
          <Heading size={"md"} mb={"1rem"}>
            Services
          </Heading>
          <Text>Allegro Protect</Text>
          <Text>Allegro Academy</Text>
          <Text>Allegro Analytics</Text>
          <Text>Allegro Business</Text>
          <Text>Allegro Lokalnie</Text>
          <Text>Allegro One</Text>
          <Text>Allegro One Fulfillment</Text>
          <Text>Allegro Pay Business</Text>
          <Text>Allegro Smart!</Text>
          <Text>Allegro Archive</Text>
          <Text>Allegro Gift Cards</Text>
          <Text>Allegro Coins</Text>
          <Text>Brands Zone</Text>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
          <Heading size={"md"} mb={"1rem"}>
            Allegro
          </Heading>
          <Text>About Allegro</Text>
          <Text>Allegro Share</Text>
          <Text>Advertisement</Text>
          <Text>Allegro Ads</Text>
          <Text>Allegro API</Text>
          <Text>Careers at Allegro</Text>
          <Text>Sustainable development</Text>
          <Text>Information about Digital Services Act</Text>
        </Box>
        <Box>
          <Heading size={"md"} mb={"1rem"}>
            Location settings
          </Heading>
          <Text>
            Country <span style={{ fontWeight: "bold" }}>Poland</span>
          </Text>
          <Text>
            Delivery to <span style={{ fontWeight: "bold" }}>Poland</span>
          </Text>
          <Text>
            Language <span style={{ fontWeight: "bold" }}>English</span>
          </Text>
          <Text>
            Currency <span style={{ fontWeight: "bold" }}>PLN</span>
          </Text>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "column", lg: "row", xl: "row" }}
        gap={"1rem"}
        p={5}
        w={"95%"}
        m={"auto"}
      >
        <Box
          display={"flex"}
          flexDirection={{ base: "column", md: "row", lg: "row", xl: "row" }}
          gap={"1rem"}
        >
          <Image
            src="https://a.allegroimg.com/original/3404c0/bbff14964e93b8d2824e72021db9/information-social-appstore-en-97861d804c"
            alt="app store"
            w={"8.5rem"}
          />
          <Image
            src="https://a.allegroimg.com/original/34b8f3/19aa1fda483098be2405db8c0471/information-social-playstore-en-eed18fe840"
            alt="google play"
            w={"8.5rem"}
          />
          <Image
            src="https://a.allegroimg.com/original/3454f5/fac230134cd081cd48f4c90b0046/information-social-appgallery-en-299810a4d6"
            alt="app gallery"
            w={"8.5rem"}
          />
        </Box>
        <Box display={"flex"} gap={"1rem"}>
          <Image
            src="https://a.allegroimg.com/original/346332/47549ea444eba9db98fe50d3f374/information-social-facebook-1b4340531f"
            alt="fb"
          />
          <Image
            src="https://a.allegroimg.com/original/3459af/66391f584f7f81301cdb5e9bed95/information-social-linkedin-8f60937a9f"
            alt="linked in"
          />
          <Image
            src="https://a.allegroimg.com/original/343990/1013fd614aec8c723851021fd8b6/information-social-instagram-c5df47cc57"
            alt="insta"
          />
          <Image
            src="https://a.allegroimg.com/original/3417c7/9a0a044744ce99ab9b915006118b/information-social-pinterest-a224b1e154"
            alt="pin"
          />
          <Image
            src="https://a.allegroimg.com/original/34c133/bfb946b14a3c97d6f668aedaf2f9/information-social-youtube-314653d2bb"
            alt="youtube"
          />
        </Box>
      </Box>
      <Center
        backgroundColor={"#3A4E58"}
        p={"1.5rem"}
        display={"flex"}
        justifyContent={"space-between"}
        color={"white"}
      >
        <Text>
          By using the platform, you accept the{" "}
          <span style={{ color: "teal" }}>Terms & Conditions</span>
        </Text>
        <Image
          src="https://a.allegroimg.com/original/343297/28c4320247179d1326a0c73a423e/logo-allegro-bcec72b532"
          alt="logo"
        />
      </Center>
    </Box>
  );
};

export default Footer;
