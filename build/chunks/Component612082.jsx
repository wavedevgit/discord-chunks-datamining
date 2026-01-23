/** Chunk was on web.js **/
/** chunk id: 612082, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk183766 = require("./183766.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk854987 = require("./854987.js"),
  Chunk181380 = require("./181380.js"),
  Chunk420156 = require("./420156.js");

function p(e) {
  let {
    onClick: t,
    children: n,
    className: a,
    contentClassName: p,
    active: _ = false,
    muteSound: h = false,
    disabled: m = false
  } = e, g = i.useContext(u.P), E = (0, c.rdh)(g.primaryColor).hex(), y = (0, c.rdh)(g.secondaryColor).hex(), b = (0, d.V)(o.A), O = i.useCallback(() => {
    m || (h || b(), null == t || t())
  }, [t, h, b, m]);
  return (0, r.jsx)(l.DUT, {
    className: s()(a, f.In, {
      [f.vu]: _,
      [f.r9]: m
    }),
    style: {
      backgroundColor: E
    },
    onClick: O,
    children: (0, r.jsx)("div", {
      className: s()(p, f.LG),
      style: {
        borderColor: y
      },
      children: n
    })
  })
}