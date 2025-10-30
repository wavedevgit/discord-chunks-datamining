/** Chunk was on web.js **/
/** chunk id: 845537, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EK: () => G,
  Io: () => k,
  N1: () => B,
  NY: () => j,
  Ox: () => x,
  Vq: () => M,
  Wf: () => U,
  cB: () => L,
  dy: () => w,
  wP: () => D
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk99690 = require("./99690.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk754688 = require("./754688.js"),
  Chunk699450 = require("./699450.js"),
  Chunk303694 = require("./303694.js"),
  Chunk916752 = require("./916752.js"),
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

function w(e) {
  let {
    emoji: t
  } = e;
  return (0, r.jsx)(s.u, {
    text: t.name,
    delay: 750,
    position: "top",
    children: (0, r.jsx)(c.Z, {
      src: t.src,
      emojiName: t.name,
      animated: false,
      surrogate: t.surrogate
    })
  })
}

function D(e) {
  let {
    emoji: t
  } = e;
  return (0, r.jsx)(s.u, {
    text: t.name,
    delay: 750,
    position: "top",
    children: (0, r.jsx)(c.Z, {
      emojiId: t.emojiId,
      emojiName: t.name,
      animated: t.animated
    })
  })
}

function x(e) {
  let {
    text: t
  } = e;
  return (0, r.jsx)(m.Z, {
    children: t
  })
}

function L(e) {
  let {
    id: t,
    guildId: n,
    channelId: i
  } = e, a = (0, o.e7)([I.default], () => I.default.getUser(t)), c = (0, o.e7)([v.Z], () => v.Z.hidePersonalInformation), d = A.ZP.useName(n, i, a), f = (0, r.jsx)(m.Z, {
    children: null == d ? "<@".concat(t, ">") : "@".concat(d)
  });
  if (null != a) {
    let e = c || a.hasUniqueUsername() ? null : "#".concat(a.discriminator);
    return (0, r.jsx)(s.u, {
      __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
        className: R.userTooltip,
        children: [(0, r.jsx)(u.Z, {
          user: a,
          animate: true,
          size: l.EFr.SIZE_16,
          className: R.avatar
        }), C.ZP.getUserTag(a, {
          mode: "username",
          identifiable: c ? "never" : "always"
        }), (0, r.jsx)("span", {
          className: R.discriminator,
          children: e
        })]
      }),
      delay: 750,
      position: "top",
      "aria-label": C.ZP.getUserTag(a, {
        decoration: "never"
      }),
      asContainer: true,
      children: (0, r.jsx)(l.P3F, {
        tag: "span",
        children: f
      })
    })
  }
  return f
}

function M(e) {
  let {
    id: t,
    guildId: n
  } = e, i = (0, o.e7)([O.Z], () => null != n ? O.Z.getRole(n, t) : true), a = (0, o.e7)([d.Z], () => d.Z.roleStyle), s = (0, E._f)(n, i, null == i ? true : i.colorStrings);
  if (null == i) return (0, r.jsxs)("span", {
    children: ["@", N.intl.string(N.t["YV4F/n"])]
  });
  let c = null != i.color && 0 !== i.color,
    u = "dot" === a,
    f = "username" === a && c;
  return (0, r.jsxs)(m.Z, {
    color: f ? i.color : null,
    roleColors: f ? s : null,
    children: [u && (0, r.jsx)(l.FhE, {
      color: i.colorString,
      colors: s,
      background: false,
      tooltip: false
    }), "@", i.name]
  })
}

function k(e) {
  let {
    id: t
  } = e, n = (0, o.e7)([b.Z], () => b.Z.getChannel(t)), i = N.intl.string(N.t.zLZPmk).toLowerCase(), a = "text", s = true;
  if (null != n) {
    var l;
    i = (0, f.YO)(n) ? n.name : N.intl.string(N.t["/YzI63"]), a = (0, f.YO)(n) ? null != (l = (0, S.wl)(n)) ? l : "text" : "locked", s = (0, _.B)(n.type)
  }
  return s ? (0, r.jsx)(m.Z, {
    iconType: a,
    children: i
  }) : (0, r.jsx)("span", {
    children: "#" + i
  })
}

function j(e) {
  let {
    id: t,
    itemId: n,
    guildId: i
  } = e, a = (0, p.l)(t), o = (0, p.W)(t, n, i);
  return (0, r.jsxs)(m.Z, {
    iconType: t,
    children: [a, null != o && (0, r.jsx)(g.Z, {}), o]
  })
}

function U(e) {
  let {
    text: t,
    id: n
  } = e;
  return (0, r.jsxs)(m.Z, {
    children: [t, "(", n, ")"]
  })
}

function G(e) {
  let {
    timestamp: t
  } = e, n = (0, h.Z)(t);
  return (0, r.jsx)("span", {
    className: a()(P.timestamp, R.tabular),
    children: n
  })
}

function B(e) {
  var t;
  let {
    id: n
  } = e, i = (0, o.e7)([y.Z], () => y.Z.getDetectableGame(n)), a = null != i ? (0, r.jsx)("img", {
    alt: "",
    className: R.icon,
    src: T.ZP.getApplicationIconURL({
      id: i.id,
      icon: i.icon,
      size: 32
    })
  }) : null;
  return (0, r.jsxs)(m.Z, {
    children: [a, null != (t = null == i ? true : i.name) ? t : N.intl.string(N.t["11pdXZ"])]
  })
}