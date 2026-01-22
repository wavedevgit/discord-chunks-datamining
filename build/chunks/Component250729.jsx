/** Chunk was on 71742 **/
/** chunk id: 250729, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk334738 = require("./334738.js"),
  Chunk222823 = require("./222823.js"),
  Chunk790782 = require("./790782.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let t = (0, r.bG)([a.Ay], () => a.Ay.hasUnread(e, c.P.GUILD_EVENT), [e]);
  return (0, i.jsx)(s.Drp, {
    id: "mark-events-read",
    label: l.intl.string(l.t.e6RscS),
    action: function() {
      (0, d.hK)(e, c.P.GUILD_EVENT)
    },
    disabled: !t
  })
}