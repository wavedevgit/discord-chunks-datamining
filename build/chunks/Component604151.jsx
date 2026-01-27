/** Chunk was on 82575 **/
/** chunk id: 604151, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => C,
  LP: () => v,
  nK: () => T
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
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

function S(e) {
  let {
    listType: t,
    numberOfUsers: n
  } = e, s = "blocked" === t;
  return (0, i.jsxs)("div", {
    className: O.wx,
    children: [(0, i.jsx)("div", {
      className: O.zc,
      children: s ? (0, i.jsx)(o.KTN, {}) : (0, i.jsx)(o.G3N, {})
    }), (0, i.jsxs)("div", {
      className: O.Qq,
      children: [(0, i.jsx)(o.Text, {
        variant: "text-md/semibold",
        color: "interactive-text-active",
        children: b.intl.string(s ? b.t.PFOUKW : b.t["93ZDWE"])
      }), (0, i.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-default",
        children: s ? b.intl.format(b.t["r91W/h"], {
          numberOfBlockedUsers: n
        }) : b.intl.format(b.t.rXUeOl, {
          numberOfIgnoredUsers: n
        })
      })]
    })]
  })
}

function E(e) {
  var t;
  let {
    userId: n,
    last: l
  } = e, x = (0, a.bG)([g.A], () => g.A.isBlocked(n)), p = (0, a.bG)([h.default], () => h.default.getUser(n)), [A, m] = s.useState(false), j = s.useCallback(() => {
    m(true), x ? c.A.unblockUser(n).catch(() => {
      m(false)
    }) : c.A.unignoreUser(n, u.A.USER_SETTINGS).catch(() => {
      m(false)
    })
  }, [x, n]);
  return null == p ? null : (0, i.jsxs)("div", {
    className: r()(O.nM, {
      [O.fW]: l
    }),
    children: [(0, i.jsxs)("div", {
      className: O.eF,
      children: [(0, i.jsx)(d.A, {
        user: p,
        size: o._3J.SIZE_40
      }), (0, i.jsxs)("div", {
        className: O.Qq,
        children: [(0, i.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: null != (t = p.globalName) ? t : p.username
        }), (0, i.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: null != p.globalName ? p.username : null
        })]
      })]
    }), (0, i.jsx)(o.Button, {
      variant: "secondary",
      text: b.intl.string(x ? b.t.XyHpKH : b.t["8wXU9B"]),
      onClick: j,
      loading: A
    })]
  })
}

function f(e) {
  let {
    setting: t,
    userIds: n,
    listType: l
  } = e, [r, a] = s.useState(5);
  return (0, i.jsx)(p.h, {
    setting: t,
    children: (0, i.jsxs)("div", {
      className: O.Nr,
      children: [(0, i.jsx)(S, {
        listType: l,
        numberOfUsers: n.length
      }), (0, i.jsx)("div", {
        className: O.jS,
        children: n.slice(0, r).map((e, t) => (0, i.jsx)(E, {
          userId: e,
          last: t === n.length - 1
        }, e))
      }), r < n.length ? (0, i.jsx)("div", {
        className: O.vM,
        children: (0, i.jsx)(o.DUT, {
          onClick: () => {
            a(e => e + 5)
          },
          className: O.Qf,
          children: (0, i.jsx)(o.Text, {
            variant: "text-sm/semibold",
            color: "text-default",
            children: b.intl.format(b.t.jULEDr, {
              numberOfUsers: r + 5 < n.length ? 5 : n.length - r
            })
          })
        })
      }) : null]
    })
  })
}

function v() {
  let e = (0, a.yK)([g.A], () => g.A.getBlockedIDs());
  return (0, i.jsx)(f, {
    setting: m.H.BLOCKED_USERS,
    userIds: e,
    listType: "blocked"
  })
}

function T() {
  let e = (0, a.yK)([g.A], () => g.A.getIgnoredIDs());
  return (0, i.jsx)(f, {
    setting: m.H.IGNORED_USERS,
    userIds: e,
    listType: "ignored"
  })
}

function C() {
  return (0, i.jsxs)(p.h, {
    setting: m.H.RESTRICTED_USERS,
    scrollPosition: A.d1.RESTRICTED_ACCOUNTS,
    scrollHighlightDelay: 900,
    children: [(0, i.jsx)(p._, {
      header: b.intl.string(b.t["3wRort"]),
      description: b.intl.format(b.t["0aNQo9"], {
        helpArticle: x.A.getArticleURL(j.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE)
      })
    }), (0, i.jsx)(v, {}), (0, i.jsx)(T, {})]
  })
}