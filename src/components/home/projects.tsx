import Card from "@/components/ui/card";
import { projects } from "@/data/projects";
import { useParams } from "react-router-dom";

export interface CardData {
  id: string;
  name: string;
  pointOfInterest: number;
}

export function Projects() {
  const { id } = useParams();
  const data = projects.map((project) => {
    const lowerName = project.name.toLocaleLowerCase();
    const id = lowerName.split(" ").join("-");

    return { id: id, pointOfInterest: 0, ...project };
  });

  return (
    <div className="p-10">
      <h2 className="mb-8 mt-4 text-center text-3xl font-semibold text-black dark:text-white">
        My Projects
      </h2>
      {/* <div className="grid grid-cols-1 md:grid-cols-3"></div> */}
      <ul className="card-list w-full">
        {data.map((card) => (
          <Card key={card.id} isSelected={id === card.id} {...card} />
        ))}
      </ul>
    </div>
  );
}
