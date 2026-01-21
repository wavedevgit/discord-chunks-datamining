/** Chunk was on 82124 **/
/** chunk id: 504185, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eu,
  e: () => es
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk393238 = require("./393238.js"),
  Chunk493773 = require("./493773.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk358221 = require("./358221.js"),
  Chunk414910 = require("./414910.js"),
  Chunk909820 = require("./909820.js"),
  Chunk493010 = require("./493010.jsx"),
  Chunk71127 = require("./71127.jsx"),
  Chunk185935 = require("./185935.js"),
  Chunk522651 = require("./522651.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk788983 = require("./788983.js"),
  Chunk928518 = require("./928518.js"),
  Chunk703656 = require("./703656.js"),
  Chunk493754 = require("./493754.jsx"),
  Chunk937995 = require("./937995.jsx"),
  Chunk880831 = require("./880831.jsx"),
  Chunk73563 = require("./73563.jsx"),
  Chunk800965 = require("./800965.jsx"),
  Chunk107169 = require("./107169.jsx"),
  Chunk742714 = require("./742714.jsx"),
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
  Chunk45737 = require("./45737.js");

function ei(e) {
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
let el = "HasBeenInStageChannel",
  ea = e => {
    (0, x.v)(h.Z.VOICE_CONTROL_TRAY, x.d.STAY_ON_TOP, e), E.setAlwaysOnTop(ee.KJ3.CHANNEL_CALL_POPOUT, e)
  };

function eo(e) {
  let {
    channel: t,
    appContext: n,
    popoutOpen: l,
    popoutWindow: a,
    popoutWindowAlwaysOnTop: o,
    selectedParticipant: c
  } = e, {
    parentAnalyticsLocation: u
  } = (0, g.ZP)(), p = t.getGuildId(), f = (0, s.e7)([L.Z], () => L.Z.getMostRecentSelectedTextChannelId(p), [p]), h = R.default.getId(), y = !(0, s.e7)([m.Z], () => m.Z.isFullscreenInContext(n)) && (!U.isPlatformEmbedded || U.isPlatformEmbedded && G.ZP.supportsFeature(ee.eRX.POPOUT_WINDOWS)), v = null != c && c.type !== et.fO.ACTIVITY && c.user.id !== h, O = i.useMemo(() => {
    var e;
    return null != (e = null == a ? true : a.window) ? e : window
  }, [a]), j = (0, J.Z)({
    channel: t,
    appContext: n,
    popoutOpen: l,
    popoutWindow: a,
    currentWindow: O
  }), C = n === ee.IlC.POPOUT && U.isPlatformEmbedded && G.ZP.supportsFeature(ee.eRX.POPOUT_WINDOWS);
  return (0, r.jsxs)(r.Fragment, {
    children: [v ? (0, r.jsx)(w.Z, {
      context: (0, b.Z)(c.type),
      userId: c.user.id,
      currentWindow: O,
      sliderClassName: er.volumeSlider,
      location: u
    }) : null, C ? (0, r.jsx)(A.Z, {
      popoutWindowAlwaysOnTop: o,
      onToggleStayOnTop: ea
    }) : null, y ? (0, r.jsx)(T.Z, {
      popoutOpen: l,
      onOpenPopout: () => {
        (0, x.v)(u, x.d.POPOUT, true), (() => {
          let e = t.getGuildId();
          null != e && null != f && (0, _.XU)(e, f), E.openChannelCallPopout(t)
        })()
      },
      onClosePopout: () => {
        (0, x.v)(u, x.d.POPOUT, false), d.Z.wait(() => E.close(ee.KJ3.CHANNEL_CALL_POPOUT))
      }
    }) : null, j]
  })
}

function es(e) {
  let {
    channel: t
  } = e, n = (0, C.bp)(), i = (0, s.e7)([k.Z], () => k.Z.can(ee.Plq.CREATE_INSTANT_INVITE, t)), l = (0, s.e7)([M.Z], () => M.Z.getGuild(t.guild_id)), a = (0, s.e7)([V.Z], () => V.Z.getStageInstanceByChannel(t.id)), o = i || (null == a ? true : a.invite_code) != null;
  return null != l && o ? (0, r.jsx)(I.Z, {
    size: "md",
    channel: t,
    appContext: n,
    analyticsLocation: ee.ZY5.GUILD_CHANNEL
  }) : null
}

function ec(e) {
  var t, n;
  let l, {
      channel: c,
      toggleRequestToSpeakSidebar: u,
      showRequestToSpeakSidebar: d,
      popoutWindow: p,
      popoutWindowAlwaysOnTop: f,
      popoutOpen: b,
      popoutType: v,
      chatOpen: O,
      idleProps: j
    } = e,
    {
      analyticsLocations: x
    } = (0, g.ZP)(h.Z.VOICE_CONTROL_TRAY),
    E = (0, C.bp)(),
    S = (0, s.e7)([L.Z], () => L.Z.getVoiceChannelId() === c.id, [c.id]),
    _ = (0, s.e7)([k.Z], () => k.Z.can(ee.Plq.CONNECT, c)),
    I = (0, F.w8)(c.id, H.pV.SPEAKER),
    P = (0, s.e7)([m.Z], () => m.Z.getSelectedParticipant(c.id)),
    T = b && E !== ee.IlC.POPOUT,
    [A, w] = i.useState(0),
    R = i.useMemo(() => (0, o.debounce)(e => {
      let {
        scrollTop: t
      } = e.target;
      w(t)
    }, 1e3, {
      leading: true
    }), []),
    {
      isOnStartStageScreen: M
    } = (0, z.ZP)();
  (0, z.MV)(c);
  let U = (0, s.e7)([D.Z], () => D.Z.getToastsEnabled(c.id)),
    G = (0, $.Z)(c) ? null != P ? "84px" : "124px" : null != P ? "0px" : "48px";
  return M && (G = "0px"), l = M ? (0, r.jsx)(Q.Z, {
    channel: c,
    onContinueClick: () => {
      (0, z.Ku)(false), S || (0, B.TM)(c)
    }
  }) : S ? (0, r.jsx)(q.Z, {
    channel: c,
    onScroll: R,
    popoutType: v
  }) : (0, r.jsx)(K.Z, {
    participants: I,
    channel: c,
    hasConnectPermission: _
  }), (0, r.jsx)(N.Z, (t = ei({
    style: {
      height: "calc(100% - ".concat(G, ")"),
      paddingTop: G
    },
    disableGradients: !S || 0 === A && N.e.TOP,
    renderBottomCenter: () => S ? (0, r.jsx)(g.Gt, {
      value: x,
      children: (0, r.jsx)(X.Z, {
        channel: c,
        isOnStartStageScreen: M
      })
    }) : null,
    renderBottomRight: () => S ? (0, r.jsx)(g.Gt, {
      value: x,
      children: (0, r.jsx)(eo, {
        channel: c,
        appContext: E,
        popoutOpen: b,
        popoutWindow: p,
        popoutWindowAlwaysOnTop: f,
        selectedParticipant: P
      })
    }) : null,
    renderHeader: () => (0, r.jsx)(Y.Z, {
      toggleRequestToSpeakSidebar: u,
      showRequestToSpeakSidebar: d,
      channel: c
    }),
    renderChatToasts: () => !U || O || T ? null : (0, r.jsx)(y.ZP, {
      children: (0, r.jsx)(Z.Z, {
        className: a()(er.chatToasts, {
          [er.rtsSidebarOpen]: d
        }),
        channelId: c.id
      })
    }),
    screenMessage: T ? {
      mainText: en.intl.string(en.t.J5bXZU)
    } : null
  }, j), n = n = {
    children: !T && l
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

function eu(e) {
  let {
    channel: t,
    popoutType: l
  } = e, [o, d] = i.useState(false), b = i.useCallback(() => {
    d(!o)
  }, [o, d]), {
    popoutWindow: x,
    popoutWindowAlwaysOnTop: E
  } = (0, s.cj)([S.Z], () => ({
    popoutWindow: S.Z.getWindow(ee.KJ3.CHANNEL_CALL_POPOUT),
    popoutWindowAlwaysOnTop: S.Z.getIsAlwaysOnTop(ee.KJ3.CHANNEL_CALL_POPOUT)
  })), _ = null != x && !x.closed, {
    analyticsLocations: I
  } = (0, g.ZP)(h.Z.STAGE_CHANNEL_CALL), Z = (0, C.bp)(), {
    chatOpen: N,
    participantsListOpen: T
  } = (0, s.cj)([m.Z], () => ({
    chatOpen: m.Z.getChatOpen(t.id),
    participantsListOpen: m.Z.getParticipantsListOpen(t.id)
  }), [t.id]), A = (0, s.e7)([M.Z], () => M.Z.getGuild(t.guild_id), [t.guild_id]), {
    hasParticipantsPanel: w
  } = (0, j.Z)({
    location: "StageChannelCall"
  });
  (0, f.ZP)(() => {
    null == c.K.get(el) && ((0, u.ZDy)(async () => {
      let {
        default: e
      } = await n.e("37194").then(n.bind(n, 947422));
      return t => (0, r.jsx)(e, ei({}, t))
    }), c.K.set(el, Date.now()))
  });
  let {
    width: R = 0,
    ref: D
  } = (0, p.ZP)(), k = R - 550, L = !_ || _ && Z === ee.IlC.POPOUT;
  return (0, r.jsx)(g.Gt, {
    value: I,
    children: (0, r.jsxs)(y.B2, {
      children: [(0, r.jsxs)("div", {
        className: er.container,
        ref: D,
        children: [(0, r.jsx)(u.f6W, {
          theme: ee.BRd.DARK,
          children: e => (0, r.jsx)("div", {
            className: a()(er.callContainer, e, {
              [er.sidebarVisible]: o,
              [er.sidebarOrChatVisible]: o || N || T
            }),
            children: (0, r.jsx)(P.ZP, {
              timeout: 2e3,
              children: e => (0, r.jsx)(ec, {
                channel: t,
                toggleRequestToSpeakSidebar: b,
                showRequestToSpeakSidebar: o,
                popoutWindow: x,
                popoutWindowAlwaysOnTop: E,
                popoutOpen: _,
                popoutType: l,
                chatOpen: N,
                idleProps: e
              })
            })
          })
        }), o ? (0, r.jsx)(W.Z, {
          channel: t,
          toggleRequestToSpeakSidebar: b,
          chatOpen: N
        }) : null, (0, r.jsxs)("div", {
          className: er.channelChatWrapper,
          children: [N && L && (0, r.jsx)(v.Z, {
            channel: t,
            guild: A,
            maxWidth: k
          }), T && w && L && (0, r.jsx)(O.Z, {
            channel: t,
            maxWidth: k
          })]
        })]
      }), (0, r.jsx)(y.H_, {})]
    })
  })
}