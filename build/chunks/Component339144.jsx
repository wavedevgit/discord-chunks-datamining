/** Chunk was on 30437 **/
/** chunk id: 339144, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => Z,
  y: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk144269 = require("./144269.jsx"),
  Chunk907862 = require("./907862.js"),
  Chunk481060 = require("./481060.js"),
  Chunk24124 = require("./24124.js"),
  Chunk636449 = require("./636449.js"),
  Chunk620662 = require("./620662.js"),
  Chunk513202 = require("./513202.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk535139 = require("./535139.js"),
  Chunk522651 = require("./522651.js"),
  Chunk311352 = require("./311352.jsx"),
  Chunk48131 = require("./48131.js"),
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

function N(e, t, n) {
  if (null == e) returnfalse;
  if (null != n) return n.applicationId === e.id;
  if (null != t) {
    var r;
    return (t.application_id === e.id || (null == (r = e.linkedGames) ? true : r.some(e => e.id === t.application_id))) && t.type === S.IIU.PLAYING && (0, p.Z)(t, S.xjy.JOIN)
  }
  returnfalse
}
let Z = Chunk647438.memo(function(e) {
    var t;
    let l, a, p, Z, {
        stream: w,
        canGoLive: A,
        guildId: R,
        isStreaming: D,
        channel: L,
        canStream: M,
        runningGame: k,
        embeddedActivity: G,
        frame: U,
        activity: B,
        application: F,
        analyticsContext: V,
        inviteButtonRef: H,
        accountLinkButtonRef: z
      } = e,
      {
        showRefreshedGoLiveModal: W
      } = (0, O.a)({
        location: "Activity Panel",
        autoTrackExposure: false
      }),
      {
        parentAnalyticsLocation: K
      } = (0, h.ZP)(),
      Y = N(F, B, G),
      q = i.useCallback(() => {
        var e;
        o()(null != B, "Received null activity"), x.default.track(S.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
          action_type: "invite_to_game",
          game_id: null != (e = null == k ? true : k.id) ? e : null,
          application_id: B.application_id
        }), (0, m.v)(K, m.d.INVITE), x.default.track(S.rMx.OPEN_MODAL, {
          type: "Send Join Invite",
          application_id: B.application_id,
          location: V.location
        }), (0, u.h7)(B, false)
      }, [B, V, K, k]),
      X = i.useCallback((e, t) => () => {
        (0, m.v)(K, m.d.LEAVE_ACTIVITY), f.Z.leaveActivity({
          location: t,
          applicationId: e,
          showFeedback: true
        })
      }, [K]),
      Q = i.useCallback(e => () => {
        (0, m.v)(K, m.d.LEAVE_ACTIVITY), _.Z.stopFrame({
          applicationId: e
        })
      }, [K]),
      J = i.useCallback(() => {
        (0, y.Z)(w)
      }, [w]),
      $ = i.useCallback(() => {
        let e = null != L && (0, j.vd)(L.type) ? L : null,
          t = null != e ? e.getGuildId() : R;
        (0, c.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("4093"), n.e("47863"), n.e("33641")]).then(n.bind(n, 60594));
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
              sourcePID: null == k ? true : k.pid,
              selectSource: !!W && null != v.Z.getVoiceChannelId(),
              guildId: t,
              analyticsLocation: S.Sbl.ACTIVITY_PANEL
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
      }, [L, R, k, W]),
      {
        canStartAuthorization: ee,
        startAuthorization: et,
        hasAlreadyLinked: en,
        connectionApp: er
      } = (0, g.F)(F, {
        allowedFlows: [g.r.RPC, g.r.WEB]
      }),
      ei = C.Z.useConfig({
        location: "ActivityActions"
      }).enabled,
      el = i.useRef(null),
      [eo, ea] = i.useState(false);
    i.useEffect(() => () => {
      null != el.current && clearTimeout(el.current)
    }, []), i.useEffect(() => {
      en && (ea(false), null != el.current && (clearTimeout(el.current), el.current = null))
    }, [en]);
    let es = (null != k || null == G || (0, d.R)()) && (D || A) ? (D ? (l = false, a = () => {
        J(), (0, m.v)(K, m.d.STREAM, false)
      }, p = c.g5r, Z = I.intl.string(I.t.S5anIc)) : M ? (l = false, a = () => {
        $(), (0, m.v)(K, m.d.STREAM, true)
      }, p = c.hGI, Z = null != k ? I.intl.formatToPlainString(I.t.AB5gTy, {
        game: k.name
      }) : I.intl.string(I.t.FeUKeA)) : (l = true, a = null, p = c.hGI, Z = null != L && (0, j.vd)(L.type) ? I.intl.string(I.t.uQn9B8) : null != R ? I.intl.string(I.t.fBXEoJ) : I.intl.string(I.t.n3feNG)), (0, r.jsx)("div", {
        className: P.panelButtonContainer,
        children: (0, r.jsx)(E.Z, {
          tooltipText: Z,
          disabled: l,
          onClick: a,
          icon: p
        })
      })) : null,
      ec = Y && null == G ? (0, r.jsx)(E.Z, {
        ref: H,
        tooltipText: I.intl.string(I.t["hC/Zey"]),
        onClick: q,
        icon: c.ejJ
      }) : null,
      eu = null == G ? null : (0, r.jsx)(E.Z, {
        tooltipText: I.intl.string(I.t["R/FK4A"]),
        onClick: X(G.applicationId, G.location),
        icon: c.PBZ
      }),
      ed = null == U ? null : (0, r.jsx)(E.Z, {
        tooltipText: I.intl.string(I.t["R/FK4A"]),
        onClick: Q(U.applicationId),
        icon: c.PBZ
      }),
      ep = null == w ? null : (0, r.jsx)(b.Z, {}),
      ef = ei && ee && !en ? (0, r.jsx)(T, {
        runningGame: k,
        startAuthorization: () => {
          ea(true), null != el.current && clearTimeout(el.current), el.current = setTimeout(() => {
            ea(false)
          }, 9e4), et()
        },
        connectionApp: er,
        ref: z
      }) : null,
      eh = ei && ee && !en ? (0, r.jsx)(s.J2, {
        title: I.intl.string(I.t.ULvRFd),
        body: I.intl.string(I.t["HJJDr+"]),
        targetElementRef: z,
        position: "top",
        align: "center",
        caretConfig: {
          align: "center"
        },
        shouldShow: eo,
        onRequestClose: () => {
          ea(false), null != el.current && (clearTimeout(el.current), el.current = null)
        }
      }) : null;
    return null == es && null == ec && null == eu && null == ed && null == ef ? null : (0, r.jsxs)("div", {
      className: P.actions,
      children: [null != ef ? ef : ec, es, null != (t = null != eu ? eu : ed) ? t : ep, eh]
    })
  }),
  T = Chunk647438.forwardRef(function(e, t) {
    let {
      runningGame: n,
      startAuthorization: i,
      connectionApp: l
    } = e;
    return (0, r.jsx)(E.Z, {
      ref: t,
      onClick: () => {
        var e, t;
        x.default.track(S.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
          action_type: "link_account",
          game_id: null != (e = null == n ? true : n.id) ? e : null,
          application_id: null != (t = null == l ? true : l.id) ? t : null
        }), i()
      },
      icon: a.u,
      tooltipText: I.intl.string(I.t.sbdnpw)
    })
  })