/** Chunk was on 1113 **/
/** chunk id: 397938, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk941971 = require("./941971.jsx"),
  Chunk900848 = require("./900848.jsx"),
  Chunk371911 = require("./371911.jsx"),
  Chunk222823 = require("./222823.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk851109 = require("./851109.js"),
  Chunk394953 = require("./394953.js"),
  Chunk355216 = require("./355216.jsx"),
  Chunk596540 = require("./596540.jsx"),
  Chunk879221 = require("./879221.jsx");
require("./445368.js");
var Chunk652215 = require("./652215.js"),
  Chunk790782 = require("./790782.js"),
  Chunk626600 = require("./626600.js");

function x() {
  let e = (0, s.bG)([g.default], () => g.default.getCurrentUser());
  return (0, s.bG)([h.Ay], () => (null == e ? true : e.id) != null && h.Ay.getMentionCount(e.id, _.P.NOTIFICATION_CENTER) > 0)
}

function v(e) {
  var t, n;
  let {
    onClick: d,
    selectedOverride: h = false,
    popoutProps: g,
    ref: A
  } = e, _ = (0, i.Vd)("notifications-inbox"), [v, E] = l.useState(false), C = (0, m.lI)(), S = h || C, {
    notificationCenterVariant: I
  } = (0, f.X8)({
    location: "NotificationsInboxButtonInner"
  }), {
    badge: N,
    badgeDimensions: T,
    unreadChannelsCount: P
  } = function(e) {
    let {
      notificationCenterVariant: t
    } = (0, f.X8)({
      location: "NotificationsInboxButtonInner"
    }), {
      unreadChannelIds: n
    } = (0, m.U4)(), l = x(), {
      badge: i,
      dimensions: s
    } = (0, b.ux)({
      isSelected: e
    });
    return t === f.U5.LEGACY ? {
      badge: l ? (0, r.jsx)(o.SC0, {
        style: {
          height: 13,
          width: 13,
          position: "relative"
        },
        color: a.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css
      }) : null,
      unreadChannelsCount: 0,
      badgeDimensions: {
        height: 13,
        width: 13
      }
    } : {
      badge: i,
      unreadChannelsCount: n.length,
      badgeDimensions: s
    }
  }(S), w = I === f.U5.LEGACY ? o.K$s : o.XFE, R = (0, s.bG)([p.A], () => p.A.getChannelId()), D = l.useMemo(() => {
    if (I === f.U5.SIDEBAR) return O.BVt.CHANNEL(O.gNP, R)
  }, [I, R]);
  return (0, r.jsxs)(u.c, {
    ref: A,
    children: [(0, r.jsx)(c.A, {
      selected: S && I === f.U5.SIDEBAR,
      hovered: v && I === f.U5.SIDEBAR,
      unread: P > 0,
      className: j.Io,
      disabled: I === f.U5.LEGACY
    }), (0, r.jsx)(y.A, {
      children: (0, r.jsx)(o.Qk9, {
        selected: S || v,
        lowerBadge: N,
        lowerBadgeSize: T,
        children: (0, r.jsx)(o.jlP, (t = function(e) {
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
        }({}, _, g), n = n = {
          onClick: d,
          to: D,
          selected: S || v,
          onMouseEnter: () => E(true),
          onMouseLeave: () => E(false),
          children: (0, r.jsx)(w, {
            size: "custom",
            color: "currentColor",
            className: j.iZ,
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

function E() {
  let e = l.useRef(null),
    {
      notificationCenterVariant: t
    } = (0, f.X8)({
      location: "NotificationsInboxButton"
    }),
    n = x(),
    i = (0, b.HN)();
  return t === f.U5.SIDEBAR ? (0, r.jsx)(v, {
    onClick: i
  }) : t === f.U5.POPOUT ? (0, r.jsx)(A.A, {
    targetElementRef: e,
    popoutPosition: "right",
    popoutAlign: "bottom",
    children: (t, n, l) => (0, r.jsx)(v, {
      ref: e,
      selectedOverride: n,
      onClick: () => {
        i(), t()
      },
      popoutProps: l
    })
  }) : t === f.U5.LEGACY ? (0, r.jsx)(d.C, {
    spacing: 0,
    badgeState: {
      badgeForYou: n
    },
    targetElementRef: e,
    popoutPosition: "right",
    popoutAlign: "top",
    children: (t, n, l) => (0, r.jsx)(v, {
      ref: e,
      selectedOverride: n,
      onClick: () => {
        i(), t()
      },
      popoutProps: l
    })
  }) : null
}