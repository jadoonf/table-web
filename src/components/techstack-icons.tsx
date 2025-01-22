import {
    Drizzle,
    NextjsDark,
    TailwindCss,
    ReactEmail,
    ReactJs,
    ShadcnUi,
    NextjsLight,
    Prisma,
    Supabase,
    Python,
    AWS,
    Vercel,
    Svelte,
    Astro,
    Cplusplus,
    Zig,
    Typescript,
    Go,
  
  } from "./icons";

type TechStackIconType = {
    [key: string]: {
      name: string;
      icon: any;
    };
  };
export const techStackIcons: TechStackIconType = {
    drizzle: {
      name: "Drizzle",
      icon: <Drizzle className="w-6 h-6" />,
    },
    prisma: {
      name: "Prisma",
      icon: <Prisma className="w-6 h-6" />,
    },
    react: {
      name: "ReactJS",
      icon: <ReactJs className="w-6 h-6"  />,
},
    tailwind: {
      name: "TailwindCSS",
      icon: <TailwindCss className="w-6 h-6"  />,
    },
    shadcn: {
      name: "Shadcn",
      icon: <ShadcnUi className="w-6 h-6" />,
    },
    nextjs: {
      name: "NextJS",
      icon: <NextjsDark className="w-6 h-6" />,
    },
    supabase: {
      name: "Supabase",
      icon: <Supabase className="w-6 h-6" />,
    },
    python: {
      name: "Python",
      icon: <Python className="w-6 h-6" />,
    },
    aws: {
      name: "AWS",
      icon: <AWS className="w-6 h-6 text-black dark:text-white" />,
    },
    vercel: {
      name: "Vercel",
      icon: <Vercel className="w-20 h-20 text-black dark:text-white" />,
    },
    svelte: {
      name: "Svelte",
      icon: <Svelte className="w-20 h-20 text-black dark:text-white" />,
    },
    astro: {
      name: "Astro",
      icon: <Astro className="w-20 h-20 text-black dark:text-white" />,
    },
    cplusplus: {
      name: "C++",
      icon: <Cplusplus className="w-20 h-20 text-black dark:text-white" />,
    },
    zig: {
      name: "Zig",
      icon: <Zig className="w-20 h-20 text-black dark:text-white" />,
    },
    ts: {
      name: "Typescript",
      icon: <Typescript className="w-20 h-20 text-black dark:text-white" />,
    },
    go: {
      name: "Go",
      icon: <Go className="w-20 h-20 text-black dark:text-white" />,
    },
  
  };