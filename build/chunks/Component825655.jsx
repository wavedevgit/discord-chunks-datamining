/** Chunk was on web.js **/
/** chunk id: 825655, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk137920 = require("./137920.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk865066 = require("./865066.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk685383 = require("./685383.js");

function h(e) {
  let {
    game: t,
    application: n
  } = e;
  return null == t || null == n ? (0, r.jsx)("div", {
    className: p.iconContainer,
    children: (0, r.jsx)(s.aNP, {
      size: "sm",
      color: s.TVs.colors.TEXT_FEEDBACK_WARNING
    })
  }) : (0, r.jsxs)("div", {
    className: p.gameIconContainer,
    children: [(0, r.jsx)(c.Z, {
      game: n,
      pid: t.pid,
      size: c.Z.Sizes.MEDIUM
    }), (0, r.jsx)(s.aNP, {
      className: p.warningCorner,
      size: "refresh_sm",
      color: s.TVs.colors.TEXT_FEEDBACK_WARNING
    })]
  })
}

function m(e, t) {
  return "voice" === e ? _.intl.string(_.t.vxfv7u) : null != t ? _.intl.string(_.t.fAYU2N) : _.intl.string(_.t["9V4X/f"])
}

function g(e) {
  let {
    className: t,
    sourcePage: n
  } = e, i = (0, o.e7)([u.Z], () => u.Z.getMode()), {
    runningGame: c,
    runningGameApplication: g
  } = (0, l.Z)();
  if (null == c || c.elevated || (c = true, g = true), !(0, d.hi)() || "voice" === n && (null == c || i !== f.pM4.PUSH_TO_TALK)) return null;

  function E() {
    (0, d.sU)()
  }
  return (0, r.jsxs)("div", {
    className: a()(p.container, t),
    children: [(0, r.jsx)(h, {
      game: c,
      application: g
    }), (0, r.jsxs)("div", {
      className: p.textContainer,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-primary",
        children: m(n, c)
      }), (0, r.jsx)(s.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: _.intl.string(_.t["5q00+P"])
      })]
    }), (0, r.jsx)(s.zxk, {
      variant: "secondary",
      size: "sm",
      text: _.intl.string(_.t["1iI46O"]),
      onClick: E
    })]
  })
}