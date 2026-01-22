/** Chunk was on web.js **/
/** chunk id: 560138, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let a = {
  fetched: false,
  affinities: []
};

function s(e) {
  let {} = e;
  a.fetched = true
}

function o(e) {
  let {
    res: t
  } = e;
  a.affinities = t
}

function l() {
  a.fetched = false, a.affinities = []
}
class c extends Chunk311907.Ay.Store {
  get hasFetched() {
    return a.fetched
  }
  get affinities() {
    return a.affinities
  }
}
let u = new c(Chunk73153.h, {
  BILLING_NITRO_AFFINITY_FETCHED: s,
  BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: o,
  LOGOUT: l
})