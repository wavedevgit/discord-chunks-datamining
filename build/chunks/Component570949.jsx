/** Chunk was on 35755 **/
/** chunk id: 570949, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => f,
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk276022 = require("./276022.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk914010 = require("./914010.js"),
  Chunk499254 = require("./499254.js"),
  Chunk827498 = require("./827498.js"),
  Chunk314734 = require("./314734.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  var t;
  let {
    application: n
  } = e, i = null != (t = c.Z.getGuildId()) ? t : true;
  return (0, o.Z)({
    application: n,
    guildId: i,
    onItemClick: () => {
      (0, l.Mr3)(p.e9), (0, u.y)(d.ti.DISMISSED)
    }
  })
}

function h(e) {
  let {
    application: t,
    onSelect: n
  } = e, o = s.Sb.useSetting(), c = (0, a.Z)({
    id: t.id,
    label: m.intl.string(m.t["+NP/b2"])
  }), u = f({
    application: t
  });
  return (0, i.jsxs)(l.v2r, {
    navId: "activity-shelf-item-context",
    onClose: r.Zy,
    "aria-label": m.intl.string(m.t.WkcHT9),
    onSelect: n,
    children: [null != u && (0, i.jsxs)(l.kSQ, {
      children: [...u]
    }, "manage-app-actions"), o && (0, i.jsx)(l.kSQ, {
      children: c
    }, "developer-actions")]
  })
}