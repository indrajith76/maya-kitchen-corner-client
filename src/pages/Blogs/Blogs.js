import React from "react";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="px-5">
      <h2 className="text-5xl text-center font-semibold my-10 text-slate-600">Blogs</h2>
      <div className="container mx-auto grid lg:grid-cols-2 gap-10">
        <div className="border p-5 shadow-lg">
          <h4 className="">Difference between SQL and NoSQL</h4>
          <hr className="mb-3" />
          <p>
            <span className="font-bold text-slate-700">SQL :</span>
            <br />
            1. These databases are not suited for hierarchical data storage.
            <br />
            2. These databases are best suited for complex queries.
            <br />
            3. Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc
            <br />
          </p>
          <p>
            <span className="font-bold text-slate-700">NoSQL :</span>
            <br />
            1. Non-relational or distributed database system.
            <br />
            2. These databases are not so good for complex queries.
            <br />
            3. Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc
            <br />
          </p>
        </div>
        <div className="border p-5 shadow-lg">
          <h4 className="">What is JWT, and how does it work?</h4>
          <hr className="mb-3" />
          <p>
            JSON Web Token is an open standard for securely transmitting
            information between parties as JSON object. It is compact, readable
            and digitally signed using a private key/ or a public key pair by
            the Identity Provider
          </p>
        </div>
        <div className="border p-5 shadow-lg">
          <h4 className="">
            What is the difference between javascript and NodeJS?
          </h4>
          <hr className="mb-3" />
          <p>
            <span className="font-bold text-slate-700">NodeJS : </span>
            NodeJS is a cross-platform and opensource Javascript runtime
            environment that allows the javascript to be run on the server-side.
            Nodejs allows Javascript code to run outside the browser. Nodejs
            comes with a lot of modules and mostly used in web development.
            <br />
            <span className="font-bold text-slate-700">JavaScript : </span>
            Javascript is a Scripting language. It is mostly abbreviated as JS.
            It can be said that Javascript is the updated version of the ECMA
            script. Javascript is a high-level programming language that uses
            the concept of Oops but it is based on prototype inheritance
          </p>
        </div>
        <div className="border p-5 shadow-lg">
          <h4 className="">How does NodeJS handle multiple requests at the same time?</h4>
          <hr className="mb-3" />
          <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
