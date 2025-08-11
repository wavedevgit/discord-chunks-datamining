/** Chunk was on 44011 **/
/** chunk id: 373651, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  default: () => T
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk883385 = require("./883385.js"),
  Chunk108843 = require("./108843.jsx"),
  Chunk947440 = require("./947440.js"),
  Chunk100527 = require("./100527.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk916069 = require("./916069.js"),
  Chunk895563 = require("./895563.js"),
  Chunk212205 = require("./212205.jsx"),
  Chunk478035 = require("./478035.js"),
  Chunk62420 = require("./62420.jsx"),
  Chunk423589 = require("./423589.js"),
  Chunk398048 = require("./398048.js"),
  Chunk109764 = require("./109764.jsx"),
  Chunk3689 = require("./3689.jsx"),
  Chunk323597 = require("./323597.jsx"),
  Chunk852245 = require("./852245.js"),
  Chunk367722 = require("./367722.js"),
  Chunk461535 = require("./461535.js"),
  Chunk776568 = require("./776568.js"),
  Chunk218035 = require("./218035.jsx"),
  Chunk775666 = require("./775666.js"),
  Chunk593589 = require("./593589.js"),
  Chunk442754 = require("./442754.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js");

function O(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = null != arguments[e] ? arguments[e] : {},
      l = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(n) {
      return Object.getOwnPropertyDescriptor(t, n).enumerable
    }))), l.forEach(function(e) {
      var l;
      l = t[e], e in n ? Object.defineProperty(n, e, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : n[e] = l
    })
  }
  return n
}

function w(n) {
  let {
    channel: e,
    onSelect: t
  } = n, o = (0, N.Z)(e), c = (0, b.Z)(e), s = (0, h.l)(e), u = (0, h.P)(e), j = (0, Z.Z)(e), k = (0, p.Z)(e), S = (0, x.Z)(e), E = (0, P.ZP)(e), g = (0, _.Z)(e), Q = (0, C.Z)(e), m = (0, d.Z)({
    id: e.id,
    label: y.intl.string(y.t.gFHI3t)
  }), O = (0, a.Z)(e), w = (0, v.ZP)(e), A = (0, f.Mn)("ChannelContextFavoritesMenu");
  return <i.v2r navId={"channel-context"} onClose={r.Zy} aria-label={y.intl.string(y.t.Xm41aW)} onSelect={t}>{<i.kSQ>{o}</i.kSQ>}{<i.kSQ>{k}{S}{j}{s}</i.kSQ>}{<i.kSQ>{E}{A ? w : g}</i.kSQ>}{<i.kSQ>{Q}</i.kSQ>}{<i.kSQ>{O}</i.kSQ>}{<i.kSQ>{u}</i.kSQ>}{<i.kSQ>{c}</i.kSQ>}{<i.kSQ>{m}</i.kSQ>}</i.v2r>
}

function A(n) {
  let {
    channel: e,
    guild: t,
    onSelect: o
  } = n, c = (0, N.Z)(e), s = (0, b.Z)(e), u = (0, h.l)(e), Z = (0, h.P)(e), p = (0, Q.Z)(e), x = (0, P.ZP)(e), m = (0, C.Z)(e), O = (0, E.Z)(e, t), w = (0, j.Z)(e, t), A = (0, k.Z)(e, t), T = (0, S.Z)(e), M = (0, d.Z)({
    id: e.id,
    label: y.intl.string(y.t.gFHI3t)
  }), H = (0, a.Z)(e), I = (0, g.Z)(e, "list_text_channel_context_menu"), L = (0, _.Z)(e), X = (0, v.ZP)(e), q = (0, f.Mn)("ChannelContextMenuNormal");
  return <i.v2r navId={"channel-context"} onClose={r.Zy} aria-label={y.intl.string(y.t.Xm41aW)} onSelect={o}>{<i.kSQ>{c}{u}</i.kSQ>}{<i.kSQ>{O}{p}{s}{I}</i.kSQ>}{<i.kSQ>{x}{q ? X : L}</i.kSQ>}{<i.kSQ>{m}{w}{A}{T}</i.kSQ>}{<i.kSQ>{H}</i.kSQ>}{<i.kSQ>{Z}</i.kSQ>}{<i.kSQ>{M}</i.kSQ>}</i.v2r>
}
let T = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(n) {
  return (0, u.Z)() ? <w{...O({}, n)} /> : <A{...O({}, n)} />
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU])