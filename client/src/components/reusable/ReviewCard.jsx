

// import React from "react";
// import { Avatar, Typography } from "@mui/material";
// import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

// const ReviewCard = ({ quote, name, role, avatar }) => {
//   return (
//     <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-md text-left">
//       {/* Quote Icon */}
//       <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center mb-4">
//         <FormatQuoteIcon style={{ color: "white", fontSize: 18 }} />
//       </div>

//       {/* Quote Text */}
//       <Typography
//         variant="body1"
//         className="text-gray-700 text-[16px] leading-relaxed mb-6 font-normal whitespace-normal break-words"
//         style={{ fontFamily: "'Inter', sans-serif" }}
//       >
//         {quote}
//       </Typography>

//       {/* Avatar + Name & Role */}
//       <div className="flex items-center gap-4">
//         <Avatar src={avatar} alt={name} sx={{ width: 48, height: 48 }} />
//         <div>
//           <Typography
//             variant="subtitle1"
//             className="text-black font-semibold text-[15px]"
//           >
//             {name}
//           </Typography>
//           <Typography
//             variant="caption"
//             className="text-gray-500 uppercase tracking-wide text-[12px]"
//           >
//             {role}
//           </Typography>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewCard;




import React from "react";
import { Avatar, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const ReviewCard = ({ quote, name, role, avatar }) => {
  return (
    <div className="bg-white rounded-2xl p-6 w-full max-w-sm md:max-w-md shadow-md text-left transform transition-all duration-300 hover:scale-105">
      {/* Quote Icon */}
      <div className="bg-blue-500 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mb-4">
        <FormatQuoteIcon
          style={{ color: "white", fontSize: "1rem" }}
          className="md:text-lg"
        />
      </div>

      {/* Quote Text */}
      <Typography
        variant="body1"
        className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 font-normal whitespace-normal break-words"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {quote}
      </Typography>

      {/* Avatar + Name & Role */}
      <div className="flex items-center gap-4">
        <Avatar
          src={avatar}
          alt={name}
          sx={{ width: { xs: 36, md: 48 }, height: { xs: 36, md: 48 } }}
          className="w-9 h-9 md:w-12 md:h-12"
        />
        <div>
          <Typography
            variant="subtitle1"
            className="text-black font-semibold text-sm md:text-base"
          >
            {name}
          </Typography>
          <Typography
            variant="caption"
            className="text-gray-500 uppercase tracking-wide text-xs md:text-sm"
          >
            {role}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
