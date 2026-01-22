/** Chunk was on 40394 **/
/** chunk id: 173682, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk686449 = require("./686449.js"),
  Chunk945886 = require("./945886.js"),
  Chunk985018 = require("./985018.jsx");

function o(n) {
  let t = (0, l.bG)([s.A], () => s.A.isCollapsed(n.id), [n.id]);
  return __OVERLAY__ ? null : (0, i.jsx)(r.sLh, {
    id: "hide-voice-names",
    label: c.intl.string(c.t.LxzNiu),
    action: () => a.A.update(n.id),
    checked: t
  })
}