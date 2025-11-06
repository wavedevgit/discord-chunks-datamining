/** Chunk was on 69283 **/
/** chunk id: 905131, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk276264 = require("./276264.jsx"),
  Chunk850020 = require("./850020.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk468324 = require("./468324.js");
let m = Chunk647438.memo(function(e) {
  let {
    userId: t,
    guildId: n,
    isPicked: a,
    isCurrent: i
  } = e, m = (0, o.e7)([d.default], () => d.default.getUser(t)), f = (0, o.e7)([s.ZP], () => null != n ? s.ZP.getMember(n, t) : null), h = (0, u.K)({
    user: m,
    guildId: null != n ? n : true
  });
  return null == m ? null : (0, r.jsx)("li", {
    className: l()(_.memberItem, {
      [_.picked]: a && !i,
      [_.currentPick]: i
    }),
    "data-member-id": t,
    children: (0, r.jsx)(c.Z, {
      user: m,
      nick: null == f ? true : f.nick,
      colorString: null == f ? true : f.colorString,
      colorStrings: null == f ? true : f.colorStrings,
      guildId: null != n ? n : true,
      nameplate: i ? h : null,
      hideClanTag: true,
      className: _.memberListItem,
      hideSubtext: true
    })
  })
})