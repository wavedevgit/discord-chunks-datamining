/** Chunk was on 46746 **/
n.d(t, {
  default: () => eh
}), n(388685), n(539854), n(35282);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  s = n.n(l),
  a = n(512722),
  o = n.n(a),
  c = n(200100),
  d = n(209739),
  u = n.n(d),
  f = n(252258),
  m = n(442837),
  h = n(704215),
  x = n(481060),
  p = n(668781),
  g = n(872810),
  _ = n(410575),
  j = n(579806),
  v = n(636449),
  b = n(317381),
  S = n(89425),
  N = n(812206),
  C = n(835473),
  y = n(600164),
  Z = n(313201),
  I = n(540059),
  O = n(243778),
  w = n(594190),
  T = n(998594),
  E = n(751571),
  P = n(970731),
  R = n(695346),
  k = n(361291),
  W = n(592125),
  A = n(430824),
  M = n(131951),
  L = n(944486),
  D = n(594174),
  G = n(449224),
  B = n(626135),
  U = n(63063),
  z = n(358085),
  F = n(998502),
  H = n(668519),
  V = n(451467),
  Y = n(537413),
  J = n(299570),
  X = n(960861),
  K = n(989941),
  q = n(399299),
  Q = n(351152),
  $ = n(567126),
  ee = n(143135),
  et = n(717298),
  en = n(70722),
  er = n(37113),
  ei = n(981631),
  el = n(921944),
  es = n(761274),
  ea = n(388032),
  eo = n(347226),
  ec = n(402163);

function ed(e) {
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

function eu(e, t) {
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
let ef = e => {
  let {
    visibleContent: t,
    markAsDismissed: n
  } = e;
  return t === h.z.GO_LIVE_SYSTEM_PICKER_COACHMARK ? (0, r.jsx)(P.ZP, {
    content: ea.NW.string(ea.t.sFyFJy),
    buttonCTA: ea.NW.string(ea.t["NX+WJC"]),
    onClick: () => {},
    onSecondaryClick: () => {
      open(U.Z.getArticleURL(ei.BhN.SCREEN_SHARING_MACOS))
    },
    secondaryButtonCTA: ea.NW.string(ea.t.hvVgAQ),
    caretPosition: P.DF.LEFT_CENTER,
    markAsDismissed: n
  }) : null
};

function em(e) {
  var t, l, a, d, P, U;
  let {
    selectGuild: H = !1,
    selectSource: et = !0,
    guildId: em,
    analyticsLocation: eh,
    onClose: ex,
    transitionState: ep
  } = e, {
    preset: eg,
    resolution: e_,
    fps: ej,
    soundshareEnabled: ev
  } = (0, m.cj)([k.Z], () => k.Z.getState()), eb = i.useRef(Date.now()), eS = (0, m.e7)([L.Z, W.Z], () => W.Z.getChannel(L.Z.getVoiceChannelId())), eN = (0, m.e7)([w.ZP, G.Z], () => (0, z.isWindows)() ? (0, K.Z)(w.ZP, G.Z) : null), eC = (0, m.e7)([b.ZP], () => b.ZP.getCurrentEmbeddedActivity()), ey = (null == eC ? void 0 : eC.location.kind) === f.E.CONTEXTLESS, eZ = (0, C.q)(null == eC ? void 0 : eC.applicationId), [eI, eO] = i.useState(null);
  i.useEffect(() => {
    (0, v.R)({
      isContextless: ey
    }) && (async () => {
      var e;
      eO(await (null === j.Z || void 0 === j.Z || null == (e = j.Z.window) ? void 0 : e.getMediaSourceId("DISCORD_ACTIVITY_POPOUT")))
    })()
  }, [ey]);
  let ew = (0, m.e7)([D.default], () => {
      let e = D.default.getCurrentUser();
      return o()(null != e, "GoLiveModal: user cannot be undefined"), e
    }),
    eT = null != (t = null == eS ? void 0 : eS.getGuildId()) ? t : em,
    eE = (0, m.e7)([A.Z], () => {
      var e;
      return null != eT ? null == (e = A.Z.getGuild(eT)) ? void 0 : e.premiumTier : null
    }),
    [eP, eR] = null != (l = (0, Y.Z)(eg, ew, eE)) ? l : [er.LY.RESOLUTION_720, er.ws.FPS_30],
    {
      lastPickerAction: ek
    } = (0, m.e7)([X.ZP], () => X.ZP.getPickerState()),
    eW = M.Z.getUseSystemScreensharePicker();
  (0, X.UB)();
  let eA = eW && (0, z.isMac)() && u().satisfies(null === j.Z || void 0 === j.Z ? void 0 : j.Z.os.release, en.jR),
    eM = [];
  ep === x.Dvm.ENTERED && eW && (0, z.isMac)() && eM.push(h.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
  let [eL, eD] = (0, O.US)(eM, void 0, !0);
  eg !== er.tI.PRESET_CUSTOM && (e_ = eP, ej = eR), (0, V.Z)(eg, e_, ej, ew, eE) || (e_ = eP, ej = eR);
  let eG = (0, Z.Dt)(),
    [eB, eU] = i.useState((U = et && !eA, H ? 0 : U ? 2 : 3)),
    [ez, eF] = i.useState(eA),
    [eH, eV] = i.useState(null),
    [eY, eJ] = i.useState(eA ? {
      id: "prepicked:",
      name: ea.NW.string(ea.t["KKcy9/"]),
      url: ""
    } : null),
    [eX, eK] = i.useState(null),
    [eq, eQ] = i.useState(eg),
    [e$, e1] = i.useState(e_),
    [e0, e2] = i.useState(ej),
    [e5, e3] = i.useState(ev),
    [e4, e8] = i.useState(null != (a = R.I0.getSetting()) && a),
    [e7, e9] = i.useState(null != em ? em : null),
    e6 = null != (d = null == eS ? void 0 : eS.id) ? d : eH,
    [te, tt] = i.useState(eA ? "" : void 0),
    tn = (0, I.Q3)("GoLiveModal");
  async function tr() {
    var e, t;
    o()(null != eN || null != eY || null != eC && null != eI, "got nothing to stream");
    let n = null != (e = null == eS ? void 0 : eS.id) ? e : eH;
    o()(null != n, "Received null target channel ID");
    let r = W.Z.getChannel(n),
      i = null != (t = null == r ? void 0 : r.getGuildId()) ? t : em;
    if (null == eS && !await (0, S.Z)({
        channelId: n
      })) return;
    let l = eq,
      s = e$,
      a = e0;
    (0, V.Z)(l, s, a, ew, eE, r) || (l = er.tI.PRESET_VIDEO, s = er.LY.RESOLUTION_720, a = er.ws.FPS_30), (0, g.Rc)({
      preset: l,
      resolution: s,
      frameRate: a,
      soundshareEnabled: e5
    });
    let c = {};
    if (null == eY ? void 0 : eY.id.startsWith("prepicked:")) c = X.ZP.getStreamStartOptions();
    else {
      let e = (0, ee.Z)(eN, eY, w.ZP.getRunningGames()),
        t = !(0, z.isWindows)() || null == e || (null == eY ? void 0 : eY.id.startsWith("camera:"));
      c.pid = t || null == e ? void 0 : e.pid, null == c.pid && (null != eY ? (c.sourceId = eY.id, c.sourceName = eY.name) : null != eI && (c.sourceId = eI, c.sourceName = null == eZ ? void 0 : eZ.name))
    }(0, g.WH)(i, n, eu(ed({}, c), {
      audioSourceId: eX,
      sound: e5,
      previewDisabled: e4,
      nativePickerStyleUsed: te,
      goLiveModalDurationMs: Date.now() - eb.current
    })), null != eL && eD(el.L.AUTO_DISMISS), eW || (async () => {
      await E.Z.hasPermission(es.Eu.SCREEN_RECORDING, {
        showAuthorizationError: !1
      }) || p.Z.show({
        title: ea.NW.string(ea.t["X+mXen"]),
        body: ea.NW.string(ea.t.MIJCzs)
      })
    })()
  }

  function ti() {
    tr(), ex()
  }
  i.useEffect(() => {
    let e = (0, z.isWindows)() ? (0, K.Z)(w.ZP, G.Z) : null,
      t = (null == e ? void 0 : e.id) != null ? N.Z.getApplication(e.id) : null;
    B.default.track(ei.rMx.OPEN_MODAL, {
      type: "Go Live Modal",
      application_id: null == t ? void 0 : t.id,
      application_name: null == e ? void 0 : e.name,
      game_id: null == t ? void 0 : t.id,
      location_section: eh
    }), T.Z.trackExposure({
      location: "GoLiveModal"
    })
  }, [eh]);
  let tl = i.useCallback((e, t, n) => {
      var r;
      let i = (0, Y.Z)(e, ew, eE),
        [l, s] = null != i ? i : [t, n];
      e !== eq && (t = l, n = s);
      let a = null != (r = null == eS ? void 0 : eS.id) ? r : eH;
      o()(null != a, "Received null target channel ID");
      let c = W.Z.getChannel(a);
      if (!(0, V.Z)(e, t, n, ew, eE, c)) {
        let [e, r] = (0, Y.Z)(er.tI.PRESET_VIDEO, ew, eE);
        t = e, n = r
      }
      n !== e0 && e2(n), t !== e$ && e1(t), l !== t || s !== n ? eQ(er.tI.PRESET_CUSTOM) : e !== eq && eQ(e)
    }, [eS, eH, ew, eE, e0, e$, eq]),
    ts = i.useCallback(e => {
      (0, J.t)(), (0, J.T)(null != e ? e : te)
    }, [te]);

  function ta(e) {
    if (e.preventDefault(), 1 === eB) return ts();
    if (2 === eB) return eU(3);
    if (null != te) return eU(1);
    let t = (0, ee.Z)(eN, eY, w.ZP.getRunningGames());
    if (F.ZP.supportsFeature(ei.eRX.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated)) {
      var i;
      let e = null != (i = null == eN ? void 0 : eN.pid) ? i : null;
      (0, x.ZDy)(async () => {
        let {
          default: t
        } = await n.e("74300").then(n.bind(n, 566852));
        return n => (0, r.jsx)(t, eu(ed({}, n), {
          handleStream: ti,
          pid: e
        }))
      })
    } else ti()
  }
  let to = i.useCallback(e => {
      eJ(e), null != e && (eW && (null == e ? void 0 : e.id.startsWith("camera:")) !== !0 ? tt(e.id.split(":")[1]) : tt(void 0), eU(3), eF(!0))
    }, [eW]),
    tc = i.useCallback(e => {
      e9(e);
      var t = 3;
      eU(et ? 2 : 3)
    }, [et]),
    td = !(1 === eB && eW && ek === X.Uc.Error),
    tu = function(e) {
      switch (e) {
        case 2:
          return ea.NW.string(ea.t["aC4/Zm"]);
        case 1:
          return ea.NW.formatToPlainString(ea.t.sbbPhY, {
            buttonName: ea.NW.string(ea.t.FiBjwc)
          });
        case 3:
          return null;
        default:
          return ea.NW.string(ea.t["1hKIam"])
      }
    }(eB),
    tf = (0, r.jsx)(x.xBx, {
      className: eo.modalHeader,
      separator: !1,
      children: (0, r.jsxs)(y.Z, {
        direction: y.Z.Direction.VERTICAL,
        align: y.Z.Align.CENTER,
        className: eo.header,
        children: [(0, r.jsx)(x.X6q, {
          variant: "heading-xl/semibold",
          id: eG,
          className: eo.headerText,
          children: ea.NW.string(ea.t.RDkJQ0)
        }), td && null != tu ? (0, r.jsx)(x.Text, {
          className: eo.headerDescription,
          variant: "text-md/normal",
          color: tn ? "text-secondary" : "text-normal",
          children: tu
        }) : null]
      })
    }),
    tm = i.useCallback(() => {
      eW && (0, J.t)(), eU(2)
    }, [eW]),
    th = function(e, t, n, r) {
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
    }(eB, H, et, ez),
    tx = 1 !== eB && (3 !== eB || null == eY && null == eN && null == eI || null == e6),
    tp = i.useCallback(() => {
      null != th && eU(th)
    }, [th]),
    tg = (0, r.jsxs)(x.MyZ, {
      springConfig: eu(ed({}, c.config.stiff), {
        clamp: !0
      }),
      activeSlide: eB,
      width: 480,
      children: [(0, r.jsx)(x.Mi4, {
        id: 0,
        children: (0, r.jsx)("div", {
          className: eo.modalSize,
          children: (0, r.jsx)(Q.Z, {
            onSelectGuild: tc
          })
        })
      }), (0, r.jsx)(x.Mi4, {
        id: 2,
        children: (0, r.jsx)("div", {
          className: eo.modalSize,
          children: eW ? (0, r.jsx)($.se, {
            onSourceSelect: to
          }) : (0, r.jsx)($.oA, {
            selectedSource: eY,
            onChangeSelectedSource: to
          })
        })
      }), (0, r.jsx)(x.Mi4, {
        id: 3,
        children: (0, r.jsx)("div", {
          className: eo.modalSize,
          children: (0, r.jsx)(q.Z, {
            selectedChannelId: null != (P = null == eS ? void 0 : eS.id) ? P : eH,
            selectedPreset: eq,
            selectedResolution: e$,
            selectedSource: eY,
            selectedFPS: e0,
            sound: e5,
            previewDisabled: e4,
            sourceChanged: ez,
            selectSource: et,
            onChangeSelectedFPS: e => tl(eq, e$, e),
            onChangeSelectedResolution: e => tl(eq, e, e0),
            onChangeSelectedPreset: e => tl(e, e$, e0),
            onChangeSelectedChannelId: eV,
            onChangeSelectedSource: to,
            onChangeSource: () => tm(),
            onChangeAudioDevice: e => eK(e),
            onChangeGuild: () => eU(0),
            onChangeSound: e => e3(e),
            onChangePreviewDisabled: e => e8(e),
            onClose: ex,
            selectedGuildId: e7,
            targetGuildPremiumTier: eE,
            selectGuild: H
          })
        })
      }), (0, r.jsx)(x.Mi4, {
        id: 1,
        children: (0, r.jsx)("div", {
          className: eo.modalSize,
          children: (0, r.jsx)($.Hu, {
            onSourceSelect: ti,
            onCancel: tp,
            pickerType: te
          })
        })
      })]
    }),
    t_ = 1 === eB || eA && 3 === eB ? ea.NW.string(ea.t.FiBjwc) : eW && (3 !== eB || null != te) ? ea.NW.string(ea.t.PDTjLC) : ea.NW.string(ea.t["UE/rPz"]),
    tj = tn ? (0, r.jsxs)(x.mzw, {
      className: eo.modalFooter,
      direction: y.Z.Direction.HORIZONTAL,
      justify: null == th ? y.Z.Justify.END : y.Z.Justify.BETWEEN,
      children: [null != th ? (0, r.jsx)("div", {
        children: (0, r.jsx)(x.zxk, {
          size: x.zxk.Sizes.SMALL,
          color: x.Ttl.PRIMARY,
          onClick: tp,
          children: ea.NW.string(ea.t["13/7kZ"])
        })
      }) : null, (0, r.jsxs)("div", {
        className: eo.buttonContainer,
        children: [(0, r.jsx)(x.zxk, {
          type: "submit",
          size: x.zxk.Sizes.SMALL,
          disabled: tx,
          autoFocus: !0,
          children: t_
        }), (0, r.jsx)(x.zxk, {
          className: eo.cancelButton,
          look: x.zxk.Looks.LINK,
          size: x.zxk.Sizes.SMALL,
          color: x.Ttl.PRIMARY,
          onClick: ex,
          children: ea.NW.string(ea.t["ETE/oK"])
        })]
      })]
    }) : (0, r.jsxs)(x.mzw, {
      className: eo.modalFooter,
      justify: null == th ? y.Z.Justify.START : y.Z.Justify.BETWEEN,
      children: [(0, r.jsx)(x.zxk, {
        type: "submit",
        size: x.zxk.Sizes.SMALL,
        disabled: tx,
        autoFocus: !0,
        children: t_
      }), null == th ? (0, r.jsx)(x.zxk, {
        className: eo.cancelButton,
        look: x.zxk.Looks.LINK,
        size: x.zxk.Sizes.SMALL,
        color: x.Ttl.PRIMARY,
        onClick: ex,
        children: ea.NW.string(ea.t["ETE/oK"])
      }) : (0, r.jsx)(x.zxk, {
        size: x.zxk.Sizes.SMALL,
        color: x.Ttl.PRIMARY,
        onClick: tp,
        children: ea.NW.string(ea.t["13/7kZ"])
      })]
    });
  return (0, r.jsx)(_.Z, {
    page: ei.ZY5.GO_LIVE_MODAL,
    children: (0, r.jsxs)(x.Y0X, {
      "aria-labelledby": eG,
      transitionState: ep,
      size: x.CgR.DYNAMIC,
      className: s()(eo.modalSize, eo.border),
      children: [tn ? (0, r.jsxs)("div", {
        className: eo.container,
        children: [(0, r.jsx)(x.olH, {
          onClick: ex,
          className: eo.modalCloseButton
        }), (0, r.jsx)("div", {
          className: eo.artContainer,
          children: (0, r.jsx)("img", {
            className: eo.refreshedArt,
            alt: "",
            src: ec
          })
        }), (0, r.jsx)("div", {
          children: tf
        })]
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(x.olH, {
          onClick: ex,
          className: eo.modalCloseButton
        }), (0, r.jsx)("div", {
          className: eo.art
        })]
      }), (0, r.jsx)(x.yRy, {
        position: "right",
        align: "center",
        shouldShow: null != eL,
        spacing: 18,
        renderPopout: () => (0, r.jsx)(ef, {
          visibleContent: eL,
          markAsDismissed: eD
        }),
        children: () => (0, r.jsxs)("form", {
          onSubmit: ta,
          children: [!tn && tf, tg, tj]
        })
      })]
    })
  })
}

function eh(e) {
  let {
    showRefreshedGoLiveModal: t
  } = (0, H.a)({
    location: e.analyticsLocation
  }), n = (0, m.e7)([w.ZP], () => null != e.sourcePID ? w.ZP.getGameForPID(e.sourcePID) : void 0);
  return t ? (0, r.jsx)(et.Z, eu(ed({}, e), {
    sourceApplication: null != n ? n : void 0
  })) : (0, r.jsx)(em, ed({}, e))
}