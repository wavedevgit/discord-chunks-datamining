/** Chunk was on web.js **/
/** chunk id: 443487, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F9: () => v,
  Zb: () => b,
  cA: () => E,
  e$: () => y,
  lS: () => T,
  ll: () => I,
  xx: () => S
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
    usesCardRows: o = false
  } = e;
  return (0, r.jsx)("div", {
    className: a()(g.container, g.openOnHover, {
      [g.selected]: n,
      [g.usesCardRows]: o
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
    children: t.map((e, a) => {
      let o = (0, r.jsx)(s.qEK, {
        src: e.getAvatarURL(n, 80),
        size: s.EFr.SIZE_16,
        "aria-label": i ? true : e.username,
        "aria-hidden": i
      });
      return a === t.length - 1 ? (0, r.jsx)("div", {
        className: g.facePileItem,
        children: o
      }, e.id) : (0, r.jsx)(l.ZP, {
        width: 16,
        height: 16,
        className: g.facePileItem,
        mask: l.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
        children: o
      }, e.id)
    })
  })
}

function v(e) {
  var t;
  let {
    guildId: n,
    channelId: i,
    entry: a,
    maxAvatars: l = 3
  } = e, E = a.author_id, b = (0, o.e7)([_.default], () => _.default.getUser(E)), {
    displayParticipants: y,
    participant1: v,
    participant2: I,
    numOtherParticipants: T
  } = (0, h.Z)(a, l), S = (0, o.e7)([d.ZP], () => d.ZP.getMember(n, E)), A = (0, c.j)({
    displayNameStyles: null == b ? true : b.displayNameStyles
  }), C = (0, o.e7)([f.Z], () => {
    var e;
    return (null == S ? true : S.colorRoleId) != null ? null == (e = f.Z.getRole(n, S.colorRoleId)) ? true : e.name : true
  }, [n, S]), N = (0, u.X7)(n, E, null != (t = null == S ? true : S.colorStrings) ? t : null);
  if (null == b) return null;
  let R = null == S ? true : S.colorString,
    P = p.ZP.getName(n, i, b);
  return (0, r.jsxs)("div", {
    className: g.userSection,
    children: [(0, r.jsx)(O, {
      users: y,
      guildId: n,
      "aria-hidden": true
    }), (0, r.jsx)(s.PUh, {
      colorString: null != R ? R : null,
      roleName: C,
      colorStrings: N,
      name: P,
      className: g.userName,
      displayNameStylesFont: A,
      "aria-hidden": true
    }), T > 0 ? (0, r.jsx)("div", {
      className: g.additionalParticipantBadge,
      "aria-hidden": true,
      children: (0, r.jsxs)(s.Text, {
        variant: "text-xxs/medium",
        color: "text-default",
        className: g.additionalParticipantBadgeText,
        children: ["+", T]
      })
    }) : null, (0, r.jsx)(s.nn4, {
      children: m.intl.format(m.t.rH95Gu, {
        user0: p.ZP.getName(n, i, v),
        user1: p.ZP.getName(n, i, I),
        countOthers: T,
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

function I(e) {
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

function T(e) {
  let {
    children: t,
    className: n
  } = e;
  return (0, r.jsx)("div", {
    className: a()(g.cardRow, n),
    children: t
  })
}

function S() {
  return (0, Chunk54381.jsx)("div", {
    className: Chunk451419.divider
  })
}