import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Okware Lewis.
      </h1>
      <div className="font-extralight text-sm mb-16">
        Nairobi, Kenya.
        <br />
        Since 2020.
      </div>
      <p className="mb-4">
        {`I'm a Web3 architect specializing in seamless blockchain integrations across EVM and TVM networks. While others struggle with fragmented blockchain development, I bridge the gap by delivering end-to-end solutions that take decentralized applications from concept to production. My expertise in smart contract development ensures your project's foundation is secure, scalable, and efficient. Whether you need Ethereum-based solutions or Telegram-native applications, I bring a comprehensive understanding of both ecosystems to transform your blockchain vision into reality.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
