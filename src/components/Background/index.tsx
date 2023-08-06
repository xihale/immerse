import "./index.scss"

export default function Background() {
  return (
    <div className="bg">
      <video autoPlay loop muted>
        {/* 浏览器强制缓存 */}
        <source src="oneloop.mp4" type="video/mp4" />
      </video>
    </div>
  );
}