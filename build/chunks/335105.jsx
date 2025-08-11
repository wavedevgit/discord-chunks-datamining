/** Chunk was on 84992 **/
/** chunk id: 335105, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk780384 = require("./780384.js"),
  Chunk741245 = require("./741245.js"),
  Chunk176332 = require("./176332.jsx"),
  Chunk210642 = require("./210642.jsx"),
  Chunk859218 = require("./859218.js"),
  Chunk297100 = require("./297100.js");
let d = (t, e) => {
    let n = (0, s.wj)(e) ? "white" : "black";
    switch (t) {
      case l.Yk.PREMIUM_UPDATED:
        return <C.Z color={n} className={c.svgCopy} />;
      case l.Yk.PREMIUM_ACTIVATED:
        return <a.Z color={n} className={c.svgCopy} />;
      case l.Yk.PREMIUM_PAYMENT_STARTED:
        return <r.Z color={n} className={c.svgCopy} />;
      default:
        return null
    }
  },
  u = t => {
    let {
      type: e,
      theme: n
    } = t;
    return <div className={c.gradientOuterBorder}><div className={c.gradientInnerBorder}>{d(e, n)}</div></div>
  }