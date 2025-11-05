/** Chunk was on web.js **/
/** chunk id: 388627, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E6: () => p,
  HP: () => _,
  II: () => m,
  pL: () => h
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
  return module.getWindowVisible(OVERLAY_V3_KEY)
}
require("./340101.js"), require("./757744.js"), require("./501787.js");

function _(e, t) {
  if (e === t) returntrue;
  if (e.length !== t.length) returnfalse;
  for (let n = 0; n < e.length; n++)
    if (e[n].widget !== t[n].widget) returnfalse;
  returntrue
}

function p(e, t) {
  if (e === t) returntrue;
  if (e.length !== t.length) returnfalse;
  for (let n = 0; n < e.length; n++)
    if (e[n].index !== t[n].index || e[n].notification !== t[n].notification || e[n].locked !== t[n].locked) returnfalse;
  returntrue
}

function h() {
  var e, t;
  let n = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk594190.ZP,
    r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : Chunk293273.Z,
    i = arguments.length > 2 && true !== arguments[2] ? arguments[2] : Chunk317381.ZP,
    s = arguments.length > 3 && true !== arguments[3] ? arguments[3] : Chunk812206.Z,
    f = arguments.length > 4 && true !== arguments[4] ? arguments[4] : Chunk610394.Z,
    _ = arguments.length > 5 && true !== arguments[5] ? arguments[5] : (0, Chunk850405.e)(),
    p = Chunk902704.getCurrentEmbeddedActivity(),
    h = null == p ? true : p.applicationId,
    m = null == h ? true : Chunk426419.getApplication(h);
  if (null != p && null != m && _) return {
    id: p.applicationId,
    altId: true,
    name: m.name
  };
  let g = f.getTargetPID(),
    E = require.getGameForPID(g),
    b = Chunk442837.getActivityForPID(g);
  return (null == E || null == E.id || null == E.name) && (null == b || null == b.application_id) ? true : {
    id: null != (e = null == E ? true : E.id) ? module : null == b ? true : b.application_id,
    altId: null == b ? true : b.application_id,
    name: null != (t = null == E ? true : E.name) ? exports : null == b ? true : b.name
  }
}

function m() {
  let e = (0, Chunk426419.P)();
  return (0, Chunk442837.e7)([Chunk594190.ZP, Chunk293273.Z, Chunk317381.ZP, Chunk812206.Z, Chunk610394.Z], () => h(Chunk594190.ZP, Chunk293273.Z, Chunk317381.ZP, Chunk812206.Z, Chunk610394.Z, module), [module], Chunk902704.Z)
}