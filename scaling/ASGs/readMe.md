# What is ASGs (Auto Scaling Groups)

## Auto Scaling Group is an AWS feature that:

ASG is a AWS feature which automatically starts or terminate the EC2 instances on your desired number of servers.

Helps maintain availability, performance, and cost-efficiency.

Works with a Launch Template and optionally with Load Balancers.


## Launch Template

A blueprint that defines how your EC2 instances should be launched.

Includes:

    AMI (image)

    Instance type (e.g., t2.micro)

    Key pair

    Security Groups

    User Data (Starter script)

    IAM Role

    Storage details


## AMI (Amazon Machine Image)

A pre-configured image of an OS and software.

Think of it as a snapshot of your EC2 setup (Ubuntu + Nginx + your app).

You select an AMI in the launch template.

##  Security Groups

Like virtual firewalls for your EC2 instances.

Control inbound and outbound traffic.

Example: Allow port 80 (HTTP) and 22 (SSH).


## User Data (Starter Script)

A shell script you include in your launch template.

Automatically runs when a new EC2 instance is created.

✅ Use it to install dependencies, pull code from GitHub, or start servers.



# ⚖️ LOAD BALANCER + TARGET GROUP



##  Load Balancer (ELB)


Distributes traffic evenly across EC2 instances.

Ensures no one instance gets overloaded.

You use Application Load Balancer (ALB) most of the time for web apps.

##  Target Group

A group of EC2 instances that receive traffic from Load Balancer.

ASG registers EC2s into this group automatically when scaling.


## Flow 

User ➡️ Load Balancer ➡️ Target Group ➡️ EC2 instances (managed by ASG)


## ✅ SUMMARY FLOW

    You create an AMI with your app or use a base AMI.

    Create a Launch Template that:

        Uses the AMI

        Assigns Security Group

        Includes startup script (User Data)

    Create an Auto Scaling Group:

        Set min, max, and desired instances

        Attach Load Balancer and Target Group

        Define Scaling Policies

    ASG launches EC2s, runs your script, adds them to the Target Group.

    Load Balancer sends user traffic to healthy EC2s.

    If traffic increases, ASG adds more EC2s automatically.