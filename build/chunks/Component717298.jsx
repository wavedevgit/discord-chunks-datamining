/** Chunk was on 46746 **/
/** chunk id: 717298, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Y
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
  Chunk137349 = require("./137349.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk374079 = require("./374079.js");

function Y(e) {
  var t;
  let {
    onClose: n,
    transitionState: l,
    sourceApplication: o,
    analyticsLocations: Y = [],
    selectSource: J = true
  } = e, X = i.useRef(performance.now()), K = (0, f.e7)([b.Z], () => b.Z.getUseSystemScreensharePicker() && ((0, O.isLinux)() || (0, O.isMac)() && a().satisfies(null === p.Z || true === p.Z ? true : p.Z.os.release, z.jR))), {
    analyticsLocations: q
  } = (0, _.ZP)(Y, g.Z.GO_LIVE_MODAL_V2), Q = (0, f.e7)([y.default], () => y.default.getCurrentUser()), $ = (0, T.Z)(), {
    state: ee,
    dispatch: et
  } = (0, k.Ti)(o, Q, $, (0, O.isWindows)() && null != o && J ? "confirm" : "source_select");
  (0, W.Z)(K, et, "confirm" === ee.modalStep);
  let en = !w.ZP.canStreamQuality(w.ZP.StreamQuality.HIGH, Q),
    er = !(0, O.isLinux)(),
    ei = "confirm" === ee.modalStep,
    el = !J && null != o && !ei,
    es = K && ee.sourceType !== u.vA.CAMERA,
    eo = i.useMemo(() => {
      let e = [{
        name: H.intl.string(H.t.tHoi7u),
        value: u.vA.WINDOW,
        icon: m.GON
      }, {
        name: H.intl.string(H.t.MhJ43N),
        value: u.vA.CAMERA,
        icon: m.Odl
      }];
      return K || e.splice(1, 0, {
        name: H.intl.string(H.t.slM8rK),
        value: u.vA.SCREEN,
        icon: m.pzj
      }), e
    }, [K]),
    {
      sourceType: ea
    } = ee,
    ec = i.useCallback(async e => {
      j.eo.updateSetting(ee.notifyFriends), j.I0.updateSetting(ee.hidePreview);
      let [t, r] = await (0, P.Z)(e.hasOwnProperty("pid") ? e.pid : e, {
        preset: ee.preset,
        fps: ee.fps,
        resolution: ee.resolution,
        soundshareEnabled: !ee.muteStreamAudio,
        previewDisabled: ee.hidePreview,
        goLiveModalDurationMs: performance.now() - X.current,
        audioSourceId: ee.audioSourceId,
        analyticsLocations: q
      });
      if (t) return n();
      "no permission" === r && h.Z.show({
        title: H.intl.string(H.t["X+mXen"]),
        body: H.intl.string(H.t.MIJCzs)
      }), n()
    }, [n, ee, q]);
  async function ed(e) {
    await (0, x.Z)({
      channelId: e
    }) && null != o && ec(o)
  }
  let eu = i.useCallback(() => {
    var e;
    ec({
      id: "prepicked:" + ee.nativeSourceType,
      name: null != (e = I.ZP.getLastPickedContentTitle()) ? e : H.intl.string(H.t["KKcy9/"]),
      url: ""
    })
  }, [ec, ee.nativeSourceType]);
  return (0, r.jsx)(k.Yw, {
    state: ee,
    dispatch: et,
    children: (0, r.jsxs)(m.Y0X, {
      impression: {
        impressionName: c.ImpressionNames.GO_LIVE_MODAL,
        impressionProperties: {
          location_stack: q,
          application_id: (0, O.isWindows)() ? null == (t = (0, N.Z)(v.ZP, C.Z)) ? true : t.id : true,
          parent_media_session_id: S.Z.getMediaSessionId()
        }
      },
      className: s()(V.root, {
        [V.nativePicker]: K && null == o,
        [V.channelSelector]: el,
        [V.confirmStep]: ei
      }),
      size: m.CgR.DYNAMIC,
      transitionState: l,
      parentComponent: "GoLiveModalV2",
      children: [el ? (0, r.jsx)(R.Z, {
        className: s()(V.channelSelectorComponent, V.withFooter),
        onSelectChannel: ed
      }) : ei ? (0, r.jsx)(A.Z, {
        hideBackButton: null != o
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(m.xBx, {
          separator: false,
          className: V.header,
          children: (0, r.jsx)(m.sY7, {
            className: V.segmentedControl,
            value: ea,
            look: "pill",
            optionClassName: V.segmentedControlOption,
            onChange: e => {
              let {
                value: t
              } = e;
              return et({
                type: "set_source_type",
                sourceType: t
              })
            },
            options: eo
          })
        }), (0, r.jsx)(m.hzk, {
          className: V.content,
          children: K && ea !== u.vA.CAMERA ? (0, r.jsx)(M.Z, {
            onSourceSelect: eu
          }) : (0, r.jsx)(D.Z, {
            onClick: function(e) {
              return ec(e)
            }
          })
        })]
      }), (0, r.jsxs)(m.mzw, {
        className: s()(V.footer, {
          [V.footerShadow]: !en && ei
        }),
        separator: false,
        direction: d.k.Direction.VERTICAL,
        children: [(0, r.jsxs)("div", {
          className: V.footerContent,
          children: [(0, r.jsx)(U.Z, {}), (0, r.jsxs)("div", {
            className: V.rightButtonGroup,
            children: [en && (0, r.jsx)(B.Z, {
              onClose: n
            }), es && !ei && (0, r.jsx)(E.Z, {
              mainCTADisabled: !er && "" === ee.nativeSourceType,
              mainCTAOnClick: () => {
                (0, Z.t)(), (0, Z.T)(ee.nativeSourceType)
              },
              align: "right",
              ctaText: H.intl.string(H.t.FiBjwc),
              hideOptionsButton: !en
            }), ei && !es && (0, r.jsx)(E.Z, {
              mainCTADisabled: null == ee.selectedSource,
              mainCTAOnClick: () => {
                null != ee.selectedChannel ? ed(ee.selectedChannel) : null != ee.selectedSource && ec(ee.selectedSource)
              },
              align: "right",
              hideOptionsButton: !en,
              ctaText: H.intl.string(F.default["5AyH/v"])
            }), (!en || !(ei || es)) && (0, r.jsx)(L.Z, {
              align: "right"
            })]
          })]
        }), en && (0, r.jsx)(G.Z, {
          onClose: n
        })]
      })]
    })
  })
}