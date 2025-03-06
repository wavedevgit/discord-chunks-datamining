/** Chunk was on 51724 **/
n.d(t, {
  GF: () => O,
  ZP: () => S,
  yo: () => v
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(442837),
  o = n(481060),
  c = n(194359),
  d = n(99690),
  u = n(100527),
  m = n(699516),
  p = n(594174),
  g = n(63063),
  h = n(838436),
  f = n(526761),
  x = n(726985),
  b = n(981631),
  N = n(388032),
  _ = n(460722);

function E(e) {
  let {
    listType: t,
    numberOfUsers: n
  } = e, i = "blocked" === t;
  return (0, r.jsxs)("div", {
    className: _.header,
    children: [(0, r.jsx)("div", {
      className: _.iconContainer,
      children: i ? (0, r.jsx)(o.t6m, {}) : (0, r.jsx)(o.kZF, {})
    }), (0, r.jsxs)("div", {
      className: _.text,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-md/semibold",
        color: "interactive-active",
        children: N.NW.string(i ? N.t.PFOUKS : N.t["93ZDWF"])
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: i ? N.NW.format(N.t["r91W/v"], {
          numberOfBlockedUsers: n
        }) : N.NW.format(N.t.rXUeOj, {
          numberOfIgnoredUsers: n
        })
      })]
    })]
  })
}

function j(e) {
  var t;
  let {
    userId: n,
    last: s
  } = e, g = (0, l.e7)([m.Z], () => m.Z.isBlocked(n)), h = (0, l.e7)([p.default], () => p.default.getUser(n)), [f, x] = i.useState(!1), b = i.useCallback(() => {
    x(!0), g ? c.Z.unblockUser(n).catch(() => {
      x(!1)
    }) : c.Z.unignoreUser(n, u.Z.USER_SETTINGS).catch(() => {
      x(!1)
    })
  }, [g, n]);
  return null == h ? null : (0, r.jsxs)("div", {
    className: a()(_.row, {
      [_.lastRow]: s
    }),
    children: [(0, r.jsxs)("div", {
      className: _.userInfo,
      children: [(0, r.jsx)(d.Z, {
        user: h,
        size: o.EFr.SIZE_40
      }), (0, r.jsxs)("div", {
        className: _.text,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: null !== (t = h.globalName) && void 0 !== t ? t : h.username
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: null != h.globalName ? h.username : null
        })]
      })]
    }), (0, r.jsx)(o.zxk, {
      color: o.Ttl.PRIMARY,
      onClick: b,
      submitting: f,
      children: N.NW.string(g ? N.t.XyHpKC : N.t["8wXU9P"])
    })]
  })
}

function C(e) {
  let {
    setting: t,
    userIds: n,
    listType: s
  } = e, [a, l] = i.useState(5);
  return (0, r.jsx)(h.U, {
    setting: t,
    children: (0, r.jsxs)("div", {
      className: _.card,
      children: [(0, r.jsx)(E, {
        listType: s,
        numberOfUsers: n.length
      }), (0, r.jsx)("div", {
        className: _.usersList,
        children: n.slice(0, a).map((e, t) => (0, r.jsx)(j, {
          userId: e,
          last: t === n.length - 1
        }, e))
      }), a < n.length ? (0, r.jsx)("div", {
        className: _.loadMoreContainer,
        children: (0, r.jsx)(o.P3F, {
          onClick: () => {
            l(e => e + 5)
          },
          className: _.loadMoreButton,
          children: (0, r.jsx)(o.Text, {
            variant: "text-sm/semibold",
            color: "text-normal",
            children: N.NW.format(N.t.jULEDg, {
              numberOfUsers: a + 5 < n.length ? 5 : n.length - a
            })
          })
        })
      }) : null]
    })
  })
}

function O() {
  let e = (0, l.Wu)([m.Z], () => m.Z.getBlockedIDs());
  return (0, r.jsx)(C, {
    setting: x.s6.BLOCKED_USERS,
    userIds: e,
    listType: "blocked"
  })
}

function v() {
  let e = (0, l.Wu)([m.Z], () => m.Z.getIgnoredIDs());
  return (0, r.jsx)(C, {
    setting: x.s6.IGNORED_USERS,
    userIds: e,
    listType: "ignored"
  })
}

function S() {
  return (0, r.jsxs)(h.U, {
    setting: x.s6.RESTRICTED_USERS,
    scrollPosition: f.FY.RESTRICTED_ACCOUNTS,
    scrollHighlightDelay: 900,
    children: [(0, r.jsx)(h.H, {
      header: N.NW.string(N.t["3wRorq"]),
      description: N.NW.format(N.t["0aNQo6"], {
        helpArticle: g.Z.getArticleURL(b.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE)
      })
    }), (0, r.jsx)(O, {}), (0, r.jsx)(v, {})]
  })
}