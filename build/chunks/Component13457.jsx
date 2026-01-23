/** Chunk was on 41917 **/
/** chunk id: 13457, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk975571 = require("./975571.js"),
  Chunk210139 = require("./210139.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk928490 = require("./928490.js");

function p(e) {
  let {
    onContinue: t,
    onClose: n
  } = e, p = i.A.getArticleURL(l.MVz.XBOX_CONNECTION), u = c.intl.format(c.t.CIc3IN, {
    helpdeskArticleUrl: p
  }), f = o.useMemo(() => [{
    label: c.intl.string(c.t.ihQXsb),
    icon: s.HKD
  }, {
    label: c.intl.string(c.t.Xt1n4P),
    icon: s.ofK
  }, {
    label: c.intl.string(c.t.xqVY3p),
    icon: s.nFg
  }, {
    label: c.intl.string(c.t.iQsKVW),
    icon: s._xR
  }], []);
  return (0, r.jsx)(a.B, {
    platformType: l.fg2.XBOX,
    headerConnect: c.intl.string(c.t.m8aahn),
    headerReconnect: c.intl.string(c.t.z3rAhq),
    body: u,
    onClose: n,
    onContinue: t,
    img: (0, r.jsx)("img", {
      src: d.A,
      width: 230,
      height: 160,
      alt: ""
    }),
    valueProps: f
  })
}