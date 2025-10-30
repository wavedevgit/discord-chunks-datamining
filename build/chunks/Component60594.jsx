/** Chunk was on 33840 **/
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
  Chunk13941 = require("./13941.js"),
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
  return t === p.z.GO_LIVE_SYSTEM_PICKER_COACHMARK ? (0, r.jsx)(w.ZP, {
    content: et.intl.string(et.t.sFyFJw),
    buttonCTA: et.intl.string(et.t["NX+WJN"]),
    onClick: () => {},
    onSecondaryClick: () => {
      open(k.Z.getArticleURL(Q.BhN.SCREEN_SHARING_MACOS))
    },
    secondaryButtonCTA: et.intl.string(et.t.hvVgAZ),
    caretPosition: w.DF.LEFT_CENTER,
    markAsDismissed: n
  }) : null
};

function eo(e) {
  var t, l, o, d, w;
  let {
    selectGuild: k = false,
    selectSource: B = true,
    guildId: K,
    analyticsLocation: eo,
    onClose: ea,
    transitionState: ec
  } = e, {
    preset: ed,
    resolution: eu,
    fps: ef,
    soundshareEnabled: ep
  } = (0, f.cj)([Z.Z], () => Z.Z.getState()), eh = i.useRef(null), em = i.useRef(Date.now()), e_ = (0, f.e7)([N.Z, I.Z], () => I.Z.getChannel(N.Z.getVoiceChannelId())), eg = (0, f.e7)([C.ZP, R.Z], () => (0, D.isWindows)() ? (0, W.Z)(C.ZP, R.Z) : null), ex = (0, f.e7)([A.default], () => {
    let e = A.default.getCurrentUser();
    return a()(null != e, "GoLiveModal: user cannot be undefined"), e
  }), ev = null != (t = null == e_ ? true : e_.getGuildId()) ? t : K, ej = (0, f.e7)([E.Z], () => {
    var e;
    return null != ev ? null == (e = E.Z.getGuild(ev)) ? true : e.premiumTier : null
  }), [eS, eb] = null != (l = (0, U.Z)(ed, ex, ej)) ? l : [q.ApplicationStreamResolutions.RESOLUTION_720, q.ApplicationStreamFPS.FPS_30], {
    lastPickerAction: ey
  } = (0, f.e7)([H.ZP], () => H.ZP.getPickerState()), eC = T.Z.getUseSystemScreensharePicker();
  (0, H.UB)();
  let eO = eC && (0, D.isMac)() && u().satisfies(null === x.Z || true === x.Z ? true : x.Z.os.release, Y.jR),
    ew = [];
  ec === h.Dvm.ENTERED && eC && (0, D.isMac)() && ew.push(p.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
  let [eP, eZ] = (0, y.US)(ew, true, true);
  ed !== q.ApplicationStreamPresets.PRESET_CUSTOM && (eu = eS, ef = eb), (0, G.Z)(ed, eu, ef, ex, ej) || (eu = eS, ef = eb);
  let eI = (0, b.Dt)(),
    [eE, eT] = i.useState((w = B && !eO, k ? 0 : w ? 2 : 3)),
    [eN, eA] = i.useState(eO),
    [eR, eM] = i.useState(null),
    [ek, eD] = i.useState(eO ? {
      id: "prepicked:",
      name: et.intl.string(et.t.KKcy95),
      url: ""
    } : null),
    [eL, eB] = i.useState(null),
    [eG, eU] = i.useState(ed),
    [eF, eH] = i.useState(eu),
    [eW, ez] = i.useState(ef),
    [eV, eX] = i.useState(ep),
    [eJ, eK] = i.useState(null != (o = P.I0.getSetting()) && o),
    [eY, eq] = i.useState(null != K ? K : null),
    eQ = null != (d = null == e_ ? true : e_.id) ? d : eR,
    [e$, e1] = i.useState(eO ? "" : true);
  async function e0() {
    var e, t;
    a()(null != eg || null != ek, "got nothing to stream");
    let n = null != (e = null == e_ ? true : e_.id) ? e : eR;
    a()(null != n, "Received null target channel ID");
    let r = I.Z.getChannel(n),
      i = null != (t = null == r ? true : r.getGuildId()) ? t : K;
    if (null == e_ && !await (0, v.Z)({
        channelId: n
      })) return;
    let l = eG,
      s = eF,
      o = eW;
    (0, G.Z)(l, s, o, ex, ej, r) || (l = q.ApplicationStreamPresets.PRESET_VIDEO, s = q.ApplicationStreamResolutions.RESOLUTION_720, o = q.ApplicationStreamFPS.FPS_30), (0, _.Rc)({
      preset: l,
      resolution: s,
      frameRate: o,
      soundshareEnabled: eV
    });
    let c = {};
    if (null == ek ? true : ek.id.startsWith("prepicked:")) c = H.ZP.getStreamStartOptions();
    else {
      let e = (0, J.Z)(eg, ek, C.ZP.getRunningGames()),
        t = !(0, D.isWindows)() || null == e || (null == ek ? true : ek.id.startsWith("camera:"));
      c.pid = t || null == e ? true : e.pid, null == c.pid && null != ek && (c.sourceId = ek.id, c.sourceName = ek.name)
    }(0, _.WH)(i, n, el(ei({}, c), {
      audioSourceId: eL,
      sound: eV,
      previewDisabled: eJ,
      nativePickerStyleUsed: e$,
      goLiveModalDurationMs: Date.now() - em.current
    })), null != eP && eZ($.L.AUTO_DISMISS), eC || (async () => {
      await O.Z.hasPermission(ee.Eu.SCREEN_RECORDING, {
        showAuthorizationError: false
      }) || m.Z.show({
        title: et.intl.string(et.t["X+mXeq"]),
        body: et.intl.string(et.t.MIJCzr)
      })
    })()
  }

  function e2() {
    e0(), ea()
  }
  i.useEffect(() => {
    let e = (0, D.isWindows)() ? (0, W.Z)(C.ZP, R.Z) : null,
      t = (null == e ? true : e.id) != null ? j.Z.getApplication(e.id) : null;
    M.default.track(Q.rMx.OPEN_MODAL, {
      type: "Go Live Modal",
      application_id: null == t ? true : t.id,
      application_name: null == e ? true : e.name,
      game_id: null == t ? true : t.id,
      location_section: eo
    })
  }, [eo]);
  let e5 = i.useCallback((e, t, n) => {
      var r;
      let i = (0, U.Z)(e, ex, ej),
        [l, s] = null != i ? i : [t, n];
      e !== eG && (t = l, n = s);
      let o = null != (r = null == e_ ? true : e_.id) ? r : eR;
      a()(null != o, "Received null target channel ID");
      let c = I.Z.getChannel(o);
      if (!(0, G.Z)(e, t, n, ex, ej, c)) {
        let [e, r] = (0, U.Z)(q.ApplicationStreamPresets.PRESET_VIDEO, ex, ej);
        t = e, n = r
      }
      n !== eW && ez(n), t !== eF && eH(t), l !== t || s !== n ? eU(q.ApplicationStreamPresets.PRESET_CUSTOM) : e !== eG && eU(e)
    }, [e_, eR, ex, ej, eW, eF, eG]),
    e3 = i.useCallback(e => {
      (0, F.t)(), (0, F.T)(null != e ? e : e$)
    }, [e$]);

  function e8(e) {
    if (e.preventDefault(), 1 === eE) return e3();
    if (2 === eE) return eT(3);
    if (null != e$) return eT(1);
    let t = (0, J.Z)(eg, ek, C.ZP.getRunningGames());
    if (L.ZP.supportsFeature(Q.eRX.ELEVATED_HOOK) && (null == t ? true : t.elevated)) {
      var i;
      let e = null != (i = null == eg ? true : eg.pid) ? i : null;
      (0, h.ZDy)(async () => {
        let {
          default: t
        } = await n.e("2795").then(n.bind(n, 75293));
        return n => (0, r.jsx)(t, el(ei({}, n), {
          handleStream: e2,
          pid: e
        }))
      })
    } else e2()
  }
  let e4 = i.useCallback(e => {
      eD(e), null != e && (eC && (null == e ? true : e.id.startsWith("camera:")) !== true ? e1(e.id.split(":")[1]) : e1(true), eT(3), eA(true))
    }, [eC]),
    e7 = i.useCallback(e => {
      eq(e);
      eT(B ? 2 : 3)
    }, [B]),
    e6 = !(1 === eE && eC && ey === H.Uc.Error),
    e9 = function(e) {
      switch (e) {
        case 2:
          return et.intl.string(et.t["aC4/Zi"]);
        case 1:
          return et.intl.formatToPlainString(et.t.sbbPhW, {
            buttonName: et.intl.string(et.t.FiBjwU)
          });
        case 3:
          return null;
        default:
          return et.intl.string(et.t["1hKIah"])
      }
    }(eE),
    te = (0, r.jsx)(h.xBx, {
      className: en.modalHeader,
      separator: false,
      children: (0, r.jsxs)(S.Z, {
        direction: S.Z.Direction.VERTICAL,
        align: S.Z.Align.CENTER,
        className: en.header,
        children: [(0, r.jsx)(h.Heading, {
          variant: "heading-xl/semibold",
          id: eI,
          className: en.headerText,
          children: et.intl.string(et.t.RDkJQ6)
        }), e6 && null != e9 ? (0, r.jsx)(h.Text, {
          className: en.headerDescription,
          variant: "text-md/normal",
          color: "text-secondary",
          children: e9
        }) : null]
      })
    }),
    tt = i.useCallback(() => {
      eC && (0, F.t)(), eT(2)
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
    }(eE, k, B, eN),
    tr = 1 !== eE && (3 !== eE || null == ek && null == eg || null == eQ),
    ti = i.useCallback(() => {
      null != tn && eT(tn)
    }, [tn]),
    tl = 1 === eE || eO && 3 === eE ? et.intl.string(et.t.FiBjwU) : eC && (3 !== eE || null != e$) ? et.intl.string(et.t.PDTjLN) : et.intl.string(et.t["UE/rP/"]),
    ts = (0, r.jsxs)(h.mzw, {
      className: en.modalFooter,
      direction: S.Z.Direction.HORIZONTAL,
      justify: null == tn ? S.Z.Justify.END : S.Z.Justify.BETWEEN,
      children: [null != tn ? (0, r.jsx)("div", {
        children: (0, r.jsx)(h.Button, {
          variant: "secondary",
          size: "sm",
          text: et.intl.string(et.t["13/7kX"]),
          onClick: ti
        })
      }) : null, (0, r.jsxs)("div", {
        className: en.buttonContainer,
        children: [(0, r.jsx)(h.Button, {
          variant: "primary",
          size: "sm",
          text: tl,
          type: "submit",
          disabled: tr,
          autoFocus: true
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: en.cancelButton,
          children: (0, r.jsx)(h.Button, {
            variant: "secondary",
            size: "sm",
            text: et.intl.string(et.t["ETE/oC"]),
            onClick: ea
          })
        })]
      })]
    });
  return (0, r.jsx)(g.Z, {
    page: Q.ZY5.GO_LIVE_MODAL,
    children: (0, r.jsxs)(h.Y0X, {
      "aria-labelledby": eI,
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
        shouldShow: null != eP,
        spacing: 18,
        renderPopout: () => (0, r.jsx)(es, {
          visibleContent: eP,
          markAsDismissed: eZ
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
              activeSlide: eE,
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
                  children: eC ? (0, r.jsx)(X.se, {
                    onSourceSelect: e4,
                    selectedSource: ek
                  }) : (0, r.jsx)(X.oA, {
                    selectedSource: ek,
                    onChangeSelectedSource: e4
                  })
                })
              }), (0, r.jsx)(h.Mi4, {
                id: 3,
                children: (0, r.jsx)("div", {
                  className: en.modalSize,
                  children: (0, r.jsx)(z.default, {
                    selectedChannelId: null != (e = null == e_ ? true : e_.id) ? e : eR,
                    selectedPreset: eG,
                    selectedResolution: eF,
                    selectedSource: ek,
                    selectedFPS: eW,
                    sound: eV,
                    previewDisabled: eJ,
                    sourceChanged: eN,
                    selectSource: B,
                    onChangeSelectedFPS: e => e5(eG, eF, e),
                    onChangeSelectedResolution: e => e5(eG, e, eW),
                    onChangeSelectedPreset: e => e5(e, eF, eW),
                    onChangeSelectedChannelId: eM,
                    onChangeSelectedSource: e4,
                    onChangeSource: () => tt(),
                    onChangeAudioDevice: e => eB(e),
                    onChangeGuild: () => eT(0),
                    onChangeSound: e => eX(e),
                    onChangePreviewDisabled: e => eK(e),
                    onClose: ea,
                    selectedGuildId: eY,
                    targetGuildPremiumTier: ej,
                    selectGuild: k
                  })
                })
              }), (0, r.jsx)(h.Mi4, {
                id: 1,
                children: (0, r.jsx)("div", {
                  className: en.modalSize,
                  children: (0, r.jsx)(X.Hu, {
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
  return t ? (0, r.jsx)(K.Z, el(ei({}, e), {
    selectSource: e.selectSource,
    sourceApplication: null != n ? n : true
  })) : (0, r.jsx)(eo, ei({}, e))
}