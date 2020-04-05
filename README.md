# SupplyMesh
A blockchain-based supply chain bounty system.

## Inspiration
The COVID-19 pandemic has highlighted the limitations our healthcare system's traditional supply chains have faced when dealing with unprecedented demand for medical supplies. 
 
Scaling from {insert mask or ventilator numbers} to {#} is an exacting task, and one that traditional supply chains and medical supply manufacturers simply cannot accomplish fast enough. Instead we see various companies like Foxconn, LVMH, and numerous smaller manufacturers shifting production away from their original focuses of electronics and perfumes to focus on producing the medical supplies we so desperately need right now.

Simultaneously we see individuals throughout communities both shocked by the trials and demands that hospitals are facing, and galvanized to help.

SupplyMesh offers a solution that brings together the hospitals that need supplies, vendors that are manufacturing medical supplies, and individuals who are invested in financially supporting healthcare providers.

## What it does
SupplyMesh creates a marketplace where hospitals can publicly post requests for the supplies they need.

Vendors can then make bids to fulfill these supply requests, competing with each other on price and allowing the hospitals to choose among competing bids.

Individuals can browse requests and participate in crowdfunding them.

The hospital can view the entire history of a vendor's interactions.

## How we built it
SupplyMesh is a Decentralized Application.

The back end code for SupplyMesh runs on Ethereum.  The smart contract that defines the logic behind SupplyMesh is written in Solidity, a language designed for writing applications that take advantage of the natural decentralized features of Ethereum.

The front end webpage for SupplyMesh is currently hosted serverlessly on Microsoft's Azure cloud platform to support HTTP-based access from all modern web browsers.

## Challenges we ran into
Ethereum has changed quite a lot since the majority of us last worked with it - there was a bit of a learning curve to getting adapted to the new changes in the web3 libraries powering Ethereum.

Working out which web frameworks would adequately support web3 and Metamask took a bit of time - we expected to use React for our frontend and a framework called Drizzle for interacting with Ethereum, but it turned out that Vue.js was more familiar to several of our developers and had perfectly adequate support for web3 libraries out of the box.

## Accomplishments that we're proud of
Blockchain-based Dapps have become increasingly popular in the last few years, but are a fairly young and at times untested technology. The fact that we were able to design, develop, and roll out the application we ended up with in a single weekend is no small feat.

## What we learned
* Several of us took a serious look at Solidity and Ethereum app development for the first time.

## What's next for Supply Mesh