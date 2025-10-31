/** Chunk was on 88647 **/
/** chunk id: 786721, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626786 = require("./626786.jsx"),
  Chunk361043 = require("./361043.js");

function u(e) {
  let {
    className: t,
    roleColor: n,
    roleName: i,
    hasRemoveIcon: u = false,
    onClick: d,
    disabled: p = false,
    verified: f = false
  } = e;
  return (0, r.jsx)(a.zx, {
    className: l()(t, c.button),
    look: a.zx.Looks.BLANK,
    size: a.zx.Sizes.NONE,
    onClick: d,
    disabled: p,
    children: (0, r.jsx)(s.Z, {
      className: c.role,
      roleColor: n,
      roleName: i,
      verified: f,
      children: u && (0, r.jsx)(o.Dio, {
        size: "custom",
        color: "currentColor",
        height: 6,
        width: 6,
        className: c.removeRole,
        colorClass: c.removeRoleIcon
      })
    })
  })
}