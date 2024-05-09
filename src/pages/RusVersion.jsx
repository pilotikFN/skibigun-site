import React from "react";
import { Link } from "react-router-dom";

import Main from "@components/Main";
import Slide from "@components/Slide";
import Form from "@components/Form";

import logo from "@assets/logo.png";

import skibishock from "@assets/skibishock-title.png";
import skibicos from "@assets/skibicos-title.png";
import skibidragon from "@assets/skibidragon-title.png";

import shockframe from "@assets/shock-frame.png";
import cosframe from "@assets/cos-frame.png";
import dragonframe from "@assets/dragon-frame.png";

import _1 from "@assets/slides/1.png";
import _2 from "@assets/slides/2.png";
import _3 from "@assets/slides/3.png";
import _4 from "@assets/slides/4.png";
import _5 from "@assets/slides/rus/5.png";
import _6 from "@assets/slides/6.png";
import _7 from "@assets/slides/7.png";

import Section from "@/components/Section";
import HeadingFrame from "@/components/UI/HeadingFrame";
import IntroText from "@/components/UI/IntroText";
import ShockSword from "@/components/UI/ShockSword";
import DescriptionFrame from "@/components/UI/DescriptionFrame";
import CosSword from "@/components/UI/CosSword";
import DragonSword from "@/components/UI/DragonSword";
import CopyrightText from "@/components/UI/CopyrightText";

const RusVersion = () => {
  return (
    <Main>
      <Section image={_1}>
        <img src={logo} alt={"logo"} width={"100%"} />
        <HeadingFrame
          style={{
            transform: "translateY(-7.5%)",
          }}
        >
          Стань сильнее со SKIBIGAN
          <br />
          Стань избранным
        </HeadingFrame>
        <IntroText>
          Три светящихся SKIBIGUN заряжены мощной
          <br />
          силой. Только в руках избранного война
          <br />
          SKIBIGUN раскроют свою силу
          <br />и помогут спасти мир от Скибидистов.
        </IntroText>
      </Section>
      <Slide image={_2}>
        <ShockSword />
        <DescriptionFrame x={39} y={7} width={56} frame={shockframe}>
          <img src={skibishock} alt={"SKIBISHOCK"} width={"58%"} />
          <p>
            ударь током своих врагов.
            <br />
            Сила тысячи молний спрятана
            <br />
            в этом SKIBIGUN.
            <br />
            SKIBISHOCK может перехватывать
            <br />
            энергию молний и заряжать ими своё
            <br />
            лезвие. SKIBISHOCK осветит
            <br />
            самый темный и опасный путь.
          </p>
        </DescriptionFrame>
      </Slide>
      <Slide image={_3} zIndex={1}>
        <CosSword />
        <DescriptionFrame x={5} y={7} width={61} frame={cosframe}>
          <img src={skibicos} alt={"SKIBICOS"} width={"54%"} />
          <p>
            энергия космоса и звёзд в
            <br />
            твоих руках. Самый таинственный
            <br />
            SKIBIGUN, который может исцелять.
            <br />
            SKIBICOS способен извлекать силу из
            <br />
            звезд преобразуя её в космическое
            <br />
            излучение. С помощью него
            <br />
            SKIBICOSMICA должна
            <br />
            спасти свою планету.
          </p>
        </DescriptionFrame>
      </Slide>
      <Slide image={_4}>
        <DragonSword />
        <DescriptionFrame x={35} y={3} width={61} frame={dragonframe}>
          <img src={skibidragon} alt={"SKIBIGUN"} width={"55%"} />
          <p>
            сожги всё на своём пути.
            <br />
            SKIBIDRAGON способен поглощать
            <br />
            тёмные силы зла, пряча их в своём
            <br />
            раскалённом лезвии. Но тот, кто
            <br />
            осмелвается использовать его слишком
            <br />
            часто, рискует поглотить сам себя тьмой.
            <br />
            обрети единение со стихией огня и союз с
            <br />
            духом дракона.
          </p>
        </DescriptionFrame>
      </Slide>
      <Slide image={_5} />
      <Slide image={_6}>
        <Form lang={"ru"} />
      </Slide>
      <Section image={_7}>
        <HeadingFrame glare={false}>
          Стань избранным
          <br />
          Выбери свой SKIBIGUN
        </HeadingFrame>
        <CopyrightText>
          Copyright 2024 SKIBIGUN
          <br />
          Все права защищены | <Link to={"#"}>
            Политика конфиденциальности
          </Link>{" "}
          | <Link to={"#"}>Условия использования</Link>
        </CopyrightText>
      </Section>
    </Main>
  );
};

export default RusVersion;
