import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About/About.jsx";
import OrderPopup from "./components/OrderPopup/OrderPopup.jsx";
import Login from "./components/login";
import Register from "./components/register";
import ForgotPassword from "./components/forgortpassword";
import ResetPassword from "./components/reset_password";
import TestFile from "./components/TestFile.jsx";
import AllBooks from "./components/AllBooks/AllBooks.jsx";
import Audiobk from "./components/AllBooks/Audiobk.jsx";
import "./cStyles/home.css";
import Magasearch from "./components/AllBooks/Magasearch.jsx";
import Report from "./components/admin/Report.jsx";
import Comments from "./components/admin/Comments.jsx";
import BookRatings from "./components/admin/BookRatings.jsx";
import AudiobookRatings from "./components/admin/AudiobookRatings.jsx";
import MagazineRatings from "./components/admin/MagazineRatings.jsx";
import Transaction from "./components/admin/Transaction.jsx";
// admin panel import
import Header from "./components/admin/AdminHeader.jsx";
import Sidebar from "./components/admin/AdminSidebar.jsx";
import Admin from "./components/admin/Admin.jsx";
import Books from "./components/admin/Books.jsx";
import Audiobooks from "./components/admin/Audiobooks.jsx";
import Genre from "./components/admin/Genre.jsx";
import Customer from "./components/admin/Customer.jsx";
import Inventory from "./components/admin/Inventory.jsx";
import Adddbook from "./components/admincompo/Adddbook.jsx";
import Addgenre from "./components/admincompo/Addgenre.jsx";
import Adduser from "./components/admincompo/Adduser.jsx";
import Addaudiobook from "./components/admincompo/Addaudiobook.jsx";
import Payments from "./components/admin/Payments.jsx";
import "./cStyles/admin.css";
import BookDetail from "./components/admin/BookDetail.jsx";
import AudiobookDetail from "./components/admin/AudiobookDetail.jsx";
import AudiobookSlider from "./components/AudiobookSlider.jsx";
import MagazineDetails from "./components/MagazineDetails.jsx";
import TestAddBook from "./components/TestAddBook.jsx";
import AddBookChapters from "./components/AddBookChapters.jsx";
//User imports
import UserProfile from "./User/UserProfile.jsx";
import AccountSettings from "./components/UserProfile/AccountSettings.jsx";
import SingleBanner from "./components/Banners/SingleBanner.jsx";
import UserSidebar from "./components/UserProfile/UserSidebar.jsx";
import YourBooks from "./components/UserProfile/YourBooks.jsx";
import WriteBook from "./components/UserProfile/WriteBook.jsx";
import YourAddedBooks from "./components/UserProfile/YourAddedBooks.jsx";
import ChangePassword from "./components/UserProfile/ChangePassword.jsx";
import Premium from "./components/UserProfile/Premium.jsx";
import LegalNotice from "./components/UserProfile/LegalNotice.jsx";
import SuccessPage from "./components/UserProfile/SuccessPage";
// import Book from "./components/BooksSlider/Books.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookView from "./components/BookView.jsx";
import AuthorProfile from "./components/AuthorProfile.jsx";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const uData = JSON.parse(window.localStorage.getItem("user"));
  const user_role = uData?.role;
  // console.log(user_role);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <div className="w-full h-auto bg-white dark:bg-neutral-950 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      {user_role == "admin" && admin_href && (
        <div className="grid-container">
          <Header OpenSidebar={OpenSidebar} />
          <Sidebar
            openSidebarToggle={openSidebarToggle}
            OpenSidebar={OpenSidebar}
          />
          <Router>
            <Routes>
              {/* admin routing */}
              <Route exact path="/admin" element={<Admin />} />
              <Route path="/admin/books" element={<Books />} />
              <Route path="/admin/audiobooks" element={<Audiobooks />} />
              <Route path="/admin/genre" element={<Genre />} />
              <Route path="/admin/customer" element={<Customer />} />
              <Route path="/admin/inventory" element={<Inventory />} />
              <Route path="/admin/addbook" element={<Adddbook />} />
              <Route path="/admin/addaudio" element={<Addaudiobook />} />
              <Route path="/admin/addgenre" element={<Addgenre />} />
              <Route path="/admin/adduser" element={<Adduser />} />
              <Route path="/admin/payments" element={<Payments />} />
              <Route path="/admin/report" element={<Report />} />
              <Route path="/admin/comments" element={<Comments />} />
              <Route path="/admin/bkratings" element={<BookRatings />} />
              <Route
                path="/admin/audioratings"
                element={<AudiobookRatings />}
              />
              <Route path="/admin/magaratings" element={<MagazineRatings />} />
              <Route path="/admin/transaction" element={<Transaction />} />
            </Routes>
          </Router>
          <Router>
            <Routes>
              {/* User Routing */}
              <Route
                exact
                path="/accountsettings"
                element={<AccountSettings />}
              />
              <Route exact path="/singlebanner" element={<SingleBanner />} />
              <Route exact path="/yourbooks" element={<YourBooks />} />
              <Route exact path="/writebook" element={<WriteBook />} />
              <Route
                exact
                path="/youraddedbooks"
                element={<YourAddedBooks />}
              />
              <Route exact path="/premium" element={<Premium />} />
              <Route exact path="/legalnotice" element={<LegalNotice />} />
              <Route
                exact
                path="/changepassword"
                element={<ChangePassword />}
              />
              <Route exact path="/usersidebar" element={<UserSidebar />} />
              <Route path="/success" element={<SuccessPage />} />
            </Routes>
          </Router>
        </div>
      )}
      <Router>
        <Routes>
          {/* {isLoggedIn == false ? <Loading /> : */}
          {uData && uData?.email && (
            <Route
              exact
              path="/"
              element={<Home handleOrderPopup={handleOrderPopup} />}
            />
          )}
          <Route
            path="/admin/books/book-detail/:bkname"
            element={<BookDetail />}
          />
          <Route
            path="/admin/books/audiobook-detail/:audioBkName"
            element={<AudiobookDetail />}
          />
          <Route path="/about/about.jsx" element={<About />} />
          <Route
            path="/admin/books/magazines-detail/:magName"
            element={<MagazineDetails />}
          />
          {uData == null && <Route exact path="/" element={<Login />} />}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgortpassword" element={<ForgotPassword />} />
          <Route
            path="/reset_password/:id/:token"
            element={<ResetPassword />}
          />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/autor-profile/:authName" element={<AuthorProfile />} />
          <Route path="/allbooks" element={<AllBooks />} />
          <Route path="/audiobk" element={<Audiobk />} />
          <Route path="/magasearch" element={<Magasearch />} />
          <Route path="/audiobookslider" element={<AudiobookSlider />} />
          <Route path="/about" element={<About />} />

          {/* <Route path="/bookslider/books" element={<Books />} /> */}
          <Route path="/test" element={<TestFile />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/user/:username/:activepage" element={<UserProfile />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/test-add-book" element={<TestAddBook />} />
          <Route path="/test-chp/:bkName" element={<AddBookChapters />} />
          <Route path="/bookview/:bkName" element={<BookView />} />
        </Routes>
      </Router>
      {!admin_href && <Footer />}
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;

export const admin_href =
  window.location.href == "http://localhost:5173/admin" ||
  window.location.href == "http://localhost:5173/admin/books" ||
  window.location.href == "http://localhost:5173/admin/audiobooks" ||
  window.location.href == "http://localhost:5173/admin/genre" ||
  window.location.href == "http://localhost:5173/admin/customer" ||
  window.location.href == "http://localhost:5173/admin/inventory" ||
  window.location.href == "http://localhost:5173/admin/addbook" ||
  window.location.href == "http://localhost:5173/admin/addaudio" ||
  window.location.href == "http://localhost:5173/admin/addgenre" ||
  window.location.href == "http://localhost:5173/admin/adduser" ||
  window.location.href == "http://localhost:5173/admin/payments" ||
  window.location.href == "http://localhost:5173/admin/report" ||
  window.location.href == "http://localhost:5173/admin/comments" ||
  window.location.href == "http://localhost:5173/admin/bkratings" ||
  window.location.href == "http://localhost:5173/admin/audioratings" ||
  window.location.href == "http://localhost:5173/admin/magaratings" ||
  window.location.href == "http://localhost:5173/admin/transaction" ||
  window.location.href ==
    "http://localhost:5173/admin/books/book-detail/:bkname" ||
  window.location.href ==
    "http://localhost:5173/admin/books/audiobook-detail/:audioBkName";
window.location.href ==
  "http://localhost:5173/admin/books/magazines-detail/:magName";
