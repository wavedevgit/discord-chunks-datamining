/** Chunk was on web.js **/
/** chunk id: 143239, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk47167 = require("./47167.js"),
  Chunk734057 = require("./734057.js"),
  Chunk864436 = require("./864436.jsx"),
  Chunk200041 = require("./200041.jsx"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  let {
    stream: t,
    game: n,
    textVariant: d,
    textClassName: f,
    iconClassName: p,
    hideIcon: _ = false,
    hideText: h = false,
    hideTooltip: m = false,
    canTruncate: g = true,
    showChannelName: E = false
  } = e, b = (0, i.bG)([o.A], () => o.A.getChannel(t.channelId)), y = (0, s.Ay)(b), O = (null == n ? true : n.name) === "" ? null : null == n ? true : n.name, A = null != O ? O : u.intl.string(u.t.eXan7B), v = null != y ? "".concat(A, " (").concat(y, ")") : A, S = E ? v : A, I = v;
  return (0, r.jsx)(c.A, {
    icon: _ ? true : (0, r.jsx)(l.A, {
      icon: a.Uk3,
      className: p
    }),
    text: S,
    tooltipText: m ? true : v,
    textVariant: d,
    className: f,
    canTruncate: g,
    hideTooltip: m,
    "aria-label": I,
    hideText: h
  })
}