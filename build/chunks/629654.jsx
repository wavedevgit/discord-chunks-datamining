/** Chunk was on 75708 **/
/** chunk id: 629654, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk667105 = require("./667105.js"),
  Chunk211712 = require("./211712.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk561234 = require("./561234.js");

function m(e) {
  let {
    preset: t,
    onShuffle: n
  } = e, m = (0, s.e7)([l.Z], () => l.Z.useReducedMotion), p = (0, o.g2)({
    useReducedMotion: m
  }), {
    name: g,
    header: h
  } = r.useMemo(() => {
    let e = (0, c.Ib)(t);
    return {
      name: e.getName(),
      header: e.getHeaderSrc()
    }
  }, [t]);
  return <div className={u.container}>{<a.P3F onClick={() => {
        n(), p.startAnimation(false)
      }} className={u.button} aria-label={d.intl.string(d.t["44yJxs"])}>{p.render()}</a.P3F>}{<a.P3F onClick={() => {
        n(), p.startAnimation(false)
      }} aria-label={"".concat(g, ": ").concat(d.intl.string(d.t["44yJxs"]))} className={u.select}>{<img alt={""} aria-hidden={true} src={h} className={u.presetImage} />}{<a.Text className={u.presetLabel} variant={"text-sm/bold"} color={"always-white"}>{g}</a.Text>}</a.P3F>}</div>
}