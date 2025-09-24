/** Chunk was on 1272 **/
/** chunk id: 340137, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk948789 = require("./948789.js"),
  Chunk442837 = require("./442837.js"),
  Chunk212605 = require("./212605.js"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk719961 = require("./719961.js"),
  Chunk264783 = require("./264783.js"),
  Chunk944486 = require("./944486.js"),
  Chunk358085 = require("./358085.js"),
  Chunk821020 = require("./821020.js"),
  Chunk370774 = require("./370774.js"),
  Chunk128008 = require("./128008.jsx"),
  Chunk961040 = require("./961040.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk445202 = require("./445202.js");
let I = {
    cozy: 0,
    default: 0,
    compact: 0
  },
  S = {
    cozy: 36,
    default: 24,
    compact: 14
  },
  C = {
    cozy: 95,
    default: 84,
    compact: 72
  };

function T(e) {
  let {
    onClick: t,
    selectedOverride: n = false,
    popoutProps: l,
    ref: o,
    focusSectionProps: s
  } = e, [h, m] = i.useState(false), O = (0, b.D)(), E = n || O, T = n || E, {
    backForwardButtons: N,
    titlebarIconSize: P,
    titlebarHoverHighlight: j
  } = (0, p.T)({
    location: "NotificationsInboxTitleBarButton"
  }), x = (0, r.jsx)(u.Dkj, {
    className: v.icon,
    color: h || T ? u.TVs.colors.ICON_PRIMARY : u.TVs.colors.ICON_TERTIARY,
    size: P
  }), {
    badge: A,
    badgeType: Z
  } = (0, _.h6)({
    isSelected: E
  }), w = (0, g.isDesktop)() && N, L = (0, f.A)(), R = (0, g.isMac)() ? I[L] : w ? S[L] : C[L];
  return (0, r.jsxs)(u.Kqy, {
    gap: 0,
    direction: "horizontal",
    children: [(0, r.jsx)(u.LZC, {
      size: R,
      horizontal: true
    }), (0, r.jsx)(u.ua7, {
      shouldShow: !T,
      text: y.intl.string(y.t.HcoRu7),
      children: e => {
        var n, i;
        return (0, r.jsxs)(u.P3F, (n = function(e) {
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
        }({
          innerRef: o,
          className: a()(v.clickableContainer, {
            [v.withHoverHighlight]: j
          })
        }, s, e, l), i = i = {
          onMouseEnter: () => {
            var t;
            m(true), null == (t = e.onMouseEnter) || t.call(e)
          },
          onMouseLeave: () => {
            var t;
            m(false), null == (t = e.onMouseLeave) || t.call(e)
          },
          onClick: () => {
            var n, r;
            null == t || t(), null == l || null == (n = l.onClick) || n.call(l), null == (r = e.onClick) || r.call(e)
          },
          children: [(0, r.jsx)("div", {
            className: a()(v.iconWrapper, null),
            children: "unread" === Z ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(d.ZP, {
                width: c.Z[P],
                height: c.Z[P],
                mask: d.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                children: x
              }), (0, r.jsx)("div", {
                className: a()(v.unreadDot, v[P])
              })]
            }) : x
          }), A]
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
        }), n))
      }
    })]
  })
}

function N() {
  let {
    focusSectionProps: e
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, t = Chunk647438.useRef(null), {
    notificationCenterVariant: n
  } = (0, Chunk821020.pN)({
    location: "NotificationsInboxButton"
  }), l = (0, Chunk442837.e7)([Chunk944486.Z], () => Chunk944486.Z.getChannelId()), a = Chunk647438.useMemo(() => Chunk981631.Z5c.CHANNEL(Chunk981631.STv, null != Chunk120356 ? Chunk120356 : true), [Chunk120356]), c = (0, Chunk128008.mv)();
  return require === Chunk821020.jP.SIDEBAR ? (0, Chunk951288.jsx)(T, {
    onClick: () => {
      Chunk212605(), (0, Chunk948789.uL)(a)
    },
    focusSectionProps: module
  }) : require === Chunk821020.jP.POPOUT ? (0, Chunk951288.jsx)(Chunk961040.Z, {
    targetElementRef: exports,
    popoutPosition: "bottom",
    popoutAlign: "left",
    spacing: 2,
    children: (n, i, l) => (0, r.jsx)(T, {
      ref: t,
      selectedOverride: i,
      onClick: () => {
        c(), n()
      },
      popoutProps: l,
      focusSectionProps: e
    })
  }) : null
}