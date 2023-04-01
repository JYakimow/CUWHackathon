import { useContext, useEffect, useState } from "react";
import type { NextPage } from "next";
import { AuthContext } from "../context/auth";
import Navbar from "../components/Navbar";
import Panel from "../components/Panel";
import PostCard from "../components/Cards/PostCard";
import { IPostCard } from "../types";
import { useLazyQuery } from "@apollo/client";
import { ESSENCES_BY_FILTER } from "../graphql";
import { FEATURED_POSTS } from "../helpers/constants";
import mrgonzales from "./gonzales.png";
import testImg from "./testing.jpeg";

const gonzales: NextPage = () => {
  

  return (
    <div className="container">
      <Navbar />
      <div className="wrapper">
        <div className="wrapper-content">
          <h1>Posts</h1>
          <hr></hr>
          <div className="posts">
            <h2>Featured</h2>

          <img src={mrgonzales} alt="Mr. Gonzales" />
          <img src={'/public/images/${test.jpeg}'} alt="please work!" />

          </div>
        </div>
        <div className="wrapper-details">
          <Panel />
        </div>
      </div>
    </div>
  );
};

export default gonzales;