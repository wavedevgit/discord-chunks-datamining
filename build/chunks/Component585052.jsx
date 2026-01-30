/** Chunk was on 78376 **/
/** chunk id: 585052, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk975571 = require("./975571.js"),
  Chunk809505 = require("./809505.js"),
  Chunk253932 = require("./253932.js"),
  Chunk84373 = require("./84373.js"),
  Chunk871930 = require("./871930.jsx"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function m() {
  let e = (0, c.o)(),
    t = i.useMemo(() => (0, a.YS)(), []);
  return (0, r.jsxs)(d.h, {
    setting: u.H.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2,
    children: [(0, r.jsx)(d._, {
      header: p.intl.string(p.t.tiCXaH),
      description: p.intl.format(p.t.RvjRRI, {
        appealLink: s.A.getArticleURL(_.MVz.SAFE_DIRECT_MESSAGING)
      })
    }), (0, r.jsx)(l.z6M, {
      value: e,
      options: t,
      onChange: e => o.he.updateSetting(e)
    })]
  })
}