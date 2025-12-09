/** Chunk was on 36312 **/
/** chunk id: 153932, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk442837 = require("./442837.js"),
  Chunk194359 = require("./194359.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk321488 = require("./321488.jsx"),
  Chunk417183 = require("./417183.jsx"),
  Chunk170245 = require("./170245.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk974042 = require("./974042.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk862998 = require("./862998.js");

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      s = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), s.forEach(function(t) {
      var s;
      s = n[t], t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = s
    })
  }
  return e
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      n.push.apply(n, s)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function P(e) {
  let {
    user: t,
    status: n,
    ignoredUser: i
  } = e, {
    analyticsLocations: o
  } = (0, u.ZP)(), r = e => {
    e.stopPropagation(), l.Z.cancelFriendRequest(t.id, {
      location: "Spam requests modal"
    })
  }, a = e => {
    e.stopPropagation(), l.Z.addRelationship({
      userId: t.id,
      context: {
        location: "Spam requests modal"
      }
    })
  }, f = n === g.Skl.OFFLINE ? g.Skl.UNKNOWN : n, h = i ? O.intl.string(O.t.pO68Oz) : O.intl.string(O.t["gp+Ytz"]);
  return (0, s.jsx)("div", {
    className: y.spamRequest,
    children: (0, s.jsx)(d.Z, {
      isFocused: false,
      user: t,
      className: y.listItem,
      activeClassName: y.active,
      onClick: () => (0, m.openUserProfileModal)({
        userId: t.id,
        sourceAnalyticsLocations: o
      }),
      children: e => (0, s.jsxs)("div", {
        className: y.listItemContents,
        children: [(0, s.jsx)(b.Z, {
          user: t,
          hovered: e,
          status: f,
          subText: h,
          className: y.userInfo
        }), (0, s.jsxs)("div", {
          className: y.actions,
          children: [(0, s.jsx)(p.Z, {
            icon: c.dz2,
            actionType: p.Z.ActionTypes.ACCEPT,
            tooltip: O.intl.string(O.t.Zcibdf),
            onClick: a,
            shouldHighlight: e
          }), (0, s.jsx)(p.Z, {
            icon: c.Dio,
            actionType: p.Z.ActionTypes.DENY,
            tooltip: O.intl.string(O.t.xuio0C),
            onClick: r,
            shouldHighlight: e
          })]
        })]
      })
    })
  })
}

function _(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, {
    rows: c
  } = (0, a.cj)([f.ZP], () => f.ZP.getState()), u = c.filter(g.pJs.PENDING_IGNORED), p = c.filter(g.pJs.SPAM), d = p.length + u.length;
  i.useEffect(() => {
    0 === d && n()
  }, [d, n]);
  let b = i.useCallback(() => {
      l.Z.clearPendingSpamAndIgnored(), n()
    }, [n]),
    m = i.useMemo(() => {
      let e = [];
      return d > 1 && e.push({
        text: O.intl.string(O.t.O8k7O4),
        onClick: b,
        variant: "secondary"
      }), e
    }, [b, d]);
  return (0, s.jsx)(r.u_l, {
    title: O.intl.string(O.t.kaYqnm),
    subtitle: O.intl.string(O.t.tRxb4H),
    actions: m,
    trackingProps: {
      impression: {
        impressionName: o.ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX
      }
    },
    onClose: n,
    transitionState: t,
    children: (0, s.jsxs)("div", {
      className: y.modalContent,
      children: [u.map(e => (0, i.createElement)(P, j(h({}, e), {
        isFocused: false,
        key: e.key,
        ignoredUser: true
      }))), p.map(e => (0, i.createElement)(P, j(h({}, e), {
        isFocused: false,
        key: e.key
      })))]
    })
  })
}