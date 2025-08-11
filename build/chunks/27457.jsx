/** Chunk was on web.js **/
/** chunk id: 27457, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BP: () => ed,
  ZP: () => ef
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk410575 = require("./410575.js"),
  Chunk812206 = require("./812206.js"),
  Chunk835473 = require("./835473.js"),
  Chunk414910 = require("./414910.js"),
  Chunk415635 = require("./415635.js"),
  Chunk7284 = require("./7284.js"),
  Chunk649739 = require("./649739.js"),
  Chunk37091 = require("./37091.js"),
  Chunk6572 = require("./6572.jsx"),
  Chunk352978 = require("./352978.js"),
  Chunk936847 = require("./936847.js"),
  Chunk512384 = require("./512384.js"),
  Chunk210975 = require("./210975.js"),
  Chunk763296 = require("./763296.js"),
  Chunk695346 = require("./695346.js"),
  Chunk937995 = require("./937995.js"),
  Chunk456631 = require("./456631.js"),
  Chunk274459 = require("./274459.js"),
  Chunk314897 = require("./314897.js"),
  Chunk857192 = require("./857192.js"),
  Chunk77498 = require("./77498.js"),
  Chunk131951 = require("./131951.js"),
  Chunk158776 = require("./158776.js"),
  Chunk979651 = require("./979651.js"),
  Chunk574254 = require("./574254.js"),
  Chunk374129 = require("./374129.js"),
  Chunk639351 = require("./639351.js"),
  Chunk584729 = require("./584729.js"),
  Chunk334374 = require("./334374.js"),
  Chunk849171 = require("./849171.js"),
  Chunk607187 = require("./607187.js"),
  Chunk833519 = require("./833519.js"),
  Chunk462061 = require("./462061.js"),
  Chunk623825 = require("./623825.js"),
  Chunk839662 = require("./839662.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk524484 = require("./524484.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.js"),
  Chunk519417 = require("./519417.js");

function $(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      $(e, t, n[t])
    })
  }
  return e
}

function et(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function en(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : et(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function er(e, t) {
  if (null == e) return {};
  var n, r, i = ei(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function ei(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let eo = [Chunk354459.fO.ACTIVITY],
  ea = Chunk73800.memo(e => {
    var t, n, o, l, c;
    let {
      participant: g,
      onDoubleClick: k,
      onContextMenu: j,
      onClick: U,
      onMouseDown: Y,
      onKeyDown: $,
      className: et,
      style: er,
      containerStyle: ei,
      channel: ea,
      width: es,
      inPopout: el,
      onVideoResize: ec,
      inCall: ed = false,
      selected: ef = false,
      noBorder: ep = false,
      noVideoRender: eh = false,
      focused: em = false,
      blocked: eg = false,
      ignored: eE = false,
      fit: eb = O.L.CONTAIN,
      paused: ey = false,
      pulseSpeakingIndicator: eO = false,
      forceIdle: ev = false,
      inOverlayPopout: eI = false
    } = e, eT = i.useContext(N.h9) || ev, [eS, eA] = i.useState(false), eN = A.Sb.useSetting(), eC = (0, s.e7)([w.default], () => w.default.isStreamInfoOverlayEnabled), [eR, eP] = i.useState(false), ew = (0, s.e7)([P.default], () => P.default.getId()), eD = g.type === z.fO.ACTIVITY ? null : g.user, eL = null != (o = null == eD ? true : eD.id) ? o : null, [ex] = (0, p.Z)(g.type === z.fO.ACTIVITY ? [g.applicationId] : []), eM = (0, s.e7)([b.Z], () => b.Z.getEnabled()), ek = (0, s.e7)([L.Z], () => null != eL && L.Z.isLocalVideoDisabled(eL, (0, h.Z)(g.type)), [eL, g.type]), ej = (0, s.e7)([L.Z], () => null != eL ? L.Z.getVideoToggleState(eL, (0, h.Z)(g.type)) : K.ZUi.NONE, [eL, g.type]), eU = ej === K.ZUi.AUTO_PROBING, {
      speaking: eG,
      ringing: eB,
      hasVideo: eZ
    } = (0, W.Z)(g, ew), eF = (0, s.e7)([S.Z], () => null !== eL && S.Z.isUserPlayingSounds(eL), [eL]), eV = e_(ew, g, ea.getGuildId()), eH = g.type === z.fO.STREAM && eL === ew, eY = (0, s.e7)([C.Z], () => g.type === z.fO.USER && null != eL ? C.Z.getEffectForUserId(eL) : null), eW = (0, s.e7)([M.Z], () => M.Z.getVoicePlatformForChannel(ea.id, null != eL ? eL : K.lds)), {
      showGameIcon: eK
    } = E.ZP.useExperiment({
      location: "voice_users"
    }, {
      autoTrackExposure: false
    }), ez = (0, s.e7)([x.Z], () => eK && null != eL ? x.Z.findActivity(eL, e => null != e.application_id && e.type === K.IIU.PLAYING) : null, [eK, eL]), eq = (0, s.e7)([D.Z], () => (null == ez ? true : ez.application_id) != null ? D.Z.getDetectableGame(ez.application_id) : null), eX = (0, s.e7)([_.Z], () => null != eq && (null == ez ? true : ez.application_id) != null ? _.Z.getApplication(null == ez ? true : ez.application_id) : true), eQ = (0, T.wV)({
      userId: eL,
      channelId: ea.id
    }), eJ = (0, T.zU)({
      streamKey: g.type === z.fO.STREAM ? g.id : null,
      channelId: ea.id
    }), e$ = i.useMemo(() => g.type === z.fO.STREAM ? null != eJ && eJ : g.type === z.fO.USER && null != eQ && eQ, [eJ, eQ, g.type]);
    i.useEffect(() => {
      eA(em)
    }, [em]);
    let e0 = i.useCallback(() => {
        null != eL && d.Z.toggleLocalMute(eL, X.Yn.STREAM)
      }, [eL]),
      e1 = i.useCallback(e => {
        null == U || U(g, e)
      }, [U, g]),
      e2 = i.useCallback(e => {
        null == k || k(g, e)
      }, [k, g]),
      e3 = i.useCallback((e, t, n) => {
        null == j || j(g, e, t, n)
      }, [j, g]),
      e5 = () => {
        eP(true)
      },
      e4 = () => {
        eP(false)
      },
      e6 = null,
      e8 = null,
      e7 = "";
    switch (g.type) {
      case z.fO.STREAM:
        e6 = <V.Z participant={g} selected={ef} width={es} fit={eb} onVideoResize={ec} paused={ey} inPopout={el} focused={em} inOverlayPopout={eI} />, e8 = <V._ participant={g} selected={ef} width={es} focused={em} idle={eT} premiumIndicator={false} />, e7 = Q.intl.formatToPlainString(Q.t.gHPz3d, {
          streamerName: g.user.username
        });
        break;
      case z.fO.USER:
        e6 = <H.Z channel={ea} inCall={ed} participant={g} fit={eb} onVideoResize={ec} paused={ey} selected={ef} width={es} blocked={eg} ignored={eE} noVideoRender={eh || eU} pulseSpeakingIndicator={eO} inOverlayPopout={eI} />, e8 = <H.T participant={g} channelId={ea.id} />, e7 = Q.intl.formatToPlainString(Q.t["iC/x/f"], {
          username: g.user.username
        });
        break;
      case z.fO.ACTIVITY:
        e6 = <Z.ZP interactible={em} participant={g} selected={ef} channel={ea} width={es} />, e7 = Q.intl.formatToPlainString(Q.t.YCvOsL, {
          activityName: null == ex ? true : ex.name
        });
        break;
      case z.fO.HIDDEN_STREAM:
        e6 = <V.Z participant={g} selected={ef} width={es} fit={eb} onVideoResize={ec} paused={ey} inPopout={el} focused={em} inOverlayPopout={eI} />
    }
    let e9 = i.useRef(null),
      te = g.type === z.fO.STREAM ? u.pzj : u.Odl;
    return <f.Z section={K.jXE.VOICE_CHANNEL_TILE}><div className={a()(J.wrapper, {
          [J.ringing]: eB
        }, et)} style={ei} onMouseEnter={e5} onMouseLeave={e4}><I.Z shakeLocation={q.oZ.VOICE_USER} isShaking={eG} className={J.tile}>{<F.Z ref={e9} className={a()(J.tile, {
              [J.noBorder]: ep,
              [J.noInteraction]: null == U,
              [J.idle]: eT
            })} noBorder={ep} style={er} participantUserId={eL}><u.kL8 aria-label={e7} className={J.tileChild} onDoubleClick={e2} onContextMenu={e => e3(e, g.type === z.fO.STREAM)} onClick={e1} onMouseDown={Y} onKeyDown={$} focusProps={{
                offset: 1
              }}>{null != eY && null != eL ? <R.Z voiceChannelEffect={eY} onComplete={() => (0, C.H)(eL)} userId={eL} /> : null}{g.type === z.fO.USER ? <div className={J.voiceChannelEffectsContainer}><m.Z userId={eL} channelId={ea.id} guildId={ea.getGuildId()} containerDimensions={{
                    width: null != (l = null == e9 || null == (t = e9.current) ? true : t.clientWidth) ? l : 0,
                    height: null != (c = null == e9 || null == (n = e9.current) ? true : n.clientHeight) ? c : 0
                  }} /></div> : null}{e6}{ep ? null : <div className={J.indicators}>{e8}</div>}{ef ? <div className={J.selectedScreen}><te size={"md"} color={"currentColor"} className={J.selectedIcon} /></div> : null}{eo.includes(g.type) ? null : <eu{...en(ee({
                focused: em,
                width: es,
                inCall: ed,
                participantType: g.type,
                hasVideo: null != eZ && eZ
              }, eV), {
                idle: eT,
                platform: eW,
                title: (0, G.Z)(ea, g),
                blocked: eg,
                ignored: eE,
                localVideoDisabled: ek,
                videoToggleState: ej,
                hideAudioIcon: eH,
                onContextMenu: e3,
                onToggleMute: e0,
                participantUserId: eL,
                participantDisplayNameStyles: null == eD ? true : eD.displayNameStyles,
                application: eX,
                secureFramesVerified: e$,
                isHovered: eR
              })} />}{g.type === z.fO.USER && eM ? <y.Z userId={g.id} channelId={ea.id} /> : null}{ed && !ep ? <div className={a()(J.border, {
                  [J.voiceChannelEffect]: !em && (eF || null != eY),
                  [J.speaking]: eG && !em && !eF
                })} /> : null}</u.kL8></F.Z>}{eN && eC && eR && <B.Z currentUserId={ew} participant={g} />}{<v.Z isFiring={eS} callTileRef={e9.current} />}</I.Z></div></f.Z>
  });

function es(e) {
  let {
    participantType: t,
    platform: n,
    className: i
  } = e;
  if (t === z.fO.STREAM) return n === z.wR.XBOX ? <U.Z className={i} /> : <u.pzj size={"md"} color={"currentColor"} className={i} />;
  switch (n) {
    case z.wR.MOBILE:
      return <u.AtH size={"xs"} color={"currentColor"} className={i} />;
    case z.wR.XBOX:
      return <U.Z className={i} />;
    case z.wR.PLAYSTATION:
      return <j.Z className={i} />;
    default:
      return null
  }
}

function el(e) {
  let {
    localMuted: t,
    serverMuted: n,
    serverDeafened: r,
    deafened: i,
    muted: o
  } = e;
  return r ? u.Vm4 : n ? u.v0G : i ? u.wE8 : t ? u.v0G : o ? u.nRN : null
}

function ec(e) {
  let {
    icon: t,
    tooltipText: n,
    hideWhenInactive: i,
    onClick: o,
    compact: s
  } = e;
  return <u.ua7 text={n}>{e => {
      var {
        onClick: n
      } = e, l = er(e, ["onClick"]);
      return (0, r.jsx)(c.zx, en(ee({}, l), {
        onClick: e => {
          e.stopPropagation(), null == n || n(), o(e)
        },
        onMouseDown: e => e.preventDefault(),
        color: c.Tt.CUSTOM,
        size: c.Ph.ICON,
        className: a()(J.overlayButton, {
          [J.hideWhenInactive]: i,
          [J.compact]: s
        }),
        innerClassName: J.overlayButtonInner,
        children: (0, r.jsx)(t, {
          size: s ? "xs" : "refresh_sm",
          color: "currentColor"
        })
      }))
    }}</u.ua7>
}
ea.displayName = "CallTile";
let eu = Chunk73800.memo(e => {
  let {
    idle: t,
    title: n,
    width: o,
    focused: c,
    videoToggleState: d,
    blocked: f,
    ignored: _,
    participantType: p,
    participantUserId: m,
    participantDisplayNameStyles: E,
    platform: b,
    secureFramesVerified: y,
    onContextMenu: O,
    muted: v,
    deafened: I,
    localMuted: T,
    serverMuted: S,
    serverDeafened: A,
    hasVideo: N,
    hideAudioIcon: C,
    onToggleMute: R
  } = e, P = (0, s.e7)([L.Z], () => null != m && L.Z.isLocalVideoAutoDisabled(m, (0, h.Z)(p)), [m, p]), w = (0, g.j)({
    displayNameStyles: E
  }), D = () => P || d === K.ZUi.AUTO_PROBING ? t ? <div className={J.status}><u.Amn size={"md"} color={"currentColor"} /></div> : <div className={a()(J.overlayTitle, J.videoDisabledTitle)}>{<div className={J.status}><u.Amn size={"md"} color={"currentColor"} /></div>}{<u.Text variant={"text-sm/normal"} className={J.overlayTitleText}>{Q.intl.string(Q.t.m2Hyj4)}</u.Text>}</div> : null, x = (0, Y.N)(o), M = (0, Y.K)(o), [j, U] = i.useState(false);
  i.useEffect(() => {
    let e = false,
      t = () => {
        e !== k.Z.isOpen() && ((e = k.Z.isOpen()) || U(false))
      };
    return k.Z.addChangeListener(t), () => k.Z.removeChangeListener(t)
  }, []);
  let G = e => {
      e.stopPropagation(), U(true), O(e, true, z.A5.THREE_DOT)
    },
    B = !C && p === z.fO.STREAM && N && (!M || T),
    Z = el({
      localMuted: T,
      serverMuted: S,
      serverDeafened: A,
      deafened: I,
      muted: v
    });
  return <div className={a()(J.overlayContainer, {
      [J.compact]: M
    })}>{<div className={a()(J.overlayTop, {
        [J.small]: o < 195
      })}>{D()}</div>}{!x && <div className={a()(J.overlayBottom, {
        [J.small]: o < 195
      })}>{<u.Text className={a()(J.experimentOverlayTitle, {
          [J.compact]: M
        })} color={"none"} variant={M ? "text-sm/normal" : "text-md/normal"}>{null != Z && p === z.fO.USER && <Z className={a()(J.experimentTitleIcon, {
            [J.compact]: M
          })} size={"xs"} color={"currentColor"} />}{f ? <div className={J.blocked}><u.t6m size={"lg"} className={J.blockedIcon} color={l.Z.unsafe_rawColors.RED_400.css} /></div> : null}{_ ? <div className={J.ignored}><u.kZF size={"lg"} className={J.blockedIcon} /></div> : null}{t ? null : <es participantType={p} platform={b} className={a()(J.experimentTitleIcon, {
            [J.compact]: M
          })} />}{null == n || "" === n || t ? null : <span className={a()(J.overlayTitleText, w)}>{n}</span>}{y && <u.ua7 text={Q.intl.string(Q.t.ZEem6O)}>{e => (0, r.jsx)(u.tQf, en(ee({}, e), {
            className: J.secureFramesIcon,
            size: "xs",
            color: l.Z.colors.HEADER_PRIMARY,
            "aria-label": Q.intl.string(Q.t.mR9cf3)
          }))}</u.ua7>}</u.Text>}{!c && <div className={J.overlayButtonContainer}>{<ec onClick={G} tooltipText={Q.intl.string(Q.t["+1H47u"])} icon={u.xhG} hideWhenInactive={!j} compact={M} />}{B && <ec onClick={R} tooltipText={T ? Q.intl.string(Q.t.YqAjX1) : Q.intl.string(Q.t["w4m94+"])} icon={T ? u.OyP : u.gj8} hideWhenInactive={!T && !j} compact={M} />}</div>}</div>}</div>
});
eu.displayName = "CallTileOverlay";
let ed = Chunk352978.L,
  ef = ea;

function e_(e, t, n) {
  var r, i, o, a;
  let l = t.type !== z.fO.ACTIVITY ? t.user.id : t.applicationId,
    c = (0, s.cj)([M.Z], () => {
      var e, t, r;
      let i = M.Z.getVoiceState(n, l);
      return {
        muted: null != (e = null == i ? true : i.mute) && e,
        deafened: null != (t = null == i ? true : i.deaf) && t,
        suppressed: null != (r = null == i ? true : i.suppress) && r,
        voiceChannelId: null == i ? true : i.channelId
      }
    }),
    u = (0, s.cj)([L.Z], () => {
      let n = (0, h.Z)(t.type);
      return e === l ? {
        muted: false,
        deafened: false
      } : {
        muted: L.Z.isLocalMute(l, n),
        localVideoDisabled: L.Z.isLocalVideoDisabled(l, n),
        localVideoAutoDisabled: L.Z.isLocalVideoAutoDisabled(l, n)
      }
    }, [e, t.type, l]);
  return {
    serverMuted: c.muted,
    serverDeafened: c.deafened,
    suppressed: c.suppressed,
    localMuted: u.muted,
    muted: null != (o = t.type === z.fO.USER && (null == (r = t.voiceState) ? true : r.isVoiceMuted())) && o,
    deafened: null != (a = t.type === z.fO.USER && (null == (i = t.voiceState) ? true : i.isVoiceDeafened())) && a
  }
}