# What is Clustering In Node Js

Clustering in Node.js is a technique used to take advantage of multi-core systems. Node.js is single-threaded by default, meaning it runs on a single CPU core. However, with clustering, you can spawn multiple instances (child processes) of your Node.js application, each running on its own core, allowing your app to handle more load concurrently.

# Why use clustering?
Node.js runs on a single thread, so:
    One core = one thread = one request at a time (if it's CPU-bound).
    Clustering allows you to run multiple processes, making full use of all CPU cores.
    Great for scaling your app on a single server.


![Screenshot 2025-06-13 125943](https://github.com/user-attachments/assets/cf28ba13-0dc2-4f61-8bc0-a921530aadd9)
