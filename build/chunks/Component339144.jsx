/** Chunk was on 91488 **/
/** chunk id: 339144, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => S,
  y: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk24124 = require("./24124.js"),
  Chunk636449 = require("./636449.js"),
  Chunk620662 = require("./620662.js"),
  Chunk513202 = require("./513202.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk522651 = require("./522651.js"),
  Chunk311352 = require("./311352.jsx"),
  Chunk668519 = require("./668519.js"),
  Chunk562224 = require("./562224.js"),
  Chunk803647 = require("./803647.js"),
  Chunk131704 = require("./131704.js"),
  Chunk944486 = require("./944486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk870569 = require("./870569.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk258628 = require("./258628.js");

function E(e, t, n) {
  return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === v.IIU.PLAYING && (0, u.Z)(t, v.xjy.JOIN))
}
let S = Chunk647438.memo(function(e) {
  let t, l, u, S, {
      stream: P,
      canGoLive: I,
      guildId: N,
      isStreaming: w,
      channel: Z,
      canStream: T,
      runningGame: A,
      embeddedActivity: R,
      activity: D,
      application: M,
      analyticsContext: L
    } = e,
    {
      skipModalForGame: k,
      showRefreshedGoLiveModal: U
    } = (0, g.a)({
      location: "Activity Panel",
      autoTrackExposure: false
    }),
    {
      parentAnalyticsLocation: G
    } = (0, p.ZP)(),
    B = E(M, D, R),
    F = i.useCallback(() => {
      o()(null != D, "Received null activity"), (0, h.v)(G, h.d.INVITE), _.default.track(v.rMx.OPEN_MODAL, {
        type: "Send Join Invite",
        application_id: D.application_id,
        location: L.location
      }), (0, s.h7)(D, false)
    }, [D, L, G]),
    V = i.useCallback((e, t) => () => {
      (0, h.v)(G, h.d.LEAVE_ACTIVITY), d.Z.leaveActivity({
        location: t,
        applicationId: e,
        showFeedback: true
      })
    }, [G]),
    H = i.useCallback(() => {
      (0, b.Z)(P)
    }, [P]),
    z = i.useCallback(() => {
      let e = null != Z && (0, O.vd)(Z.type) ? Z : null,
        t = null != e ? e.getGuildId() : N;
      if (k && null != A && null != y.Z.getVoiceChannelId()) {
        (0, g.s)("Activity Panel"), (0, m.Z)(A.pid);
        return
      }(0, a.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("46746"), n.e("33641")]).then(n.bind(n, 60594));
        return n => {
          var i, l;
          return (0, r.jsx)(e, (i = function(e) {
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
          }({}, n), l = l = {
            sourcePID: null == A ? true : A.pid,
            selectSource: !!U && null != y.Z.getVoiceChannelId(),
            guildId: t,
            analyticsLocation: v.Sbl.ACTIVITY_PANEL
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
          }), i))
        }
      })
    }, [Z, N, A, U, k]),
    W = (null != A || null == R || (0, c.R)()) && (w || I) ? (w ? (t = false, l = () => {
      H(), (0, h.v)(G, h.d.STREAM, false)
    }, u = a.g5r, S = x.intl.string(x.t.S5anIS)) : T ? (t = false, l = () => {
      z(), (0, h.v)(G, h.d.STREAM, true)
    }, u = a.hGI, S = null != A ? x.intl.formatToPlainString(x.t.AB5gT0, {
      game: A.name
    }) : x.intl.string(x.t.FeUKeH)) : (t = true, l = null, u = a.hGI, S = null != Z && (0, O.vd)(Z.type) ? x.intl.string(x.t.uQn9Bw) : null != N ? x.intl.string(x.t.fBXEoK) : x.intl.string(x.t.n3feND)), (0, r.jsx)("div", {
      className: C.panelButtonContainer,
      children: (0, r.jsx)(j.Z, {
        tooltipText: S,
        disabled: t,
        onClick: l,
        icon: u
      })
    })) : null,
    K = B && null == R ? (0, r.jsx)(j.Z, {
      tooltipText: x.intl.string(x.t["hC/Ze3"]),
      onClick: F,
      icon: a.ejJ
    }) : null,
    Y = null == R ? null : (0, r.jsx)(j.Z, {
      tooltipText: x.intl.string(x.t["R/FK4O"]),
      onClick: V(R.applicationId, R.location),
      icon: a.PBZ
    }),
    q = null == P ? null : (0, r.jsx)(f.Z, {});
  return null == W && null == K && null == Y ? null : (0, r.jsxs)("div", {
    className: C.actions,
    children: [W, K, null != Y ? Y : q]
  })
})