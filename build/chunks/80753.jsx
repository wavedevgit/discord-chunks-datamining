/** Chunk was on 58493 **/
/** chunk id: 80753, original params: e,t,s (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk377171 = require("./377171.js"),
  Chunk31336 = require("./31336.js"),
  Chunk481637 = require("./481637.js"),
  Chunk532810 = require("./532810.js"),
  Chunk915312 = require("./915312.js");

function h() {
  let [e, t] = Chunk73800.useState(false), s = (0, Chunk915312.LL)(), {
    reporting: h
  } = Chunk481637.Z.useExperiment({
    location: "be7a1c_1"
  }, {
    autoTrackExposure: false
  });
  return (Chunk73800.useEffect(() => {
    if (h && module && null != require) return require.forEach(e => {
      e.elements.forEach(e => {
        e.setAttribute(d.OF, "")
      })
    }), () => {
      require.forEach(e => {
        e.elements.forEach(e => {
          e.removeAttribute(d.OF)
        })
      })
    }
  }, [require, h, module]), h && null != require && 0 !== require.length) ? <div style={{
      backgroundColor: Chunk377171.Z.BACKGROUND_FEEDBACK_CRITICAL,
      color: Chunk377171.Z.TEXT_FEEDBACK_CRITICAL,
      display: "flex",
      alignItems: "center",
      padding: "8px 12px"
    }}>{<Chunk481060.Text variant={"text-sm/semibold"} color={"text-feedback-critical"}>{"Accessibility compliance issue(s) detected, check in-app DevTools"}</Chunk481060.Text>}{<div style={{
        display: "grid",
        gridAutoFlow: "column",
        gap: 4,
        marginLeft: "auto"
      }}>{<Chunk755721.zx size={Chunk755721.zx.Sizes.TINY} color={Chunk755721.zx.Colors.RED} style={{
          marginLeft: "auto"
        }} onClick={Chunk31336.SO}>{"Open DevTools"}</Chunk755721.zx>}{<Chunk755721.zx size={Chunk755721.zx.Sizes.TINY} color={Chunk755721.zx.Colors.RED} style={{
          marginLeft: "auto"
        }} onClick={() => exports(!module)}>{module ? "Hide" : "Show"}{" Overlays"}</Chunk755721.zx>}</div>}</div> : null
}