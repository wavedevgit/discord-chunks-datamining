/** Chunk was on web.js **/
/** chunk id: 357355, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let o = {
  fetched: false,
  affinities: []
};

function a(e) {
  let {} = e;
  o.fetched = true
}

function s(e) {
  let {
    res: t
  } = e;
  o.affinities = t
}

function l() {
  o.fetched = false, o.affinities = []
}
class c extends Chunk442837.ZP.Store {
  get hasFetched() {
    return o.fetched
  }
  get affinities() {
    return o.affinities
  }
}
let u = new c(Chunk570140.Z, {
  BILLING_NITRO_AFFINITY_FETCHED: a,
  BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: s,
  LOGOUT: l
})