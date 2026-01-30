/** Chunk was on 78376 **/
/** chunk id: 843401, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b,
  I: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
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

function A(e) {
  let {
    game: t,
    application: n
  } = e;
  return null == t || null == n ? (0, r.jsx)("div", {
    className: g.zc,
    children: (0, r.jsx)(a.EpV, {
      size: "sm",
      color: a.LU0.colors.TEXT_FEEDBACK_WARNING
    })
  }) : (0, r.jsxs)("div", {
    className: g.nt,
    children: [(0, r.jsx)(c.A, {
      game: n,
      pid: t.pid,
      size: c.M.MEDIUM
    }), (0, r.jsx)("div", {
      className: g.Am,
      children: (0, r.jsx)(a.EpV, {
        size: "sm",
        color: a.LU0.colors.TEXT_FEEDBACK_WARNING
      })
    })]
  })
}

function f(e) {
  let t = (0, s.bG)([d.A], () => d.A.getMode()),
    {
      runningGame: n,
      runningGameApplication: r
    } = (0, o.A)();
  null == n || n.elevated || (n = true, r = true);
  let i = (0, _.NP)(),
    l = i && null != n && t === p.TBI.PUSH_TO_TALK;
  return {
    canPrompt: "voice" === e ? l : i,
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
    runningGame: s,
    runningGameApplication: o
  } = f(n);
  return i ? (0, r.jsxs)("div", {
    className: l()(g.kL, t),
    children: [(0, r.jsx)(A, {
      game: s,
      application: o
    }), (0, r.jsxs)("div", {
      className: g.FS,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-strong",
        children: "voice" === n ? m.intl.string(m.t.vxfv7v) : null != s ? m.intl.string(m.t.fAYU2G) : m.intl.string(m.t["9V4X/c"])
      }), (0, r.jsx)(a.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: m.intl.format(m.t["/y6htt"], {
          helpCenterLink: u.A.getArticleURL(p.MVz.SYSTEM_SERVICE)
        })
      })]
    }), (0, r.jsx)(a.Button, {
      variant: "secondary",
      size: "sm",
      text: m.intl.string(m.t["1iI46O"]),
      onClick: function() {
        (0, _.sL)(n + (null != s ? "-with-game" : "-no-game"))
      }
    })]
  }) : null
}