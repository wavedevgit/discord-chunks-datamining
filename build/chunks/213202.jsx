/** Chunk was on 83331 **/
/** chunk id: 213202, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => Y
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk883385 = require("./883385.js"),
  Chunk108843 = require("./108843.jsx"),
  Chunk947440 = require("./947440.js"),
  Chunk100527 = require("./100527.js"),
  Chunk299206 = require("./299206.js"),
  Chunk916069 = require("./916069.js"),
  Chunk895563 = require("./895563.js"),
  Chunk212205 = require("./212205.jsx"),
  Chunk478035 = require("./478035.js"),
  Chunk62420 = require("./62420.jsx"),
  Chunk420529 = require("./420529.js"),
  Chunk554747 = require("./554747.js"),
  Chunk924952 = require("./924952.js"),
  Chunk423589 = require("./423589.js"),
  Chunk427679 = require("./427679.js"),
  Chunk398048 = require("./398048.js"),
  Chunk109764 = require("./109764.jsx"),
  Chunk3689 = require("./3689.jsx"),
  Chunk323597 = require("./323597.js"),
  Chunk852245 = require("./852245.js"),
  Chunk493802 = require("./493802.js"),
  Chunk367722 = require("./367722.js"),
  Chunk461535 = require("./461535.js"),
  Chunk776568 = require("./776568.js"),
  Chunk218035 = require("./218035.js"),
  Chunk775666 = require("./775666.js"),
  Chunk442754 = require("./442754.js"),
  Chunk333805 = require("./333805.js"),
  Chunk567521 = require("./567521.js"),
  Chunk624514 = require("./624514.js"),
  Chunk917327 = require("./917327.js"),
  Chunk381924 = require("./381924.js"),
  Chunk601274 = require("./601274.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js");

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function X(e) {
  let {
    channel: t,
    guild: n,
    onSelect: o
  } = e, c = t.isGuildStageVoice(), u = (0, r.e7)([y.Z], () => c ? y.Z.getStageInstanceByChannel(t.id) : true, [c, t.id]), Z = (0, S.Z)(t), j = (0, v.qY)(t.id), x = (0, p.Z)(null == j ? true : j.id, n, t), P = (0, V.Z)(t, u), C = (0, f.l)(t), N = (0, f.P)(t), _ = (0, g.Z)(t), k = (0, h.Z)(t), L = (0, b.Z)(t), G = (0, E.Z)(t), M = (0, T.Z)(t), A = (0, m.Z)(t), R = (0, I.Z)(t, n), X = (0, d.Z)({
    id: t.id,
    label: U.intl.string(U.t.gFHI3t)
  }), q = (0, Q.Z)(t), Y = (0, s.Z)(t), H = (0, O.Mn)("ChannelListVoiceContextMenuFavorite"), F = (0, w.ZP)(t), W = (0, D.Z)();
  return <l.v2r navId={"channel-context"} onClose={a.Zy} aria-label={U.intl.string(U.t.Xm41aW)} onSelect={o}>{<l.kSQ>{null != j ? x : P}</l.kSQ>}{<l.kSQ>{k}{L}{_}{C}</l.kSQ>}{<l.kSQ>{G}{H ? F : M}{A}</l.kSQ>}{<l.kSQ>{Y}</l.kSQ>}{<l.kSQ>{N}</l.kSQ>}{<l.kSQ>{R}{Z}</l.kSQ>}{<l.kSQ>{q}</l.kSQ>}{<l.kSQ>{X}{W}</l.kSQ>}</l.v2r>
}

function q(e) {
  let {
    channel: t,
    guild: n,
    onSelect: o
  } = e, c = t.isGuildStageVoice(), u = (0, r.e7)([y.Z], () => c ? y.Z.getStageInstanceByChannel(t.id) : true, [c, t.id]), Z = (0, _.Z)(t), g = (0, S.Z)(t), h = (0, v.qY)(t.id), b = (0, p.Z)(null == h ? true : h.id, n, t), A = (0, V.Z)(t, u), R = (0, f.l)(t), X = (0, f.P)(t), q = (0, E.Z)(t), Y = (0, T.Z)(t), H = (0, m.Z)(t), F = (0, N.Z)(t, n, u), W = (0, I.Z)(t, n), z = (0, G.Z)(t, n), B = (0, M.Z)(t, n.id), K = (0, x.Z)(t, n), J = (0, P.Z)(t, n), $ = (0, C.Z)(t), ee = (0, d.Z)({
    id: t.id,
    label: U.intl.string(U.t.gFHI3t)
  }), et = (0, Q.Z)(t), en = (0, s.Z)(t), ei = (0, L.Z)(t), er = (0, j.Z)(t), el = (0, k.ZP)(t), ea = (0, O.Mn)("ChannelListVoiceContextMenuNormal"), eo = (0, w.ZP)(t), ec = (0, D.Z)();
  return <l.v2r navId={"channel-context"} onClose={a.Zy} aria-label={U.intl.string(U.t.Xm41aW)} onSelect={o}>{<l.kSQ>{null != h ? b : A}</l.kSQ>}{<l.kSQ>{Z}{R}</l.kSQ>}{<l.kSQ>{F}{en}{ei}{g}</l.kSQ>}{<l.kSQ>{B}{W}{z}{q}{er}{et}</l.kSQ>}{<l.kSQ>{el}{ea ? eo : Y}</l.kSQ>}{<l.kSQ>{X}</l.kSQ>}{<l.kSQ>{H}{K}{J}{$}</l.kSQ>}{<l.kSQ>{ee}{ec}</l.kSQ>}</l.v2r>
}
let Y = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  return (0, Z.Z)() ? <X{...R({}, e)} /> : <q{...R({}, e)} />
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.CHANNEL_LIST_VOICE_CHANNEL_MENU])