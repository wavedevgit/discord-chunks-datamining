/** Chunk was on 46746 **/
/** chunk id: 311924, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk594174 = require("./594174.js"),
  Chunk451467 = require("./451467.js"),
  Chunk641115 = require("./641115.js"),
  Chunk672811 = require("./672811.js"),
  Chunk891180 = require("./891180.js"),
  Chunk544753 = require("./544753.js"),
  Chunk615161 = require("./615161.js"),
  Chunk812652 = require("./812652.js"),
  Chunk156582 = require("./156582.jsx"),
  Chunk396678 = require("./396678.js"),
  Chunk37113 = require("./37113.js"),
  Chunk676462 = require("./676462.js"),
  Chunk388032 = require("./388032.js"),
  Chunk496958 = require("./496958.js");

function S(e) {
  let {
    label: t,
    children: n
  } = e;
  return <div className={b.setting}>{<s.Text variant={"text-sm/semibold"} color={"header-secondary"}>{t}</s.Text>}{n}</div>
}

function C() {
  var e, t, n;
  let [{
    preset: C,
    fps: y,
    sourceType: O,
    resolution: I
  }, Z] = (0, Chunk615161.E_)(), w = (0, Chunk544753.Z)(), N = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()), [T, E] = null != (e = (0, Chunk396678.Z)(Chunk37113.tI.PRESET_VIDEO)) ? module : [Chunk37113.LY.RESOLUTION_720, Chunk37113.ws.FPS_30], [P, R] = null != (t = (0, Chunk396678.Z)(Chunk37113.tI.PRESET_DOCUMENTS)) ? exports : [Chunk37113.LY.RESOLUTION_SOURCE, Chunk37113.ws.FPS_15], [A, M] = null != (n = (0, Chunk396678.Z)(C)) ? require : [I, y], k = Chunk73800.useMemo(() => C === Chunk37113.tI.PRESET_VIDEO ? T : C === Chunk37113.tI.PRESET_DOCUMENTS ? P : I, [C, T, P, I]), L = Chunk73800.useMemo(() => C === Chunk37113.tI.PRESET_VIDEO ? E : C === Chunk37113.tI.PRESET_DOCUMENTS ? R : y, [C, E, R, y]), D = C === Chunk37113.tI.PRESET_DOCUMENTS, B = Chunk812652.Vf.map(e => {
    let {
      value: t
    } = e, n = (0, c.Z)(C, t, _.ws.FPS_30, N, w);
    return {
      value: t,
      name: (0, f.M)(t),
      tooltipAriaLabel: n ? true : j.intl.string(j.t.sEAnVF),
      tooltip: n ? true : <d.W />,
      className: n ? true : b.premiumOption
    }
  }), U = Chunk812652.YX.map(e => {
    let t = (0, c.Z)(C, _.LY.RESOLUTION_720, e, N, w);
    return {
      value: e,
      name: "".concat(e, "fps"),
      tooltipAriaLabel: t ? true : j.intl.string(j.t.sEAnVF),
      tooltip: t ? true : <d.W />,
      className: t ? true : b.premiumOption
    }
  });
  return <div className={Chunk496958.root}>{<S label={Chunk388032.intl.string(Chunk676462.default["7eHfrq"])}><Chunk481060.PhF isSelected={e => C === e} serialize={e => String(e)} select={e => {
          Z({
            type: "set_preset",
            preset: e
          })
        }} options={Chunk812652.PG.filter(e => {
          let {
            canUse: t
          } = e;
          return t(O)
        }).map(e => {
          let {
            value: t
          } = e;
          return {
            value: t,
            label: (0, u.L)(t)
          }
        })} /></S>}{<S label={Chunk388032.intl.string(Chunk676462.default.PYBXFR)}><Chunk481060.sY7 className={Chunk496958.segmentedControl} options={B} look={"pill"} disabled={D} value={k} onChange={e => !D && function(e) {
          if (!(0, c.Z)(C, e, y, N, w)) return (0, x.E)({
            analyticsLocation: o.Z.GO_LIVE_MODAL_SETTINGS_SELECTION
          });
          Z({
            type: "set_resolution",
            resolution: e
          }), e !== A && Z({
            type: "set_preset",
            preset: _.tI.PRESET_CUSTOM
          })
        }(e.value)} /></S>}{<S label={Chunk388032.intl.string(Chunk676462.default["/ssDMT"])}><Chunk481060.sY7 className={Chunk496958.segmentedControl} disabled={D} options={U} value={L} look={"pill"} onChange={e => !D && function(e) {
          if (!(0, c.Z)(C, I, e, N, w)) return (0, x.E)({
            analyticsLocation: o.Z.GO_LIVE_MODAL_SETTINGS_SELECTION
          });
          Z({
            type: "set_fps",
            fps: e
          }), e !== M && Z({
            type: "set_preset",
            preset: _.tI.PRESET_CUSTOM
          })
        }(e.value)} /></S>}</div>
}