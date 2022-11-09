import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="sql-nosql my-5 p-4 border-solid border-2 border-slate-600">
                <h3 className='py-2 font-bold text-xl'>Difference between SQL and NoSQL?</h3>

                <p className='py-2'><span className='font-bold text-xl'>SQL:</span> RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). These databases have fixed or static or predefined schema.These databases are not suited for hierarchical data storage.These databases are best suited for complex queries.Follows ACID property </p>

                <p className='py-2'><span className='font-bold text-xl'>NoSQL:</span> Non-relational or distributed database system. They have dynamic schema. These databases are best suited for hierarchical data storage. These databases are not so good for complex queries. Follows CAP(consistency, availability, partition tolerance)</p>
            </div>
        </div>
    );
};

export default Blogs;