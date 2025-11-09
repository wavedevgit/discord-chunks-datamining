/** Chunk was on 30025 **/
/** chunk id: 504185, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ed,
  e: () => eo
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk854409 = require("./854409.js");

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
    (0, v.v)(f.Z.VOICE_CONTROL_TRAY, v.d.STAY_ON_TOP, e), C.hY(ee.KJ3.CHANNEL_CALL_POPOUT, e)
  };

function es(e) {
  let {
    channel: t,
    appContext: n,
    popoutOpen: l,
    popoutWindow: a,
    popoutWindowAlwaysOnTop: s,
    selectedParticipant: c
  } = e, {
    parentAnalyticsLocation: d
  } = (0, g.ZP)(), p = t.getGuildId(), h = (0, o.e7)([k.Z], () => k.Z.getMostRecentSelectedTextChannelId(p), [p]), f = A.default.getId(), _ = !(0, o.e7)([m.Z], () => m.Z.isFullscreenInContext(n)) && (!U.isPlatformEmbedded || U.isPlatformEmbedded && G.ZP.supportsFeature(ee.eRX.POPOUT_WINDOWS)), y = null != c && c.type !== et.fO.ACTIVITY && c.user.id !== f, x = i.useMemo(() => {
    var e;
    return null != (e = null == a ? true : a.window) ? e : window
  }, [a]), O = (0, J.Z)({
    channel: t,
    appContext: n,
    popoutOpen: l,
    popoutWindow: a,
    currentWindow: x
  }), j = n === ee.IlC.POPOUT && U.isPlatformEmbedded && G.ZP.supportsFeature(ee.eRX.POPOUT_WINDOWS);
  return (0, r.jsxs)(r.Fragment, {
    children: [y ? (0, r.jsx)(w.Z, {
      context: (0, b.Z)(c.type),
      userId: c.user.id,
      currentWindow: x,
      sliderClassName: er.volumeSlider,
      location: d
    }) : null, j ? (0, r.jsx)(R.Z, {
      popoutWindowAlwaysOnTop: s,
      onToggleStayOnTop: ea
    }) : null, _ ? (0, r.jsx)(N.Z, {
      popoutOpen: l,
      onOpenPopout: () => {
        (0, v.v)(d, v.d.POPOUT, true), (() => {
          let e = t.getGuildId();
          null != e && null != h && (0, S.XU)(e, h), C.hP(t)
        })()
      },
      onClosePopout: () => {
        (0, v.v)(d, v.d.POPOUT, false), u.Z.wait(() => C.xv(ee.KJ3.CHANNEL_CALL_POPOUT))
      }
    }) : null, O]
  })
}

function eo(e) {
  let {
    channel: t
  } = e, n = (0, j.bp)(), i = (0, o.e7)([M.Z], () => M.Z.can(ee.Plq.CREATE_INSTANT_INVITE, t)), l = (0, o.e7)([L.Z], () => L.Z.getGuild(t.guild_id)), a = (0, o.e7)([V.Z], () => V.Z.getStageInstanceByChannel(t.id)), s = i || (null == a ? true : a.invite_code) != null;
  return null != l && s ? (0, r.jsx)(E.Z, {
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
      toggleRequestToSpeakSidebar: d,
      showRequestToSpeakSidebar: u,
      popoutWindow: p,
      popoutWindowAlwaysOnTop: h,
      popoutOpen: b,
      popoutType: y,
      chatOpen: x,
      idleProps: O
    } = e,
    {
      analyticsLocations: v
    } = (0, g.ZP)(f.Z.VOICE_CONTROL_TRAY),
    C = (0, j.bp)(),
    I = (0, o.e7)([k.Z], () => k.Z.getVoiceChannelId() === c.id, [c.id]),
    S = (0, o.e7)([M.Z], () => M.Z.can(ee.Plq.CONNECT, c)),
    E = (0, F.w8)(c.id, B.pV.SPEAKER),
    Z = (0, o.e7)([m.Z], () => m.Z.getSelectedParticipant(c.id)),
    N = b && C !== ee.IlC.POPOUT,
    [R, w] = i.useState(0),
    A = i.useMemo(() => (0, s.debounce)(e => {
      let {
        scrollTop: t
      } = e.target;
      w(t)
    }, 1e3, {
      leading: true
    }), []),
    {
      isOnStartStageScreen: L
    } = (0, z.ZP)();
  (0, z.MV)(c);
  let U = (0, o.e7)([D.Z], () => D.Z.getToastsEnabled(c.id)),
    G = (0, $.Z)(c) ? null != Z ? "84px" : "124px" : null != Z ? "0px" : "48px";
  return L && (G = "0px"), l = L ? (0, r.jsx)(X.Z, {
    channel: c,
    onContinueClick: () => {
      (0, z.Ku)(false), I || (0, H.TM)(c)
    }
  }) : I ? (0, r.jsx)(K.Z, {
    channel: c,
    onScroll: A,
    popoutType: y
  }) : (0, r.jsx)(Y.Z, {
    participants: E,
    channel: c,
    hasConnectPermission: S
  }), (0, r.jsx)(T.Z, (t = ei({
    style: {
      height: "calc(100% - ".concat(G, ")"),
      paddingTop: G
    },
    disableGradients: !I || 0 === R && T.e.TOP,
    renderBottomCenter: () => I ? (0, r.jsx)(g.Gt, {
      value: v,
      children: (0, r.jsx)(Q.Z, {
        channel: c,
        isOnStartStageScreen: L
      })
    }) : null,
    renderBottomRight: () => I ? (0, r.jsx)(g.Gt, {
      value: v,
      children: (0, r.jsx)(es, {
        channel: c,
        appContext: C,
        popoutOpen: b,
        popoutWindow: p,
        popoutWindowAlwaysOnTop: h,
        selectedParticipant: Z
      })
    }) : null,
    renderHeader: () => (0, r.jsx)(q.Z, {
      toggleRequestToSpeakSidebar: d,
      showRequestToSpeakSidebar: u,
      channel: c
    }),
    renderChatToasts: () => !U || x || N ? null : (0, r.jsx)(_.ZP, {
      children: (0, r.jsx)(P.Z, {
        className: a()(er.chatToasts, {
          [er.rtsSidebarOpen]: u
        }),
        channelId: c.id
      })
    }),
    screenMessage: N ? {
      mainText: en.intl.string(en.t.J5bXZU)
    } : null
  }, O), n = n = {
    children: !N && l
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
    channel: t,
    popoutType: l
  } = e, [s, u] = i.useState(false), b = i.useCallback(() => {
    u(!s)
  }, [s, u]), {
    popoutWindow: v,
    popoutWindowAlwaysOnTop: C
  } = (0, o.cj)([I.Z], () => ({
    popoutWindow: I.Z.getWindow(ee.KJ3.CHANNEL_CALL_POPOUT),
    popoutWindowAlwaysOnTop: I.Z.getIsAlwaysOnTop(ee.KJ3.CHANNEL_CALL_POPOUT)
  })), S = null != v && !v.closed, {
    analyticsLocations: E
  } = (0, g.ZP)(f.Z.STAGE_CHANNEL_CALL), P = (0, j.bp)(), {
    chatOpen: T,
    participantsListOpen: N
  } = (0, o.cj)([m.Z], () => ({
    chatOpen: m.Z.getChatOpen(t.id),
    participantsListOpen: m.Z.getParticipantsListOpen(t.id)
  }), [t.id]), R = (0, o.e7)([L.Z], () => L.Z.getGuild(t.guild_id), [t.guild_id]), {
    hasParticipantsPanel: w
  } = (0, O.Z)({
    location: "StageChannelCall"
  });
  (0, h.ZP)(() => {
    null == c.K.get(el) && ((0, d.ZDy)(async () => {
      let {
        default: e
      } = await n.e("37194").then(n.bind(n, 947422));
      return t => (0, r.jsx)(e, ei({}, t))
    }), c.K.set(el, Date.now()))
  });
  let {
    width: A = 0,
    ref: D
  } = (0, p.ZP)(), M = A - 550, k = !S || S && P === ee.IlC.POPOUT;
  return (0, r.jsx)(g.Gt, {
    value: E,
    children: (0, r.jsxs)(_.B2, {
      children: [(0, r.jsxs)("div", {
        className: er.container,
        ref: D,
        children: [(0, r.jsx)(d.f6W, {
          theme: ee.BRd.DARK,
          children: e => (0, r.jsx)("div", {
            className: a()(er.callContainer, e, {
              [er.sidebarVisible]: s,
              [er.sidebarOrChatVisible]: s || T || N
            }),
            children: (0, r.jsx)(Z.ZP, {
              timeout: 2e3,
              children: e => (0, r.jsx)(ec, {
                channel: t,
                toggleRequestToSpeakSidebar: b,
                showRequestToSpeakSidebar: s,
                popoutWindow: v,
                popoutWindowAlwaysOnTop: C,
                popoutOpen: S,
                popoutType: l,
                chatOpen: T,
                idleProps: e
              })
            })
          })
        }), s ? (0, r.jsx)(W.Z, {
          channel: t,
          toggleRequestToSpeakSidebar: b,
          chatOpen: T
        }) : null, (0, r.jsxs)("div", {
          className: er.channelChatWrapper,
          children: [T && k && (0, r.jsx)(y.Z, {
            channel: t,
            guild: R,
            maxWidth: M
          }), N && w && k && (0, r.jsx)(x.Z, {
            channel: t,
            maxWidth: M
          })]
        })]
      }), (0, r.jsx)(_.H_, {})]
    })
  })
}