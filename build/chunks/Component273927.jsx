/** Chunk was on web.js **/
/** chunk id: 273927, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GF: () => T,
  ZP: () => A,
  yo: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk194359 = require("./194359.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk63063 = require("./63063.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk131126 = require("./131126.js");
let O = 5;

function v(e) {
  let {
    listType: t,
    numberOfUsers: n
  } = e, i = "blocked" === t;
  return (0, r.jsxs)("div", {
    className: y.header,
    children: [(0, r.jsx)("div", {
      className: y.iconContainer,
      children: i ? (0, r.jsx)(l.t6m, {}) : (0, r.jsx)(l.kZF, {})
    }), (0, r.jsxs)("div", {
      className: y.text,
      children: [(0, r.jsx)(l.Text, {
        variant: "text-md/semibold",
        color: "interactive-text-active",
        children: b.intl.string(i ? b.t.PFOUKW : b.t["93ZDWE"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/medium",
        color: "text-default",
        children: i ? b.intl.format(b.t["r91W/h"], {
          numberOfBlockedUsers: n
        }) : b.intl.format(b.t.rXUeOl, {
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
    last: a
  } = e, _ = (0, s.e7)([f.Z], () => f.Z.isBlocked(n)), m = (0, s.e7)([p.default], () => p.default.getUser(n)), [h, g] = i.useState(false), E = i.useCallback(() => {
    g(true), _ ? c.Z.unblockUser(n).catch(() => {
      g(false)
    }) : c.Z.unignoreUser(n, d.Z.USER_SETTINGS).catch(() => {
      g(false)
    })
  }, [_, n]);
  return null == m ? null : (0, r.jsxs)("div", {
    className: o()(y.row, {
      [y.lastRow]: a
    }),
    children: [(0, r.jsxs)("div", {
      className: y.userInfo,
      children: [(0, r.jsx)(u.Z, {
        user: m,
        size: l.EFr.SIZE_40
      }), (0, r.jsxs)("div", {
        className: y.text,
        children: [(0, r.jsx)(l.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: null != (t = m.globalName) ? t : m.username
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: null != m.globalName ? m.username : null
        })]
      })]
    }), (0, r.jsx)(l.Button, {
      variant: "secondary",
      text: b.intl.string(_ ? b.t.XyHpKH : b.t["8wXU9B"]),
      onClick: E,
      loading: h
    })]
  })
}

function I(e) {
  let {
    setting: t,
    userIds: n,
    listType: a
  } = e, [o, s] = i.useState(O), c = () => {
    s(e => e + O)
  };
  return (0, r.jsx)(m.U, {
    setting: t,
    children: (0, r.jsxs)("div", {
      className: y.card,
      children: [(0, r.jsx)(v, {
        listType: a,
        numberOfUsers: n.length
      }), (0, r.jsx)("div", {
        className: y.usersList,
        children: n.slice(0, o).map((e, t) => (0, r.jsx)(S, {
          userId: e,
          last: t === n.length - 1
        }, e))
      }), o < n.length ? (0, r.jsx)("div", {
        className: y.loadMoreContainer,
        children: (0, r.jsx)(l.P3F, {
          onClick: c,
          className: y.loadMoreButton,
          children: (0, r.jsx)(l.Text, {
            variant: "text-sm/semibold",
            color: "text-default",
            children: b.intl.format(b.t.jULEDr, {
              numberOfUsers: o + O < n.length ? O : n.length - o
            })
          })
        })
      }) : null]
    })
  })
}

function T() {
  let e = (0, s.Wu)([f.Z], () => f.Z.getBlockedIDs());
  return (0, r.jsx)(I, {
    setting: g.s6.BLOCKED_USERS,
    userIds: e,
    listType: "blocked"
  })
}

function C() {
  let e = (0, s.Wu)([f.Z], () => f.Z.getIgnoredIDs());
  return (0, r.jsx)(I, {
    setting: g.s6.IGNORED_USERS,
    userIds: e,
    listType: "ignored"
  })
}

function A() {
  return (0, r.jsxs)(m.U, {
    setting: g.s6.RESTRICTED_USERS,
    scrollPosition: h.FY.RESTRICTED_ACCOUNTS,
    scrollHighlightDelay: 900,
    children: [(0, r.jsx)(m.H, {
      header: b.intl.string(b.t["3wRort"]),
      description: b.intl.format(b.t["0aNQo9"], {
        helpArticle: _.Z.getArticleURL(E.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE)
      })
    }), (0, r.jsx)(T, {}), (0, r.jsx)(C, {})]
  })
}