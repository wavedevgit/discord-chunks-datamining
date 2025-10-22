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
  Chunk63063 = require("./63063.js"),
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
    children: (0, r.jsx)(s.Mgn, {
      size: "sm",
      color: s.TVs.colors.TEXT_FEEDBACK_WARNING
    })
  }) : (0, r.jsxs)("div", {
    className: h.gameIconContainer,
    children: [(0, r.jsx)(c.Z, {
      game: n,
      pid: t.pid,
      size: c.A.MEDIUM
    }), (0, r.jsx)("div", {
      className: h.warningCorner,
      children: (0, r.jsx)(s.Mgn, {
        size: "sm",
        color: s.TVs.colors.TEXT_FEEDBACK_WARNING
      })
    })]
  })
}

function g(e, t) {
  return "voice" === e ? p.intl.string(p.t.vxfv7v) : null != t ? p.intl.string(p.t.fAYU2G) : p.intl.string(p.t["9V4X/c"])
}

function E(e) {
  let {
    className: t,
    sourcePage: n
  } = e, i = (0, o.e7)([u.Z], () => u.Z.getMode()), {
    runningGame: c,
    runningGameApplication: E
  } = (0, l.Z)();
  if (null == c || c.elevated || (c = true, E = true), !(0, f.hi)() || "voice" === n && (null == c || i !== _.pM4.PUSH_TO_TALK)) return null;

  function b() {
    (0, f.sU)(n + (null != c ? "-with-game" : "-no-game"))
  }
  return (0, r.jsxs)("div", {
    className: a()(h.container, t),
    children: [(0, r.jsx)(m, {
      game: c,
      application: E
    }), (0, r.jsxs)("div", {
      className: h.textContainer,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-primary",
        children: g(n, c)
      }), (0, r.jsx)(s.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: p.intl.format(p.t["/y6htt"], {
          helpCenterLink: d.Z.getArticleURL(_.BhN.SYSTEM_SERVICE)
        })
      })]
    }), (0, r.jsx)(s.Button, {
      variant: "secondary",
      size: "sm",
      text: p.intl.string(p.t["1iI46O"]),
      onClick: b
    })]
  })
}