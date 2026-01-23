/** Chunk was on 80360 **/
/** chunk id: 318085, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  g: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk975571 = require("./975571.js"),
  Chunk210139 = require("./210139.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk547166 = require("./547166.js");

function _(t) {
  let {
    platformType: e,
    onContinue: n,
    onClose: _
  } = t, p = i.useMemo(() => [{
    label: l.intl.string(l.t["+eJP7o"]),
    subLabel: l.intl.string(l.t["+0VIUh"]),
    icon: r.HKD
  }, {
    label: l.intl.string(l.t.ZH4QFa),
    icon: r._xR
  }], []), b = s.A.getArticleURL(c.MVz.PS_CONNECTION), C = l.intl.format(l.t.kqZQNe, {
    helpdeskArticleUrl: b
  });
  return (0, o.jsx)(a.B, {
    platformType: e,
    headerConnect: l.intl.string(l.t.xAWHOy),
    headerReconnect: l.intl.string(l.t["ZJ/vBh"]),
    body: C,
    onClose: _,
    onContinue: n,
    img: (0, o.jsx)("img", {
      src: d.A,
      width: 230,
      height: 160,
      alt: ""
    }),
    valueProps: p
  })
}