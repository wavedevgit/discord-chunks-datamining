/** Chunk was on 61366 **/
/** chunk id: 409553, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk921869 = require("./921869.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk167945 = require("./167945.js");

function u(e) {
  let {
    onContinue: t,
    onClose: n
  } = e, u = s.Z.getArticleURL(l.BhN.XBOX_CONNECTION), p = c.intl.format(c.t.CIc3IC, {
    helpdeskArticleUrl: u
  }), f = r.useMemo(() => [{
    label: c.intl.string(c.t.ihQXsb),
    icon: i.gj8
  }, {
    label: c.intl.string(c.t.Xt1n4O),
    icon: i.m3e
  }, {
    label: c.intl.string(c.t.xqVY3t),
    icon: i.BFJ
  }, {
    label: c.intl.string(c.t.iQsKVV),
    icon: i.iWm
  }], []);
  return (0, o.jsx)(a.m, {
    platformType: l.ABu.XBOX,
    headerConnect: c.intl.string(c.t.m8aaho),
    headerReconnect: c.intl.string(c.t.z3rAho),
    body: p,
    onClose: n,
    onContinue: t,
    img: (0, o.jsx)("img", {
      src: d.Z,
      width: 230,
      height: 160,
      alt: ""
    }),
    valueProps: f
  })
}