/** Chunk was on web.js **/
/** chunk id: 613306, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cn: () => x,
  Dc: () => M,
  M9: () => P,
  NH: () => k,
  QT: () => R,
  gn: () => j,
  sQ: () => L,
  ti: () => D,
  wN: () => w,
  zT: () => N
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk730134 = require("./730134.jsx"),
  Chunk775602 = require("./775602.js"),
  Chunk376943 = require("./376943.js"),
  Chunk465365 = require("./465365.js"),
  Chunk78390 = require("./78390.js"),
  Chunk678473 = require("./678473.jsx"),
  Chunk332173 = require("./332173.jsx"),
  Chunk37632 = require("./37632.jsx"),
  Chunk967144 = require("./967144.js");
require("./209932.js");
var Chunk734057 = require("./734057.js"),
  Chunk760751 = require("./760751.js"),
  Chunk317525 = require("./317525.js"),
  Chunk351906 = require("./351906.js"),
  Chunk287809 = require("./287809.js"),
  Chunk486020 = require("./486020.js"),
  Chunk147036 = require("./147036.js"),
  Chunk562153 = require("./562153.js"),
  Chunk427262 = require("./427262.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk790704 = require("./790704.js");

function N(e) {
  let {
    emoji: t
  } = e;
  return (0, r.jsx)(a.m, {
    text: t.name,
    delay: 750,
    position: "top",
    children: (0, r.jsx)(o.A, {
      src: t.src,
      emojiName: t.name,
      animated: false,
      surrogate: t.surrogate
    })
  })
}

function R(e) {
  let {
    emoji: t
  } = e;
  return (0, r.jsx)(a.m, {
    text: t.name,
    delay: 750,
    position: "top",
    children: (0, r.jsx)(o.A, {
      emojiId: t.emojiId,
      emojiName: t.name,
      animated: t.animated
    })
  })
}

function w(e) {
  let {
    text: t
  } = e;
  return (0, r.jsx)(_.A, {
    children: t
  })
}

function P(e) {
  let {
    id: t,
    guildId: n,
    channelId: o
  } = e, c = (0, i.bG)([O.default], () => O.default.getUser(t)), u = (0, i.bG)([b.A], () => b.A.hidePersonalInformation), d = I.Ay.useName(n, o, c), f = (0, r.jsx)(_.A, {
    children: null == d ? "<@".concat(t, ">") : "@".concat(d)
  });
  if (null != c) {
    let e = u || c.hasUniqueUsername() ? null : "#".concat(c.discriminator);
    return (0, r.jsx)(a.m, {
      __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
        className: C.fX,
        children: [(0, r.jsx)(l.A, {
          user: c,
          animate: true,
          size: s._3J.SIZE_16,
          className: C.my
        }), S.Ay.getUserTag(c, {
          mode: "username",
          identifiable: u ? "never" : "always"
        }), (0, r.jsx)("span", {
          className: C.D2,
          children: e
        })]
      }),
      delay: 750,
      position: "top",
      "aria-label": S.Ay.getUserTag(c, {
        decoration: "never"
      }),
      asContainer: true,
      children: (0, r.jsx)(s.DUT, {
        tag: "span",
        children: f
      })
    })
  }
  return f
}

function D(e) {
  let {
    id: t,
    guildId: n
  } = e, a = (0, i.bG)([y.A], () => null != n ? y.A.getRole(n, t) : true), o = (0, i.bG)([c.A], () => c.A.roleStyle), l = (0, m.X_)(n, a, null == a ? true : a.colorStrings);
  if (null == a) return (0, r.jsxs)("span", {
    children: ["@", T.intl.string(T.t["YV4F/n"])]
  });
  let u = null != a.color && 0 !== a.color,
    d = "dot" === o,
    f = "username" === o && u;
  return (0, r.jsxs)(_.A, {
    color: f ? a.color : null,
    roleColors: f ? l : null,
    children: [d && (0, r.jsx)(s.WYI, {
      color: a.colorString,
      colors: l,
      background: false,
      tooltip: false
    }), "@", a.name]
  })
}

function x(e) {
  let {
    id: t
  } = e, n = (0, i.bG)([g.A], () => g.A.getChannel(t)), a = T.intl.string(T.t.zLZPmk).toLowerCase(), s = "text", o = true;
  if (null != n) {
    var l;
    a = (0, u.nc)(n) ? n.name : T.intl.string(T.t["/YzI63"]), s = (0, u.nc)(n) ? null != (l = (0, A.QG)(n)) ? l : "text" : "locked", o = (0, d.Y)(n.type)
  }
  return o ? (0, r.jsx)(_.A, {
    iconType: s,
    children: a
  }) : (0, r.jsx)("span", {
    children: "#" + a
  })
}

function L(e) {
  let {
    id: t,
    itemId: n,
    guildId: i
  } = e, a = (0, f.Q)(t), s = (0, f.f)(t, n, i);
  return (0, r.jsxs)(_.A, {
    iconType: t,
    children: [a, null != s && (0, r.jsx)(h.A, {}), s]
  })
}

function j(e) {
  let {
    text: t,
    id: n
  } = e;
  return (0, r.jsxs)(_.A, {
    children: [t, "(", n, ")"]
  })
}

function M(e) {
  let {
    timestamp: t
  } = e;
  return (0, r.jsx)(p.A, {
    node: t,
    className: "R" === t.format ? C.gS : null
  })
}

function k(e) {
  var t;
  let {
    id: n
  } = e, a = (0, i.bG)([E.A], () => E.A.getDetectableGame(n)), s = null != a ? (0, r.jsx)("img", {
    alt: "",
    className: C.Kk,
    src: v.Ay.getApplicationIconURL({
      id: a.id,
      icon: a.icon,
      size: 32
    })
  }) : null;
  return (0, r.jsxs)(_.A, {
    children: [s, null != (t = null == a ? true : a.name) ? t : T.intl.string(T.t["11pdXZ"])]
  })
}