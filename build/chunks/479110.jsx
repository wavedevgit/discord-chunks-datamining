/** Chunk was on web.js **/
/** chunk id: 479110, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js"),
  Chunk442837 = require("./442837.js"),
  Chunk739566 = require("./739566.js"),
  Chunk594174 = require("./594174.js"),
  Chunk66420 = require("./66420.jsx"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let {
    message: t,
    channel: n,
    compact: c
  } = e, u = (0, i.e7)([a.default], () => a.default.getCurrentUser()), d = (0, o.ZP)(t), f = (null == u ? true : u.id) === t.author.id ? l.intl.string(l.t.huMLgY) : l.intl.format(l.t.PVAL4O, {
    username: null == d ? true : d.nick
  });
  return <s.Z channel={n} message={t} compact={c} content={f} />
}