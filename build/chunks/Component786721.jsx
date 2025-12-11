/** Chunk was on 40184 **/
/** chunk id: 786721, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk626786 = require("./626786.jsx"),
  Chunk683930 = require("./683930.js");

function c(e) {
  let {
    className: t,
    roleColor: n,
    roleName: r,
    hasRemoveIcon: c = false,
    onClick: u,
    disabled: d = false,
    verified: p = false
  } = e;
  return (0, i.jsx)(a.P3F, {
    className: l()(t, s.button, {
      [s.disabled]: d
    }),
    onClick: d ? true : u,
    "aria-disabled": d,
    role: "button",
    children: (0, i.jsx)(o.Z, {
      className: s.role,
      roleColor: n,
      roleName: r,
      verified: p,
      children: c && (0, i.jsx)(a.Dio, {
        size: "custom",
        color: "currentColor",
        height: 6,
        width: 6,
        className: s.removeRole,
        colorClass: s.removeRoleIcon
      })
    })
  })
}