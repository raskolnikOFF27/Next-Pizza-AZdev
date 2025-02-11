import { Container, Title } from "@/components/shared";
import { Categories } from "@/components/shared/categories";

export default function Home() {
  return (
    <Container className="mt-10">
      <Title text="Все пиццы" size="lg" className="font-extrabold"></Title>

      <Categories />
    </Container>
  );
}
