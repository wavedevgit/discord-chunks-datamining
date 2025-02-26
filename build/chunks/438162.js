/** Chunk was on 54030 **/
n.d(t, {
  Z: () => e_
});
var r = n(200651),
  o = n(192379),
  a = n(120356),
  i = n.n(a),
  c = n(442837),
  l = n(952265),
  u = n(481060),
  _ = n(239091),
  s = n(13245),
  d = n(110924),
  b = n(100527),
  f = n(906732),
  p = n(146282),
  m = n(70097),
  g = n(594190),
  v = n(567409),
  h = n(74299),
  y = n(989941),
  O = n(199902),
  x = n(314897),
  C = n(592125),
  I = n(430824),
  P = n(131951),
  k = n(944486),
  E = n(449224),
  L = n(574254),
  w = n(556296),
  Z = n(237997),
  j = n(451478),
  N = n(585483),
  T = n(358085),
  S = n(13140),
  A = n(145597),
  D = n(830917),
  W = n(681603),
  B = n(358446),
  G = n(348733),
  R = n(708383),
  U = n(923532),
  z = n(915614),
  V = n(777382),
  M = n(333031),
  F = n(610394),
  Y = n(388627),
  H = n(561064),
  K = n(987650),
  X = n(981631),
  q = n(206583),
  J = n(388032),
  Q = n(703231);
let $ = !T.isPlatformEmbedded && !1,
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
  (0, _.jW)(e, async () => {
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
      className: i()(Q.overlayBackground, {
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
      children: o ? null : (0, r.jsx)(M.Z, {
        className: Q.closeContainer,
        children: (0, r.jsx)(z.Z, {
          keybind: t,
          onClick: n,
          IconComponent: u.Uz9
        })
      })
    })
  }),
  ea = o.memo(function(e) {
    let {
      locked: t,
      focused: n
    } = e;
    return t && n ? (0, r.jsx)(M.Z, {
      className: Q.closeContainer,
      children: (0, r.jsx)(z.Z, {
        onClick: () => s.Z.setInputLocked(!1, (0, A.getPID)()),
        IconComponent: u.d$P
      })
    }) : null
  });

function ei() {
  if (null != L.Z.getContextMenu()) {
    (0, _.Zy)();
    return
  }
  s.Z.setInputLocked(!0, (0, A.getPID)())
}

function ec() {
  s.Z.setFocusedPID(A.DEV_PID)
}

function el() {
  s.Z.setFocusedPID(null)
}

function eu(e) {
  let t = F.ZP.isInputLocked((0, A.getPID)());
  "alt" !== e.key.toLowerCase() || t || ("keyup" === e.type.toLowerCase() ? N.S.dispatch(X.CkL.OVERLAY_V3_SHOW_WIDGETS, {
    show: !1
  }) : "keydown" === e.type.toLowerCase() && N.S.dispatch(X.CkL.OVERLAY_V3_SHOW_WIDGETS, {
    show: !0
  }))
}

function e_() {
  let e = (0, H.Z)(),
    {
      locked: t,
      focused: n,
      incompatibleApp: a,
      hasValidResolution: _,
      hasZeroSizeDimension: m,
      keybind: L,
      isPreviewingInGame: N
    } = (0, c.cj)([F.ZP, Z.default, j.Z, w.ZP], () => {
      let t = j.Z.windowSize((0, D.ZY)(e)),
        n = w.ZP.getOverlayKeybind(),
        r = (0, A.getPID)();
      return {
        locked: F.ZP.isInputLocked(r),
        focused: r === A.DEV_PID ? Z.default.isFocused(r) : F.ZP.isFocused(r),
        incompatibleApp: Z.default.incompatibleApp,
        hasValidResolution: (0, A.validResolution)(t),
        isPreviewingInGame: Z.default.isPreviewingInGame(),
        hasZeroSizeDimension: 0 === t.height || 0 === t.width,
        keybind: null != n ? (0, S.BB)(n.shortcut, !0) : "???"
      }
    }, [e]),
    T = (0, c.e7)([Z.default], () => Z.default.getActiveRegions()),
    {
      analyticsLocations: z
    } = (0, f.ZP)(b.Z.OVERLAY),
    M = t || N;
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
    s.Z.overlayReady((0, A.getPID)()), e.addEventListener("keydown", eu), e.addEventListener("keyup", eu), $ && (e.document.hasFocus() && s.Z.setFocusedPID(A.DEV_PID), e.addEventListener("focus", ec), e.addEventListener("blur", el))
  }, () => {
    e.removeEventListener("keydown", eu), e.removeEventListener("keyup", eu), $ && (e.removeEventListener("focus", ec), e.removeEventListener("blur", el))
  }),
  function() {
    let e = o.useRef(!1),
      t = (0, Y.pL)(),
      n = k.Z.getVoiceChannelId(),
      r = C.Z.getChannel(n),
      a = null != r ? I.Z.getGuild(r.guild_id) : null,
      i = null != O.Z.getCurrentUserActiveStream(),
      c = null != n,
      l = (0, h.Z)(P.Z) && !i && null != t,
      u = c && null != a && null != n,
      {
        showKeybindIndicators: _,
        dismissKeybindNotification: d
      } = (0, B.K)();
    o.useEffect(() => {
      if (e.current) return;
      e.current = !0;
      let r = null;
      r = _ ? {
        type: K.nc.KEYBIND_INDICATORS,
        markAsDismissed: d
      } : {
        type: K.nc.WELCOME
      }, l && u ? r = {
        type: K.nc.GO_LIVE_VOICE,
        game: t,
        voiceChannelId: n,
        voiceGuild: a
      } : l && (r = {
        type: K.nc.GO_LIVE_NON_VOICE,
        game: t
      }), s.Z.overlayMounted(r)
    }, [c, l, u, t, n, a, _, d])
  }(), o.useEffect(() => {
    if (t) {
      if ((0, l.Ay)(u.u1M), e.addEventListener("contextmenu", en, !1), null != et) {
        let e = Date.now() - et;
        s.Z.track(X.rMx.OVERLAY_LOCKED, {
          unlocked_duration: e
        }), et = null
      }
      return () => {
        e.removeEventListener("contextmenu", en, !1)
      }
    }
    e.removeEventListener("contextmenu", en, !1), null == et && (et = Date.now(), s.Z.track(X.rMx.OVERLAY_UNLOCKED))
  }, [t, e]);
  let er = (0, c.e7)([k.Z], () => k.Z.getVoiceChannelId()),
    e_ = (0, c.e7)([C.Z], () => C.Z.getChannel(er)),
    es = (0, c.e7)([I.Z], () => null != e_ ? I.Z.getGuild(e_.guild_id) : null),
    ed = (0, c.e7)([x.default], () => x.default.getId()),
    eb = (0, c.e7)([g.ZP, E.Z], () => (0, y.Z)(g.ZP, E.Z)),
    ef = (0, v.Ns)(null == eb ? void 0 : eb.id),
    ep = (0, c.e7)([p.Z], () => null != p.Z.getLastFeedFetchDate(q.YN.GAME_PROFILE_FEED)),
    em = (0, d.Z)(ep);
  return (o.useEffect(() => {
    !em && ep && s.Z.notifyContentInventoryReady(ef)
  }, [ef, ep, em]), m || a) ? null : (0, r.jsx)(f.Gt, {
    value: z,
    children: (0, r.jsx)(u.vWI, {
      children: (0, r.jsxs)("div", {
        className: Q.overlay,
        children: [(0, r.jsx)(R.Z, {}), N && (0, r.jsx)("header", {
          className: Q.previewingInGameHeader,
          children: J.NW.string(J.t.iOq96u)
        }), ee, (!t || T.has(X.O0n.TEXT_WIDGET)) && (0, r.jsx)(eo, {
          locked: t,
          keybind: L,
          onClick: ei
        }), _ ? (0, r.jsx)(V.Z, {
          className: i()({
            [Q.layoutLocked]: t,
            [Q.layoutUnlocked]: !t
          })
        }) : t ? null : (0, r.jsx)("div", {
          className: Q.invalidContainer,
          children: (0, r.jsx)("div", {
            className: Q.inactiveContainer,
            children: J.NW.format(J.t.ketnW1, A.OVERLAY_MIN_RESOLUTION)
          })
        }), $ && (0, r.jsx)(ea, {
          locked: t,
          focused: n
        }), null != es && null != er && (0, r.jsx)(U.Z, {
          streamerId: ed,
          guildId: es.id,
          channelId: er
        }), (0, r.jsx)(G.Z, {
          locked: M,
          keybind: L
        }), (0, r.jsx)(W.Z, {})]
      })
    })
  })
}