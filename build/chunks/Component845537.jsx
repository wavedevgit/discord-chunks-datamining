/** Chunk was on web.js **/
/** chunk id: 845537, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EK: () => M,
  Io: () => x,
  N1: () => k,
  NY: () => L,
  Ox: () => R,
  Vq: () => D,
  Wf: () => j,
  cB: () => w,
  dy: () => N,
  wP: () => P
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk99690 = require("./99690.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk754688 = require("./754688.js"),
  Chunk699450 = require("./699450.js"),
  Chunk303694 = require("./303694.js"),
  Chunk285063 = require("./285063.jsx"),
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
  Chunk399289 = require("./399289.js");

function N(e) {
  let {
    emoji: t
  } = e;
  return (0, r.jsx)(o.u, {
    text: t.name,
    delay: 750,
    position: "top",
    children: (0, r.jsx)(s.Z, {
      src: t.src,
      emojiName: t.name,
      animated: false,
      surrogate: t.surrogate
    })
  })
}

function P(e) {
  let {
    emoji: t
  } = e;
  return (0, r.jsx)(o.u, {
    text: t.name,
    delay: 750,
    position: "top",
    children: (0, r.jsx)(s.Z, {
      emojiId: t.emojiId,
      emojiName: t.name,
      animated: t.animated
    })
  })
}

function R(e) {
  let {
    text: t
  } = e;
  return (0, r.jsx)(_.Z, {
    children: t
  })
}

function w(e) {
  let {
    id: t,
    guildId: n,
    channelId: s
  } = e, c = (0, i.e7)([O.default], () => O.default.getUser(t)), u = (0, i.e7)([y.Z], () => y.Z.hidePersonalInformation), d = I.ZP.useName(n, s, c), f = (0, r.jsx)(_.Z, {
    children: null == d ? "<@".concat(t, ">") : "@".concat(d)
  });
  if (null != c) {
    let e = u || c.hasUniqueUsername() ? null : "#".concat(c.discriminator);
    return (0, r.jsx)(o.u, {
      __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
        className: A.userTooltip,
        children: [(0, r.jsx)(l.Z, {
          user: c,
          animate: true,
          size: a.EFr.SIZE_16,
          className: A.avatar
        }), T.ZP.getUserTag(c, {
          mode: "username",
          identifiable: u ? "never" : "always"
        }), (0, r.jsx)("span", {
          className: A.discriminator,
          children: e
        })]
      }),
      delay: 750,
      position: "top",
      "aria-label": T.ZP.getUserTag(c, {
        decoration: "never"
      }),
      asContainer: true,
      children: (0, r.jsx)(a.P3F, {
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
  } = e, o = (0, i.e7)([b.Z], () => null != n ? b.Z.getRole(n, t) : true), s = (0, i.e7)([c.Z], () => c.Z.roleStyle), l = (0, h._f)(n, o, null == o ? true : o.colorStrings);
  if (null == o) return (0, r.jsxs)("span", {
    children: ["@", C.intl.string(C.t["YV4F/n"])]
  });
  let u = null != o.color && 0 !== o.color,
    d = "dot" === s,
    f = "username" === s && u;
  return (0, r.jsxs)(_.Z, {
    color: f ? o.color : null,
    roleColors: f ? l : null,
    children: [d && (0, r.jsx)(a.FhE, {
      color: o.colorString,
      colors: l,
      background: false,
      tooltip: false
    }), "@", o.name]
  })
}

function x(e) {
  let {
    id: t
  } = e, n = (0, i.e7)([g.Z], () => g.Z.getChannel(t)), o = C.intl.string(C.t.zLZPmk).toLowerCase(), a = "text", s = true;
  if (null != n) {
    var l;
    o = (0, u.YO)(n) ? n.name : C.intl.string(C.t["/YzI63"]), a = (0, u.YO)(n) ? null != (l = (0, S.wl)(n)) ? l : "text" : "locked", s = (0, d.B)(n.type)
  }
  return s ? (0, r.jsx)(_.Z, {
    iconType: a,
    children: o
  }) : (0, r.jsx)("span", {
    children: "#" + o
  })
}

function L(e) {
  let {
    id: t,
    itemId: n,
    guildId: i
  } = e, o = (0, f.l)(t), a = (0, f.W)(t, n, i);
  return (0, r.jsxs)(_.Z, {
    iconType: t,
    children: [o, null != a && (0, r.jsx)(m.Z, {}), a]
  })
}

function j(e) {
  let {
    text: t,
    id: n
  } = e;
  return (0, r.jsxs)(_.Z, {
    children: [t, "(", n, ")"]
  })
}

function M(e) {
  let {
    timestamp: t
  } = e;
  return (0, r.jsx)(p.Z, {
    node: t,
    className: "R" === t.format ? A.tabular : null
  })
}

function k(e) {
  var t;
  let {
    id: n
  } = e, o = (0, i.e7)([E.Z], () => E.Z.getDetectableGame(n)), a = null != o ? (0, r.jsx)("img", {
    alt: "",
    className: A.icon,
    src: v.ZP.getApplicationIconURL({
      id: o.id,
      icon: o.icon,
      size: 32
    })
  }) : null;
  return (0, r.jsxs)(_.Z, {
    children: [a, null != (t = null == o ? true : o.name) ? t : C.intl.string(C.t["11pdXZ"])]
  })
}