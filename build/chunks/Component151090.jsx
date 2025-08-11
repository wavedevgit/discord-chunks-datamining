/** Chunk was on 32157 **/
/** chunk id: 151090, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk357156 = require("./357156.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk771845 = require("./771845.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx");

function h(t) {
  let {
    onExportToFile: e,
    onExportToSoundboard: i,
    onDelete: h
  } = t, Z = (0, n.e7)([c.ZP, d.Z, p.default, r.Z], () => c.ZP.getFlattenedGuildIds().some(t => {
    let e = r.Z.getGuild(t);
    return null != e && (0, a.Gw)(e, d.Z, p.default).canCreateExpressions
  }));
  return (0, l.jsxs)(s.v2r, {
    navId: "clips-more-options",
    "aria-label": u.intl.string(u.t.PdRCRk),
    onClose: o.Zy,
    onSelect: o.Zy,
    children: [Z ? (0, l.jsx)(s.sNh, {
      icon: s.KY1,
      id: "clips-export-soundboard",
      label: u.intl.string(u.t.HH4Tjo),
      action: i
    }) : null, (0, l.jsx)(s.sNh, {
      icon: s._8t,
      id: "clips-export-file",
      label: u.intl.string(u.t.l9qpzs),
      action: e
    }), (0, l.jsx)(s.sNh, {
      icon: s.XHJ,
      id: "clips-delete",
      label: u.intl.string(u.t.oyYWHB),
      color: "danger",
      action: h
    })]
  })
}