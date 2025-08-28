/** Chunk was on 56011 **/
/** chunk id: 504185, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ed,
  e: () => ec
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk906732 = require("./906732.jsx"),
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
  Chunk937995 = require("./937995.jsx"),
  Chunk880831 = require("./880831.jsx"),
  Chunk73563 = require("./73563.jsx"),
  Chunk800965 = require("./800965.jsx"),
  Chunk107169 = require("./107169.jsx"),
  Chunk891551 = require("./891551.jsx"),
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
  Chunk901434 = require("./901434.jsx"),
  Chunk302270 = require("./302270.jsx"),
  Chunk308177 = require("./308177.jsx"),
  Chunk700483 = require("./700483.jsx"),
  Chunk686468 = require("./686468.jsx"),
  Chunk801405 = require("./801405.jsx"),
  Chunk903108 = require("./903108.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk515074 = require("./515074.js");

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
  eo = e => {
    (0, j.v)(g.Z.VOICE_CONTROL_TRAY, j.d.STAY_ON_TOP, e), E.hY(et.KJ3.CHANNEL_CALL_POPOUT, e)
  };

function es(e) {
  let {
    channel: t,
    appContext: n,
    popoutOpen: l,
    popoutWindow: a,
    popoutWindowAlwaysOnTop: o,
    selectedParticipant: c
  } = e, {
    parentAnalyticsLocation: u
  } = (0, b.ZP)(), d = t.getGuildId(), h = (0, s.e7)([U.Z], () => U.Z.getMostRecentSelectedTextChannelId(d), [d]), f = M.default.getId(), m = !(0, s.e7)([y.Z], () => y.Z.isFullscreenInContext(n)) && (!B.isPlatformEmbedded || B.isPlatformEmbedded && G.ZP.supportsFeature(et.eRX.POPOUT_WINDOWS)), g = null != c && c.type !== en.fO.ACTIVITY && c.user.id !== f, C = i.useMemo(() => {
    var e;
    return null != (e = null == a ? true : a.window) ? e : window
  }, [a]), v = (0, $.Z)({
    channel: t,
    appContext: n,
    popoutOpen: l,
    popoutWindow: a,
    currentWindow: C
  }), x = n === et.IlC.POPOUT && B.isPlatformEmbedded && G.ZP.supportsFeature(et.eRX.POPOUT_WINDOWS);
  return (0, r.jsxs)(r.Fragment, {
    children: [g ? (0, r.jsx)(R.Z, {
      context: (0, _.Z)(c.type),
      userId: c.user.id,
      currentWindow: C,
      sliderClassName: ei.volumeSlider,
      location: u
    }) : null, x ? (0, r.jsx)(w.Z, {
      popoutWindowAlwaysOnTop: o,
      onToggleStayOnTop: eo
    }) : null, m ? (0, r.jsx)(A.Z, {
      popoutOpen: l,
      onOpenPopout: () => {
        (0, j.v)(u, j.d.POPOUT, true), (() => {
          let e = t.getGuildId();
          null != e && null != h && (0, I.XU)(e, h), E.hP(t)
        })()
      },
      onClosePopout: () => {
        (0, j.v)(u, j.d.POPOUT, false), p.Z.wait(() => E.xv(et.KJ3.CHANNEL_CALL_POPOUT))
      }
    }) : null, v]
  })
}

function ec(e) {
  let {
    channel: t
  } = e, n = (0, m.bp)(), i = (0, s.e7)([k.Z], () => k.Z.can(et.Plq.CREATE_INSTANT_INVITE, t)), l = (0, s.e7)([L.Z], () => L.Z.getGuild(t.guild_id)), a = (0, s.e7)([z.Z], () => z.Z.getStageInstanceByChannel(t.id)), o = i || (null == a ? true : a.invite_code) != null;
  return null != l && o ? (0, r.jsx)(P.Z, {
    size: u.zx.Sizes.MEDIUM,
    color: u.zx.Colors.TRANSPARENT,
    channel: t,
    appContext: n,
    className: ei.__invalid_leftTrayIcon,
    analyticsLocation: et.ZY5.GUILD_CHANNEL
  }) : null
}

function eu(e) {
  var t, n;
  let l, {
      channel: c,
      toggleRequestToSpeakSidebar: u,
      showRequestToSpeakSidebar: d,
      popoutWindow: p,
      popoutWindowAlwaysOnTop: h,
      popoutOpen: f,
      chatOpen: _,
      idleProps: v
    } = e,
    {
      analyticsLocations: x
    } = (0, b.ZP)(g.Z.VOICE_CONTROL_TRAY),
    O = (0, m.bp)(),
    j = (0, s.e7)([U.Z], () => U.Z.getVoiceChannelId() === c.id, [c.id]),
    E = (0, s.e7)([k.Z], () => k.Z.can(et.Plq.CONNECT, c)),
    S = (0, F.w8)(c.id, V.pV.SPEAKER),
    I = (0, s.e7)([y.Z], () => y.Z.getSelectedParticipant(c.id)),
    P = f && O !== et.IlC.POPOUT,
    [Z, A] = i.useState(0),
    {
      isOnStartStageScreen: w
    } = (0, W.ZP)();
  (0, W.MV)(c);
  let R = (0, s.e7)([D.Z], () => D.Z.getToastsEnabled(c.id)),
    M = (0, ee.Z)(c) ? null != I ? "84px" : "124px" : null != I ? "0px" : "48px";
  return w && (M = "0px"), l = w ? (0, r.jsx)(J.Z, {
    channel: c,
    onContinueClick: () => {
      (0, W.Ku)(false), j || (0, H.TM)(c)
    }
  }) : j ? (0, r.jsx)(X.Z, {
    channel: c,
    onScroll: e => {
      let {
        scrollTop: t
      } = e.target;
      (0, o.debounce)(() => A(t), 1e3, {
        leading: true
      })()
    }
  }) : (0, r.jsx)(Y.Z, {
    participants: S,
    channel: c,
    hasConnectPermission: E
  }), (0, r.jsx)(N.Z, (t = el({
    style: {
      height: "calc(100% - ".concat(M, ")"),
      paddingTop: M
    },
    disableGradients: !j || 0 === Z && N.e.TOP,
    renderBottomCenter: () => j ? (0, r.jsx)(b.Gt, {
      value: x,
      children: (0, r.jsx)(Q.Z, {
        channel: c,
        isOnStartStageScreen: w
      })
    }) : null,
    renderBottomRight: () => j ? (0, r.jsx)(b.Gt, {
      value: x,
      children: (0, r.jsx)(es, {
        channel: c,
        appContext: O,
        popoutOpen: f,
        popoutWindow: p,
        popoutWindowAlwaysOnTop: h,
        selectedParticipant: I
      })
    }) : null,
    renderHeader: () => (0, r.jsx)(K.Z, {
      toggleRequestToSpeakSidebar: u,
      showRequestToSpeakSidebar: d,
      channel: c
    }),
    renderChatToasts: () => !R || _ || P ? null : (0, r.jsx)(C.ZP, {
      children: (0, r.jsx)(T.Z, {
        className: a()(ei.chatToasts, {
          [ei.rtsSidebarOpen]: d
        }),
        channelId: c.id
      })
    }),
    screenMessage: P ? {
      mainText: er.intl.string(er.t.J5bXZW)
    } : null
  }, v), n = n = {
    children: !P && l
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}

function ed(e) {
  let {
    channel: t
  } = e, [l, o] = i.useState(false), u = i.useCallback(() => {
    o(!l)
  }, [l, o]), {
    popoutWindow: p,
    popoutWindowAlwaysOnTop: _
  } = (0, s.cj)([S.Z], () => ({
    popoutWindow: S.Z.getWindow(et.KJ3.CHANNEL_CALL_POPOUT),
    popoutWindowAlwaysOnTop: S.Z.getIsAlwaysOnTop(et.KJ3.CHANNEL_CALL_POPOUT)
  })), j = null != p && !p.closed, {
    analyticsLocations: E
  } = (0, b.ZP)(g.Z.STAGE_CHANNEL_CALL), I = (0, m.bp)(), {
    chatOpen: P,
    participantsListOpen: T
  } = (0, s.cj)([y.Z], () => ({
    chatOpen: y.Z.getChatOpen(t.id),
    participantsListOpen: y.Z.getParticipantsListOpen(t.id)
  }), [t.id]), N = (0, s.e7)([L.Z], () => L.Z.getGuild(t.guild_id), [t.guild_id]), {
    hasParticipantsPanel: A
  } = (0, O.Z)({
    location: "StageChannelCall"
  });
  (0, f.ZP)(() => {
    null == c.K.get(ea) && ((0, d.ZDy)(async () => {
      let {
        default: e
      } = await n.e("37194").then(n.bind(n, 947422));
      return t => (0, r.jsx)(e, el({}, t))
    }), c.K.set(ea, Date.now()))
  });
  let {
    width: w = 0,
    ref: R
  } = (0, h.ZP)(), M = w - 550, D = !j || j && I === et.IlC.POPOUT;
  return (0, r.jsx)(b.Gt, {
    value: E,
    children: (0, r.jsxs)(C.B2, {
      children: [(0, r.jsxs)("div", {
        className: ei.container,
        ref: R,
        children: [(0, r.jsx)(d.f6W, {
          theme: et.BRd.DARK,
          children: e => (0, r.jsx)("div", {
            className: a()(ei.callContainer, e, {
              [ei.sidebarVisible]: l,
              [ei.sidebarOrChatVisible]: l || P || T
            }),
            children: (0, r.jsx)(Z.ZP, {
              timeout: 2e3,
              children: e => (0, r.jsx)(eu, {
                channel: t,
                toggleRequestToSpeakSidebar: u,
                showRequestToSpeakSidebar: l,
                popoutWindow: p,
                popoutWindowAlwaysOnTop: _,
                popoutOpen: j,
                chatOpen: P,
                idleProps: e
              })
            })
          })
        }), l ? (0, r.jsx)(q.Z, {
          channel: t,
          toggleRequestToSpeakSidebar: u,
          chatOpen: P
        }) : null, (0, r.jsxs)("div", {
          className: ei.channelChatWrapper,
          children: [P && D && (0, r.jsx)(v.Z, {
            channel: t,
            guild: N,
            maxWidth: M
          }), T && A && D && (0, r.jsx)(x.Z, {
            channel: t,
            maxWidth: M
          })]
        })]
      }), (0, r.jsx)(C.H_, {})]
    })
  })
}