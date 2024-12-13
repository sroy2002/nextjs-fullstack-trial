import React from "react";
import Image from "next/image";
import blog1 from "@/public/blog1.jpg";
import user from "@/public/user.jpeg";
const BlogPost = () => {
  return (
    <div className="mx-8 px-[5rem] py-[1.5rem] text-black">
      <div className=" flex flex-row-reverse justify-between gap-8">
        <div className="">
          <Image src={blog1} alt={"blog 1"} className="w-[25rem]" />
        </div>
        <div>
          <p className="text-2xl font-bold mt-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ab, ullam?
          </p>
          <div className="my-4 flex items-center gap-4">
            <Image
              src={user}
              alt="user-pic"
              className="w-[3rem] rounded-full object-cover"
            ></Image>
            <p className="text-lg"> User </p>
          </div>
        </div>
      </div>
      <div className="my-8 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam quia veritatis nostrum alias laudantium id quod earum illum vel labore aspernatur non repellendus, iure eius corporis architecto impedit obcaecati eos facere explicabo laboriosam laborum ipsum aliquid. Illum, fuga. Quasi sequi, quidem deserunt optio enim consequuntur blanditiis ea, maxime non dolore, sapiente delectus temporibus a perspiciatis aspernatur dicta quaerat incidunt nesciunt saepe repellendus. Quo autem, vel itaque unde perferendis vitae laboriosam ipsa sed, vero debitis tempore doloremque esse voluptatem qui ipsum totam accusantium dolorum dolor quaerat ipsam fugit porro? Incidunt, voluptatibus eligendi? Aperiam a officiis libero adipisci asperiores hic ex obcaecati.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores perspiciatis earum animi eligendi vitae quam, quo nihil vero ea sapiente ut eaque enim labore quia cum. Alias magni similique doloremque modi reprehenderit quasi id non ipsum quam libero, et magnam cum, placeat voluptatum nesciunt laboriosam temporibus in. Officia esse saepe numquam, atque perspiciatis hic neque nihil reiciendis quaerat necessitatibus! Tempore, quo aliquid eius placeat nostrum expedita voluptate magni molestiae! Hic, fuga vel optio dolorum ut quae eaque numquam aperiam non quaerat delectus laudantium laborum deleniti eveniet? Iste perspiciatis alias iusto dicta quis repellat asperiores ducimus? Ratione at cum atque facilis ipsa neque omnis! Quibusdam sapiente fugit esse et cumque qui voluptatum autem nam recusandae obcaecati, iure eius similique reiciendis quo excepturi ipsum dolorum. Facilis quidem similique commodi dolores voluptatibus ipsa at ducimus, molestias non nostrum, ex, unde assumenda veritatis? Error nihil quis repudiandae necessitatibus temporibus doloribus facere, itaque expedita dolores ducimus modi minus tenetur nesciunt optio eos totam tempora corrupti earum praesentium mollitia beatae maiores. Possimus autem veritatis, numquam facilis vero quia earum dolor harum optio velit temporibus saepe voluptas expedita nostrum impedit dicta blanditiis, suscipit nobis architecto voluptate. Accusantium harum iusto amet fuga expedita necessitatibus aut ullam repudiandae ipsum!
      </div>
      
    </div>
  );
};

export default BlogPost;
