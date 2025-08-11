/** Chunk was on 27978 **/
/** chunk id: 559786, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk301938 = require("./301938.jsx"),
  Chunk806701 = require("./806701.js"),
  Chunk808993 = require("./808993.js"),
  Chunk720196 = require("./720196.js");

function d(e) {
  let {
    transitionTo: t,
    token: n,
    width: d
  } = e, [h, p] = i.useState(u.n.START), [f, m] = i.useState(null), [g, _] = i.useState(""), x = {
    impression_group: l.ImpressionGroups.ACCOUNT_REVERT_FLOW
  };
  return <div style={{
      margin: "8px"
    }}><o.MyZ activeSlide={h} width={d} onSlideReady={m}>{<o.Mi4 id={u.n.START} impressionProperties={x} impressionName={l.ImpressionNames.ACCOUNT_REVERT_EXPLAINER}><a.Z setSlide={p} transitionTo={t} /></o.Mi4>}{<o.Mi4 id={u.n.PASSWORD} impressionProperties={x} impressionName={l.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD}><s.Z setOriginalEmail={_} setSlide={p} transitionTo={t} ready={f === u.n.PASSWORD} token={n} /></o.Mi4>}{<o.Mi4 id={u.n.SUCCESS} impressionProperties={x} impressionName={l.ImpressionNames.ACCOUNT_REVERT_SUCCESS}><c.Z email={g} /></o.Mi4>}</o.MyZ></div>
}