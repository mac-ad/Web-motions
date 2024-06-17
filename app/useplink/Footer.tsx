import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="h-[80vh] lg:h-screen flex items-center justify-center gap-4 flex-col relative py-[10rem]">
      <div className="">
        <h2 className="text-4xl font-medium text-center max-w-[50ch] w-[85%] mx-auto sm:text-5xl">
          <div>All major</div> <div>payment methods</div>
        </h2>
        <p className="max-w-[60ch] mx-auto text-center w-[80%] mx-auto opacity-70 mt-2">
          Plink works with Mollie. Your customer can complete the payment
          requests using all major payment methods, like creditcard or iDEAL.
        </p>
      </div>

      <div className="absolute bottom-0 sm:h-[30%] w-full overflow-x-hidden">
        <motion.div
          animate={{
            translateX: "-100%",
          }}
          transition={{
            type: "tween",
            ease: "linear",
            duration: 10,
            repeat: Infinity,
          }}
          className="flex h-full "
        >
          {Array(4)
            .fill(null)
            .map((item: null, idx: number) => (
              <img
                key={idx}
                src="/images/footer.png"
                className="w-full h-full object-contain"
                alt=""
              />
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
