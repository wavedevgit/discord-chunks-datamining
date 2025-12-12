/** Chunk was on 10667 **/
/** chunk id: 569932, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk921869 = require("./921869.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk660025 = require("./660025.js");

function u(t) {
  let {
    platformType: n,
    onContinue: e,
    onClose: u
  } = t, p = i.useMemo(() => [{
    label: l.intl.string(l.t["+eJP7o"]),
    subLabel: l.intl.string(l.t["+0VIUh"]),
    icon: r.gj8
  }, {
    label: l.intl.string(l.t.ZH4QFa),
    icon: r.iWm
  }], []), _ = s.Z.getArticleURL(c.BhN.PS_CONNECTION), b = l.intl.format(l.t.kqZQNe, {
    helpdeskArticleUrl: _
  });
  return (0, o.jsx)(a.m, {
    platformType: n,
    headerConnect: l.intl.string(l.t.xAWHOy),
    headerReconnect: l.intl.string(l.t["ZJ/vBh"]),
    body: b,
    onClose: u,
    onContinue: e,
    img: (0, o.jsx)("img", {
      src: d.Z,
      width: 230,
      height: 160,
      alt: ""
    }),
    valueProps: p
  })
}