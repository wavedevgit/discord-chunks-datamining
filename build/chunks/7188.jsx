/** Chunk was on web.js **/
/** chunk id: 7188, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.js"),
  Chunk522651 = require("./522651.js"),
  Chunk795318 = require("./795318.js"),
  Chunk686546 = require("./686546.js"),
  Chunk544384 = require("./544384.js"),
  Chunk76021 = require("./76021.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk834348 = require("./834348.js"),
  Chunk74538 = require("./74538.js"),
  Chunk618158 = require("./618158.js"),
  Chunk871499 = require("./871499.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.js"),
  Chunk71922 = require("./71922.js");

function T(e, t, n) {
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
      T(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = R(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function R(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function P(e) {
  let {
    className: t
  } = e;
  return <a.ewm size={"md"} color={"currentColor"} className={t} />
}

function w(e) {
  let {
    className: t
  } = e;
  return <i.Fragment>{<u.ZP className={t} mask={u.ZP.Masks.HEADER_BAR_BADGE_BOTTOM}><P /></u.ZP>}{<h.Z className={I.badgeUpgrade} />}</i.Fragment>
}

function D(e) {
  var {
    hideBadges: t = false,
    stream: n,
    location: u
  } = e, h = C(e, ["hideBadges", "stream", "location"]);
  let I = i.useRef(null),
    {
      parentAnalyticsLocation: T
    } = (0, s.ZP)(),
    A = (0, o.e7)([p.default], () => m.ZP.isPremium(p.default.getCurrentUser(), O.p9.TIER_1)),
    R = (0, o.e7)([_.Z], () => _.Z.getChannel(null == n ? true : n.channelId)),
    D = i.useMemo(() => null != n ? [n] : [], [n]),
    L = i.useCallback(() => {
      null != R && (0, f.Z)(R.getGuildId(), R.id, b.jXE.STREAM_SETTINGS)
    }, [R]);
  if (null == n || null == R) return null;
  let x = P;
  return t || A || (x = w), <a.yRy targetElementRef={I} position={"top"} renderPopout={e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(g.Z, {
        children: (0, r.jsx)(d.Z, {
          channel: R,
          currentUser: p.default.getCurrentUser(),
          activeStreams: D,
          onClose: t,
          showReportOption: true,
          handleGoLive: L,
          onInteraction: (0, c.u)("ManageStreamsButton", null != T ? T : u, {
            entrypoint: y.A5.OTHER_BUTTON
          })
        })
      })
    }} animation={a.yRy.Animation.FADE}>{e => (0, r.jsx)(E.Z, S(N(S({}, e), {
      buttonRef: I,
      label: v.intl.string(v.t.tmiYpK),
      iconComponent: x,
      onClick: t => {
        (null != T || null != u) && (0, l.v)(null != T ? T : u, l.d.STREAM_SETTINGS), null == e || e.onClick(t)
      }
    }), h))}</a.yRy>
}