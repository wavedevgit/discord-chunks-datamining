/** Chunk was on 8965 **/
/** chunk id: 139035, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => S
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk108843 = require("./108843.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk299206 = require("./299206.js"),
  Chunk916069 = require("./916069.js"),
  Chunk697229 = require("./697229.js"),
  Chunk212205 = require("./212205.js"),
  Chunk423589 = require("./423589.js"),
  Chunk411567 = require("./411567.js"),
  Chunk672824 = require("./672824.js"),
  Chunk3689 = require("./3689.jsx"),
  Chunk323597 = require("./323597.js"),
  Chunk852245 = require("./852245.js"),
  Chunk461535 = require("./461535.js"),
  Chunk776568 = require("./776568.js"),
  Chunk218035 = require("./218035.js"),
  Chunk775666 = require("./775666.js"),
  Chunk442754 = require("./442754.js"),
  Chunk623483 = require("./623483.js"),
  Chunk388032 = require("./388032.js");

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function E(e) {
  let {
    channel: t,
    onSelect: n
  } = e, o = (0, j.Z)(t), c = (0, h.ZP)(t), s = (0, Z.Z)(t), p = (0, O.Z)(t), g = (0, f.Z)(t), y = (0, d.Z)(t), v = (0, u.Z)(t), w = (0, _.Z)(t), E = (0, a.Z)({
    id: t.id,
    label: m.intl.string(m.t["2visCw"])
  }), C = (0, b.Mn)("ChannelCategoryFavoritesMenu"), S = (0, P.ZP)(t);
  return <i.v2r navId={"channel-context"} onClose={l.Zy} aria-label={m.intl.string(m.t.Xm41aW)} onSelect={n}>{<i.kSQ>{o}{v}{y}</i.kSQ>}{<i.kSQ>{c}{C ? S : s}</i.kSQ>}{<i.kSQ>{p}{g}</i.kSQ>}{<i.kSQ>{w}</i.kSQ>}{<i.kSQ>{E}</i.kSQ>}</i.v2r>
}

function C(e) {
  let {
    channel: t,
    guild: n,
    onSelect: o
  } = e, c = (0, j.Z)(t), s = (0, h.ZP)(t), u = (0, Z.Z)(t), _ = (0, O.Z)(t), w = (0, f.Z)(t), E = (0, y.Z)(t), C = (0, d.Z)(t), S = (0, p.Z)(t, n), N = (0, g.Z)(t), x = (0, a.Z)({
    id: t.id,
    label: m.intl.string(m.t["2visCw"])
  }), k = (0, v.Z)(t), A = (0, b.Mn)("ChannelCategoryNormalMenu"), D = (0, P.ZP)(t);
  return <i.v2r navId={"channel-context"} onClose={l.Zy} aria-label={m.intl.string(m.t.Xm41aW)} onSelect={o}>{<i.kSQ>{c}</i.kSQ>}{<i.kSQ>{k}{_}{w}</i.kSQ>}{<i.kSQ>{s}{A ? D : u}</i.kSQ>}{<i.kSQ>{E}{C}{S}{N}</i.kSQ>}{<i.kSQ>{x}</i.kSQ>}</i.v2r>
}
let S = (0, Chunk108843.Z)(function(e) {
  return (0, s.Z)() ? <E{...w({}, e)} /> : <C{...w({}, e)} />
}, [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.CHANNEL_CATEGORY_MENU])