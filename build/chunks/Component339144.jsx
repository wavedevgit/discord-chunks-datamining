/** Chunk was on 11160 **/
/** chunk id: 339144, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => D,
  y: () => R
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk144269 = require("./144269.jsx"),
  Chunk704215 = require("./704215.js"),
  Chunk907862 = require("./907862.js"),
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
  Chunk243778 = require("./243778.jsx"),
  Chunk668519 = require("./668519.js"),
  Chunk803647 = require("./803647.js"),
  Chunk667105 = require("./667105.jsx"),
  Chunk131704 = require("./131704.js"),
  Chunk944486 = require("./944486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381096 = require("./381096.js"),
  Chunk870569 = require("./870569.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk258628 = require("./258628.js");

function R(e, t, n) {
  if (null == e) returnfalse;
  if (null != n) return n.applicationId === e.id;
  if (null != t) {
    var r;
    return (t.application_id === e.id || (null == (r = e.linkedGames) ? true : r.some(e => e.id === t.application_id))) && t.type === N.IIU.PLAYING && (0, h.Z)(t, N.xjy.JOIN)
  }
  returnfalse
}
let D = Chunk647438.memo(function(e) {
    let t, l, a, p, {
        stream: h,
        canGoLive: D,
        guildId: L,
        isStreaming: k,
        channel: U,
        canStream: G,
        runningGame: B,
        embeddedActivity: V,
        activity: F,
        application: H,
        analyticsContext: z
      } = e,
      {
        showRefreshedGoLiveModal: W
      } = (0, v.a)({
        location: "Activity Panel",
        autoTrackExposure: false
      }),
      {
        parentAnalyticsLocation: K
      } = (0, m.ZP)(),
      Y = R(H, F, V),
      q = i.useCallback(() => {
        var e;
        o()(null != F, "Received null activity"), S.default.track(N.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
          action_type: "invite_to_game",
          game_id: null != (e = null == B ? true : B.id) ? e : null,
          application_id: F.application_id
        }), (0, O.v)(K, O.d.INVITE), S.default.track(N.rMx.OPEN_MODAL, {
          type: "Send Join Invite",
          application_id: F.application_id,
          location: z.location
        }), (0, d.h7)(F, false)
      }, [F, z, K, B]),
      X = i.useCallback((e, t) => () => {
        (0, O.v)(K, O.d.LEAVE_ACTIVITY), g.Z.leaveActivity({
          location: t,
          applicationId: e,
          showFeedback: true
        })
      }, [K]),
      Q = i.useCallback(() => {
        (0, j.Z)(h)
      }, [h]),
      J = i.useCallback(() => {
        let e = null != U && (0, C.vd)(U.type) ? U : null,
          t = null != e ? e.getGuildId() : L;
        (0, u.ZDy)(async () => {
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
              sourcePID: null == B ? true : B.pid,
              selectSource: !!W && null != E.Z.getVoiceChannelId(),
              guildId: t,
              analyticsLocation: N.Sbl.ACTIVITY_PANEL
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
      }, [U, L, B, W]),
      $ = i.useRef(null),
      {
        canStartAuthorization: ee,
        startAuthorization: et,
        hasAlreadyLinked: en,
        connectionApp: er
      } = (0, b.F)(H),
      ei = P.Z.useConfig({
        location: "ActivityActions"
      }).enabled,
      el = (null != B || null == V || (0, f.R)()) && (k || D) ? (k ? (t = false, l = () => {
        Q(), (0, O.v)(K, O.d.STREAM, false)
      }, a = u.g5r, p = T.intl.string(T.t.S5anIS)) : G ? (t = false, l = () => {
        J(), (0, O.v)(K, O.d.STREAM, true)
      }, a = u.hGI, p = null != B ? T.intl.formatToPlainString(T.t.AB5gT0, {
        game: B.name
      }) : T.intl.string(T.t.FeUKeH)) : (t = true, l = null, a = u.hGI, p = null != U && (0, C.vd)(U.type) ? T.intl.string(T.t.uQn9Bw) : null != L ? T.intl.string(T.t.fBXEoK) : T.intl.string(T.t.n3feND)), (0, r.jsx)("div", {
        className: A.panelButtonContainer,
        children: (0, r.jsx)(I.Z, {
          tooltipText: p,
          disabled: t,
          onClick: l,
          icon: a
        })
      })) : null,
      eo = Y && null == V ? (0, r.jsx)(I.Z, {
        ref: $,
        tooltipText: T.intl.string(T.t["hC/Ze3"]),
        onClick: q,
        icon: u.ejJ
      }) : null,
      ea = null == V ? null : (0, r.jsx)(I.Z, {
        tooltipText: T.intl.string(T.t["R/FK4O"]),
        onClick: X(V.applicationId, V.location),
        icon: u.PBZ
      }),
      es = null == h ? null : (0, r.jsx)(y.Z, {}),
      ec = ei && ee && !en ? (0, r.jsx)(M, {
        runningGame: B,
        startAuthorization: et,
        connectionApp: er
      }) : null,
      {
        isQuestBarEmpty: eu,
        hasLoadedQuestBar: ed
      } = (0, x.Ws)({
        location: w.dr.CONFLICT_CHECKS
      }),
      ep = (() => {
        let e = [];
        return Y && en && !(!ed || !eu) && e.push(s.z.ACCOUNT_LINK_INVITE_FRIENDS), (0, r.jsx)(_.ZP, {
          contentTypes: e,
          groupName: Z.R.ACCOUNT_NAME_ZONE,
          children: e => {
            let {
              visibleContent: t,
              markAsDismissed: n
            } = e;
            if (t === s.z.ACCOUNT_LINK_INVITE_FRIENDS) return (0, r.jsx)(c.J2, {
              title: T.intl.string(T.t["0l2pEh"]),
              body: T.intl.string(T.t.DSZUKy),
              targetElementRef: $,
              align: "right",
              shouldShow: true,
              onRequestClose: () => n(Z.L.USER_DISMISS),
              caretConfig: {
                align: "end"
              },
              actions: [{
                text: T.intl.string(T.t.YdkBCA),
                onClick: () => {
                  n(Z.L.TAKE_ACTION), q()
                }
              }]
            })
          }
        })
      })();
    return null == el && null == eo && null == ea && null == ec ? null : (0, r.jsxs)("div", {
      className: A.actions,
      children: [null != ec ? ec : eo, el, null != ea ? ea : es, ep]
    })
  }),
  M = e => {
    let {
      runningGame: t,
      startAuthorization: n,
      connectionApp: i
    } = e, l = (0, p.O)(e => {
      if (e && null != i) {
        var n;
        S.default.track(N.rMx.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
          game_id: null != (n = null == t ? true : t.id) ? n : null,
          application_id: i.id
        })
      }
    });
    return (0, r.jsx)(I.Z, {
      ref: l,
      onClick: () => {
        var e, r;
        S.default.track(N.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
          action_type: "link_account",
          game_id: null != (e = null == t ? true : t.id) ? e : null,
          application_id: null != (r = null == i ? true : i.id) ? r : null
        }), n()
      },
      icon: a.u,
      tooltipText: T.intl.string(T.t.sbdnp6)
    })
  }