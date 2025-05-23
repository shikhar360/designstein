"use client";

import React, { useEffect, useRef } from "react";
import Matter, {
  Engine,
  World,
  Bodies,
  Mouse,
  MouseConstraint,
  Runner,
  Events,
  Body,
  Common,
} from "matter-js";

type PillConfig = {
  text: string;
  colorClass: string;
};

{
  /* <div class="w-32 h-32 bg-blue-600" style="clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);"></div> */
}

const PILL_CONFIG: PillConfig[] = [
  {
    text: "Logo Design",
    colorClass:
      "md:h-40 md:w-40 h-20 w-20 text-xs rounded-full shadow-custom-black bg-lime-400    ",
  },
  {
    text: "CopyWriting",
    colorClass:
      "md:h-40 md:w-40 h-20 w-20 text-xs rounded-full shadow-custom-black bg-yellow-400  ",
  },
  {
    text: "Design System",
    colorClass:
      "md:h-40 md:w-40 h-20 w-20 text-xs rounded-full shadow-custom-black bg-blue-600 ",
  },
  {
    text: "UI",
    colorClass:
      "md:h-40 md:w-40 h-20 w-20 text-xs rounded-full shadow-custom-black bg-orange-500 ",
  },
  {
    text: "UX",
    colorClass:
      "md:h-40 md:w-40 h-20 w-20 text-xs rounded-full shadow-custom-black bg-violet-600 ",
  },
  {
    text: "Code Devlopment",
    colorClass:
      "md:h-40 md:w-40 h-20 w-20 text-xs rounded-full shadow-custom-black bg-cyan-400 ",
  },
  {
    text: "No-Code",
    colorClass:
      "md:h-40 md:w-40 h-20 w-20 text-xs rounded-full shadow-custom-black bg-fuchsia-400 ",
  },
  {
    text: "Landing Pages",
    colorClass:
      "md:h-40 md:w-40 h-20 w-20 text-xs rounded-full shadow-custom-black bg-red-500 ",
  },
];

export default function GravityPills(): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pillsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1) Create engine + gravity
    const engine = Engine.create();

    engine.world.gravity.y = 1;

    // 2) Measure container (100vh tall)
    const container = containerRef.current;
    const { width: CW, height: CH } = container.getBoundingClientRect();

    // 3) Create static walls: top, floor, left, right
    const thickness = 50;
    const walls = [
      Bodies.rectangle(CW / 2, thickness / 2, CW, thickness, {
        isStatic: true,
      }), // top
      Bodies.rectangle(CW / 2, CH + thickness / 2, CW, thickness, {
        isStatic: true,
      }), // floor
      Bodies.rectangle(-thickness / 2, CH / 2, thickness, CH, {
        isStatic: true,
      }), // left
      Bodies.rectangle(CW + thickness / 2, CH / 2, thickness, CH, {
        isStatic: true,
      }), // right
    ];

    World.add(engine.world, walls);

    // 4) Create physics bodies for each pill, spawned inside walls
    const bodies = PILL_CONFIG.map((pill, i) => {
      const el = pillsRef.current[i]!;
      const { width: w, height: h } = el.getBoundingClientRect();
      const halfH = h / 2;
      const spawnMinY = thickness + halfH;
      const spawnMaxY = CH - thickness - halfH;
      const y = Math.random() * (spawnMaxY - spawnMinY) + spawnMinY;

      const body = Bodies.rectangle(Math.random() * (CW - w) + w / 2, y, w, h, {
        restitution: 0.3,
        friction: 0.5,
        frictionAir: 0.04,
      });

      (body as any).el = el;

      return body;
    });

    World.add(engine.world, bodies as unknown as Matter.Composite);

    // 5) Mouse drag & throw support
    const mouse = Mouse.create(container);
    const mouseConstr = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });

    World.add(engine.world, mouseConstr);

    // 6) Clamp mouse position to container so pills can't be dragged out
    Events.on(engine, "beforeUpdate", () => {
      // clamp mouse position inside container
      const origX = mouseConstr.mouse.position.x;
      const origY = mouseConstr.mouse.position.y;

      mouseConstr.mouse.position.x = Common.clamp(origX, 0, CW);
      mouseConstr.mouse.position.y = Common.clamp(origY, 0, CH);

      // if dragging and pointer outside, release the body
      if (
        mouseConstr.body &&
        (origX < 0 || origX > CW || origY < 0 || origY > CH)
      ) {
        mouseConstr.constraint.bodyA = null;
      }
    });

    const maxVelocity = 4;

    // 7) Sync DOM elements on each tick, with clamping to walls
    Events.on(engine, "afterUpdate", () => {
      bodies.forEach((body) => {
        const el = (body as any).el as HTMLDivElement;
        const halfW = el.offsetWidth / 2,
          halfH = el.offsetHeight / 2;
        // enforce position bounds
        const px = Common.clamp(body.position.x, halfW, CW - halfW);
        const py = Common.clamp(body.position.y, halfH, CH - halfH);

        Body.setPosition(body, { x: px, y: py });
        // clamp velocity for slower throw
        const vx = Common.clamp(body.velocity.x, -maxVelocity, maxVelocity);
        const vy = Common.clamp(body.velocity.y, -maxVelocity, maxVelocity);

        Body.setVelocity(body, { x: vx, y: vy });
        // apply transform
        el.style.transform = `translate(${px - halfW}px, ${py - halfH}px) rotate(${body.angle}rad)`;
      });
    });

    // 8) Run engine
    const runner = Runner.create({ delta: 1000 / 120, isFixed: true });

    Runner.run(runner, engine);

    return () => {
      Runner.stop(runner);
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        className="relative w-full min-h-screen overflow-hidden font-inter "
      >
        {/* <div className="pointer-events-none absolute z-50 bg-green-500 top-0 left-0 w-full h-[200px] border-b-2 border-red-500" />
      <div className="pointer-events-none absolute z-50 bg-green-500 bottom-0 left-0 w-full h-[200px] border-t-2 border-red-500" />
      <div className="pointer-events-none absolute z-50 bg-green-500 top-0 left-0 h-full w-[200px] border-r-2 border-red-500" />
      <div className="pointer-events-none absolute z-50 bg-green-500 top-0 right-0 h-full w-[200px] border-l-2 border-red-500" /> */}
        <div className={`absolute  text-base mt-20 w-full `}>
          <h2 className={` mx-10 md:mx-32 font-light`}>Services we offer</h2>
          <p
            className={`max-w-[80vw] border border-dashed border-white/40 mx-10 md:mx-32`}
          />
        </div>
        {PILL_CONFIG.map((pill, i) => (
          <div
            key={pill.text}
            ref={(el) => {
              pillsRef.current[i] = el;
            }}
            className={`absolute  ${pill.colorClass} text-center flex items-center justify-center select-none cursor-grab`}
            style={{ userSelect: "none" }}
          >
            {pill.text}
          </div>
        ))}
      </section>
    </>
  );
}
