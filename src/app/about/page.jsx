import React from "react";

const About = () => {
  return (
    <div className="flex-grow max-w-6xl mx-auto space-y-4">
      <h1 className="text-2xl font-medium text-amber-600 ">About</h1>
      <p className="rounded-full shadow-md bg-slate-100 p-3">
        This is a clone of the IMDb website. It is built with Next.js and
        Tailwind CSS.
      </p>
      <p className="flex rounded-full shadow-md bg-slate-100 p-3">
        The IMDb website is a popular website for finding information about
        movies and TV shows. It provides information about the latest movies and
        TV shows, as well as information about actors, directors, and other
        people involved in the film industry.
      </p>
      <p className=" rounded-full shadow-md bg-slate-100 p-3">
        This clone website is built using Next.js, a popular React framework for
        building web applications. Next.js provides a number of features that
        make it easy to build fast and responsive web applications, including
        server-side rendering, static site generation, and automatic code
        splitting.
      </p>
      <p className="rounded-full shadow-md bg-slate-100 p-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum eaque,
        distinctio voluptate, adipisci non nisi ea explicabo nihil sit quasi
        exercitationem sunt. Quo libero numquam, ullam rerum nostrum nulla
        possimus!
      </p>
    </div>
  );
};

export default About;
