/** Chunk was on web.js **/
/** chunk id: 845537, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EK: () => G,
  Io: () => k,
  N1: () => B,
  NY: () => M,
  Ox: () => x,
  Vq: () => j,
  Wf: () => U,
  cB: () => L,
  dy: () => w,
  wP: () => D
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk99690 = require("./99690.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk754688 = require("./754688.js"),
  Chunk699450 = require("./699450.js"),
  Chunk303694 = require("./303694.js"),
  Chunk124072 = require("./124072.jsx"),
  Chunk891984 = require("./891984.jsx"),
  Chunk884902 = require("./884902.js");
require("./763296.js");
var Chunk592125 = require("./592125.js"),
  Chunk77498 = require("./77498.js"),
  Chunk485386 = require("./485386.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk934415 = require("./934415.js"),
  Chunk5192 = require("./5192.js"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk498398 = require("./498398.js"),
  Chunk602009 = require("./602009.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function w(e) {
  let {
    emoji: t
  } = e;
  return (0, r.jsx)(a.ua7, {
    text: t.name,
    delay: 750,
    position: "top",
    children: e => (0, r.jsx)(o.Z, N({
      src: t.src,
      emojiName: t.name,
      animated: false,
      surrogate: t.surrogate
    }, e))
  })
}

function D(e) {
  let {
    emoji: t
  } = e;
  return (0, r.jsx)(a.ua7, {
    text: t.name,
    delay: 750,
    position: "top",
    children: e => (0, r.jsx)(o.Z, N({
      emojiId: t.emojiId,
      emojiName: t.name,
      animated: t.animated
    }, e))
  })
}

function x(e) {
  let {
    text: t
  } = e;
  return (0, r.jsx)(f.Z, {
    children: t
  })
}

function L(e) {
  let {
    id: t,
    guildId: n,
    channelId: o
  } = e, l = (0, i.e7)([b.default], () => b.default.getUser(t)), c = (0, i.e7)([E.Z], () => E.Z.hidePersonalInformation), u = v.ZP.useName(n, o, l), d = (0, r.jsx)(f.Z, {
    children: null == u ? "<@".concat(t, ">") : "@".concat(u)
  });
  if (null != l) {
    let e = c || l.hasUniqueUsername() ? null : "#".concat(l.discriminator);
    return (0, r.jsx)(a.ua7, {
      text: (0, r.jsxs)("div", {
        className: S.userTooltip,
        children: [(0, r.jsx)(s.Z, {
          user: l,
          animate: true,
          size: a.EFr.SIZE_16,
          className: S.avatar
        }), I.ZP.getUserTag(l, {
          mode: "username",
          identifiable: c ? "never" : "always"
        }), (0, r.jsx)("span", {
          className: S.discriminator,
          children: e
        })]
      }),
      delay: 750,
      position: "top",
      "aria-label": I.ZP.getUserTag(l, {
        decoration: "never"
      }),
      children: e => (0, r.jsx)(a.P3F, P(N({
        tag: "span"
      }, e), {
        children: d
      }))
    })
  }
  return d
}

function j(e) {
  let {
    id: t,
    guildId: n
  } = e, o = (0, i.e7)([g.Z], () => null != n ? g.Z.getRole(n, t) : true), s = (0, i.e7)([l.Z], () => l.Z.roleStyle), c = (0, p._f)(n, o, null == o ? true : o.colorStrings);
  if (null == o) return (0, r.jsxs)("span", {
    children: ["@", T.intl.string(T.t["YV4F/v"])]
  });
  let u = null != o.color && 0 !== o.color,
    d = "dot" === s,
    _ = "username" === s && u;
  return (0, r.jsxs)(f.Z, {
    color: _ ? o.color : null,
    roleColors: _ ? c : null,
    children: [d && (0, r.jsx)(a.FhE, {
      color: o.colorString,
      colors: c,
      background: false,
      tooltip: false
    }), "@", o.name]
  })
}

function k(e) {
  let {
    id: t
  } = e, n = (0, i.e7)([h.Z], () => h.Z.getChannel(t)), a = T.intl.string(T.t.zLZPmp).toLowerCase(), o = "text", s = true;
  if (null != n) {
    var l;
    a = (0, c.YO)(n) ? n.name : T.intl.string(T.t["/YzI6+"]), o = (0, c.YO)(n) ? null != (l = (0, O.wl)(n)) ? l : "text" : "locked", s = (0, u.B)(n.type)
  }
  return s ? (0, r.jsx)(f.Z, {
    iconType: o,
    children: a
  }) : (0, r.jsx)("span", {
    children: "#" + a
  })
}

function M(e) {
  let {
    id: t,
    itemId: n,
    guildId: i
  } = e, a = (0, d.l)(t), o = (0, d.W)(t, n, i);
  return (0, r.jsxs)(f.Z, {
    iconType: t,
    children: [a, null != o && (0, r.jsx)(_.Z, {}), o]
  })
}

function U(e) {
  let {
    text: t,
    id: n
  } = e;
  return (0, r.jsxs)(f.Z, {
    children: [t, "(", n, ")"]
  })
}

function G(e) {
  let {
    timestamp: t
  } = e;
  return (0, r.jsx)("span", {
    className: A.timestamp,
    children: t.formatted
  })
}

function B(e) {
  var t;
  let {
    id: n
  } = e, a = (0, i.e7)([m.Z], () => m.Z.getDetectableGame(n)), o = null != a ? (0, r.jsx)("img", {
    alt: "",
    className: S.icon,
    src: y.ZP.getApplicationIconURL({
      id: a.id,
      icon: a.icon,
      size: 32
    })
  }) : null;
  return (0, r.jsxs)(f.Z, {
    children: [o, null != (t = null == a ? true : a.name) ? t : T.intl.string(T.t["11pdXV"])]
  })
}