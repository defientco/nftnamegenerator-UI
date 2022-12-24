/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import { Tweet } from "react-twitter-widgets"
import _ from "lodash"
import { useNFTNameGenerator } from "../../providers/NFTNameGeneratorProvider"
import SkeletonCard from "../SkeletonCard"

const Results = () => {
  const { twitterId, imageURI, name, tokenId, haveTokenId } = useNFTNameGenerator()
  const [loading, setLoading] = useState(true)
  const openSeaLink = `https://testnets.opensea.io/assets/${process.env.NEXT_PUBLIC_NETWORK}/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}/${tokenId}`
  return (
    <div className="w-full max-w-4xl overflow-hidden">
      <div className="flex flex-col items-center justify-center w-full mx-auto text-center">
        <div className="p-2 m-2 bg-white rounded-lg ">
          <svg viewBox="0 175.71 699.04 99.66" className="scale-x-90">
            <path d="M98.69 264.17v-36.83c-.13-.05-.26-.11-.39-.16-.32.54-.66 1.08-.96 1.63-6.17 11.34-12.35 22.67-18.47 34.03-.58 1.07-1.18 1.54-2.46 1.52-5.13-.09-10.27-.09-15.4 0-1.3.02-1.88-.48-2.45-1.53-6.08-11.32-12.2-22.61-18.32-33.9-.3-.55-.62-1.08-1.24-1.57v36.83H.13c-.03-.63-.08-1.25-.08-1.86-.01-24.14.01-48.27-.05-72.41 0-1.78.51-2.21 2.23-2.2 15.85.06 31.69.05 47.54 0 1.37 0 2.13.38 2.79 1.65 5.33 10.21 10.74 20.37 16.14 30.55.29.55.61 1.1 1.01 1.82 1.5-2.71 2.91-5.24 4.31-7.78 4.55-8.26 9.1-16.52 13.62-24.79.49-.9.98-1.44 2.15-1.44 15.53.04 31.06.03 46.59.04.31 0 .62.07 1.07.12v76.29H98.7Zm127.41-38.72c1.75 13.08 2.91 25.78 2.37 38.72h-38.91c-.04-.5-.13-.99-.12-1.48.65-25.23-1.09-50.39-2.58-75.55-.17-2.85-.15-2.84 2.67-3.13 11.3-1.15 22.62-1.74 33.98-1.03 1.56.1 2.66.57 3.69 1.83 11.06 13.54 23.73 25.48 36.92 36.9.32.28.7.48 1.29.89-2.05-11.79-4.05-23.3-6.09-35.1.95 0 1.55-.03 2.15 0 10.69.59 21.38 1.21 32.08 1.75 1.4.07 2.06.43 2.48 1.9 2.11 7.42 4.3 14.83 6.62 22.18 4.28 13.54 5.67 27.49 5.99 41.59.1 4.22.01 8.44.01 12.82-3.14-.26-6.59-.55-10.04-.81-9.35-.71-18.7-1.39-28.04-2.17-.96-.08-2.05-.59-2.76-1.24-13.51-12.36-26.96-24.77-40.44-37.16-.26-.24-.58-.42-1.26-.92Zm280.66-36.07c1.15-.24 1.87-.42 2.61-.55 22.43-4.21 44.92-7.94 67.68-9.9 12.53-1.08 25.05-1.2 37.44 1.5 9.55 2.08 18.54 5.42 25.39 12.76 7.2 7.71 9.33 16.8 6.1 26.88-1.63 5.1-5.43 8.59-9.94 11.32-6.3 3.82-13.28 5.96-20.27 7.96-19.52 5.6-39.05 11.17-58.68 16.4-8.49 2.26-17.2 3.64-25.81 5.45-.89.19-1.37.04-1.69-.91-6.33-18.57-12.77-37.11-18.99-55.72-1.61-4.84-2.52-9.91-3.83-15.17Zm45.57 14.9c2.8 8.75 5.48 17.19 8.25 25.6.13.39 1.2.81 1.7.69 6.23-1.45 12.45-2.91 18.64-4.54 4.79-1.26 9.44-2.94 13.53-5.82 3.02-2.12 5.4-4.74 5.02-8.77-.4-4.26-2.55-7.56-6.62-8.93-3.2-1.07-6.67-2.03-9.98-1.91-6.61.24-13.21 1.2-19.79 1.98-3.44.41-6.85 1.07-10.75 1.69Zm-140.28-3.99c30.02-1.37 59.83-2.15 88.81-10.1 1.81 7.13 3.51 13.78 5.27 20.69-17 4.09-33.95 8.41-51.67 10.01.39 1.55.79 2.87 1.03 4.21.25 1.41.92 1.86 2.35 1.61 8.67-1.52 17.39-2.79 26.02-4.51 7.33-1.46 14.57-3.38 21.82-5.17 1.34-.33 1.99-.22 2.49 1.26 1.8 5.4 3.77 10.75 5.68 16.12.19.53.34 1.06.58 1.84-17.25 4.4-34.35 8.97-52.29 11.09.61 1.95 1.07 3.77 1.8 5.48.16.37 1.32.54 1.96.44 5.63-.88 11.3-1.6 16.85-2.83 11.18-2.48 22.3-5.23 33.44-7.91 1.01-.24 1.63-.29 2.03.88 2.07 6.12 4.2 12.22 6.3 18.32.08.23.08.48.14.89-4.97 1.17-9.85 2.47-14.79 3.45-11.91 2.38-23.78 5.07-35.79 6.75-9.88 1.38-19.94 1.53-29.93 2.13-4.11.25-8.24.12-12.35.41-2.17.16-3.12-.46-3.58-2.64-2.96-14.13-5.97-28.24-9.1-42.34-1.99-8.96-4.19-17.87-6.3-26.81-.23-.97-.45-1.95-.76-3.29Zm.75 25.76-33.44-2.03c.04.33.03.69.13 1.02 2.96 9.8 4.22 19.91 5.77 29.99.9 5.85 2.71 11.56 4.11 17.34.13.54.29 1.08.49 1.8-.83 0-1.51.04-2.17 0-12.26-.87-24.52-1.77-36.78-2.61-1.2-.08-1.58-.64-1.87-1.69-2.09-7.62-2.86-15.43-3.33-23.28-.51-8.57-2.02-16.96-4.33-25.23-.39-1.4-1.04-1.86-2.48-1.93-9.56-.44-19.11-.96-28.67-1.53-.6-.04-1.54-.54-1.69-1.02-2.75-8.69-5.41-17.42-8.08-26.14-.09-.28-.05-.6-.07-1.02.79 0 1.47-.04 2.15 0 24.87 1.5 49.67 3.54 74.25 7.94 9.13 1.63 18.52 1.8 27.79 2.6.99.09 1.73.05 2.06 1.35 1.88 7.49 3.88 14.95 5.83 22.42.14.54.18 1.11.32 2.03Zm-230.1 38.17h-38.8v-76.06c12.32-.98 24.53-1.96 36.77-2.93 1.69 26.28 2.76 52.57 2.03 79Zm455.72-88.51c20.32 1.59 40.15 5.63 60.62 4.92-.3 1.64-.55 2.92-.77 4.21-2.34 13.57-6.79 26.44-12.62 38.88-.55 1.18-1.13 1.56-2.45 1.31-6.77-1.28-13.57-2.42-20.34-3.71-.71-.13-1.71-.81-1.87-1.42-3.16-12.18-9.3-22.91-16.06-33.36-2.03-3.13-3.99-6.3-5.96-9.47-.19-.3-.27-.67-.54-1.35Zm15.76 47.35c12.24 2.27 24.4 4.53 36.84 6.85-2.01 7.85-4.08 15.95-6.24 24.43-6.64-1.42-13.08-2.69-19.46-4.21-3.99-.95-7.91-2.24-11.82-3.48-.52-.17-1.24-.97-1.2-1.43.53-7.31 1.18-14.62 1.8-21.92.01-.17.12-.34.08-.23Z" />
          </svg>
          <svg viewBox="231.5 32.6 427.8 31" className="scale-x-90">
            <path d="M244.1 63h-3.3V52.6l-9.3-15.9h3.8l7.3 12.7 7.1-12.7h3.7l-9.3 15.9V63zm27.2-10.1c0 5.7-3.2 10.6-10 10.6s-10-4.9-10-10.6 3.2-10.6 10-10.6 10 4.9 10 10.6zm-3.5 0c0-4.7-2.4-8.1-6.4-8.1s-6.4 3.3-6.4 8.1c0 4.7 2.4 8.1 6.4 8.1s6.4-3.4 6.4-8.1zM292 63h-3.3v-3.4l-1.3 2.4c-1.7 1.3-3.2 1.6-5.2 1.6-4.2 0-6.6-2.4-7.1-5.1-.2-1-.2-1.8-.2-3.5V42.8h3.3v11.5c0 .6 0 1.7.2 2.8.3 2.3 1.9 3.8 4.7 3.8 3.2 0 5.7-2.4 5.7-9.2v-8.9h3.3V63h-.1zm15-20.3v2.5c-3.4-.2-6 1.8-6 6.4V63h-3.3V42.8h3.3V46l1.8-2.7c.8-.6 1.9-.9 2.8-.9.6 0 1.1.1 1.4.3zM335 63l-12.3-23c.1 3.1.1 6.8.1 9.9V63h-3.3V36.8h5l12.3 23c-.1-3.1-.1-6.8-.1-9.9V36.8h3.2L340 63h-5zm15.1-14.5h12.3v2.7h-12.3V63h-3.3V36.8h17.1v2.7h-13.8v9zm28.3-9.1V63h-3.3V39.4h-9.3v-2.7h22v2.7h-9.4zm28.8 2.4c3.3 0 4.7 2.4 4.7 4.4 0 1.6-.6 2.5-.6 2.5l-2.1-1.3s.6-.9.6-2c0-1.4-.7-3.2-2.9-3.2-3.9 0-7.8 6.5-7.8 11.8 0 3.4 1.6 7.9 5.5 7.9 3.4 0 6.2-3.4 6.2-5.6h.4c0 2-1.4 7-7.9 7-4.9 0-6.7-4.2-6.7-8.3 0-5.8 4.5-13.2 10.6-13.2zm10.6 8.5c0-.3-.2-.4-.4-.4-1.1 0-1.9 2.8-3.1 2.8-.8 0-1.1-1.1-1.1-2 0-3.4 4-8.9 9.6-8.9 2.5 0 4.9 1.2 4.9 4 0 3.7-4.5 4.9-4.5 6.8 0 .3.1.4.3.4.6 0 .8-1.7 2.3-1.7s2 1.7 2 3.2c0 5-5.9 8.8-9.9 8.8-3 0-4.7-2-4.7-4.4-.1-4.9 4.6-7.4 4.6-8.6zm-1.9-.2c.4 0 .8-.7 1.6-.7.3 0 .7.2.7.7 0 1.6-2.8 3.4-2.8 7.2 0 2.6 1.2 4.9 4.2 4.9 3.4 0 6-4.3 6-7.1 0-1-.2-2.2-1-2.2-.5 0-.7.4-1.3.4-.4 0-.6-.4-.6-.9 0-2.9 2.9-4.5 2.8-6.9-.1-1.8-1.3-3.4-3.1-3.4-3.2 0-7 3.9-7 7.1 0 .5.1.9.5.9zm16.4-13.3c0-2.1-.6-3.3-1.2-4.2h2.8c.5 1 .8 2 .8 3.2 0 5.9-6.1 11.1-6.1 13.7 0 .5.2.8.5.8 1.5 0 2-5 4.2-5 .7 0 .9.8.9 1.4 0 2.4-2.5 6.3-2.5 10.5 0 2.4.7 4.9 2.1 5.8h-3.4c-.5-1-1.1-2.1-1.1-4.8 0-5.5 4.4-10.2 4.4-12 0-.3-.2-.6-.5-.6-1.6 0-2.4 5.1-4.1 5.1-.4 0-.9-.4-.9-1.6 0-3.1 4.1-7.7 4.1-12.3z" />
            <g className="st0">
              <path d="M439.3 36.8c0-2.1-.6-3.3-1.2-4.2h2.8c.5 1 .8 2 .8 3.2 0 5.9-6.1 11.1-6.1 13.7 0 .5.2.8.5.8 1.5 0 2-5 4.2-5 .7 0 .9.8.9 1.4 0 2.4-2.5 6.3-2.5 10.5 0 2.4.7 4.9 2.1 5.8h-3.4c-.5-1-1.1-2.1-1.1-4.8 0-5.5 4.4-10.2 4.4-12 0-.3-.2-.6-.5-.6-1.6 0-2.4 5.1-4.1 5.1-.4 0-.9-.4-.9-1.6-.1-3.1 4.1-7.7 4.1-12.3z" />
              <path d="M440.6 54.9c0-5.7 4.4-13.1 10.5-13.1 3.3 0 4.5 2.1 4.5 4.4 0 3.8-4.2 9.9-10.7 9.9-.8 0-1.2-.1-1.7-.2.5 2.9 2.1 5.8 5.4 5.8 3.4 0 6.2-3.4 6.2-5.6h.4c0 2-2.5 7-8.6 7-3.9.1-6-4.1-6-8.2zm4.2.7c4.6 0 8.4-6.2 8.4-10.3 0-1.8-.8-3.2-2.3-3.2-3.9 0-7.8 6.5-7.8 11.8 0 .5 0 1 .1 1.5.4.2.9.2 1.6.2z" />
            </g>
            <path
              d="M467.3 41.8c3.3 0 4.7 2.4 4.7 4.4 0 1.6-.6 2.5-.6 2.5l-2.1-1.3s.6-.9.6-2c0-1.4-.7-3.2-2.9-3.2-3.9 0-7.8 6.5-7.8 11.8 0 3.4 1.6 7.9 5.5 7.9 3.4 0 6.2-3.4 6.2-5.6h.4c0 2-1.4 7-7.9 7-4.9 0-6.7-4.2-6.7-8.3 0-5.8 4.5-13.2 10.6-13.2zm6.4-6.9h2.1V42h3.2v.5h-3.2v14.4c0 2 0 5.9 2.4 5.9-.2.3-.8.4-1.2.4-2.1 0-3.3-2.5-3.3-5.2V34.9z"
              className="st0"
            />
            <path
              d="M479.7 39.9c-1.9 0-.6-2.9 1.3-2.9s.7 2.9-1.3 2.9zm-.8 23.1V42h2.3v21h-2.3zm8.7-12.7c0-.3-.2-.4-.4-.4-1.1 0-1.9 2.8-3.1 2.8-.8 0-1.1-1.1-1.1-2 0-3.4 4-8.9 9.6-8.9 2.5 0 4.9 1.2 4.9 4 0 3.7-4.5 4.9-4.5 6.8 0 .3.1.4.3.4.6 0 .8-1.7 2.3-1.7s2 1.7 2 3.2c0 5-5.9 8.8-9.9 8.8-3 0-4.7-2-4.7-4.4-.1-4.9 4.6-7.4 4.6-8.6zm-2-.2c.4 0 .8-.7 1.6-.7.3 0 .7.2.7.7 0 1.6-2.8 3.4-2.8 7.2 0 2.6 1.2 4.9 4.2 4.9 3.4 0 6-4.3 6-7.1 0-1-.2-2.2-1-2.2-.5 0-.7.4-1.3.4-.4 0-.6-.4-.6-.9 0-2.9 2.9-4.5 2.8-6.9-.1-1.8-1.3-3.4-3.1-3.4-3.2 0-7 3.9-7 7.1.1.5.2.9.5.9zM499.2 63V42h2.1v10c1.2-5.5 5.4-10.2 9.8-10.2 1.3 0 2.4.8 2.4 2.5 0 3.6-4.8 5.8-4.8 8.1 0 .5.2.8.5.8 1.1 0 1.7-2.8 3.3-2.8.6 0 .8.4.8.8 0 1.3-2.4 4.2-2.2 7.6 0 1.5.3 2.6 1.7 4.2h-3.1c-.3-.3-.8-1.1-.8-2.6 0-4 4-8.2 4-9.2 0-.2-.1-.4-.4-.4-1.2 0-1.8 2.8-3.3 2.8-.6 0-1-.7-1-1.4 0-2.5 3.1-4.6 3.1-7.3 0-.9-.5-1.8-1.8-1.8-4.3 0-8.1 7.4-8.1 12v8l-2.2-.1zm42.9-11.3V63h-3.3V51.9c0-1 0-1.9-.1-2.9-.2-2.4-1.5-4.1-4.6-4.1-3.2 0-5.8 2.4-5.8 9.2V63H525V42.8h3.3v3.5l1.3-2.3c1.7-1.3 3.2-1.7 5.2-1.7 4.4 0 6.9 2.4 7.2 5.9.1 1 .1 1.8.1 3.5zm16.8 8.4-1.1 2.2c-1.4.9-3.1 1.3-5.1 1.3-3.6 0-6.5-2-6.5-5.7 0-4.6 3.4-6.9 11.3-6.9h1.3v-.5c0-.9 0-1.7-.1-2.4-.2-1.9-1.2-3.1-3.9-3.1s-4.1 1.5-4.3 4.3h-3.4c.3-4.3 3.3-6.8 7.8-6.8 4.8 0 6.8 2 7.1 5.3.1.8.1 1.8.1 2.7v7.6c0 1.5.1 2.9.4 5.1h-3.3l-.3-3.1zm-.1-4.8v-2.1c-5.5-.4-9 .8-9 4.2 0 2.4 1.6 3.5 4 3.5 3 .1 5-1.9 5-5.6zm36-4.6V63h-3.3V52.2c0-1.8 0-2.9-.2-3.9-.3-2.3-1.7-3.4-4-3.4-2.5 0-4.4 2-4.4 8.1v10h-3.3V52.2c0-1.8 0-2.9-.2-3.9-.3-2.3-1.7-3.4-4-3.4-2.5 0-4.4 2-4.4 8.1v10h-3.3V42.8h3.3v2.9l1.3-2.3c1-.8 2.5-1.2 4.3-1.2 3.1 0 5.1 1.6 5.8 3.8l1.8-2.6c1-.8 2.5-1.2 4.3-1.2 3.6 0 5.7 2.1 6.1 4.9.2 1.1.2 1.9.2 3.6zm22 3.2h-14.6c.3 5.3 2.8 7.1 5.8 7.1 2.6 0 4.8-1.6 5.2-4.5h3.4c-.8 4.9-4.6 7-8.8 7-5.2 0-9.2-3.4-9.2-10.5 0-6.5 4.1-10.7 9.6-10.7s8.6 4.1 8.6 10v1.6zm-14.6-2.5h11.3c-.3-4.2-2.1-6.6-5.4-6.6-3.2 0-5.5 2.3-5.9 6.6zm30.9-13.1c0 1.2-.9 2.1-2.1 2.1s-2.1-.9-2.1-2.1.9-2.1 2.1-2.1 2.1.9 2.1 2.1zM629.4 63V42.8h3.3V63h-3.3zm22.3-14.4h-3.4c-.5-2.4-1.9-3.8-4.3-3.8-2.3 0-3.3 1.3-3.3 3 0 2 1.7 2.8 4.4 3.5 4.6 1.2 6.8 3 6.8 6.5 0 3.8-3.2 5.7-7.5 5.7-4.1 0-7.3-1.9-7.9-6.5h3.4c.5 2.9 2.4 4 4.7 4 2.2 0 3.9-1 3.9-2.9s-1.4-3-4.7-3.9c-3.6-1-6.5-2.5-6.5-6 0-3.7 2.8-5.9 7-5.9 4.5 0 7 2.6 7.4 6.3zm7.6-3.9c0 1.4-1 2.4-2.4 2.4s-2.4-1-2.4-2.4 1-2.4 2.4-2.4 2.4 1 2.4 2.4zm0 16.4c0 1.4-1 2.4-2.4 2.4s-2.4-1-2.4-2.4 1-2.4 2.4-2.4 2.4 1 2.4 2.4z"
              className="st0"
            />
          </svg>
          <h2 className="mt-0 mb-2 text-5xl font-normal leading-normal text-center text-black-800">
            {_.startCase(name)}
          </h2>
        </div>
        <div className="flex flex-wrap items-center content-center justify-center w-full">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {/* <!--Card 1--> */}
            <div className="p-2 overflow-hidden rounded bg-none flex-center">
              {loading && <SkeletonCard />}
              <div className="justify-center text-center">
                <Tweet tweetId={twitterId} onLoad={() => setLoading(false)} />
              </div>
            </div>
            {/* <!--Card 2--> */}
            {loading && haveTokenId && <SkeletonCard />}
            {!loading && (
              <div className="max-w-sm bg-black lg:scale-y-90 md:scale-y-95 max-h-fit rounded-xl ">
                <a href={openSeaLink} target="_blank" rel="noreferrer">
                  <img className="content-center w-full rounded-t-lg h-72" src={imageURI} alt="" />

                  <div className="px-6">
                    <h4 className="pb-3 mb-2 text-xl font-medium text-white">
                      {name} {tokenId && `${tokenId}`}
                    </h4>
                    <svg
                      width="100"
                      height="24"
                      viewBox="0 0 437 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50C100 77.6127 77.6127 100 50 100C22.3873 100 0 77.6127 0 50C0 22.3873 22.3873 0 50 0C77.6185 0 100 22.3873 100 50Z"
                        fill="#2081E2"
                      />
                      <path
                        d="M24.6679 51.6801L24.8836 51.341L37.8906 30.9932C38.0807 30.6953 38.5276 30.7261 38.6714 31.0497C40.8444 35.9196 42.7194 41.9762 41.841 45.7468C41.466 47.2982 40.4386 49.3992 39.2827 51.341C39.1338 51.6236 38.9694 51.901 38.7947 52.1681C38.7125 52.2914 38.5738 52.3633 38.4248 52.3633H25.048C24.6884 52.3633 24.4778 51.9729 24.6679 51.6801Z"
                        fill="white"
                      />
                      <path
                        d="M82.6444 55.461V58.6819C82.6444 58.8668 82.5314 59.0312 82.367 59.1031C81.3602 59.5346 77.9132 61.1168 76.48 63.11C72.8224 68.2008 70.0279 75.48 63.7812 75.48H37.721C28.4847 75.48 21 67.9697 21 58.7024V58.4045C21 58.1579 21.2003 57.9576 21.4469 57.9576H35.9745C36.2621 57.9576 36.4727 58.2247 36.4471 58.5072C36.3443 59.4524 36.519 60.4182 36.9659 61.2966C37.8289 63.0484 39.6166 64.1426 41.5481 64.1426H48.74V58.5278H41.6303C41.2656 58.5278 41.0499 58.1065 41.2605 57.8086C41.3375 57.6904 41.4249 57.5672 41.5173 57.4285C42.1903 56.473 43.1509 54.9884 44.1064 53.2983C44.7588 52.1579 45.3906 50.9404 45.8992 49.7178C46.002 49.4969 46.0841 49.2708 46.1663 49.0499C46.305 48.6595 46.4489 48.2948 46.5516 47.9301C46.6544 47.6218 46.7365 47.2982 46.8187 46.9951C47.0602 45.9574 47.1629 44.8581 47.1629 43.7177C47.1629 43.2708 47.1424 42.8033 47.1013 42.3564C47.0807 41.8684 47.0191 41.3803 46.9574 40.8923C46.9163 40.4608 46.8393 40.0344 46.7571 39.5875C46.6544 38.9351 46.5105 38.2879 46.3461 37.6354L46.2896 37.3889C46.1663 36.9419 46.0636 36.5156 45.9198 36.0687C45.5139 34.6662 45.0465 33.2998 44.5533 32.0207C44.3735 31.5121 44.168 31.0241 43.9625 30.5361C43.6595 29.8015 43.3512 29.1337 43.0687 28.5018C42.9249 28.2141 42.8016 27.9521 42.6783 27.685C42.5396 27.3819 42.3958 27.0788 42.2519 26.7912C42.1492 26.5703 42.031 26.3648 41.9488 26.1593L41.0704 24.536C40.9471 24.3151 41.1526 24.0531 41.394 24.1199L46.8907 25.6096H46.9061C46.9163 25.6096 46.9215 25.6148 46.9266 25.6148L47.6509 25.8151L48.4472 26.0412L48.74 26.1233V22.8562C48.74 21.2791 50.0037 20 51.5654 20C52.3462 20 53.0551 20.3185 53.5637 20.8373C54.0722 21.3562 54.3907 22.0651 54.3907 22.8562V27.7056L54.9764 27.8699C55.0226 27.8854 55.0688 27.9059 55.1099 27.9367C55.2538 28.0446 55.4592 28.2038 55.7212 28.3991C55.9267 28.5634 56.1476 28.7638 56.4147 28.9693C56.9438 29.3956 57.5757 29.9453 58.2692 30.5772C58.4541 30.7364 58.6339 30.9008 58.7983 31.0652C59.6922 31.8974 60.6939 32.8734 61.6494 33.9522C61.9165 34.2553 62.1785 34.5635 62.4456 34.8871C62.7127 35.2159 62.9953 35.5395 63.2418 35.8632C63.5655 36.2947 63.9148 36.7416 64.2179 37.2091C64.3617 37.43 64.5261 37.656 64.6648 37.8769C65.0552 38.4676 65.3994 39.079 65.7282 39.6903C65.8669 39.9728 66.0107 40.281 66.134 40.5841C66.4987 41.4009 66.7864 42.2331 66.9713 43.0653C67.0278 43.2451 67.0689 43.4403 67.0895 43.615V43.6561C67.1511 43.9026 67.1717 44.1646 67.1922 44.4317C67.2744 45.2845 67.2333 46.1372 67.0484 46.9951C66.9713 47.3599 66.8686 47.704 66.7453 48.0688C66.622 48.4181 66.4987 48.7828 66.3395 49.127C66.0313 49.841 65.6665 50.5551 65.235 51.2229C65.0963 51.4695 64.9319 51.7315 64.7675 51.9781C64.5877 52.24 64.4028 52.4866 64.2384 52.7281C64.0124 53.0363 63.771 53.3599 63.5244 53.6476C63.3035 53.9507 63.0775 54.2538 62.8309 54.5209C62.4867 54.9267 62.1579 55.312 61.8137 55.6819C61.6083 55.9233 61.3874 56.1699 61.1613 56.3908C60.9405 56.6373 60.7144 56.8582 60.5089 57.0637C60.1648 57.4079 59.8771 57.675 59.6356 57.8959L59.0706 58.4148C58.9884 58.4867 58.8805 58.5278 58.7675 58.5278H54.3907V64.1426H59.8976C61.1305 64.1426 62.3018 63.7059 63.247 62.9045C63.5706 62.622 64.9833 61.3994 66.6528 59.5552C66.7093 59.4935 66.7813 59.4473 66.8635 59.4268L82.0742 55.0295C82.3568 54.9473 82.6444 55.163 82.6444 55.461Z"
                        fill="white"
                      />
                      <path
                        d="M148.723 73.9966C144.203 73.9966 140.048 72.9837 136.259 70.9579C132.515 68.932 129.524 66.1135 127.287 62.5023C125.096 58.847 124 54.7513 124 50.2153C124 45.6792 125.096 41.6055 127.287 37.9943C129.524 34.3831 132.515 31.5645 136.259 29.5387C140.048 27.5129 144.203 26.5 148.723 26.5C153.243 26.5 157.375 27.5129 161.119 29.5387C164.909 31.5645 167.876 34.3831 170.022 37.9943C172.214 41.6055 173.309 45.6792 173.309 50.2153C173.309 54.7513 172.214 58.847 170.022 62.5023C167.831 66.1135 164.863 68.932 161.119 70.9579C157.375 72.9837 153.243 73.9966 148.723 73.9966ZM148.723 63.6913C152.558 63.6913 155.617 62.4582 157.9 59.992C160.229 57.5258 161.393 54.2669 161.393 50.2153C161.393 46.1196 160.229 42.8607 157.9 40.4385C155.617 37.9723 152.558 36.7392 148.723 36.7392C144.842 36.7392 141.738 37.9503 139.409 40.3724C137.126 42.7946 135.985 46.0755 135.985 50.2153C135.985 54.3109 137.126 57.5919 139.409 60.0581C141.738 62.4803 144.842 63.6913 148.723 63.6913Z"
                        fill="white"
                      />
                      <path
                        d="M191.536 41.8918C192.677 40.1743 194.252 38.787 196.261 37.7301C198.27 36.6731 200.621 36.1446 203.315 36.1446C206.465 36.1446 209.319 36.9153 211.876 38.4567C214.432 39.9981 216.441 42.2001 217.902 45.0626C219.409 47.9252 220.162 51.2502 220.162 55.0376C220.162 58.825 219.409 62.172 217.902 65.0786C216.441 67.9412 214.432 70.1651 211.876 71.7506C209.319 73.292 206.465 74.0626 203.315 74.0626C200.667 74.0626 198.316 73.5342 196.261 72.4772C194.252 71.4203 192.677 70.0551 191.536 68.3815V84.5H179.825V36.6731H191.536V41.8918ZM208.246 55.0376C208.246 52.2191 207.424 50.0171 205.78 48.4317C204.182 46.8022 202.196 45.9875 199.822 45.9875C197.494 45.9875 195.508 46.8022 193.864 48.4317C192.266 50.0611 191.467 52.2851 191.467 55.1036C191.467 57.9222 192.266 60.1462 193.864 61.7756C195.508 63.4051 197.494 64.2198 199.822 64.2198C202.151 64.2198 204.137 63.4051 205.78 61.7756C207.424 60.1021 208.246 57.8561 208.246 55.0376Z"
                        fill="white"
                      />
                      <path
                        d="M262.329 54.5091C262.329 55.5661 262.261 56.667 262.124 57.8121H235.62C235.803 60.1021 236.556 61.8637 237.88 63.0968C239.25 64.2859 240.916 64.8804 242.88 64.8804C245.802 64.8804 247.833 63.6913 248.975 61.3132H261.439C260.8 63.7354 259.636 65.9153 257.946 67.8531C256.303 69.7908 254.225 71.3102 251.714 72.4112C249.203 73.5121 246.395 74.0626 243.291 74.0626C239.547 74.0626 236.214 73.292 233.292 71.7506C230.37 70.2092 228.087 68.0072 226.443 65.1446C224.8 62.2821 223.978 58.9351 223.978 55.1036C223.978 51.2722 224.777 47.9252 226.375 45.0626C228.018 42.2001 230.301 39.9981 233.223 38.4567C236.145 36.9153 239.501 36.1446 243.291 36.1446C246.989 36.1446 250.276 36.8933 253.152 38.3907C256.029 39.888 258.266 42.0239 259.864 44.7984C261.508 47.5729 262.329 50.8098 262.329 54.5091ZM250.345 51.5364C250.345 49.5987 249.66 48.0573 248.29 46.9123C246.92 45.7673 245.208 45.1948 243.154 45.1948C241.19 45.1948 239.524 45.7453 238.154 46.8462C236.83 47.9472 236.008 49.5106 235.689 51.5364H250.345Z"
                        fill="white"
                      />
                      <path
                        d="M291.793 36.2768C296.267 36.2768 299.828 37.686 302.476 40.5046C305.17 43.279 306.517 47.1105 306.517 51.9989V73.5342H294.874V53.5182C294.874 51.052 294.212 49.1363 292.888 47.7711C291.564 46.4058 289.784 45.7232 287.547 45.7232C285.309 45.7232 283.529 46.4058 282.205 47.7711C280.881 49.1363 280.219 51.052 280.219 53.5182V73.5342H268.508V36.6731H280.219V41.5615C281.406 39.932 283.004 38.6549 285.013 37.7301C287.021 36.7612 289.281 36.2768 291.793 36.2768Z"
                        fill="white"
                      />
                      <path
                        d="M332.05 73.9966C328.535 73.9966 325.384 73.4461 322.599 72.3451C319.814 71.2441 317.577 69.6147 315.888 67.4567C314.244 65.2988 313.376 62.7005 313.285 59.6617H325.749C325.932 61.3793 326.548 62.7005 327.599 63.6253C328.649 64.5061 330.018 64.9465 331.708 64.9465C333.443 64.9465 334.812 64.5721 335.817 63.8235C336.821 63.0308 337.324 61.9518 337.324 60.5866C337.324 59.4415 336.913 58.4947 336.091 57.746C335.315 56.9973 334.333 56.3808 333.146 55.8964C332.004 55.4119 330.361 54.8614 328.215 54.2449C325.11 53.32 322.576 52.3952 320.613 51.4704C318.65 50.5456 316.961 49.1803 315.545 47.3747C314.13 45.5691 313.422 43.213 313.422 40.3064C313.422 35.9905 315.043 32.6215 318.285 30.1993C321.526 27.7331 325.749 26.5 330.954 26.5C336.251 26.5 340.519 27.7331 343.761 30.1993C347.003 32.6215 348.738 36.0125 348.966 40.3724H336.296C336.205 38.8751 335.634 37.708 334.584 36.8713C333.534 35.9905 332.187 35.5501 330.543 35.5501C329.128 35.5501 327.987 35.9244 327.119 36.6731C326.252 37.3777 325.818 38.4127 325.818 39.7779C325.818 41.2752 326.548 42.4423 328.01 43.279C329.471 44.1158 331.753 45.0186 334.858 45.9875C337.963 47.0004 340.474 47.9692 342.391 48.8941C344.355 49.8189 346.044 51.1621 347.459 52.9237C348.875 54.6853 349.582 56.9533 349.582 59.7278C349.582 62.3702 348.875 64.7703 347.459 66.9282C346.09 69.0862 344.081 70.8037 341.433 72.0809C338.785 73.358 335.657 73.9966 332.05 73.9966Z"
                        fill="white"
                      />
                      <path
                        d="M392.813 54.5091C392.813 55.5661 392.744 56.667 392.607 57.8121H366.103C366.286 60.1021 367.039 61.8637 368.363 63.0968C369.733 64.2859 371.4 64.8804 373.363 64.8804C376.285 64.8804 378.317 63.6913 379.458 61.3132H391.922C391.283 63.7354 390.119 65.9153 388.43 67.8531C386.786 69.7908 384.709 71.3102 382.197 72.4112C379.686 73.5121 376.878 74.0626 373.774 74.0626C370.03 74.0626 366.697 73.292 363.775 71.7506C360.853 70.2092 358.57 68.0072 356.926 65.1446C355.283 62.2821 354.461 58.9351 354.461 55.1036C354.461 51.2722 355.26 47.9252 356.858 45.0626C358.501 42.2001 360.784 39.9981 363.706 38.4567C366.628 36.9153 369.984 36.1446 373.774 36.1446C377.472 36.1446 380.759 36.8933 383.636 38.3907C386.512 39.888 388.749 42.0239 390.347 44.7984C391.991 47.5729 392.813 50.8098 392.813 54.5091ZM380.828 51.5364C380.828 49.5987 380.143 48.0573 378.773 46.9123C377.403 45.7673 375.691 45.1948 373.637 45.1948C371.674 45.1948 370.007 45.7453 368.637 46.8462C367.313 47.9472 366.491 49.5106 366.172 51.5364H380.828Z"
                        fill="white"
                      />
                      <path
                        d="M396.662 55.0376C396.662 51.2502 397.393 47.9252 398.854 45.0626C400.36 42.2001 402.392 39.9981 404.949 38.4567C407.506 36.9153 410.359 36.1446 413.51 36.1446C416.203 36.1446 418.555 36.6731 420.564 37.7301C422.618 38.787 424.193 40.1743 425.289 41.8918V36.6731H437V73.5342H425.289V68.3155C424.148 70.033 422.55 71.4203 420.495 72.4772C418.486 73.5342 416.135 74.0626 413.441 74.0626C410.336 74.0626 407.506 73.292 404.949 71.7506C402.392 70.1651 400.36 67.9412 398.854 65.0786C397.393 62.172 396.662 58.825 396.662 55.0376ZM425.289 55.1036C425.289 52.2851 424.467 50.0611 422.824 48.4317C421.226 46.8022 419.262 45.9875 416.934 45.9875C414.605 45.9875 412.619 46.8022 410.976 48.4317C409.378 50.0171 408.579 52.2191 408.579 55.0376C408.579 57.8561 409.378 60.1021 410.976 61.7756C412.619 63.4051 414.605 64.2198 416.934 64.2198C419.262 64.2198 421.226 63.4051 422.824 61.7756C424.467 60.1462 425.289 57.9222 425.289 55.1036Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full p-2 mx-auto text-center scale-x-75 bg-white rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 681.63 40.02" className="h-full">
          <path d="M0 30.34V4.12h3.27v26.22H0Zm22.3-14.4h-3.42c-.46-2.36-1.9-3.76-4.26-3.76s-3.34 1.25-3.34 3c0 2.01 1.67 2.81 4.41 3.53 4.64 1.22 6.84 3.04 6.84 6.46 0 3.8-3.23 5.7-7.49 5.7s-7.29-1.9-7.9-6.46h3.42c.53 2.93 2.39 3.95 4.71 3.95 2.17 0 3.91-.99 3.91-2.93s-1.37-2.96-4.75-3.88c-3.61-.99-6.5-2.47-6.5-6s2.81-5.89 6.95-5.89c4.52 0 6.99 2.58 7.41 6.27ZM38.42 5.68c0 1.18-.91 2.09-2.09 2.09s-2.09-.91-2.09-2.09.91-2.09 2.09-2.09 2.09.91 2.09 2.09ZM34.7 30.34V10.2h3.27v20.14H34.7Zm12.95-5.89c0 .68 0 1.03.04 1.56.15 1.94.95 2.36 3.5 2.05v2.39c-.95.15-1.86.19-2.77.19-2.51 0-3.8-1.03-3.99-3.53-.04-.53-.04-1.37-.04-2.51V12.86h-2.7v-2.51h2.7V5.68h3.27v4.67h3.76v2.51h-3.76v11.59Zm27.4 3-1.1 2.17c-1.37.95-3.12 1.25-5.05 1.25-3.65 0-6.5-2.01-6.5-5.74 0-4.56 3.42-6.92 11.32-6.92h1.29v-.53c0-.87 0-1.67-.08-2.43-.15-1.86-1.22-3.08-3.91-3.08s-4.1 1.48-4.33 4.26h-3.42c.3-4.29 3.31-6.76 7.75-6.76 4.79 0 6.8 2.01 7.14 5.32.08.8.11 1.79.11 2.66v7.56c0 1.52.08 2.89.38 5.13h-3.27l-.34-2.89Zm-.04-4.75v-2.05c-5.55-.42-9.04.76-9.04 4.22 0 2.43 1.56 3.5 4.03 3.5 3.04 0 5.02-2.01 5.02-5.66Zm15.45 3.82V0h12.6c2.1 0 3.28 1.2 3.28 2.92 0 5.42-10.37 7.56-10.37 10.12 0 .5.31.97.99.97 1.99 0 4.51-2.16 6.93-2.16 2.25 0 3.72 2.12 3.72 4.64 0 6.26-7.62 14.07-14.55 14.07-2.69 0-2.58-2.75-2.58-4.03Zm3.04 3.57c4.18 0 11.65-6.76 11.65-12.85 0-1.97 0-4.16-3.04-4.16-1.78 0-2.96 1.36-5.14 1.36-1.05 0-1.57-.84-1.57-1.64 0-4.09 9.15-7.1 9.15-10.62 0-1.62-1.72-1.66-3.7-1.66h-8.29v27.72c0 .92-.06 1.85.94 1.85Zm19.51-25.93c0-2.06-.61-3.25-1.22-4.16h2.75c.52.97.82 1.99.82 3.19 0 5.88-6.09 11.09-6.09 13.71 0 .5.23.78.55.78 1.47 0 1.99-4.98 4.18-4.98.69 0 .9.82.9 1.39 0 2.44-2.48 6.28-2.48 10.5 0 2.37.71 4.87 2.08 5.75h-3.36c-.48-1.05-1.11-2.06-1.11-4.77 0-5.54 4.41-10.16 4.41-11.97 0-.34-.21-.59-.55-.59-1.62 0-2.41 5.1-4.12 5.1-.4 0-.92-.44-.92-1.62 0-3.15 4.16-7.73 4.16-12.35Zm6.72 15.81c0-.46-.17-.82-.46-.82-1.13 0-1.72 2.79-3.3 2.79-.57 0-.78-.44-.78-.8 0-1.3 2.35-4.16 2.25-7.58-.04-1.49-.27-2.56-1.66-4.22h3.09c.27.25.76 1.13.76 2.62 0 3.97-3.97 8.23-3.97 9.18 0 .21.13.36.38.36 1.22 0 1.85-2.77 3.25-2.77.63 0 .97.73.97 1.45 0 2.46-3.11 4.6-3.11 7.33 0 .86.55 1.83 1.83 1.83 4.33 0 8.1-7.43 8.1-12.01V9.35h2.1v20.99h-2.1v-9.95c-1.2 5.48-5.44 10.16-9.76 10.16-1.3 0-2.37-.82-2.37-2.46 0-3.57 4.79-5.75 4.79-8.13Zm11.14 2.29c0-5.71 4.37-13.12 10.46-13.12 3.25 0 4.45 2.12 4.45 4.41 0 3.84-4.24 9.93-10.67 9.93-.76 0-1.24-.06-1.66-.17.52 2.94 2.14 5.84 5.38 5.84s6.19-3.4 6.19-5.56h.44c0 2.04-2.5 6.97-8.61 6.97-3.91 0-5.98-4.22-5.98-8.29Zm4.2.71c4.6 0 8.36-6.15 8.36-10.33 0-1.78-.8-3.15-2.31-3.15-3.95 0-7.83 6.51-7.83 11.78 0 .48.02 1.01.1 1.51.5.13 1.05.19 1.68.19Zm21.64-13.84c3.25 0 4.72 2.44 4.72 4.37 0 1.62-.61 2.46-.61 2.46l-2.14-1.3s.63-.94.63-2.02c0-1.41-.71-3.15-2.88-3.15-3.95 0-7.83 6.51-7.83 11.78 0 3.44 1.55 7.87 5.54 7.87 3.36 0 6.19-3.4 6.19-5.56h.44c0 2.04-1.45 6.97-7.92 6.97-4.87 0-6.68-4.22-6.68-8.29 0-5.71 4.43-13.12 10.52-13.12ZM163.12 0h2.1v19.4c1.18-5.54 5.44-10.27 9.78-10.27 1.3 0 2.37.82 2.37 2.46 0 3.57-4.79 5.75-4.79 8.13 0 .46.17.82.46.82 1.13 0 1.72-2.79 3.3-2.79.57 0 .78.44.78.8 0 1.3-2.35 4.16-2.25 7.58.04 1.49.27 2.56 1.66 4.22h-3.09c-.27-.25-.76-1.13-.76-2.62 0-3.97 3.97-8.23 3.97-9.18 0-.21-.13-.36-.38-.36-1.22 0-1.85 2.77-3.25 2.77-.63 0-.97-.73-.97-1.45 0-2.46 3.11-4.6 3.11-7.33 0-.86-.55-1.83-1.83-1.83-4.33 0-8.1 7.43-8.1 12.01l-.02 7.98h-2.1V0Zm16.67 7.31c-1.91 0-.63-2.92 1.3-2.92s.69 2.92-1.3 2.92Zm-.73 23.03v-21h2.31v21h-2.31Zm4.41 9.68V9.34h2.1v6.53c0-2.73 1.7-6.74 5.46-6.74s6.42 4.3 6.42 8.55c0 1.51-.69 2.16-1.76 2.16-1.64 0-2.52-2.27-3.99-2.27-.5 0-.69.44-.69.82 0 1.87 5.84 2.69 5.84 7.41 0 2.48-2.5 4.75-5.58 4.75-2.75 0-4.37-1.43-5.69-3.28v12.74h-2.1Zm2.1-18.27c0 4.45 2.16 8.38 5.67 8.38 2.14 0 3.44-1.95 3.44-4.22 0-4.14-4.3-5.35-4.3-7.52 0-.76.65-1.28 1.41-1.28 1.01 0 1.74.65 2.41.65.86 0 1.36-.5 1.36-1.66 0-2.46-2.2-6.3-5.06-6.3-4.41 0-4.93 8.57-4.93 8.57v3.38Zm41.85-1.48c0 5.66-3.15 10.6-9.99 10.6s-9.99-4.94-9.99-10.6 3.15-10.6 9.99-10.6 9.99 4.9 9.99 10.6Zm-3.57 0c0-4.75-2.36-8.09-6.42-8.09s-6.42 3.34-6.42 8.09 2.36 8.09 6.42 8.09 6.42-3.38 6.42-8.09Zm16.79-10.26v2.47c-3.42-.23-6 1.79-6 6.38v11.47h-3.27V10.2h3.27v3.15l1.82-2.7c.83-.57 1.86-.91 2.81-.91.53 0 .99.08 1.37.27Zm22.69 17.44-1.1 2.17c-1.37.95-3.12 1.25-5.05 1.25-3.65 0-6.5-2.01-6.5-5.74 0-4.56 3.42-6.92 11.32-6.92h1.29v-.53c0-.87 0-1.67-.08-2.43-.15-1.86-1.22-3.08-3.91-3.08s-4.1 1.48-4.33 4.26h-3.42c.3-4.29 3.31-6.76 7.75-6.76 4.79 0 6.8 2.01 7.14 5.32.08.8.11 1.79.11 2.66v7.56c0 1.52.08 2.89.38 5.13h-3.27l-.34-2.89Zm-.04-4.75v-2.05c-5.55-.42-9.04.76-9.04 4.22 0 2.43 1.56 3.5 4.03 3.5 3.04 0 5.02-2.01 5.02-5.66ZM278.74 0h10.77c3.55 0 5.52 1.93 5.52 4.83 0 6.24-12.81 7.39-12.81 12.41 0 .44.32.57.65.57 1.85 0 4.87-5.1 8.82-5.1 1.53 0 2.1 1.07 2.1 2.92 0 2.6-.86 6.3-.86 7.41 0 3.72.9 5.27 2.52 7.31h-2.71c-1.38-1.47-1.93-3.13-1.93-4.85 0-3.84 2.31-8.08 2.31-10.9 0-.97-.59-1.49-1.41-1.49-3.15 0-4.09 5.52-8.9 5.52-.84 0-1.05-.73-1.05-1.22 0-5.19 10.96-7.43 10.96-12.64 0-2.12-1.62-4.16-4.64-4.16h-7.24v29.73h-2.1V0Zm22.14 19.97c0-.46-.17-.82-.46-.82-1.13 0-1.72 2.79-3.3 2.79-.57 0-.78-.44-.78-.8 0-1.3 2.35-4.16 2.25-7.58-.04-1.49-.27-2.56-1.66-4.22h3.09c.27.25.76 1.13.76 2.62 0 3.97-3.97 8.23-3.97 9.18 0 .21.13.36.38.36 1.22 0 1.85-2.77 3.25-2.77.63 0 .97.73.97 1.45 0 2.46-3.11 4.6-3.11 7.33 0 .86.54 1.83 1.83 1.83 4.33 0 8.1-7.43 8.1-12.01V9.35h2.1v20.99h-2.1v-9.95c-1.2 5.48-5.44 10.16-9.76 10.16-1.3 0-2.37-.82-2.37-2.46 0-3.57 4.79-5.75 4.79-8.13Zm15.01 5.54c-2.27-.29-3.63-1.91-3.63-5.14 0-4.05 3.36-9.41 7.85-10.85 3.19-1.03 5.48-3.13 5.48-4.85l1.66 1.47c0 .97-1.62 2.18-4.64 3 3.09.06 4.26 2.5 4.26 5.08 0 4.62-3.88 10.77-9.45 11.3-1.22.31-3.57 1.36-3.57 2.75 0 .71.63 1.2 1.34 1.2 2.83 0 7.66-3.53 9.62-3.53.57 0 1.07.31 1.07 1.01 0 2.06-6.76 4.56-6.76 9.18 0 1.76.53 2.69 1.11 3.46h-2.94c-.46-.61-.76-1.6-.76-2.69 0-5.65 8.88-8.27 8.88-9.95 0-.34-.23-.59-.63-.59-2.12 0-8.19 5.19-11.21 5.19-.9 0-1.47-.8-1.47-1.72 0-1.74 1.66-2.96 3.78-4.3Zm2.62-.92c3.86 0 6.11-5.17 6.11-8.71 0-3.04-.76-6.07-3.57-6.07-3.4 0-6.61 5.86-6.61 9.57 0 2.54 1.03 5.21 4.07 5.21Zm27.05-14.05c0 2.66-1.29 5.05-3.99 7.75-2.32 2.32-2.89 3.34-3 5.21h-3.27c.23-2.24.91-3.65 3.04-6.08 2.7-3.08 3.57-4.6 3.57-6.88 0-2.62-1.63-4.37-4.37-4.37s-4.79 1.86-5.02 5.4h-3.42c.15-4.86 3.57-7.98 8.55-7.98s7.9 3.04 7.9 6.95Zm-6.19 17.9c0 1.41-1.03 2.43-2.43 2.43s-2.43-1.03-2.43-2.43 1.03-2.43 2.43-2.43 2.43 1.03 2.43 2.43Zm38.37 1.9h-3.61c-.72-1.67-1.06-3.34-1.41-6.57-.3-2.7-1.33-4.48-3.91-4.67-.61-.04-1.25-.04-1.86-.04h-4.94v11.28h-3.27V4.12h8.59c1.33 0 2.24 0 3.42.15 3.8.49 6.54 2.58 6.54 6.99 0 3.46-2.24 5.43-4.67 6.19 2.13.99 3.15 3.38 3.38 6 .3 3.42.68 5.47 1.75 6.88ZM367.03 16.4c1.18 0 1.82 0 2.55-.08 2.43-.23 4.22-1.79 4.22-4.75s-1.41-4.26-3.84-4.64c-.72-.11-1.44-.15-2.62-.15h-5.32v9.61h5.01Zm30.7 4.86h-14.59c.3 5.32 2.81 7.1 5.78 7.1 2.62 0 4.75-1.63 5.21-4.52h3.42c-.8 4.86-4.64 7.03-8.78 7.03-5.24 0-9.16-3.42-9.16-10.52 0-6.53 4.07-10.68 9.58-10.68s8.62 4.14 8.62 10.03c0 .3 0 .84-.08 1.56Zm-14.55-2.51h11.32c-.3-4.18-2.09-6.57-5.39-6.57s-5.55 2.28-5.93 6.57Zm22.88 5.7c0 .68 0 1.03.04 1.56.15 1.94.95 2.36 3.5 2.05v2.39c-.95.15-1.86.19-2.77.19-2.51 0-3.8-1.03-3.99-3.53-.04-.53-.04-1.37-.04-2.51V12.86h-2.7v-2.51h2.7V5.68h3.27v4.67h3.76v2.51h-3.76v11.59Zm28.34 5.89h-3.88l-4.48-16.95-4.48 16.95h-3.88l-6.42-20.14h3.76l4.67 17.02 4.41-17.02h4.07l4.48 16.91 4.67-16.91h3.5l-6.42 20.14Zm25.92-9.08h-14.59c.3 5.32 2.81 7.1 5.78 7.1 2.62 0 4.75-1.63 5.21-4.52h3.42c-.8 4.86-4.64 7.03-8.78 7.03-5.24 0-9.16-3.42-9.16-10.52 0-6.53 4.07-10.68 9.58-10.68s8.62 4.14 8.62 10.03c0 .3 0 .84-.08 1.56Zm-14.55-2.51h11.32c-.3-4.18-2.09-6.57-5.39-6.57s-5.55 2.28-5.93 6.57Zm35.41 2.51h-14.59c.3 5.32 2.81 7.1 5.78 7.1 2.62 0 4.75-1.63 5.21-4.52H481c-.8 4.86-4.64 7.03-8.78 7.03-5.24 0-9.16-3.42-9.16-10.52 0-6.53 4.07-10.68 9.58-10.68s8.62 4.14 8.62 10.03c0 .3 0 .84-.08 1.56Zm-14.55-2.51h11.32c-.3-4.18-2.09-6.57-5.39-6.57s-5.55 2.28-5.93 6.57Zm22.87 5.7c0 .68 0 1.03.04 1.56.15 1.94.95 2.36 3.5 2.05v2.39c-.95.15-1.86.19-2.77.19-2.51 0-3.8-1.03-3.99-3.53-.04-.53-.04-1.37-.04-2.51V12.86h-2.7v-2.51h2.7V5.68h3.27v4.67h3.76v2.51h-3.76v11.59Zm20.1 0c0 .68 0 1.03.04 1.56.15 1.94.95 2.36 3.5 2.05v2.39c-.95.15-1.86.19-2.77.19-2.51 0-3.8-1.03-3.99-3.53-.04-.53-.04-1.37-.04-2.51V12.86h-2.7v-2.51h2.7V5.68h3.27v4.67h3.76v2.51h-3.76v11.59Zm25.81-4.18c0 5.66-3.15 10.6-9.99 10.6s-9.99-4.94-9.99-10.6 3.15-10.6 9.99-10.6 9.99 4.9 9.99 10.6Zm-3.57 0c0-4.75-2.36-8.09-6.42-8.09S519 15.52 519 20.27s2.36 8.09 6.42 8.09 6.42-3.38 6.42-8.09Zm29.78 10.07h-3.27V12.86h-7.37v17.48h-3.27V12.86h-2.17v-2.51h2.17v-.53c0-.76.04-1.75.11-2.43.42-3.69 2.93-5.7 8.21-5.7.84 0 1.63.08 2.32.19v2.7c-5.05-.42-6.92.49-7.26 2.89-.08.53-.11 1.48-.11 2.05v.84h10.64v19.98Zm22.8-11.32v11.32h-3.27V19.25c0-1.03 0-1.86-.08-2.89-.19-2.36-1.48-4.1-4.6-4.1s-5.81 2.36-5.81 9.23v8.85h-3.27V10.2h3.27v3.46l1.25-2.32c1.71-1.33 3.19-1.67 5.24-1.67 4.41 0 6.88 2.36 7.18 5.89.08 1.03.08 1.82.08 3.46Zm23.11 11.32h-3.27v-3.23l-1.52 2.17c-1.14.95-3.27 1.6-5.32 1.6-5.89 0-9.16-4.41-9.16-10.3 0-7.45 4.64-10.9 9.84-10.9 1.67 0 3.8.49 4.83 1.33l1.33 1.98V2.41h3.27v27.93Zm-3.27-9.88v-1.1c0-5.21-3.27-7.18-6.16-7.18-3.53 0-6.27 2.74-6.27 8.02 0 4.56 2.05 8.17 6.08 8.17 3.34 0 6.35-2.13 6.35-7.9Zm35.57-.19c0 5.66-3.15 10.6-9.99 10.6s-9.99-4.94-9.99-10.6 3.15-10.6 9.99-10.6 9.99 4.9 9.99 10.6Zm-3.57 0c0-4.75-2.36-8.09-6.42-8.09s-6.42 3.34-6.42 8.09 2.36 8.09 6.42 8.09 6.42-3.38 6.42-8.09Zm24.24 10.07h-3.27v-3.42l-1.25 2.36c-1.71 1.25-3.19 1.6-5.24 1.6-4.18 0-6.61-2.36-7.07-5.13-.15-1.03-.19-1.82-.19-3.46V10.2h3.27v11.47c0 .65.04 1.75.15 2.77.3 2.28 1.94 3.84 4.67 3.84 3.15 0 5.66-2.36 5.66-9.23V10.2h3.27v20.14Zm9.69-5.89c0 .68 0 1.03.04 1.56.15 1.94.95 2.36 3.5 2.05v2.39c-.95.15-1.86.19-2.77.19-2.51 0-3.8-1.03-3.99-3.53-.04-.53-.04-1.37-.04-2.51V12.86h-2.7v-2.51h2.7V5.68h3.27v4.67h3.76v2.51h-3.76v11.59Zm11.44 3.99c0 1.41-1.03 2.43-2.43 2.43s-2.43-1.03-2.43-2.43 1.03-2.43 2.43-2.43 2.43 1.03 2.43 2.43Z" />{" "}
        </svg>
      </div>
      <footer className="items-center justify-center w-full m-auto bg-white rounded-lg lg:md:w-1/2">
        <div className="flex-col sm:flex sm:items-center sm:justify-between">
          <div className="text-md">
            A Social Experiment made with &#10084;&#65039; by @defient.co
          </div>
          <div className="text-xs">
            If you provide a valid public wallet address, Defient will airdrop the generated name to
            the wallet as an NFT. Defient grants full commercial rights over the generated name to
            the owner of the wallet holding the corresponding NFT. Go build something with it, start
            your community, and have some fun! Defient will never sell any information provided to
            third parties.
            <a
              href="https://7q7win2vvm2wnqvltzauqamrnuyhq3jn57yqad2nrgau4fe3l5ya.arweave.net/_D9kN1WrNWbCq55BSAGRbTB4bS3v8QAPTYmBThSbX3A/1"
              target="_blank"
              rel="noreferrer"
            >
              <span className="italic font-bold"> View full terms of service</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Results