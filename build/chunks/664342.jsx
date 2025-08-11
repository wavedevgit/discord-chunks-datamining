/** Chunk was on 49152 **/
/** chunk id: 664342, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk32750 = require("./32750.jsx"),
  Chunk109764 = require("./109764.jsx"),
  Chunk323597 = require("./323597.jsx"),
  Chunk438536 = require("./438536.jsx"),
  Chunk193987 = require("./193987.jsx"),
  Chunk933793 = require("./933793.js"),
  Chunk13736 = require("./13736.jsx"),
  Chunk732393 = require("./732393.js"),
  Chunk214906 = require("./214906.jsx"),
  Chunk612856 = require("./612856.jsx"),
  Chunk137591 = require("./137591.jsx"),
  Chunk299206 = require("./299206.jsx"),
  Chunk727429 = require("./727429.js"),
  Chunk665149 = require("./665149.js"),
  Chunk359110 = require("./359110.js"),
  Chunk585483 = require("./585483.js"),
  Chunk407908 = require("./407908.jsx"),
  Chunk739830 = require("./739830.js"),
  Chunk488131 = require("./488131.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function I(e) {
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

function Z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function P(e) {
  let {
    channel: t
  } = e, [n, a] = i.useState(false), s = i.useRef(null);

  function o() {
    a(e => !e)
  }
  let c = S.intl.string(S.t.UKOtz8);
  return <l.yRy targetElementRef={s} shouldShow={n} animation={l.yRy.Animation.NONE} position={"bottom"} align={"right"} autoInvert={false} onRequestClose={() => a(false)} renderPopout={function(e) {
      return (0, r.jsx)(T, Z(I({}, e), {
        channel: t
      }))
    }}>{(e, t) => {
      let {
        isShown: n
      } = t;
      return (0, r.jsx)(x.ZP.Icon, Z(I({}, e), {
        ref: s,
        onClick: o,
        tooltip: n ? null : c,
        icon: l.xhG,
        "aria-label": c,
        selected: n
      }))
    }}</l.yRy>
}

function T(e) {
  let {
    channel: t,
    closePopout: n,
    onSelect: i
  } = e, y = (0, c.Z)(t, "Sidebar Overflow"), x = (0, d.Z)(t), O = (0, f.Z)(t), v = (0, g.Z)(t), C = (0, a.Z)(t), I = (0, u.Z)(t), Z = (0, p.Z)(t.id), P = (0, h.Z)(t), T = (0, o.Z)(t), N = (0, s.Z)(t), R = (0, b.Z)({
    id: t.id,
    label: S.intl.string(S.t.DQ797u)
  }), w = (0, m.Z)(t);

  function A() {
    (0, _.Kh)(t.id)
  }
  return <l.v2r navId={"thread-context"} onClose={n} aria-label={S.intl.string(S.t["1NBjqa"])} onSelect={i}>{<l.kSQ>{y}{<l.sNh id={"open"} label={S.intl.string(S.t.IxVmZm)} action={A} />}</l.kSQ>}{<l.kSQ>{O}{v}</l.kSQ>}{<l.kSQ>{P}{x}{Z}</l.kSQ>}{<l.kSQ>{<l.sNh id={"search"} label={S.intl.string(S.t["5h0QOD"])} icon={l.rgF} action={function() {
          A(), setTimeout(() => {
            j.S.dispatch(E.CkL.FOCUS_SEARCH, {
              prefillCurrentChannel: false
            })
          }, 2e3)
        }} />}{<l.sNh id={"pins"} label={S.intl.string(S.t["2BSH7u"])} icon={l.rgF} action={function() {
          A(), j.S.dispatch(E.CkL.TOGGLE_CHANNEL_PINS)
        }} />}</l.kSQ>}{<l.kSQ>{w}{C}{I}{T}</l.kSQ>}{<l.kSQ>{N}{R}</l.kSQ>}</l.v2r>
}

function N(e) {
  let {
    channel: t,
    baseChannelId: n
  } = e;
  return <r.Fragment>{t.isForumPost() ? null : <v.Z channel={t} />}{<O.Z channel={t} />}{<P channel={t} />}{<x.ZP.Icon icon={l.Dio} tooltip={S.intl.string(S.t.cpT0Cg)} onClick={() => (0, C.vN)((0, y.e)(t), null != n ? n : t.parent_id)} />}</r.Fragment>
}