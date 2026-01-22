/** Chunk was on 54469 **/
/** chunk id: 834265, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk458294 = require("./458294.js"),
  Chunk567035 = require("./567035.js"),
  Chunk985018 = require("./985018.jsx");

function c(e, t) {
  let n = e.id,
    c = (0, r.bG)([l.default], () => l.default.getGuildHasUnreadIgnoreMuted(n), [n]);
  return (0, i.jsx)(s.Drp, {
    id: "mark-guild-read",
    label: o.intl.string(o.t.e6RscS),
    icon: true,
    action: () => (0, a.A)([n], t.section),
    disabled: !c
  })
}