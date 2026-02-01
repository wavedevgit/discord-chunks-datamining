/** Chunk was on 60118 **/
/** chunk id: 750492, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk735321 = require("./735321.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk997338 = require("./997338.js");

function s(e) {
  let {
    widgetType: t,
    gameCount: n
  } = e, s = (0, i.cv)(t);
  return n <= s ? null : (0, r.jsx)("div", {
    role: "alert",
    className: o.l,
    children: (0, r.jsx)(l.wx6, {
      type: "warning",
      children: a.intl.formatToPlainString(a.t.Rv3wYq, {
        maxGames: s
      })
    })
  })
}