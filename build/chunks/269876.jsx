/** Chunk was on 75708 **/
/** chunk id: 269876, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk46973 = require("./46973.js"),
  Chunk846519 = require("./846519.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk313201 = require("./313201.js"),
  Chunk131951 = require("./131951.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.js"),
  Chunk979385 = require("./979385.js"),
  Chunk251574 = require("./251574.js"),
  Chunk893354 = require("./893354.js"),
  Chunk20493 = require("./20493.js");
let E = (0, Chunk313201.hQ)();

function C() {
  let [e, t] = Chunk73800.useState(false), [n, s] = Chunk73800.useState(false), {
    threshold: C,
    autoThreshold: O
  } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
    threshold: Chunk131951.Z.getModeOptions().threshold,
    autoThreshold: Chunk131951.Z.getModeOptions().autoThreshold
  })), {
    inputMode: v,
    automaticVADSupported: S,
    isEnabled: T
  } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
    inputMode: Chunk131951.Z.getMode(),
    automaticVADSupported: Chunk131951.Z.supports(Chunk65154.AN.AUTOMATIC_VAD),
    isEnabled: Chunk131951.Z.isEnabled()
  }));

  function I(e, n) {
    t(e), s((n & h.Dg.VOICE) === h.Dg.VOICE)
  }

  function N(e, t) {
    m.Z.setMode(v, {
      threshold: e,
      autoThreshold: t
    })
  }
  Chunk73800.useEffect(() => {
    let e = new Chunk846519.V7;
    return module.start(1e3, () => {
      Chunk131951.Z.getMediaEngine().on(Chunk46973.aB.VoiceActivity, I), module.stop()
    }), () => {
      Chunk131951.Z.getMediaEngine().removeListener(Chunk46973.aB.VoiceActivity, I), module.stop()
    }
  }, []);
  let y = <section className={a()(Chunk979385.inputSensitivityToggle, Chunk979385.manual)}><Chunk481060.iRW initialValue={C + 100} onValueRender={e => "".concat((-((100 - e) * 1)).toFixed(0), "dB")} onValueChange={e => N(-((100 - e) * 1), O)} barStyles={{
        background: Chunk692547.Z.unsafe_rawColors.GREEN_360.css
      }} fillStyles={{
        background: Chunk692547.Z.unsafe_rawColors.YELLOW_300.css
      }} aria-labelledby={E}><div className={a()(Chunk979385.sliderBar, Chunk979385.microphone, Chunk979385.inputSensitivityBar, Chunk251574.bar)}>{<div className={a()(Chunk979385.fill, Chunk979385.inputSensitivityBarFill)} style={{
            width: module + 100 + "%"
          }} />}{<div className={"grow"} />}</div></Chunk481060.iRW></section>;
  return O && (y = <section className={Chunk979385.inputSensitivityToggle}>{<div className={Chunk979385.inputSensitivitySlider}><div className={a()(Chunk979385.inputSensitivityBar, Chunk979385.sliderBar, {
          [Chunk979385.speaking]: require
        })} /></div>}{<Chunk481060.R94 type={Chunk481060.R94.Types.DESCRIPTION} className={Chunk20493.marginBottom8}>{Chunk388032.intl.string(Chunk388032.t.W3K5Ii)}</Chunk481060.R94>}</section>), <Chunk481060.xJW title={Chunk388032.intl.string(Chunk388032.t["sqUm+v"])} titleId={E} className={Chunk979385.sensitivity}>{S && <Chunk313201.FG>{e => (0, i.jsxs)("div", {
        className: a()(_.horizontal, j.marginBottom4),
        children: [(0, i.jsx)(u.vwX, {
          tag: u.RB0.H3,
          className: j.marginReset,
          children: (0, i.jsx)("label", {
            htmlFor: e,
            children: f.intl.string(f.t.I1Zuq6)
          })
        }), (0, i.jsx)(u.rsf, {
          id: e,
          checked: O,
          onChange: e => N(C, e)
        })]
      })}</Chunk313201.FG>}{y}{!T && <Chunk481060.R94 type={Chunk481060.R94.Types.DESCRIPTION} className={a()(Chunk979385.inputDisabledWarning, Chunk20493.marginBottom8)}>{Chunk388032.intl.format(Chunk388032.t["O13I+P"], {
        onEnableClick: () => Chunk846027.Z.enable(true)
      })}</Chunk481060.R94>}</Chunk481060.xJW>
}