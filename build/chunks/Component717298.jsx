/** Chunk was on 33840 **/
/** chunk id: 717298, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => J
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk209739 = require("./209739.js"),
  a = require.n(Chunk209739),
  Chunk990547 = require("./990547.js"),
  Chunk435935 = require("./435935.jsx"),
  Chunk268146 = require("./268146.js"),
  Chunk442837 = require("./442837.js"),
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
  Chunk853030 = require("./853030.jsx"),
  Chunk560749 = require("./560749.jsx"),
  Chunk485299 = require("./485299.jsx"),
  Chunk615161 = require("./615161.jsx"),
  Chunk289989 = require("./289989.jsx"),
  Chunk328242 = require("./328242.jsx"),
  Chunk565574 = require("./565574.jsx"),
  Chunk286420 = require("./286420.jsx"),
  Chunk51708 = require("./51708.jsx"),
  Chunk801604 = require("./801604.jsx"),
  Chunk577257 = require("./577257.js"),
  Chunk70722 = require("./70722.js"),
  Chunk832832 = require("./832832.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk374079 = require("./374079.js");

function J(e) {
  var t;
  let {
    onClose: n,
    transitionState: l,
    sourceApplication: o,
    analyticsLocations: J = [],
    selectSource: K = true
  } = e, Y = i.useRef(performance.now()), q = (0, f.e7)([b.Z], () => b.Z.getUseSystemScreensharePicker() && ((0, w.isLinux)() || (0, w.isMac)() && a().satisfies(null === _.Z || true === _.Z ? true : _.Z.os.release, W.jR))), {
    analyticsLocations: Q
  } = (0, v.ZP)(J, x.Z.GO_LIVE_MODAL_V2), $ = (0, f.e7)([C.default], () => C.default.getCurrentUser()), ee = (0, N.Z)(), {
    state: et,
    dispatch: en
  } = (0, k.Ti)(o, $, ee), er = (0, m.Z)((0, w.isWindows)() && null != o && K ? "confirm" : "source_select");
  (0, H.Z)(q, en, "confirm" === er);
  let ei = !P.ZP.canStreamQuality(P.ZP.StreamQuality.HIGH, $),
    el = !(0, w.isLinux)(),
    es = "confirm" === er,
    eo = !K && null != o && !es,
    ea = q && et.sourceType !== u.vA.CAMERA,
    ec = i.useMemo(() => {
      let e = [{
        name: V.intl.string(V.t.tHoi7u),
        value: u.vA.WINDOW,
        icon: p.GON
      }, {
        name: V.intl.string(V.t.MhJ43A),
        value: u.vA.CAMERA,
        icon: p.Odl
      }];
      return q || e.splice(1, 0, {
        name: V.intl.string(V.t.slM8rG),
        value: u.vA.SCREEN,
        icon: p.pzj
      }), e
    }, [q]),
    {
      sourceType: ed
    } = et,
    eu = i.useCallback(async e => {
      S.eo.updateSetting(et.notifyFriends), S.I0.updateSetting(et.hidePreview);
      let [t, r] = await (0, T.Z)(e.hasOwnProperty("pid") ? e.pid : e, {
        preset: et.preset,
        fps: et.fps,
        resolution: et.resolution,
        soundshareEnabled: !et.muteStreamAudio,
        previewDisabled: et.hidePreview,
        goLiveModalDurationMs: performance.now() - Y.current,
        audioSourceId: et.audioSourceId,
        analyticsLocations: Q
      });
      if (t) return n();
      "no permission" === r && h.Z.show({
        title: V.intl.string(V.t["X+mXeq"]),
        body: V.intl.string(V.t.MIJCzr)
      }), n()
    }, [n, et, Q]);
  async function ef(e) {
    await (0, g.Z)({
      channelId: e
    }) && null != o && eu(o)
  }
  let ep = i.useCallback(() => {
    var e;
    eu({
      id: "prepicked:" + et.nativeSourceType,
      name: null != (e = I.ZP.getLastPickedContentTitle()) ? e : V.intl.string(V.t.KKcy95),
      url: ""
    })
  }, [eu, et.nativeSourceType]);
  return (0, r.jsx)(k.Yw, {
    state: et,
    dispatch: en,
    children: (0, r.jsxs)(p.Y0X, {
      impression: {
        impressionName: c.ImpressionNames.GO_LIVE_MODAL,
        impressionProperties: {
          location_stack: Q,
          application_id: (0, w.isWindows)() ? null == (t = (0, E.Z)(j.ZP, O.Z)) ? true : t.id : true,
          parent_media_session_id: y.Z.getMediaSessionId()
        }
      },
      className: s()(X.root, {
        [X.nativePicker]: q && null == o,
        [X.channelSelector]: eo,
        [X.confirmStep]: es
      }),
      size: p.CgR.DYNAMIC,
      transitionState: l,
      parentComponent: "GoLiveModalV2",
      children: [eo ? (0, r.jsx)(R.Z, {
        className: s()(X.channelSelectorComponent, X.withFooter),
        onSelectChannel: ef
      }) : es ? (0, r.jsx)(M.Z, {}) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(p.xBx, {
          separator: false,
          className: X.header,
          children: (0, r.jsx)(p.sY7, {
            className: X.segmentedControl,
            value: ed,
            look: "pill",
            optionClassName: X.segmentedControlOption,
            onChange: e => {
              let {
                value: t
              } = e;
              return en({
                type: "set_source_type",
                sourceType: t
              })
            },
            options: ec
          })
        }), (0, r.jsx)(p.hzk, {
          className: X.content,
          children: q && ed !== u.vA.CAMERA ? (0, r.jsx)(D.Z, {
            onSourceSelect: ep
          }) : (0, r.jsx)(L.Z, {
            onClick: function(e) {
              return eu(e)
            }
          })
        })]
      }), (0, r.jsxs)(p.mzw, {
        className: s()(X.footer, {
          [X.footerShadow]: !ei && es
        }),
        separator: false,
        direction: d.k.Direction.VERTICAL,
        children: [(0, r.jsxs)("div", {
          className: X.footerContent,
          children: [(0, r.jsx)(F.Z, {}), (0, r.jsxs)("div", {
            className: X.rightButtonGroup,
            children: [ei && (0, r.jsx)(G.Z, {
              onClose: n
            }), ea && !es && (0, r.jsx)(A.Z, {
              mainCTADisabled: !el && "" === et.nativeSourceType,
              mainCTAOnClick: () => {
                (0, Z.t)(), (0, Z.T)(et.nativeSourceType)
              },
              align: "right",
              ctaText: V.intl.string(V.t.FiBjwU),
              hideOptionsButton: !ei
            }), es && !ea && (0, r.jsx)(A.Z, {
              mainCTADisabled: null == et.selectedSource,
              mainCTAOnClick: () => {
                null != et.selectedChannel ? ef(et.selectedChannel) : null != et.selectedSource && eu(et.selectedSource)
              },
              align: "right",
              hideOptionsButton: !ei,
              ctaText: V.intl.string(z.default["5AyH/p"])
            }), (!ei || !(es || ea)) && (0, r.jsx)(B.Z, {
              align: "right"
            })]
          })]
        }), ei && (0, r.jsx)(U.Z, {
          onClose: n
        })]
      })]
    })
  })
}