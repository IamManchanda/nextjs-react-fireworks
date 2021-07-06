import Head from "next/head";
import { Fireworks } from "fireworks-js/dist/react";

export default function Home() {
  const options = {
    speed: 3,
    sound: {
      enable: true,
      volume: {
        min: 15,
        max: 30,
      },
    },
    mouse: {
      click: true,
    },
  };

  const style = {
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    position: "fixed",
    background: "#000",
    backgroundImage: "url('/night-sky.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <Head>
        <title>Next.js React Fireworks</title>
        <meta
          name="description"
          content="Check out Demo of Next.js React Fireworks"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* @ts-ignore */}
      <Fireworks options={options} style={style} />
    </>
  );
}
