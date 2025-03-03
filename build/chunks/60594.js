/** Chunk was on 46746 **/
n.d(t, {
  default: () => ec
}), n(47120), n(653041), n(301563);
var r = n(200651),
  l = n(192379),
  i = n(512722),
  s = n.n(i),
  o = n(642128),
  a = n(209739),
  c = n.n(a),
  d = n(442837),
  u = n(704215),
  f = n(481060),
  h = n(668781),
  m = n(872810),
  p = n(410575),
  x = n(579806),
  g = n(636449),
  _ = n(317381),
  v = n(89425),
  j = n(812206),
  b = n(835473),
  C = n(600164),
  S = n(313201),
  N = n(243778),
  y = n(594190),
  Z = n(998594),
  w = n(751571),
  O = n(970731),
  I = n(695346),
  P = n(361291),
  T = n(592125),
  E = n(430824),
  R = n(131951),
  W = n(944486),
  k = n(594174),
  A = n(449224),
  M = n(626135),
  L = n(63063),
  D = n(358085),
  G = n(998502),
  B = n(668519),
  U = n(451467),
  z = n(537413),
  F = n(299570),
  H = n(960861),
  V = n(989941),
  J = n(399299),
  X = n(351152),
  Y = n(567126),
  K = n(143135),
  q = n(717298),
  Q = n(70722),
  $ = n(37113),
  ee = n(981631),
  et = n(921944),
  en = n(761274),
  er = n(388032),
  el = n(711597);

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
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function es(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eo = e => {
  let {
    visibleContent: t,
    markAsDismissed: n
  } = e;
  return t === u.z.GO_LIVE_SYSTEM_PICKER_COACHMARK ? (0, r.jsx)(O.ZP, {
    content: er.NW.string(er.t.sFyFJy),
    buttonCTA: er.NW.string(er.t["NX+WJC"]),
    onClick: () => {},
    onSecondaryClick: () => {
      open(L.Z.getArticleURL(ee.BhN.SCREEN_SHARING_MACOS))
    },
    secondaryButtonCTA: er.NW.string(er.t.hvVgAQ),
    caretPosition: O.DF.LEFT_CENTER,
    markAsDismissed: n
  }) : null
};

function ea(e) {
  var t, i, a, O, L, B;
  let {
    selectGuild: q = !1,
    selectSource: ea = !0,
    guildId: ec,
    analyticsLocation: ed,
    onClose: eu,
    transitionState: ef
  } = e, {
    preset: eh,
    resolution: em,
    fps: ep,
    soundshareEnabled: ex
  } = (0, d.cj)([P.Z], () => P.Z.getState()), eg = l.useRef(Date.now()), e_ = (0, d.e7)([W.Z, T.Z], () => T.Z.getChannel(W.Z.getVoiceChannelId())), ev = (0, d.e7)([y.ZP, A.Z], () => (0, D.isWindows)() ? (0, V.Z)(y.ZP, A.Z) : null), ej = (0, d.e7)([_.ZP], () => _.ZP.getCurrentEmbeddedActivity()), eb = (0, b.q)(null == ej ? void 0 : ej.applicationId), [eC, eS] = l.useState(null);
  l.useEffect(() => {
    (0, g.R)() && (async () => {
      var e;
      eS(await (null === x.Z || void 0 === x.Z ? void 0 : null === (e = x.Z.window) || void 0 === e ? void 0 : e.getMediaSourceId("DISCORD_ACTIVITY_POPOUT")))
    })()
  }, []);
  let eN = (0, d.e7)([k.default], () => {
      let e = k.default.getCurrentUser();
      return s()(null != e, "GoLiveModal: user cannot be undefined"), e
    }),
    ey = null !== (t = null == e_ ? void 0 : e_.getGuildId()) && void 0 !== t ? t : ec,
    eZ = (0, d.e7)([E.Z], () => {
      var e;
      return null != ey ? null === (e = E.Z.getGuild(ey)) || void 0 === e ? void 0 : e.premiumTier : null
    }),
    [ew, eO] = null !== (i = (0, z.Z)(eh, eN, eZ)) && void 0 !== i ? i : [$.LY.RESOLUTION_720, $.ws.FPS_30],
    {
      lastPickerAction: eI
    } = (0, d.e7)([H.ZP], () => H.ZP.getPickerState()),
    eP = R.Z.getUseSystemScreensharePicker();
  (0, H.UB)();
  let eT = eP && (0, D.isMac)() && c().satisfies(null === x.Z || void 0 === x.Z ? void 0 : x.Z.os.release, Q.jR),
    eE = [];
  ef === f.Dvm.ENTERED && eP && (0, D.isMac)() && eE.push(u.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
  let [eR, eW] = (0, N.US)(eE, void 0, !0);
  eh !== $.tI.PRESET_CUSTOM && (em = ew, ep = eO), (0, U.Z)(eh, em, ep, eN, eZ) || (em = ew, ep = eO);
  let ek = (0, S.Dt)(),
    [eA, eM] = l.useState((B = ea && !eT, q ? 0 : B ? 2 : 3)),
    [eL, eD] = l.useState(eT),
    [eG, eB] = l.useState(null),
    [eU, ez] = l.useState(eT ? {
      id: "prepicked:",
      name: er.NW.string(er.t["KKcy9/"]),
      url: ""
    } : null),
    [eF, eH] = l.useState(null),
    [eV, eJ] = l.useState(eh),
    [eX, eY] = l.useState(em),
    [eK, eq] = l.useState(ep),
    [eQ, e$] = l.useState(ex),
    [e1, e0] = l.useState(null !== (a = I.I0.getSetting()) && void 0 !== a && a),
    [e2, e5] = l.useState(null != ec ? ec : null),
    e3 = null !== (O = null == e_ ? void 0 : e_.id) && void 0 !== O ? O : eG,
    [e4, e7] = l.useState(eT ? "" : void 0);
  async function e9() {
    var e, t;
    s()(null != ev || null != eU || null != ej && null != eC, "got nothing to stream");
    let n = null !== (e = null == e_ ? void 0 : e_.id) && void 0 !== e ? e : eG;
    s()(null != n, "Received null target channel ID");
    let r = T.Z.getChannel(n),
      l = null !== (t = null == r ? void 0 : r.getGuildId()) && void 0 !== t ? t : ec;
    if (null == e_ && !await (0, v.Z)({
        channelId: n
      })) return;
    let i = eV,
      o = eX,
      a = eK;
    (0, U.Z)(i, o, a, eN, eZ, r) || (i = $.tI.PRESET_VIDEO, o = $.LY.RESOLUTION_720, a = $.ws.FPS_30), (0, m.Rc)({
      preset: i,
      resolution: o,
      frameRate: a,
      soundshareEnabled: eQ
    });
    let c = (0, K.Z)(ev, eU, y.ZP.getRunningGames()),
      d = !(0, D.isWindows)() || null == c || (null == eU ? void 0 : eU.id.startsWith("camera:")) || null == c ? null : c.pid,
      u = null,
      f = null;
    null == d && (null != eU ? (u = eU.id, f = eU.name) : null != eC && (u = eC, f = null == eb ? void 0 : eb.name)), (0, m.WH)(l, n, {
      pid: d,
      sourceId: u,
      sourceName: f,
      audioSourceId: eF,
      sound: eQ,
      previewDisabled: e1,
      nativePickerStyleUsed: e4,
      goLiveModalDurationMs: Date.now() - eg.current
    }), null != eR && eW(et.L.AUTO_DISMISS), eP || (async () => {
      await w.Z.hasPermission(en.Eu.SCREEN_RECORDING, {
        showAuthorizationError: !1
      }) || h.Z.show({
        title: er.NW.string(er.t["X+mXen"]),
        body: er.NW.string(er.t.MIJCzs)
      })
    })()
  }

  function e8() {
    e9(), eu()
  }
  l.useEffect(() => {
    let e = (0, D.isWindows)() ? (0, V.Z)(y.ZP, A.Z) : null,
      t = (null == e ? void 0 : e.id) != null ? j.Z.getApplication(e.id) : null;
    M.default.track(ee.rMx.OPEN_MODAL, {
      type: "Go Live Modal",
      application_id: null == t ? void 0 : t.id,
      application_name: null == e ? void 0 : e.name,
      game_id: null == t ? void 0 : t.id,
      location_section: ed
    }), Z.Z.trackExposure({
      location: "GoLiveModal"
    })
  }, [ed]);
  let e6 = l.useCallback((e, t, n) => {
      var r;
      let l = (0, z.Z)(e, eN, eZ),
        [i, o] = null != l ? l : [t, n];
      e !== eV && (t = i, n = o);
      let a = null !== (r = null == e_ ? void 0 : e_.id) && void 0 !== r ? r : eG;
      s()(null != a, "Received null target channel ID");
      let c = T.Z.getChannel(a);
      if (!(0, U.Z)(e, t, n, eN, eZ, c)) {
        let [e, r] = (0, z.Z)($.tI.PRESET_VIDEO, eN, eZ);
        t = e, n = r
      }
      n !== eK && eq(n), t !== eX && eY(t), i !== t || o !== n ? eJ($.tI.PRESET_CUSTOM) : e !== eV && eJ(e)
    }, [e_, eG, eN, eZ, eK, eX, eV]),
    te = l.useCallback(e => {
      (0, F.t)(), (0, F.T)(null != e ? e : e4)
    }, [e4]);

  function tt(e) {
    if (e.preventDefault(), 1 === eA) return te();
    if (2 === eA) return eM(3);
    if (null != e4) return eM(1);
    let t = (0, K.Z)(ev, eU, y.ZP.getRunningGames());
    G.ZP.supportsFeature(ee.eRX.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated) ? function() {
      var e;
      let t = null !== (e = null == ev ? void 0 : ev.pid) && void 0 !== e ? e : null;
      (0, f.ZDy)(async () => {
        let {
          default: e
        } = await n.e("74300").then(n.bind(n, 566852));
        return n => (0, r.jsx)(e, es(ei({}, n), {
          handleStream: e8,
          pid: t
        }))
      })
    }() : e8()
  }
  let tn = l.useCallback(e => {
      ez(e), null != e && (eP && (null == e ? void 0 : e.id.startsWith("camera:")) !== !0 ? e7(e.id.split(":")[1]) : e7(void 0), eM(3), eD(!0))
    }, [eP]),
    tr = l.useCallback(e => {
      e5(e);
      var t = 3;
      eM(ea ? 2 : 3)
    }, [ea]),
    tl = !(1 === eA && eP && eI === H.Uc.Error),
    ti = function(e) {
      switch (e) {
        case 2:
          return er.NW.string(er.t["aC4/Zm"]);
        case 1:
          return er.NW.formatToPlainString(er.t.sbbPhY, {
            buttonName: er.NW.string(er.t.FiBjwc)
          });
        case 3:
          return null;
        default:
          return er.NW.string(er.t["1hKIam"])
      }
    }(eA),
    ts = (0, r.jsx)(f.xBx, {
      className: el.modalHeader,
      separator: !1,
      children: (0, r.jsxs)(C.Z, {
        direction: C.Z.Direction.VERTICAL,
        align: C.Z.Align.CENTER,
        className: el.header,
        children: [(0, r.jsx)(f.X6q, {
          variant: "heading-xl/semibold",
          id: ek,
          className: el.headerText,
          children: er.NW.string(er.t.RDkJQ0)
        }), tl && null != ti ? (0, r.jsx)(f.Text, {
          className: el.headerDescription,
          variant: "text-md/normal",
          color: "text-normal",
          children: ti
        }) : null]
      })
    }),
    to = l.useCallback(() => {
      eP && (0, F.t)(), eM(2)
    }, [eP]),
    ta = function(e, t, n, r) {
      switch (e) {
        case 2:
          return t ? 0 : null;
        case 1:
          return 3;
        case 3:
          if (r) return 2;
          if (!n && t) return 0;
          return null;
        default:
          return null
      }
    }(eA, q, ea, eL),
    tc = 1 !== eA && (3 !== eA || null == eU && null == ev && null == eC || null == e3),
    td = l.useCallback(() => {
      null != ta && eM(ta)
    }, [ta]),
    tu = (0, r.jsxs)(f.MyZ, {
      springConfig: es(ei({}, o.config.stiff), {
        clamp: !0
      }),
      activeSlide: eA,
      width: 480,
      children: [(0, r.jsx)(f.Mi4, {
        id: 0,
        children: (0, r.jsx)("div", {
          className: el.modalSize,
          children: (0, r.jsx)(X.Z, {
            onSelectGuild: tr
          })
        })
      }), (0, r.jsx)(f.Mi4, {
        id: 2,
        children: (0, r.jsx)("div", {
          className: el.modalSize,
          children: eP ? (0, r.jsx)(Y.se, {
            onSourceSelect: tn
          }) : (0, r.jsx)(Y.oA, {
            selectedSource: eU,
            onChangeSelectedSource: tn
          })
        })
      }), (0, r.jsx)(f.Mi4, {
        id: 3,
        children: (0, r.jsx)("div", {
          className: el.modalSize,
          children: (0, r.jsx)(J.Z, {
            selectedChannelId: null !== (L = null == e_ ? void 0 : e_.id) && void 0 !== L ? L : eG,
            selectedPreset: eV,
            selectedResolution: eX,
            selectedSource: eU,
            selectedFPS: eK,
            sound: eQ,
            previewDisabled: e1,
            sourceChanged: eL,
            selectSource: ea,
            onChangeSelectedFPS: e => e6(eV, eX, e),
            onChangeSelectedResolution: e => e6(eV, e, eK),
            onChangeSelectedPreset: e => e6(e, eX, eK),
            onChangeSelectedChannelId: eB,
            onChangeSelectedSource: tn,
            onChangeSource: () => to(),
            onChangeAudioDevice: e => eH(e),
            onChangeGuild: () => eM(0),
            onChangeSound: e => e$(e),
            onChangePreviewDisabled: e => e0(e),
            onClose: eu,
            selectedGuildId: e2,
            targetGuildPremiumTier: eZ,
            selectGuild: q
          })
        })
      }), (0, r.jsx)(f.Mi4, {
        id: 1,
        children: (0, r.jsx)("div", {
          className: el.modalSize,
          children: (0, r.jsx)(Y.Hu, {
            onSourceSelect: e8,
            onCancel: td,
            pickerType: e4
          })
        })
      })]
    }),
    tf = 1 === eA || eT && 3 === eA ? er.NW.string(er.t.FiBjwc) : eP && (3 !== eA || null != e4) ? er.NW.string(er.t.PDTjLC) : er.NW.string(er.t["UE/rPz"]),
    th = (0, r.jsxs)(f.mzw, {
      justify: null == ta ? C.Z.Justify.START : C.Z.Justify.BETWEEN,
      children: [(0, r.jsx)(f.zxk, {
        type: "submit",
        size: f.zxk.Sizes.SMALL,
        disabled: tc,
        autoFocus: !0,
        children: tf
      }), null == ta ? (0, r.jsx)(f.zxk, {
        className: el.cancelButton,
        look: f.zxk.Looks.LINK,
        size: f.zxk.Sizes.SMALL,
        color: f.Ttl.PRIMARY,
        onClick: eu,
        children: er.NW.string(er.t["ETE/oK"])
      }) : (0, r.jsx)(f.zxk, {
        size: f.zxk.Sizes.SMALL,
        color: f.Ttl.PRIMARY,
        onClick: td,
        children: er.NW.string(er.t["13/7kZ"])
      })]
    });
  return (0, r.jsx)(p.Z, {
    page: ee.ZY5.GO_LIVE_MODAL,
    children: (0, r.jsxs)(f.Y0X, {
      "aria-labelledby": ek,
      transitionState: ef,
      size: f.CgR.DYNAMIC,
      className: el.modalSize,
      children: [(0, r.jsx)(f.olH, {
        onClick: eu,
        className: el.modalCloseButton
      }), (0, r.jsx)("div", {
        className: el.art
      }), (0, r.jsx)(f.yRy, {
        position: "right",
        align: "center",
        shouldShow: null != eR,
        spacing: 18,
        renderPopout: () => (0, r.jsx)(eo, {
          visibleContent: eR,
          markAsDismissed: eW
        }),
        children: () => (0, r.jsxs)("form", {
          onSubmit: tt,
          children: [ts, tu, th]
        })
      })]
    })
  })
}

function ec(e) {
  let {
    showRefreshedGoLiveModal: t
  } = (0, B.a)({
    location: e.analyticsLocation
  }), n = (0, d.e7)([y.ZP], () => null != e.sourcePID ? y.ZP.getGameForPID(e.sourcePID) : void 0);
  return t ? (0, r.jsx)(q.Z, es(ei({}, e), {
    sourceApplication: null != n ? n : void 0
  })) : (0, r.jsx)(ea, ei({}, e))
}