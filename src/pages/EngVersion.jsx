import React from "react";
import { Link } from "react-router-dom";

import Main from "@components/Main";
import Slide from "@components/Slide";
import Form from "@components/Form";

import logo from "@assets/logo.png";

import shockframe from "@assets/slides/eng/skibishock-frame.png";
import cosframe from "@assets/slides/eng/skibicos-frame.png";
import dragonframe from "@assets/slides/eng/skibidragon-frame.png";

import _1 from "@assets/slides/1.png";
import _2 from "@assets/slides/2.png";
import _3 from "@assets/slides/3.png";
import _4 from "@assets/slides/4.png";
import _5 from "@assets/slides/eng/5.png";
import _6 from "@assets/slides/6.png";
import _7 from "@assets/slides/7.png";

import HeadingFrame from "@/components/UI/HeadingFrame";
import IntroText from "@/components/UI/IntroText";
import Section from "@/components/Section";
import ShockSword from "@/components/UI/ShockSword";
import CosSword from "@/components/UI/CosSword";
import DragonSword from "@/components/UI/DragonSword";
import DescriptionFrame from "@/components/UI/DescriptionFrame";
import CopyrightText from "@/components/UI/CopyrightText";

const EngVersion = () => {
   return (
      <Main>
         <Section image={_1}>
            <img src={logo} alt={"logo"} width={"100%"} />
            <HeadingFrame
               style={{
                  transform: "translateY(-7.5%)",
               }}
            >
               Become stronger with SKIBIGUN
               <br />
               Become the chosen one
            </HeadingFrame>
            <IntroText>
               Three glowing SKIBIGUNS are charged with
               <br />
               powerful force. Only in the hands of the chosen
               <br />
               one will the SKIBIGUN weapons reveal their
               <br />
               power and help save the world from the Skibidists.
            </IntroText>
         </Section>
         <Slide image={_2}>
            <ShockSword />
            <DescriptionFrame x={37} y={7} width={58} frame={shockframe} />
         </Slide>
         <Slide image={_3} zIndex={1}>
            <CosSword />
            <DescriptionFrame x={5} y={7} width={58} frame={cosframe} />
         </Slide>
         <Slide image={_4}>
            <DragonSword />
            <DescriptionFrame x={37} y={3} width={58} frame={dragonframe} />
         </Slide>
         <Slide image={_5} />
         <Slide image={_6}>
            <Form lang={"en"} />
         </Slide>
         <Section image={_7}>
            <HeadingFrame
               glare={false}
               gradient={
                  "linear-gradient(0deg, rgb(204 132 75) 0%, rgb(235, 206, 134) 19%, rgb(245, 231, 189) 54%, rgb(235, 204, 140) 81%, rgb(186 113 46) 100%) text"
               }
               style={{ marginTop: "3%" }}
            >
               Become the chosen one
               <br />
               Choose your SKIBIGUN
            </HeadingFrame>
            <CopyrightText>
               Copyright 2024 SKIBIGUN
               <br />
               All rights reserved |{" "}
               <a href={"/en/privacypolicy/"}>Privacy Policy</a> |{" "}
               <a href={"/en/termsofuse/"}>Terms of use</a>
            </CopyrightText>
         </Section>
      </Main>
   );
};

export default EngVersion;
