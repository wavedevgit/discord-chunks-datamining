/** Chunk was on 1272 **/
/** chunk id: 8521, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk949389 = require("./949389.js"),
  Chunk63063 = require("./63063.js"),
  Chunk82950 = require("./82950.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk511189 = require("./511189.js");
let d = e => {
  let {
    guild: t
  } = e, n = i.useCallback(() => {
    (0, l.x)(t.id)
  }, [t.id]);
  return (0, r.jsx)(o.Z, {
    guild: t,
    onDismissed: n,
    message: c.intl.format(c.t["+QqO3U"], {
      maxMemberCount: t.maxMembers,
      maxMembersUrl: a.Z.getArticleURL(s.BhN.MAX_MEMBERS)
    }),
    type: s.vID.MAX_MEMBER_COUNT,
    image: u,
    imageMarginX: 61
  })
}