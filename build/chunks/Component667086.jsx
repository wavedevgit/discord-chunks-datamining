/** Chunk was on 21738 **/
/** chunk id: 667086, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => T
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk877227 = require("./877227.js"),
  Chunk311907 = require("./311907.js"),
  Chunk319354 = require("./319354.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk545167 = require("./545167.js"),
  Chunk418842 = require("./418842.js"),
  Chunk309010 = require("./309010.js"),
  Chunk723702 = require("./723702.js"),
  Chunk851109 = require("./851109.js"),
  Chunk394953 = require("./394953.js"),
  Chunk355216 = require("./355216.jsx"),
  Chunk596540 = require("./596540.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk687836 = require("./687836.js");
let v = {
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

function N(e) {
  var t, n;
  let {
    onClick: l,
    selectedOverride: s = false,
    popoutProps: o,
    ref: f,
    focusSectionProps: A
  } = e, [E, O] = i.useState(false), N = (0, _.lI)(), T = s || N, j = s || T, {
    backForwardButtons: x,
    titlebarIconSize: P,
    titlebarHoverHighlight: w
  } = (0, h.p)({
    location: "NotificationsInboxTitleBarButton"
  }), L = (0, r.jsx)(d.XFE, {
    className: I.icon,
    color: E || j ? d.LU0.colors.ICON_STRONG : d.LU0.colors.ICON_MUTED,
    size: P
  }), {
    badge: R,
    badgeType: D
  } = (0, b.ux)({
    isSelected: T
  }), M = (0, m.isDesktop)() && x, k = (0, g.C)(), U = (0, m.isMac)() ? v[k] : M ? S[k] : C[k];
  return (0, r.jsxs)(d.BJc, {
    gap: 0,
    direction: "horizontal",
    children: [(0, r.jsx)(d.hKd, {
      size: U,
      horizontal: true
    }), (0, r.jsx)(u.m, {
      asContainer: true,
      shouldShow: !j,
      text: y.intl.string(y.t.HcoRu0),
      children: (0, r.jsxs)(d.DUT, (t = function(e) {
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
        innerRef: f,
        className: a()(I.clickableContainer, {
          [I.withHoverHighlight]: w
        })
      }, A, o), n = n = {
        onMouseEnter: () => {
          O(true)
        },
        onMouseLeave: () => {
          O(false)
        },
        onClick: () => {
          var e;
          null == l || l(), null == o || null == (e = o.onClick) || e.call(o)
        },
        children: [(0, r.jsx)("div", {
          className: a()(I.iconWrapper, null),
          children: "unread" === D ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(p.Ay, {
              width: c.E[P],
              height: c.E[P],
              mask: p.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
              children: L
            }), (0, r.jsx)("div", {
              className: a()(I.unreadDot, I[P])
            })]
          }) : L
        }), R]
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

function T() {
  let {
    focusSectionProps: e
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, t = i.useRef(null), {
    notificationCenterVariant: n
  } = (0, A.X8)({
    location: "NotificationsInboxButton"
  }), l = (0, o.bG)([f.A], () => f.A.getChannelId()), a = i.useMemo(() => O.BVt.CHANNEL(O.gNP, null != l ? l : true), [l]), c = (0, b.HN)();
  return n === A.U5.SIDEBAR ? (0, r.jsx)(N, {
    onClick: () => {
      c(), (0, s.pX)(a)
    },
    focusSectionProps: e
  }) : n === A.U5.POPOUT ? (0, r.jsx)(E.A, {
    targetElementRef: t,
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