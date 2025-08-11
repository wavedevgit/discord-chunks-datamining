/** Chunk was on 75708 **/
/** chunk id: 625205, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk670863 = require("./670863.js"),
  Chunk72897 = require("./72897.js"),
  Chunk463395 = require("./463395.js"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk210887 = require("./210887.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk209782 = require("./209782.js");
let x = Chunk358085.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];

function _() {
  var e, t;
  let m = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme),
    {
      canSetInputDevice: _,
      canSetOutputDevice: j
    } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
      canSetInputDevice: Chunk131951.Z.supports(Chunk65154.AN.AUDIO_INPUT_DEVICE),
      canSetOutputDevice: Chunk131951.Z.supports(Chunk65154.AN.AUDIO_OUTPUT_DEVICE)
    })),
    E = (0, Chunk72897.p6)(Chunk65154.h7.AUDIO_INPUT),
    C = (0, Chunk72897.p6)(Chunk65154.h7.AUDIO_OUTPUT),
    [O, v] = (0, Chunk72897.Ls)(Chunk65154.h7.AUDIO_INPUT, {
      location: "UserSettingsDevices"
    }),
    [S, T] = (0, Chunk72897.Ls)(Chunk65154.h7.AUDIO_OUTPUT, {
      location: "UserSettingsDevices"
    }),
    I = O.concat(v),
    N = S.concat(T),
    y = Chunk73800.useMemo(() => {
      let e = x.some(e => {
          var t;
          return null == E || null == (t = E.hardwareId) ? true : t.startsWith(e)
        }),
        t = x.some(e => {
          var t;
          return null == C || null == (t = C.hardwareId) ? true : t.startsWith(e)
        });
      return module && exports && (null == E ? true : E.containerId) != null && E.containerId === (null == C ? true : C.containerId)
    }, [E, C]),
    A = I[0],
    P = N[0],
    R = null != (e = null == A ? true : A.disabled) ? module : !_,
    D = null != (t = null == P ? true : P.disabled) ? exports : !j;

  function Z(e) {
    let t, {
      label: r,
      value: s
    } = e;
    if (d.Z.isCertified(s)) {
      let e = (0, a.ap)(m) ? n(561259) : n(887695);
      t = <img src={e} alt={"Certified"} className={b.deviceOptionCertified} />
    }
    return <span className={b.deviceOption}>{<span className={b.deviceOptionLabel}>{d.Z.getCertifiedDeviceName(s, r)}</span>}{t}</span>
  }
  return <div className={Chunk209782.devices}>{<div className={Chunk209782.deviceColumns}>{<div className={Chunk209782.column}><Chunk481060.xJW title={Chunk388032.intl.string(Chunk388032.t.hHMYbW)}><Chunk670863.j deviceType={Chunk65154.h7.AUDIO_INPUT} location={"UserSettingsDevices"} hideDeviceTypeIcon={true} isDisabled={R} renderOptionLabel={Z} /></Chunk481060.xJW></div>}{<div className={Chunk209782.column}><Chunk481060.xJW title={Chunk388032.intl.string(Chunk388032.t.dl18zc)}><Chunk670863.j deviceType={Chunk65154.h7.AUDIO_OUTPUT} location={"UserSettingsDevices"} hideDeviceTypeIcon={true} isDisabled={D} renderOptionLabel={Z} /></Chunk481060.xJW></div>}</div>}{y && <Chunk494620.Z look={Chunk494620.z.WARNING}>{Chunk388032.intl.string(Chunk388032.t.Ioz3g4)}</Chunk494620.Z>}</div>
}