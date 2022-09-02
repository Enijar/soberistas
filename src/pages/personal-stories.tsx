import type { GetServerSideProps, NextPage } from "next";
import Header from "@/components/header/header";

type Props = {
  title: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      title: "Personal Stories",
    },
  };
};

const PersonalStories: NextPage<Props> = (props) => {
  return (
    <main>
      <Header />
      <h1>{props.title}</h1>
    </main>
  );
};

export default PersonalStories;
