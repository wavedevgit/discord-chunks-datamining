/** Chunk was on web.js **/
/** chunk id: 145807, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk699516 = require("./699516.js"),
  Chunk697451 = require("./697451.jsx");

function s(e) {
  let {
    message: t,
    channel: n,
    compact: s
  } = e, l = (0, i.e7)([a.Z], () => null != t.interaction && a.Z.isBlocked(t.interaction.user.id), [t.interaction]);
  return (0, r.jsx)(o.Z, {
    message: t,
    channel: n,
    compact: s,
    isInteractionUserBlocked: l
  })
}

function l(e, t, n) {
  return null != e.interaction && "" !== e.interaction.displayName ? (0, r.jsx)(s, {
    message: e,
    channel: t,
    compact: n
  }) : null
}