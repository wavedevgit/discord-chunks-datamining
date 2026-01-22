/** Chunk was on 75052 **/
/** chunk id: 516259, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => E
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk311907 = require("./311907.js"),
  Chunk49229 = require("./49229.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk513297 = require("./513297.jsx"),
  Chunk414711 = require("./414711.jsx"),
  Chunk723690 = require("./723690.jsx"),
  Chunk657331 = require("./657331.js"),
  Chunk595623 = require("./595623.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk142371 = require("./142371.js");

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e) {
  let {
    user: t,
    status: n,
    ignoredUser: s
  } = e, {
    analyticsLocations: i
  } = (0, u.Ay)(), o = e => {
    e.stopPropagation(), l.A.cancelFriendRequest(t.id, {
      location: "Spam requests modal"
    })
  }, a = e => {
    e.stopPropagation(), l.A.addRelationship({
      userId: t.id,
      context: {
        location: "Spam requests modal"
      }
    })
  }, g = n === O.clD.OFFLINE ? O.clD.UNKNOWN : n, h = s ? y.intl.string(y.t.pO68Oz) : y.intl.string(y.t["gp+Ytz"]);
  return (0, r.jsx)("div", {
    className: S.Bi,
    children: (0, r.jsx)(f.A, {
      isFocused: false,
      user: t,
      className: S.Aw,
      activeClassName: S.vu,
      onClick: () => (0, p.openUserProfileModal)({
        userId: t.id,
        sourceAnalyticsLocations: i
      }),
      children: e => (0, r.jsxs)("div", {
        className: S.a4,
        children: [(0, r.jsx)(d.A, {
          user: t,
          hovered: e,
          status: g,
          subText: h,
          className: S.eF
        }), (0, r.jsxs)("div", {
          className: S.o1,
          children: [(0, r.jsx)(b.A, {
            icon: c.A9s,
            actionType: b.A.ActionTypes.ACCEPT,
            tooltip: y.intl.string(y.t.Zcibdf),
            onClick: a,
            shouldHighlight: e
          }), (0, r.jsx)(b.A, {
            icon: c.PGe,
            actionType: b.A.ActionTypes.DENY,
            tooltip: y.intl.string(y.t.xuio0C),
            onClick: o,
            shouldHighlight: e
          })]
        })]
      })
    })
  })
}

function E(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, {
    rows: c
  } = (0, a.cf)([g.Ay], () => g.Ay.getState()), u = c.filter(O.m3P.PENDING_IGNORED), b = c.filter(O.m3P.SPAM), f = b.length + u.length;
  s.useEffect(() => {
    0 === f && n()
  }, [f, n]);
  let d = s.useCallback(() => {
      l.A.clearPendingSpamAndIgnored(), n()
    }, [n]),
    p = s.useMemo(() => {
      let e = [];
      return f > 1 && e.push({
        text: y.intl.string(y.t.O8k7O4),
        onClick: d,
        variant: "secondary"
      }), e
    }, [d, f]);
  return (0, r.jsx)(o.aFV, {
    title: y.intl.string(y.t.kaYqnm),
    subtitle: y.intl.string(y.t.tRxb4H),
    actions: p,
    trackingProps: {
      impression: {
        impressionName: i.ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX
      }
    },
    onClose: n,
    transitionState: t,
    children: (0, r.jsxs)("div", {
      className: S.jE,
      children: [u.map(e => (0, s.createElement)(_, m(h({}, e), {
        isFocused: false,
        key: e.key,
        ignoredUser: true
      }))), b.map(e => (0, s.createElement)(_, m(h({}, e), {
        isFocused: false,
        key: e.key
      })))]
    })
  })
}