import React from "react";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const FooterBlock = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/contact");
  };

  return (
    <section className="w-full bg-[#4A8CFF] py-20 px-4 text-white text-center rounded-t-[32px]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight font-inter">
          Ready to land the interviews you{" "}
          <span className="font-playfair italic font-medium">actually deserve?</span>
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl font-inter">
          Sign up for JobLynkr and get started — no pressure, <br /> no upfront fees.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <Button
            onClick={handleRedirect}
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            aria-label="Start for free - navigate to contact page"
            sx={{
              backgroundColor: "#ffffff",
              color: "#4A8CFF",
              fontWeight: 600,
              fontSize: "1rem",
              px: "24px",
              py: "10px",
              borderRadius: "9999px",
              textTransform: "none",
              boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                backgroundColor: "#f2f2f2",
              },
            }}
          >
            Start For Free
          </Button>
        </div>

        {/* Footer Visual */}
        <div className="mt-12 w-full">
          <img
            src="./banner.png"
            alt="JobLynkr call-to-action banner showing brand experience"
            loading="lazy"
            className="mx-auto w-full max-w-6xl rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FooterBlock;
