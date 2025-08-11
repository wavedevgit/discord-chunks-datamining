/** Chunk was on 49152 **/
/** chunk id: 856393, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ep,
  e: () => ed
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk393238 = require("./393238.js"),
  Chunk493773 = require("./493773.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk358221 = require("./358221.js"),
  Chunk414910 = require("./414910.js"),
  Chunk909820 = require("./909820.js"),
  Chunk493010 = require("./493010.jsx"),
  Chunk71127 = require("./71127.jsx"),
  Chunk185935 = require("./185935.js"),
  Chunk522651 = require("./522651.js"),
  Chunk788983 = require("./788983.js"),
  Chunk928518 = require("./928518.js"),
  Chunk703656 = require("./703656.js"),
  Chunk493754 = require("./493754.jsx"),
  Chunk937995 = require("./937995.js"),
  Chunk880831 = require("./880831.js"),
  Chunk73563 = require("./73563.jsx"),
  Chunk800965 = require("./800965.jsx"),
  Chunk107169 = require("./107169.jsx"),
  Chunk891551 = require("./891551.js"),
  Chunk314897 = require("./314897.js"),
  Chunk979696 = require("./979696.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk922482 = require("./922482.js"),
  Chunk431328 = require("./431328.js"),
  Chunk501655 = require("./501655.js"),
  Chunk427679 = require("./427679.js"),
  Chunk513449 = require("./513449.js"),
  Chunk153349 = require("./153349.jsx"),
  Chunk901434 = require("./901434.js"),
  Chunk302270 = require("./302270.jsx"),
  Chunk308177 = require("./308177.jsx"),
  Chunk700483 = require("./700483.jsx"),
  Chunk686468 = require("./686468.jsx"),
  Chunk801405 = require("./801405.jsx"),
  Chunk903108 = require("./903108.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk806176 = require("./806176.js");

function el(e) {
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
}
let ea = "HasBeenInStageChannel",
  es = (e, t) => () => {
    let n = e.getGuildId();
    null != n && null != t && (0, I.XU)(n, t), E.hP(e)
  },
  eo = () => {
    Chunk570140.Z.wait(() => Chunk788983.xv(Chunk981631.KJ3.CHANNEL_CALL_POPOUT))
  },
  ec = e => {
    (0, C.v)(m.Z.VOICE_CONTROL_TRAY, C.d.STAY_ON_TOP, e), E.hY(et.KJ3.CHANNEL_CALL_POPOUT, e)
  };

function eu(e) {
  let {
    channel: t,
    appContext: n,
    popoutOpen: l,
    popoutWindow: a,
    popoutWindowAlwaysOnTop: s,
    selectedParticipant: c
  } = e, {
    parentAnalyticsLocation: u
  } = (0, b.ZP)(), d = t.getGuildId(), h = (0, o.e7)([U.Z], () => U.Z.getMostRecentSelectedTextChannelId(d), [d]), p = D.default.getId(), f = !(0, o.e7)([y.Z], () => y.Z.isFullscreenInContext(n)) && (!F.isPlatformEmbedded || F.isPlatformEmbedded && H.ZP.supportsFeature(et.eRX.POPOUT_WINDOWS)), g = null != c && c.type !== en.fO.ACTIVITY && c.user.id !== p, m = i.useMemo(() => {
    var e;
    return null != (e = null == a ? true : a.window) ? e : window
  }, [a]), _ = (0, $.Z)({
    channel: t,
    appContext: n,
    popoutOpen: l,
    popoutWindow: a,
    currentWindow: m
  }), j = n === et.IlC.POPOUT && F.isPlatformEmbedded && H.ZP.supportsFeature(et.eRX.POPOUT_WINDOWS);
  return <r.Fragment>{g ? <A.Z context={(0, x.Z)(c.type)} userId={c.user.id} currentWindow={m} sliderClassName={ei.volumeSlider} location={u} /> : null}{j ? <w.Z popoutWindowAlwaysOnTop={s} onToggleStayOnTop={ec} /> : null}{f ? <R.Z popoutOpen={l} onOpenPopout={() => {
        (0, C.v)(u, C.d.POPOUT, true), es(t, h)()
      }} onClosePopout={() => {
        (0, C.v)(u, C.d.POPOUT, false), eo()
      }} /> : null}{_}</r.Fragment>
}

function ed(e) {
  let {
    channel: t
  } = e, n = (0, g.bp)(), i = (0, o.e7)([M.Z], () => M.Z.can(et.Plq.CREATE_INSTANT_INVITE, t)), l = (0, o.e7)([L.Z], () => L.Z.getGuild(t.guild_id)), a = (0, o.e7)([V.Z], () => V.Z.getStageInstanceByChannel(t.id)), s = i || (null == a ? true : a.invite_code) != null;
  return null != l && s ? <Z.Z size={u.zx.Sizes.MEDIUM} color={u.zx.Colors.TRANSPARENT} channel={t} appContext={n} className={ei.__invalid_leftTrayIcon} analyticsLocation={et.ZY5.GUILD_CHANNEL} /> : null
}

function eh(e) {
  var t, n;
  let l, {
      channel: c,
      toggleRequestToSpeakSidebar: u,
      showRequestToSpeakSidebar: d,
      popoutWindow: h,
      popoutWindowAlwaysOnTop: p,
      popoutOpen: f,
      chatOpen: x,
      idleProps: j
    } = e,
    {
      analyticsLocations: O
    } = (0, b.ZP)(m.Z.VOICE_CONTROL_TRAY),
    v = (0, g.bp)(),
    C = (0, o.e7)([U.Z], () => U.Z.getVoiceChannelId() === c.id, [c.id]),
    E = (0, o.e7)([M.Z], () => M.Z.can(et.Plq.CONNECT, c)),
    S = (0, B.w8)(c.id, W.pV.SPEAKER),
    I = (0, o.e7)([y.Z], () => y.Z.getSelectedParticipant(c.id)),
    Z = f && v !== et.IlC.POPOUT,
    [P, R] = i.useState(0),
    {
      isOnStartStageScreen: w
    } = (0, z.ZP)();
  (0, z.MV)(c);
  let A = (0, o.e7)([k.Z], () => k.Z.getToastsEnabled(c.id)),
    D = (0, ee.Z)(c) ? null != I ? "84px" : "124px" : null != I ? "0px" : "48px";
  return w && (D = "0px"), l = w ? <J.Z channel={c} onContinueClick={() => {
      (0, z.Ku)(false), C || (0, G.TM)(c)
    }} /> : C ? <Q.Z channel={c} onScroll={e => {
      let {
        scrollTop: t
      } = e.target;
      (0, s.debounce)(() => R(t), 1e3, {
        leading: true
      })()
    }} /> : <q.Z participants={S} channel={c} hasConnectPermission={E} />, <N.Z{...t = el({
    style: {
      height: "calc(100% - ".concat(D, ")"),
      paddingTop: D
    },
    disableGradients: !C || 0 === P && N.e.TOP,
    renderBottomCenter: () => C ? (0, r.jsx)(b.Gt, {
      value: O,
      children: (0, r.jsx)(X.Z, {
        channel: c,
        isOnStartStageScreen: w
      })
    }) : null,
    renderBottomRight: () => C ? (0, r.jsx)(b.Gt, {
      value: O,
      children: (0, r.jsx)(eu, {
        channel: c,
        appContext: v,
        popoutOpen: f,
        popoutWindow: h,
        popoutWindowAlwaysOnTop: p,
        selectedParticipant: I
      })
    }) : null,
    renderHeader: () => (0, r.jsx)(K.Z, {
      toggleRequestToSpeakSidebar: u,
      showRequestToSpeakSidebar: d,
      channel: c
    }),
    renderChatToasts: () => !A || x || Z ? null : (0, r.jsx)(_.ZP, {
      children: (0, r.jsx)(T.Z, {
        className: a()(ei.chatToasts, {
          [ei.rtsSidebarOpen]: d
        }),
        channelId: c.id
      })
    }),
    screenMessage: Z ? {
      mainText: er.intl.string(er.t.J5bXZW)
    } : null
  }, j), n = n = {
    children: !Z && l
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t} />
}

function ep(e) {
  let {
    channel: t
  } = e, [l, s] = i.useState(false), u = i.useCallback(() => {
    s(!l)
  }, [l, s]), {
    popoutWindow: h,
    popoutWindowAlwaysOnTop: x
  } = (0, o.cj)([S.Z], () => ({
    popoutWindow: S.Z.getWindow(et.KJ3.CHANNEL_CALL_POPOUT),
    popoutWindowAlwaysOnTop: S.Z.getIsAlwaysOnTop(et.KJ3.CHANNEL_CALL_POPOUT)
  })), C = null != h && !h.closed, {
    analyticsLocations: E
  } = (0, b.ZP)(m.Z.STAGE_CHANNEL_CALL), I = (0, g.bp)(), {
    chatOpen: Z,
    participantsListOpen: T
  } = (0, o.cj)([y.Z], () => ({
    chatOpen: y.Z.getChatOpen(t.id),
    participantsListOpen: y.Z.getParticipantsListOpen(t.id)
  }), [t.id]), N = (0, o.e7)([L.Z], () => L.Z.getGuild(t.guild_id), [t.guild_id]), {
    hasParticipantsPanel: R
  } = (0, v.Z)({
    location: "StageChannelCall"
  });
  (0, f.ZP)(() => {
    null == c.K.get(ea) && ((0, d.ZDy)(async () => {
      let {
        default: e
      } = await n.e("37194").then(n.bind(n, 947422));
      return t => <e{...el({}, t)} />
    }), c.K.set(ea, Date.now()))
  });
  let {
    width: w = 0,
    ref: A
  } = (0, p.ZP)(), D = w - 550, k = !C || C && I === et.IlC.POPOUT;
  return <b.Gt value={E}><_.B2>{<div className={ei.container} ref={A}>{<d.f6W theme={et.BRd.DARK}>{e => (0, r.jsx)("div", {
            className: a()(ei.callContainer, e, {
              [ei.sidebarVisible]: l,
              [ei.sidebarOrChatVisible]: l || Z || T
            }),
            children: (0, r.jsx)(P.ZP, {
              timeout: 2e3,
              children: e => (0, r.jsx)(eh, {
                channel: t,
                toggleRequestToSpeakSidebar: u,
                showRequestToSpeakSidebar: l,
                popoutWindow: h,
                popoutWindowAlwaysOnTop: x,
                popoutOpen: C,
                chatOpen: Z,
                idleProps: e
              })
            })
          })}</d.f6W>}{l ? <Y.Z channel={t} toggleRequestToSpeakSidebar={u} chatOpen={Z} /> : null}{<div className={ei.channelChatWrapper}>{Z && k && <j.Z channel={t} guild={N} maxWidth={D} />}{T && R && k && <O.Z channel={t} maxWidth={D} />}</div>}</div>}{<_.H_ />}</_.B2></b.Gt>
}