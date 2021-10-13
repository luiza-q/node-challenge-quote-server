// import React, { useState, useEffect } from "react";

// const Bookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [searchVal, setSearchVal] = useState("");
//   const [customerProfileId, setCustomerProfileId] = useState();
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState();

//   useEffect(() => {
//     setIsLoading(true);

//     fetch("http://localhost:5000/quotes")
//       .then(res => res.json())
//       .then(data => {
//         if (data.error) throw new Error(data.error);

//         const bookings = searchVal
//           ? data.filter(
//               value =>
//                 value.firstName === searchVal || value.surname === searchVal
//             )
//           : data;

//         setBookings(bookings);
//         setIsLoading(false);
//       })
//       .catch(e => {
//         setError(e.message);
//         setIsLoading(false);
//       });
//   }, [searchVal]);

//   return (
//     <div>
     
//         <Search search={setSearchVal} />
//         {error && <p>{error}</p>}
//         {isLoading ? (
//           <p>Loading...</p>
//         ) : (
//           <SearchResults
//             results={bookings}
//             onShowCustomerProfile={setCustomerProfileId}
//           />
//         )}
//         {customerProfileId && <CustomerProfile id={customerProfileId} />}
      
//     </div>
//   );
// };

// export default Bookings;