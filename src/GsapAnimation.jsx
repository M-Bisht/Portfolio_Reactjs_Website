import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const GsapAnimation = () => {
  // Hero Section

  let HeroMedia = gsap.matchMedia();
  HeroMedia.add(
    {
      above980: "(min-width:980px)",
      below980: "(width < 980px)",
    },
    (contex) => {
      let { above980, below980 } = contex.conditions;
      const heroTL = gsap
        .timeline({ delay: 0.3 })
        .from(".hSecText_header > span", {
          opacity: 0,
          y: "-120%",
        })
        .from(
          ".heroCircleEffect",
          {
            x: above980 ? "-100vw" : "50vw",
            duration: 2,
            opacity: 0,
          },
          "-0.2"
        )
        .to(
          ".heroCircleEffect",
          {
            rotate: 360,
            duration: 250,
            repeat: -1,
          },
          "<"
        )
        .from(
          ".hSecText_div1 > h1",
          {
            opacity: 0,
            x: "120%",
            duration: 0.7,
          },
          "+1"
        )
        .from(
          ".hSecText_div2 > span",
          {
            opacity: 0,
            x: "-120%",
            duration: 0.7,
          },
          "<"
        );
    }
  );

  // Section 1

  const gsapS1 = (start, end, y) => {
    gsap.to(".section1", {
      display: "flex",
      scrollTrigger: {
        trigger: ".heroSection",
        scroller: "body",
        start: `top ${start}%`,
        end: `top ${end}%`,
        scrub: 1,
      },
    });

    gsap.from(".section1", {
      y: `${y}vh`,
      scrollTrigger: {
        trigger: ".heroSection",
        scroller: "body",
        start: `top ${start}%`,
        end: `top ${end}%`,
        scrub: 1,
      },
    });
  };

  let s1Media = gsap.matchMedia();
  s1Media.add("(height >= 580px)", () => {
    gsapS1(-1, -100, 100);
  });

  s1Media.add("(min-height:530px) and (height < 580px)", () => {
    gsapS1(-10, -110, 110);
  });

  s1Media.add("(min-height:470px) and (height < 530px)", () => {
    gsapS1(-30, -130, 130);
  });

  s1Media.add("(min-height:370px) and (height < 470px)", () => {
    gsapS1(-70, -170, 170);
  });

  s1Media.add("(min-height:270px) and (height < 370px)", () => {
    gsapS1(-120, -220, 220);
  });

  gsap.to(".s1_textDiv > p > span", {
    opacity: 1,
    stagger: 1,
    transition: "ease-in-out",
    scrollTrigger: {
      trigger: ".heroSection",
      scroller: "body",
      start: "center 30%",
      end: "bottom 60%",
      scrub: 1,
    },
  });

  // Section 2

  let S2Media_1 = gsap.matchMedia();

  S2Media_1.add("(width >= 1400px)", () => {
    gsap.from(".section2", {
      x: "-100%",
      scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        start: "top 55%",
        end: "top 40%",
        scrub: 1,
      },
    });

    gsap.from(".s2_header > h2", {
      fontSize: "2vw",
      y: "60vh",
      whiteSpace: "no-wrap",
      scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        start: "top 34%",
        end: "top 0%",
        scrub: 1,
      },
    });

    let techBosexTL = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section2",
          scroller: "body",
          pin: true,
          start: "center 50%",
          scrub: 1,
        },
      })
      .from(".box1Video", {
        x: "-105%",
        opacity: 0,
      })
      .from(".box2Html", {
        x: "-105%",
        opacity: 0,
      })
      .from(".box3Css", {
        x: "-105%",
        opacity: 0,
      })
      .from(".box6React", {
        y: "-107.3%",
        opacity: 0,
      })
      .from(".box5Javascript", {
        x: "105%",
        opacity: 0,
      })
      .from(".box4Bootstrap", {
        x: "105%",
        opacity: 0,
      })
  });

  S2Media_1.add("(min-width:980px) and (width < 1400px)", () => {
    gsap.from(".section2", {
      x: "-100%",
      scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        start: "top 55%",
        end: "top 40%",
        scrub: 1,
      },
    });

    gsap.from(".s2_header > h2", {
      fontSize: "1vw",
      y: "60vh",
      scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        start: "top 40%",
        end: "top 20%",
        scrub: 1,
      },
    });

    let techBosexTL = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section2",
          scroller: "body",
          start: "top 22%",
          end: "top -45%",
          scrub: 1,
        },
      })
      .from(".box1Video", {
        x: "-105%",
        opacity: 0,
      })
      .from(".box2Html", {
        x: "105%",
        opacity: 0,
      })
      .from(".box3Css", {
        x: "-105%",
        opacity: 0,
      })
      .from(".box4Bootstrap", {
        x: "105%",
        opacity: 0,
      })
      .from(".box5Javascript", {
        x: "-105%",
        opacity: 0,
      })
      .from(".box6React", {
        x: "105%",
        opacity: 0,
      });
  });

  S2Media_1.add("(width < 980px)", () => {
    gsap.from(".section2", {
      x: "-100%",
      scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        start: "top 55%",
        end: "top 40%",
        scrub: 1,
      },
    });

    gsap.from(".s2_header > h2", {
      fontSize: "1vw",
      y: "60vh",
      scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        start: "top 40%",
        end: "top 20%",
        scrub: 1,
      },
    });

    gsap.from(".box1Video", {
      x: "-70vh",
      opacity: 0,
      scrollTrigger: {
        trigger: ".box1Video",
        scroller: "body",
        start: "top 40%",
        end: "top 20%",
        scrub: 1,
      },
    });
    gsap.from(".box2Html", {
      y: "-40vh",
      opacity: 0,
      scrollTrigger: {
        trigger: ".box2Html",
        scroller: "body",
        start: "top 15%",
        end: "top -5%",
        scrub: 1,
      },
    });
    gsap.from(".box3Css", {
      y: "-40vh",
      opacity: 0,
      scrollTrigger: {
        trigger: ".box3Css",
        scroller: "body",
        start: "top 20%",
        end: "top 0%",
        scrub: 1,
      },
    });
    gsap.from(".box4Bootstrap", {
      y: "-40vh",
      opacity: 0,
      scrollTrigger: {
        trigger: ".box4Bootstrap",
        scroller: "body",
        start: "top 20%",
        end: "top 0%",
        scrub: 1,
      },
    });
    gsap.from(".box5Javascript", {
      y: "-40vh",
      opacity: 0,
      scrollTrigger: {
        trigger: ".box5Javascript",
        scroller: "body",
        start: "top 20%",
        end: "top 0%",
        scrub: 1,
      },
    });
    gsap.from(".box6React", {
      y: "-40vh",
      opacity: 0,
      scrollTrigger: {
        trigger: ".box6React",
        scroller: "body",
        start: "top 20%",
        end: "top 0%",
        scrub: 1,
      },
    });
  });

  // Section 3

  const s3ProjectBorder = () => {
    if (window.innerWidth >= "960") {
      s3TextTL.to(".s3Text", {
        borderRight: "2px solid white",
      });
    } else {
      s3TextTL.to(".s3Text", {
        borderBottom: "2px solid white",
      });
    }
  };

  const s3TextTL = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".section3",
        scroller: "body",
        start: "top 40%",
        end: "top 5%",
        scrub: 1,
      },
    })
    .from(".s3Text > h2 > span:nth-child(1) ", {
      top: "0",
      opacity: 0,
      left: "10vw",
    })
    .from(".s3Text > h2 > span:nth-child(2) ", {
      top: "0",
      opacity: 0,
      left: "20vw",
    })
    .from(".s3Text > h2 > span:nth-child(3) ", {
      top: "0",
      opacity: 0,
      left: "30vw",
    })
    .from(".s3Text > h2 > span:nth-child(4) ", {
      top: "0",
      opacity: 0,
      left: "40vw",
    })
    .from(".s3Text > h2 > span:nth-child(5) ", {
      top: "0",
      opacity: 0,
      left: "50vw",
    })
    .from(".s3Text > h2 > span:nth-child(6) ", {
      top: "0",
      opacity: 0,
      left: "60vw",
    })
    .from(".s3Text > h2 > span:nth-child(7) ", {
      top: "0",
      opacity: 0,
      left: "70vw",
    })
    .from(".s3Text > h2 > span:nth-child(8) ", {
      top: "0",
      opacity: 0,
      left: "80vw",
    });
  s3ProjectBorder();

  let S3Media = gsap.matchMedia();
  S3Media.add("(min-width:601px)", () => {
    gsap.from(".project", {
      y: "-120%",
      opacity: 0,
      scrollTrigger: {
        trigger: ".section3",
        scroller: "body",
        start: "top 30%",
        end: "top 10%",
        scrub: 1,
      },
    });
    gsap.to(".project", {
      x: "-100%",
      scrollTrigger: {
        trigger: ".section3",
        scroller: "body",
        pin: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 1,
      },
    });
  });

  S3Media.add("(width < 601px)", () => {
    gsap.from(".project1", {
      x: "-100%",
      opacity: 0,
      scrollTrigger: {
        trigger: ".section3",
        scroller: "body",
        start: "top 30%",
        end: "top 10%",
        scrub: 1,
      },
    });
    gsap.from(".project2", {
      x: "100%",
      opacity: 0,
      scrollTrigger: {
        trigger: ".section3",
        scroller: "body",
        start: "top 5%",
        end: "top -15%",
        scrub: 1,
      },
    });
  });

  //   Section 4

  gsap.from(".section4", {
    x: "-100%",
    scrollTrigger: {
      trigger: ".section4",
      scroller: "body",
      start: "top 80%",
      end: "top 55%",
      scrub: 1,
    },
  });

  let S4Media = gsap.matchMedia();
  S4Media.add(
    {
      above810: "(min-width:810px)",
      below810: "(width < 810px)",
    },
    (contex) => {
      let { above810, below810 } = contex.conditions;
      gsap.from(".s4H2", {
        fontSize: above810 ? "15rem" : "1vw",
        y: "40vh",
        scrollTrigger: {
          trigger: ".section4",
          scroller: "body",
          start: "top 55%",
          end: "top 0%",
          scrub: 1,
        },
      });
    }
  );

  gsap.from(".s4FormContainer", {
    y: "40vh",
    opacity: 0,
    scrollTrigger: {
      trigger: ".section4",
      scroller: "body",
      start: "40% 60%",
      end: "center 60%",
      scrub: 1,
    },
  });
};

export default GsapAnimation;
