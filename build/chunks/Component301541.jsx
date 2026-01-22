/** Chunk was on 91042 **/
/** chunk id: 301541, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk474397 = require("./474397.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function A(e, t, n) {
  let A = (0, o.aL)();
  return (0, i.bG)([d.default], () => d.default.getId() === e) || t === u.BRT.POPOUT ? null : (0, l.jsx)(r.Drp, {
    id: "message-user",
    label: c.intl.string(c.t.OAJQlP),
    action: () => {
      (0, s.A)(t, true), a.A.openPrivateChannel({
        recipientIds: e
      }), A.dispatch(u.jej.POPOUT_CLOSE), (0, r.s7G)()
    },
    icon: n
  })
}