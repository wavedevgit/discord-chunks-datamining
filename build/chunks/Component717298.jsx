/** Chunk was on 47863 **/
/** chunk id: 717298, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => X
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk209739 = require("./209739.js"),
  a = require.n(Chunk209739),
  Chunk990547 = require("./990547.js"),
  Chunk268146 = require("./268146.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk211266 = require("./211266.js"),
  Chunk579806 = require("./579806.js"),
  Chunk89425 = require("./89425.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk594190 = require("./594190.js"),
  Chunk695346 = require("./695346.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk594174 = require("./594174.js"),
  Chunk449224 = require("./449224.js"),
  Chunk358085 = require("./358085.js"),
  Chunk74538 = require("./74538.js"),
  Chunk299570 = require("./299570.js"),
  Chunk960861 = require("./960861.js"),
  Chunk989941 = require("./989941.js"),
  Chunk562224 = require("./562224.js"),
  Chunk544753 = require("./544753.js"),
  Chunk573429 = require("./573429.jsx"),
  Chunk560749 = require("./560749.jsx"),
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
  Chunk718629 = require("./718629.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk468918 = require("./468918.js");

function X(e) {
  var t;
  let {
    onClose: n,
    transitionState: l,
    sourceApplication: o,
    analyticsLocations: X = [],
    selectSource: K = true
  } = e, q = i.useRef(performance.now()), Y = (0, u.e7)([b.Z], () => (b.Z.getUseSystemScreensharePicker() || b.Z.getUseGamescopeCapture()) && ((0, w.isLinux)() || (0, w.isMac)() && a().satisfies(null === _.Z || true === _.Z ? true : _.Z.os.release, W.jR))), {
    analyticsLocations: Q
  } = (0, v.ZP)(X, x.Z.GO_LIVE_MODAL_V2), $ = (0, u.e7)([C.default], () => C.default.getCurrentUser()), ee = (0, N.Z)(), {
    state: et,
    dispatch: en
  } = (0, k.Ti)(o, $, ee), er = (0, m.Z)((0, w.isWindows)() && null != o && K ? "confirm" : "source_select");
  (0, H.Z)(Y, en, "confirm" === er);
  let ei = !Z.ZP.canStreamQuality(Z.ZP.StreamQuality.HIGH, $),
    el = !(0, w.isLinux)(),
    es = "confirm" === er,
    eo = !K && null != o && !es,
    ea = es || et.sourceType === d.vA.CAMERA,
    ec = Y && et.sourceType !== d.vA.CAMERA,
    ed = i.useMemo(() => {
      let e = [{
        name: z.intl.string(z.t.tHoi7u),
        value: d.vA.WINDOW,
        icon: p.GON
      }, {
        name: z.intl.string(z.t.MhJ43A),
        value: d.vA.CAMERA,
        icon: p.Odl
      }];
      return Y || e.splice(1, 0, {
        name: z.intl.string(z.t.slM8rG),
        value: d.vA.SCREEN,
        icon: p.pzj
      }), e
    }, [Y]),
    {
      sourceType: eu
    } = et,
    ef = i.useCallback(async e => {
      S.eo.updateSetting(et.notifyFriends), S.I0.updateSetting(et.hidePreview);
      let [t, r] = await (0, T.Z)(e.hasOwnProperty("pid") ? e.pid : e, {
        preset: et.preset,
        fps: et.fps,
        resolution: et.resolution,
        soundshareEnabled: !et.muteStreamAudio,
        previewDisabled: et.hidePreview,
        goLiveModalDurationMs: performance.now() - q.current,
        audioSourceId: et.audioSourceId,
        analyticsLocations: Q
      });
      if (t) return n();
      "no permission" === r && h.Z.show({
        title: z.intl.string(z.t["X+mXeq"]),
        body: z.intl.string(z.t.MIJCzr)
      }), n()
    }, [n, et, Q]);
  async function ep(e) {
    await (0, g.Z)({
      channelId: e
    }) && null != o && ef(o)
  }
  let eh = i.useCallback(() => {
    var e;
    ef({
      id: ("gamescope" === et.nativeSourceType ? "screen:" : "prepicked:") + et.nativeSourceType,
      name: null != (e = I.ZP.getLastPickedContentTitle()) ? e : z.intl.string(z.t.KKcy95),
      url: ""
    })
  }, [ef, et.nativeSourceType]);
  return (0, r.jsx)(k.Yw, {
    state: et,
    dispatch: en,
    children: (0, r.jsx)(p.IX, {
      transitionState: l,
      onClose: n,
      size: "xl",
      trackingProps: {
        impression: {
          impressionName: c.ImpressionNames.GO_LIVE_MODAL,
          impressionProperties: {
            location_stack: Q,
            application_id: (0, w.isWindows)() ? null == (t = (0, E.Z)(j.ZP, O.Z)) ? true : t.id : true,
            parent_media_session_id: y.Z.getMediaSessionId()
          }
        }
      },
      children: (0, r.jsxs)("div", {
        className: s()(J.root, {
          [J.nativePicker]: Y && null == o,
          [J.channelSelector]: eo,
          [J.confirmStep]: es
        }),
        children: [eo ? (0, r.jsx)(R.Z, {
          className: s()(J.channelSelectorComponent, J.withFooter),
          onSelectChannel: ep
        }) : es ? (0, r.jsx)(M.Z, {}) : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: J.header,
            children: (0, r.jsx)(p.sY7, {
              className: J.segmentedControl,
              value: eu,
              look: "pill",
              optionClassName: J.segmentedControlOption,
              onChange: e => {
                let {
                  value: t
                } = e;
                return en({
                  type: "set_source_type",
                  sourceType: t
                })
              },
              options: ed
            })
          }), (0, r.jsx)(f.w0Z, {
            className: J.content,
            children: Y && eu !== d.vA.CAMERA ? (0, r.jsx)(D.Z, {
              onSourceSelect: eh
            }) : (0, r.jsx)(L.Z, {
              onClick: function(e) {
                var t;
                (null == (t = e.id) ? true : t.startsWith(d.vA.CAMERA)) ? en({
                  type: "set_selected_source",
                  source: e
                }): ef(e)
              }
            })
          })]
        }), (0, r.jsxs)("div", {
          className: J.footer,
          children: [(0, r.jsxs)("div", {
            className: J.footerContent,
            children: [(0, r.jsx)(F.Z, {}), (0, r.jsxs)("div", {
              className: J.rightButtonGroup,
              children: [ei && (0, r.jsx)(G.Z, {
                onClose: n
              }), ec && !ea && (0, r.jsx)(A.Z, {
                mainCTADisabled: !el && "" === et.nativeSourceType,
                mainCTAOnClick: () => {
                  "gamescope" === et.nativeSourceType ? eh() : ((0, P.t)(), (0, P.T)(et.nativeSourceType))
                },
                align: "right",
                ctaText: z.intl.string("gamescope" === et.nativeSourceType ? V.default["5AyH/p"] : z.t.FiBjwU),
                hideOptionsButton: !ei
              }), ea && !ec && (0, r.jsx)(A.Z, {
                mainCTADisabled: null == et.selectedSource,
                mainCTAOnClick: () => {
                  null != et.selectedChannel ? ep(et.selectedChannel) : null != et.selectedSource && ef(et.selectedSource)
                },
                align: "right",
                hideOptionsButton: !ei,
                ctaText: z.intl.string(V.default["5AyH/p"])
              }), (!ei || !(ea || ec)) && (0, r.jsx)(B.Z, {
                align: "right"
              })]
            })]
          }), ei && (0, r.jsx)("div", {
            className: J.upsellRibbonContainer,
            children: (0, r.jsx)(U.Z, {
              onClose: n
            })
          })]
        })]
      })
    })
  })
}