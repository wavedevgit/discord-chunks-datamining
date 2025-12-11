/** Chunk was on 40184 **/
/** chunk id: 626786, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk134433 = require("./134433.jsx"),
  Chunk24000 = require("./24000.js");

function s(e) {
  let t, {
    className: n,
    children: r,
    verified: s,
    roleColor: c,
    roleName: u
  } = e;
  return t = s ? (0, i.jsx)(a.Z, {
    size: 12,
    color: c,
    className: o.linkedRoleColor
  }) : (0, i.jsx)("div", {
    className: o.roleColor,
    style: {
      backgroundColor: c
    }
  }), (0, i.jsxs)("div", {
    className: l()(n, o.role),
    style: {
      "--custom-role-label-color": c
    },
    children: [t, u, r]
  })
}