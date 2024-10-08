import Image from "next/image";
import Section from "./Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

const cardsContent = [
  {
    id: 164,
    title: "Steve McGeorge - Hero reveal",
    imageUrl: "/images/164.webp",
  },
  {
    id: 165,
    title: "Sonar Music - Preloader",
    imageUrl: "/images/165.webp",
  },
  {
    id: 166,
    title: "Sonar Music - Horizontal scroll ",
    imageUrl: "/images/166.webp",
  },
  {
    id: 167,
    title: "Uncommon Studio - Hover interaction",
    imageUrl: "/images/167.webp",
  },
  {
    id: 168,
    title: "Yard - Hover interaction",
    imageUrl: "/images/168.webp",
  },
  {
    id: 169,
    title: "Rogier De Boeve - Hover interaction",
    imageUrl: "/images/169.webp",
  },
  {
    id: 170,
    title: "Clarisse Michard - Preloader",
    imageUrl: "/images/170.webp",
  },
  {
    id: 171,
    title: "Decathlon Wlkr76 - Section reveal",
    imageUrl: "/images/171.webp",
  },
  {
    id: 172,
    title: "Decathlon Wlkr76 - Preloader",
    imageUrl: "/images/172.webp",
  },
  {
    id: 173,
    title: "Ashfall Studio - Slider",
    imageUrl: "/images/173.webp",
  },
  {
    id: 174,
    title: "Ashfall Studio - Hero reveal",
    imageUrl: "/images/174.webp",
  },
  {
    id: 175,
    title: "O Positive - Nav menu ",
    imageUrl: "/images/175.webp",
  },
  {
    id: 176,
    title: "O Positive - Hover interaction",
    imageUrl: "/images/176.webp",
  },
  {
    id: 177,
    title: "O Positive - Section reveal",
    imageUrl: "/images/177.webp",
  },
  {
    id: 178,
    title: "Naël Messaoudene - Hover interaction",
    imageUrl: "/images/178.webp",
  },
];

const CardsGrid = () => {
  return (
    <Section>
      <div className="grid grid-cols-3 gap-8">
        {cardsContent.map((card) => {
          return (
            <Card key={card.id}>
              <CardContent>
                <Image
                  className="w-full"
                  src={card.imageUrl}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </CardContent>
              <CardHeader>
                <Badge variant="outline">Category</Badge>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

export default CardsGrid;
