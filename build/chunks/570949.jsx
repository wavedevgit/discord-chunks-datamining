/** Chunk was on web.js **/
/** chunk id: 570949, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => p,
  Z: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
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

function p(e) {
  var t;
  let {
    application: n
  } = e, r = null != (t = c.Z.getGuildId()) ? t : true, o = () => {
    (0, i.Mr3)(f.e9), (0, u.yT)(d.ti.DISMISSED)
  };
  return (0, s.Z)({
    application: n,
    guildId: r,
    onItemClick: o
  })
}

function h(e) {
  let {
    application: t,
    onSelect: n
  } = e, s = l.Sb.useSetting(), c = (0, a.Z)({
    id: t.id,
    label: _.intl.string(_.t["+NP/b2"])
  }), u = p({
    application: t
  });
  return <i.v2r navId={"activity-shelf-item-context"} onClose={o.Zy} aria-label={_.intl.string(_.t.WkcHT0)} onSelect={n}>{null != u && <i.kSQ> {...u}</i.kSQ>}{s && <i.kSQ>{c}</i.kSQ>}</i.v2r>
}