/** Chunk was on 6524 **/
/** chunk id: 27900, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => I
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk883385 = require("./883385.js"),
  Chunk108843 = require("./108843.js"),
  Chunk947440 = require("./947440.js"),
  Chunk100527 = require("./100527.js"),
  Chunk299206 = require("./299206.js"),
  Chunk819403 = require("./819403.js"),
  Chunk777658 = require("./777658.js"),
  Chunk858488 = require("./858488.js"),
  Chunk933409 = require("./933409.js"),
  Chunk389052 = require("./389052.js"),
  Chunk24311 = require("./24311.jsx"),
  Chunk158508 = require("./158508.js"),
  Chunk710631 = require("./710631.js"),
  Chunk494439 = require("./494439.js"),
  Chunk991307 = require("./991307.js"),
  Chunk700994 = require("./700994.js"),
  Chunk332031 = require("./332031.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js");

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e) {
  let {
    user: t,
    guildId: n,
    channelId: o,
    mediaEngineContext: a,
    onSelect: c,
    onShowProfile: S,
    onWatchStream: h,
    appContext: P
  } = e, A = (0, v.Z)({
    onAction: () => {
      null == S || S()
    }
  }), M = (0, Z.Z)({
    user: t,
    context: P
  }), I = (0, b.Z)({
    user: t,
    appContext: P
  }), x = (0, p.Z)(t.id, h), C = (0, m.Z)(t.id), D = (0, E.Z)(t.id, a), N = (0, j.Z)({
    user: t
  }), T = (0, u.Z)(null, t), w = (0, f.Z)({
    user: t,
    appContext: P
  }), U = (0, O.Z)({
    user: t,
    appContext: P
  }), k = (0, y.Z)({
    user: t,
    appContext: P
  }), L = (0, s.Z)({
    id: t.id,
    label: _.intl.string(_.t["/AXYnJ"])
  }), R = (0, d.Z)(t), B = (0, g.Z)(t, n, o), V = t.isNonUserBot();
  return <r.v2r navId={"user-context"} onClose={i.Zy} aria-label={_.intl.string(_.t.liqwPD)} onSelect={c}>{!V && <l.Fragment>{<r.kSQ>{R}</r.kSQ>}{<r.kSQ>{A}{M}{I}{x}</r.kSQ>}{<r.kSQ>{C}</r.kSQ>}{<r.kSQ>{T}</r.kSQ>}{<r.kSQ>{D}{N}{w}{k}{U}</r.kSQ>}{<r.kSQ>{B}</r.kSQ>}</l.Fragment>}{<r.kSQ>{L}</r.kSQ>}</r.v2r>
}

function M(e) {
  let {
    user: t,
    mediaEngineContext: n,
    onSelect: o,
    onShowProfile: a,
    onWatchStream: c,
    appContext: g
  } = e, S = (0, v.Z)({
    onAction: () => {
      null == a || a()
    }
  }), h = (0, Z.Z)({
    user: t,
    context: g
  }), P = (0, b.Z)({
    user: t,
    appContext: g
  }), A = (0, p.Z)(t.id, c), M = (0, m.Z)(t.id), I = (0, E.Z)(t.id, n), x = (0, j.Z)({
    user: t
  }), C = (0, u.Z)(null, t), D = (0, f.Z)({
    user: t,
    appContext: g
  }), N = (0, O.Z)({
    user: t,
    appContext: g
  }), T = (0, y.Z)({
    user: t,
    appContext: g
  }), w = (0, s.Z)({
    id: t.id,
    label: _.intl.string(_.t["/AXYnJ"])
  }), U = (0, d.Z)(t), k = t.isNonUserBot();
  return <r.v2r navId={"user-context"} onClose={i.Zy} aria-label={_.intl.string(_.t.liqwPD)} onSelect={o}>{!k && <l.Fragment>{<r.kSQ>{U}</r.kSQ>}{<r.kSQ>{S}{h}{P}{A}</r.kSQ>}{<r.kSQ>{M}</r.kSQ>}{<r.kSQ>{C}</r.kSQ>}{<r.kSQ>{I}{x}{D}{T}{N}</r.kSQ>}</l.Fragment>}{<r.kSQ>{w}</r.kSQ>}</r.v2r>
}
let I = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  var {
    guildId: t,
    channelId: n
  } = e, r = function(e, t) {
    if (null == e) return {};
    var n, l, r = function(e, t) {
      if (null == e) return {};
      var n, l, r = {},
        i = Object.keys(e);
      for (l = 0; l < i.length; l++) n = i[l], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["guildId", "channelId"]);
  return null != t && null != n ? <A{...P(h({}, r), {
    guildId: t,
    channelId: n
  })} /> : <M{...P(h({}, r), {
    guildId: t,
    channelId: n
  })} />
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.USER_OVERLAY_CONTEXT_MENU])