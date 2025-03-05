import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Okware Lewis.
      </h1>
      <div className="font-extralight text-sm mb-16">
        <span className="font-extralight text-sm">
          Web3 Developer || Smart Contract Engineer || Smart contract security
        </span>{" "}
        <br />
        Nairobi, Kenya.
        <br />
        Since 2020.
      </div>
      <p className="mb-4">
        {`
Results-driven Web3/Solidity Engineer skilled in the end-to-end software development life cycle for blockchain applications. Proven expertise in designing, implementing, and deploying secure, scalable decentralized applications. Proficient in Solidity and Web3 protocols, with strong competence in smart contract engineering, architecting, and security. Adept at ensuring robustness and resilience against vulnerabilities while optimizing performance. Collaborative and innovation-driven, committed to staying abreast of emerging trends and contributing to all phases of development, from conceptualization to deployment.  
`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
