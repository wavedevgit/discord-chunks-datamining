/** Chunk was on 21968 **/
/** chunk id: 292024, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk997509 = require("./997509.js"),
  Chunk529942 = require("./529942.js"),
  Chunk209700 = require("./209700.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function p(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : d.BEX.ROLES;
  return (0, r.bG)([c.A], () => c.A.canImpersonateRole(e, t)) ? (0, i.jsx)(l.Drp, {
    id: "view-as-role",
    label: u.intl.string(u.t.arFPfJ),
    icon: l.EdP,
    action: () => {
      a.A.close(), (0, s.Tk)(e.id, {
        type: o._.ROLES,
        roles: {
          [t.id]: t
        },
        returnToSection: n
      })
    }
  }, "view-as-role") : null
}