/** Chunk was on 21738 **/
/** chunk id: 594968, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk587895 = require("./587895.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk640708 = require("./640708.jsx"),
  Chunk657331 = require("./657331.js"),
  Chunk287809 = require("./287809.js"),
  Chunk427262 = require("./427262.js"),
  Chunk390848 = require("./390848.js"),
  Chunk513297 = require("./513297.jsx"),
  Chunk414711 = require("./414711.jsx"),
  Chunk723690 = require("./723690.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk615078 = require("./615078.js");

function y(e) {
  var t;
  let {
    user: n,
    applicationId: l,
    isGameRelationship: o,
    active: c
  } = e, u = (null == (t = h.default.getCurrentUser()) ? true : t.isStaff()) && (null == n ? true : n.isStaff()), {
    acceptFriendRequest: d,
    cancelFriendRequest: p
  } = (0, g.I)({
    userId: n.id,
    applicationId: l,
    isGameRelationship: o,
    location: "Friends"
  }), f = i.useCallback(e => {
    e.stopPropagation(), d()
  }, [d]), A = i.useCallback(e => {
    e.stopPropagation(), p()
  }, [p]);
  return (0, r.jsxs)(r.Fragment, {
    children: [u && (0, r.jsx)("div", {
      className: O.ou,
      children: (0, r.jsx)(s.LpS, {
        color: a.A.unsafe_rawColors.BRAND_500.css,
        text: E.intl.string(E.t.oMx98L)
      })
    }), (0, r.jsx)(m.A, {
      icon: s.A9s,
      actionType: m.A.ActionTypes.ACCEPT,
      tooltip: E.intl.string(E.t.Zcibdf),
      onClick: f,
      shouldHighlight: c
    }), (0, r.jsx)(m.A, {
      icon: s.PGe,
      actionType: m.A.ActionTypes.DENY,
      tooltip: E.intl.string(E.t.xuio0C),
      onClick: A,
      shouldHighlight: c
    })]
  })
}

function I(e) {
  let {
    userId: t,
    applicationId: n,
    isGameRelationship: l,
    active: a
  } = e, {
    cancelFriendRequest: o
  } = (0, g.I)({
    userId: t,
    applicationId: n,
    isGameRelationship: l,
    location: "Friends"
  }), c = i.useCallback(e => {
    e.stopPropagation(), o()
  }, [o]);
  return (0, r.jsx)(m.A, {
    icon: s.PGe,
    actionType: m.A.ActionTypes.DENY,
    tooltip: E.intl.string(E.t.eaq81S),
    onClick: c,
    shouldHighlight: a
  })
}

function v(e) {
  let {
    isGameRelationship: t,
    applicationId: n,
    userTag: a,
    isProvisional: o
  } = e, p = i.useMemo(() => t ? E.intl.string(E.t["Uv/eTx"]) : a, [t, a]), h = (0, l.bG)([c.A], () => null != n ? c.A.getApplication(n) : null);
  return (0, r.jsxs)("div", {
    className: O.P9,
    children: [!o && (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "text-subtle",
      children: p
    }), null != h && (0, r.jsxs)(r.Fragment, {
      children: [!o && (0, r.jsx)(d.A, {
        height: 2,
        width: 2
      }), (0, r.jsx)(u.A, {
        game: h,
        size: u.M.XXSMALL
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: h.name
      })]
    })]
  })
}

function S(e) {
  let {
    user: t,
    hovered: n,
    status: i,
    isGameRelationship: l,
    applicationId: a
  } = e, s = f.Ay.useUserTag(t);
  return (0, r.jsx)(_.A, {
    user: t,
    hovered: n,
    status: i,
    showAccountIdentifier: !l && !t.isProvisional,
    subText: (0, r.jsx)(v, {
      isGameRelationship: l,
      isProvisional: t.isProvisional,
      applicationId: a,
      userTag: s
    })
  })
}

function C(e) {
  let {
    user: t,
    type: n,
    status: l,
    isFocused: a,
    applicationId: s,
    isGameRelationship: c
  } = e, {
    analyticsLocations: u
  } = (0, o.Ay)(), d = l === b.clD.OFFLINE ? b.clD.UNKNOWN : l, h = i.useCallback(() => (0, p.openUserProfileModal)({
    userId: t.id,
    sourceAnalyticsLocations: u
  }), [u, t.id]);
  return (0, r.jsx)(A.A, {
    isFocused: a,
    user: t,
    onClick: h,
    children: e => (0, r.jsxs)("div", {
      className: O.a4,
      children: [(0, r.jsx)(S, {
        user: t,
        hovered: e,
        status: d,
        isGameRelationship: c,
        applicationId: s
      }), (0, r.jsx)("div", {
        className: O.o1,
        children: n === b.eA$.PENDING_INCOMING ? (0, r.jsx)(y, {
          user: t,
          applicationId: s,
          isGameRelationship: c,
          active: e
        }) : (0, r.jsx)(I, {
          userId: t.id,
          applicationId: s,
          isGameRelationship: c,
          active: e
        })
      })]
    })
  })
}