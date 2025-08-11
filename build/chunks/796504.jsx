/** Chunk was on 51868 **/
/** chunk id: 796504, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668274 = require("./668274.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk241209 = require("./241209.jsx"),
  Chunk807693 = require("./807693.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk539752 = require("./539752.js");

function f(e) {
  var t;
  let {
    eulaId: r,
    transitionState: f,
    onClose: h
  } = e, g = (0, a.e7)([u.Z], () => u.Z.getEULA(r));
  l.useEffect(() => {
    (0, c.N)(r)
  }, [r]);
  let b = null != (t = null == g ? true : g.name) ? t : d.intl.string(d.t.ZTNur6),
    m = null != g ? <s.Z className={p.markdown}>{g.content}</s.Z> : <o.$jN className={p.spinner} />;
  return <o.Y0X transitionState={f} size={o.CgR.SMALL} aria-label={b} parentComponent={"EULA"}>{<o.xBx justify={i.Z.Justify.BETWEEN}>{<o.X6q variant={"heading-lg/semibold"}>{b}</o.X6q>}{<o.olH onClick={h} />}</o.xBx>}{<o.hzk>{m}</o.hzk>}</o.Y0X>
}