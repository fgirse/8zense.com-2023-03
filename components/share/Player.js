import Video from "next-video";

import myVideo from "@/videos/LogoEZ.mp4";

export default function Page() {
  return (
    <Video
      className="height={400} width={400} rounded-xl shadow-2xl"
      src={myVideo}
      muted={true}
      loop={true}
      autoplay="true"
    />
  );
}
