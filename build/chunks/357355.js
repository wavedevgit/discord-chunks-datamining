/** Chunk was on web.js **/
/** chunk id: 357355, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let a = {
  fetched: false,
  affinities: []
};

function o(e) {
  let {} = e;
  a.fetched = true
}

function s(e) {
  let {
    res: t
  } = e;
  a.affinities = t
}

function l() {
  a.fetched = false, a.affinities = []
}
class c extends Chunk442837.ZP.Store {
  get hasFetched() {
    return a.fetched
  }
  get affinities() {
    return a.affinities
  }
}
let u = new c(Chunk570140.Z, {
  BILLING_NITRO_AFFINITY_FETCHED: o,
  BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: s,
  LOGOUT: l
})