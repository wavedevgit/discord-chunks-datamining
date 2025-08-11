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
  Chunk753130 = require("./753130.js");

function l(e) {
  let t, {
    className: n,
    children: i,
    verified: l,
    roleColor: c,
    roleName: u
  } = e;
  return t = l ? <a.Z size={12} color={c} className={s.linkedRoleColor} /> : <div className={s.roleColor} style={{
      backgroundColor: c
    }} />, <div className={o()(n, s.role)} style={{
      "--custom-role-label-color": c
    }}>{t}{u}{i}</div>
}