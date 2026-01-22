/** Chunk was on 38663 **/
/** chunk id: 750492, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk735321 = require("./735321.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk997338 = require("./997338.js");

function o(e) {
  let {
    widgetType: t,
    gameCount: n
  } = e, o = (0, i.cv)(t);
  return n <= o ? null : (0, r.jsx)("div", {
    role: "alert",
    className: s.l,
    children: (0, r.jsx)(l.wx6, {
      type: "warning",
      children: a.intl.formatToPlainString(a.t.Rv3wYq, {
        maxGames: o
      })
    })
  })
}