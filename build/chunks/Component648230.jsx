/** Chunk was on 96811 **/
/** chunk id: 648230, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => Q
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk299855 = require("./299855.js"),
  c = require.n(Chunk299855),
  Chunk110259 = require("./110259.js"),
  Chunk141931 = require("./141931.js"),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
  Chunk444927 = require("./444927.js"),
  Chunk77729 = require("./77729.js"),
  Chunk90804 = require("./90804.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk15285 = require("./15285.js"),
  Chunk253932 = require("./253932.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk287809 = require("./287809.js"),
  Chunk157257 = require("./157257.js"),
  Chunk723702 = require("./723702.js"),
  Chunk927578 = require("./927578.js"),
  Chunk997630 = require("./997630.js"),
  Chunk571044 = require("./571044.js"),
  Chunk905552 = require("./905552.js"),
  Chunk72432 = require("./72432.js"),
  Chunk264540 = require("./264540.jsx"),
  Chunk255481 = require("./255481.jsx"),
  Chunk688465 = require("./688465.jsx"),
  Chunk864057 = require("./864057.jsx"),
  Chunk354062 = require("./354062.jsx"),
  Chunk715587 = require("./715587.jsx"),
  Chunk280481 = require("./280481.jsx"),
  Chunk517753 = require("./517753.jsx"),
  Chunk598032 = require("./598032.jsx"),
  Chunk997248 = require("./997248.js"),
  Chunk652681 = require("./652681.js"),
  Chunk502075 = require("./502075.js"),
  Chunk191850 = require("./191850.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk580340 = require("./580340.js");

function Q(e) {
  var t;
  let {
    onClose: r,
    transitionState: s,
    sourcePID: a,
    analyticsLocations: Q = [],
    selectSource: q = true
  } = e, K = (0, f.bG)([v.Ay], () => {
    var e;
    return null != a && null != (e = v.Ay.getGameForPID(a)) ? e : true
  }), Y = l.useRef(performance.now()), X = (0, f.bG)([S.A], () => (S.A.getUseSystemScreensharePicker() || S.A.getUseGamescopeCapture()) && ((0, C.isLinux)() || (0, C.isMac)() && c().satisfies(null === j.A || true === j.A ? true : j.A.os.release, B.WZ))), {
    analyticsLocations: J
  } = (0, b.Ay)(Q, g.A.GO_LIVE_MODAL_V2), $ = (0, f.bG)([_.default], () => _.default.getCurrentUser()), ee = (0, Z.A)(), {
    state: et,
    dispatch: er
  } = (0, M.yB)(K, $, ee), en = (0, x.A)((0, C.isWindows)() && null != K && q ? "confirm" : "source_select");
  (0, H.A)(X, er, "confirm" === en);
  let el = !w.Ay.canStreamQuality(w.Ay.StreamQuality.HIGH, $),
    es = !(0, C.isLinux)(),
    ei = "confirm" === en,
    ea = !q && null != K && !ei,
    ec = ei || et.sourceType === d.fS.CAMERA,
    eo = X && et.sourceType !== d.fS.CAMERA,
    ed = l.useMemo(() => {
      let e = [{
        name: z.intl.string(z.t.tHoi7u),
        value: d.fS.WINDOW,
        icon: h.WxK
      }, {
        name: z.intl.string(z.t.MhJ43A),
        value: d.fS.CAMERA,
        icon: h.npA
      }];
      return X || e.splice(1, 0, {
        name: z.intl.string(z.t.slM8rG),
        value: d.fS.SCREEN,
        icon: h.kN9
      }), e
    }, [X]),
    {
      sourceType: ef
    } = et,
    eu = l.useCallback(async e => {
      y.wv.updateSetting(et.notifyFriends), y.uh.updateSetting(et.hidePreview);
      let [t, n] = await (0, T.A)(e.hasOwnProperty("pid") ? e.pid : e, {
        preset: et.preset,
        fps: et.fps,
        resolution: et.resolution,
        soundshareEnabled: !et.muteStreamAudio,
        previewDisabled: et.hidePreview,
        goLiveModalDurationMs: performance.now() - Y.current,
        audioSourceId: et.audioSourceId,
        analyticsLocations: J
      });
      if (t) return r();
      "no permission" === n && p.A.show({
        title: z.intl.string(z.t["X+mXeq"]),
        body: z.intl.string(z.t.MIJCzr)
      }), r()
    }, [r, et, J]);
  async function eh(e) {
    await (0, m.A)({
      channelId: e
    }) && null != K && eu(K)
  }
  let ep = l.useCallback(() => {
    var e;
    eu({
      id: ("gamescope" === et.nativeSourceType ? "screen:" : "prepicked:") + et.nativeSourceType,
      name: null != (e = N.Ay.getLastPickedContentTitle()) ? e : z.intl.string(z.t.KKcy95),
      url: ""
    })
  }, [eu, et.nativeSourceType]);
  return (0, n.jsx)(M.KL, {
    state: et,
    dispatch: er,
    children: (0, n.jsx)(h.dWK, {
      transitionState: s,
      onClose: r,
      size: "xl",
      trackingProps: {
        impression: {
          impressionName: o.ImpressionNames.GO_LIVE_MODAL,
          impressionProperties: {
            location_stack: J,
            application_id: (0, C.isWindows)() ? null == (t = (0, I.A)(v.Ay, O.A)) ? true : t.id : true,
            parent_media_session_id: A.A.getMediaSessionId()
          }
        }
      },
      children: (0, n.jsxs)("div", {
        className: i()(W.zr, {
          [W._g]: X && null == K,
          [W.Tb]: ea,
          [W.Fe]: ei
        }),
        children: [ea ? (0, n.jsx)(R.A, {
          className: i()(W.or, W.Ym),
          onSelectChannel: eh
        }) : ei ? (0, n.jsx)(P.A, {}) : (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)("div", {
            className: W.wx,
            children: (0, n.jsx)(h.IzF, {
              className: W.q0,
              value: ef,
              look: "pill",
              optionClassName: W.LD,
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
          }), (0, n.jsx)(u.ArX, {
            className: W.Qs,
            children: X && ef !== d.fS.CAMERA ? (0, n.jsx)(D.A, {
              onSourceSelect: ep
            }) : (0, n.jsx)(U.A, {
              onClick: function(e) {
                var t;
                (null == (t = e.id) ? true : t.startsWith(d.fS.CAMERA)) ? er({
                  type: "set_selected_source",
                  source: e
                }): eu(e)
              }
            })
          })]
        }), (0, n.jsxs)("div", {
          className: W.qr,
          children: [(0, n.jsxs)("div", {
            className: W.z8,
            children: [(0, n.jsx)(F.A, {}), (0, n.jsxs)("div", {
              className: W.gt,
              children: [el && (0, n.jsx)(G.A, {
                onClose: r
              }), (eo || ec) && (0, n.jsx)(h.Button, {
                variant: "primary",
                size: "md",
                text: z.intl.string(eo && "gamescope" !== et.nativeSourceType ? z.t.FiBjwU : V.default["5AyH/p"]),
                onClick: () => {
                  eo ? "gamescope" === et.nativeSourceType ? ep() : ((0, E.E)(), (0, E.a)(et.nativeSourceType)) : null != et.selectedChannel ? eh(et.selectedChannel) : null != et.selectedSource && eu(et.selectedSource)
                },
                disabled: eo && !es && "" === et.nativeSourceType || ec && null == et.selectedSource
              }), (0, n.jsx)(L.A, {
                align: "right"
              })]
            })]
          }), el && (0, n.jsx)("div", {
            className: W.rO,
            children: (0, n.jsx)(k.A, {
              onClose: r
            })
          })]
        })]
      })
    })
  })
}