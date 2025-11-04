/** Chunk was on 69283 **/
/** chunk id: 69376, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk308982 = require("./308982.js"),
  Chunk134464 = require("./134464.jsx"),
  Chunk130625 = require("./130625.js");

function o(e) {
  let {
    channelId: t,
    memberIds: n,
    guildId: o,
    currentMemberId: c,
    shuffling: u
  } = e;
  return (0, r.jsx)("ul", {
    className: l.memberList,
    "data-member-count": n.length,
    "data-animated": "true",
    children: n.map(e => {
      let n = u ? (0, a.iD)(t, e) : null;
      return (0, r.jsx)(i.Z, {
        userId: e,
        guildId: o,
        isCurrent: c === e && !u,
        shuffleState: n
      }, e)
    })
  })
}