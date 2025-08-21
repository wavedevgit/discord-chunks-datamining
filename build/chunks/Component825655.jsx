/** Chunk was on web.js **/
/** chunk id: 825655, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk137920 = require("./137920.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk765504 = require("./765504.js"),
  Chunk865066 = require("./865066.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk685383 = require("./685383.js");

function m(e) {
  let {
    game: t,
    application: n
  } = e;
  return null == t || null == n ? (0, r.jsx)("div", {
    className: h.iconContainer,
    children: (0, r.jsx)(s.aNP, {
      size: "sm",
      color: s.TVs.colors.TEXT_FEEDBACK_WARNING
    })
  }) : (0, r.jsxs)("div", {
    className: h.gameIconContainer,
    children: [(0, r.jsx)(c.Z, {
      game: n,
      pid: t.pid,
      size: c.Z.Sizes.MEDIUM
    }), (0, r.jsx)(s.aNP, {
      className: h.warningCorner,
      size: "refresh_sm",
      color: s.TVs.colors.TEXT_FEEDBACK_WARNING
    })]
  })
}

function g(e, t) {
  return "voice" === e ? p.intl.string(p.t.vxfv7u) : null != t ? p.intl.string(p.t.fAYU2N) : p.intl.string(p.t["9V4X/f"])
}

function E(e) {
  let {
    className: t,
    sourcePage: n
  } = e, {
    enabled: i
  } = d.Z.useConfig({
    location: "settings-upsell"
  }), c = (0, o.e7)([u.Z], () => u.Z.getMode()), {
    runningGame: E,
    runningGameApplication: b
  } = (0, l.Z)();
  if (null == E || E.elevated || (E = true, b = true), !i || !(0, f.nZ)() || "voice" === n && (null == E || c !== _.pM4.PUSH_TO_TALK)) return null;

  function y() {
    (0, f.sU)()
  }
  return (0, r.jsxs)("div", {
    className: a()(h.container, t),
    children: [(0, r.jsx)(m, {
      game: E,
      application: b
    }), (0, r.jsxs)("div", {
      className: h.textContainer,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-primary",
        children: g(n, E)
      }), (0, r.jsx)(s.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: p.intl.string(p.t["5q00+P"])
      })]
    }), (0, r.jsx)(s.zxk, {
      variant: "secondary",
      size: "sm",
      text: p.intl.string(p.t["1iI46O"]),
      onClick: y
    })]
  })
}