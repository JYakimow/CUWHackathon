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

const gonzales: NextPage = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="wrapper">
        <div className="wrapper-content">
          <h1>Gonzales</h1>
          <hr></hr>
          <img src="gonzales.png"></img>
                </div>
              </div>
            )}
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
