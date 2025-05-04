import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Okware Lewis.
      </h1>
      <div className="font-extralight text-sm mb-16">
        <span className="font-extralight text-sm">
          Web3 Developer || Smart Contract Engineer || Smart contract security & Researcher.
        </span>{" "}
        <br />
        Nairobi, Kenya.
        <br />
        Since 2020.
      </div>
      <p className="mb-4">
        {`
Smart Contract Architect with end-to-end SDLC experience in decentralized application development. Security-first developer and blockchain security researcher focused on building robust, audit-ready systems. Skilled in smart contract design, Web3 integration, and non-Web3-native user onboarding. Delivering scalable, secure DApps from architecture to production.`}
      </p>
      <div className="my-8">
       Hire me.
      </div>
    </section>
  );
}
