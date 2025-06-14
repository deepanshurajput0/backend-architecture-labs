# What is Vertical Scaling 

**Vertical scaling** (also called **scaling up**) means **increasing the power (capacity) of a single machine** to handle more load. You're not adding more machines; you're **upgrading the existing one**.

---

### 🔧 Example of Vertical Scaling:

Suppose you have a server with:

* 4 CPU cores
* 8 GB RAM

To scale vertically, you might upgrade it to:

* 16 CPU cores
* 64 GB RAM

The application is still running on **one machine**, but it's now more powerful and can handle more requests.

---

### ✅ Advantages:

* ✅ Simple setup (no need to deal with multiple servers)
* ✅ No complex load balancing needed
* ✅ Often faster for single-threaded tasks (like some databases)

---

### ❌ Disadvantages:

* ❌ There's a hardware limit (you can't scale up forever)
* ❌ Downtime might be required for upgrades
* ❌ Cost per machine increases sharply at higher levels

---



### 💡 Real-World Use:

* Small apps or databases often start with vertical scaling.
* For large-scale systems (like YouTube, Netflix), **horizontal scaling** is more sustainable.

---


# What is SLA 

**SLA** stands for **Service Level Agreement**.

It is a formal contract or agreement between a **service provider** and a **customer** that defines the **level of service** expected from the provider.

---

### 🔍 **Key Elements of an SLA:**

1. **Service Description**:

   * What services will be provided.
   * Scope of work.

2. **Performance Standards**:

   * Uptime (e.g., 99.9% uptime guarantee).
   * Response time for support requests.
   * Resolution time for issues.

3. **Responsibilities**:

   * What the service provider is responsible for.
   * What the client is responsible for.

4. **Monitoring and Reporting**:

   * How performance will be tracked.
   * How and when reports will be shared.

5. **Penalties/Compensation**:

   * What happens if the service provider fails to meet the SLA.
   * Often includes refunds or service credits.

6. **Security & Confidentiality**:

   * Data protection and security measures.

7. **Duration and Termination**:

   * How long the SLA lasts.
   * How it can be ended by either party.

---

### 🧠 **Simple Example:**

If a company uses a cloud service, the SLA might state:

> “The cloud service will be available 99.9% of the time per month. If downtime exceeds this limit, the customer will receive a 10% credit on their bill.”
