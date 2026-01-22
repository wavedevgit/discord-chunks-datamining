/** Chunk was on web.js **/
/** chunk id: 886019, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Au: () => b,
  hy: () => g,
  vt: () => E
});
var Chunk492917 = require("./492917.js"),
  Chunk358957 = require("./358957.js"),
  Chunk708455 = require("./708455.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk628580 = require("./628580.js"),
  Chunk610263 = require("./610263.js");

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

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let _ = () => ({
    [a.Kk.BRB]: {
      title: o.intl.string(o.t.fFTJTI),
      icon: c
    },
    [a.Kk.CHILLING]: {
      title: o.intl.string(o.t.vybY9c),
      icon: r.uPL
    },
    [a.Kk.GAMING]: {
      title: o.intl.string(o.t.wvWdTV),
      icon: r.Zbm
    },
    [a.Kk.WATCHING]: {
      title: o.intl.string(o.t.s8xFaG),
      icon: l
    },
    [a.Kk.FOCUSING]: {
      title: o.intl.string(o.t.D5eCTx),
      icon: r.IDW
    }
  }),
  h = () => ({
    [a.Kk.BRB]: {
      title: o.intl.string(o.t.fFTJTI),
      emoji: {
        id: true,
        name: "\uD83E\uDDFB"
      }
    },
    [a.Kk.CHILLING]: {
      title: o.intl.string(o.t.vybY9c),
      emoji: {
        id: true,
        name: "\uD83C\uDF68"
      }
    },
    [a.Kk.GAMING]: {
      title: o.intl.string(o.t.wvWdTV),
      emoji: {
        id: true,
        name: "⚔️"
      }
    },
    [a.Kk.WATCHING]: {
      title: o.intl.string(o.t.s8xFaG),
      emoji: {
        id: true,
        name: "\uD83C\uDF7F"
      }
    },
    [a.Kk.FOCUSING]: {
      title: o.intl.string(o.t.D5eCTx),
      emoji: {
        id: true,
        name: "\uD83E\uDDE0"
      }
    }
  }),
  m = () => p(d({}, h()), {
    [a.Kk.CHILLING]: {
      title: o.intl.string(o.t.IeolFa),
      emoji: {
        id: true,
        name: "\uD83D\uDCAD"
      }
    }
  }),
  g = e => {
    switch (e) {
      case "illocons":
        return _();
      case "twemoji":
      default:
        return h();
      case "twemojimild":
        return m()
    }
  },
  E = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "twemoji";
    if ((null == t ? true : t.type) !== s.$pd.HANG_STATUS || (null == t ? true : t.state) == null) return null;
    let r = (0, i.e)(e, t.state),
      o = r[0];
    if (o === a.Kk.CUSTOM) return null;
    let l = g(r.length > 1 ? r[1] : n);
    return o in l ? l[o] : null
  },
  b = function(e, t) {
    var n;
    let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "twemoji";
    return (null == t ? true : t.type) !== s.$pd.HANG_STATUS || (null == t ? true : t.state) == null ? null : (0, i.e)(e, t.state)[0] === a.Kk.CUSTOM ? null == t ? true : t.details : null == (n = E(e, t, r)) ? true : n.title
  }