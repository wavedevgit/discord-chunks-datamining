/** Chunk was on web.js **/
/** chunk id: 825655, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b,
  o: () => E
});
var Chunk54381 = require("./54381.js"),
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

function h(e) {
  let {
    game: t,
    application: n
  } = e;
  return null == t || null == n ? (0, r.jsx)("div", {
    className: m.iconContainer,
    children: (0, r.jsx)(s.Mgn, {
      size: "sm",
      color: s.TVs.colors.TEXT_FEEDBACK_WARNING
    })
  }) : (0, r.jsxs)("div", {
    className: m.gameIconContainer,
    children: [(0, r.jsx)(c.Z, {
      game: n,
      pid: t.pid,
      size: c.A.MEDIUM
    }), (0, r.jsx)("div", {
      className: m.warningCorner,
      children: (0, r.jsx)(s.Mgn, {
        size: "sm",
        color: s.TVs.colors.TEXT_FEEDBACK_WARNING
      })
    })]
  })
}

function g(e, t) {
  return "voice" === e ? _.intl.string(_.t.vxfv7v) : null != t ? _.intl.string(_.t.fAYU2G) : _.intl.string(_.t["9V4X/c"])
}

function E(e) {
  let t = (0, o.e7)([u.Z], () => u.Z.getMode()),
    {
      runningGame: n,
      runningGameApplication: r
    } = (0, l.Z)();
  null == n || n.elevated || (n = true, r = true);
  let i = (0, f.hi)(),
    a = i && null != n && t === p.pM4.PUSH_TO_TALK;
  return {
    canPrompt: "voice" === e ? a : i,
    runningGame: n,
    runningGameApplication: r
  }
}

function b(e) {
  let {
    className: t,
    sourcePage: n
  } = e, {
    canPrompt: i,
    runningGame: o,
    runningGameApplication: l
  } = E(n);
  if (!i) return null;

  function c() {
    (0, f.sU)(n + (null != o ? "-with-game" : "-no-game"))
  }
  return (0, r.jsxs)("div", {
    className: a()(m.container, t),
    children: [(0, r.jsx)(h, {
      game: o,
      application: l
    }), (0, r.jsxs)("div", {
      className: m.textContainer,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-primary",
        children: g(n, o)
      }), (0, r.jsx)(s.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: _.intl.format(_.t["/y6htt"], {
          helpCenterLink: d.Z.getArticleURL(p.BhN.SYSTEM_SERVICE)
        })
      })]
    }), (0, r.jsx)(s.Button, {
      variant: "secondary",
      size: "sm",
      text: _.intl.string(_.t["1iI46O"]),
      onClick: c
    })]
  })
}