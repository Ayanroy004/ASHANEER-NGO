export interface WhatWhyServicesProps {
  data: { point: string };
}

function WhatWhyServices({ data }: WhatWhyServicesProps) {
  return (
    <>
      <section className="ms-37.5 me-37.5 ">
        <div className="pt-10">
          {/* Content for WhatWhyServices component */}
          <h2 className="text-3xl font-extrabold text-start my-4">
            WHY {data.point}
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur deserunt, sed excepturi commodi atque vero ad soluta
            saepe ex maiores. Id numquam, magni ducimus cupiditate laborum fugit
            iure voluptate reprehenderit! Odio totam fugit, unde, ut possimus
            deserunt blanditiis culpa repellat illo voluptas dolorum consequatur
            vero harum explicabo ipsa ducimus maxime laudantium! Aliquid ab
            officia recusandae aliquam, unde omnis voluptatem ratione.
          </p>
        </div>
      </section>
      <section className="ps-37.5 pe-37.5 py-10 mt-10 bg-blue-200">
        <div className="">
          {/* Content for WhatWhyServices component */}
          <h2 className="text-3xl font-extrabold text-start mb-4">
            WHAT {data.point}
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur deserunt, sed excepturi commodi atque vero ad soluta
            saepe ex maiores. Id numquam, magni ducimus cupiditate laborum fugit
            iure voluptate reprehenderit! Odio totam fugit, unde, ut possimus
            deserunt blanditiis culpa repellat illo voluptas dolorum consequatur
            vero harum explicabo ipsa ducimus maxime laudantium! Aliquid ab
            officia recusandae aliquam, unde omnis voluptatem ratione.
          </p>
        </div>
      </section>
    </>
  );
}

export default WhatWhyServices;
