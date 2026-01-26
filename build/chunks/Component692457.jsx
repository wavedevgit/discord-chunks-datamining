/** Chunk was on 1636 **/
/** chunk id: 692457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk843472 = require("./843472.js"),
  Chunk406704 = require("./406704.js"),
  Chunk961350 = require("./961350.js"),
  Chunk697470 = require("./697470.js"),
  Chunk985018 = require("./985018.jsx");

function u(e, t) {
  let n = (0, i.bG)([c.default], () => c.default.getId()),
    u = (0, o.Id)(t),
    g = (0, o.s5)(t);
  return (0, s.A)(e, n) && u && !g ? (0, r.jsx)(l.Drp, {
    id: "edit",
    label: d.intl.string(d.t.fsBWmS),
    action: () => a.A.startEditMessageRecord(t.id, e),
    leadingAccessory: {
      type: "icon",
      icon: l.R2l
    },
    icon: l.R2l
  }) : null
}