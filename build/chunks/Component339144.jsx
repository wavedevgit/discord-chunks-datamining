/** Chunk was on 11160 **/
/** chunk id: 339144, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => P,
  y: () => S
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk144269 = require("./144269.jsx"),
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
  Chunk381096 = require("./381096.js"),
  Chunk870569 = require("./870569.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk258628 = require("./258628.js");

function S(e, t, n) {
  return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === x.IIU.PLAYING && (0, d.Z)(t, x.xjy.JOIN))
}
let P = Chunk647438.memo(function(e) {
  let t, l, d, P, {
      stream: I,
      canGoLive: N,
      guildId: Z,
      isStreaming: w,
      channel: T,
      canStream: A,
      runningGame: R,
      embeddedActivity: D,
      activity: M,
      application: L,
      analyticsContext: k
    } = e,
    {
      showRefreshedGoLiveModal: U
    } = (0, m.a)({
      location: "Activity Panel",
      autoTrackExposure: false
    }),
    {
      parentAnalyticsLocation: G
    } = (0, h.ZP)(),
    B = S(L, M, D),
    F = i.useCallback(() => {
      o()(null != M, "Received null activity"), (0, f.v)(G, f.d.INVITE), _.default.track(x.rMx.OPEN_MODAL, {
        type: "Send Join Invite",
        application_id: M.application_id,
        location: k.location
      }), (0, c.h7)(M, false)
    }, [M, k, G]),
    V = i.useCallback((e, t) => () => {
      (0, f.v)(G, f.d.LEAVE_ACTIVITY), p.Z.leaveActivity({
        location: t,
        applicationId: e,
        showFeedback: true
      })
    }, [G]),
    H = i.useCallback(() => {
      (0, b.Z)(I)
    }, [I]),
    z = i.useCallback(() => {
      let e = null != T && (0, O.vd)(T.type) ? T : null,
        t = null != e ? e.getGuildId() : Z;
      (0, s.ZDy)(async () => {
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
            sourcePID: null == R ? true : R.pid,
            selectSource: !!U && null != y.Z.getVoiceChannelId(),
            guildId: t,
            analyticsLocation: x.Sbl.ACTIVITY_PANEL
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
    }, [T, Z, R, U]),
    W = (null != R || null == D || (0, u.R)()) && (w || N) ? (w ? (t = false, l = () => {
      H(), (0, f.v)(G, f.d.STREAM, false)
    }, d = s.g5r, P = C.intl.string(C.t.S5anIS)) : A ? (t = false, l = () => {
      z(), (0, f.v)(G, f.d.STREAM, true)
    }, d = s.hGI, P = null != R ? C.intl.formatToPlainString(C.t.AB5gT0, {
      game: R.name
    }) : C.intl.string(C.t.FeUKeH)) : (t = true, l = null, d = s.hGI, P = null != T && (0, O.vd)(T.type) ? C.intl.string(C.t.uQn9Bw) : null != Z ? C.intl.string(C.t.fBXEoK) : C.intl.string(C.t.n3feND)), (0, r.jsx)("div", {
      className: E.panelButtonContainer,
      children: (0, r.jsx)(j.Z, {
        tooltipText: P,
        disabled: t,
        onClick: l,
        icon: d
      })
    })) : null,
    K = B && null == D ? (0, r.jsx)(j.Z, {
      tooltipText: C.intl.string(C.t["hC/Ze3"]),
      onClick: F,
      icon: s.ejJ
    }) : null,
    Y = null == D ? null : (0, r.jsx)(j.Z, {
      tooltipText: C.intl.string(C.t["R/FK4O"]),
      onClick: V(D.applicationId, D.location),
      icon: s.PBZ
    }),
    q = null == I ? null : (0, r.jsx)(g.Z, {}),
    X = v.Z.getConfig({
      location: "ActivityActions"
    }).enabled ? (0, r.jsx)(j.Z, {
      icon: a.u,
      tooltipText: C.intl.string(C.t.sbdnp6)
    }) : null;
  return null == W && null == K && null == Y ? null : (0, r.jsxs)("div", {
    className: E.actions,
    children: [X, W, K, null != Y ? Y : q]
  })
})