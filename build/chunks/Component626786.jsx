/** Chunk was on web.js **/
/** chunk id: 626786, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk134433 = require("./134433.jsx"),
  Chunk923573 = require("./923573.js");

function l(e) {
  let t, {
    className: n,
    children: i,
    verified: l,
    roleColor: c,
    roleName: u
  } = e;
  return t = l ? (0, r.jsx)(a.Z, {
    size: 12,
    color: c,
    className: s.linkedRoleColor
  }) : (0, r.jsx)("div", {
    className: s.roleColor,
    style: {
      backgroundColor: c
    }
  }), (0, r.jsxs)("div", {
    className: o()(n, s.role),
    style: {
      "--custom-role-label-color": c
    },
    children: [t, u, i]
  })
}