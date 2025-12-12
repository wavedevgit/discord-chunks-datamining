/** Chunk was on 18290 **/
/** chunk id: 409553, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk921869 = require("./921869.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk493358 = require("./493358.js");

function u(e) {
  let {
    onContinue: t,
    onClose: n
  } = e, u = s.Z.getArticleURL(c.BhN.XBOX_CONNECTION), p = l.intl.format(l.t.CIc3IN, {
    helpdeskArticleUrl: u
  }), f = r.useMemo(() => [{
    label: l.intl.string(l.t.ihQXsb),
    icon: i.gj8
  }, {
    label: l.intl.string(l.t.Xt1n4P),
    icon: i.m3e
  }, {
    label: l.intl.string(l.t.xqVY3p),
    icon: i.BFJ
  }, {
    label: l.intl.string(l.t.iQsKVW),
    icon: i.iWm
  }], []);
  return (0, o.jsx)(a.m, {
    platformType: c.ABu.XBOX,
    headerConnect: l.intl.string(l.t.m8aahn),
    headerReconnect: l.intl.string(l.t.z3rAhq),
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