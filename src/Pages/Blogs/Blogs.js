import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="sql-nosql my-5 p-4 border-solid border-2 border-slate-600">
                <h3 className='py-2 font-bold text-xl'>Difference between SQL and NoSQL?</h3>

                <p className='py-2'>
                    <span className='font-bold text-xl'>SQL:</span>
                    RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). These databases have fixed or
                    static or predefined schema.These databases are not suited for hierarchical data
                    storage.These databases are best suited for complex queries.Follows ACID
                    property
                </p>

                <p className='py-2'>
                    <span className='font-bold text-xl'>NoSQL:</span>
                    Non-relational or distributed database system. They have dynamic schema. These
                    databases are best suited for hierarchical data storage. These databases are not
                    so good for complex queries. Follows CAP(consistency, availability, partition
                    tolerance)</p>
            </div>

            <div className="JWT my-5 p-4 border-solid border-2 border-slate-600">
                <h3 className='py-2 font-bold text-xl'>What is JWT, and how does it work?</h3>

                <p className='py-2'>
                    <span className='font-bold text-xl'>JWT:</span>JWT, or JSON Web Token, is an
                    open standard used to share security information between two parties — a client
                    and a server. Each JWT contains encoded JSON objects, including a set of claims.
                    JWTs are signed using a cryptographic algorithm to ensure that the claims cannot
                    be altered after the token is issued.</p>

                <p className='py-2'>
                    <span className='font-bold text-xl'>JWT Work:</span>
                    JWTs differ from other web tokens in that they contain a set of claims. Claims
                    are used to transmit information between two parties. What these claims are
                    depends on the use case at hand. For example, a claim may assert who issued the
                    token, how long it is valid for, or what permissions the client has been
                    granted. A JWT is a string made up of three parts, separated by dots (.), and
                    serialized using base64. In the most common serialization format, compact
                    serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz. Once
                    decoded, you will get two JSON strings: The header and the payload. The
                    signature. The JOSE (JSON Object Signing and Encryption) header contains the
                    type of token — JWT in this case — and the signing algorithm. The payload
                    contains the claims. This is displayed as a JSON string, usually containing no
                    more than a dozen fields to keep the JWT compact. This information is typically
                    used by the server to verify that the user has permission to perform the action
                    they are requesting. There are no mandatory claims for a JWT, but overlaying
                    standards may make claims mandatory. For example, when using JWT as bearer
                    access token under OAuth2.0, iss, sub, aud, and exp must be present. some are
                    more common than others. The signature ensures that the token hasn’t been
                    altered. The party that creates the JWT signs the header and payload with a
                    secret that is known to both the issuer and receiver, or with a private key
                    known only to the sender. When the token is used, the receiving party verifies
                    that the header and payload match the signature.
                </p>
            </div>

            <div className="sql-nosql my-5 p-4 border-solid border-2 border-slate-600">
                <h3 className='py-2 font-bold text-xl'>What is the difference between javascript and NodeJS?</h3>

                <p className='py-2'>
                    <span className='font-bold text-xl'>Javascript:</span>
                    Javascript is a programming language that is used for writing scripts on the website. Javascript can only be run in the browsers. It is basically used on the client-side. Javascript is capable enough to add HTML and play with the DOM. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. Javascript is used in frontend development. Some of the javascript frameworks are RamdaJS, TypedJS, etc. It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. 
                </p>

                <p className='py-2'>
                    <span className='font-bold text-xl'>NodeJS:</span>
                    NodeJS is a Javascript runtime environment.We can run Javascript outside the browser with the help of NodeJS.It is mostly used on the server-side.Nodejs does not have capability to add HTML tags. V8 is the Javascript engine inside of node.js that parses and runs Javascript. Nodejs is used in server-side development. Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. Nodejs is written in C, C++ and Javascript.</p>
            </div>
        </div>
    );
};

export default Blogs;