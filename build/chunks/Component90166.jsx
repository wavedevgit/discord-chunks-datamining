/** Chunk was on 21738 **/
/** chunk id: 90166, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk621248 = require("./621248.js"),
  Chunk975571 = require("./975571.js"),
  Chunk64983 = require("./64983.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk462947 = require("./462947.js");
let d = e => {
  let {
    guild: t
  } = e, n = i.useCallback(() => {
    (0, l.x)(t.id)
  }, [t.id]);
  return (0, r.jsx)(s.A, {
    guild: t,
    onDismissed: n,
    message: c.intl.format(c.t["+QqO3U"], {
      maxMemberCount: t.maxMembers,
      maxMembersUrl: a.A.getArticleURL(o.MVz.MAX_MEMBERS)
    }),
    type: o.n5X.MAX_MEMBER_COUNT,
    image: u,
    imageMarginX: 61
  })
}