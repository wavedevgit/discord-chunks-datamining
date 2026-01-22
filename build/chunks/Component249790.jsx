/** Chunk was on web.js **/
/** chunk id: 249790, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk994500 = require("./994500.js"),
  Chunk231156 = require("./231156.js");

function l(e) {
  let {
    user: t,
    guildId: n,
    iconColor: l
  } = e, c = (0, i.bG)([s.A], () => s.A.isBlocked(t.id));
  return (0, r.jsxs)("div", {
    className: o.kL,
    children: [(0, r.jsx)(a.euF, {
      className: o.my,
      size: a._3J.SIZE_56,
      src: t.getAvatarURL(n, 64),
      "aria-label": t.username
    }), (0, r.jsx)("div", {
      className: o.mI,
      children: c ? (0, r.jsx)(a.KTN, {
        color: l
      }) : (0, r.jsx)(a.G3N, {
        color: l
      })
    })]
  })
}