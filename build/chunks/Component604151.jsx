/** Chunk was on 32502 **/
/** chunk id: 604151, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => y,
  LP: () => C,
  nK: () => v
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

function E(e) {
  let {
    listType: t,
    numberOfUsers: n
  } = e, l = "blocked" === t;
  return (0, i.jsxs)("div", {
    className: O.wx,
    children: [(0, i.jsx)("div", {
      className: O.zc,
      children: l ? (0, i.jsx)(o.KTN, {}) : (0, i.jsx)(o.G3N, {})
    }), (0, i.jsxs)("div", {
      className: O.Qq,
      children: [(0, i.jsx)(o.Text, {
        variant: "text-md/semibold",
        color: "interactive-text-active",
        children: j.intl.string(l ? j.t.PFOUKW : j.t["93ZDWE"])
      }), (0, i.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-default",
        children: l ? j.intl.format(j.t["r91W/h"], {
          numberOfBlockedUsers: n
        }) : j.intl.format(j.t.rXUeOl, {
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
    last: s
  } = e, x = (0, a.bG)([h.A], () => h.A.isBlocked(n)), p = (0, a.bG)([g.default], () => g.default.getUser(n)), [m, A] = l.useState(false), b = l.useCallback(() => {
    A(true), x ? c.A.unblockUser(n).catch(() => {
      A(false)
    }) : c.A.unignoreUser(n, u.A.USER_SETTINGS).catch(() => {
      A(false)
    })
  }, [x, n]);
  return null == p ? null : (0, i.jsxs)("div", {
    className: r()(O.nM, {
      [O.fW]: s
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
      text: j.intl.string(x ? j.t.XyHpKH : j.t["8wXU9B"]),
      onClick: b,
      loading: m
    })]
  })
}

function f(e) {
  let {
    setting: t,
    userIds: n,
    listType: s
  } = e, [r, a] = l.useState(5);
  return (0, i.jsx)(p.h, {
    setting: t,
    children: (0, i.jsxs)("div", {
      className: O.Nr,
      children: [(0, i.jsx)(E, {
        listType: s,
        numberOfUsers: n.length
      }), (0, i.jsx)("div", {
        className: O.jS,
        children: n.slice(0, r).map((e, t) => (0, i.jsx)(S, {
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
            children: j.intl.format(j.t.jULEDr, {
              numberOfUsers: r + 5 < n.length ? 5 : n.length - r
            })
          })
        })
      }) : null]
    })
  })
}

function C() {
  let e = (0, a.yK)([h.A], () => h.A.getBlockedIDs());
  return (0, i.jsx)(f, {
    setting: A.H.BLOCKED_USERS,
    userIds: e,
    listType: "blocked"
  })
}

function v() {
  let e = (0, a.yK)([h.A], () => h.A.getIgnoredIDs());
  return (0, i.jsx)(f, {
    setting: A.H.IGNORED_USERS,
    userIds: e,
    listType: "ignored"
  })
}

function y() {
  return (0, i.jsxs)(p.h, {
    setting: A.H.RESTRICTED_USERS,
    scrollPosition: m.d1.RESTRICTED_ACCOUNTS,
    scrollHighlightDelay: 900,
    children: [(0, i.jsx)(p._, {
      header: j.intl.string(j.t["3wRort"]),
      description: j.intl.format(j.t["0aNQo9"], {
        helpArticle: x.A.getArticleURL(b.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE)
      })
    }), (0, i.jsx)(C, {}), (0, i.jsx)(v, {})]
  })
}