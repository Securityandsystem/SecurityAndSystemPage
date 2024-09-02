"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";
import logoSAS from "../../../public/logoSAS.png";
import logoSAS_Mobile from "../../../public/logo_mobile.png";
import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { CiHome } from "react-icons/ci";
import { GrServices } from "react-icons/gr";
import { PiUsersThreeLight } from "react-icons/pi";
import { GrProjects } from "react-icons/gr";
import { poppins } from "@/Fonts/fonts";
import gsap from "gsap";
import Link from "next/link";

const NavBar = () => {
  const navBarAnimate = useRef(null);

  const [showMenu, setShowMenu] = useState(false);
  const [showMenuServices, setShowMenuServices] = useState(false);

  //Animaciones GSAP
  useEffect(() => {
    gsap.set(navBarAnimate.current, {
      y: 100,
      opacity: 0,
      visibility: "hidden",
    });
    gsap.to(navBarAnimate.current, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "back.inOut",
      stagger: 0.5,
      visibility: "visible",
    });
  }, []);

  return (
    <div className={styles.containerNav} ref={navBarAnimate}>
      <div className={styles.nav}>
        <div className={styles.start}>
          <Link href="/">
            <Image
              src={logoSAS}
              alt="Logo de la empresa Security And System"
              className={styles.LogoNav}
              width={40}
              height={"auto"}
            />

            <Image
              src={logoSAS_Mobile}
              alt="Logo de la empresa Security And System"
              className={styles.LogoNavMobile}
              width={150}
              height={"auto"}
            />
          </Link>
        </div>
        <div className={`${styles.center} ${showMenu ? styles.show : ""}`}>
          <div className={styles.onClose}>
            <button onClick={() => setShowMenu(false)}>
              <IoClose />
            </button>
          </div>
          <ul className={poppins.className}>
            <Link href="/">
              <li>
                <CiHome className={styles.icon} />
                Inicio
              </li>
            </Link>
            <li onClick={() => setShowMenuServices(!showMenuServices)}>
              <GrServices className={styles.icon} />
              Servicios
              <svg
                className={showMenuServices ? styles.rotate : ""}
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                width={13}
                height={13}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="white"
                    d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
                  />
                </g>
              </svg>
            </li>
            {showMenuServices && (
              <ul className={styles.menuServices}>
                <Link
                  href="/desarrollo_web"
                  onClick={() => {
                    setShowMenu(false), setShowMenuServices(false);
                  }}
                >
                  <li>Desarrollo Web</li>
                </Link>
                <Link
                  href="/aplicaciones_moviles"
                  onClick={() => {
                    setShowMenu(false), setShowMenuServices(false);
                  }}
                >
                  <li>Aplicaciones Móviles</li>
                </Link>
                <Link
                  href="/servidores_soluciones_cloud"
                  onClick={() => {
                    setShowMenu(false), setShowMenuServices(false);
                  }}
                >
                  <li>Servidores y Soluciones Cloud</li>
                </Link>
                <Link
                  href="/consultoria_it"
                  onClick={() => {
                    setShowMenu(false), setShowMenuServices(false);
                  }}
                >
                  <li>Consultoria IT</li>
                </Link>
              </ul>
            )}

            <li>
              <PiUsersThreeLight className={styles.icon} />
              Sobre Nosotros
            </li>
            <Link href={"/web_proyectos"}>
              <li>
                <GrProjects className={styles.icon} />
                Nuestros Trabajos
              </li>
            </Link>
          </ul>
        </div>
        <div className={styles.end}>
          <Link href="#contact">
            <button className={`${poppins.className} ${styles.button}`}>
              Contactanos
            </button>
          </Link>
        </div>
        <div className={styles.hamburguerButton}>
          <button onClick={() => setShowMenu(!showMenu)}>
            <TbMenuDeep />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
