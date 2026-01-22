/** Chunk was on 54526 **/
/** chunk id: 551309, original params: r,l,e (module,exports,require) **/
require.d(exports, {
  default: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk142448 = require("./142448.jsx"),
  Chunk985018 = require("./985018.jsx");

function a(r) {
  let {
    roles: l
  } = r;
  return (0, o.jsx)(s.W1t, {
    navId: "invite-roles-menu",
    onClose: n.Z_,
    onSelect: () => {},
    "aria-label": t.intl.string(t.t["LPJmL/"]),
    children: (0, o.jsx)(s.rXV, {
      children: l.map(r => (0, o.jsx)(s.Drp, {
        id: r.id,
        label: () => (0, o.jsx)(i.A, {
          role: r
        })
      }, r.id))
    })
  })
}