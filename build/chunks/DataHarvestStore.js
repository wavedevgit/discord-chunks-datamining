/** Chunk was on web.js **/
/** chunk id: 575356, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => m
});
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = false;

function c() {
  r = true
}

function u(e) {
  let {
    harvestType: t
  } = e;
  l = false, r = t
}

function d() {
  l = true
}

function f() {
  l = false
}

function p() {
  l = false, r = null
}
class _ extends(i = Chunk442837.ZP.Store) {
  get harvestType() {
    return r
  }
  get requestingHarvest() {
    return l
  }
}
s(_, "displayName", "DataHarvestStore");
let m = new _(Chunk570140.Z, {
  CONNECTION_OPEN: c,
  UPDATE_DATA_HARVEST_TYPE: u,
  LOAD_DATA_HARVEST_TYPE_START: d,
  LOAD_DATA_HARVEST_TYPE_FAILURE: f,
  LOGOUT: p
})