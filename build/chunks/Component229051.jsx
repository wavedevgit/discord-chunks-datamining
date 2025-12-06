/** Chunk was on 98314 **/
/** chunk id: 229051, original params: o,r,l (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk12922 = require("./12922.jsx"),
  Chunk388032 = require("./388032.jsx");

function c(o) {
  let {
    roles: r
  } = o;
  return (0, e.jsx)(n.v2r, {
    navId: "invite-roles-menu",
    onClose: t.Zy,
    onSelect: () => {},
    "aria-label": i.intl.string(i.t["LPJmL/"]),
    children: (0, e.jsx)(n.kSQ, {
      children: r.map(o => (0, e.jsx)(n.sNh, {
        id: o.id,
        label: () => (0, e.jsx)(s.Z, {
          role: o
        })
      }, o.id))
    })
  })
}