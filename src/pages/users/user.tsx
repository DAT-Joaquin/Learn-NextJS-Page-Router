import Footer from "./organisms/Footer";
import Header from "./organisms/Header";
import ListUser from "./organisms/ListUser";

export default function UserTemplate({ data }: { data: any }) {
  return (
    <>
      <Header />
      <ListUser data={data} />
      <Footer />
    </>
  );
}
