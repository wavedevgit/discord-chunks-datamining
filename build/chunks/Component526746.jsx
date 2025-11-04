/** Chunk was on 26494 **/
/** chunk id: 526746, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk535139 = require("./535139.js"),
  Chunk812206 = require("./812206.js"),
  Chunk826380 = require("./826380.jsx"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  var n;
  let {
    connection: t
  } = e, c = (0, i.e7)([r.Z], () => null != t.application_id ? r.Z.getApplication(t.application_id) : null, [t.application_id]), d = null != (n = null == c ? true : c.name) ? n : u.intl.string(u.t.cgPbaZ), {
    hasAlreadyLinked: m,
    canStartAuthorization: h,
    startAuthorization: x,
    fetched: f
  } = (0, o.F)(c), g = (0, l.jsx)(a.xPt, {
    size: "custom",
    width: 40,
    height: 40,
    color: "currentColor"
  });
  return (0, l.jsx)(s.Z, {
    displayName: d,
    description: t.description,
    icon: g,
    isLoading: !f,
    isConnected: m,
    canConnect: h,
    onConnect: x
  })
}