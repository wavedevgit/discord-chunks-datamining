/** Chunk was on 11160 **/
/** chunk id: 339144, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => N,
  y: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk144269 = require("./144269.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk24124 = require("./24124.js"),
  Chunk434650 = require("./434650.js"),
  Chunk636449 = require("./636449.js"),
  Chunk620662 = require("./620662.js"),
  Chunk513202 = require("./513202.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk20471 = require("./20471.js"),
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

function I(e, t, n) {
  if (null == e) returnfalse;
  if (null != n) return n.applicationId === e.id;
  if (null != t) {
    var r;
    return (t.application_id === e.id || (null == (r = e.linkedGames) ? true : r.some(e => e.id === t.application_id))) && t.type === E.IIU.PLAYING && (0, p.Z)(t, E.xjy.JOIN)
  }
  returnfalse
}
let N = Chunk647438.memo(function(e) {
    let t, l, a, u, {
        stream: p,
        canGoLive: g,
        guildId: x,
        isStreaming: N,
        channel: w,
        canStream: T,
        runningGame: A,
        embeddedActivity: R,
        activity: D,
        application: M,
        analyticsContext: L
      } = e,
      {
        showRefreshedGoLiveModal: k
      } = (0, O.a)({
        location: "Activity Panel",
        autoTrackExposure: false
      }),
      {
        parentAnalyticsLocation: U
      } = (0, h.ZP)(),
      G = I(M, D, R),
      B = i.useCallback(() => {
        var e;
        o()(null != D, "Received null activity"), j.default.track(E.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
          action_type: "invite_to_game",
          game_id: null != (e = null == A ? true : A.id) ? e : null,
          application_id: D.application_id
        }), (0, m.v)(U, m.d.INVITE), j.default.track(E.rMx.OPEN_MODAL, {
          type: "Send Join Invite",
          application_id: D.application_id,
          location: L.location
        }), (0, c.h7)(D, false)
      }, [D, L, U, A]),
      V = i.useCallback((e, t) => () => {
        (0, m.v)(U, m.d.LEAVE_ACTIVITY), f.Z.leaveActivity({
          location: t,
          applicationId: e,
          showFeedback: true
        })
      }, [U]),
      F = i.useCallback(() => {
        (0, y.Z)(p)
      }, [p]),
      H = i.useCallback(() => {
        let e = null != w && (0, _.vd)(w.type) ? w : null,
          t = null != e ? e.getGuildId() : x;
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
              sourcePID: null == A ? true : A.pid,
              selectSource: !!k && null != v.Z.getVoiceChannelId(),
              guildId: t,
              analyticsLocation: E.Sbl.ACTIVITY_PANEL
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
      }, [w, x, A, k]),
      z = (null != A || null == R || (0, d.R)()) && (N || g) ? (N ? (t = false, l = () => {
        F(), (0, m.v)(U, m.d.STREAM, false)
      }, a = s.g5r, u = S.intl.string(S.t.S5anIS)) : T ? (t = false, l = () => {
        H(), (0, m.v)(U, m.d.STREAM, true)
      }, a = s.hGI, u = null != A ? S.intl.formatToPlainString(S.t.AB5gT0, {
        game: A.name
      }) : S.intl.string(S.t.FeUKeH)) : (t = true, l = null, a = s.hGI, u = null != w && (0, _.vd)(w.type) ? S.intl.string(S.t.uQn9Bw) : null != x ? S.intl.string(S.t.fBXEoK) : S.intl.string(S.t.n3feND)), (0, r.jsx)("div", {
        className: P.panelButtonContainer,
        children: (0, r.jsx)(C.Z, {
          tooltipText: u,
          disabled: t,
          onClick: l,
          icon: a
        })
      })) : null,
      W = G && null == R ? (0, r.jsx)(C.Z, {
        tooltipText: S.intl.string(S.t["hC/Ze3"]),
        onClick: B,
        icon: s.ejJ
      }) : null,
      K = null == R ? null : (0, r.jsx)(C.Z, {
        tooltipText: S.intl.string(S.t["R/FK4O"]),
        onClick: V(R.applicationId, R.location),
        icon: s.PBZ
      }),
      Y = null == p ? null : (0, r.jsx)(b.Z, {}),
      q = (0, r.jsx)(Z, {
        runningGame: A,
        application: M
      });
    return null == z && null == W && null == K ? null : (0, r.jsxs)("div", {
      className: P.actions,
      children: [q, z, W, null != K ? K : Y]
    })
  }),
  Z = e => {
    let {
      runningGame: t,
      application: n
    } = e, {
      canStartAuthorization: i,
      startAuthorization: l,
      hasAlreadyLinked: o,
      connectionApp: s
    } = (0, g.F)(n), c = x.Z.useConfig({
      location: "ActivityActions"
    }).enabled, d = (0, u.O)(e => {
      if (e && null != s) {
        var n;
        j.default.track(E.rMx.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
          game_id: null != (n = null == t ? true : t.id) ? n : null,
          application_id: s.id
        })
      }
    });
    return c && i && !o ? (0, r.jsx)(C.Z, {
      ref: d,
      onClick: () => {
        var e, n;
        j.default.track(E.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
          action_type: "link_account",
          game_id: null != (e = null == t ? true : t.id) ? e : null,
          application_id: null != (n = null == s ? true : s.id) ? n : null
        }), l()
      },
      icon: a.u,
      tooltipText: S.intl.string(S.t.sbdnp6)
    }) : null
  }