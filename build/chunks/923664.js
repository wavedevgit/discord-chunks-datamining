/** Chunk was on web.js **/
/** chunk id: 923664, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => c,
  w: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk496675 = require("./496675.js"),
  Chunk300429 = require("./300429.js"),
  Chunk823379 = require("./823379.js"),
  Chunk981631 = require("./981631.js");

function l(e, t, n) {
  if (n.can(s.Plq.BYPASS_SLOWMODE, e)) returntrue;
  switch (t) {
    case o.S.SendMessage:
      return n.can(s.Plq.MANAGE_CHANNELS, e) || n.can(s.Plq.MANAGE_MESSAGES, e);
    case o.S.CreateThread:
      return n.can(s.Plq.MANAGE_THREADS, e);
    default:
      (0, a.vE)(t)
  }
}

function c(e, t) {
  return l(e, t, i.Z)
}

function u(e, t) {
  return (0, r.e7)([i.Z], () => l(e, t, i.Z))
}