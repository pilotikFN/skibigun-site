import React from "react";

import Main from "@components/Main";
import Slide from "@components/Slide";
import Form from "@components/Form";

import logo from "@assets/logo.png";

import skibishock from "@assets/skibishock-title.png";
import skibicos from "@assets/skibicos-title.png";
import skibidragon from "@assets/skibidragon-title.png";

import shockframe from "@assets/shock-frame.png"
import cosframe from "@assets/cos-frame.png"
import dragonframe from "@assets/dragon-frame.png"

import _1 from "@assets/slides/1.png";
import _2 from "@assets/slides/2.png";
import _3 from "@assets/slides/3.png";
import _4 from "@assets/slides/4.png";
import _5 from "@assets/slides/eng/5.png";
import _6 from "@assets/slides/6.png";
import HeadingFrame from "@/components/UI/HeadingFrame";
import IntroText from "@/components/UI/IntroText";
import Section from "@/components/Section";
import ShockSword from "@/components/UI/ShockSword";
import CosSword from "@/components/UI/CosSword";
import DragonSword from "@/components/UI/DragonSword";
import DragonFrame from "@/components/UI/DragonFrame";
import Adventages from "@/components/Advantages";
import DescriptionFrame from "@/components/UI/DescriptionFrame";

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
               powerful power. Only in the hands of chosen
               <br />
               one will the SKIBIGUN warriors reveal their
               <br />
               power and help save the world from the Skibidists.
            </IntroText>
         </Section>
         <Slide image={_2}>
            <ShockSword />
            <DescriptionFrame x={39} y={7} width={56} frame={shockframe}>
               <img src={skibishock} alt={"SKIBISHOCK"} width={"58%"} />
               <p>
                  shok your enemies.
                  <br />
                  The power of a thousand lightning
                  <br />
                  bolts is hidden in this skibigun.
                  <br />
                  SKIBISHOCK can intercept lightning
                  <br />
                  energy and change its blade with in.
                  <br />
                  SKIBISHOCK will illuminate
                  <br />
                  the darkestand most
                  <br />
                  dangerous path.
               </p>
            </DescriptionFrame>
         </Slide>
         <Slide image={_3} zIndex={1}>
            <CosSword />
            <DescriptionFrame x={5} y={7} width={61} frame={cosframe}>
               <img src={skibicos} alt={"SKIBICOS"} width={"54%"} />
               <p>
                  the energy of space and stars
                  <br />
                  is in your hands. The most mysterious
                  <br />
                  SKIBIGUN that can heal. SKIBICOS
                  <br />
                  is capable of extracting power from stars,
                  <br />
                  converting it into cosmic radiation.
                  <br />
                  With this help SKIBICOSMICA
                  <br />
                  must save her planet
               </p>
            </DescriptionFrame>
         </Slide>
         <Slide image={_4}>
            <DragonSword />
            <DescriptionFrame x={35} y={3} width={61} frame={dragonframe}>
               <img src={skibidragon} alt={"SKIBIGUN"} width={"55%"} />
               <p>
                  burn everything in your path.
                  <br />
                  SKIBIDRAGON is able to absorb the dark
                  <br />
                  forces of evil by hiding them in his
                  <br />
                  red-hot blade. But those who dare to it
                  <br />
                  too often risk consuming themselves in
                  <br />
                  darkness. Find uniyi with the element
                  <br />
                  of fire and union with the
                  <br />
                  spirit of the dragon
               </p>
            </DescriptionFrame>
         </Slide>
         <Slide image={_5}>
            <Adventages />
         </Slide>
         <Slide image={_6}>
            <Form lang={"en"} />
         </Slide>
      </Main>
   );
};

export default EngVersion;
