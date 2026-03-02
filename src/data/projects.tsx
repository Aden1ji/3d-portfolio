import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
    SiDocker,
    SiExpress,
    SiJavascript,
    SiMongodb,
    SiPostgresql,
    SiPython,
    SiReactquery,
    SiShadcnui,
    SiSupabase,
    SiTailwindcss,
    SiThreedotjs,
    SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
            {live && live.trim() !== "" && (
                <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={live}>
                    <Button variant={"default"} size={"sm"}>
                        Visit
                        <ArrowUpRight className="ml-3 w-5 h-5" />
                    </Button>
                </Link>
            )}

            {repo && repo.trim() !== "" && (
                <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={repo}>
                    <Button variant={"default"} size={"sm"}>
                        Github
                        <ArrowUpRight className="ml-3 w-5 h-5" />
                    </Button>
                </Link>
            )}
        </div>
    );
};

export type Skill = {
    title: string;
    bg: string;
    fg: string;
    icon: ReactNode;
};

const PROJECT_SKILLS = {
    next: { title: "Next.js", bg: "black", fg: "white", icon: <RiNextjsFill /> },
    node: { title: "Node.js", bg: "black", fg: "white", icon: <RiNodejsFill /> },
    react: { title: "React", bg: "black", fg: "white", icon: <RiReactjsFill /> },
    js: { title: "JavaScript", bg: "black", fg: "white", icon: <SiJavascript /> },
    ts: { title: "TypeScript", bg: "black", fg: "white", icon: <SiTypescript /> },
    python: { title: "Python", bg: "black", fg: "white", icon: <SiPython /> },
    supabase: { title: "Supabase", bg: "black", fg: "white", icon: <SiSupabase /> },
    express: { title: "Express", bg: "black", fg: "white", icon: <SiExpress /> },
    mongo: { title: "MongoDB", bg: "black", fg: "white", icon: <SiMongodb /> },
    postgres: { title: "PostgreSQL", bg: "black", fg: "white", icon: <SiPostgresql /> },
    docker: { title: "Docker", bg: "black", fg: "white", icon: <SiDocker /> },
    tailwind: { title: "Tailwind", bg: "black", fg: "white", icon: <SiTailwindcss /> },
    shadcn: { title: "shadcn ui", bg: "black", fg: "white", icon: <SiShadcnui /> },
    reactQuery: { title: "React Query", bg: "black", fg: "white", icon: <SiReactquery /> },
    framerMotion: { title: "Framer Motion", bg: "black", fg: "white", icon: <TbBrandFramerMotion /> },
    aceternity: { title: "Aceternity", bg: "black", fg: "white", icon: <AceTernityLogo /> },
    spline: { title: "Spline", bg: "black", fg: "white", icon: <SiThreedotjs /> },
};

export type Project = {
    id: string;
    category: string;
    title: string;
    src: string;
    screenshots: string[];
    skills: { frontend: Skill[]; backend: Skill[] };
    content: React.ReactNode | any;
    github?: string;
    live?: string;
};

const projects: Project[] = [
    {
        id: "closetlink",
        category: "Mobile marketplace",
        title: "ClosetLink",
        src: "/assets/projects-screenshots/closetlink/landing.png",
        screenshots: ["landing.png", "landing.png", "1.png", "3.png"],
        live: "https://www.closetlink.shop/",
        github: "https://github.com/Aden1ji",
        skills: {
            frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
            backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.supabase, PROJECT_SKILLS.postgres],
        },
        get content() {
            return (
                <div>
                    <TypographyP className="font-mono text-2xl text-center">
                        ClosetLink is a fashion marketplace for not only buying and selling but swapping too.
                    </TypographyP>

                    <TypographyP className="font-mono">
                        ClosetLink is a fashion marketplace focused on helping people buy, sell, and swap items through a community
                        driven experience. The goal is to make second hand fashion easier, safer, and more sustainable, with clean
                        flows for listing, discovery, and transactions.
                    </TypographyP>

                    <ProjectsLinks live={this.live} repo={this.github} />

                    <TypographyH3 className="my-4 mt-8">What I built</TypographyH3>
                    <ul className="list-disc ml-6">
                        <li className="font-mono">Item upload flow with images, metadata, and categories</li>
                        <li className="font-mono">Search and filters to help users find items fast</li>
                        <li className="font-mono">Authentication, storage, and database features using Supabase</li>
                        <li className="font-mono">Order and payment flow using Stripe</li>
                        <li className="font-mono">Swap offer flow to support trades, not just sales</li>
                    </ul>

                    <TypographyH3 className="my-4 mt-8">Screens</TypographyH3>
                    <SlideShow
                        images={[
                            `${BASE_PATH}/closetlink/landing.png`,
                        ]}
                    />
                </div>
            );
        },
    },
    {
        id: "triage-radio",
        category: "Applied AI",
        title: "Triage Radio",
        src: "/assets/projects-screenshots/triage-radio/landing.png",
        screenshots: ["landing.png", "landing.png", "1.png"],
        live: "",
        github: "https://github.com/Aden1ji/Triage-Radio",
        skills: {
            frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.next, PROJECT_SKILLS.shadcn, PROJECT_SKILLS.framerMotion, PROJECT_SKILLS.tailwind],
            backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.supabase, PROJECT_SKILLS.python, PROJECT_SKILLS.postgres],
        },
        get content() {
            return (
                <div>
                    <TypographyP className="font-mono text-2xl text-center">
                        An applied AI hazard reporting and alert platform for campuses and underserved communities
                    </TypographyP>

                    <TypographyP className="font-mono">
                        Triage Radio helps people report hazards quickly, then turns those reports into clear safety alerts. The
                        system prioritizes clarity, accessibility, and real time awareness.
                    </TypographyP>

                    <ProjectsLinks live={this.live} repo={this.github} />

                    <TypographyH3 className="my-4 mt-8">Key work</TypographyH3>
                    <ul className="list-disc ml-6">
                        <li className="font-mono">Backend services to collect, process, and store hazard reports</li>
                        <li className="font-mono">AI based summarization for concise and readable alerts</li>
                        <li className="font-mono">Designed for users in the moment, not admin heavy dashboards</li>
                    </ul>

                    <TypographyH3 className="my-4 mt-8">Screens</TypographyH3>
                    <SlideShow
                        images={[
                            `${BASE_PATH}/triage-radio/landing.png`,
                            `${BASE_PATH}/triage-radio/1.png`,
                        ]}
                    />
                </div>
            );
        },
    },
    {
        id: "before-i-forget",
        category: "iOS app",
        title: "Before I Forget",
        src: "/assets/projects-screenshots/before-i-forget/landing.png",
        screenshots: ["landing.png", "landing.png", "1.png"],
        live: "",
        github: "https://github.com/Aden1ji/BeforeIForget",
        skills: {
            frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.react],
            backend: [],
        },
        get content() {
            return (
                <div>
                    <TypographyP className="font-mono text-2xl text-center">
                        A memory capture and recall app designed around small details that matter
                    </TypographyP>

                    <TypographyP className="font-mono">
                        Before I Forget helps users store meaningful details and build a habit of recalling them. The goal is a
                        simple flow, clear UI, and a recall experience that feels motivating.
                    </TypographyP>

                    <ProjectsLinks live={this.live} repo={this.github} />

                    <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
                    <ul className="list-disc ml-6">
                        <li className="font-mono">Fast memory creation flow with tags and structure</li>
                        <li className="font-mono">Recall mode with history and streak based motivation</li>
                        <li className="font-mono">UI focused on readability and ease of use</li>
                    </ul>

                    <TypographyH3 className="my-4 mt-8">Screens</TypographyH3>
                    <SlideShow
                        images={[
                            `${BASE_PATH}/before-i-forget/landing.png`,
                            `${BASE_PATH}/before-i-forget/1.png`,
                            `${BASE_PATH}/before-i-forget/2.png`,
                        ]}
                    />
                </div>
            );
        },
    },
    {
        id: "employee-management-system",
        category: "Full stack",
        title: "Employee Management System",
        src: "/assets/projects-screenshots/employee-management-system/landing.png",
        screenshots: ["landing.png", "landing.png", "1.png"],
        live: "",
        github: "",
        skills: {
            frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts, PROJECT_SKILLS.reactQuery],
            backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo, PROJECT_SKILLS.docker],
        },
        get content() {
            return (
                <div>
                    <TypographyP className="font-mono text-2xl text-center">
                        An HR tool for employee records, workflows, and operational clarity
                    </TypographyP>

                    <TypographyP className="font-mono">
                        I built this system during my internship to streamline HR processes and reduce manual admin work. The focus
                        was reliability, clear data handling, and a smooth UI for common tasks.
                    </TypographyP>

                    <ProjectsLinks live={this.live} repo={this.github} />

                    <TypographyH3 className="my-4 mt-8">What I shipped</TypographyH3>
                    <ul className="list-disc ml-6">
                        <li className="font-mono">CRUD flows for employees, roles, and HR updates</li>
                        <li className="font-mono">Backend API using Node and Express with MongoDB</li>
                        <li className="font-mono">Dockerized setup for consistent dev and deployment</li>
                    </ul>

                    <TypographyH3 className="my-4 mt-8">Screens</TypographyH3>
                </div>
            );
        },
    },
];

export default projects;