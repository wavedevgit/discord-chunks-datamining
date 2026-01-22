/** Chunk was on 47841 **/
/** chunk id: 486619, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  G: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk529942 = require("./529942.js"),
  Chunk209700 = require("./209700.js"),
  Chunk997509 = require("./997509.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk51527 = require("./51527.js");

function u(e) {
  let {
    guildId: t,
    role: n
  } = e;
  return (0, r.jsx)("div", {
    className: d.k,
    children: (0, r.jsx)(i.D0$, {
      label: o.intl.string(o.t.arFPfJ),
      description: o.intl.string(o.t["IT/0AI"]),
      children: (0, r.jsx)(i.Button, {
        size: "sm",
        variant: "secondary",
        onClick: () => {
          a.A.close(), (0, l.Tk)(t, {
            type: s._.ROLES,
            roles: {
              [n.id]: n
            },
            returnToSection: c.BEX.ROLES
          })
        },
        text: o.intl.string(o.t.arFPfJ),
        icon: i.KS6,
        iconPosition: "end"
      })
    })
  })
}