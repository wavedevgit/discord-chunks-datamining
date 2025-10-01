/** Chunk was on 63962 **/
/** chunk id: 504185, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eu,
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
  es = e => {
    (0, x.v)(g.Z.VOICE_CONTROL_TRAY, x.d.STAY_ON_TOP, e), I.hY(et.KJ3.CHANNEL_CALL_POPOUT, e)
  };

function eo(e) {
  let {
    channel: t,
    appContext: n,
    popoutOpen: l,
    popoutWindow: a,
    popoutWindowAlwaysOnTop: s,
    selectedParticipant: c
  } = e, {
    parentAnalyticsLocation: d
  } = (0, m.ZP)(), u = t.getGuildId(), h = (0, o.e7)([U.Z], () => U.Z.getMostRecentSelectedTextChannelId(u), [u]), f = D.default.getId(), g = !(0, o.e7)([b.Z], () => b.Z.isFullscreenInContext(n)) && (!G.isPlatformEmbedded || G.isPlatformEmbedded && H.ZP.supportsFeature(et.eRX.POPOUT_WINDOWS)), _ = null != c && c.type !== en.fO.ACTIVITY && c.user.id !== f, O = i.useMemo(() => {
    var e;
    return null != (e = null == a ? true : a.window) ? e : window
  }, [a]), j = (0, $.Z)({
    channel: t,
    appContext: n,
    popoutOpen: l,
    popoutWindow: a,
    currentWindow: O
  }), v = n === et.IlC.POPOUT && G.isPlatformEmbedded && H.ZP.supportsFeature(et.eRX.POPOUT_WINDOWS);
  return (0, r.jsxs)(r.Fragment, {
    children: [_ ? (0, r.jsx)(A.Z, {
      context: (0, y.Z)(c.type),
      userId: c.user.id,
      currentWindow: O,
      sliderClassName: ei.volumeSlider,
      location: d
    }) : null, v ? (0, r.jsx)(w.Z, {
      popoutWindowAlwaysOnTop: s,
      onToggleStayOnTop: es
    }) : null, g ? (0, r.jsx)(R.Z, {
      popoutOpen: l,
      onOpenPopout: () => {
        (0, x.v)(d, x.d.POPOUT, true), (() => {
          let e = t.getGuildId();
          null != e && null != h && (0, S.XU)(e, h), I.hP(t)
        })()
      },
      onClosePopout: () => {
        (0, x.v)(d, x.d.POPOUT, false), p.Z.wait(() => I.xv(et.KJ3.CHANNEL_CALL_POPOUT))
      }
    }) : null, j]
  })
}

function ec(e) {
  let {
    channel: t
  } = e, n = (0, C.bp)(), i = (0, o.e7)([k.Z], () => k.Z.can(et.Plq.CREATE_INSTANT_INVITE, t)), l = (0, o.e7)([M.Z], () => M.Z.getGuild(t.guild_id)), a = (0, o.e7)([V.Z], () => V.Z.getStageInstanceByChannel(t.id)), s = i || (null == a ? true : a.invite_code) != null;
  return null != l && s ? (0, r.jsx)(Z.Z, {
    size: d.zx.Sizes.MEDIUM,
    color: d.zx.Colors.TRANSPARENT,
    channel: t,
    appContext: n,
    className: ei.__invalid_leftTrayIcon,
    analyticsLocation: et.ZY5.GUILD_CHANNEL
  }) : null
}

function ed(e) {
  var t, n;
  let l, {
      channel: c,
      toggleRequestToSpeakSidebar: d,
      showRequestToSpeakSidebar: u,
      popoutWindow: p,
      popoutWindowAlwaysOnTop: h,
      popoutOpen: f,
      chatOpen: y,
      idleProps: O
    } = e,
    {
      analyticsLocations: j
    } = (0, m.ZP)(g.Z.VOICE_CONTROL_TRAY),
    v = (0, C.bp)(),
    x = (0, o.e7)([U.Z], () => U.Z.getVoiceChannelId() === c.id, [c.id]),
    I = (0, o.e7)([k.Z], () => k.Z.can(et.Plq.CONNECT, c)),
    E = (0, B.w8)(c.id, z.pV.SPEAKER),
    S = (0, o.e7)([b.Z], () => b.Z.getSelectedParticipant(c.id)),
    Z = f && v !== et.IlC.POPOUT,
    [T, R] = i.useState(0),
    {
      isOnStartStageScreen: w
    } = (0, W.ZP)();
  (0, W.MV)(c);
  let A = (0, o.e7)([L.Z], () => L.Z.getToastsEnabled(c.id)),
    D = (0, ee.Z)(c) ? null != S ? "84px" : "124px" : null != S ? "0px" : "48px";
  return w && (D = "0px"), l = w ? (0, r.jsx)(J.Z, {
    channel: c,
    onContinueClick: () => {
      (0, W.Ku)(false), x || (0, F.TM)(c)
    }
  }) : x ? (0, r.jsx)(Q.Z, {
    channel: c,
    onScroll: e => {
      let {
        scrollTop: t
      } = e.target;
      (0, s.debounce)(() => R(t), 1e3, {
        leading: true
      })()
    }
  }) : (0, r.jsx)(q.Z, {
    participants: E,
    channel: c,
    hasConnectPermission: I
  }), (0, r.jsx)(N.Z, (t = el({
    style: {
      height: "calc(100% - ".concat(D, ")"),
      paddingTop: D
    },
    disableGradients: !x || 0 === T && N.e.TOP,
    renderBottomCenter: () => x ? (0, r.jsx)(m.Gt, {
      value: j,
      children: (0, r.jsx)(X.Z, {
        channel: c,
        isOnStartStageScreen: w
      })
    }) : null,
    renderBottomRight: () => x ? (0, r.jsx)(m.Gt, {
      value: j,
      children: (0, r.jsx)(eo, {
        channel: c,
        appContext: v,
        popoutOpen: f,
        popoutWindow: p,
        popoutWindowAlwaysOnTop: h,
        selectedParticipant: S
      })
    }) : null,
    renderHeader: () => (0, r.jsx)(K.Z, {
      toggleRequestToSpeakSidebar: d,
      showRequestToSpeakSidebar: u,
      channel: c
    }),
    renderChatToasts: () => !A || y || Z ? null : (0, r.jsx)(_.ZP, {
      children: (0, r.jsx)(P.Z, {
        className: a()(ei.chatToasts, {
          [ei.rtsSidebarOpen]: u
        }),
        channelId: c.id
      })
    }),
    screenMessage: Z ? {
      mainText: er.intl.string(er.t.J5bXZW)
    } : null
  }, O), n = n = {
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
  }), t))
}

function eu(e) {
  let {
    channel: t
  } = e, [l, s] = i.useState(false), d = i.useCallback(() => {
    s(!l)
  }, [l, s]), {
    popoutWindow: p,
    popoutWindowAlwaysOnTop: y
  } = (0, o.cj)([E.Z], () => ({
    popoutWindow: E.Z.getWindow(et.KJ3.CHANNEL_CALL_POPOUT),
    popoutWindowAlwaysOnTop: E.Z.getIsAlwaysOnTop(et.KJ3.CHANNEL_CALL_POPOUT)
  })), x = null != p && !p.closed, {
    analyticsLocations: I
  } = (0, m.ZP)(g.Z.STAGE_CHANNEL_CALL), S = (0, C.bp)(), {
    chatOpen: Z,
    participantsListOpen: P
  } = (0, o.cj)([b.Z], () => ({
    chatOpen: b.Z.getChatOpen(t.id),
    participantsListOpen: b.Z.getParticipantsListOpen(t.id)
  }), [t.id]), N = (0, o.e7)([M.Z], () => M.Z.getGuild(t.guild_id), [t.guild_id]), {
    hasParticipantsPanel: R
  } = (0, v.Z)({
    location: "StageChannelCall"
  });
  (0, f.ZP)(() => {
    null == c.K.get(ea) && ((0, u.ZDy)(async () => {
      let {
        default: e
      } = await n.e("37194").then(n.bind(n, 947422));
      return t => (0, r.jsx)(e, el({}, t))
    }), c.K.set(ea, Date.now()))
  });
  let {
    width: w = 0,
    ref: A
  } = (0, h.ZP)(), D = w - 550, L = !x || x && S === et.IlC.POPOUT;
  return (0, r.jsx)(m.Gt, {
    value: I,
    children: (0, r.jsxs)(_.B2, {
      children: [(0, r.jsxs)("div", {
        className: ei.container,
        ref: A,
        children: [(0, r.jsx)(u.f6W, {
          theme: et.BRd.DARK,
          children: e => (0, r.jsx)("div", {
            className: a()(ei.callContainer, e, {
              [ei.sidebarVisible]: l,
              [ei.sidebarOrChatVisible]: l || Z || P
            }),
            children: (0, r.jsx)(T.ZP, {
              timeout: 2e3,
              children: e => (0, r.jsx)(ed, {
                channel: t,
                toggleRequestToSpeakSidebar: d,
                showRequestToSpeakSidebar: l,
                popoutWindow: p,
                popoutWindowAlwaysOnTop: y,
                popoutOpen: x,
                chatOpen: Z,
                idleProps: e
              })
            })
          })
        }), l ? (0, r.jsx)(Y.Z, {
          channel: t,
          toggleRequestToSpeakSidebar: d,
          chatOpen: Z
        }) : null, (0, r.jsxs)("div", {
          className: ei.channelChatWrapper,
          children: [Z && L && (0, r.jsx)(O.Z, {
            channel: t,
            guild: N,
            maxWidth: D
          }), P && R && L && (0, r.jsx)(j.Z, {
            channel: t,
            maxWidth: D
          })]
        })]
      }), (0, r.jsx)(_.H_, {})]
    })
  })
}