/** Chunk was on web.js **/
/** chunk id: 443487, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F9: () => v,
  Zb: () => b,
  cA: () => E,
  e$: () => y,
  lS: () => I,
  ll: () => S,
  xx: () => T
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk7284 = require("./7284.js"),
  Chunk884902 = require("./884902.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk192918 = require("./192918.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk451419 = require("./451419.js");

function E() {
  return (0, Chunk54381.jsx)("div", {
    className: Chunk451419.container,
    "aria-hidden": true
  })
}

function b(e) {
  let {
    children: t,
    selected: n,
    className: i,
    usesCardRows: a = false
  } = e;
  return (0, r.jsx)("div", {
    className: o()(g.container, g.openOnHover, {
      [g.selected]: n,
      [g.usesCardRows]: a
    }, i),
    children: t
  })
}

function y(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: g.infoSection,
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
    className: g.facePile,
    children: t.map((e, o) => {
      let a = (0, r.jsx)(s.qEK, {
        src: e.getAvatarURL(n, 80),
        size: s.EFr.SIZE_16,
        "aria-label": i ? true : e.username,
        "aria-hidden": i
      });
      return o === t.length - 1 ? (0, r.jsx)("div", {
        className: g.facePileItem,
        children: a
      }, e.id) : (0, r.jsx)(l.ZP, {
        width: 16,
        height: 16,
        className: g.facePileItem,
        mask: l.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
        children: a
      }, e.id)
    })
  })
}

function v(e) {
  var t;
  let {
    guildId: n,
    channelId: i,
    entry: o,
    maxAvatars: l = 3
  } = e, E = o.author_id, b = (0, a.e7)([p.default], () => p.default.getUser(E)), {
    displayParticipants: y,
    participant1: v,
    participant2: S,
    numOtherParticipants: I
  } = (0, m.Z)(o, l), T = (0, a.e7)([d.ZP], () => d.ZP.getMember(n, E)), C = (0, c.j)({
    displayNameStyles: null == b ? true : b.displayNameStyles
  }), A = (0, a.e7)([f.Z], () => {
    var e;
    return (null == T ? true : T.colorRoleId) != null ? null == (e = f.Z.getRole(n, T.colorRoleId)) ? true : e.name : true
  }, [n, T]), N = (0, u.X7)(n, E, null != (t = null == T ? true : T.colorStrings) ? t : null);
  if (null == b) return null;
  let P = null == T ? true : T.colorString,
    R = _.ZP.getName(n, i, b);
  return (0, r.jsxs)("div", {
    className: g.userSection,
    children: [(0, r.jsx)(O, {
      users: y,
      guildId: n,
      "aria-hidden": true
    }), (0, r.jsx)(s.PUh, {
      colorString: null != P ? P : null,
      roleName: A,
      colorStrings: N,
      name: R,
      className: g.userName,
      displayNameStylesFont: C,
      "aria-hidden": true
    }), I > 0 ? (0, r.jsx)("div", {
      className: g.additionalParticipantBadge,
      "aria-hidden": true,
      children: (0, r.jsxs)(s.Text, {
        variant: "text-xxs/medium",
        color: "text-default",
        className: g.additionalParticipantBadgeText,
        children: ["+", I]
      })
    }) : null, (0, r.jsx)(s.nn4, {
      children: h.intl.format(h.t.rH95Gu, {
        user0: _.ZP.getName(n, i, v),
        user1: _.ZP.getName(n, i, S),
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

function S(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(s.Heading, {
    color: "text-default",
    variant: "heading-sm/medium",
    className: g.contentTitle,
    lineClamp: 1,
    children: t
  })
}

function I(e) {
  let {
    children: t,
    className: n
  } = e;
  return (0, r.jsx)("div", {
    className: o()(g.cardRow, n),
    children: t
  })
}

function T() {
  return (0, Chunk54381.jsx)("div", {
    className: Chunk451419.divider
  })
}