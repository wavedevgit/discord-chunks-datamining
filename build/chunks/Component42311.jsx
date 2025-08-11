/** Chunk was on web.js **/
/** chunk id: 42311, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626786 = require("./626786.jsx"),
  Chunk815756 = require("./815756.js");
let u = 6;

function d(e) {
  let {
    className: t,
    roleColor: n,
    roleName: i,
    hasRemoveIcon: d = false,
    onClick: f,
    disabled: _ = false,
    verified: p = false
  } = e;
  return (0, r.jsx)(a.zx, {
    className: o()(t, c.button),
    look: a.zx.Looks.BLANK,
    size: a.zx.Sizes.NONE,
    onClick: f,
    disabled: _,
    children: (0, r.jsx)(l.Z, {
      className: c.role,
      roleColor: n,
      roleName: i,
      verified: p,
      children: d && (0, r.jsx)(s.Dio, {
        size: "custom",
        color: "currentColor",
        height: u,
        width: u,
        className: c.removeRole,
        colorClass: c.removeRoleIcon
      })
    })
  })
}