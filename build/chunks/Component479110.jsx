/** Chunk was on 91173 **/
/** chunk id: 479110, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
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
  } = e, u = (0, i.e7)([o.default], () => o.default.getCurrentUser()), d = (0, l.ZP)(t), p = (null == u ? true : u.id) === t.author.id ? s.intl.string(s.t.huMLgY) : s.intl.format(s.t.PVAL4O, {
    username: null == d ? true : d.nick
  });
  return (0, r.jsx)(a.Z, {
    channel: n,
    message: t,
    compact: c,
    content: p
  })
}