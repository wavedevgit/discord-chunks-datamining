/** Chunk was on 89311 **/
/** chunk id: 426482, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  C: () => m,
  Z: () => u
}), require("./388685.js");
var n, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk376377 = require("./376377.js"),
  u = ((n = {})[n.SMALL = 0] = "SMALL", n[n.LARGE = 1] = "LARGE", n);

function m(e) {
  var t;
  let {
    game: r,
    application: n,
    size: l,
    className: u
  } = e, [m, g] = i.useState(false), p = null != (t = null == n ? true : n.name) ? t : r.name, f = null != r.firstReleaseDate ? new Date(r.firstReleaseDate) : null;
  return null == r.coverImageUrl || m ? <div className={o()(d.fallback, u)}>{<div className={d.spacer} />}{<s.xv variant={1 === l ? "text-md/medium" : "text-xs/medium"} color={"always-white"} lineClamp={1 === l ? 4 : 3}>{p}</s.xv>}{<div className={d.spacer} />}{<s.xv variant={1 === l ? "text-sm/normal" : "text-xxs/normal"} color={"always-white"}>{null != f ? "(".concat(null == f ? true : f.getFullYear(), ")") : null}</s.xv>}</div> : <img className={u} src={r.coverImageUrl} alt={c.intl.formatToPlainString(c.t["3ev90d"], {
      game: p
    })} onError={() => {
      g(true)
    }} onLoad={() => {
      g(false)
    }} />
}