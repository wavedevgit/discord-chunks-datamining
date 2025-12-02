/** Chunk was on 384 **/
/** chunk id: 402148, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  F: () => s,
  i: () => o
}), require("./539854.js"), require("./388685.js");
var Chunk149765 = require("./149765.js"),
  Chunk345162 = require("./345162.js"),
  Chunk233608 = require("./233608.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  return r.Db(e.permissions, a.TC2)
}

function o(e, t) {
  let n = [],
    r = l.Z.getGuildPermissionSpecMap(e);
  for (let e of a.yYS)(0, i.Fs)(t, e) && n.push(r[e.toString()].title);
  return n
}