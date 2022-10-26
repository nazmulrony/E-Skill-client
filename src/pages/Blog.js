import React from 'react';

const Blog = () => {
    return (
        <div className='min-h-[100vh] bg-secondary md:px-28 px-2 py-4 md:py-10 text-light'>
            <div className='py-6 bg-primary rounded-lg px-4 my-4'>
                <h4 className='text-xl font-semibold'>What is CORS?</h4>
                <p className='text-gray-200'>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
            </div>
            <div className='py-8 bg-primary rounded-lg px-4 my-4'>
                <h4 className='text-xl font-semibold'>Why are you using Firebase? What other options do you have to implement authentication?</h4>
                <p className='text-gray-200'>Firebase offers numerous easy-to-use SDKs, efficient back-end services, and user interface libraries for authenticating the users on the application. Typically, it takes months to establish a functional authentication process, but with Firebase, the whole system can be set up in minutes and less than 15 lines of code. That's why we are using Firebase.</p>
                <p className='text-gray-200 mt-3'>Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.</p>
            </div>
            <div className='py-8 bg-primary rounded-lg px-4 my-4'>
                <h4 className='text-xl font-semibold'>How does the private route work?</h4>
                <p className='text-gray-200'>The private route component is used to protect selected pages in a React app from unauthenticated users. The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>

            </div>
            <div className='py-8 bg-primary rounded-lg px-4 my-4'>
                <h4 className='text-xl font-semibold'>What is Node? How does Node work?</h4>
                <p className='text-gray-200'>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine (i.e. V8 engine) and executes JavaScript code outside a web browser, which was designed to build scalable network applications. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.</p>
                <p className='text-gray-200 mt-3'> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>

            </div>
            <div></div>
        </div>
    );
};

export default Blog;