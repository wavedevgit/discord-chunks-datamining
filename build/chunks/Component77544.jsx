/** Chunk was on 91042 **/
/** chunk id: 77544, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk908289 = require("./908289.js"),
  Chunk290863 = require("./290863.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function u(e, t) {
  let n = (0, r.bG)([o.A], () => (0, a.A)(o.A.findActivity(e, e => e.type === s.$pd.STREAMING)), [e]);
  return null == n ? null : (0, l.jsx)(i.Drp, {
    id: "watch-stream",
    label: d.intl.string(d.t["7Xq/nV"]),
    action: () => {
      null == t || t(), window.open(n, "_blank")
    }
  })
}