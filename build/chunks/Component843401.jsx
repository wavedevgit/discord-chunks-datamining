/** Chunk was on 60449 **/
/** chunk id: 843401, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j,
  I: () => m
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

function p(e) {
  let {
    game: t,
    application: n
  } = e;
  return null == t || null == n ? (0, i.jsx)("div", {
    className: A.zc,
    children: (0, i.jsx)(a.EpV, {
      size: "sm",
      color: a.LU0.colors.TEXT_FEEDBACK_WARNING
    })
  }) : (0, i.jsxs)("div", {
    className: A.nt,
    children: [(0, i.jsx)(c.A, {
      game: n,
      pid: t.pid,
      size: c.M.MEDIUM
    }), (0, i.jsx)("div", {
      className: A.Am,
      children: (0, i.jsx)(a.EpV, {
        size: "sm",
        color: a.LU0.colors.TEXT_FEEDBACK_WARNING
      })
    })]
  })
}

function m(e) {
  let t = (0, r.bG)([d.A], () => d.A.getMode()),
    {
      runningGame: n,
      runningGameApplication: i
    } = (0, o.A)();
  null == n || n.elevated || (n = true, i = true);
  let s = (0, g.NP)(),
    l = s && null != n && t === h.TBI.PUSH_TO_TALK;
  return {
    canPrompt: "voice" === e ? l : s,
    runningGame: n,
    runningGameApplication: i
  }
}

function j(e) {
  let {
    className: t,
    sourcePage: n
  } = e, {
    canPrompt: s,
    runningGame: r,
    runningGameApplication: o
  } = m(n);
  return s ? (0, i.jsxs)("div", {
    className: l()(A.kL, t),
    children: [(0, i.jsx)(p, {
      game: r,
      application: o
    }), (0, i.jsxs)("div", {
      className: A.FS,
      children: [(0, i.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-strong",
        children: "voice" === n ? x.intl.string(x.t.vxfv7v) : null != r ? x.intl.string(x.t.fAYU2G) : x.intl.string(x.t["9V4X/c"])
      }), (0, i.jsx)(a.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: x.intl.format(x.t["/y6htt"], {
          helpCenterLink: u.A.getArticleURL(h.MVz.SYSTEM_SERVICE)
        })
      })]
    }), (0, i.jsx)(a.Button, {
      variant: "secondary",
      size: "sm",
      text: x.intl.string(x.t["1iI46O"]),
      onClick: function() {
        (0, g.sL)(n + (null != r ? "-with-game" : "-no-game"))
      }
    })]
  }) : null
}