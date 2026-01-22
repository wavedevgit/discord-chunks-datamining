/** Chunk was on 41917 **/
/** chunk id: 13457, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk975571 = require("./975571.js"),
  Chunk210139 = require("./210139.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk928490 = require("./928490.js");

function f(e) {
  let {
    onContinue: t,
    onClose: n
  } = e, f = o.A.getArticleURL(c.MVz.XBOX_CONNECTION), b = l.intl.format(l.t.CIc3IN, {
    helpdeskArticleUrl: f
  }), u = s.useMemo(() => [{
    label: l.intl.string(l.t.ihQXsb),
    icon: i.HKD
  }, {
    label: l.intl.string(l.t.Xt1n4P),
    icon: i.ofK
  }, {
    label: l.intl.string(l.t.xqVY3p),
    icon: i.nFg
  }, {
    label: l.intl.string(l.t.iQsKVW),
    icon: i._xR
  }], []);
  return (0, r.jsx)(a.B, {
    platformType: c.fg2.XBOX,
    headerConnect: l.intl.string(l.t.m8aahn),
    headerReconnect: l.intl.string(l.t.z3rAhq),
    body: b,
    onClose: n,
    onContinue: t,
    img: (0, r.jsx)("img", {
      src: d.A,
      width: 230,
      height: 160,
      alt: ""
    }),
    valueProps: u
  })
}