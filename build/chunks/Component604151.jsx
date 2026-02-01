/** Chunk was on 42402 **/
/** chunk id: 604151, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => C,
  LP: () => v,
  nK: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk49229 = require("./49229.js"),
  Chunk730134 = require("./730134.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk975571 = require("./975571.js"),
  Chunk871930 = require("./871930.jsx"),
  Chunk355097 = require("./355097.js"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk193291 = require("./193291.js");

function j(e) {
  let {
    listType: t,
    numberOfUsers: n
  } = e, l = "blocked" === t;
  return (0, r.jsxs)("div", {
    className: O.wx,
    children: [(0, r.jsx)("div", {
      className: O.zc,
      children: l ? (0, r.jsx)(o.KTN, {}) : (0, r.jsx)(o.G3N, {})
    }), (0, r.jsxs)("div", {
      className: O.Qq,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-md/semibold",
        color: "interactive-text-active",
        children: y.intl.string(l ? y.t.PFOUKW : y.t["93ZDWE"])
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-default",
        children: l ? y.intl.format(y.t["r91W/h"], {
          numberOfBlockedUsers: n
        }) : y.intl.format(y.t.rXUeOl, {
          numberOfIgnoredUsers: n
        })
      })]
    })]
  })
}

function x(e) {
  var t;
  let {
    userId: n,
    last: i
  } = e, g = (0, a.bG)([p.A], () => p.A.isBlocked(n)), f = (0, a.bG)([h.default], () => h.default.getUser(n)), [m, b] = l.useState(false), A = l.useCallback(() => {
    b(true), g ? c.A.unblockUser(n).catch(() => {
      b(false)
    }) : c.A.unignoreUser(n, d.A.USER_SETTINGS).catch(() => {
      b(false)
    })
  }, [g, n]);
  return null == f ? null : (0, r.jsxs)("div", {
    className: s()(O.nM, {
      [O.fW]: i
    }),
    children: [(0, r.jsxs)("div", {
      className: O.eF,
      children: [(0, r.jsx)(u.A, {
        user: f,
        size: o._3J.SIZE_40
      }), (0, r.jsxs)("div", {
        className: O.Qq,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: null != (t = f.globalName) ? t : f.username
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: null != f.globalName ? f.username : null
        })]
      })]
    }), (0, r.jsx)(o.Button, {
      variant: "secondary",
      text: y.intl.string(g ? y.t.XyHpKH : y.t["8wXU9B"]),
      onClick: A,
      loading: m
    })]
  })
}

function _(e) {
  let {
    setting: t,
    userIds: n,
    listType: i
  } = e, [s, a] = l.useState(5);
  return (0, r.jsx)(f.h, {
    setting: t,
    children: (0, r.jsxs)("div", {
      className: O.Nr,
      children: [(0, r.jsx)(j, {
        listType: i,
        numberOfUsers: n.length
      }), (0, r.jsx)("div", {
        className: O.jS,
        children: n.slice(0, s).map((e, t) => (0, r.jsx)(x, {
          userId: e,
          last: t === n.length - 1
        }, e))
      }), s < n.length ? (0, r.jsx)("div", {
        className: O.vM,
        children: (0, r.jsx)(o.DUT, {
          onClick: () => {
            a(e => e + 5)
          },
          className: O.Qf,
          children: (0, r.jsx)(o.Text, {
            variant: "text-sm/semibold",
            color: "text-default",
            children: y.intl.format(y.t.jULEDr, {
              numberOfUsers: s + 5 < n.length ? 5 : n.length - s
            })
          })
        })
      }) : null]
    })
  })
}

function v() {
  let e = (0, a.yK)([p.A], () => p.A.getBlockedIDs());
  return (0, r.jsx)(_, {
    setting: b.H.BLOCKED_USERS,
    userIds: e,
    listType: "blocked"
  })
}

function E() {
  let e = (0, a.yK)([p.A], () => p.A.getIgnoredIDs());
  return (0, r.jsx)(_, {
    setting: b.H.IGNORED_USERS,
    userIds: e,
    listType: "ignored"
  })
}

function C() {
  return (0, r.jsxs)(f.h, {
    setting: b.H.RESTRICTED_USERS,
    scrollPosition: m.d1.RESTRICTED_ACCOUNTS,
    scrollHighlightDelay: 900,
    children: [(0, r.jsx)(f._, {
      header: y.intl.string(y.t["3wRort"]),
      description: y.intl.format(y.t["0aNQo9"], {
        helpArticle: g.A.getArticleURL(A.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE)
      })
    }), (0, r.jsx)(v, {}), (0, r.jsx)(E, {})]
  })
}