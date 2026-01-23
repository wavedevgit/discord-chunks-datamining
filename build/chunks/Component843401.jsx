/** Chunk was on web.js **/
/** chunk id: 843401, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y,
  I: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk286237 = require("./286237.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk430452 = require("./430452.js"),
  Chunk975571 = require("./975571.js"),
  Chunk942405 = require("./942405.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk726097 = require("./726097.js");

function m(e) {
  let {
    game: t,
    application: n
  } = e;
  return null == t || null == n ? (0, r.jsx)("div", {
    className: h.zc,
    children: (0, r.jsx)(o.EpV, {
      size: "sm",
      color: o.LU0.colors.TEXT_FEEDBACK_WARNING
    })
  }) : (0, r.jsxs)("div", {
    className: h.nt,
    children: [(0, r.jsx)(c.A, {
      game: n,
      pid: t.pid,
      size: c.M.MEDIUM
    }), (0, r.jsx)("div", {
      className: h.Am,
      children: (0, r.jsx)(o.EpV, {
        size: "sm",
        color: o.LU0.colors.TEXT_FEEDBACK_WARNING
      })
    })]
  })
}

function g(e, t) {
  return "voice" === e ? _.intl.string(_.t.vxfv7v) : null != t ? _.intl.string(_.t.fAYU2G) : _.intl.string(_.t["9V4X/c"])
}

function E(e) {
  let t = (0, s.bG)([u.A], () => u.A.getMode()),
    {
      runningGame: n,
      runningGameApplication: r
    } = (0, l.A)();
  null == n || n.elevated || (n = true, r = true);
  let i = (0, f.NP)(),
    a = i && null != n && t === p.TBI.PUSH_TO_TALK;
  return {
    canPrompt: "voice" === e ? a : i,
    runningGame: n,
    runningGameApplication: r
  }
}

function y(e) {
  let {
    className: t,
    sourcePage: n
  } = e, {
    canPrompt: i,
    runningGame: s,
    runningGameApplication: l
  } = E(n);
  if (!i) return null;

  function c() {
    (0, f.sL)(n + (null != s ? "-with-game" : "-no-game"))
  }
  return (0, r.jsxs)("div", {
    className: a()(h.kL, t),
    children: [(0, r.jsx)(m, {
      game: s,
      application: l
    }), (0, r.jsxs)("div", {
      className: h.FS,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-strong",
        children: g(n, s)
      }), (0, r.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: _.intl.format(_.t["/y6htt"], {
          helpCenterLink: d.A.getArticleURL(p.MVz.SYSTEM_SERVICE)
        })
      })]
    }), (0, r.jsx)(o.Button, {
      variant: "secondary",
      size: "sm",
      text: _.intl.string(_.t["1iI46O"]),
      onClick: c
    })]
  })
}