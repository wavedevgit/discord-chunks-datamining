/** Chunk was on web.js **/
/** chunk id: 7188, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk522651 = require("./522651.js"),
  Chunk795318 = require("./795318.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk544384 = require("./544384.jsx"),
  Chunk76021 = require("./76021.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk834348 = require("./834348.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk618158 = require("./618158.jsx"),
  Chunk871499 = require("./871499.jsx"),
  Chunk354459 = require("./354459.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk572065 = require("./572065.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = N(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function R(e) {
  let {
    className: t
  } = e;
  return (0, r.jsx)(o.ewm, {
    size: "md",
    color: "currentColor",
    className: t
  })
}

function P(e) {
  let {
    className: t
  } = e;
  return (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsx)(u.ZP, {
      className: t,
      mask: u.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
      children: (0, r.jsx)(R, {})
    }), (0, r.jsx)(h.Z, {
      className: v.badgeUpgrade
    })]
  })
}

function w(e) {
  var {
    hideBadges: t = false,
    stream: n,
    location: u
  } = e, h = C(e, ["hideBadges", "stream", "location"]);
  let v = i.useRef(null),
    {
      analyticsLocations: I,
      parentAnalyticsLocation: T
    } = (0, s.ZP)(),
    N = (0, a.e7)([p.default], () => m.ZP.isPremium(p.default.getCurrentUser(), y.PremiumTypes.TIER_1)),
    w = (0, a.e7)([_.Z], () => _.Z.getChannel(null == n ? true : n.channelId)),
    D = i.useMemo(() => null != n ? [n] : [], [n]),
    L = i.useCallback(() => {
      null != w && (0, f.Z)(w.getGuildId(), w.id, I)
    }, [w, I]);
  if (null == n || null == w) return null;
  let x = R;
  return t || N || (x = P), (0, r.jsx)(o.yRy, {
    targetElementRef: v,
    position: "top",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(g.Z, {
        children: (0, r.jsx)(d.Z, {
          channel: w,
          currentUser: p.default.getCurrentUser(),
          activeStreams: D,
          onClose: t,
          showReportOption: true,
          handleGoLive: L,
          onInteraction: (0, c.u)("ManageStreamsButton", null != T ? T : u, {
            entrypoint: b.A5.OTHER_BUTTON
          })
        })
      })
    },
    animation: o.yRy.Animation.FADE,
    children: e => (0, r.jsx)(E.Z, S(A(S({}, e), {
      buttonRef: v,
      label: O.intl.string(O.t.tmiYpF),
      iconComponent: x,
      onClick: t => {
        (null != T || null != u) && (0, l.v)(null != T ? T : u, l.d.STREAM_SETTINGS), null == e || e.onClick(t)
      }
    }), h))
  })
}