import { Link } from "react-router-dom";

function ShortStory() {
  return (
    <section className="ms-37.5 me-37.5">
      <h1 className="text-center text-5xl font-extrabold my-10">Our Story</h1>
      <div className="text-center">
        <h2 className="text-lg mb-4 mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          animi assumenda veritatis dicta maxime ipsa ea dolorem unde dolore
          vitae reprehenderit ullam laborum, necessitatibus, eveniet error
          perspiciatis consequatur, est earum. Libero mollitia qui quidem
          officiis, porro corporis suscipit aliquid necessitatibus error
          consequuntur esse veniam, blanditiis totam laborum ex facere corrupti
          dolore iure harum. Nihil aspernatur eveniet est veritatis quo magnam?
          Obcaecati nobis inventore, sapiente, temporibus laboriosam fuga
          tempora quisquam odit ex natus totam nulla non cumque accusamus
          cupiditate molestias consequuntur ad fugit facere beatae iusto qui?
          Enim ex cupiditate aperiam? Voluptatem, sint ipsa odit ut magni
          expedita quas veritatis! Aspernatur voluptates nemo facilis illum
          rerum eligendi fugit. Possimus laudantium corrupti quis error cumque
          mollitia sequi ab. Consequatur perferendis explicabo ullam. Iusto
          dignissimos minima corrupti fugiat, atque impedit ea cum vel dolor.
          Nihil, facilis sunt, nulla maiores eveniet quis aut temporibus commodi
          vitae deserunt quidem voluptatibus ullam ipsum hic perspiciatis
          veniam? Error quaerat laborum nostrum, pariatur et harum, dolorem
          aliquam minima aperiam alias voluptate quae tempore odio! Ipsum maxime
          repudiandae, veniam incidunt numquam necessitatibus perferendis
          nesciunt iste voluptatem ad nobis illo.
        </h2>
        <Link className="text-blue-600" to={"/our-story"}>Learn More {">"}</Link>
      </div>
    </section>
  );
}

export default ShortStory;
