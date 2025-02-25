/** Chunk was on 79477 **/
n.d(t, {
  default: () => ec
}), n(47120), n(653041), n(301563);
var l = n(200651),
  r = n(192379),
  s = n(512722),
  i = n.n(s),
  a = n(642128),
  o = n(209739),
  c = n.n(o),
  u = n(442837),
  d = n(704215),
  m = n(481060),
  g = n(668781),
  h = n(872810),
  x = n(410575),
  p = n(579806),
  v = n(636449),
  f = n(317381),
  j = n(89425),
  S = n(812206),
  N = n(835473),
  Z = n(600164),
  b = n(313201),
  O = n(243778),
  C = n(594190),
  E = n(998594),
  P = n(751571),
  y = n(970731),
  T = n(695346),
  I = n(361291),
  _ = n(592125),
  R = n(430824),
  w = n(131951),
  W = n(944486),
  A = n(594174),
  k = n(449224),
  L = n(626135),
  D = n(63063),
  M = n(358085),
  z = n(998502),
  U = n(668519),
  G = n(451467),
  F = n(537413),
  Y = n(299570),
  V = n(960861),
  B = n(989941),
  X = n(399299),
  J = n(351152),
  H = n(567126),
  K = n(143135),
  q = n(717298),
  Q = n(70722),
  $ = n(37113),
  ee = n(981631),
  et = n(921944),
  en = n(761274),
  el = n(388032),
  er = n(382840);

function es(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = l
    })
  }
  return e
}

function ei(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ea = e => {
  let {
    visibleContent: t,
    markAsDismissed: n
  } = e;
  return t === d.z.GO_LIVE_SYSTEM_PICKER_COACHMARK ? (0, l.jsx)(y.ZP, {
    content: el.NW.string(el.t.sFyFJy),
    buttonCTA: el.NW.string(el.t["NX+WJC"]),
    onClick: () => {},
    onSecondaryClick: () => {
      open(D.Z.getArticleURL(ee.BhN.SCREEN_SHARING_MACOS))
    },
    secondaryButtonCTA: el.NW.string(el.t.hvVgAQ),
    caretPosition: y.DF.LEFT_CENTER,
    markAsDismissed: n
  }) : null
};

function eo(e) {
  var t, s, o, y, D, U;
  let {
    selectGuild: q = !1,
    selectSource: eo = !0,
    guildId: ec,
    analyticsLocation: eu,
    onClose: ed,
    transitionState: em
  } = e, {
    preset: eg,
    resolution: eh,
    fps: ex,
    soundshareEnabled: ep
  } = (0, u.cj)([I.Z], () => I.Z.getState()), ev = r.useRef(Date.now()), ef = (0, u.e7)([W.Z, _.Z], () => _.Z.getChannel(W.Z.getVoiceChannelId())), ej = (0, u.e7)([C.ZP, k.Z], () => (0, M.isWindows)() ? (0, B.Z)(C.ZP, k.Z) : null), eS = (0, u.e7)([f.ZP], () => f.ZP.getCurrentEmbeddedActivity()), eN = (0, N.q)(null == eS ? void 0 : eS.applicationId), [eZ, eb] = r.useState(null);
  r.useEffect(() => {
    (0, v.R)() && (async () => {
      var e;
      eb(await (null === p.Z || void 0 === p.Z ? void 0 : null === (e = p.Z.window) || void 0 === e ? void 0 : e.getMediaSourceId("DISCORD_ACTIVITY_POPOUT")))
    })()
  }, []);
  let eO = (0, u.e7)([A.default], () => {
      let e = A.default.getCurrentUser();
      return i()(null != e, "GoLiveModal: user cannot be undefined"), e
    }),
    eC = null !== (t = null == ef ? void 0 : ef.getGuildId()) && void 0 !== t ? t : ec,
    eE = (0, u.e7)([R.Z], () => {
      var e;
      return null != eC ? null === (e = R.Z.getGuild(eC)) || void 0 === e ? void 0 : e.premiumTier : null
    }),
    [eP, ey] = null !== (s = (0, F.Z)(eg, eO, eE)) && void 0 !== s ? s : [$.LY.RESOLUTION_720, $.ws.FPS_30],
    {
      lastPickerAction: eT
    } = (0, u.e7)([V.ZP], () => V.ZP.getPickerState()),
    eI = w.Z.getUseSystemScreensharePicker();
  (0, V.UB)();
  let e_ = eI && (0, M.isMac)() && c().satisfies(null === p.Z || void 0 === p.Z ? void 0 : p.Z.os.release, Q.jR),
    eR = [];
  em === m.Dvm.ENTERED && eI && (0, M.isMac)() && eR.push(d.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
  let [ew, eW] = (0, O.US)(eR, void 0, !0);
  eg !== $.tI.PRESET_CUSTOM && (eh = eP, ex = ey), (0, G.Z)(eg, eh, ex, eO, eE) || (eh = eP, ex = ey);
  let eA = (0, b.Dt)(),
    [ek, eL] = r.useState((U = eo && !e_, q ? 0 : U ? 2 : 3)),
    [eD, eM] = r.useState(e_),
    [ez, eU] = r.useState(null),
    [eG, eF] = r.useState(e_ ? {
      id: "prepicked:",
      name: el.NW.string(el.t["KKcy9/"]),
      url: ""
    } : null),
    [eY, eV] = r.useState(null),
    [eB, eX] = r.useState(eg),
    [eJ, eH] = r.useState(eh),
    [eK, eq] = r.useState(ex),
    [eQ, e$] = r.useState(ep),
    [e0, e1] = r.useState(null !== (o = T.I0.getSetting()) && void 0 !== o && o),
    [e2, e3] = r.useState(null != ec ? ec : null),
    e4 = null !== (y = null == ef ? void 0 : ef.id) && void 0 !== y ? y : ez,
    [e7, e5] = r.useState(e_ ? "" : void 0);
  async function e8() {
    var e, t;
    i()(null != ej || null != eG || null != eS && null != eZ, "got nothing to stream");
    let n = null !== (e = null == ef ? void 0 : ef.id) && void 0 !== e ? e : ez;
    i()(null != n, "Received null target channel ID");
    let l = _.Z.getChannel(n),
      r = null !== (t = null == l ? void 0 : l.getGuildId()) && void 0 !== t ? t : ec;
    if (null == ef && !await (0, j.Z)({
        channelId: n
      })) return;
    let s = eB,
      a = eJ,
      o = eK;
    (0, G.Z)(s, a, o, eO, eE, l) || (s = $.tI.PRESET_VIDEO, a = $.LY.RESOLUTION_720, o = $.ws.FPS_30), (0, h.Rc)({
      preset: s,
      resolution: a,
      frameRate: o,
      soundshareEnabled: eQ
    });
    let c = (0, K.Z)(ej, eG, C.ZP.getRunningGames()),
      u = !(0, M.isWindows)() || null == c || (null == eG ? void 0 : eG.id.startsWith("camera:")) || null == c ? null : c.pid,
      d = null,
      m = null;
    null == u && (null != eG ? (d = eG.id, m = eG.name) : null != eZ && (d = eZ, m = null == eN ? void 0 : eN.name)), (0, h.WH)(r, n, {
      pid: u,
      sourceId: d,
      sourceName: m,
      audioSourceId: eY,
      sound: eQ,
      previewDisabled: e0,
      nativePickerStyleUsed: e7,
      goLiveModalDurationMs: Date.now() - ev.current
    }), null != ew && eW(et.L.AUTO_DISMISS), eI || (async () => {
      await P.Z.hasPermission(en.Eu.SCREEN_RECORDING, {
        showAuthorizationError: !1
      }) || g.Z.show({
        title: el.NW.string(el.t["X+mXen"]),
        body: el.NW.string(el.t.MIJCzs)
      })
    })()
  }

  function e9() {
    e8(), ed()
  }
  r.useEffect(() => {
    let e = (0, M.isWindows)() ? (0, B.Z)(C.ZP, k.Z) : null,
      t = (null == e ? void 0 : e.id) != null ? S.Z.getApplication(e.id) : null;
    L.default.track(ee.rMx.OPEN_MODAL, {
      type: "Go Live Modal",
      application_id: null == t ? void 0 : t.id,
      application_name: null == e ? void 0 : e.name,
      game_id: null == t ? void 0 : t.id,
      location_section: eu
    }), E.Z.trackExposure({
      location: "GoLiveModal"
    })
  }, [eu]);
  let e6 = r.useCallback((e, t, n) => {
      var l;
      let r = (0, F.Z)(e, eO, eE),
        [s, a] = null != r ? r : [t, n];
      e !== eB && (t = s, n = a);
      let o = null !== (l = null == ef ? void 0 : ef.id) && void 0 !== l ? l : ez;
      i()(null != o, "Received null target channel ID");
      let c = _.Z.getChannel(o);
      if (!(0, G.Z)(e, t, n, eO, eE, c)) {
        let [e, l] = (0, F.Z)($.tI.PRESET_VIDEO, eO, eE);
        t = e, n = l
      }
      n !== eK && eq(n), t !== eJ && eH(t), s !== t || a !== n ? eX($.tI.PRESET_CUSTOM) : e !== eB && eX(e)
    }, [ef, ez, eO, eE, eK, eJ, eB]),
    te = r.useCallback(e => {
      (0, Y.t)(), (0, Y.T)(null != e ? e : e7)
    }, [e7]);

  function tt(e) {
    if (e.preventDefault(), 1 === ek) return te();
    if (2 === ek) return eL(3);
    if (null != e7) return eL(1);
    let t = (0, K.Z)(ej, eG, C.ZP.getRunningGames());
    z.ZP.supportsFeature(ee.eRX.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated) ? function() {
      var e;
      let t = null !== (e = null == ej ? void 0 : ej.pid) && void 0 !== e ? e : null;
      (0, m.ZDy)(async () => {
        let {
          default: e
        } = await n.e("74300").then(n.bind(n, 566852));
        return n => (0, l.jsx)(e, ei(es({}, n), {
          handleStream: e9,
          pid: t
        }))
      })
    }() : e9()
  }
  let tn = r.useCallback(e => {
      eF(e), null != e && (eI && (null == e ? void 0 : e.id.startsWith("camera:")) !== !0 ? e5(e.id.split(":")[1]) : e5(void 0), eL(3), eM(!0))
    }, [eI]),
    tl = r.useCallback(e => {
      e3(e);
      var t = 3;
      eL(eo ? 2 : 3)
    }, [eo]),
    tr = !(1 === ek && eI && eT === V.Uc.Error),
    ts = function(e) {
      switch (e) {
        case 2:
          return el.NW.string(el.t["aC4/Zm"]);
        case 1:
          return el.NW.formatToPlainString(el.t.sbbPhY, {
            buttonName: el.NW.string(el.t.FiBjwc)
          });
        case 3:
          return null;
        default:
          return el.NW.string(el.t["1hKIam"])
      }
    }(ek),
    ti = (0, l.jsx)(m.xBx, {
      className: er.modalHeader,
      separator: !1,
      children: (0, l.jsxs)(Z.Z, {
        direction: Z.Z.Direction.VERTICAL,
        align: Z.Z.Align.CENTER,
        className: er.header,
        children: [(0, l.jsx)(m.X6q, {
          variant: "heading-xl/semibold",
          id: eA,
          className: er.headerText,
          children: el.NW.string(el.t.RDkJQ0)
        }), tr && null != ts ? (0, l.jsx)(m.Text, {
          className: er.headerDescription,
          variant: "text-md/normal",
          color: "text-normal",
          children: ts
        }) : null]
      })
    }),
    ta = r.useCallback(() => {
      eI && (0, Y.t)(), eL(2)
    }, [eI]),
    to = function(e, t, n, l) {
      switch (e) {
        case 2:
          return t ? 0 : null;
        case 1:
          return 3;
        case 3:
          if (l) return 2;
          if (!n && t) return 0;
          return null;
        default:
          return null
      }
    }(ek, q, eo, eD),
    tc = 1 !== ek && (3 !== ek || null == eG && null == ej && null == eZ || null == e4),
    tu = r.useCallback(() => {
      null != to && eL(to)
    }, [to]),
    td = (0, l.jsxs)(m.MyZ, {
      springConfig: ei(es({}, a.config.stiff), {
        clamp: !0
      }),
      activeSlide: ek,
      width: 480,
      children: [(0, l.jsx)(m.Mi4, {
        id: 0,
        children: (0, l.jsx)("div", {
          className: er.modalSize,
          children: (0, l.jsx)(J.Z, {
            onSelectGuild: tl
          })
        })
      }), (0, l.jsx)(m.Mi4, {
        id: 2,
        children: (0, l.jsx)("div", {
          className: er.modalSize,
          children: eI ? (0, l.jsx)(H.se, {
            onSourceSelect: tn
          }) : (0, l.jsx)(H.oA, {
            selectedSource: eG,
            onChangeSelectedSource: tn
          })
        })
      }), (0, l.jsx)(m.Mi4, {
        id: 3,
        children: (0, l.jsx)("div", {
          className: er.modalSize,
          children: (0, l.jsx)(X.Z, {
            selectedChannelId: null !== (D = null == ef ? void 0 : ef.id) && void 0 !== D ? D : ez,
            selectedPreset: eB,
            selectedResolution: eJ,
            selectedSource: eG,
            selectedFPS: eK,
            sound: eQ,
            previewDisabled: e0,
            sourceChanged: eD,
            selectSource: eo,
            onChangeSelectedFPS: e => e6(eB, eJ, e),
            onChangeSelectedResolution: e => e6(eB, e, eK),
            onChangeSelectedPreset: e => e6(e, eJ, eK),
            onChangeSelectedChannelId: eU,
            onChangeSelectedSource: tn,
            onChangeSource: () => ta(),
            onChangeAudioDevice: e => eV(e),
            onChangeGuild: () => eL(0),
            onChangeSound: e => e$(e),
            onChangePreviewDisabled: e => e1(e),
            onClose: ed,
            selectedGuildId: e2,
            targetGuildPremiumTier: eE,
            selectGuild: q
          })
        })
      }), (0, l.jsx)(m.Mi4, {
        id: 1,
        children: (0, l.jsx)("div", {
          className: er.modalSize,
          children: (0, l.jsx)(H.Hu, {
            onSourceSelect: e9,
            onCancel: tu,
            pickerType: e7
          })
        })
      })]
    }),
    tm = 1 === ek || e_ && 3 === ek ? el.NW.string(el.t.FiBjwc) : eI && (3 !== ek || null != e7) ? el.NW.string(el.t.PDTjLC) : el.NW.string(el.t["UE/rPz"]),
    tg = (0, l.jsxs)(m.mzw, {
      justify: null == to ? Z.Z.Justify.START : Z.Z.Justify.BETWEEN,
      children: [(0, l.jsx)(m.zxk, {
        type: "submit",
        size: m.zxk.Sizes.SMALL,
        disabled: tc,
        autoFocus: !0,
        children: tm
      }), null == to ? (0, l.jsx)(m.zxk, {
        className: er.cancelButton,
        look: m.zxk.Looks.LINK,
        size: m.zxk.Sizes.SMALL,
        color: m.Ttl.PRIMARY,
        onClick: ed,
        children: el.NW.string(el.t["ETE/oK"])
      }) : (0, l.jsx)(m.zxk, {
        size: m.zxk.Sizes.SMALL,
        color: m.Ttl.PRIMARY,
        onClick: tu,
        children: el.NW.string(el.t["13/7kZ"])
      })]
    });
  return (0, l.jsx)(x.Z, {
    page: ee.ZY5.GO_LIVE_MODAL,
    children: (0, l.jsxs)(m.Y0X, {
      "aria-labelledby": eA,
      transitionState: em,
      size: m.CgR.DYNAMIC,
      className: er.modalSize,
      children: [(0, l.jsx)(m.olH, {
        onClick: ed,
        className: er.modalCloseButton
      }), (0, l.jsx)("div", {
        className: er.art
      }), (0, l.jsx)(m.yRy, {
        position: "right",
        align: "center",
        shouldShow: null != ew,
        spacing: 18,
        renderPopout: () => (0, l.jsx)(ea, {
          visibleContent: ew,
          markAsDismissed: eW
        }),
        children: () => (0, l.jsxs)("form", {
          onSubmit: tt,
          children: [ti, td, tg]
        })
      })]
    })
  })
}

function ec(e) {
  let {
    showRefreshedGoLiveModal: t
  } = (0, U.a)({
    location: e.analyticsLocation
  });
  return t ? (0, l.jsx)(q.Z, es({}, e)) : (0, l.jsx)(eo, es({}, e))
}