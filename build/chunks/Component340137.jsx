/** Chunk was on 1272 **/
/** chunk id: 340137, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk948789 = require("./948789.js"),
  Chunk442837 = require("./442837.js"),
  Chunk212605 = require("./212605.js"),
  Chunk28664 = require("./28664.jsx"),
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
let C = {
    cozy: 0,
    default: 0,
    compact: 0
  },
  S = {
    cozy: 36,
    default: 24,
    compact: 14
  },
  T = {
    cozy: 95,
    default: 84,
    compact: 72
  };

function N(e) {
  var t, n;
  let {
    onClick: l,
    selectedOverride: s = false,
    popoutProps: o,
    ref: g,
    focusSectionProps: _
  } = e, [O, v] = i.useState(false), N = (0, b.D)(), j = s || N, P = s || j, {
    backForwardButtons: x,
    titlebarIconSize: A,
    titlebarHoverHighlight: Z
  } = (0, f.T)({
    location: "NotificationsInboxTitleBarButton"
  }), w = (0, r.jsx)(d.Dkj, {
    className: I.icon,
    color: O || P ? d.TVs.colors.ICON_PRIMARY : d.TVs.colors.ICON_TERTIARY,
    size: A
  }), {
    badge: L,
    badgeType: R
  } = (0, E.h6)({
    isSelected: j
  }), D = (0, m.isDesktop)() && x, M = (0, h.A)(), k = (0, m.isMac)() ? C[M] : D ? S[M] : T[M];
  return (0, r.jsxs)(d.Kqy, {
    gap: 0,
    direction: "horizontal",
    children: [(0, r.jsx)(d.LZC, {
      size: k,
      horizontal: true
    }), (0, r.jsx)(u.u, {
      asContainer: true,
      shouldShow: !P,
      text: y.intl.string(y.t.HcoRu0),
      children: (0, r.jsxs)(d.P3F, (t = function(e) {
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
        innerRef: g,
        className: a()(I.clickableContainer, {
          [I.withHoverHighlight]: Z
        })
      }, _, o), n = n = {
        onMouseEnter: () => {
          v(true)
        },
        onMouseLeave: () => {
          v(false)
        },
        onClick: () => {
          var e;
          null == l || l(), null == o || null == (e = o.onClick) || e.call(o)
        },
        children: [(0, r.jsx)("div", {
          className: a()(I.iconWrapper, null),
          children: "unread" === R ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(p.ZP, {
              width: c.Z[A],
              height: c.Z[A],
              mask: p.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
              children: w
            }), (0, r.jsx)("div", {
              className: a()(I.unreadDot, I[A])
            })]
          }) : w
        }), L]
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
    })]
  })
}

function j() {
  let {
    focusSectionProps: e
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, t = Chunk473749.useRef(null), {
    notificationCenterVariant: n
  } = (0, Chunk821020.pN)({
    location: "NotificationsInboxButton"
  }), l = (0, Chunk442837.e7)([Chunk944486.Z], () => Chunk944486.Z.getChannelId()), a = Chunk473749.useMemo(() => Chunk981631.Z5c.CHANNEL(Chunk981631.STv, null != Chunk120356 ? Chunk120356 : true), [Chunk120356]), c = (0, Chunk128008.mv)();
  return require === Chunk821020.jP.SIDEBAR ? (0, Chunk54381.jsx)(N, {
    onClick: () => {
      Chunk212605(), (0, Chunk948789.uL)(a)
    },
    focusSectionProps: module
  }) : require === Chunk821020.jP.POPOUT ? (0, Chunk54381.jsx)(Chunk961040.Z, {
    targetElementRef: exports,
    popoutPosition: "bottom",
    popoutAlign: "left",
    spacing: 2,
    children: (n, i, l) => (0, r.jsx)(N, {
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