/** Chunk was on 67544 **/
/** chunk id: 423915, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668826 = require("./668826.js"),
  Chunk120421 = require("./120421.js"),
  Chunk18582 = require("./18582.jsx"),
  Chunk603571 = require("./603571.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk854335 = require("./854335.js"),
  Chunk527474 = require("./527474.js"),
  Chunk476657 = require("./476657.js");

function g() {
  let [e, t] = (0, Chunk73800.useState)(false), [n, g] = (0, Chunk73800.useState)(false), b = (0, Chunk73800.useRef)(false), y = (0, Chunk442837.e7)([Chunk120421.Z], () => Chunk120421.Z.volume), h = (0, Chunk442837.e7)([Chunk120421.Z], () => Chunk120421.Z.isMuted);
  return <div className={Chunk854335.volume} onMouseEnter={() => exports(true)} onMouseLeave={() => exports(false)}>{<Chunk18582.Z onClick={() => (0, Chunk668826.Zj)(!h)}><img className={Chunk854335.icon} src={h ? Chunk476657 : Chunk527474} alt={Chunk388032.intl.string(Chunk603571.default["3Kvtn5"])} /></Chunk18582.Z>}{module || require ? <Chunk481060.iRW className={Chunk854335.volumeSlider} initialValue={h ? 0 : 100 * y} minValue={0} maxValue={100} asValueChanges={e => {
        (0, i.jA)(e / 100), (0, i.Zj)(0 === e), g(true), clearTimeout(b.current), b.current = setTimeout(() => {
          g(false)
        }, 1e3)
      }} /> : null}</div>
}