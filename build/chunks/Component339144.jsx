/** Chunk was on 11160 **/
/** chunk id: 339144, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => E,
  y: () => C
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
  Chunk803647 = require("./803647.js"),
  Chunk131704 = require("./131704.js"),
  Chunk944486 = require("./944486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk870569 = require("./870569.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk258628 = require("./258628.js");

function C(e, t, n) {
  return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === v.IIU.PLAYING && (0, u.Z)(t, v.xjy.JOIN))
}
let E = Chunk647438.memo(function(e) {
  let t, l, u, E, {
      stream: S,
      canGoLive: P,
      guildId: I,
      isStreaming: N,
      channel: w,
      canStream: Z,
      runningGame: T,
      embeddedActivity: A,
      activity: R,
      application: D,
      analyticsContext: M
    } = e,
    {
      showRefreshedGoLiveModal: L
    } = (0, g.a)({
      location: "Activity Panel",
      autoTrackExposure: false
    }),
    {
      parentAnalyticsLocation: k
    } = (0, p.ZP)(),
    U = C(D, R, A),
    G = i.useCallback(() => {
      o()(null != R, "Received null activity"), (0, h.v)(k, h.d.INVITE), y.default.track(v.rMx.OPEN_MODAL, {
        type: "Send Join Invite",
        application_id: R.application_id,
        location: M.location
      }), (0, s.h7)(R, false)
    }, [R, M, k]),
    B = i.useCallback((e, t) => () => {
      (0, h.v)(k, h.d.LEAVE_ACTIVITY), d.Z.leaveActivity({
        location: t,
        applicationId: e,
        showFeedback: true
      })
    }, [k]),
    F = i.useCallback(() => {
      (0, m.Z)(S)
    }, [S]),
    V = i.useCallback(() => {
      let e = null != w && (0, b.vd)(w.type) ? w : null,
        t = null != e ? e.getGuildId() : I;
      (0, a.ZDy)(async () => {
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
            sourcePID: null == T ? true : T.pid,
            selectSource: !!L && null != O.Z.getVoiceChannelId(),
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
    }, [w, I, T, L]),
    H = (null != T || null == A || (0, c.R)()) && (N || P) ? (N ? (t = false, l = () => {
      F(), (0, h.v)(k, h.d.STREAM, false)
    }, u = a.g5r, E = j.intl.string(j.t.S5anIS)) : Z ? (t = false, l = () => {
      V(), (0, h.v)(k, h.d.STREAM, true)
    }, u = a.hGI, E = null != T ? j.intl.formatToPlainString(j.t.AB5gT0, {
      game: T.name
    }) : j.intl.string(j.t.FeUKeH)) : (t = true, l = null, u = a.hGI, E = null != w && (0, b.vd)(w.type) ? j.intl.string(j.t.uQn9Bw) : null != I ? j.intl.string(j.t.fBXEoK) : j.intl.string(j.t.n3feND)), (0, r.jsx)("div", {
      className: x.panelButtonContainer,
      children: (0, r.jsx)(_.Z, {
        tooltipText: E,
        disabled: t,
        onClick: l,
        icon: u
      })
    })) : null,
    z = U && null == A ? (0, r.jsx)(_.Z, {
      tooltipText: j.intl.string(j.t["hC/Ze3"]),
      onClick: G,
      icon: a.ejJ
    }) : null,
    W = null == A ? null : (0, r.jsx)(_.Z, {
      tooltipText: j.intl.string(j.t["R/FK4O"]),
      onClick: B(A.applicationId, A.location),
      icon: a.PBZ
    }),
    K = null == S ? null : (0, r.jsx)(f.Z, {});
  return null == H && null == z && null == W ? null : (0, r.jsxs)("div", {
    className: x.actions,
    children: [H, z, null != W ? W : K]
  })
})