import Card from "@/components/ui/card";
import { useParams } from "react-router-dom";

export interface CardData {
  id: string;
  title: string;
  pointOfInterest: number;
  backgroundColor: string;
}
export const List = () => {
  const { id } = useParams();

  // Function to navtigate the routenavigaettenavigate.navigateethistory.push("/")nvavigatenavigate()""/
  return (
    <ul className="card-list w-full">
      {cardData.map((card) => (
        <Card key={card.id} isSelected={id === card.id} {...card} />
      ))}
    </ul>
  );
};

export const CardList = () => (
  // <Router>
  //   <Route path={["/:id", "/"]} component={List} />
  // </Router>
  <List />
);

const cardData: CardData[] = [
  // Photo by ivan Torres on Unsplash
  {
    id: "c",
    title: "5 Food Apps Delivering the Best of Your City",
    pointOfInterest: 80,
    backgroundColor: "#814A0E",
  },
  // Photo by Dennis Brendel on Unsplash
  {
    id: "f",
    title: "Arrange Your Apple Devices for the Gram",
    pointOfInterest: 120,
    backgroundColor: "#959684",
  },
  // Photo by Alessandra Caretto on Unsplash
  {
    id: "a",
    title: "Map Apps for the Superior Mode of Transport",
    pointOfInterest: 260,
    backgroundColor: "#5DBCD2",
  },
  // Photo by Taneli Lahtinen on Unsplash
  {
    id: "g",
    title: "Our Pick of Apps to Help You Escape From Apps",
    pointOfInterest: 200,
    backgroundColor: "#8F986D",
  },
  // Photo by Simone Hutsch on Unsplash
  {
    id: "d",
    title: "The Latest Ultra-Specific Photography Editing Apps",
    pointOfInterest: 150,
    backgroundColor: "#FA6779",
  },
  // Photo by Siora Photography on Unsplash
  {
    id: "h",
    title: "100 Cupcake Apps for the Cupcake Connoisseur",
    pointOfInterest: 60,
    backgroundColor: "#282F49",
  },
  // Photo by Yerlin Matu on Unsplash
  {
    id: "e",
    title: "Yes, They Are Sociopaths",
    pointOfInterest: 200,
    backgroundColor: "#AC7441",
  },
  // Photo by Ali Abdul Rahman on Unsplash
  {
    id: "b",
    title: "Seriously the Only Escape is the Stratosphere",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
  },
];
