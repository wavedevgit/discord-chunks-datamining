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
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk336219 = require("./336219.js"),
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
let v = {
    cozy: 6,
    default: 4,
    compact: 2
  },
  I = {
    cozy: 36,
    default: 24,
    compact: 14
  },
  C = {
    cozy: 95,
    default: 84,
    compact: 72
  };

function S(e) {
  let {
    onClick: t,
    selectedOverride: n = false,
    popoutProps: l,
    ref: o,
    focusSectionProps: s
  } = e, [f, g] = i.useState(false), _ = (0, m.D)(), O = n || _, S = n || O, N = (0, r.jsx)(c.Dkj, {
    className: y.icon,
    color: f || S ? c.TVs.colors.ICON_PRIMARY : c.TVs.colors.ICON_TERTIARY,
    size: "custom",
    height: 20,
    width: 20
  }), {
    badge: T,
    badgeType: P
  } = (0, b.h6)({
    isSelected: O
  }), {
    backForwardButtons: j
  } = d.MK.useExperiment({
    location: "AppTitleBar"
  }), A = (0, h.isDesktop)() && j, x = (0, p.A)(), Z = (0, h.isMac)() ? v[x] : A ? I[x] : C[x];
  return (0, r.jsxs)(c.Kqy, {
    gap: 0,
    direction: "horizontal",
    children: [(0, r.jsx)(c.LZC, {
      size: Z,
      horizontal: true
    }), (0, r.jsx)(c.ua7, {
      shouldShow: !S,
      text: E.intl.string(E.t.HcoRu7),
      children: e => {
        var n, i;
        return (0, r.jsxs)(c.P3F, (n = function(e) {
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
          className: y.clickableContainer
        }, s, e, l), i = i = {
          onMouseEnter: () => {
            var t;
            g(true), null == (t = e.onMouseEnter) || t.call(e)
          },
          onMouseLeave: () => {
            var t;
            g(false), null == (t = e.onMouseLeave) || t.call(e)
          },
          onClick: () => {
            var n, r;
            null == t || t(), null == l || null == (n = l.onClick) || n.call(l), null == (r = e.onClick) || r.call(e)
          },
          children: [(0, r.jsx)("div", {
            className: a()(y.iconWrapper, null),
            children: "unread" === P ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(u.ZP, {
                width: 20,
                height: 20,
                mask: u.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                children: N
              }), (0, r.jsx)("div", {
                className: y.unreadDot
              })]
            }) : N
          }), T]
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
  return require === Chunk821020.jP.SIDEBAR ? (0, Chunk951288.jsx)(S, {
    onClick: () => {
      Chunk481060(), (0, Chunk948789.uL)(a)
    },
    focusSectionProps: module
  }) : require === Chunk821020.jP.POPOUT ? (0, Chunk951288.jsx)(Chunk961040.Z, {
    targetElementRef: exports,
    popoutPosition: "bottom",
    popoutAlign: "left",
    spacing: 2,
    children: (n, i, l) => (0, r.jsx)(S, {
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