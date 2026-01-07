/** Chunk was on web.js **/
/** chunk id: 388627, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E6: () => _,
  HP: () => p,
  II: () => h,
  pL: () => m
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk902704 = require("./902704.js"),
  Chunk317381 = require("./317381.js"),
  Chunk850405 = require("./850405.js"),
  Chunk426419 = require("./426419.js"),
  Chunk812206 = require("./812206.js");
require("./358221.js");
var Chunk594190 = require("./594190.js");
require("./569545.js"), require("./522474.js"), require("./199902.js"), require("./314897.js"), require("./355863.js");
var Chunk293273 = require("./293273.js");
require("./944486.js"), require("./808506.js");
var Chunk610394 = require("./610394.js");

function f() {
  let [e = PopoutWindowStore] = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [PopoutWindowStore];
  return e.getWindowVisible(OVERLAY_V3_KEY)
}
require("./340101.js"), require("./757744.js"), require("./501787.js");

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

function m() {
  var e, t;
  let n = arguments.length > 0 && true !== arguments[0] ? arguments[0] : c.ZP,
    r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : u.Z,
    i = arguments.length > 2 && true !== arguments[2] ? arguments[2] : a.ZP,
    s = arguments.length > 3 && true !== arguments[3] ? arguments[3] : l.Z,
    f = arguments.length > 4 && true !== arguments[4] ? arguments[4] : d.Z,
    p = arguments.length > 5 && true !== arguments[5] ? arguments[5] : (0, o.e)(),
    _ = i.getCurrentEmbeddedActivity(),
    m = null == _ ? true : _.applicationId,
    h = null == m ? true : s.getApplication(m);
  if (null != _ && null != h && p) return {
    id: _.applicationId,
    altId: true,
    name: h.name
  };
  let g = f.getTargetPID(),
    E = n.getGameForPID(g),
    b = r.getActivityForPID(g);
  return (null == E || null == E.id || null == E.name) && (null == b || null == b.application_id) ? true : {
    id: null != (e = null == E ? true : E.id) ? e : null == b ? true : b.application_id,
    altId: null == b ? true : b.application_id,
    name: null != (t = null == E ? true : E.name) ? t : null == b ? true : b.name
  }
}

function h() {
  let e = (0, s.P)();
  return (0, r.e7)([c.ZP, u.Z, a.ZP, l.Z, d.Z], () => m(c.ZP, u.Z, a.ZP, l.Z, d.Z, e), [e], i.Z)
}