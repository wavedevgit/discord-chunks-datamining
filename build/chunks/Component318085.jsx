/** Chunk was on 80360 **/
/** chunk id: 318085, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  g: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk975571 = require("./975571.js"),
  Chunk210139 = require("./210139.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk547166 = require("./547166.js");

function b(t) {
  let {
    platformType: n,
    onContinue: e,
    onClose: b
  } = t, p = i.useMemo(() => [{
    label: c.intl.string(c.t["+eJP7o"]),
    subLabel: c.intl.string(c.t["+0VIUh"]),
    icon: a.HKD
  }, {
    label: c.intl.string(c.t.ZH4QFa),
    icon: a._xR
  }], []), f = s.A.getArticleURL(r.MVz.PS_CONNECTION), A = c.intl.format(c.t.kqZQNe, {
    helpdeskArticleUrl: f
  });
  return (0, o.jsx)(d.B, {
    platformType: n,
    headerConnect: c.intl.string(c.t.xAWHOy),
    headerReconnect: c.intl.string(c.t["ZJ/vBh"]),
    body: A,
    onClose: b,
    onContinue: e,
    img: (0, o.jsx)("img", {
      src: l.A,
      width: 230,
      height: 160,
      alt: ""
    }),
    valueProps: p
  })
}