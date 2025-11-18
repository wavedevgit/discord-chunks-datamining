/** Chunk was on 33840 **/
/** chunk id: 60594, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => ea
}), require("./388685.js"), require("./539854.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk636606 = require("./636606.js"),
  Chunk209739 = require("./209739.js"),
  u = require.n(Chunk209739),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk907862 = require("./907862.js"),
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
    markAsDismissed: n,
    formRef: i
  } = e;
  return t !== p.z.GO_LIVE_SYSTEM_PICKER_COACHMARK ? null : (0, r.jsx)(h.J2, {
    title: et.intl.string(et.t.sFyFJw),
    position: "right",
    body: true,
    targetElementRef: i,
    actions: [{
      variant: "secondary",
      text: et.intl.string(et.t.hvVgAZ),
      onClick: () => {
        open(k.Z.getArticleURL(Q.BhN.SCREEN_SHARING_MACOS)), n($.L.TAKE_ACTION)
      }
    }, {
      variant: "primary",
      text: et.intl.string(et.t["NX+WJN"]),
      onClick: () => {
        n($.L.TAKE_ACTION)
      }
    }],
    onRequestClose: () => {
      n($.L.USER_DISMISS)
    }
  })
};

function eo(e) {
  var t, l, o, d, h, k;
  let {
    selectGuild: B = false,
    selectSource: K = true,
    guildId: eo,
    analyticsLocation: ea,
    onClose: ec,
    transitionState: ed
  } = e, {
    preset: eu,
    resolution: ef,
    fps: ep,
    soundshareEnabled: eh
  } = (0, f.cj)([Z.Z], () => Z.Z.getState()), em = i.useRef(null), e_ = i.useRef(Date.now()), eg = (0, f.e7)([N.Z, I.Z], () => I.Z.getChannel(N.Z.getVoiceChannelId())), ex = (0, f.e7)([O.ZP, R.Z], () => (0, D.isWindows)() ? (0, W.Z)(O.ZP, R.Z) : null), ev = (0, f.e7)([A.default], () => {
    let e = A.default.getCurrentUser();
    return a()(null != e, "GoLiveModal: user cannot be undefined"), e
  }), ej = null != (t = null == eg ? true : eg.getGuildId()) ? t : eo, eS = (0, f.e7)([E.Z], () => {
    var e;
    return null != ej ? null == (e = E.Z.getGuild(ej)) ? true : e.premiumTier : null
  }), [eb, ey] = null != (l = (0, U.Z)(eu, ev, eS)) ? l : [Y.ApplicationStreamResolutions.RESOLUTION_720, Y.ApplicationStreamFPS.FPS_30], {
    lastPickerAction: eC
  } = (0, f.e7)([H.ZP], () => H.ZP.getPickerState()), eO = T.Z.getUseSystemScreensharePicker();
  (0, H.UB)();
  let ew = eO && (0, D.isMac)() && u().satisfies(null === v.Z || true === v.Z ? true : v.Z.os.release, q.jR),
    eP = [];
  ed === m.Dvm.ENTERED && eO && (0, D.isMac)() && eP.push(p.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
  let [eZ, eI] = (0, C.US)(eP, true, true);
  eu !== Y.ApplicationStreamPresets.PRESET_CUSTOM && (ef = eb, ep = ey), (0, G.Z)(eu, ef, ep, ev, eS) || (ef = eb, ep = ey);
  let eE = (0, y.Dt)(),
    [eT, eN] = i.useState((k = K && !ew, B ? 0 : k ? 2 : 3)),
    [eA, eR] = i.useState(ew),
    [eM, ek] = i.useState(null),
    [eD, eL] = i.useState(ew ? {
      id: "prepicked:",
      name: et.intl.string(et.t.KKcy95),
      url: ""
    } : null),
    [eB, eG] = i.useState(null),
    [eU, eF] = i.useState(eu),
    [eH, eW] = i.useState(ef),
    [ez, eV] = i.useState(ep),
    [eJ, eX] = i.useState(eh),
    [eK, eq] = i.useState(null != (o = P.I0.getSetting()) && o),
    [eY, eQ] = i.useState(null != eo ? eo : null),
    e$ = null != (d = null == eg ? true : eg.id) ? d : eM,
    [e1, e0] = i.useState(ew ? "" : true);
  async function e2() {
    var e, t;
    a()(null != ex || null != eD, "got nothing to stream");
    let n = null != (e = null == eg ? true : eg.id) ? e : eM;
    a()(null != n, "Received null target channel ID");
    let r = I.Z.getChannel(n),
      i = null != (t = null == r ? true : r.getGuildId()) ? t : eo;
    if (null == eg && !await (0, j.Z)({
        channelId: n
      })) return;
    let l = eU,
      s = eH,
      o = ez;
    (0, G.Z)(l, s, o, ev, eS, r) || (l = Y.ApplicationStreamPresets.PRESET_VIDEO, s = Y.ApplicationStreamResolutions.RESOLUTION_720, o = Y.ApplicationStreamFPS.FPS_30), (0, g.Rc)({
      preset: l,
      resolution: s,
      frameRate: o,
      soundshareEnabled: eJ
    });
    let c = {};
    if (null == eD ? true : eD.id.startsWith("prepicked:")) c = H.ZP.getStreamStartOptions();
    else {
      let e = (0, X.Z)(ex, eD, O.ZP.getRunningGames()),
        t = !(0, D.isWindows)() || null == e || (null == eD ? true : eD.id.startsWith("camera:"));
      c.pid = t || null == e ? true : e.pid, null == c.pid && null != eD && (c.sourceId = eD.id, c.sourceName = eD.name)
    }(0, g.WH)(i, n, el(ei({}, c), {
      audioSourceId: eB,
      sound: eJ,
      previewDisabled: eK,
      nativePickerStyleUsed: e1,
      goLiveModalDurationMs: Date.now() - e_.current
    })), null != eZ && eI($.L.AUTO_DISMISS), eO || (async () => {
      await w.Z.hasPermission(ee.Eu.SCREEN_RECORDING, {
        showAuthorizationError: false
      }) || _.Z.show({
        title: et.intl.string(et.t["X+mXeq"]),
        body: et.intl.string(et.t.MIJCzr)
      })
    })()
  }

  function e5() {
    e2(), ec()
  }
  i.useEffect(() => {
    let e = (0, D.isWindows)() ? (0, W.Z)(O.ZP, R.Z) : null,
      t = (null == e ? true : e.id) != null ? S.Z.getApplication(e.id) : null;
    M.default.track(Q.rMx.OPEN_MODAL, {
      type: "Go Live Modal",
      application_id: null == t ? true : t.id,
      application_name: null == e ? true : e.name,
      game_id: null == t ? true : t.id,
      location_section: ea
    })
  }, [ea]);
  let e3 = i.useCallback((e, t, n) => {
      var r;
      let i = (0, U.Z)(e, ev, eS),
        [l, s] = null != i ? i : [t, n];
      e !== eU && (t = l, n = s);
      let o = null != (r = null == eg ? true : eg.id) ? r : eM;
      a()(null != o, "Received null target channel ID");
      let c = I.Z.getChannel(o);
      if (!(0, G.Z)(e, t, n, ev, eS, c)) {
        let [e, r] = (0, U.Z)(Y.ApplicationStreamPresets.PRESET_VIDEO, ev, eS);
        t = e, n = r
      }
      n !== ez && eV(n), t !== eH && eW(t), l !== t || s !== n ? eF(Y.ApplicationStreamPresets.PRESET_CUSTOM) : e !== eU && eF(e)
    }, [eg, eM, ev, eS, ez, eH, eU]),
    e4 = i.useCallback(e => {
      (0, F.t)(), (0, F.T)(null != e ? e : e1)
    }, [e1]),
    e7 = i.useCallback(e => {
      eL(e), null != e && (eO && (null == e ? true : e.id.startsWith("camera:")) !== true ? e0(e.id.split(":")[1]) : e0(true), eN(3), eR(true))
    }, [eO]),
    e8 = i.useCallback(e => {
      eQ(e);
      eN(K ? 2 : 3)
    }, [K]),
    e6 = !(1 === eT && eO && eC === H.Uc.Error),
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
    }(eT),
    te = (0, r.jsx)(m.xBx, {
      "data-migration-pending": true,
      className: en.modalHeader,
      separator: false,
      children: (0, r.jsxs)(b.Z, {
        direction: b.Z.Direction.VERTICAL,
        align: b.Z.Align.CENTER,
        className: en.header,
        children: [(0, r.jsx)(m.Heading, {
          variant: "heading-xl/semibold",
          id: eE,
          className: en.headerText,
          children: et.intl.string(et.t.RDkJQ6)
        }), e6 && null != e9 ? (0, r.jsx)(m.Text, {
          className: en.headerDescription,
          variant: "text-md/normal",
          color: "text-secondary",
          children: e9
        }) : null]
      })
    }),
    tt = i.useCallback(() => {
      eO && (0, F.t)(), eN(2)
    }, [eO]),
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
    }(eT, B, K, eA),
    tr = 1 !== eT && (3 !== eT || null == eD && null == ex || null == e$),
    ti = i.useCallback(() => {
      null != tn && eN(tn)
    }, [tn]),
    tl = 1 === eT || ew && 3 === eT ? et.intl.string(et.t.FiBjwU) : eO && (3 !== eT || null != e1) ? et.intl.string(et.t.PDTjLN) : et.intl.string(et.t["UE/rP/"]),
    ts = (0, r.jsxs)(m.mzw, {
      "data-migration-pending": true,
      className: en.modalFooter,
      direction: b.Z.Direction.HORIZONTAL,
      justify: null == tn ? b.Z.Justify.END : b.Z.Justify.BETWEEN,
      children: [null != tn ? (0, r.jsx)("div", {
        children: (0, r.jsx)(m.Button, {
          variant: "secondary",
          size: "sm",
          text: et.intl.string(et.t["13/7kX"]),
          onClick: ti
        })
      }) : null, (0, r.jsxs)("div", {
        className: en.buttonContainer,
        children: [(0, r.jsx)(m.Button, {
          variant: "primary",
          size: "sm",
          text: tl,
          type: "submit",
          disabled: tr,
          autoFocus: true
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: en.cancelButton,
          children: (0, r.jsx)(m.Button, {
            variant: "secondary",
            size: "sm",
            text: et.intl.string(et.t["ETE/oC"]),
            onClick: ec
          })
        })]
      })]
    });
  return (0, r.jsx)(x.Z, {
    page: Q.ZY5.GO_LIVE_MODAL,
    children: (0, r.jsxs)(m.Y0X, {
      "data-migration-pending": true,
      "aria-labelledby": eE,
      transitionState: ed,
      size: m.CgR.DYNAMIC,
      className: s()(en.modalSize, en.border),
      parentComponent: "GoLiveModal",
      children: [(0, r.jsxs)("div", {
        className: en.container,
        children: [(0, r.jsx)("div", {
          className: en.modalCloseButton,
          children: (0, r.jsx)(m.PZ7, {
            onClick: ec
          })
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
      }), (0, r.jsxs)("form", {
        onSubmit: function(e) {
          if (e.preventDefault(), 1 === eT) return e4();
          if (2 === eT) return eN(3);
          if (null != e1) return eN(1);
          let t = (0, X.Z)(ex, eD, O.ZP.getRunningGames());
          if (L.ZP.supportsFeature(Q.eRX.ELEVATED_HOOK) && (null == t ? true : t.elevated)) {
            var i;
            let e = null != (i = null == ex ? true : ex.pid) ? i : null;
            (0, m.ZDy)(async () => {
              let {
                default: t
              } = await n.e("2795").then(n.bind(n, 75293));
              return n => (0, r.jsx)(t, el(ei({}, n), {
                handleStream: e5,
                pid: e
              }))
            })
          } else e5()
        },
        ref: em,
        children: [(0, r.jsxs)(m.MyZ, {
          springConfig: el(ei({}, c.config.stiff), {
            clamp: true
          }),
          activeSlide: eT,
          width: 480,
          children: [(0, r.jsx)(m.Mi4, {
            id: 0,
            children: (0, r.jsx)("div", {
              className: en.modalSize,
              children: (0, r.jsx)(V.Z, {
                onSelectGuild: e8
              })
            })
          }), (0, r.jsx)(m.Mi4, {
            id: 2,
            children: (0, r.jsx)("div", {
              className: en.modalSize,
              children: eO ? (0, r.jsx)(J.se, {
                onSourceSelect: e7,
                selectedSource: eD
              }) : (0, r.jsx)(J.oA, {
                selectedSource: eD,
                onChangeSelectedSource: e7
              })
            })
          }), (0, r.jsx)(m.Mi4, {
            id: 3,
            children: (0, r.jsx)("div", {
              className: en.modalSize,
              children: (0, r.jsx)(z.default, {
                selectedChannelId: null != (h = null == eg ? true : eg.id) ? h : eM,
                selectedPreset: eU,
                selectedResolution: eH,
                selectedSource: eD,
                selectedFPS: ez,
                sound: eJ,
                previewDisabled: eK,
                sourceChanged: eA,
                selectSource: K,
                onChangeSelectedFPS: e => e3(eU, eH, e),
                onChangeSelectedResolution: e => e3(eU, e, ez),
                onChangeSelectedPreset: e => e3(e, eH, ez),
                onChangeSelectedChannelId: ek,
                onChangeSelectedSource: e7,
                onChangeSource: () => tt(),
                onChangeAudioDevice: e => eG(e),
                onChangeGuild: () => eN(0),
                onChangeSound: e => eX(e),
                onChangePreviewDisabled: e => eq(e),
                onClose: ec,
                selectedGuildId: eY,
                targetGuildPremiumTier: eS,
                selectGuild: B
              })
            })
          }), (0, r.jsx)(m.Mi4, {
            id: 1,
            children: (0, r.jsx)("div", {
              className: en.modalSize,
              children: (0, r.jsx)(J.Hu, {
                onSourceSelect: e5,
                onCancel: ti,
                pickerType: e1
              })
            })
          })]
        }), ts]
      }), (0, r.jsx)(es, {
        visibleContent: eZ,
        markAsDismissed: eI,
        formRef: em
      })]
    })
  })
}

function ea(e) {
  let {
    showRefreshedGoLiveModal: t
  } = (0, B.a)({
    location: e.analyticsLocation
  }), n = (0, f.e7)([O.ZP], () => null != e.sourcePID ? O.ZP.getGameForPID(e.sourcePID) : true);
  return t ? (0, r.jsx)(K.Z, el(ei({}, e), {
    selectSource: e.selectSource,
    sourceApplication: null != n ? n : true
  })) : (0, r.jsx)(eo, ei({}, e))
}