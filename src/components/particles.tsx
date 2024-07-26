"use client";
import {useEffect, useMemo, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {type Container, type ISourceOptions, MoveDirection, OutMode} from "@tsparticles/engine";
import {loadSlim} from "@tsparticles/slim";

export function ParticlesDemo() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: "transparent",
      },
    }),
    [],
  );

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }

  return <p>not loaded</p>;
}
