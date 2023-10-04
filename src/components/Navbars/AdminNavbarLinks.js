// Chakra Icons
import { BellIcon, SearchIcon } from "@chakra-ui/icons";
// Chakra Imports
import {
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
// Custom Icons
import { ProfileIcon, SettingsIcon } from "components/Icons/Icons";

// Custom Components
import { ItemContent } from "components/Menu/ItemContent";
import SidebarResponsive from "components/Sidebar/SidebarResponsive";
import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import routes from "routes.js";

export default function HeaderLinks(props) {
  const { variant, children, fixed, secondary, onOpen, ...rest } = props;

  // Chakra Color Mode
  let mainTeal = useColorModeValue("teal.300", "teal.300");
  let inputBg = useColorModeValue("white", "gray.800");
  let mainText = useColorModeValue("gray.700", "gray.200");
  let navbarIcon = useColorModeValue("gray.500", "gray.200");
  let searchIcon = useColorModeValue("gray.700", "gray.200");

  if (secondary) {
    navbarIcon = "white";
    mainText = "white";
  }
  const settingsRef = React.useRef();
  return (
    <Flex
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
      flexDirection="row"
    >
      <NavLink to="/home">
        <Button
          ms="0px"
          px="10px"
          me={{ sm: "2px", md: "16px" }}
          color={"black"}
          variant="transparent-with-icon"
          background={"white"}
          borderRadius={"5px"}
        >
          <Text display={{ sm: "none", md: "flex" }}>HOME</Text>
        </Button>
      </NavLink>
      <NavLink to="/about">
        <Button
          ms="0px"
          px="10px"
          me={{ sm: "2px", md: "16px" }}
          color={"black"}
          variant="transparent-with-icon"
          background={"white"}
          borderRadius={"5px"}
        >
          <Text display={{ sm: "none", md: "flex" }}>ABOUT</Text>
        </Button>
      </NavLink>
      <NavLink to="track">
        <Button
          ms="0px"
          px="10px"
          me={{ sm: "2px", md: "16px" }}
          color={"black"}
          variant="transparent-with-icon"
          background={"white"}
          borderRadius={"5px"}
        >
          <Text display={{ sm: "none", md: "flex" }}>TRACK</Text>
        </Button>
      </NavLink>
      <NavLink to="/contact">
        <Button
          ms="0px"
          px="10px"
          me={{ sm: "2px", md: "16px" }}
          color={"black"}
          variant="transparent-with-icon"
          background={"white"}
          borderRadius={"5px"}
        >
          <Text display={{ sm: "none", md: "flex" }}>CONTACT</Text>
        </Button>
      </NavLink>
      <NavLink to="/auth/signin">
        <Button
          ms="0px"
          px="0px"
          me={{ sm: "2px", md: "16px" }}
          color={navbarIcon}
          variant="transparent-with-icon"
          leftIcon={
            document.documentElement.dir ? (
              <SearchIcon
                color={"black"}
                w="40px"
                h="40px"
                // background={"white"}
                p={"10px"}
                borderRadius={"50%"}
              />
            ) : (
              ""
            )
          }
        >
          {/* <Text display={{ sm: "none", md: "flex" }}>Sign In</Text> */}
        </Button>
      </NavLink>
    </Flex>
  );
}

HeaderLinks.propTypes = {
  variant: PropTypes.string,
  fixed: PropTypes.bool,
  secondary: PropTypes.bool,
  onOpen: PropTypes.func,
};
