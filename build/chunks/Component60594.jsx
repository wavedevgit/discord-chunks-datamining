/** Chunk was on 46746 **/
/** chunk id: 60594, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => ea
}), require("./388685.js"), require("./539854.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk488290 = require("./488290.js"),
  Chunk209739 = require("./209739.js"),
  u = require.n(Chunk209739),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk872810 = require("./872810.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk579806 = require("./579806.js"),
  Chunk89425 = require("./89425.js"),
  Chunk812206 = require("./812206.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk594190 = require("./594190.js"),
  Chunk751571 = require("./751571.js"),
  Chunk970731 = require("./970731.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk361291 = require("./361291.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk131951 = require("./131951.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk449224 = require("./449224.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk668519 = require("./668519.js"),
  Chunk451467 = require("./451467.js"),
  Chunk537413 = require("./537413.js"),
  Chunk299570 = require("./299570.js"),
  Chunk960861 = require("./960861.js"),
  Chunk989941 = require("./989941.js"),
  Chunk399299 = require("./399299.jsx"),
  Chunk351152 = require("./351152.jsx"),
  Chunk567126 = require("./567126.jsx"),
  Chunk143135 = require("./143135.js"),
  Chunk717298 = require("./717298.jsx"),
  Chunk70722 = require("./70722.js"),
  Chunk37113 = require("./37113.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk761274 = require("./761274.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk79985 = require("./79985.js"),
  Chunk402163 = require("./402163.js");

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

function el(e, t) {
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
let es = e => {
  let {
    visibleContent: t,
    markAsDismissed: n
  } = e;
  return t === m.z.GO_LIVE_SYSTEM_PICKER_COACHMARK ? (0, r.jsx)(w.ZP, {
    content: et.intl.string(et.t.sFyFJy),
    buttonCTA: et.intl.string(et.t["NX+WJC"]),
    onClick: () => {},
    onSecondaryClick: () => {
      open(M.Z.getArticleURL(Q.BhN.SCREEN_SHARING_MACOS))
    },
    secondaryButtonCTA: et.intl.string(et.t.hvVgAQ),
    caretPosition: w.DF.LEFT_CENTER,
    markAsDismissed: n
  }) : null
};

function eo(e) {
  var t, l, o, d, w;
  let {
    selectGuild: M = false,
    selectSource: B = true,
    guildId: X,
    analyticsLocation: eo,
    onClose: ea,
    transitionState: ec
  } = e, {
    preset: ed,
    resolution: eu,
    fps: ef,
    soundshareEnabled: em
  } = (0, f.cj)([I.Z], () => I.Z.getState()), eh = i.useRef(null), ep = i.useRef(Date.now()), ex = (0, f.e7)([E.Z, N.Z], () => N.Z.getChannel(E.Z.getVoiceChannelId())), eg = (0, f.e7)([C.ZP, A.Z], () => (0, D.isWindows)() ? (0, F.Z)(C.ZP, A.Z) : null), e_ = (0, f.e7)([R.default], () => {
    let e = R.default.getCurrentUser();
    return a()(null != e, "GoLiveModal: user cannot be undefined"), e
  }), ev = null != (t = null == ex ? true : ex.getGuildId()) ? t : X, ej = (0, f.e7)([P.Z], () => {
    var e;
    return null != ev ? null == (e = P.Z.getGuild(ev)) ? true : e.premiumTier : null
  }), [eb, ey] = null != (l = (0, U.Z)(ed, e_, ej)) ? l : [q.LY.RESOLUTION_720, q.ws.FPS_30], {
    lastPickerAction: eS
  } = (0, f.e7)([z.ZP], () => z.ZP.getPickerState()), eC = T.Z.getUseSystemScreensharePicker();
  (0, z.UB)();
  let eO = eC && (0, D.isMac)() && u().satisfies(null === _.Z || true === _.Z ? true : _.Z.os.release, K.jR),
    ew = [];
  ec === h.Dvm.ENTERED && eC && (0, D.isMac)() && ew.push(m.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
  let [eZ, eI] = (0, S.US)(ew, true, true);
  ed !== q.tI.PRESET_CUSTOM && (eu = eb, ef = ey), (0, G.Z)(ed, eu, ef, e_, ej) || (eu = eb, ef = ey);
  let eN = (0, y.Dt)(),
    [eP, eT] = i.useState((w = B && !eO, M ? 0 : w ? 2 : 3)),
    [eE, eR] = i.useState(eO),
    [eA, ek] = i.useState(null),
    [eM, eD] = i.useState(eO ? {
      id: "prepicked:",
      name: et.intl.string(et.t["KKcy9/"]),
      url: ""
    } : null),
    [eL, eB] = i.useState(null),
    [eG, eU] = i.useState(ed),
    [eW, ez] = i.useState(eu),
    [eF, eH] = i.useState(ef),
    [eV, eY] = i.useState(em),
    [eJ, eX] = i.useState(null != (o = Z.I0.getSetting()) && o),
    [eK, eq] = i.useState(null != X ? X : null),
    eQ = null != (d = null == ex ? true : ex.id) ? d : eA,
    [e$, e1] = i.useState(eO ? "" : true);
  async function e0() {
    var e, t;
    a()(null != eg || null != eM, "got nothing to stream");
    let n = null != (e = null == ex ? true : ex.id) ? e : eA;
    a()(null != n, "Received null target channel ID");
    let r = N.Z.getChannel(n),
      i = null != (t = null == r ? true : r.getGuildId()) ? t : X;
    if (null == ex && !await (0, v.Z)({
        channelId: n
      })) return;
    let l = eG,
      s = eW,
      o = eF;
    (0, G.Z)(l, s, o, e_, ej, r) || (l = q.tI.PRESET_VIDEO, s = q.LY.RESOLUTION_720, o = q.ws.FPS_30), (0, x.Rc)({
      preset: l,
      resolution: s,
      frameRate: o,
      soundshareEnabled: eV
    });
    let c = {};
    if (null == eM ? true : eM.id.startsWith("prepicked:")) c = z.ZP.getStreamStartOptions();
    else {
      let e = (0, J.Z)(eg, eM, C.ZP.getRunningGames()),
        t = !(0, D.isWindows)() || null == e || (null == eM ? true : eM.id.startsWith("camera:"));
      c.pid = t || null == e ? true : e.pid, null == c.pid && null != eM && (c.sourceId = eM.id, c.sourceName = eM.name)
    }(0, x.WH)(i, n, el(ei({}, c), {
      audioSourceId: eL,
      sound: eV,
      previewDisabled: eJ,
      nativePickerStyleUsed: e$,
      goLiveModalDurationMs: Date.now() - ep.current
    })), null != eZ && eI($.L.AUTO_DISMISS), eC || (async () => {
      await O.Z.hasPermission(ee.Eu.SCREEN_RECORDING, {
        showAuthorizationError: false
      }) || p.Z.show({
        title: et.intl.string(et.t["X+mXen"]),
        body: et.intl.string(et.t.MIJCzs)
      })
    })()
  }

  function e2() {
    e0(), ea()
  }
  i.useEffect(() => {
    let e = (0, D.isWindows)() ? (0, F.Z)(C.ZP, A.Z) : null,
      t = (null == e ? true : e.id) != null ? j.Z.getApplication(e.id) : null;
    k.default.track(Q.rMx.OPEN_MODAL, {
      type: "Go Live Modal",
      application_id: null == t ? true : t.id,
      application_name: null == e ? true : e.name,
      game_id: null == t ? true : t.id,
      location_section: eo
    })
  }, [eo]);
  let e5 = i.useCallback((e, t, n) => {
      var r;
      let i = (0, U.Z)(e, e_, ej),
        [l, s] = null != i ? i : [t, n];
      e !== eG && (t = l, n = s);
      let o = null != (r = null == ex ? true : ex.id) ? r : eA;
      a()(null != o, "Received null target channel ID");
      let c = N.Z.getChannel(o);
      if (!(0, G.Z)(e, t, n, e_, ej, c)) {
        let [e, r] = (0, U.Z)(q.tI.PRESET_VIDEO, e_, ej);
        t = e, n = r
      }
      n !== eF && eH(n), t !== eW && ez(t), l !== t || s !== n ? eU(q.tI.PRESET_CUSTOM) : e !== eG && eU(e)
    }, [ex, eA, e_, ej, eF, eW, eG]),
    e3 = i.useCallback(e => {
      (0, W.t)(), (0, W.T)(null != e ? e : e$)
    }, [e$]);

  function e8(e) {
    if (e.preventDefault(), 1 === eP) return e3();
    if (2 === eP) return eT(3);
    if (null != e$) return eT(1);
    let t = (0, J.Z)(eg, eM, C.ZP.getRunningGames());
    if (L.ZP.supportsFeature(Q.eRX.ELEVATED_HOOK) && (null == t ? true : t.elevated)) {
      var i;
      let e = null != (i = null == eg ? true : eg.pid) ? i : null;
      (0, h.ZDy)(async () => {
        let {
          default: t
        } = await n.e("74300").then(n.bind(n, 566852));
        return n => (0, r.jsx)(t, el(ei({}, n), {
          handleStream: e2,
          pid: e
        }))
      })
    } else e2()
  }
  let e4 = i.useCallback(e => {
      eD(e), null != e && (eC && (null == e ? true : e.id.startsWith("camera:")) !== true ? e1(e.id.split(":")[1]) : e1(true), eT(3), eR(true))
    }, [eC]),
    e7 = i.useCallback(e => {
      eq(e);
      eT(B ? 2 : 3)
    }, [B]),
    e6 = !(1 === eP && eC && eS === z.Uc.Error),
    e9 = function(e) {
      switch (e) {
        case 2:
          return et.intl.string(et.t["aC4/Zm"]);
        case 1:
          return et.intl.formatToPlainString(et.t.sbbPhY, {
            buttonName: et.intl.string(et.t.FiBjwc)
          });
        case 3:
          return null;
        default:
          return et.intl.string(et.t["1hKIam"])
      }
    }(eP),
    te = (0, r.jsx)(h.xBx, {
      className: en.modalHeader,
      separator: false,
      children: (0, r.jsxs)(b.Z, {
        direction: b.Z.Direction.VERTICAL,
        align: b.Z.Align.CENTER,
        className: en.header,
        children: [(0, r.jsx)(h.X6q, {
          variant: "heading-xl/semibold",
          id: eN,
          className: en.headerText,
          children: et.intl.string(et.t.RDkJQ0)
        }), e6 && null != e9 ? (0, r.jsx)(h.Text, {
          className: en.headerDescription,
          variant: "text-md/normal",
          color: "text-secondary",
          children: e9
        }) : null]
      })
    }),
    tt = i.useCallback(() => {
      eC && (0, W.t)(), eT(2)
    }, [eC]),
    tn = function(e, t, n, r) {
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
    }(eP, M, B, eE),
    tr = 1 !== eP && (3 !== eP || null == eM && null == eg || null == eQ),
    ti = i.useCallback(() => {
      null != tn && eT(tn)
    }, [tn]),
    tl = 1 === eP || eO && 3 === eP ? et.intl.string(et.t.FiBjwc) : eC && (3 !== eP || null != e$) ? et.intl.string(et.t.PDTjLC) : et.intl.string(et.t["UE/rPz"]),
    ts = (0, r.jsxs)(h.mzw, {
      className: en.modalFooter,
      direction: b.Z.Direction.HORIZONTAL,
      justify: null == tn ? b.Z.Justify.END : b.Z.Justify.BETWEEN,
      children: [null != tn ? (0, r.jsx)("div", {
        children: (0, r.jsx)(h.zxk, {
          variant: "secondary",
          size: "sm",
          text: et.intl.string(et.t["13/7kZ"]),
          onClick: ti
        })
      }) : null, (0, r.jsxs)("div", {
        className: en.buttonContainer,
        children: [(0, r.jsx)(h.zxk, {
          variant: "primary",
          size: "sm",
          text: tl,
          type: "submit",
          disabled: tr,
          autoFocus: true
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: en.cancelButton,
          children: (0, r.jsx)(h.zxk, {
            variant: "secondary",
            size: "sm",
            text: et.intl.string(et.t["ETE/oK"]),
            onClick: ea
          })
        })]
      })]
    });
  return (0, r.jsx)(g.Z, {
    page: Q.ZY5.GO_LIVE_MODAL,
    children: (0, r.jsxs)(h.Y0X, {
      "aria-labelledby": eN,
      transitionState: ec,
      size: h.CgR.DYNAMIC,
      className: s()(en.modalSize, en.border),
      parentComponent: "GoLiveModal",
      children: [(0, r.jsxs)("div", {
        className: en.container,
        children: [(0, r.jsx)(h.olH, {
          onClick: ea,
          className: en.modalCloseButton
        }), (0, r.jsx)("div", {
          className: en.artContainer,
          children: (0, r.jsx)("img", {
            className: en.refreshedArt,
            alt: "",
            src: er
          })
        }), (0, r.jsx)("div", {
          children: te
        })]
      }), (0, r.jsx)(h.yRy, {
        targetElementRef: eh,
        position: "right",
        align: "center",
        shouldShow: null != eZ,
        spacing: 18,
        renderPopout: () => (0, r.jsx)(es, {
          visibleContent: eZ,
          markAsDismissed: eI
        }),
        children: () => {
          var e;
          return (0, r.jsxs)("form", {
            onSubmit: e8,
            ref: eh,
            children: [(0, r.jsxs)(h.MyZ, {
              springConfig: el(ei({}, c.config.stiff), {
                clamp: true
              }),
              activeSlide: eP,
              width: 480,
              children: [(0, r.jsx)(h.Mi4, {
                id: 0,
                children: (0, r.jsx)("div", {
                  className: en.modalSize,
                  children: (0, r.jsx)(V.Z, {
                    onSelectGuild: e7
                  })
                })
              }), (0, r.jsx)(h.Mi4, {
                id: 2,
                children: (0, r.jsx)("div", {
                  className: en.modalSize,
                  children: eC ? (0, r.jsx)(Y.se, {
                    onSourceSelect: e4
                  }) : (0, r.jsx)(Y.oA, {
                    selectedSource: eM,
                    onChangeSelectedSource: e4
                  })
                })
              }), (0, r.jsx)(h.Mi4, {
                id: 3,
                children: (0, r.jsx)("div", {
                  className: en.modalSize,
                  children: (0, r.jsx)(H.Z, {
                    selectedChannelId: null != (e = null == ex ? true : ex.id) ? e : eA,
                    selectedPreset: eG,
                    selectedResolution: eW,
                    selectedSource: eM,
                    selectedFPS: eF,
                    sound: eV,
                    previewDisabled: eJ,
                    sourceChanged: eE,
                    selectSource: B,
                    onChangeSelectedFPS: e => e5(eG, eW, e),
                    onChangeSelectedResolution: e => e5(eG, e, eF),
                    onChangeSelectedPreset: e => e5(e, eW, eF),
                    onChangeSelectedChannelId: ek,
                    onChangeSelectedSource: e4,
                    onChangeSource: () => tt(),
                    onChangeAudioDevice: e => eB(e),
                    onChangeGuild: () => eT(0),
                    onChangeSound: e => eY(e),
                    onChangePreviewDisabled: e => eX(e),
                    onClose: ea,
                    selectedGuildId: eK,
                    targetGuildPremiumTier: ej,
                    selectGuild: M
                  })
                })
              }), (0, r.jsx)(h.Mi4, {
                id: 1,
                children: (0, r.jsx)("div", {
                  className: en.modalSize,
                  children: (0, r.jsx)(Y.Hu, {
                    onSourceSelect: e2,
                    onCancel: ti,
                    pickerType: e$
                  })
                })
              })]
            }), ts]
          })
        }
      })]
    })
  })
}

function ea(e) {
  let {
    showRefreshedGoLiveModal: t
  } = (0, B.a)({
    location: e.analyticsLocation
  }), n = (0, f.e7)([C.ZP], () => null != e.sourcePID ? C.ZP.getGameForPID(e.sourcePID) : true);
  return t ? (0, r.jsx)(X.Z, el(ei({}, e), {
    selectSource: e.selectSource,
    sourceApplication: null != n ? n : true
  })) : (0, r.jsx)(eo, ei({}, e))
}