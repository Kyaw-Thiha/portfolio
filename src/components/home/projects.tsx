import React from "react";
import { CardList } from "./card-list";

export function Projects() {
  // const projects = [
  //   {
  //     name: "IIP Website",
  //     description: "School Website",
  //     url: "",
  //     imgURL: "/projects/IIPWebsite/IIPWebsite.png",
  //   },
  // ];

  return (
    <div className="p-10">
      <h2 className="mb-8 mt-4 text-center text-3xl font-semibold text-black dark:text-white">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              index={index}
              name={project.name}
              description={project.description}
              url={project.url}
              imgURL={project.imgURL}
            />
          );
        })} */}
      </div>
      <CardList />
    </div>
  );
}

// interface ProjectCardProps {
//   index: number;
//   name: string;
//   description: string;
//   url: string;
//   imgURL: string;
// }
// const ProjectCard: React.FC<ProjectCardProps> = (props) => {
//   return (
//     <div className="relative rounded-xl px-4 py-4">
//       <img className="rounded-lg" src={props.imgURL} alt={`${props.name}`} />
//       <h2 className="absolute bottom-4 left-1/2 w-full bg-blue-50">
//         {props.name}
//       </h2>
//     </div>
//   );
// };
