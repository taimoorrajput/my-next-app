'use client'
import { useParams } from "next/navigation";


export default  function Post() {
  const { id } = useParams()
  return <h1>Post ID: {id}</h1>;
}