/** Chunk was on 1272 **/
/** chunk id: 696577, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk79712 = require("./79712.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk743056 = require("./743056.js"),
  Chunk321488 = require("./321488.jsx"),
  Chunk417183 = require("./417183.jsx"),
  Chunk170245 = require("./170245.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk184607 = require("./184607.js");

function y(e) {
  var t;
  let {
    user: n,
    applicationId: l,
    isGameRelationship: s,
    active: c
  } = e, u = (null == (t = f.default.getCurrentUser()) ? true : t.isStaff()) && (null == n ? true : n.isStaff()), {
    acceptFriendRequest: d,
    cancelFriendRequest: p
  } = (0, m.u)({
    userId: n.id,
    applicationId: l,
    isGameRelationship: s,
    location: "Friends"
  }), g = i.useCallback(e => {
    e.stopPropagation(), d()
  }, [d]), b = i.useCallback(e => {
    e.stopPropagation(), p()
  }, [p]);
  return (0, r.jsxs)(r.Fragment, {
    children: [u && (0, r.jsx)("div", {
      className: v.staffIndicator,
      children: (0, r.jsx)(o.IGR, {
        color: a.Z.unsafe_rawColors.BRAND_500.css,
        text: O.intl.string(O.t.oMx98L)
      })
    }), (0, r.jsx)(h.Z, {
      icon: o.dz2,
      actionType: h.Z.ActionTypes.ACCEPT,
      tooltip: O.intl.string(O.t.Zcibdf),
      onClick: g,
      shouldHighlight: c
    }), (0, r.jsx)(h.Z, {
      icon: o.Dio,
      actionType: h.Z.ActionTypes.DENY,
      tooltip: O.intl.string(O.t.xuio0C),
      onClick: b,
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
    cancelFriendRequest: s
  } = (0, m.u)({
    userId: t,
    applicationId: n,
    isGameRelationship: l,
    location: "Friends"
  }), c = i.useCallback(e => {
    e.stopPropagation(), s()
  }, [s]);
  return (0, r.jsx)(h.Z, {
    icon: o.Dio,
    actionType: h.Z.ActionTypes.DENY,
    tooltip: O.intl.string(O.t.eaq81S),
    onClick: c,
    shouldHighlight: a
  })
}

function C(e) {
  let {
    isGameRelationship: t,
    applicationId: n,
    userTag: a,
    isProvisional: s
  } = e, p = i.useMemo(() => t ? O.intl.string(O.t["Uv/eTx"]) : a, [t, a]), f = (0, l.e7)([c.Z], () => null != n ? c.Z.getApplication(n) : null);
  return (0, r.jsxs)("div", {
    className: v.applicationSublabel,
    children: [!s && (0, r.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-subtle",
      children: p
    }), null != f && (0, r.jsxs)(r.Fragment, {
      children: [!s && (0, r.jsx)(d.Z, {
        height: 2,
        width: 2
      }), (0, r.jsx)(u.Z, {
        game: f,
        size: u.A.XXSMALL
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: f.name
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
  } = e, o = g.ZP.useUserTag(t);
  return (0, r.jsx)(_.Z, {
    user: t,
    hovered: n,
    status: i,
    showAccountIdentifier: !l && !t.isProvisional,
    subText: (0, r.jsx)(C, {
      isGameRelationship: l,
      isProvisional: t.isProvisional,
      applicationId: a,
      userTag: o
    })
  })
}

function T(e) {
  let {
    user: t,
    type: n,
    status: l,
    isFocused: a,
    applicationId: o,
    isGameRelationship: c
  } = e, {
    analyticsLocations: u
  } = (0, s.ZP)(), d = l === E.Skl.OFFLINE ? E.Skl.UNKNOWN : l, f = i.useCallback(() => (0, p.openUserProfileModal)({
    userId: t.id,
    sourceAnalyticsLocations: u
  }), [u, t.id]);
  return (0, r.jsx)(b.Z, {
    isFocused: a,
    user: t,
    onClick: f,
    children: e => (0, r.jsxs)("div", {
      className: v.listItemContents,
      children: [(0, r.jsx)(S, {
        user: t,
        hovered: e,
        status: d,
        isGameRelationship: c,
        applicationId: o
      }), (0, r.jsx)("div", {
        className: v.actions,
        children: n === E.OGo.PENDING_INCOMING ? (0, r.jsx)(y, {
          user: t,
          applicationId: o,
          isGameRelationship: c,
          active: e
        }) : (0, r.jsx)(I, {
          userId: t.id,
          applicationId: o,
          isGameRelationship: c,
          active: e
        })
      })]
    })
  })
}