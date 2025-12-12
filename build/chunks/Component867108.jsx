/** Chunk was on 86736 **/
/** chunk id: 867108, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434404 = require("./434404.js"),
  Chunk962086 = require("./962086.js"),
  Chunk225675 = require("./225675.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : d.pNK.ROLES;
  return (0, r.e7)([c.Z], () => c.Z.canImpersonateRole(e, t)) ? (0, i.jsx)(l.sNh, {
    id: "view-as-role",
    label: u.intl.string(u.t.arFPfJ),
    icon: l.ZSh,
    action: () => {
      a.Z.close(), (0, o.iD)(e.id, {
        type: s.z.ROLES,
        roles: {
          [t.id]: t
        },
        returnToSection: n
      })
    }
  }, "view-as-role") : null
}