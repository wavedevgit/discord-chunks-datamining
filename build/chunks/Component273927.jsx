/** Chunk was on 66181 **/
/** chunk id: 273927, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  GF: () => v,
  ZP: () => T,
  yo: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk602201 = require("./602201.js");

function E(e) {
  let {
    listType: t,
    numberOfUsers: n
  } = e, r = "blocked" === t;
  return (0, i.jsxs)("div", {
    className: j.header,
    children: [(0, i.jsx)("div", {
      className: j.iconContainer,
      children: r ? (0, i.jsx)(o.t6m, {}) : (0, i.jsx)(o.kZF, {})
    }), (0, i.jsxs)("div", {
      className: j.text,
      children: [(0, i.jsx)(o.Text, {
        variant: "text-md/semibold",
        color: "interactive-active",
        children: _.intl.string(r ? _.t.PFOUKS : _.t["93ZDWF"])
      }), (0, i.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: r ? _.intl.format(_.t["r91W/v"], {
          numberOfBlockedUsers: n
        }) : _.intl.format(_.t.rXUeOj, {
          numberOfIgnoredUsers: n
        })
      })]
    })]
  })
}

function C(e) {
  var t;
  let {
    userId: n,
    last: s
  } = e, g = (0, l.e7)([m.Z], () => m.Z.isBlocked(n)), h = (0, l.e7)([p.default], () => p.default.getUser(n)), [f, b] = r.useState(false), x = r.useCallback(() => {
    b(true), g ? c.Z.unblockUser(n).catch(() => {
      b(false)
    }) : c.Z.unignoreUser(n, u.Z.USER_SETTINGS).catch(() => {
      b(false)
    })
  }, [g, n]);
  return null == h ? null : (0, i.jsxs)("div", {
    className: a()(j.row, {
      [j.lastRow]: s
    }),
    children: [(0, i.jsxs)("div", {
      className: j.userInfo,
      children: [(0, i.jsx)(d.Z, {
        user: h,
        size: o.EFr.SIZE_40
      }), (0, i.jsxs)("div", {
        className: j.text,
        children: [(0, i.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: null != (t = h.globalName) ? t : h.username
        }), (0, i.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: null != h.globalName ? h.username : null
        })]
      })]
    }), (0, i.jsx)(o.zxk, {
      variant: "secondary",
      text: _.intl.string(g ? _.t.XyHpKC : _.t["8wXU9P"]),
      onClick: x,
      loading: f
    })]
  })
}

function O(e) {
  let {
    setting: t,
    userIds: n,
    listType: s
  } = e, [a, l] = r.useState(5);
  return (0, i.jsx)(h.U, {
    setting: t,
    children: (0, i.jsxs)("div", {
      className: j.card,
      children: [(0, i.jsx)(E, {
        listType: s,
        numberOfUsers: n.length
      }), (0, i.jsx)("div", {
        className: j.usersList,
        children: n.slice(0, a).map((e, t) => (0, i.jsx)(C, {
          userId: e,
          last: t === n.length - 1
        }, e))
      }), a < n.length ? (0, i.jsx)("div", {
        className: j.loadMoreContainer,
        children: (0, i.jsx)(o.P3F, {
          onClick: () => {
            l(e => e + 5)
          },
          className: j.loadMoreButton,
          children: (0, i.jsx)(o.Text, {
            variant: "text-sm/semibold",
            color: "text-default",
            children: _.intl.format(_.t.jULEDg, {
              numberOfUsers: a + 5 < n.length ? 5 : n.length - a
            })
          })
        })
      }) : null]
    })
  })
}

function v() {
  let e = (0, Chunk442837.Wu)([Chunk699516.Z], () => Chunk699516.Z.getBlockedIDs());
  return (0, Chunk951288.jsx)(O, {
    setting: Chunk726985.s6.BLOCKED_USERS,
    userIds: module,
    listType: "blocked"
  })
}

function S() {
  let e = (0, Chunk442837.Wu)([Chunk699516.Z], () => Chunk699516.Z.getIgnoredIDs());
  return (0, Chunk951288.jsx)(O, {
    setting: Chunk726985.s6.IGNORED_USERS,
    userIds: module,
    listType: "ignored"
  })
}

function T() {
  return (0, Chunk951288.jsxs)(Chunk838436.U, {
    setting: Chunk726985.s6.RESTRICTED_USERS,
    scrollPosition: Chunk526761.FY.RESTRICTED_ACCOUNTS,
    scrollHighlightDelay: 900,
    children: [(0, Chunk951288.jsx)(Chunk838436.H, {
      header: Chunk388032.intl.string(Chunk388032.t["3wRorq"]),
      description: Chunk388032.intl.format(Chunk388032.t["0aNQo6"], {
        helpArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE)
      })
    }), (0, Chunk951288.jsx)(v, {}), (0, Chunk951288.jsx)(S, {})]
  })
}