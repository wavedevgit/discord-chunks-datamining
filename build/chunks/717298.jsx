/** Chunk was on 46746 **/
/** chunk id: 717298, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ee
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
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
  Chunk906732 = require("./906732.js"),
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
  Chunk853030 = require("./853030.js"),
  Chunk560749 = require("./560749.jsx"),
  Chunk311924 = require("./311924.jsx"),
  Chunk485299 = require("./485299.jsx"),
  Chunk615161 = require("./615161.jsx"),
  Chunk289989 = require("./289989.jsx"),
  Chunk328242 = require("./328242.jsx"),
  Chunk565574 = require("./565574.jsx"),
  Chunk286420 = require("./286420.jsx"),
  Chunk51708 = require("./51708.jsx"),
  Chunk801604 = require("./801604.js"),
  Chunk577257 = require("./577257.js"),
  Chunk70722 = require("./70722.js"),
  Chunk65154 = require("./65154.js"),
  Chunk676462 = require("./676462.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk321910 = require("./321910.js");

function $(e) {
  return e * (2 - e)
}

function ee(e) {
  var t;
  let {
    onClose: n,
    transitionState: l,
    sourceApplication: a,
    selectSource: ee = true
  } = e, {
    twoClickVariant: et,
    twoStepModal: en,
    showSDHDUpsell: er,
    footerSlideIn: ei
  } = (0, N.a)({
    location: "golivemodalv2",
    autoTrackExposure: false
  }), el = i.useRef(performance.now()), es = (0, m.e7)([C.Z], () => C.Z.getUseSystemScreensharePicker() && ((0, Z.isLinux)() || (0, Z.isMac)() && c().satisfies(null === x.Z || true === x.Z ? true : x.Z.os.release, J.jR))), {
    analyticsLocations: eo
  } = (0, v.ZP)(_.Z.GO_LIVE_MODAL_V2), ea = (0, m.e7)([O.default], () => O.default.getCurrentUser()), ec = (0, M.Z)(), {
    state: ed,
    dispatch: eu
  } = (0, U.Ti)(a, ea, ec, (0, Z.isWindows)() && null != a && ee ? "confirm" : "source_select"), [ef, em] = (0, b.Ls)(X.h7.AUDIO_INPUT, {
    location: "GoLiveModalV2"
  }), eh = ef.concat(em);
  (0, Y.Z)(es, eu, "confirm" === ed.modalStep);
  let ep = !w.ZP.canStreamQuality(w.ZP.StreamQuality.HIGH, ea),
    ex = ei && !es,
    eg = (0, h.q_F)({
      height: ex && null == ed.selectedSource ? 0 : 76 + 40 * !!ep,
      config: {
        easing: $,
        duration: 200
      }
    }, "respect-motion-settings"),
    e_ = !(0, Z.isLinux)(),
    ev = "confirm" === ed.modalStep,
    ej = !ee && null != a && !ev,
    eb = ev || !ej && et && (!es || ed.sourceType === f.vA.CAMERA),
    eS = es && ed.sourceType !== f.vA.CAMERA,
    eC = es || !(0, Z.isWindows)() || !en || ev,
    ey = er && ep,
    eO = ev && en,
    eI = i.useMemo(() => {
      let e = [{
        name: q.intl.string(q.t.tHoi7u),
        value: f.vA.WINDOW,
        icon: h.GON
      }, {
        name: q.intl.string(q.t.MhJ43N),
        value: f.vA.CAMERA,
        icon: h.Odl
      }];
      return es || e.splice(1, 0, {
        name: q.intl.string(q.t.slM8rK),
        value: f.vA.SCREEN,
        icon: h.pzj
      }), e
    }, [es]),
    {
      sourceType: eZ
    } = ed,
    ew = i.useCallback(async e => {
      S.eo.updateSetting(ed.notifyFriends), S.I0.updateSetting(ed.hidePreview);
      let [t, r] = await (0, R.Z)(e.hasOwnProperty("pid") ? e.pid : e, {
        preset: ed.preset,
        fps: ed.fps,
        resolution: ed.resolution,
        soundshareEnabled: !ed.muteStreamAudio,
        previewDisabled: ed.hidePreview,
        goLiveModalDurationMs: performance.now() - el.current,
        audioSourceId: ed.audioSourceId
      });
      if (t) return n();
      "no permission" === r && p.Z.show({
        title: q.intl.string(q.t["X+mXen"]),
        body: q.intl.string(q.t.MIJCzs)
      }), n()
    }, [n, ed]);
  async function eN(e) {
    if ((0, Z.isWindows)() && en && "source_select" === ed.modalStep) {
      eu({
        type: "set_step",
        step: "confirm"
      }), eu({
        type: "set_selected_channel",
        channelId: e
      });
      return
    }
    await (0, g.Z)({
      channelId: e
    }) && null != a && ew(a)
  }
  let eT = i.useCallback(() => {
      var e;
      ew({
        id: "prepicked:" + ed.nativeSourceType,
        name: null != (e = E.ZP.getLastPickedContentTitle()) ? e : q.intl.string(q.t["KKcy9/"]),
        url: ""
      })
    }, [ew, ed.nativeSourceType]),
    eE = <h.mzw className={s()(Q.footer, {
        [Q.footerShadow]: !ep && ev
      })} separator={false} direction={u.k.Direction.VERTICAL}>{<div className={Q.footerContent}>{<V.Z nativePickerEnabled={es} />}{<div className={Q.rightButtonGroup}>{ey && <H.Z onClose={n} />}{eS && !eb && <k.Z mainCTADisabled={!e_ && "" === ed.nativeSourceType} mainCTAOnClick={() => {
              (0, T.t)(), (0, T.T)(ed.nativeSourceType)
            }} align={"right"} ctaText={q.intl.string(q.t.FiBjwc)} hideOptionsButton={!ey} />}{eb && !eS && <k.Z mainCTADisabled={null == ed.selectedSource} mainCTAOnClick={() => {
              null != ed.selectedChannel ? eN(ed.selectedChannel) : null != ed.selectedSource && ew(ed.selectedSource)
            }} align={"right"} hideOptionsButton={!ey} ctaText={q.intl.string(K.default["5AyH/v"])} />}{(!ey || !(eb || eS)) && <F.Z useSimplifiedMenu={eO} align={"right"} />}</div>}</div>}{ep && <z.Z onClose={n} />}</h.mzw>,
    eP = ex ? <o.animated.div style={eg}>{eE}</o.animated.div> : eE;
  return <U.Yw state={ed} dispatch={eu}><h.Y0X impression={{
        impressionName: d.ImpressionNames.GO_LIVE_MODAL,
        impressionProperties: {
          location_stack: eo,
          application_id: (0, Z.isWindows)() ? null == (t = (0, P.Z)(j.ZP, I.Z)) ? true : t.id : true,
          parent_media_session_id: y.Z.getMediaSessionId()
        }
      }} className={s()(Q.root, {
        [Q.nativePicker]: es && null == a,
        [Q.channelSelector]: ej,
        [Q.confirmStep]: ev
      })} size={h.CgR.DYNAMIC} transitionState={l} parentComponent={"GoLiveModalV2"}>{ej ? <L.Z className={s()(Q.channelSelectorComponent, {
          [Q.withFooter]: eC
        })} onSelectChannel={eN} /> : ev ? <B.Z hideBackButton={null != a} /> : <r.Fragment>{<h.xBx separator={false} className={Q.header}><h.sY7 className={Q.segmentedControl} value={eZ} look={"pill"} optionClassName={Q.segmentedControlOption} onChange={e => {
              let {
                value: t
              } = e;
              return eu({
                type: "set_source_type",
                sourceType: t
              })
            }} options={eI} /></h.xBx>}{<h.hzk className={Q.content}>{es && eZ !== f.vA.CAMERA ? (0, r.jsx)(G.Z, {
            onSourceSelect: eT
          }) : (0, r.jsx)(W.Z, {
            onClick: function(e) {
              function t() {
                var t;
                if (!(null == (t = e.id) ? true : t.startsWith(f.vA.CAMERA))) return;
                let n = (0, A.K)(e.id, ed.deviceSources, eh);
                eu({
                  type: "set_audio_source",
                  audioSourceId: null != n ? n : true
                })
              }
              if (en && (0, Z.isWindows)()) {
                t(), eu({
                  type: "set_selected_source",
                  source: e
                }), eu({
                  type: "set_step",
                  step: "confirm"
                });
                return
              }
              if (!et) return ew(e);
              t(), eu({
                type: "set_selected_source",
                source: e
              })
            }
          })}</h.hzk>}</r.Fragment>}{eO && <D.Z />}{eC && eP}</h.Y0X></U.Yw>
}