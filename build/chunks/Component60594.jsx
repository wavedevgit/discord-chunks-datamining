/** Chunk was on 46746 **/
/** chunk id: 60594, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => X
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk209739 = require("./209739.js"),
  c = require.n(Chunk209739),
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
  Chunk21072 = require("./21072.jsx"),
  Chunk183326 = require("./183326.jsx"),
  Chunk914241 = require("./914241.jsx"),
  Chunk443762 = require("./443762.jsx"),
  Chunk741127 = require("./741127.jsx"),
  Chunk530626 = require("./530626.jsx"),
  Chunk492627 = require("./492627.jsx"),
  Chunk741731 = require("./741731.jsx"),
  Chunk562518 = require("./562518.jsx"),
  Chunk208552 = require("./208552.jsx"),
  Chunk544753 = require("./544753.js"),
  Chunk195436 = require("./195436.js"),
  Chunk70722 = require("./70722.js"),
  Chunk715689 = require("./715689.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk123795 = require("./123795.js");

function X(e) {
  var t;
  let {
    onClose: n,
    transitionState: s,
    sourcePID: o,
    analyticsLocations: X = [],
    selectSource: q = true
  } = e, J = (0, u.e7)([_.ZP], () => {
    var e;
    return null != o && null != (e = _.ZP.getGameForPID(o)) ? e : true
  }), Q = i.useRef(performance.now()), K = (0, u.e7)([y.Z], () => (y.Z.getUseSystemScreensharePicker() || y.Z.getUseGamescopeCapture()) && ((0, S.isLinux)() || (0, S.isMac)() && c().satisfies(null === m.Z || true === m.Z ? true : m.Z.os.release, W.jR))), {
    analyticsLocations: $
  } = (0, j.ZP)(X, v.Z.GO_LIVE_MODAL_V2), ee = (0, u.e7)([O.default], () => O.default.getCurrentUser()), et = (0, k.Z)(), {
    state: en,
    dispatch: er
  } = (0, A.Ti)(J, ee, et), ei = (0, x.Z)((0, S.isWindows)() && null != J && q ? "confirm" : "source_select");
  (0, F.Z)(K, er, "confirm" === ei);
  let es = !I.ZP.canStreamQuality(I.ZP.StreamQuality.HIGH, ee),
    el = !(0, S.isLinux)(),
    eo = "confirm" === ei,
    ec = !q && null != J && !eo,
    ea = eo || en.sourceType === d.vA.CAMERA,
    ed = K && en.sourceType !== d.vA.CAMERA,
    eu = i.useMemo(() => {
      let e = [{
        name: z.intl.string(z.t.tHoi7u),
        value: d.vA.WINDOW,
        icon: h.GON
      }, {
        name: z.intl.string(z.t.MhJ43A),
        value: d.vA.CAMERA,
        icon: h.Odl
      }];
      return K || e.splice(1, 0, {
        name: z.intl.string(z.t.slM8rG),
        value: d.vA.SCREEN,
        icon: h.pzj
      }), e
    }, [K]),
    {
      sourceType: ef
    } = en,
    eh = i.useCallback(async e => {
      b.eo.updateSetting(en.notifyFriends), b.I0.updateSetting(en.hidePreview);
      let [t, r] = await (0, N.Z)(e.hasOwnProperty("pid") ? e.pid : e, {
        preset: en.preset,
        fps: en.fps,
        resolution: en.resolution,
        soundshareEnabled: !en.muteStreamAudio,
        previewDisabled: en.hidePreview,
        goLiveModalDurationMs: performance.now() - Q.current,
        audioSourceId: en.audioSourceId,
        analyticsLocations: $
      });
      if (t) return n();
      "no permission" === r && p.Z.show({
        title: z.intl.string(z.t["X+mXeq"]),
        body: z.intl.string(z.t.MIJCzr)
      }), n()
    }, [n, en, $]);
  async function ep(e) {
    await (0, g.Z)({
      channelId: e
    }) && null != J && eh(J)
  }
  let ex = i.useCallback(() => {
    var e;
    eh({
      id: ("gamescope" === en.nativeSourceType ? "screen:" : "prepicked:") + en.nativeSourceType,
      name: null != (e = E.ZP.getLastPickedContentTitle()) ? e : z.intl.string(z.t.KKcy95),
      url: ""
    })
  }, [eh, en.nativeSourceType]);
  return (0, r.jsx)(A.Yw, {
    state: en,
    dispatch: er,
    children: (0, r.jsx)(h.IX, {
      transitionState: s,
      onClose: n,
      size: "xl",
      trackingProps: {
        impression: {
          impressionName: a.ImpressionNames.GO_LIVE_MODAL,
          impressionProperties: {
            location_stack: $,
            application_id: (0, S.isWindows)() ? null == (t = (0, P.Z)(_.ZP, C.Z)) ? true : t.id : true,
            parent_media_session_id: w.Z.getMediaSessionId()
          }
        }
      },
      children: (0, r.jsxs)("div", {
        className: l()(Y.root, {
          [Y.nativePicker]: K && null == J,
          [Y.channelSelector]: ec,
          [Y.confirmStep]: eo
        }),
        children: [ec ? (0, r.jsx)(R.Z, {
          className: l()(Y.channelSelectorComponent, Y.withFooter),
          onSelectChannel: ep
        }) : eo ? (0, r.jsx)(M.Z, {}) : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: Y.header,
            children: (0, r.jsx)(h.sY7, {
              className: Y.segmentedControl,
              value: ef,
              look: "pill",
              optionClassName: Y.segmentedControlOption,
              onChange: e => {
                let {
                  value: t
                } = e;
                return er({
                  type: "set_source_type",
                  sourceType: t
                })
              },
              options: eu
            })
          }), (0, r.jsx)(f.w0Z, {
            className: Y.content,
            children: K && ef !== d.vA.CAMERA ? (0, r.jsx)(L.Z, {
              onSourceSelect: ex
            }) : (0, r.jsx)(U.Z, {
              onClick: function(e) {
                var t;
                (null == (t = e.id) ? true : t.startsWith(d.vA.CAMERA)) ? er({
                  type: "set_selected_source",
                  source: e
                }): eh(e)
              }
            })
          })]
        }), (0, r.jsxs)("div", {
          className: Y.footer,
          children: [(0, r.jsxs)("div", {
            className: Y.footerContent,
            children: [(0, r.jsx)(B.Z, {}), (0, r.jsxs)("div", {
              className: Y.rightButtonGroup,
              children: [es && (0, r.jsx)(G.Z, {
                onClose: n
              }), ed && !ea && (0, r.jsx)(T.Z, {
                mainCTADisabled: !el && "" === en.nativeSourceType,
                mainCTAOnClick: () => {
                  "gamescope" === en.nativeSourceType ? ex() : ((0, Z.t)(), (0, Z.T)(en.nativeSourceType))
                },
                align: "right",
                ctaText: z.intl.string("gamescope" === en.nativeSourceType ? V.default["5AyH/p"] : z.t.FiBjwU),
                hideOptionsButton: !es
              }), ea && !ed && (0, r.jsx)(T.Z, {
                mainCTADisabled: null == en.selectedSource,
                mainCTAOnClick: () => {
                  null != en.selectedChannel ? ep(en.selectedChannel) : null != en.selectedSource && eh(en.selectedSource)
                },
                align: "right",
                hideOptionsButton: !es,
                ctaText: z.intl.string(V.default["5AyH/p"])
              }), (!es || !(ea || ed)) && (0, r.jsx)(D.Z, {
                align: "right"
              })]
            })]
          }), es && (0, r.jsx)("div", {
            className: Y.upsellRibbonContainer,
            children: (0, r.jsx)(H.Z, {
              onClose: n
            })
          })]
        })]
      })
    })
  })
}