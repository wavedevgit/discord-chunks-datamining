/** Chunk was on web.js **/
/** chunk id: 944888, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  YB: () => c,
  ZP: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk232062 = require("./232062.js");

function l(e, t) {
  let n = (0, r.e7)([i.ZP, o.Z], () => {
    let n = u(e, t);
    return null != n && c(n)
  });
  return (0, s.W)(e, "useIsUserServerBoosterForGuild") && n
}

function c(e) {
  return null != e.tags && true !== e.tags.premium_subscriber
}

function u(e, t) {
  if (null == e || null == t) return;
  let n = i.ZP.getMember(e, t);
  if (null == n) return;
  let r = n.colorRoleId;
  if (null != r) return a.Z.getRole(e, r)
}