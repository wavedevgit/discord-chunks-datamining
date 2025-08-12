/** Chunk was on 26628 **/
/** chunk id: 836040, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk451478 = require("./451478.js"),
  Chunk727258 = require("./727258.js"),
  Chunk325257 = require("./325257.jsx"),
  Chunk981631 = require("./981631.js");

function u(e) {
  let {
    guild: t,
    invite: n
  } = e, u = i.useMemo(() => (0, s.Mg)(t.id), [t.id]), d = (0, l.e7)([o.Z], () => o.Z.isFocused());
  return null == t ? null : (0, r.jsx)(a.Z, {
    guildNode: u,
    guild: t,
    animatable: d,
    draggable: false,
    contextMenu: () => {},
    selected: true,
    route: c.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(t.id, n.code)
  })
}