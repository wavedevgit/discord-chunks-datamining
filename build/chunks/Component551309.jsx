/** Chunk was on 54526 **/
/** chunk id: 551309, original params: r,e,l (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk775602 = require("./775602.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function d(r) {
  let {
    roles: e
  } = r, l = (0, a.bG)([o.A], () => o.A.roleStyle);
  return (0, t.jsx)(i.W1t, {
    "data-menu-label-graphic": true,
    navId: "invite-roles-menu",
    onClose: n.Z_,
    onSelect: () => {},
    "aria-label": s.intl.string(s.t["LPJmL/"]),
    children: (0, t.jsx)(i.rXV, {
      children: e.map(r => {
        var e;
        return (0, t.jsx)(i.Drp, {
          id: r.id,
          leadingAccessory: {
            type: "roleDot",
            variant: "dot" === l ? "dot" : "circle",
            color: null != (e = r.colorString) ? e : c.TpD,
            colors: r.colorStrings
          },
          label: r.name
        }, r.id)
      })
    })
  })
}