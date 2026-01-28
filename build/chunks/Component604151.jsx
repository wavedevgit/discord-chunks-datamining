/** Chunk was on 60449 **/
/** chunk id: 604151, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => T,
  LP: () => C,
  nK: () => f
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

function b(e) {
  let {
    listType: t,
    numberOfUsers: n
  } = e, s = "blocked" === t;
  return (0, i.jsxs)("div", {
    className: E.wx,
    children: [(0, i.jsx)("div", {
      className: E.zc,
      children: s ? (0, i.jsx)(o.KTN, {}) : (0, i.jsx)(o.G3N, {})
    }), (0, i.jsxs)("div", {
      className: E.Qq,
      children: [(0, i.jsx)(o.Text, {
        variant: "text-md/semibold",
        color: "interactive-text-active",
        children: O.intl.string(s ? O.t.PFOUKW : O.t["93ZDWE"])
      }), (0, i.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-default",
        children: s ? O.intl.format(O.t["r91W/h"], {
          numberOfBlockedUsers: n
        }) : O.intl.format(O.t.rXUeOl, {
          numberOfIgnoredUsers: n
        })
      })]
    })]
  })
}

function S(e) {
  var t;
  let {
    userId: n,
    last: l
  } = e, x = (0, a.bG)([g.A], () => g.A.isBlocked(n)), A = (0, a.bG)([h.default], () => h.default.getUser(n)), [p, m] = s.useState(false), j = s.useCallback(() => {
    m(true), x ? c.A.unblockUser(n).catch(() => {
      m(false)
    }) : c.A.unignoreUser(n, u.A.USER_SETTINGS).catch(() => {
      m(false)
    })
  }, [x, n]);
  return null == A ? null : (0, i.jsxs)("div", {
    className: r()(E.nM, {
      [E.fW]: l
    }),
    children: [(0, i.jsxs)("div", {
      className: E.eF,
      children: [(0, i.jsx)(d.A, {
        user: A,
        size: o._3J.SIZE_40
      }), (0, i.jsxs)("div", {
        className: E.Qq,
        children: [(0, i.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: null != (t = A.globalName) ? t : A.username
        }), (0, i.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: null != A.globalName ? A.username : null
        })]
      })]
    }), (0, i.jsx)(o.Button, {
      variant: "secondary",
      text: O.intl.string(x ? O.t.XyHpKH : O.t["8wXU9B"]),
      onClick: j,
      loading: p
    })]
  })
}

function v(e) {
  let {
    setting: t,
    userIds: n,
    listType: l
  } = e, [r, a] = s.useState(5);
  return (0, i.jsx)(A.h, {
    setting: t,
    children: (0, i.jsxs)("div", {
      className: E.Nr,
      children: [(0, i.jsx)(b, {
        listType: l,
        numberOfUsers: n.length
      }), (0, i.jsx)("div", {
        className: E.jS,
        children: n.slice(0, r).map((e, t) => (0, i.jsx)(S, {
          userId: e,
          last: t === n.length - 1
        }, e))
      }), r < n.length ? (0, i.jsx)("div", {
        className: E.vM,
        children: (0, i.jsx)(o.DUT, {
          onClick: () => {
            a(e => e + 5)
          },
          className: E.Qf,
          children: (0, i.jsx)(o.Text, {
            variant: "text-sm/semibold",
            color: "text-default",
            children: O.intl.format(O.t.jULEDr, {
              numberOfUsers: r + 5 < n.length ? 5 : n.length - r
            })
          })
        })
      }) : null]
    })
  })
}

function C() {
  let e = (0, a.yK)([g.A], () => g.A.getBlockedIDs());
  return (0, i.jsx)(v, {
    setting: m.H.BLOCKED_USERS,
    userIds: e,
    listType: "blocked"
  })
}

function f() {
  let e = (0, a.yK)([g.A], () => g.A.getIgnoredIDs());
  return (0, i.jsx)(v, {
    setting: m.H.IGNORED_USERS,
    userIds: e,
    listType: "ignored"
  })
}

function T() {
  return (0, i.jsxs)(A.h, {
    setting: m.H.RESTRICTED_USERS,
    scrollPosition: p.d1.RESTRICTED_ACCOUNTS,
    scrollHighlightDelay: 900,
    children: [(0, i.jsx)(A._, {
      header: O.intl.string(O.t["3wRort"]),
      description: O.intl.format(O.t["0aNQo9"], {
        helpArticle: x.A.getArticleURL(j.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE)
      })
    }), (0, i.jsx)(C, {}), (0, i.jsx)(f, {})]
  })
}