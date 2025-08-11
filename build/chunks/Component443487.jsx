/** Chunk was on web.js **/
/** chunk id: 443487, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F9: () => O,
  Zb: () => E,
  cA: () => g,
  e$: () => b,
  ll: () => v
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk884902 = require("./884902.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk192918 = require("./192918.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk522314 = require("./522314.js");

function g() {
  return (0, Chunk255367.jsx)("div", {
    className: Chunk522314.container,
    "aria-hidden": true
  })
}

function E(e) {
  let {
    children: t,
    selected: n
  } = e;
  return (0, r.jsx)("div", {
    className: o()(m.container, m.openOnHover, {
      [m.selected]: n
    }),
    children: t
  })
}

function b(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: m.infoSection,
    children: t
  })
}

function y(e) {
  let {
    users: t,
    guildId: n,
    "aria-hidden": i
  } = e;
  return (0, r.jsx)("div", {
    className: m.facePile,
    children: t.map((e, o) => {
      let a = (0, r.jsx)(s.qEK, {
        src: e.getAvatarURL(n, 80),
        size: s.EFr.SIZE_16,
        "aria-label": i ? true : e.username,
        "aria-hidden": i
      });
      return o === t.length - 1 ? (0, r.jsx)("div", {
        className: m.facePileItem,
        children: a
      }, e.id) : (0, r.jsx)(l.ZP, {
        width: 16,
        height: 16,
        className: m.facePileItem,
        mask: l.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
        children: a
      }, e.id)
    })
  })
}

function O(e) {
  var t;
  let {
    guildId: n,
    channelId: i,
    entry: o,
    maxAvatars: l = 3
  } = e, g = o.author_id, E = (0, a.e7)([f.default], () => f.default.getUser(g)), {
    displayParticipants: b,
    participant1: O,
    participant2: v,
    numOtherParticipants: I
  } = (0, p.Z)(o, l), T = (0, a.e7)([u.ZP], () => u.ZP.getMember(n, g)), S = (0, a.e7)([d.Z], () => {
    var e;
    return (null == T ? true : T.colorRoleId) != null ? null == (e = d.Z.getRole(n, T.colorRoleId)) ? true : e.name : true
  }, [n, T]), A = (0, c.X7)(n, g, null != (t = null == T ? true : T.colorStrings) ? t : null);
  if (null == E) return null;
  let N = null == T ? true : T.colorString,
    C = _.ZP.getName(n, i, E);
  return (0, r.jsxs)("div", {
    className: m.userSection,
    children: [(0, r.jsx)(y, {
      users: b,
      guildId: n,
      "aria-hidden": true
    }), (0, r.jsx)(s.PUh, {
      colorString: null != N ? N : null,
      roleName: S,
      colorStrings: A,
      name: C,
      className: m.userName,
      "aria-hidden": true
    }), I > 0 ? (0, r.jsx)("div", {
      className: m.additionalParticipantBadge,
      "aria-hidden": true,
      children: (0, r.jsxs)(s.Text, {
        variant: "text-xxs/medium",
        color: "text-default",
        className: m.additionalParticipantBadgeText,
        children: ["+", I]
      })
    }) : null, (0, r.jsx)(s.nn4, {
      children: h.intl.format(h.t.rH95Gh, {
        user0: _.ZP.getName(n, i, O),
        user1: _.ZP.getName(n, i, v),
        countOthers: I,
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
  return (0, r.jsx)(s.X6q, {
    color: "text-default",
    variant: "heading-sm/medium",
    className: m.contentTitle,
    lineClamp: 1,
    children: t
  })
}