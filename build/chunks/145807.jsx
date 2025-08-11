/** Chunk was on web.js **/
/** chunk id: 145807, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk699516 = require("./699516.js"),
  Chunk697451 = require("./697451.js");

function s(e) {
  let {
    message: t,
    channel: n,
    compact: s
  } = e, l = (0, i.e7)([o.Z], () => null != t.interaction && o.Z.isBlocked(t.interaction.user.id), [t.interaction]);
  return <a.Z message={t} channel={n} compact={s} isInteractionUserBlocked={l} />
}

function l(e, t, n) {
  return null != e.interaction && "" !== e.interaction.displayName ? <s message={e} channel={t} compact={n} /> : null
}