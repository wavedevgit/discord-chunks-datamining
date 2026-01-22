/** Chunk was on web.js **/
/** chunk id: 986350, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk29352 = require("./29352.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk144365 = require("./144365.js");

function c(e) {
  var t;
  let n, {
      message: c,
      onDeleteMessage: u,
      children: d
    } = e,
    f = null == (t = c.interactionMetadata) ? true : t.ephemerality_reason,
    p = () => u(c, true);
  if (null != f) {
    let e = (0, a.R)(f);
    n = (0, r.jsx)("div", {
      className: l.rd,
      children: o.intl.format(o.t.wx1tLQ, {
        handleDelete: p,
        reason: e
      })
    })
  } else n = c.type === s.lAJ.STAGE_RAISE_HAND ? o.intl.format(o.t["qDAX++"], {
    handleDelete: p
  }) : o.intl.format(o.t.uX3ecL, {
    count: 1,
    countMessages: 1,
    handleDelete: p
  });
  return (0, r.jsxs)("div", {
    className: l.XO,
    onClick: e => e.stopPropagation(),
    children: [(0, r.jsx)(i.bMW, {
      size: "xs",
      color: "currentColor",
      className: l.Kk
    }), n, d]
  })
}