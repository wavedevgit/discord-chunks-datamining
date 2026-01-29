/** Chunk was on 78528 **/
/** chunk id: 566388, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => eu,
  l: () => eo
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk765671 = require("./765671.js"),
  Chunk964486 = require("./964486.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk313961 = require("./313961.js"),
  Chunk520698 = require("./520698.js"),
  Chunk43189 = require("./43189.js"),
  Chunk518530 = require("./518530.jsx"),
  Chunk264250 = require("./264250.jsx"),
  Chunk261718 = require("./261718.js"),
  Chunk384059 = require("./384059.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk574172 = require("./574172.js"),
  Chunk869146 = require("./869146.js"),
  Chunk976860 = require("./976860.js"),
  Chunk993952 = require("./993952.jsx"),
  Chunk461782 = require("./461782.jsx"),
  Chunk20465 = require("./20465.jsx"),
  Chunk156652 = require("./156652.jsx"),
  Chunk128286 = require("./128286.jsx"),
  Chunk619344 = require("./619344.jsx"),
  Chunk821747 = require("./821747.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk249288 = require("./249288.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk323443 = require("./323443.js"),
  Chunk113783 = require("./113783.js"),
  Chunk69407 = require("./69407.js"),
  Chunk446600 = require("./446600.js"),
  Chunk571909 = require("./571909.js"),
  Chunk374873 = require("./374873.jsx"),
  Chunk623413 = require("./623413.jsx"),
  Chunk707251 = require("./707251.jsx"),
  Chunk357819 = require("./357819.jsx"),
  Chunk717965 = require("./717965.jsx"),
  Chunk895903 = require("./895903.jsx"),
  Chunk542372 = require("./542372.jsx"),
  Chunk533233 = require("./533233.js"),
  Chunk652215 = require("./652215.js"),
  Chunk806931 = require("./806931.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk105626 = require("./105626.js");

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
let ei = "HasBeenInStageChannel",
  es = e => {
    (0, j.X)(f.A.VOICE_CONTROL_TRAY, j.O.STAY_ON_TOP, e), x.setAlwaysOnTop(ee.MLl.CHANNEL_CALL_POPOUT, e)
  };

function ea(e) {
  let {
    channel: t,
    appContext: n,
    popoutOpen: i,
    popoutWindow: s,
    popoutWindowAlwaysOnTop: a,
    selectedParticipant: c
  } = e, {
    parentAnalyticsLocation: u
  } = (0, g.Ay)(), p = t.getGuildId(), h = (0, o.bG)([G.A], () => G.A.getMostRecentSelectedTextChannelId(p), [p]), f = D.default.getId(), A = !(0, o.bG)([m.A], () => m.A.isFullscreenInContext(n)) && (!U.isPlatformEmbedded || U.isPlatformEmbedded && B.Ay.supportsFeature(ee.BYE.POPOUT_WINDOWS)), y = null != c && c.type !== et.lp.ACTIVITY && c.user.id !== f, _ = l.useMemo(() => {
    var e;
    return null != (e = null == s ? true : s.window) ? e : window
  }, [s]), O = (0, Z.A)({
    channel: t,
    appContext: n,
    popoutOpen: i,
    popoutWindow: s,
    currentWindow: _
  }), v = n === ee.BRT.POPOUT && U.isPlatformEmbedded && B.Ay.supportsFeature(ee.BYE.POPOUT_WINDOWS);
  return (0, r.jsxs)(r.Fragment, {
    children: [y ? (0, r.jsx)(R.A, {
      context: (0, b.A)(c.type),
      userId: c.user.id,
      currentWindow: _,
      sliderClassName: er.MQ,
      location: u
    }) : null, v ? (0, r.jsx)(w.A, {
      popoutWindowAlwaysOnTop: a,
      onToggleStayOnTop: es
    }) : null, A ? (0, r.jsx)(P.A, {
      popoutOpen: i,
      onOpenPopout: () => {
        (0, j.X)(u, j.O.POPOUT, true), (() => {
          let e = t.getGuildId();
          null != e && null != h && (0, C.uh)(e, h), x.openChannelCallPopout(t)
        })()
      },
      onClosePopout: () => {
        (0, j.X)(u, j.O.POPOUT, false), d.h.wait(() => x.close(ee.MLl.CHANNEL_CALL_POPOUT))
      }
    }) : null, O]
  })
}

function eo(e) {
  let {
    channel: t
  } = e, n = (0, v.Us)(), l = (0, o.bG)([k.A], () => k.A.can(ee.xBc.CREATE_INSTANT_INVITE, t)), i = (0, o.bG)([L.A], () => L.A.getGuild(t.guild_id)), s = (0, o.bG)([K.A], () => K.A.getStageInstanceByChannel(t.id)), a = l || (null == s ? true : s.invite_code) != null;
  return null != i && a ? (0, r.jsx)(S.A, {
    size: "md",
    channel: t,
    appContext: n,
    analyticsLocation: ee.liQ.GUILD_CHANNEL
  }) : null
}

function ec(e) {
  var t, n;
  let i, {
      channel: c,
      toggleRequestToSpeakSidebar: u,
      showRequestToSpeakSidebar: d,
      popoutWindow: p,
      popoutWindowAlwaysOnTop: h,
      popoutOpen: b,
      popoutType: y,
      chatOpen: _,
      idleProps: O
    } = e,
    {
      analyticsLocations: j
    } = (0, g.Ay)(f.A.VOICE_CONTROL_TRAY),
    x = (0, v.Us)(),
    E = (0, o.bG)([G.A], () => G.A.getVoiceChannelId() === c.id, [c.id]),
    C = (0, o.bG)([k.A], () => k.A.can(ee.xBc.CONNECT, c)),
    S = (0, F.E5)(c.id, H.ip.SPEAKER),
    I = (0, o.bG)([m.A], () => m.A.getSelectedParticipant(c.id)),
    P = b && x !== ee.BRT.POPOUT,
    [w, R] = l.useState(0),
    D = l.useMemo(() => (0, a.debounce)(e => {
      let {
        scrollTop: t
      } = e.target;
      R(t)
    }, 1e3, {
      leading: true
    }), []),
    {
      isOnStartStageScreen: L
    } = (0, W.Ay)();
  (0, W.vI)(c);
  let U = (0, o.bG)([M.A], () => M.A.getToastsEnabled(c.id)),
    B = (0, $.A)(c) ? null != I ? "84px" : "124px" : null != I ? "0px" : "48px";
  return L && (B = "0px"), i = L ? (0, r.jsx)(Q.A, {
    channel: c,
    onContinueClick: () => {
      (0, W.ek)(false), E || (0, V.cy)(c)
    }
  }) : E ? (0, r.jsx)(X.A, {
    channel: c,
    onScroll: D,
    popoutType: y
  }) : (0, r.jsx)(Y.A, {
    participants: S,
    channel: c,
    hasConnectPermission: C
  }), (0, r.jsx)(T.A, (t = el({
    style: {
      height: "calc(100% - ".concat(B, ")"),
      paddingTop: B
    },
    disableGradients: !E || 0 === w && T.x.TOP,
    renderBottomCenter: () => E ? (0, r.jsx)(g.f5, {
      value: j,
      children: (0, r.jsx)(J.A, {
        channel: c,
        isOnStartStageScreen: L
      })
    }) : null,
    renderBottomRight: () => E ? (0, r.jsx)(g.f5, {
      value: j,
      children: (0, r.jsx)(ea, {
        channel: c,
        appContext: x,
        popoutOpen: b,
        popoutWindow: p,
        popoutWindowAlwaysOnTop: h,
        selectedParticipant: I
      })
    }) : null,
    renderHeader: () => (0, r.jsx)(q.A, {
      toggleRequestToSpeakSidebar: u,
      showRequestToSpeakSidebar: d,
      channel: c
    }),
    renderChatToasts: () => !U || _ || P ? null : (0, r.jsx)(A.Ay, {
      children: (0, r.jsx)(N.A, {
        className: s()(er.T6, {
          [er.c3]: d
        }),
        channelId: c.id
      })
    }),
    screenMessage: P ? {
      mainText: en.intl.string(en.t.J5bXZU)
    } : null
  }, O), n = n = {
    children: !P && i
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
    popoutType: i
  } = e, [a, d] = l.useState(false), b = l.useCallback(() => {
    d(!a)
  }, [a, d]), {
    popoutWindow: j,
    popoutWindowAlwaysOnTop: x
  } = (0, o.cf)([E.A], () => ({
    popoutWindow: E.A.getWindow(ee.MLl.CHANNEL_CALL_POPOUT),
    popoutWindowAlwaysOnTop: E.A.getIsAlwaysOnTop(ee.MLl.CHANNEL_CALL_POPOUT)
  })), C = null != j && !j.closed, {
    analyticsLocations: S
  } = (0, g.Ay)(f.A.STAGE_CHANNEL_CALL), N = (0, v.Us)(), {
    chatOpen: T,
    participantsListOpen: P
  } = (0, o.cf)([m.A], () => ({
    chatOpen: m.A.getChatOpen(t.id),
    participantsListOpen: m.A.getParticipantsListOpen(t.id)
  }), [t.id]), w = (0, o.bG)([L.A], () => L.A.getGuild(t.guild_id), [t.guild_id]), {
    hasParticipantsPanel: R
  } = (0, O.A)({
    location: "StageChannelCall"
  });
  (0, h.Ay)(() => {
    null == c.w.get(ei) && ((0, u.mMO)(async () => {
      let {
        default: e
      } = await n.e("56016").then(n.bind(n, 456947));
      return t => (0, r.jsx)(e, el({}, t))
    }), c.w.set(ei, Date.now()))
  });
  let {
    width: D = 0,
    ref: M
  } = (0, p.Ay)(), k = D - 550, G = !C || C && N === ee.BRT.POPOUT;
  return (0, r.jsx)(g.f5, {
    value: S,
    children: (0, r.jsxs)(A.qh, {
      children: [(0, r.jsxs)("div", {
        className: er.kL,
        ref: M,
        children: [(0, r.jsx)(u.NPJ, {
          theme: ee.NJ8.DARK,
          children: e => (0, r.jsx)("div", {
            className: s()(er.ik, e, {
              [er.pR]: a,
              [er.gy]: a || T || P
            }),
            children: (0, r.jsx)(I.Ay, {
              timeout: 2e3,
              children: e => (0, r.jsx)(ec, {
                channel: t,
                toggleRequestToSpeakSidebar: b,
                showRequestToSpeakSidebar: a,
                popoutWindow: j,
                popoutWindowAlwaysOnTop: x,
                popoutOpen: C,
                popoutType: i,
                chatOpen: T,
                idleProps: e
              })
            })
          })
        }), a ? (0, r.jsx)(z.A, {
          channel: t,
          toggleRequestToSpeakSidebar: b,
          chatOpen: T
        }) : null, (0, r.jsxs)("div", {
          className: er.B2,
          children: [T && G && (0, r.jsx)(y.A, {
            channel: t,
            guild: w,
            maxWidth: k
          }), P && R && G && (0, r.jsx)(_.A, {
            channel: t,
            maxWidth: k
          })]
        })]
      }), (0, r.jsx)(A.WD, {})]
    })
  })
}