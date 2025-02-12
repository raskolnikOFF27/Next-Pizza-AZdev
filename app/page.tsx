import { Container, SortPopup, Title } from "@/components/shared";
import { Categories } from "@/components/shared/categories";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold"></Title>
      </Container>

      <TopBar />
    </>
  );
}
