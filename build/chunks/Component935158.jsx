/** Chunk was on 21738 **/
/** chunk id: 935158, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk64983 = require("./64983.jsx"),
  Chunk997509 = require("./997509.js"),
  Chunk320426 = require("./320426.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk693248 = require("./693248.js");

function u(e) {
  let {
    guild: t
  } = e, n = () => a.A.dismissNotice(t.id);
  return (0, r.jsx)(i.A, {
    guild: t,
    onDismissed: n,
    cta: o.intl.string(o.t.RzWDqY),
    message: o.intl.format(o.t["kQ/MDl"], {}),
    type: s.n5X.COMMANDS_MIGRATION,
    image: c,
    onClick: () => {
      n(), l.A.open(t.id, s.BEX.INTEGRATIONS)
    },
    imageMarginTop: 15,
    imageMarginX: 22
  })
}