
import "./index.scss"

export default function Pop( { children,isShow }: { children: React.ReactNode,isShow: boolean} ){
  return <div className="pop" style={{ display: isShow?"":"none" }}>
    <div className="window">
      {children}
    </div>
  </div>
}