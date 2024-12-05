interface PostProps {
  params: { id: string };
}

export default async function Post({ params }: PostProps) {
  const { id } = params;
  return <h1>Post ID: {id}</h1>;
}