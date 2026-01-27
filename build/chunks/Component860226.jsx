/** Chunk was on 60667 **/
/** chunk id: 860226, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk195043 = require("./195043.jsx"),
  Chunk430452 = require("./430452.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");

function u() {
  let e = (0, i.bG)([o.A], () => o.A.getQoS());
  return (0, r.jsx)(a.x, {
    setting: c.H.VOICE_AND_VIDEO_ADVANCED_QOS,
    children: (0, r.jsx)(l.dOG, {
      label: d.intl.string(d.t["3CqDxp"]),
      description: d.intl.string(d.t.I1Eoqq),
      checked: e,
      onChange: e => s.A.setQoS(e)
    })
  })
}