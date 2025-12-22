/** Chunk was on 67000 **/
/** chunk id: 770858, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
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
  Chunk678878 = require("./678878.js");

function E() {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser());
  return (0, Chunk442837.e7)([Chunk306680.ZP], () => (null == module ? true : module.id) != null && Chunk306680.ZP.getMentionCount(module.id, Chunk490897.W.NOTIFICATION_CENTER) > 0)
}

function S(e) {
  var t, n;
  let {
    onClick: d,
    selectedOverride: f = false,
    popoutProps: p,
    ref: y
  } = e, C = (0, l.Ie)("notifications-inbox"), [S, _] = i.useState(false), I = (0, b.D)(), P = f || I, {
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
    } = (0, b.O4)(), i = E(), {
      badge: l,
      dimensions: a
    } = (0, m.h6)({
      isSelected: e
    });
    return t === g.jP.LEGACY ? {
      badge: i ? (0, r.jsx)(s.fWl, {
        style: {
          height: v.zw,
          width: v.zw,
          position: "relative"
        },
        color: o.Z.colors.STATUS_DANGER.css
      }) : null,
      unreadChannelsCount: 0,
      badgeDimensions: {
        height: v.zw,
        width: v.zw
      }
    } : {
      badge: l,
      unreadChannelsCount: n.length,
      badgeDimensions: a
    }
  }(P), A = N === g.jP.LEGACY ? s.xx7 : s.Dkj, R = (0, a.e7)([h.Z], () => h.Z.getChannelId()), D = i.useMemo(() => {
    if (N === g.jP.SIDEBAR) return j.Z5c.CHANNEL(j.STv, R)
  }, [N, R]);
  return (0, r.jsxs)(u.H, {
    ref: y,
    children: [(0, r.jsx)(c.Z, {
      selected: P && N === g.jP.SIDEBAR,
      hovered: S && N === g.jP.SIDEBAR,
      unread: T > 0,
      className: x.pill,
      disabled: N === g.jP.LEGACY
    }), (0, r.jsx)(O.Z, {
      children: (0, r.jsx)(s.aRk, {
        selected: P || S,
        lowerBadge: Z,
        lowerBadgeSize: w,
        children: (0, r.jsx)(s.LYs, (t = function(e) {
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
        }({}, C, p), n = n = {
          onClick: d,
          to: D,
          selected: P || S,
          onMouseEnter: () => _(true),
          onMouseLeave: () => _(false),
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

function _() {
  let e = Chunk473749.useRef(null),
    {
      notificationCenterVariant: t
    } = (0, Chunk821020.pN)({
      location: "NotificationsInboxButton"
    }),
    n = E(),
    l = (0, Chunk128008.mv)();
  return exports === Chunk821020.jP.SIDEBAR ? (0, Chunk54381.jsx)(S, {
    onClick: Chunk91192
  }) : exports === Chunk821020.jP.POPOUT ? (0, Chunk54381.jsx)(Chunk961040.Z, {
    targetElementRef: module,
    popoutPosition: "right",
    popoutAlign: "bottom",
    children: (t, n, i) => (0, r.jsx)(S, {
      ref: e,
      selectedOverride: n,
      onClick: () => {
        l(), t()
      },
      popoutProps: i
    })
  }) : exports === Chunk821020.jP.LEGACY ? (0, Chunk54381.jsx)(Chunk178088.k, {
    spacing: 0,
    badgeState: {
      badgeForYou: require
    },
    targetElementRef: module,
    popoutPosition: "right",
    popoutAlign: "top",
    dialogClassName: Chunk678878.positionLayer,
    children: (t, n, i) => (0, r.jsx)(S, {
      ref: e,
      selectedOverride: n,
      onClick: () => {
        l(), t()
      },
      popoutProps: i
    })
  }) : null
}