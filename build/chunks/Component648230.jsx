/** Chunk was on 96811 **/
/** chunk id: 648230, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => Q
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk299855 = require("./299855.js"),
  o = require.n(Chunk299855),
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
    transitionState: l,
    sourcePID: a,
    analyticsLocations: Q = [],
    selectSource: q = true
  } = e, K = (0, u.bG)([v.Ay], () => {
    var e;
    return null != a && null != (e = v.Ay.getGameForPID(a)) ? e : true
  }), Y = i.useRef(performance.now()), X = (0, u.bG)([y.A], () => (y.A.getUseSystemScreensharePicker() || y.A.getUseGamescopeCapture()) && ((0, w.isLinux)() || (0, w.isMac)() && o().satisfies(null === m.A || true === m.A ? true : m.A.os.release, W.WZ))), {
    analyticsLocations: J
  } = (0, _.Ay)(Q, g.A.GO_LIVE_MODAL_V2), $ = (0, u.bG)([A.default], () => A.default.getCurrentUser()), ee = (0, H.A)(), {
    state: et,
    dispatch: er
  } = (0, M.yB)(K, $, ee), en = (0, x.A)((0, w.isWindows)() && null != K && q ? "confirm" : "source_select");
  (0, B.A)(X, er, "confirm" === en);
  let ei = !C.Ay.canStreamQuality(C.Ay.StreamQuality.HIGH, $),
    el = !(0, w.isLinux)(),
    es = "confirm" === en,
    ea = !q && null != K && !es,
    eo = es || et.sourceType === d.fS.CAMERA,
    ec = X && et.sourceType !== d.fS.CAMERA,
    ed = i.useMemo(() => {
      let e = [{
        name: V.intl.string(V.t.tHoi7u),
        value: d.fS.WINDOW,
        icon: h.WxK
      }, {
        name: V.intl.string(V.t.MhJ43A),
        value: d.fS.CAMERA,
        icon: h.npA
      }];
      return X || e.splice(1, 0, {
        name: V.intl.string(V.t.slM8rG),
        value: d.fS.SCREEN,
        icon: h.kN9
      }), e
    }, [X]),
    {
      sourceType: eu
    } = et,
    ef = i.useCallback(async e => {
      b.wv.updateSetting(et.notifyFriends), b.uh.updateSetting(et.hidePreview);
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
        title: V.intl.string(V.t["X+mXeq"]),
        body: V.intl.string(V.t.MIJCzr)
      }), r()
    }, [r, et, J]);
  async function eh(e) {
    await (0, j.A)({
      channelId: e
    }) && null != K && ef(K)
  }
  let ep = i.useCallback(() => {
    var e;
    ef({
      id: ("gamescope" === et.nativeSourceType ? "screen:" : "prepicked:") + et.nativeSourceType,
      name: null != (e = I.Ay.getLastPickedContentTitle()) ? e : V.intl.string(V.t.KKcy95),
      url: ""
    })
  }, [ef, et.nativeSourceType]);
  return (0, n.jsx)(M.KL, {
    state: et,
    dispatch: er,
    children: (0, n.jsx)(h.dWK, {
      transitionState: l,
      onClose: r,
      size: "xl",
      trackingProps: {
        impression: {
          impressionName: c.ImpressionNames.GO_LIVE_MODAL,
          impressionProperties: {
            location_stack: J,
            application_id: (0, w.isWindows)() ? null == (t = (0, N.A)(v.Ay, O.A)) ? true : t.id : true,
            parent_media_session_id: S.A.getMediaSessionId()
          }
        }
      },
      children: (0, n.jsxs)("div", {
        className: s()(z.zr, {
          [z._g]: X && null == K,
          [z.Tb]: ea,
          [z.Fe]: es
        }),
        children: [ea ? (0, n.jsx)(R.A, {
          className: s()(z.or, z.Ym),
          onSelectChannel: eh
        }) : es ? (0, n.jsx)(P.A, {}) : (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)("div", {
            className: z.wx,
            children: (0, n.jsx)(h.IzF, {
              className: z.q0,
              value: eu,
              look: "pill",
              optionClassName: z.LD,
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
          }), (0, n.jsx)(f.ArX, {
            className: z.Qs,
            children: X && eu !== d.fS.CAMERA ? (0, n.jsx)(D.A, {
              onSourceSelect: ep
            }) : (0, n.jsx)(U.A, {
              onClick: function(e) {
                var t;
                (null == (t = e.id) ? true : t.startsWith(d.fS.CAMERA)) ? er({
                  type: "set_selected_source",
                  source: e
                }): ef(e)
              }
            })
          })]
        }), (0, n.jsxs)("div", {
          className: z.qr,
          children: [(0, n.jsxs)("div", {
            className: z.z8,
            children: [(0, n.jsx)(F.A, {}), (0, n.jsxs)("div", {
              className: z.gt,
              children: [ei && (0, n.jsx)(L.A, {
                onClose: r
              }), (ec || eo) && (0, n.jsx)(h.Button, {
                variant: "primary",
                size: "md",
                text: V.intl.string(ec && "gamescope" !== et.nativeSourceType ? V.t.FiBjwU : Z.default["5AyH/p"]),
                onClick: () => {
                  ec ? "gamescope" === et.nativeSourceType ? ep() : ((0, E.E)(), (0, E.a)(et.nativeSourceType)) : null != et.selectedChannel ? eh(et.selectedChannel) : null != et.selectedSource && ef(et.selectedSource)
                },
                disabled: ec && !el && "" === et.nativeSourceType || eo && null == et.selectedSource
              }), (0, n.jsx)(G.A, {
                align: "right"
              })]
            })]
          }), ei && (0, n.jsx)("div", {
            className: z.rO,
            children: (0, n.jsx)(k.A, {
              onClose: r
            })
          })]
        })]
      })
    })
  })
}