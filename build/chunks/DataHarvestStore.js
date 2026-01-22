/** Chunk was on web.js **/
/** chunk id: 975648, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => h
});
var i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function o(e, t, n) {
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
class _ extends(i = Chunk311907.Ay.Store) {
  get harvestType() {
    return r
  }
  get requestingHarvest() {
    return l
  }
}
o(_, "displayName", "DataHarvestStore");
let h = new _(Chunk73153.h, {
  CONNECTION_OPEN: c,
  UPDATE_DATA_HARVEST_TYPE: u,
  LOAD_DATA_HARVEST_TYPE_START: d,
  LOAD_DATA_HARVEST_TYPE_FAILURE: f,
  LOGOUT: p
})