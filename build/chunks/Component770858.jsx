/** Chunk was on 65354 **/
/** chunk id: 770858, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk377171 = require("./377171.js"),
  Chunk276952 = require("./276952.jsx"),
  Chunk682662 = require("./682662.jsx"),
  Chunk178088 = require("./178088.jsx"),
  Chunk306680 = require("./306680.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk821020 = require("./821020.js"),
  Chunk370774 = require("./370774.js"),
  Chunk128008 = require("./128008.jsx"),
  Chunk961040 = require("./961040.jsx"),
  Chunk932711 = require("./932711.jsx"),
  Chunk871301 = require("./871301.js"),
  Chunk981631 = require("./981631.js"),
  Chunk490897 = require("./490897.js"),
  Chunk888158 = require("./888158.js");

function C() {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser());
  return (0, Chunk442837.e7)([Chunk306680.ZP], () => (null == module ? true : module.id) != null && Chunk306680.ZP.getMentionCount(module.id, Chunk490897.W.NOTIFICATION_CENTER) > 0)
}

function E(e) {
  var t, n;
  let {
    onClick: d,
    selectedOverride: p = false,
    popoutProps: h,
    ref: _
  } = e, j = (0, l.Ie)("notifications-inbox"), [E, S] = i.useState(false), I = (0, m.D)(), P = p || I, {
    notificationCenterVariant: N
  } = (0, g.pN)({
    location: "NotificationsInboxButtonInner"
  }), {
    badge: Z,
    badgeDimensions: w,
    unreadChannelsCount: T
  } = function(e) {
    let {
      notificationCenterVariant: t
    } = (0, g.pN)({
      location: "NotificationsInboxButtonInner"
    }), {
      unreadChannelIds: n
    } = (0, m.O4)(), i = C(), {
      badge: l,
      dimensions: o
    } = (0, b.h6)({
      isSelected: e
    });
    return t === g.jP.LEGACY ? {
      badge: i ? (0, r.jsx)(a.fWl, {
        style: {
          height: O.zw,
          width: O.zw,
          position: "relative"
        },
        color: s.Z.STATUS_DANGER
      }) : null,
      unreadChannelsCount: 0,
      badgeDimensions: {
        height: O.zw,
        width: O.zw
      }
    } : {
      badge: l,
      unreadChannelsCount: n.length,
      badgeDimensions: o
    }
  }(P), A = N === g.jP.LEGACY ? a.xx7 : a.Dkj, R = (0, o.e7)([f.Z], () => f.Z.getChannelId()), D = i.useMemo(() => {
    if (N === g.jP.SIDEBAR) return v.Z5c.CHANNEL(v.STv, R)
  }, [N, R]);
  return (0, r.jsxs)(u.H, {
    ref: _,
    children: [(0, r.jsx)(c.Z, {
      selected: P && N === g.jP.SIDEBAR,
      hovered: E && N === g.jP.SIDEBAR,
      unread: T > 0,
      className: x.pill,
      disabled: N === g.jP.LEGACY
    }), (0, r.jsx)(y.Z, {
      children: (0, r.jsx)(a.aRk, {
        selected: P || E,
        lowerBadge: Z,
        lowerBadgeSize: w,
        children: (0, r.jsx)(a.LYs, (t = function(e) {
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
        }({}, j, h), n = n = {
          onClick: d,
          to: D,
          selected: P || E,
          onMouseEnter: () => S(true),
          onMouseLeave: () => S(false),
          children: (0, r.jsx)(A, {
            size: "custom",
            color: "currentColor",
            className: x.notificationsIcon,
            width: 20,
            height: 20
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      })
    })]
  })
}

function S() {
  let e = Chunk647438.useRef(null),
    {
      notificationCenterVariant: t
    } = (0, Chunk821020.pN)({
      location: "NotificationsInboxButton"
    }),
    n = C(),
    l = (0, Chunk128008.mv)();
  return exports === Chunk821020.jP.SIDEBAR ? (0, Chunk951288.jsx)(E, {
    onClick: Chunk91192
  }) : exports === Chunk821020.jP.POPOUT ? (0, Chunk951288.jsx)(Chunk961040.Z, {
    targetElementRef: module,
    popoutPosition: "right",
    popoutAlign: "bottom",
    children: (t, n, i) => (0, r.jsx)(E, {
      ref: e,
      selectedOverride: n,
      onClick: () => {
        l(), t()
      },
      popoutProps: i
    })
  }) : exports === Chunk821020.jP.LEGACY ? (0, Chunk951288.jsx)(Chunk178088.k, {
    spacing: 0,
    badgeState: {
      badgeForYou: require
    },
    targetElementRef: module,
    popoutPosition: "right",
    popoutAlign: "top",
    dialogClassName: Chunk888158.positionLayer,
    children: (t, n, i) => (0, r.jsx)(E, {
      ref: e,
      selectedOverride: n,
      onClick: () => {
        l(), t()
      },
      popoutProps: i
    })
  }) : null
}