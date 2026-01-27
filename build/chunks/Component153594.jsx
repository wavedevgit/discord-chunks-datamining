/** Chunk was on 54469 **/
/** chunk id: 153594, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk686449 = require("./686449.js"),
  Chunk543465 = require("./543465.js"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = (0, r.bG)([a.Ay], () => a.Ay.isGuildCollapsed(e), [e]);
  return (0, i.jsx)(s.sLh, {
    id: "hide-muted-channels",
    label: o.intl.string(o.t.UwOLJO),
    leadingAccessory: t ? {
      type: "icon",
      icon: s.G3N
    } : true,
    action: () => l.A.toggleCollapseGuild(e),
    checked: n
  })
}