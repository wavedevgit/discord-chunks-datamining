/** Chunk was on web.js **/
/** chunk id: 815790, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dw: () => f,
  I: () => o,
  UG: () => a,
  fv: () => d,
  jq: () => s
});
var Chunk814391 = require("./814391.js"),
  Chunk388032 = require("./388032.jsx");
let o = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  },
  a = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  };
var s = function(e) {
  return e[e.JOINED_AT = 0] = "JOINED_AT", e[e.ACCOUNT_AGE = 1] = "ACCOUNT_AGE", e
}({});
let l = () => ({
    seconds: Chunk388032.t["FsBhl/"],
    minutes: Chunk388032.t["4d1mgT"],
    hours: Chunk388032.t["2wkczD"],
    days: Chunk388032.t["ocdS+f"],
    months: Chunk388032.t["az14+h"],
    years: Chunk388032.t["5Gk1ns"]
  }),
  c = () => ({
    hours: Chunk388032.t.JZP2Rs,
    days: Chunk388032.t["3moSHc"],
    months: Chunk388032.t["0Ddwr1"],
    years: Chunk388032.t.cR7lcs
  });

function u(e) {
  return 0 === e ? l : 1 === e ? c : true
}
let d = (e, t) => {
    let n = u(t);
    return (0, r.Z)(e, n, false)
  },
  f = e => (null != e ? new Date(e) : new Date).getTime()