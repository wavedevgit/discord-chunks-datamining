/** Chunk was on 36312 **/
/** chunk id: 153932, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => N
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
  Chunk755721 = require("./755721.js"),
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

function _(e) {
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

function y(e) {
  let {
    user: t,
    status: n,
    ignoredUser: o
  } = e, {
    analyticsLocations: i
  } = (0, d.ZP)(), r = e => {
    e.stopPropagation(), c.Z.cancelFriendRequest(t.id, {
      location: "Spam requests modal"
    })
  }, l = e => {
    e.stopPropagation(), c.Z.addRelationship({
      userId: t.id,
      context: {
        location: "Spam requests modal"
      }
    })
  }, h = n === g.Skl.OFFLINE ? g.Skl.UNKNOWN : n, _ = o ? O.intl.string(O.t.pO68Oz) : O.intl.string(O.t["gp+Yt7"]);
  return (0, s.jsx)("div", {
    className: f.spamRequest,
    children: (0, s.jsx)(m.Z, {
      isFocused: false,
      user: t,
      className: f.listItem,
      activeClassName: f.active,
      onClick: () => (0, b.openUserProfileModal)({
        userId: t.id,
        sourceAnalyticsLocations: i
      }),
      children: e => (0, s.jsxs)("div", {
        className: f.listItemContents,
        children: [(0, s.jsx)(u.Z, {
          user: t,
          hovered: e,
          status: h,
          subText: _,
          className: f.userInfo
        }), (0, s.jsxs)("div", {
          className: f.actions,
          children: [(0, s.jsx)(p.Z, {
            icon: a.dz2,
            actionType: p.Z.ActionTypes.ACCEPT,
            tooltip: O.intl.string(O.t.ZcibdX),
            onClick: l,
            shouldHighlight: e
          }), (0, s.jsx)(p.Z, {
            icon: a.Dio,
            actionType: p.Z.ActionTypes.DENY,
            tooltip: O.intl.string(O.t.xuio0N),
            onClick: r,
            shouldHighlight: e
          })]
        })]
      })
    })
  })
}

function N(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, {
    rows: d
  } = (0, l.cj)([h.ZP], () => h.ZP.getState()), p = d.filter(g.pJs.PENDING_IGNORED), m = d.filter(g.pJs.SPAM), u = m.length + p.length;
  return o.useEffect(() => {
    0 === u && n()
  }, [u, n]), (0, s.jsxs)(a.Y0X, {
    transitionState: t,
    className: f.modal,
    impression: {
      impressionName: i.ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX
    },
    parentComponent: "OtherFriendRequestsModal",
    children: [(0, s.jsxs)(a.xBx, {
      separator: false,
      className: f.modalHeader,
      children: [(0, s.jsx)(a.X6q, {
        variant: "heading-lg/bold",
        className: f.heading,
        children: O.intl.string(O.t.kaYqnp)
      }), (0, s.jsx)(a.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: O.intl.string(O.t.tRxb4O)
      })]
    }), (0, s.jsxs)(a.hzk, {
      className: f.modalContent,
      children: [p.map(e => (0, o.createElement)(y, j(_({}, e), {
        isFocused: false,
        key: e.key,
        ignoredUser: true
      }))), m.map(e => (0, o.createElement)(y, j(_({}, e), {
        isFocused: false,
        key: e.key
      })))]
    }), u > 1 && (0, s.jsx)("div", {
      className: f.modalFooter,
      children: (0, s.jsx)(r.zx, {
        className: f.clearAllButton,
        onClick: () => {
          c.Z.clearPendingSpamAndIgnored(), n()
        },
        children: O.intl.string(O.t.O8k7Oz)
      })
    })]
  })
}