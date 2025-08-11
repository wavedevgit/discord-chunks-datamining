/** Chunk was on 93886 **/
/** chunk id: 903502, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk178635 = require("./178635.js"),
  Chunk115470 = require("./115470.js"),
  Chunk511010 = require("./511010.jsx"),
  Chunk246992 = require("./246992.js"),
  Chunk531578 = require("./531578.js"),
  Chunk521981 = require("./521981.js");
let h = [{
  label: "second(s)",
  value: 1e3
}, {
  label: "minute(s)",
  value: 6e4
}, {
  label: "hour(s)",
  value: 36e5
}, {
  label: "day(s)",
  value: 864e5
}];

function p() {
  let [e, t] = Chunk73800.useState(null), [a, p] = Chunk73800.useState(0), [b, f] = Chunk73800.useState(1e3), [v, j] = Chunk73800.useState(0), g = (0, Chunk442837.e7)([Chunk115470.Z], () => {
    var t;
    return null === module ? null : null != (t = Chunk115470.Z.getFeedbackConfig(Chunk531578.nw[module])) ? exports : Chunk178635.R[Chunk531578.nw[module]]
  }), _ = Object.entries(Chunk531578.nw), y = _.slice(_.length / 2).map(e => {
    let [t] = e;
    return {
      label: t,
      value: t
    }
  }), C = Chunk73800.useMemo(() => null != module && v >= 0 && v <= 100 && require >= 0, [module, v, require]);
  return <div className={Chunk521981.container}>{<Chunk481060.hjN title={"Feedback Survey"} className={Chunk521981.formElement} tag={Chunk481060.RB0.H3}><Chunk481060.q4e options={y} value={module} onChange={e => {
          t(e)
        }} popoutLayerContext={Chunk246992.O$} placeholder={"Select Feedback Survey"} /></Chunk481060.hjN>}{<Chunk481060.hjN title={"Override Survey Cooldown"} className={Chunk521981.formElement} tag={Chunk481060.RB0.H3}>{null != g && <Chunk255367.Fragment>{<Chunk511010.Z className={Chunk521981.formDividerTitle}><Chunk481060.Text variant={"text-sm/semibold"}>{"Current cooldown"}</Chunk481060.Text></Chunk511010.Z>}{<Chunk481060.Text variant={"text-sm/normal"}>{"".concat(g.cooldown / 1e3, " second(s) or")}</Chunk481060.Text>}{<Chunk481060.Text variant={"text-sm/normal"}>{"".concat(g.cooldown / 6e4, " minute(s) or")}</Chunk481060.Text>}{<Chunk481060.Text variant={"text-sm/normal"}>{"".concat(g.cooldown / 36e5, " hour(s) or")}</Chunk481060.Text>}{<Chunk481060.Text variant={"text-sm/normal"}>{"".concat(g.cooldown / 864e5, " day(s)")}</Chunk481060.Text>}</Chunk255367.Fragment>}{<Chunk511010.Z className={Chunk521981.formDividerTitle}><Chunk481060.Text variant={"text-sm/semibold"}>{"Override cooldown"}</Chunk481060.Text></Chunk511010.Z>}{<div className={Chunk521981.formRow}>{<Chunk481060.oil min={0} value={require.toString()} type={"number"} placeholder={"Duration length"} onChange={e => p(parseFloat(e))} />}{<Chunk481060.q4e options={h} value={b} onChange={e => {
            f(e)
          }} popoutLayerContext={Chunk246992.O$} />}</div>}</Chunk481060.hjN>}{<Chunk481060.hjN title={"Override Survey Chance"} className={Chunk521981.formElement} tag={Chunk481060.RB0.H3}>{null != g && <Chunk255367.Fragment>{<Chunk511010.Z className={Chunk521981.formDividerTitle}><Chunk481060.Text variant={"text-sm/semibold"}>{"Current chance"}</Chunk481060.Text></Chunk511010.Z>}{<Chunk481060.Text variant={"text-sm/normal"}>{"".concat(100 * g.chance, "%")}</Chunk481060.Text>}</Chunk255367.Fragment>}{<Chunk511010.Z className={Chunk521981.formDividerTitle}><Chunk481060.Text variant={"text-sm/semibold"}>{"Override chance"}</Chunk481060.Text></Chunk511010.Z>}{<div className={Chunk521981.formRow}>{<Chunk481060.oil min={0} max={100} value={v.toString()} type={"number"} onChange={e => j(parseFloat(e))} />}{<Chunk481060.Text variant={"text-md/normal"}>{"%"}</Chunk481060.Text>}</div>}</Chunk481060.hjN>}{<div className={Chunk521981.formRow}>{<Chunk481060.zxk variant={"primary"} text={"Update"} onClick={() => void(null != g && Chunk570140.Z.dispatch({
          type: "FEEDBACK_OVERRIDE_SET",
          feedbackType: g.feedbackType,
          cooldown: require * b,
          chance: v / 100
        }))} disabled={!C} />}{<Chunk481060.zxk variant={"primary"} text={"Clear Override"} onClick={() => void(null != g && Chunk570140.Z.dispatch({
          type: "FEEDBACK_OVERRIDE_CLEAR",
          feedbackType: g.feedbackType
        }))} disabled={!C} />}</div>}{null == module && <Chunk481060.Text variant={"text-sm/normal"} color={"text-danger"}>{"Error: need to select a survey"}</Chunk481060.Text>}{!(require >= 0) && <Chunk481060.Text variant={"text-sm/normal"} color={"text-danger"}>{"Error: cooldown needs to be a number greater than 0"}</Chunk481060.Text>}{!(v >= 0 && v <= 100) && <Chunk481060.Text variant={"text-sm/normal"} color={"text-danger"}>{"Error: chance needs to be a number between 0 and 100"}</Chunk481060.Text>}{<Chunk481060.Text variant={"text-sm/normal"}>{"Clear override resets a feedback survey to its default values"}</Chunk481060.Text>}</div>
}