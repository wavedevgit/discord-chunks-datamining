/** Chunk was on 75708 **/
/** chunk id: 706705, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk141079 = require("./141079.js");

function l() {
  let [e, t] = Chunk73800.useState(false), [l, o] = Chunk73800.useState(20), [c, d] = Chunk73800.useState(80);
  return <div>{<Chunk481060.Kqy gap={8}>{<Chunk481060.j7V value={module} onChange={() => exports(!module)}>{"Enable Rive"}</Chunk481060.j7V>}{<Chunk481060.Kqy gap={8}>{<Chunk481060.R94>{"Number of animations"}</Chunk481060.R94>}{<Chunk481060.iRW initialValue={l} defaultValue={20} onValueRender={e => "".concat(Math.round(e), " animations")} asValueChanges={e => o(Math.round(e))} minValue={1} maxValue={500} markers={[1, ...Array.from({
            length: 25
          }, (e, t) => (t + 1) * 20)]} stickToMarkers={true} />}</Chunk481060.Kqy>}{<Chunk481060.Kqy gap={8}>{<Chunk481060.R94>{"Animation size"}</Chunk481060.R94>}{<Chunk481060.iRW initialValue={c} defaultValue={80} onValueRender={e => "".concat(Math.round(e), "px")} onValueChange={e => d(Math.round(e))} minValue={10} maxValue={300} markers={[10, 50, 100, 200, 300]} />}</Chunk481060.Kqy>}</Chunk481060.Kqy>}{<div style={{
        display: "flex",
        flexWrap: "wrap",
        rowGap: "10px",
        columnGap: "10px",
        "--animation-size": "".concat(c, "px")
      }}>{Array.from({
        length: l
      }).map((t, r) => e ? (0, i.jsx)(s.t7u, {
        eventTargetRef: {
          current: document.body
        },
        className: a.animationObj
      }, r) : (0, i.jsx)(s.Fmz, {
        importData: () => n.e("37372").then(n.t.bind(n, 459274, 19)),
        className: a.animationObj
      }, r))}</div>}</div>
}