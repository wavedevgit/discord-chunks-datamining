/** Chunk was on web.js **/
/** chunk id: 833858, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O8: () => b,
  V: () => g,
  tV: () => E
});
var Chunk970683 = require("./970683.js"),
  Chunk797156 = require("./797156.js"),
  Chunk505905 = require("./505905.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk829290 = require("./829290.js"),
  Chunk136779 = require("./136779.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = () => ({
    [Chunk505905.tN.BRB]: {
      title: Chunk388032.intl.string(Chunk388032.t.fFTJTI),
      icon: Chunk136779
    },
    [Chunk505905.tN.CHILLING]: {
      title: Chunk388032.intl.string(Chunk388032.t.vybY9c),
      icon: Chunk970683.s_
    },
    [Chunk505905.tN.GAMING]: {
      title: Chunk388032.intl.string(Chunk388032.t.wvWdTV),
      icon: Chunk970683.mB
    },
    [Chunk505905.tN.WATCHING]: {
      title: Chunk388032.intl.string(Chunk388032.t.s8xFaG),
      icon: Chunk829290
    },
    [Chunk505905.tN.FOCUSING]: {
      title: Chunk388032.intl.string(Chunk388032.t.D5eCTx),
      icon: Chunk970683.FG
    }
  }),
  h = () => ({
    [Chunk505905.tN.BRB]: {
      title: Chunk388032.intl.string(Chunk388032.t.fFTJTI),
      emoji: {
        id: true,
        name: "\uD83E\uDDFB"
      }
    },
    [Chunk505905.tN.CHILLING]: {
      title: Chunk388032.intl.string(Chunk388032.t.vybY9c),
      emoji: {
        id: true,
        name: "\uD83C\uDF68"
      }
    },
    [Chunk505905.tN.GAMING]: {
      title: Chunk388032.intl.string(Chunk388032.t.wvWdTV),
      emoji: {
        id: true,
        name: "⚔️"
      }
    },
    [Chunk505905.tN.WATCHING]: {
      title: Chunk388032.intl.string(Chunk388032.t.s8xFaG),
      emoji: {
        id: true,
        name: "\uD83C\uDF7F"
      }
    },
    [Chunk505905.tN.FOCUSING]: {
      title: Chunk388032.intl.string(Chunk388032.t.D5eCTx),
      emoji: {
        id: true,
        name: "\uD83E\uDDE0"
      }
    }
  }),
  m = () => _(d({}, h()), {
    [Chunk505905.tN.CHILLING]: {
      title: Chunk388032.intl.string(Chunk388032.t.IeolFa),
      emoji: {
        id: true,
        name: "\uD83D\uDCAD"
      }
    }
  }),
  g = e => {
    switch (e) {
      case "illocons":
        return p();
      case "twemoji":
      default:
        return h();
      case "twemojimild":
        return m()
    }
  },
  E = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "twemoji";
    if ((null == t ? true : t.type) !== o.IIU.HANG_STATUS || (null == t ? true : t.state) == null) return null;
    let r = (0, i.F)(e, t.state),
      s = r[0];
    if (s === a.tN.CUSTOM) return null;
    let l = g(r.length > 1 ? r[1] : n);
    return s in l ? l[s] : null
  },
  b = function(e, t) {
    var n;
    let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "twemoji";
    return (null == t ? true : t.type) !== o.IIU.HANG_STATUS || (null == t ? true : t.state) == null ? null : (0, i.F)(e, t.state)[0] === a.tN.CUSTOM ? null == t ? true : t.details : null == (n = E(e, t, r)) ? true : n.title
  }