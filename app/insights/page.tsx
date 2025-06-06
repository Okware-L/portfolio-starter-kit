import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Insights',
  description: 'Read my insights.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Karibu.</h1>
      <BlogPosts />
    </section>
  )
}
