/** Chunk was on web.js **/
/** chunk id: 243612, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  VC: () => p,
  b4: () => m,
  oQ: () => _,
  qv: () => h
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk52133 = require("./52133.js"),
  Chunk933958 = require("./933958.js"),
  Chunk415109 = require("./415109.js"),
  Chunk57220 = require("./57220.js"),
  Chunk587895 = require("./587895.js");
require("./313961.js");
var Chunk15285 = require("./15285.js");
require("./652896.js"), require("./87001.js"), require("./616356.js"), require("./961350.js"), require("./555528.js");
var Chunk375492 = require("./375492.js");
require("./309010.js"), require("./242286.js");
var Chunk395011 = require("./395011.js");

function f() {
  let [e = PopoutWindowStore] = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [PopoutWindowStore];
  return e.getWindowVisible(OVERLAY_V3_KEY)
}
require("./897720.js"), require("./644434.js"), require("./392164.js");

function p(e, t) {
  if (e === t) returntrue;
  if (e.length !== t.length) returnfalse;
  for (let n = 0; n < e.length; n++)
    if (e[n].widget !== t[n].widget) returnfalse;
  returntrue
}

function _(e, t) {
  if (e === t) returntrue;
  if (e.length !== t.length) returnfalse;
  for (let n = 0; n < e.length; n++)
    if (e[n].index !== t[n].index || e[n].notification !== t[n].notification || e[n].locked !== t[n].locked) returnfalse;
  returntrue
}

function h() {
  var e, t;
  let n = arguments.length > 0 && true !== arguments[0] ? arguments[0] : c.Ay,
    r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : u.A,
    i = arguments.length > 2 && true !== arguments[2] ? arguments[2] : a.Ay,
    o = arguments.length > 3 && true !== arguments[3] ? arguments[3] : l.A,
    f = arguments.length > 4 && true !== arguments[4] ? arguments[4] : d.A,
    p = arguments.length > 5 && true !== arguments[5] ? arguments[5] : (0, s.Y)(),
    _ = i.getCurrentEmbeddedActivity(),
    h = null == _ ? true : _.applicationId,
    m = null == h ? true : o.getApplication(h);
  if (null != _ && null != m && p) return {
    id: _.applicationId,
    altId: true,
    name: m.name
  };
  let g = f.getTargetPID(),
    E = n.getGameForPID(g),
    y = r.getActivityForPID(g);
  return (null == E || null == E.id || null == E.name) && (null == y || null == y.application_id) ? true : {
    id: null != (e = null == E ? true : E.id) ? e : null == y ? true : y.application_id,
    altId: null == y ? true : y.application_id,
    name: null != (t = null == E ? true : E.name) ? t : null == y ? true : y.name
  }
}

function m() {
  let e = (0, o.V)();
  return (0, r.bG)([c.Ay, u.A, a.Ay, l.A, d.A], () => h(c.Ay, u.A, a.Ay, l.A, d.A, e), [e], i.A)
}