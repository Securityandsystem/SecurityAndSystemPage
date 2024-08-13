"use client";
import styles from "./SectionThree.module.css";
import web1 from "./../../../public/project_1.png";
import web2 from "./../../../public/project_2.png";
import web3 from "./../../../public/project_3.png";
import web4 from "./../../../public/project_4.png";

import Image from "next/image";
import { poppins } from "@/Fonts/fonts";
const SectionThree = () => {
  const imageCarrucel = [web1, web2, web3, web4];

  const copyImageCarrucel = [
    ...imageCarrucel,
    ...imageCarrucel,
    ...imageCarrucel,
  ];

  return (
    <div className={styles.containerSectionThree}>
      <div className={styles.containerCarrucel}>
        {copyImageCarrucel.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={450}
            height={"auto"}
            alt="imagen proyecto"
          ></Image>
        ))}
      </div>
      <div
        className={styles.containerCarrucel}
        style={{ flexDirection: "column-reverse" }}
      >
        {copyImageCarrucel.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={450}
            height={"auto"}
            alt="imagen proyecto"
          ></Image>
        ))}
      </div>
      <div className={styles.containerCarrucel}>
        {copyImageCarrucel.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={450}
            height={"auto"}
            alt="imagen proyecto"
          ></Image>
        ))}
      </div>
      <div className={styles.containerText}>
        <div className={styles.title}>
          <h2 className={poppins.className}>Nuestros Proyectos</h2>
          <p className={poppins.className}>
            Explora nuestros proyectos realizados y descubre cómo hemos ayudado
            a nuestros clientes a alcanzar sus objetivos en línea.
          </p>
          <button className={poppins.className}>Ver Proyectos</button>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
