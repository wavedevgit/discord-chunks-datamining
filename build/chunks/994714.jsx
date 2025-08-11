/** Chunk was on 75708 **/
/** chunk id: 994714, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk715495 = require("./715495.jsx"),
  Chunk538645 = require("./538645.jsx"),
  Chunk512072 = require("./512072.js");
let m = e => {
    let {
      setTab: t
    } = e;
    return <div>{<o.P3F onClick={() => {
          t(1)
        }}><div className={a()(u.banner, u.pfxBanner)}><l.xv variant={"text-md/bold"} color={"always-white"}>{"Profile Effects"}</l.xv></div></o.P3F>}{<o.P3F onClick={() => {
          t(2)
        }}><div className={a()(u.banner, u.nameplateBanner)}><l.xv variant={"text-md/bold"} color={"always-white"}>{"Nameplates"}</l.xv></div></o.P3F>}</div>
  },
  p = () => {
    let [e, t] = Chunk73800.useState(0);
    return <div className={Chunk512072.wrapper}>{<div className={Chunk512072.nav}>{<Chunk793030.X6 variant={"heading-xxl/medium"}>{"ShopKeeper"}</Chunk793030.X6>}{0 !== module && <Chunk481060.zxk variant={"primary"} onClick={() => exports(0)} text={"Back"} />}</div>}{(() => {
        switch (module) {
          case 1:
            return <Chunk538645.Z />;
          case 2:
            return <Chunk715495.Z />;
          default:
            return <m setTab={exports} />
        }
      })()}</div>
  }