/** Chunk was on 10667 **/
/** chunk id: 569932, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk921869 = require("./921869.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk322066 = require("./322066.js");

function b(e) {
  let {
    platformType: t,
    onContinue: n,
    onClose: b
  } = e, u = i.useMemo(() => [{
    label: c.intl.string(c.t["+eJP7o"]),
    subLabel: c.intl.string(c.t["+0VIUh"]),
    icon: a.gj8
  }, {
    label: c.intl.string(c.t.ZH4QFa),
    icon: a.iWm
  }], []), p = r.Z.getArticleURL(s.BhN.PS_CONNECTION), C = c.intl.format(c.t.kqZQNe, {
    helpdeskArticleUrl: p
  });
  return (0, o.jsx)(d.m, {
    platformType: t,
    headerConnect: c.intl.string(c.t.xAWHOy),
    headerReconnect: c.intl.string(c.t["ZJ/vBh"]),
    body: C,
    onClose: b,
    onContinue: n,
    img: (0, o.jsx)("img", {
      src: l.Z,
      width: 230,
      height: 160,
      alt: ""
    }),
    valueProps: u
  })
}