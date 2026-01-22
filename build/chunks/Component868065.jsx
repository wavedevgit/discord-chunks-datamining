/** Chunk was on web.js **/
/** chunk id: 868065, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Hp: () => A,
  UA: () => y,
  ZB: () => v,
  Zp: () => b,
  dM: () => S,
  eG: () => E,
  ik: () => I
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk73392 = require("./73392.js"),
  Chunk967144 = require("./967144.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk576757 = require("./576757.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk332225 = require("./332225.js");

function E() {
  return (0, r.jsx)("div", {
    className: g.kL,
    "aria-hidden": true
  })
}

function b(e) {
  let {
    children: t,
    selected: n,
    className: i,
    usesCardRows: s = false
  } = e;
  return (0, r.jsx)("div", {
    className: a()(g.kL, g.fi, {
      [g.wH]: n,
      [g._V]: s
    }, i),
    children: t
  })
}

function y(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: g.iY,
    children: t
  })
}

function O(e) {
  let {
    users: t,
    guildId: n,
    "aria-hidden": i
  } = e;
  return (0, r.jsx)("div", {
    className: g.wn,
    children: t.map((e, a) => {
      let s = (0, r.jsx)(o.euF, {
        src: e.getAvatarURL(n, 80),
        size: o._3J.SIZE_16,
        "aria-label": i ? true : e.username,
        "aria-hidden": i
      });
      return a === t.length - 1 ? (0, r.jsx)("div", {
        className: g.tr,
        children: s
      }, e.id) : (0, r.jsx)(l.Ay, {
        width: 16,
        height: 16,
        className: g.tr,
        mask: l.Ay.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
        children: s
      }, e.id)
    })
  })
}

function A(e) {
  var t;
  let {
    guildId: n,
    channelId: i,
    entry: a,
    maxAvatars: l = 3
  } = e, E = a.author_id, b = (0, s.bG)([p.default], () => p.default.getUser(E)), {
    displayParticipants: y,
    participant1: A,
    participant2: v,
    numOtherParticipants: S
  } = (0, h.A)(a, l), I = (0, s.bG)([d.Ay], () => d.Ay.getMember(n, E)), T = (0, c.a)({
    displayNameStyles: null == b ? true : b.displayNameStyles
  }), C = (0, s.bG)([f.A], () => {
    var e;
    return (null == I ? true : I.colorRoleId) != null ? null == (e = f.A.getRole(n, I.colorRoleId)) ? true : e.name : true
  }, [n, I]), N = (0, u.gn)(n, E, null != (t = null == I ? true : I.colorStrings) ? t : null);
  if (null == b) return null;
  let R = null == I ? true : I.colorString,
    w = _.Ay.getName(n, i, b);
  return (0, r.jsxs)("div", {
    className: g.dw,
    children: [(0, r.jsx)(O, {
      users: y,
      guildId: n,
      "aria-hidden": true
    }), (0, r.jsx)(o.gyj, {
      colorString: null != R ? R : null,
      roleName: C,
      colorStrings: N,
      name: w,
      className: g.nT,
      displayNameStylesFont: T,
      "aria-hidden": true
    }), S > 0 ? (0, r.jsx)("div", {
      className: g.kx,
      "aria-hidden": true,
      children: (0, r.jsxs)(o.Text, {
        variant: "text-xxs/medium",
        color: "text-default",
        className: g.b4,
        children: ["+", S]
      })
    }) : null, (0, r.jsx)(o.AC4, {
      children: m.intl.format(m.t.rH95Gu, {
        user0: _.Ay.getName(n, i, A),
        user1: _.Ay.getName(n, i, v),
        countOthers: S,
        name0Hook: (e, t) => (0, r.jsx)("span", {
          children: e
        }, t),
        name1Hook: (e, t) => (0, r.jsx)("span", {
          children: e
        }, t),
        countOthersHook: (e, t) => (0, r.jsx)("span", {
          children: e
        }, t)
      })
    })]
  })
}

function v(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(o.Heading, {
    color: "text-default",
    variant: "heading-sm/medium",
    className: g.eu,
    lineClamp: 1,
    children: t
  })
}

function S(e) {
  let {
    children: t,
    className: n,
    ref: i
  } = e;
  return (0, r.jsx)("div", {
    className: a()(g.RA, n),
    ref: i,
    children: t
  })
}

function I() {
  return (0, r.jsx)("div", {
    className: g.yF
  })
}