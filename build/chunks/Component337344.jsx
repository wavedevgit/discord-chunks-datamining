/** Chunk was on 32923 **/
/** chunk id: 337344, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk962086 = require("./962086.js"),
  Chunk225675 = require("./225675.js"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk897174 = require("./897174.js");

function u(e) {
  let {
    guildId: t,
    role: n
  } = e;
  return (0, r.jsx)("div", {
    className: d.container,
    children: (0, r.jsx)(i.gNt, {
      label: c.intl.string(c.t.arFPfJ),
      description: c.intl.string(c.t["IT/0AI"]),
      children: (0, r.jsx)(i.Button, {
        size: "sm",
        variant: "secondary",
        onClick: () => {
          s.Z.close(), (0, l.iD)(t, {
            type: a.z.ROLES,
            roles: {
              [n.id]: n
            },
            returnToSection: o.pNK.ROLES
          })
        },
        text: c.intl.string(c.t.arFPfJ),
        icon: i.d4D,
        iconPosition: "end"
      })
    })
  })
}