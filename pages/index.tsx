import { Button } from "@op-ent/unstyled-ui";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Github } from "@icons-pack/react-simple-icons";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>op-ent. L{"'"}ENT open-source.</title>
      </Head>
      <div className="custom-container px-4 my-10">
        <img src="/img/logo.svg" className="w-24" alt="Logo d'op-ent" />
        <h1 className="text-5xl text-neutral-12 font-bold">op-ent</h1>
        <h2 className="text-lg text-neutral-11">L{"'"}ENT open-source.</h2>
        <Button
          as={Link}
          href="https://github.com/op-ent"
          target="_blank"
          size="lg"
          color="neutral"
          className="mt-10"
          leftIcon={<Github className="w-4 h-4 mr-2" />}
        >
          GitHub
        </Button>
        <p className="mt-10 text-xl text-neutral-11">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo amet
          quod quis dolorem in harum alias dolorum? Soluta magnam error
          accusamus eos qui voluptate cum architecto voluptates consequuntur vel
          excepturi dolore numquam accusantium, deserunt temporibus itaque
          voluptatibus eaque amet molestias! Aliquid inventore dolorum labore,
          autem sapiente similique magni cumque ex dicta optio, minima explicabo
          illo numquam aperiam. Expedita totam reiciendis accusantium ducimus.
          Perspiciatis iusto odio blanditiis a nostrum explicabo natus. Corrupti
          reiciendis illum magni perspiciatis unde. Veritatis accusamus beatae
          tenetur non ad, mollitia deleniti odio incidunt rerum, magni
          architecto ratione, dolor voluptas quia tempore eum ex itaque
          voluptate vel. Quibusdam quasi nemo, in, quo, voluptatem ad dolor
          provident est fugiat natus minima fugit laborum ullam rerum nobis
          error. Voluptatem natus qui, placeat rerum, ad nobis nisi tempore
          reprehenderit quidem sit sed officia tempora praesentium. Laudantium
          voluptatibus voluptas placeat, autem consequatur, ducimus omnis hic
          voluptate molestiae temporibus numquam aut voluptatem modi ratione
          aspernatur, ab sint commodi iusto eum eveniet dolor natus aliquid
          consectetur neque! Molestias suscipit odit dolorem doloremque amet rem
          id earum repudiandae, reiciendis laboriosam? Necessitatibus quod
          doloribus ducimus ad molestias fuga autem dolorem. Odit, molestias
          illum. Est eligendi numquam voluptates velit, quae officia aliquam
          nemo ipsa. Expedita, facilis voluptatibus.
        </p>
      </div>
    </>
  );
};

export default Home;
