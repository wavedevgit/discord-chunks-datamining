/** Chunk was on web.js **/
/** chunk id: 815790, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dw: () => f,
  I: () => a,
  UG: () => o,
  fv: () => d,
  jq: () => s
});
var Chunk814391 = require("./814391.js"),
  Chunk388032 = require("./388032.jsx");
let a = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  },
  o = {
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
    seconds: Chunk388032.t.FsBhl5,
    minutes: Chunk388032.t["4d1mgY"],
    hours: Chunk388032.t["2wkczM"],
    days: Chunk388032.t["ocdS+f"],
    months: Chunk388032.t["az14+v"],
    years: Chunk388032.t["5Gk1np"]
  }),
  c = () => ({
    hours: Chunk388032.t.JZP2Rk,
    days: Chunk388032.t["3moSHR"],
    months: Chunk388032.t["0Ddwr6"],
    years: Chunk388032.t.cR7lcn
  });

function u(e) {
  return 0 === e ? l : 1 === e ? c : true
}
let d = (e, t) => {
    let n = u(t);
    return (0, r.Z)(e, n, false)
  },
  f = e => (null != e ? new Date(e) : new Date).getTime()