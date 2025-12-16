/** Chunk was on 1272 **/
/** chunk id: 919285, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk82950 = require("./82950.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk929507 = require("./929507.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk943935 = require("./943935.js");

function u(e) {
  let {
    guild: t
  } = e, n = () => a.Z.dismissNotice(t.id);
  return (0, r.jsx)(i.Z, {
    guild: t,
    onDismissed: n,
    cta: s.intl.string(s.t.RzWDqY),
    message: s.intl.format(s.t["kQ/MDl"], {}),
    type: o.vID.COMMANDS_MIGRATION,
    image: c,
    onClick: () => {
      n(), l.Z.open(t.id, o.pNK.INTEGRATIONS)
    },
    imageMarginTop: 15,
    imageMarginX: 22
  })
}