
# 🌐 Networking Notes


### What is Internet

The internet is a global network of computers and other electronic devices that are connected together, allowing them to communicate, share information, and access services.

![Screenshot 2025-07-09 222654](https://github.com/user-attachments/assets/27c90f5d-b97e-4fea-8901-b0a1ae087b59)


---

### History of internet 

The internet started as a U.S. military research project called ARPANET (Advanced Research Projects Agency Network).

The goal was to create a decentralized communication system that could survive a nuclear attack.

First message sent: "LOGIN" — but it crashed after "LO".

---

### How ARPANET Was Formed

In the 1960s, during the Cold War, the U.S. Department of Defense wanted a way for computers to communicate and share data across long distances — even if some parts of the network were destroyed (like in a nuclear attack).  
So, they funded a research project through an agency called ARPA (Advanced Research Projects Agency), now known as DARPA.

---

### Idea of Packet Switching (1960s)


In the 1960s, two key scientists revolutionized data communication:

- **Paul Baran** (USA)
- **Donald Davies** (UK)

They introduced the concept of **Packet Switching**:
- Breaks data into small units called **packets**.
- Each packet is sent independently through the network.
- Packets are reassembled at the destination.
- Benefits: Faster, more efficient, and fault-tolerant communication.

---

### What are nodes 

**Nodes** are devices connected to a network. These can:
- Send data
- Receive data
- Forward data

**Examples of nodes**:
- Computers
- Printers
- Routers
- Switches
- Smartphones

---

### What is router 

A router is a networking device that connects two or more computer networks — such as local area networks (LANs) and wide area networks (WANs) — and manages the flow of data packets between them.  
Its main function is to forward data packets to their correct destination based on their IP addresses, ensuring that information sent over the internet or between networks reaches the right device.

---

## 🏫 First Nodes of ARPANET (1969)

The first routers used in ARPANET were called **IMPs (Interface Message Processors)**, built by **BBN Technologies**.

Four initial universities were connected:

| # | Institution | Location |
|---|-------------|----------|
| 1 | UCLA (University of California) | Los Angeles, CA |
| 2 | SRI (Stanford Research Institute) | Menlo Park, CA |
| 3 | UCSB (University of California, Santa Barbara) | Santa Barbara, CA |
| 4 | University of Utah | Salt Lake City, UT |

![Screenshot 2025-07-09 223459](https://github.com/user-attachments/assets/bf5b2928-01ee-4299-8f8d-9ad147dbb16a)



# 🧠 How Data Travels Through a Network (From Binary Level) - Networking Notes

> 📚 This guide explains how data (e.g., a message) is sent from one device to another over a network, following the OSI model and diving into binary-level transmission.

---

## 📌 Scenario

You send the message **"Hi"** to your friend on WhatsApp. Let's break down what happens under the hood, step-by-step.

---

## 🧱 OSI Model Overview

| Layer No. | Layer Name         | Function Summary |
|-----------|--------------------|------------------|
| 7         | Application         | Interface for user/application |
| 6         | Presentation        | Converts to binary, encrypts/decrypts |
| 5         | Session             | Manages connection/session |
| 4         | Transport           | Breaks into packets, reliability (TCP/UDP) |
| 3         | Network             | Adds source & destination IP (routing) |
| 2         | Data Link           | Adds MAC address (local delivery) |
| 1         | Physical            | Sends bits via signals |

---

## 🚶 Step-by-Step Data Flow (Sending "Hi")

### 1️⃣ Application Layer (Layer 7)
- You type `"Hi"` in WhatsApp and hit Send.
- WhatsApp prepares the message with metadata (timestamp, recipient info).

---

### 2️⃣ Presentation Layer (Layer 6)
- Converts the message to binary:
```

"H" = 01001000
"i" = 01101001
Final: 01001000 01101001

```
- May encrypt the message (e.g., end-to-end encryption).

---

### 3️⃣ Session Layer (Layer 5)
- Manages session between sender and receiver.
- Keeps the connection active and synchronized.

---

### 4️⃣ Transport Layer (Layer 4)
- Breaks data into **packets**.
- Adds:
- **Port Number** (e.g., 5222 for WhatsApp)
- **Sequence Number**
- **Checksum**
- Uses:
- **TCP** for reliable delivery (with acknowledgment).
- Or **UDP** for faster but unreliable delivery (e.g., calls).

---

### 5️⃣ Network Layer (Layer 3)
- Adds **IP Header**:
- Source IP: Your device's IP (e.g., 192.168.1.4)
- Destination IP: WhatsApp server IP (e.g., 13.107.42.14)
- Handles **routing** across the internet.

---

### 6️⃣ Data Link Layer (Layer 2)
- Adds **MAC Header**:
- Source MAC: Your device's MAC address.
- Destination MAC: Router's MAC (next-hop device).
- Used for **local delivery** on the same network (Wi-Fi, Ethernet).

---

### 7️⃣ Physical Layer (Layer 1)
- Converts all binary data into signals:
- **Wi-Fi** → Radio waves
- **Ethernet** → Electrical signals
- Transmits `0s` and `1s` over the medium.

---

## 🌐 Internet Journey Path

1. Your Device → Router (via Wi-Fi)
2. Router → ISP (via cable/fiber)
3. ISP → Internet Backbone → WhatsApp Server
4. Server → Receives, stores, or forwards to friend’s device

---

## 🔁 Receiving the Message

Friend's device reverses the same steps:
Physical → Data Link → Network → Transport → Session → Presentation → Application

---

## 🔐 Security & Other Concepts

- **Encryption**: Your message is encrypted before being sent.
- **NAT**: Private IP (e.g., 192.168.x.x) gets translated to a public IP.
- **DNS**: Resolves domain names to IP addresses (e.g., `api.whatsapp.com` → `13.107.42.14`)

---

## 🧬 Example Packet in Binary Flow

```

\[Payload]        = 01001000 01101001

* TCP Header     = Port, Seq No, Checksum
* IP Header      = Source/Destination IP
* MAC Header     = Source/Destination MAC
  \= Final frame sent as signals (bits)

```

---

## 🛠 Tools to Explore Practically

- `Wireshark` – See actual packets sent/received
- `ping` – Test reachability
- `traceroute` – Track path to destination
- `nslookup` – DNS lookup
- `netstat` – View network connections

---

## 🧭 What to Learn Next

- OSI Model & TCP/IP Stack
- TCP vs UDP
- DNS, NAT, DHCP
- IP addressing and subnetting
- Routing protocols (e.g., RIP, OSPF, BGP)
- Firewalls, VPNs, Proxies

---

## ✅ Summary

> A simple "Hi" message travels across multiple layers, turns into binary, becomes packets, and journeys across routers and servers to reach your friend — all in milliseconds!


# 🌐 Types of Computer Networks – Notes

This document explains all the **main types of computer networks**, simply and clearly, with real-world examples and a summary table.

---

## 🔹 1. PAN (Personal Area Network)

- **Definition:** A very small network used for connecting devices around a single person.
- **Range:** ~10 meters
- **Examples:**
  - Bluetooth connection between your phone and wireless earbuds.
  - USB connection between a computer and printer.

---

## 🔹 2. LAN (Local Area Network)

- **Definition:** A network that connects computers and devices within a small area like a home, school, or office.
- **Range:** Typically limited to a building or campus.
- **Examples:**
  - School or college computer lab.
  - Office network connecting computers and printers.
- **Tech Used:** Ethernet, Wi-Fi

---

## 🔹 3. WLAN (Wireless Local Area Network)

- **Definition:** Similar to LAN but uses wireless communication (Wi-Fi).
- **Examples:**
  - Wi-Fi network in a home or cafe.
- **Note:** WLAN is just a type of LAN that’s wireless.

---

## 🔹 4. MAN (Metropolitan Area Network)

- **Definition:** Covers a larger area than LAN, usually spans a city.
- **Examples:**
  - City-wide Wi-Fi.
  - Cable TV network within a city.
- **Used By:** Universities, government buildings, ISPs.

---

## 🔹 5. WAN (Wide Area Network)

- **Definition:** Covers a very large area, like a country or the whole world.
- **Examples:**
  - The Internet (biggest example).
  - Bank ATM networks across multiple cities.
- **Note:** WANs use leased telecom lines and satellite links.

---




# Topologies

## 1) What is Bus topology
It is a network configuration where all devices are connected to a single central cable known as the bus or backbone. Each device taps into this cable to sends and receive data.

Disadvantages:
Performance degrades as more devices are added or as the cable length increases.
A failure in the main cable can bring down the entire network

<img width="1277" height="680" alt="Screenshot 2025-07-11 204822" src="https://github.com/user-attachments/assets/b830d2d4-31a8-4dce-a001-e815315398ff" />


## 2) Ring topology 
It is a network configuration where each device is connected to exactly two other devices forming closed loop or circular structure. In this setup, data travels from one device to next around the ring, passing through each intermediate device until it reaches its destination.  

Disadvantages:
Network failure if a single device or connection breaks (in unidirectional rings), and challenges in adding and removing devices.

<img width="915" height="752" alt="Screenshot 2025-07-11 210750" src="https://github.com/user-attachments/assets/265e0fb3-a619-49ce-80d3-c0087addc9e9" />


## 3) Star topology
It is a type of network configuration where every device or (node) is individually connected to a single central hub, switch, or router. It is widely used in homes, offices, schools, and other environments due to its reliability.

<img width="952" height="673" alt="Screenshot 2025-07-11 212724" src="https://github.com/user-attachments/assets/d5786617-5f1c-412d-ba71-231b14bb7759" />


## 4) Mesh topology
It is a network configuration where each device (node) is connected directly to multiple other devices, creating a web-like structure with multiple paths for data to travel. This design provides high redundancy and reliability because data can take several routes to react its destination.

Disadvantage: 
: Implementing a mesh network requires a large number of cables and network interfaces, making it significantly more expensive than other topologies
: Setting up, configuring, and maintaining a mesh network is complex, especially as the number of nodes increases. Each new node must be connected to every other node, which becomes increasingly difficult to manage.

<img width="1187" height="780" alt="Screenshot 2025-07-11 213850" src="https://github.com/user-attachments/assets/c74e6f5f-3b81-492c-98fd-9e88c68545bc" />

