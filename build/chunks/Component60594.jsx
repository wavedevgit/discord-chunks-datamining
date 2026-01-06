/** Chunk was on 46746 **/
/** chunk id: 60594, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => Y
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

function Y(e) {
  var t;
  let {
    onClose: r,
    transitionState: s,
    sourcePID: o,
    analyticsLocations: Y = [],
    selectSource: X = true
  } = e, q = (0, u.e7)([_.ZP], () => {
    var e;
    return null != o && null != (e = _.ZP.getGameForPID(o)) ? e : true
  }), J = i.useRef(performance.now()), Q = (0, u.e7)([y.Z], () => (y.Z.getUseSystemScreensharePicker() || y.Z.getUseGamescopeCapture()) && ((0, S.isLinux)() || (0, S.isMac)() && c().satisfies(null === m.Z || true === m.Z ? true : m.Z.os.release, F.jR))), {
    analyticsLocations: K
  } = (0, j.ZP)(Y, v.Z.GO_LIVE_MODAL_V2), $ = (0, u.e7)([O.default], () => O.default.getCurrentUser()), ee = (0, B.Z)(), {
    state: et,
    dispatch: er
  } = (0, M.Ti)(q, $, ee), en = (0, x.Z)((0, S.isWindows)() && null != q && X ? "confirm" : "source_select");
  (0, k.Z)(Q, er, "confirm" === en);
  let ei = !I.ZP.canStreamQuality(I.ZP.StreamQuality.HIGH, $),
    es = !(0, S.isLinux)(),
    el = "confirm" === en,
    eo = !X && null != q && !el,
    ec = el || et.sourceType === d.vA.CAMERA,
    ea = Q && et.sourceType !== d.vA.CAMERA,
    ed = i.useMemo(() => {
      let e = [{
        name: V.intl.string(V.t.tHoi7u),
        value: d.vA.WINDOW,
        icon: h.GON
      }, {
        name: V.intl.string(V.t.MhJ43A),
        value: d.vA.CAMERA,
        icon: h.Odl
      }];
      return Q || e.splice(1, 0, {
        name: V.intl.string(V.t.slM8rG),
        value: d.vA.SCREEN,
        icon: h.pzj
      }), e
    }, [Q]),
    {
      sourceType: eu
    } = et,
    ef = i.useCallback(async e => {
      b.eo.updateSetting(et.notifyFriends), b.I0.updateSetting(et.hidePreview);
      let [t, n] = await (0, N.Z)(e.hasOwnProperty("pid") ? e.pid : e, {
        preset: et.preset,
        fps: et.fps,
        resolution: et.resolution,
        soundshareEnabled: !et.muteStreamAudio,
        previewDisabled: et.hidePreview,
        goLiveModalDurationMs: performance.now() - J.current,
        audioSourceId: et.audioSourceId,
        analyticsLocations: K
      });
      if (t) return r();
      "no permission" === n && p.Z.show({
        title: V.intl.string(V.t["X+mXeq"]),
        body: V.intl.string(V.t.MIJCzr)
      }), r()
    }, [r, et, K]);
  async function eh(e) {
    await (0, g.Z)({
      channelId: e
    }) && null != q && ef(q)
  }
  let ep = i.useCallback(() => {
    var e;
    ef({
      id: ("gamescope" === et.nativeSourceType ? "screen:" : "prepicked:") + et.nativeSourceType,
      name: null != (e = E.ZP.getLastPickedContentTitle()) ? e : V.intl.string(V.t.KKcy95),
      url: ""
    })
  }, [ef, et.nativeSourceType]);
  return (0, n.jsx)(M.Yw, {
    state: et,
    dispatch: er,
    children: (0, n.jsx)(h.IX, {
      transitionState: s,
      onClose: r,
      size: "xl",
      trackingProps: {
        impression: {
          impressionName: a.ImpressionNames.GO_LIVE_MODAL,
          impressionProperties: {
            location_stack: K,
            application_id: (0, S.isWindows)() ? null == (t = (0, P.Z)(_.ZP, C.Z)) ? true : t.id : true,
            parent_media_session_id: w.Z.getMediaSessionId()
          }
        }
      },
      children: (0, n.jsxs)("div", {
        className: l()(z.root, {
          [z.nativePicker]: Q && null == q,
          [z.channelSelector]: eo,
          [z.confirmStep]: el
        }),
        children: [eo ? (0, n.jsx)(T.Z, {
          className: l()(z.channelSelectorComponent, z.withFooter),
          onSelectChannel: eh
        }) : el ? (0, n.jsx)(R.Z, {}) : (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)("div", {
            className: z.header,
            children: (0, n.jsx)(h.sY7, {
              className: z.segmentedControl,
              value: eu,
              look: "pill",
              optionClassName: z.segmentedControlOption,
              onChange: e => {
                let {
                  value: t
                } = e;
                return er({
                  type: "set_source_type",
                  sourceType: t
                })
              },
              options: ed
            })
          }), (0, n.jsx)(f.w0Z, {
            className: z.content,
            children: Q && eu !== d.vA.CAMERA ? (0, n.jsx)(A.Z, {
              onSourceSelect: ep
            }) : (0, n.jsx)(L.Z, {
              onClick: function(e) {
                var t;
                (null == (t = e.id) ? true : t.startsWith(d.vA.CAMERA)) ? er({
                  type: "set_selected_source",
                  source: e
                }): ef(e)
              }
            })
          })]
        }), (0, n.jsxs)("div", {
          className: z.footer,
          children: [(0, n.jsxs)("div", {
            className: z.footerContent,
            children: [(0, n.jsx)(H.Z, {}), (0, n.jsxs)("div", {
              className: z.rightButtonGroup,
              children: [ei && (0, n.jsx)(G.Z, {
                onClose: r
              }), (ea || ec) && (0, n.jsx)(h.Button, {
                variant: "primary",
                size: "md",
                text: V.intl.string(ea && "gamescope" !== et.nativeSourceType ? V.t.FiBjwU : W.default["5AyH/p"]),
                onClick: () => {
                  ea ? "gamescope" === et.nativeSourceType ? ep() : ((0, Z.t)(), (0, Z.T)(et.nativeSourceType)) : null != et.selectedChannel ? eh(et.selectedChannel) : null != et.selectedSource && ef(et.selectedSource)
                },
                disabled: ea && !es && "" === et.nativeSourceType || ec && null == et.selectedSource
              }), (0, n.jsx)(U.Z, {
                align: "right"
              })]
            })]
          }), ei && (0, n.jsx)("div", {
            className: z.upsellRibbonContainer,
            children: (0, n.jsx)(D.Z, {
              onClose: r
            })
          })]
        })]
      })
    })
  })
}