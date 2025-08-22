/** Chunk was on 46746 **/
/** chunk id: 717298, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ee
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk202841 = require("./202841.js"),
  Chunk209739 = require("./209739.js"),
  c = require.n(Chunk209739),
  Chunk990547 = require("./990547.js"),
  Chunk435935 = require("./435935.jsx"),
  Chunk268146 = require("./268146.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk579806 = require("./579806.js"),
  Chunk89425 = require("./89425.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk594190 = require("./594190.js"),
  Chunk72897 = require("./72897.js"),
  Chunk695346 = require("./695346.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk594174 = require("./594174.js"),
  Chunk449224 = require("./449224.js"),
  Chunk358085 = require("./358085.js"),
  Chunk74538 = require("./74538.js"),
  Chunk668519 = require("./668519.js"),
  Chunk299570 = require("./299570.js"),
  Chunk960861 = require("./960861.js"),
  Chunk989941 = require("./989941.js"),
  Chunk562224 = require("./562224.js"),
  Chunk586290 = require("./586290.jsx"),
  Chunk544753 = require("./544753.js"),
  Chunk853030 = require("./853030.jsx"),
  Chunk560749 = require("./560749.jsx"),
  Chunk311924 = require("./311924.jsx"),
  Chunk485299 = require("./485299.jsx"),
  Chunk615161 = require("./615161.jsx"),
  Chunk289989 = require("./289989.jsx"),
  Chunk328242 = require("./328242.jsx"),
  Chunk565574 = require("./565574.jsx"),
  Chunk286420 = require("./286420.jsx"),
  Chunk173044 = require("./173044.jsx"),
  Chunk801604 = require("./801604.jsx"),
  Chunk577257 = require("./577257.js"),
  Chunk70722 = require("./70722.js"),
  Chunk65154 = require("./65154.js"),
  Chunk637824 = require("./637824.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk468918 = require("./468918.js");

function $(e) {
  return e * (2 - e)
}

function ee(e) {
  var t;
  let {
    onClose: n,
    transitionState: l,
    sourceApplication: a,
    analyticsLocations: ee = [],
    selectSource: et = true
  } = e, {
    twoClickVariant: en,
    twoStepModal: er,
    showSDHDUpsell: ei,
    footerSlideIn: el
  } = (0, N.a)({
    location: "golivemodalv2",
    autoTrackExposure: false
  }), es = i.useRef(performance.now()), eo = (0, m.e7)([C.Z], () => C.Z.getUseSystemScreensharePicker() && ((0, Z.isLinux)() || (0, Z.isMac)() && c().satisfies(null === x.Z || true === x.Z ? true : x.Z.os.release, J.jR))), {
    analyticsLocations: ea
  } = (0, v.ZP)(ee, _.Z.GO_LIVE_MODAL_V2), ec = (0, m.e7)([O.default], () => O.default.getCurrentUser()), ed = (0, M.Z)(), {
    state: eu,
    dispatch: ef
  } = (0, U.Ti)(a, ec, ed, (0, Z.isWindows)() && null != a && et ? "confirm" : "source_select"), [em, eh] = (0, S.Ls)(X.h7.AUDIO_INPUT, {
    location: "GoLiveModalV2"
  }), ep = em.concat(eh);
  (0, Y.Z)(eo, ef, "confirm" === eu.modalStep);
  let ex = !w.ZP.canStreamQuality(w.ZP.StreamQuality.HIGH, ec),
    eg = el && !eo,
    e_ = (0, h.q_F)({
      height: eg && null == eu.selectedSource ? 0 : 76 + 40 * !!ex,
      config: {
        easing: $,
        duration: 200
      }
    }, "respect-motion-settings"),
    ev = !(0, Z.isLinux)(),
    ej = "confirm" === eu.modalStep,
    eS = !et && null != a && !ej,
    eb = ej || !eS && en && (!eo || eu.sourceType === f.vA.CAMERA),
    eC = eo && eu.sourceType !== f.vA.CAMERA,
    ey = eo || !(0, Z.isWindows)() || !er || ej,
    eO = ei && ex,
    eI = ej && er,
    eZ = i.useMemo(() => {
      let e = [{
        name: q.intl.string(q.t.tHoi7u),
        value: f.vA.WINDOW,
        icon: h.GON
      }, {
        name: q.intl.string(q.t.MhJ43N),
        value: f.vA.CAMERA,
        icon: h.Odl
      }];
      return eo || e.splice(1, 0, {
        name: q.intl.string(q.t.slM8rK),
        value: f.vA.SCREEN,
        icon: h.pzj
      }), e
    }, [eo]),
    {
      sourceType: ew
    } = eu,
    eN = i.useCallback(async e => {
      b.eo.updateSetting(eu.notifyFriends), b.I0.updateSetting(eu.hidePreview);
      let [t, r] = await (0, R.Z)(e.hasOwnProperty("pid") ? e.pid : e, {
        preset: eu.preset,
        fps: eu.fps,
        resolution: eu.resolution,
        soundshareEnabled: !eu.muteStreamAudio,
        previewDisabled: eu.hidePreview,
        goLiveModalDurationMs: performance.now() - es.current,
        audioSourceId: eu.audioSourceId,
        analyticsLocations: ea
      });
      if (t) return n();
      "no permission" === r && p.Z.show({
        title: q.intl.string(q.t["X+mXen"]),
        body: q.intl.string(q.t.MIJCzs)
      }), n()
    }, [n, eu, ea]);
  async function eT(e) {
    if ((0, Z.isWindows)() && er && "source_select" === eu.modalStep) {
      ef({
        type: "set_step",
        step: "confirm"
      }), ef({
        type: "set_selected_channel",
        channelId: e
      });
      return
    }
    await (0, g.Z)({
      channelId: e
    }) && null != a && eN(a)
  }
  let eE = i.useCallback(() => {
      var e;
      eN({
        id: "prepicked:" + eu.nativeSourceType,
        name: null != (e = E.ZP.getLastPickedContentTitle()) ? e : q.intl.string(q.t["KKcy9/"]),
        url: ""
      })
    }, [eN, eu.nativeSourceType]),
    eP = (0, r.jsxs)(h.mzw, {
      className: s()(Q.footer, {
        [Q.footerShadow]: !ex && ej
      }),
      separator: false,
      direction: u.k.Direction.VERTICAL,
      children: [(0, r.jsxs)("div", {
        className: Q.footerContent,
        children: [(0, r.jsx)(V.Z, {
          nativePickerEnabled: eo
        }), (0, r.jsxs)("div", {
          className: Q.rightButtonGroup,
          children: [eO && (0, r.jsx)(H.Z, {
            onClose: n
          }), eC && !eb && (0, r.jsx)(k.Z, {
            mainCTADisabled: !ev && "" === eu.nativeSourceType,
            mainCTAOnClick: () => {
              (0, T.t)(), (0, T.T)(eu.nativeSourceType)
            },
            align: "right",
            ctaText: q.intl.string(q.t.FiBjwc),
            hideOptionsButton: !eO
          }), eb && !eC && (0, r.jsx)(k.Z, {
            mainCTADisabled: null == eu.selectedSource,
            mainCTAOnClick: () => {
              null != eu.selectedChannel ? eT(eu.selectedChannel) : null != eu.selectedSource && eN(eu.selectedSource)
            },
            align: "right",
            hideOptionsButton: !eO,
            ctaText: q.intl.string(K.default["5AyH/v"])
          }), (!eO || !(eb || eC)) && (0, r.jsx)(F.Z, {
            useSimplifiedMenu: eI,
            align: "right"
          })]
        })]
      }), ex && (0, r.jsx)(z.Z, {
        onClose: n
      })]
    }),
    eR = eg ? (0, r.jsx)(o.animated.div, {
      style: e_,
      children: eP
    }) : eP;
  return (0, r.jsx)(U.Yw, {
    state: eu,
    dispatch: ef,
    children: (0, r.jsxs)(h.Y0X, {
      impression: {
        impressionName: d.ImpressionNames.GO_LIVE_MODAL,
        impressionProperties: {
          location_stack: ea,
          application_id: (0, Z.isWindows)() ? null == (t = (0, P.Z)(j.ZP, I.Z)) ? true : t.id : true,
          parent_media_session_id: y.Z.getMediaSessionId()
        }
      },
      className: s()(Q.root, {
        [Q.nativePicker]: eo && null == a,
        [Q.channelSelector]: eS,
        [Q.confirmStep]: ej
      }),
      size: h.CgR.DYNAMIC,
      transitionState: l,
      parentComponent: "GoLiveModalV2",
      children: [eS ? (0, r.jsx)(L.Z, {
        className: s()(Q.channelSelectorComponent, {
          [Q.withFooter]: ey
        }),
        onSelectChannel: eT
      }) : ej ? (0, r.jsx)(B.Z, {
        hideBackButton: null != a
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.xBx, {
          separator: false,
          className: Q.header,
          children: (0, r.jsx)(h.sY7, {
            className: Q.segmentedControl,
            value: ew,
            look: "pill",
            optionClassName: Q.segmentedControlOption,
            onChange: e => {
              let {
                value: t
              } = e;
              return ef({
                type: "set_source_type",
                sourceType: t
              })
            },
            options: eZ
          })
        }), (0, r.jsx)(h.hzk, {
          className: Q.content,
          children: eo && ew !== f.vA.CAMERA ? (0, r.jsx)(G.Z, {
            onSourceSelect: eE
          }) : (0, r.jsx)(W.Z, {
            onClick: function(e) {
              function t() {
                var t;
                if (!(null == (t = e.id) ? true : t.startsWith(f.vA.CAMERA))) return;
                let n = (0, A.K)(e.id, eu.deviceSources, ep);
                ef({
                  type: "set_audio_source",
                  audioSourceId: null != n ? n : true
                })
              }
              if (er && (0, Z.isWindows)()) {
                t(), ef({
                  type: "set_selected_source",
                  source: e
                }), ef({
                  type: "set_step",
                  step: "confirm"
                });
                return
              }
              if (!en) return eN(e);
              t(), ef({
                type: "set_selected_source",
                source: e
              })
            }
          })
        })]
      }), eI && (0, r.jsx)(D.Z, {}), ey && eR]
    })
  })
}