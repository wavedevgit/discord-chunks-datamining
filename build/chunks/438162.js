/** Chunk was on 54030 **/
n.d(t, {
  Z: () => es
});
var r = n(200651),
  o = n(192379),
  i = n(120356),
  a = n.n(i),
  l = n(442837),
  c = n(952265),
  u = n(481060),
  s = n(239091),
  _ = n(13245),
  d = n(110924),
  f = n(100527),
  p = n(906732),
  b = n(146282),
  m = n(70097),
  g = n(594190),
  v = n(567409),
  h = n(74299),
  y = n(989941),
  O = n(199902),
  I = n(314897),
  C = n(592125),
  P = n(430824),
  E = n(131951),
  x = n(944486),
  w = n(449224),
  L = n(574254),
  Z = n(556296),
  T = n(237997),
  N = n(451478),
  k = n(585483),
  S = n(358085),
  A = n(13140),
  j = n(145597),
  D = n(830917),
  B = n(681603),
  W = n(358446),
  U = n(348733),
  R = n(708383),
  V = n(923532),
  G = n(915614),
  M = n(777382),
  z = n(333031),
  F = n(610394),
  Y = n(388627),
  H = n(561064),
  K = n(987650),
  X = n(981631),
  q = n(206583),
  J = n(388032),
  Q = n(329908);
let $ = !S.isPlatformEmbedded && !1,
  ee = $ ? (0, r.jsx)(m.Z, {
    src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
    className: Q.videoDev,
    autoPlay: !0,
    loop: !0,
    muted: !0
  }) : null,
  et = null;

function en(e) {
  e.preventDefault()
}

function er(e) {
  (0, s.jW)(e, async () => {
    let {
      default: e
    } = await n.e("17610").then(n.bind(n, 385620));
    return t => (0, r.jsx)(e, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = r
        })
      }
      return e
    }({}, t))
  })
}
let eo = o.memo(function(e) {
    let {
      keybind: t,
      onClick: n,
      locked: o
    } = e;
    return (0, r.jsx)(u.P3F, {
      className: a()(Q.overlayBackground, {
        [Q.overlayActive]: !o,
        [Q.overlayLocked]: o
      }),
      onMouseDown: e => {
        let {
          currentTarget: t,
          target: r,
          button: o
        } = e;
        o === X.AeJ.PRIMARY && t === r && n()
      },
      onContextMenu: er,
      children: o ? null : (0, r.jsx)(z.Z, {
        className: Q.closeContainer,
        children: (0, r.jsx)(G.Z, {
          keybind: t,
          onClick: n,
          IconComponent: u.Uz9
        })
      })
    })
  }),
  ei = o.memo(function(e) {
    let {
      locked: t,
      focused: n
    } = e;
    return t && n ? (0, r.jsx)(z.Z, {
      className: Q.closeContainer,
      children: (0, r.jsx)(G.Z, {
        onClick: () => _.Z.setInputLocked(!1, (0, j.getPID)()),
        IconComponent: u.d$P
      })
    }) : null
  });

function ea() {
  if (null != L.Z.getContextMenu()) {
    (0, s.Zy)();
    return
  }
  _.Z.setInputLocked(!0, (0, j.getPID)())
}

function el() {
  _.Z.setFocusedPID(j.DEV_PID)
}

function ec() {
  _.Z.setFocusedPID(null)
}

function eu(e) {
  let t = F.ZP.isInputLocked((0, j.getPID)());
  "alt" !== e.key.toLowerCase() || t || ("keyup" === e.type.toLowerCase() ? k.S.dispatch(X.CkL.OVERLAY_V3_SHOW_WIDGETS, {
    show: !1
  }) : "keydown" === e.type.toLowerCase() && k.S.dispatch(X.CkL.OVERLAY_V3_SHOW_WIDGETS, {
    show: !0
  }))
}

function es() {
  let e = (0, H.Z)(),
    {
      locked: t,
      focused: n,
      incompatibleApp: i,
      hasValidResolution: s,
      hasZeroSizeDimension: m,
      keybind: L,
      isPreviewingInGame: k
    } = (0, l.cj)([F.ZP, T.default, N.Z, Z.ZP], () => {
      let t = N.Z.windowSize((0, D.ZY)(e)),
        n = Z.ZP.getOverlayKeybind(),
        r = (0, j.getPID)();
      return {
        locked: F.ZP.isInputLocked(r),
        focused: r === j.DEV_PID ? T.default.isFocused(r) : F.ZP.isFocused(r),
        incompatibleApp: T.default.incompatibleApp,
        hasValidResolution: (0, j.validResolution)(t),
        isPreviewingInGame: T.default.isPreviewingInGame(),
        hasZeroSizeDimension: 0 === t.height || 0 === t.width,
        keybind: null != n ? (0, A.BB)(n.shortcut, !0) : "???"
      }
    }, [e]),
    S = (0, l.e7)([T.default], () => T.default.getActiveRegions()),
    {
      analyticsLocations: G
    } = (0, p.ZP)(f.Z.OVERLAY),
    z = t || k;
  ! function(e, t) {
    let n = o.useRef({
      mount: e,
      unmount: t
    });
    o.useEffect(() => {
      n.current = {
        mount: e,
        unmount: t
      }
    }), o.useEffect(() => (n.current.mount(), () => {
      n.current.unmount()
    }), [])
  }(() => {
    _.Z.overlayReady((0, j.getPID)()), e.addEventListener("keydown", eu), e.addEventListener("keyup", eu), $ && (e.document.hasFocus() && _.Z.setFocusedPID(j.DEV_PID), e.addEventListener("focus", el), e.addEventListener("blur", ec))
  }, () => {
    e.removeEventListener("keydown", eu), e.removeEventListener("keyup", eu), $ && (e.removeEventListener("focus", el), e.removeEventListener("blur", ec))
  }),
  function() {
    let e = o.useRef(!1),
      t = (0, Y.pL)(),
      n = x.Z.getVoiceChannelId(),
      r = C.Z.getChannel(n),
      i = null != r ? P.Z.getGuild(r.guild_id) : null,
      a = null != O.Z.getCurrentUserActiveStream(),
      l = null != n,
      c = (0, h.Z)(E.Z) && !a && null != t,
      u = l && null != i && null != n,
      {
        showKeybindIndicators: s,
        dismissKeybindNotification: d
      } = (0, W.K)();
    o.useEffect(() => {
      if (e.current) return;
      e.current = !0;
      let r = null;
      r = s ? {
        type: K.nc.KEYBIND_INDICATORS,
        markAsDismissed: d
      } : {
        type: K.nc.WELCOME
      }, c && u ? r = {
        type: K.nc.GO_LIVE_VOICE,
        game: t,
        voiceChannelId: n,
        voiceGuild: i
      } : c && (r = {
        type: K.nc.GO_LIVE_NON_VOICE,
        game: t
      }), _.Z.overlayMounted(r)
    }, [l, c, u, t, n, i, s, d])
  }(), o.useEffect(() => {
    if (t) {
      if ((0, c.Ay)(u.u1M), e.addEventListener("contextmenu", en, !1), null != et) {
        let e = Date.now() - et;
        _.Z.track(X.rMx.OVERLAY_LOCKED, {
          unlocked_duration: e
        }), et = null
      }
      return () => {
        e.removeEventListener("contextmenu", en, !1)
      }
    }
    e.removeEventListener("contextmenu", en, !1), null == et && (et = Date.now(), _.Z.track(X.rMx.OVERLAY_UNLOCKED))
  }, [t, e]);
  let er = (0, l.e7)([x.Z], () => x.Z.getVoiceChannelId()),
    es = (0, l.e7)([C.Z], () => C.Z.getChannel(er)),
    e_ = (0, l.e7)([P.Z], () => null != es ? P.Z.getGuild(es.guild_id) : null),
    ed = (0, l.e7)([I.default], () => I.default.getId()),
    ef = (0, l.e7)([g.ZP, w.Z], () => (0, y.Z)(g.ZP, w.Z)),
    ep = (0, v.Ns)(null == ef ? void 0 : ef.id),
    eb = (0, l.e7)([b.Z], () => null != b.Z.getLastFeedFetchDate(q.YN.GAME_PROFILE_FEED)),
    em = (0, d.Z)(eb);
  return (o.useEffect(() => {
    !em && eb && _.Z.notifyContentInventoryReady(ep)
  }, [ep, eb, em]), m || i) ? null : (0, r.jsx)(p.Gt, {
    value: G,
    children: (0, r.jsx)(u.vWI, {
      children: (0, r.jsxs)("div", {
        className: Q.overlay,
        children: [(0, r.jsx)(R.Z, {}), k && (0, r.jsx)("header", {
          className: Q.previewingInGameHeader,
          children: J.NW.string(J.t.iOq96u)
        }), ee, (!t || S.has(X.O0n.TEXT_WIDGET)) && (0, r.jsx)(eo, {
          locked: t,
          keybind: L,
          onClick: ea
        }), s ? (0, r.jsx)(M.Z, {
          className: a()({
            [Q.layoutLocked]: t,
            [Q.layoutUnlocked]: !t
          })
        }) : t ? null : (0, r.jsx)("div", {
          className: Q.invalidContainer,
          children: (0, r.jsx)("div", {
            className: Q.inactiveContainer,
            children: J.NW.format(J.t.ketnW1, j.OVERLAY_MIN_RESOLUTION)
          })
        }), $ && (0, r.jsx)(ei, {
          locked: t,
          focused: n
        }), null != e_ && null != er && (0, r.jsx)(V.Z, {
          streamerId: ed,
          guildId: e_.id,
          channelId: er
        }), (0, r.jsx)(U.Z, {
          locked: z,
          keybind: L
        }), (0, r.jsx)(B.Z, {})]
      })
    })
  })
}