/** Chunk was on 41727 **/
/** chunk id: 234567, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk569989 = require("./569989.jsx"),
  Chunk630487 = require("./630487.js");

function c(e) {
  let {
    className: t,
    roleColor: n,
    roleName: l,
    hasRemoveIcon: c = false,
    onClick: u,
    disabled: d = false,
    verified: p = false
  } = e;
  return (0, r.jsx)(s.DUT, {
    className: i()(t, o.x6, {
      [o.r9]: d
    }),
    onClick: d ? true : u,
    "aria-disabled": d,
    role: "button",
    children: (0, r.jsx)(a.A, {
      className: o.JC,
      roleColor: n,
      roleName: l,
      verified: p,
      children: c && (0, r.jsx)(s.PGe, {
        size: "custom",
        color: "currentColor",
        height: 6,
        width: 6,
        className: o.Tj,
        colorClass: o.eG
      })
    })
  })
}