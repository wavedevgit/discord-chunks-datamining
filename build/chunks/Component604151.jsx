/** Chunk was on web.js **/
/** chunk id: 604151, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => C,
  LP: () => S,
  nK: () => T
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
let O = 5;

function v(e) {
  let {
    listType: t,
    numberOfUsers: n
  } = e, i = "blocked" === t;
  return (0, r.jsxs)("div", {
    className: b.wx,
    children: [(0, r.jsx)("div", {
      className: b.zc,
      children: i ? (0, r.jsx)(l.KTN, {}) : (0, r.jsx)(l.G3N, {})
    }), (0, r.jsxs)("div", {
      className: b.Qq,
      children: [(0, r.jsx)(l.Text, {
        variant: "text-md/semibold",
        color: "interactive-text-active",
        children: y.intl.string(i ? y.t.PFOUKW : y.t["93ZDWE"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/medium",
        color: "text-default",
        children: i ? y.intl.format(y.t["r91W/h"], {
          numberOfBlockedUsers: n
        }) : y.intl.format(y.t.rXUeOl, {
          numberOfIgnoredUsers: n
        })
      })]
    })]
  })
}

function A(e) {
  var t;
  let {
    userId: n,
    last: a
  } = e, _ = (0, o.bG)([f.A], () => f.A.isBlocked(n)), h = (0, o.bG)([p.default], () => p.default.getUser(n)), [m, g] = i.useState(false), E = i.useCallback(() => {
    g(true), _ ? c.A.unblockUser(n).catch(() => {
      g(false)
    }) : c.A.unignoreUser(n, d.A.USER_SETTINGS).catch(() => {
      g(false)
    })
  }, [_, n]);
  return null == h ? null : (0, r.jsxs)("div", {
    className: s()(b.nM, {
      [b.fW]: a
    }),
    children: [(0, r.jsxs)("div", {
      className: b.eF,
      children: [(0, r.jsx)(u.A, {
        user: h,
        size: l._3J.SIZE_40
      }), (0, r.jsxs)("div", {
        className: b.Qq,
        children: [(0, r.jsx)(l.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: null != (t = h.globalName) ? t : h.username
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: null != h.globalName ? h.username : null
        })]
      })]
    }), (0, r.jsx)(l.Button, {
      variant: "secondary",
      text: y.intl.string(_ ? y.t.XyHpKH : y.t["8wXU9B"]),
      onClick: E,
      loading: m
    })]
  })
}

function I(e) {
  let {
    setting: t,
    userIds: n,
    listType: a
  } = e, [s, o] = i.useState(O), c = () => {
    o(e => e + O)
  };
  return (0, r.jsx)(h.h, {
    setting: t,
    children: (0, r.jsxs)("div", {
      className: b.Nr,
      children: [(0, r.jsx)(v, {
        listType: a,
        numberOfUsers: n.length
      }), (0, r.jsx)("div", {
        className: b.jS,
        children: n.slice(0, s).map((e, t) => (0, r.jsx)(A, {
          userId: e,
          last: t === n.length - 1
        }, e))
      }), s < n.length ? (0, r.jsx)("div", {
        className: b.vM,
        children: (0, r.jsx)(l.DUT, {
          onClick: c,
          className: b.Qf,
          children: (0, r.jsx)(l.Text, {
            variant: "text-sm/semibold",
            color: "text-default",
            children: y.intl.format(y.t.jULEDr, {
              numberOfUsers: s + O < n.length ? O : n.length - s
            })
          })
        })
      }) : null]
    })
  })
}

function S() {
  let e = (0, o.yK)([f.A], () => f.A.getBlockedIDs());
  return (0, r.jsx)(I, {
    setting: g.H.BLOCKED_USERS,
    userIds: e,
    listType: "blocked"
  })
}

function T() {
  let e = (0, o.yK)([f.A], () => f.A.getIgnoredIDs());
  return (0, r.jsx)(I, {
    setting: g.H.IGNORED_USERS,
    userIds: e,
    listType: "ignored"
  })
}

function C() {
  return (0, r.jsxs)(h.h, {
    setting: g.H.RESTRICTED_USERS,
    scrollPosition: m.d1.RESTRICTED_ACCOUNTS,
    scrollHighlightDelay: 900,
    children: [(0, r.jsx)(h._, {
      header: y.intl.string(y.t["3wRort"]),
      description: y.intl.format(y.t["0aNQo9"], {
        helpArticle: _.A.getArticleURL(E.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE)
      })
    }), (0, r.jsx)(S, {}), (0, r.jsx)(T, {})]
  })
}