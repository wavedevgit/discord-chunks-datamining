/** Chunk was on 63373 **/
/** chunk id: 27457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BP: () => es,
  ZP: () => ea
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk835473 = require("./835473.js"),
  Chunk414910 = require("./414910.js"),
  Chunk415635 = require("./415635.jsx"),
  Chunk386725 = require("./386725.js"),
  Chunk7284 = require("./7284.js"),
  Chunk649739 = require("./649739.js"),
  Chunk37091 = require("./37091.js"),
  Chunk6572 = require("./6572.jsx"),
  Chunk352978 = require("./352978.jsx"),
  Chunk936847 = require("./936847.jsx"),
  Chunk512384 = require("./512384.jsx"),
  Chunk210975 = require("./210975.js"),
  Chunk763296 = require("./763296.js"),
  Chunk695346 = require("./695346.js"),
  Chunk937995 = require("./937995.jsx"),
  Chunk456631 = require("./456631.js"),
  Chunk274459 = require("./274459.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk857192 = require("./857192.js"),
  Chunk77498 = require("./77498.js"),
  Chunk131951 = require("./131951.js"),
  Chunk158776 = require("./158776.js"),
  Chunk979651 = require("./979651.js"),
  Chunk574254 = require("./574254.js"),
  Chunk374129 = require("./374129.jsx"),
  Chunk639351 = require("./639351.jsx"),
  Chunk584729 = require("./584729.js"),
  Chunk334374 = require("./334374.jsx"),
  Chunk849171 = require("./849171.jsx"),
  Chunk607187 = require("./607187.jsx"),
  Chunk833519 = require("./833519.jsx"),
  Chunk462061 = require("./462061.jsx"),
  Chunk623825 = require("./623825.js"),
  Chunk839662 = require("./839662.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk524484 = require("./524484.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk7504 = require("./7504.js");
let et = [Chunk354459.fO.ACTIVITY],
  en = Chunk647438.memo(e => {
    var t, n, r, o, c, u, Z;
    let {
      participant: O,
      onDoubleClick: k,
      onContextMenu: U,
      onClick: z,
      onMouseDown: X,
      onKeyDown: en,
      className: el,
      style: ei,
      containerStyle: es,
      channel: ea,
      width: eo,
      inPopout: ec,
      onVideoResize: eu,
      inCall: ed = false,
      selected: ep = false,
      noBorder: ef = false,
      noVideoRender: em = false,
      focused: ev = false,
      blocked: eg = false,
      ignored: eh = false,
      fit: eZ = j.L.CONTAIN,
      paused: eO = false,
      pulseSpeakingIndicator: eI = false,
      forceIdle: ex = false,
      inOverlayPopout: ey = false
    } = e, ej = i.useContext(C.h9) || ex, [eE, eS] = i.useState(false), eT = _.Sb.useSetting(), eb = (0, a.e7)([A.default], () => A.default.isStreamInfoOverlayEnabled), [e_, eC] = i.useState(false), eN = (0, a.e7)([V.default], () => V.default.getId()), eR = O.type === J.fO.ACTIVITY ? null : O.user, eV = null != (r = null == eR ? true : eR.id) ? r : null, [eA] = (0, v.Z)(O.type === J.fO.ACTIVITY ? [O.applicationId] : []), ew = (0, a.e7)([x.Z], () => x.Z.getEnabled()), eM = (0, a.e7)([M.Z], () => null != eV && M.Z.isLocalVideoDisabled(eV, (0, g.Z)(O.type)), [eV, O.type]), eP = (0, a.e7)([M.Z], () => null != eV ? M.Z.getVideoToggleState(eV, (0, g.Z)(O.type)) : W.ZUi.NONE, [eV, O.type]), eD = eP === W.ZUi.AUTO_PROBING, {
      speaking: ek,
      ringing: eU,
      hasVideo: ez
    } = (0, K.Z)(O, eN), eL = (0, a.e7)([b.Z], () => null !== eV && b.Z.isUserPlayingSounds(eV), [eV]), eG = function(e, t, n) {
      var l, i, r, s;
      let o = t.type !== J.fO.ACTIVITY ? t.user.id : t.applicationId,
        c = (0, a.cj)([D.Z], () => {
          var e, t, l;
          let i = D.Z.getVoiceState(n, o);
          return {
            muted: null != (e = null == i ? true : i.mute) && e,
            deafened: null != (t = null == i ? true : i.deaf) && t,
            suppressed: null != (l = null == i ? true : i.suppress) && l,
            voiceChannelId: null == i ? true : i.channelId
          }
        }),
        u = (0, a.cj)([M.Z], () => {
          let n = (0, g.Z)(t.type);
          return e === o ? {
            muted: false,
            deafened: false
          } : {
            muted: M.Z.isLocalMute(o, n),
            localVideoDisabled: M.Z.isLocalVideoDisabled(o, n),
            localVideoAutoDisabled: M.Z.isLocalVideoAutoDisabled(o, n)
          }
        }, [e, t.type, o]);
      return {
        serverMuted: c.muted,
        serverDeafened: c.deafened,
        suppressed: c.suppressed,
        localMuted: u.muted,
        muted: null != (r = t.type === J.fO.USER && (null == (l = t.voiceState) ? true : l.isVoiceMuted())) && r,
        deafened: null != (s = t.type === J.fO.USER && (null == (i = t.voiceState) ? true : i.isVoiceDeafened())) && s
      }
    }(eN, O, ea.getGuildId()), eY = O.type === J.fO.STREAM && eV === eN, eB = (0, a.e7)([N.Z], () => O.type === J.fO.USER && null != eV ? N.Z.getEffectForUserId(eV) : null), eH = (0, a.e7)([D.Z], () => D.Z.getVoicePlatformForChannel(ea.id, null != eV ? eV : W.lds)), {
      showGameIcon: eF
    } = I.ZP.useExperiment({
      location: "voice_users"
    }, {
      autoTrackExposure: false
    }), eX = (0, a.e7)([P.Z], () => eF && null != eV ? P.Z.findActivity(eV, e => null != e.application_id && e.type === W.IIU.PLAYING) : null, [eF, eV]), eK = (0, a.e7)([w.Z], () => (null == eX ? true : eX.application_id) != null ? w.Z.getDetectableGame(eX.application_id) : null), eW = (0, a.e7)([m.Z], () => null != eK && (null == eX ? true : eX.application_id) != null ? m.Z.getApplication(null == eX ? true : eX.application_id) : true), eJ = (0, T.wV)({
      userId: eV,
      channelId: ea.id
    }), eq = (0, T.zU)({
      streamKey: O.type === J.fO.STREAM ? O.id : null,
      channelId: ea.id
    }), eQ = i.useMemo(() => O.type === J.fO.STREAM ? null != eq && eq : O.type === J.fO.USER && null != eJ && eJ, [eq, eJ, O.type]);
    i.useEffect(() => {
      eS(ev)
    }, [ev]);
    let e$ = i.useCallback(() => {
        null != eV && p.Z.toggleLocalMute(eV, Q.Yn.STREAM)
      }, [eV]),
      e0 = i.useCallback(e => {
        null == z || z(O, e)
      }, [z, O]),
      e7 = i.useCallback(e => {
        null == k || k(O, e)
      }, [k, O]),
      e1 = i.useCallback((e, t, n) => {
        null == U || U(O, e, t, n)
      }, [U, O]),
      e4 = null,
      e8 = null,
      e5 = "";
    switch (O.type) {
      case J.fO.STREAM:
        e4 = (0, l.jsx)(H.Z, {
          participant: O,
          selected: ep,
          width: eo,
          fit: eZ,
          onVideoResize: eu,
          paused: eO,
          inPopout: ec,
          focused: ev,
          inOverlayPopout: ey
        }), e8 = (0, l.jsx)(H._, {
          participant: O,
          selected: ep,
          width: eo,
          focused: ev,
          idle: ej,
          premiumIndicator: false
        }), e5 = $.intl.formatToPlainString($.t.gHPz3d, {
          streamerName: O.user.username
        });
        break;
      case J.fO.USER:
        e4 = (0, l.jsx)(F.Z, {
          channel: ea,
          inCall: ed,
          participant: O,
          fit: eZ,
          onVideoResize: eu,
          paused: eO,
          selected: ep,
          width: eo,
          blocked: eg,
          ignored: eh,
          noVideoRender: em || eD,
          pulseSpeakingIndicator: eI,
          inOverlayPopout: ey
        }), e8 = (0, l.jsx)(F.T, {
          participant: O,
          channelId: ea.id
        }), e5 = $.intl.formatToPlainString($.t["iC/x/f"], {
          username: O.user.username
        });
        break;
      case J.fO.ACTIVITY:
        e4 = (0, l.jsx)(Y.ZP, {
          interactible: ev,
          participant: O,
          selected: ep,
          channel: ea,
          width: eo
        }), e5 = $.intl.formatToPlainString($.t.YCvOsL, {
          activityName: null == eA ? true : eA.name
        });
        break;
      case J.fO.HIDDEN_STREAM:
        e4 = (0, l.jsx)(H.Z, {
          participant: O,
          selected: ep,
          width: eo,
          fit: eZ,
          onVideoResize: eu,
          paused: eO,
          inPopout: ec,
          focused: ev,
          inOverlayPopout: ey
        })
    }
    let e9 = i.useRef(null),
      e6 = O.type === J.fO.STREAM ? d.pzj : d.Odl;
    return (0, l.jsx)(f.Z, {
      section: W.jXE.VOICE_CHANNEL_TILE,
      children: (0, l.jsx)("div", {
        className: s()(ee.wrapper, {
          [ee.ringing]: eU
        }, el),
        style: es,
        onMouseEnter: () => {
          eC(true)
        },
        onMouseLeave: () => {
          eC(false)
        },
        children: (0, l.jsxs)(S.Z, {
          shakeLocation: q.oZ.VOICE_USER,
          isShaking: ek,
          className: ee.tile,
          children: [(0, l.jsx)(B.Z, {
            ref: e9,
            className: s()(ee.tile, {
              [ee.noBorder]: ef,
              [ee.noInteraction]: null == z,
              [ee.idle]: ej
            }),
            noBorder: ef,
            style: ei,
            participantUserId: eV,
            children: (0, l.jsxs)(d.kL8, {
              "aria-label": e5,
              className: ee.tileChild,
              onDoubleClick: e7,
              onContextMenu: e => e1(e, O.type === J.fO.STREAM),
              onClick: e0,
              onMouseDown: X,
              onKeyDown: en,
              focusProps: {
                offset: 1
              },
              children: [null != eB && null != eV ? (0, l.jsx)(R.Z, {
                voiceChannelEffect: eB,
                onComplete: () => (0, N.H)(eV),
                userId: eV
              }) : null, O.type === J.fO.USER ? (0, l.jsx)("div", {
                className: ee.voiceChannelEffectsContainer,
                children: (0, l.jsx)(h.Z, {
                  userId: eV,
                  channelId: ea.id,
                  guildId: ea.getGuildId(),
                  containerDimensions: {
                    width: null != (o = null == e9 || null == (t = e9.current) ? true : t.clientWidth) ? o : 0,
                    height: null != (c = null == e9 || null == (n = e9.current) ? true : n.clientHeight) ? c : 0
                  }
                })
              }) : null, e4, ef ? null : (0, l.jsx)("div", {
                className: ee.indicators,
                children: e8
              }), ep ? (0, l.jsx)("div", {
                className: ee.selectedScreen,
                children: (0, l.jsx)(e6, {
                  size: "md",
                  color: "currentColor",
                  className: ee.selectedIcon
                })
              }) : null, et.includes(O.type) ? null : (0, l.jsx)(er, (u = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    l = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                  }))), l.forEach(function(t) {
                    var l;
                    l = n[t], t in e ? Object.defineProperty(e, t, {
                      value: l,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = l
                  })
                }
                return e
              }({
                focused: ev,
                width: eo,
                inCall: ed,
                participantType: O.type,
                hasVideo: null != ez && ez
              }, eG), Z = Z = {
                idle: ej,
                platform: eH,
                title: (0, L.Z)(ea, O),
                blocked: eg,
                ignored: eh,
                localVideoDisabled: eM,
                videoToggleState: eP,
                hideAudioIcon: eY,
                onContextMenu: e1,
                onToggleMute: e$,
                participantUserId: eV,
                channel: ea,
                application: eW,
                secureFramesVerified: eQ,
                isHovered: e_
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(Z)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var l = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, l)
                }
                return n
              })(Object(Z)).forEach(function(e) {
                Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(Z, e))
              }), u)), O.type === J.fO.USER && ew ? (0, l.jsx)(y.Z, {
                userId: O.id,
                channelId: ea.id
              }) : null, ed && !ef ? (0, l.jsx)("div", {
                className: s()(ee.border, {
                  [ee.voiceChannelEffect]: !ev && (eL || null != eB),
                  [ee.speaking]: ek && !ev && !eL
                })
              }) : null]
            })
          }), eT && eb && e_ && (0, l.jsx)(G.Z, {
            currentUserId: eN,
            participant: O
          }), (0, l.jsx)(E.Z, {
            isFiring: eE,
            callTileRef: e9.current
          })]
        })
      })
    })
  });

function el(e) {
  let {
    participantType: t,
    platform: n,
    className: i
  } = e;
  if (t === J.fO.STREAM) return n === J.wR.XBOX ? (0, l.jsx)(z.Z, {
    className: i
  }) : (0, l.jsx)(d.pzj, {
    size: "md",
    color: "currentColor",
    className: i
  });
  switch (n) {
    case J.wR.MOBILE:
      return (0, l.jsx)(d.AtH, {
        size: "xs",
        color: "currentColor",
        className: i
      });
    case J.wR.XBOX:
      return (0, l.jsx)(z.Z, {
        className: i
      });
    case J.wR.PLAYSTATION:
      return (0, l.jsx)(U.Z, {
        className: i
      });
    default:
      return null
  }
}

function ei(e) {
  let {
    icon: t,
    tooltipText: n,
    hideWhenInactive: i,
    onClick: r,
    compact: a
  } = e;
  return (0, l.jsx)(c.u, {
    text: n,
    children: (0, l.jsx)(u.zx, {
      onClick: e => {
        e.stopPropagation(), r(e)
      },
      onMouseDown: e => e.preventDefault(),
      color: u.Tt.CUSTOM,
      size: u.Ph.ICON,
      className: s()(ee.overlayButton, {
        [ee.hideWhenInactive]: i,
        [ee.compact]: a
      }),
      innerClassName: ee.overlayButtonInner,
      children: (0, l.jsx)(t, {
        size: a ? "xs" : "refresh_sm",
        color: "currentColor"
      })
    })
  })
}
en.displayName = "CallTile";
let er = Chunk647438.memo(e => {
  let {
    idle: t,
    title: n,
    width: r,
    focused: u,
    videoToggleState: p,
    blocked: f,
    ignored: m,
    participantType: v,
    participantUserId: h,
    channel: I,
    platform: x,
    secureFramesVerified: y,
    onContextMenu: j,
    muted: E,
    deafened: S,
    localMuted: T,
    serverMuted: b,
    serverDeafened: _,
    hasVideo: C,
    hideAudioIcon: N,
    onToggleMute: R
  } = e, V = (0, a.e7)([M.Z], () => null != h && M.Z.isLocalVideoAutoDisabled(h, (0, g.Z)(v)), [h, v]), A = (0, Z.Z)({
    userId: h,
    guildId: I.getGuildId()
  }), w = (0, O.j)({
    displayNameStyles: A
  }), P = (0, X.N)(r), D = (0, X.K)(r), [U, z] = i.useState(false);
  i.useEffect(() => {
    let e = false,
      t = () => {
        e !== k.Z.isOpen() && ((e = k.Z.isOpen()) || z(false))
      };
    return k.Z.addChangeListener(t), () => k.Z.removeChangeListener(t)
  }, []);
  let L = !N && v === J.fO.STREAM && C && (!D || T),
    G = function(e) {
      let {
        localMuted: t,
        serverMuted: n,
        serverDeafened: l,
        deafened: i,
        muted: r
      } = e;
      return l ? d.Vm4 : n ? d.v0G : i ? d.wE8 : t ? d.v0G : r ? d.nRN : null
    }({
      localMuted: T,
      serverMuted: b,
      serverDeafened: _,
      deafened: S,
      muted: E
    });
  return (0, l.jsxs)("div", {
    className: s()(ee.overlayContainer, {
      [ee.compact]: D
    }),
    children: [(0, l.jsx)("div", {
      className: s()(ee.overlayTop, {
        [ee.small]: r < 195
      }),
      children: V || p === W.ZUi.AUTO_PROBING ? t ? (0, l.jsx)("div", {
        className: ee.status,
        children: (0, l.jsx)(d.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, l.jsxs)("div", {
        className: s()(ee.overlayTitle, ee.videoDisabledTitle),
        children: [(0, l.jsx)("div", {
          className: ee.status,
          children: (0, l.jsx)(d.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, l.jsx)(d.Text, {
          variant: "text-sm/normal",
          className: ee.overlayTitleText,
          children: $.intl.string($.t.m2Hyj4)
        })]
      }) : null
    }), !P && (0, l.jsxs)("div", {
      className: s()(ee.overlayBottom, {
        [ee.small]: r < 195
      }),
      children: [(0, l.jsxs)(d.Text, {
        className: s()(ee.experimentOverlayTitle, {
          [ee.compact]: D
        }),
        color: "none",
        variant: D ? "text-sm/normal" : "text-md/normal",
        children: [null != G && v === J.fO.USER && (0, l.jsx)(G, {
          className: s()(ee.experimentTitleIcon, {
            [ee.compact]: D
          }),
          size: "xs",
          color: "currentColor"
        }), f ? (0, l.jsx)("div", {
          className: ee.blocked,
          children: (0, l.jsx)(d.t6m, {
            size: "lg",
            className: ee.blockedIcon,
            color: o.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, m ? (0, l.jsx)("div", {
          className: ee.ignored,
          children: (0, l.jsx)(d.kZF, {
            size: "lg",
            className: ee.blockedIcon
          })
        }) : null, t ? null : (0, l.jsx)(el, {
          participantType: v,
          platform: x,
          className: s()(ee.experimentTitleIcon, {
            [ee.compact]: D
          })
        }), null == n || "" === n || t ? null : (0, l.jsx)("span", {
          className: s()(ee.overlayTitleText, w),
          children: n
        }), y && (0, l.jsx)(c.u, {
          text: $.intl.string($.t.ZEem6O),
          children: (0, l.jsx)(d.tQf, {
            className: ee.secureFramesIcon,
            size: "xs",
            color: o.Z.colors.HEADER_PRIMARY,
            "aria-label": $.intl.string($.t.mR9cf3)
          })
        })]
      }), !u && (0, l.jsxs)("div", {
        className: ee.overlayButtonContainer,
        children: [(0, l.jsx)(ei, {
          onClick: e => {
            e.stopPropagation(), z(true), j(e, true, J.A5.THREE_DOT)
          },
          tooltipText: $.intl.string($.t["+1H47u"]),
          icon: d.xhG,
          hideWhenInactive: !U,
          compact: D
        }), L && (0, l.jsx)(ei, {
          onClick: R,
          tooltipText: T ? $.intl.string($.t.YqAjX1) : $.intl.string($.t["w4m94+"]),
          icon: T ? d.OyP : d.gj8,
          hideWhenInactive: !T && !U,
          compact: D
        })]
      })]
    })]
  })
});
er.displayName = "CallTileOverlay";
let es = Chunk352978.L,
  ea = en