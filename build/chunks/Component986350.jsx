/** Chunk was on 92917 **/
/** chunk id: 986350, original params: e,t,n (module,exports,require) **/
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
    p = null == (t = c.interactionMetadata) ? true : t.ephemerality_reason,
    m = () => u(c, true);
  if (null != p) {
    let e = (0, l.R)(p);
    n = (0, r.jsx)("div", {
      className: o.rd,
      children: s.intl.format(s.t.wx1tLQ, {
        handleDelete: m,
        reason: e
      })
    })
  } else n = c.type === a.lAJ.STAGE_RAISE_HAND ? s.intl.format(s.t["qDAX++"], {
    handleDelete: m
  }) : s.intl.format(s.t.uX3ecL, {
    count: 1,
    countMessages: 1,
    handleDelete: m
  });
  return (0, r.jsxs)("div", {
    className: o.XO,
    onClick: e => e.stopPropagation(),
    children: [(0, r.jsx)(i.bMW, {
      size: "xs",
      color: "currentColor",
      className: o.Kk
    }), n, d]
  })
}