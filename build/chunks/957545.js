/** Chunk was on 47841 **/
/** chunk id: 957545, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  J: () => a,
  P: () => o
}), require("./321073.js"), require("./896048.js");
var Chunk136722 = require("./136722.js"),
  Chunk34457 = require("./34457.js"),
  Chunk558393 = require("./558393.js"),
  Chunk652215 = require("./652215.js");

function a(e) {
  return r.X8(e.permissions, s.Lti)
}

function o(e, t) {
  let n = [],
    r = l.A.getGuildPermissionSpecMap(e);
  for (let e of s.nfo)(0, i._m)(t, e) && n.push(r[e.toString()].title);
  return n
}