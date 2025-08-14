/** Chunk was on 40725 **/
/** chunk id: 337344, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk962086 = require("./962086.js"),
  Chunk225675 = require("./225675.js"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk666921 = require("./666921.js");

function u(e) {
  let {
    guildId: t,
    role: n
  } = e;
  return (0, r.jsxs)(i.xJW, {
    title: c.intl.string(c.t.arFPfH),
    className: d.container,
    children: [(0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      className: d.text,
      children: c.intl.string(c.t["IT/0AA"])
    }), (0, r.jsx)(i.zxk, {
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
      text: c.intl.string(c.t.arFPfH),
      icon: i.d4D,
      iconPosition: "end"
    })]
  })
}