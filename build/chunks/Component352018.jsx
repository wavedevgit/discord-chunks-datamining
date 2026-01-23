/** Chunk was on web.js **/
/** chunk id: 352018, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => P
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk384059 = require("./384059.js"),
  Chunk480890 = require("./480890.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk848362 = require("./848362.jsx"),
  Chunk471993 = require("./471993.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk287809 = require("./287809.js"),
  Chunk964989 = require("./964989.jsx"),
  Chunk927578 = require("./927578.js"),
  Chunk447404 = require("./447404.jsx"),
  Chunk709562 = require("./709562.jsx"),
  Chunk806931 = require("./806931.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk849148 = require("./849148.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = N(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function R(e) {
  let {
    className: t
  } = e;
  return (0, r.jsx)(s.Zes, {
    size: "md",
    color: "currentColor",
    className: t
  })
}

function w(e) {
  let {
    className: t
  } = e;
  return (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsx)(u.Ay, {
      className: t,
      mask: u.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
      children: (0, r.jsx)(R, {})
    }), (0, r.jsx)(h.A, {
      className: v.s
    })]
  })
}

function P(e) {
  let {
    hideBadges: t = false,
    stream: n,
    location: u
  } = e, h = C(e, ["hideBadges", "stream", "location"]), v = i.useRef(null), {
    analyticsLocations: A,
    parentAnalyticsLocation: S
  } = (0, o.Ay)(), N = (0, a.bG)([_.default], () => m.Ay.isPremium(_.default.getCurrentUser(), b.PremiumTypes.TIER_1)), P = (0, a.bG)([p.A], () => p.A.getChannel(null == n ? true : n.channelId)), D = i.useMemo(() => null != n ? [n] : [], [n]), x = i.useCallback(() => {
    null != P && (0, f.A)(P.getGuildId(), P.id, A)
  }, [P, A]);
  if (null == n || null == P) return null;
  let L = R;
  return t || N || (L = w), (0, r.jsx)(s.YNO, {
    targetElementRef: v,
    position: "top",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(g.A, {
        children: (0, r.jsx)(d.A, {
          channel: P,
          currentUser: _.default.getCurrentUser(),
          activeStreams: D,
          onClose: t,
          showReportOption: true,
          handleGoLive: x,
          onInteraction: (0, c.s)("ManageStreamsButton", null != S ? S : u, {
            entrypoint: y.GK.OTHER_BUTTON
          })
        })
      })
    },
    animation: s.YNO.Animation.FADE,
    children: e => (0, r.jsx)(E.A, I(T(I({}, e), {
      buttonRef: v,
      label: O.intl.string(O.t.tmiYpF),
      iconComponent: L,
      onClick: t => {
        (null != S || null != u) && (0, l.X)(null != S ? S : u, l.O.STREAM_SETTINGS), null == e || e.onClick(t)
      }
    }), h))
  })
}