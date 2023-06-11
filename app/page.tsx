'use client'
import { useGetTopStoryIdsQuery } from "@/lib/services/hackerNewsAPI";
import { Fragment } from "react";

export default function Page() {
  const { data, error, isLoading } = useGetTopStoryIdsQuery('')

  console.log(data)
  return (
    <Fragment>
      <h1>Hacker News Clone</h1>
      <div>
        {error ? (
          <Fragment>
            Oh no, there was an error
          </Fragment>
        ) : isLoading ? (
          <Fragment>
            <p>Loading...</p>
          </Fragment>
        ) : data ? (
          <Fragment>
            <h3></h3>
          </Fragment>
        ) : null }
      </div>
    </Fragment>
  )
}