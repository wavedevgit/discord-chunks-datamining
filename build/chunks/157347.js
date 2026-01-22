/** Chunk was on web.js **/
/** chunk id: 157347, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  OA: () => a,
  hL: () => d,
  vn: () => f,
  wN: () => o,
  wp: () => s
});
var Chunk469881 = require("./469881.js"),
  Chunk985018 = require("./985018.jsx");
let a = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  },
  s = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  };
var o = function(e) {
  return e[e.JOINED_AT = 0] = "JOINED_AT", e[e.ACCOUNT_AGE = 1] = "ACCOUNT_AGE", e
}({});
let l = () => ({
    seconds: i.t["FsBhl/"],
    minutes: i.t["4d1mgT"],
    hours: i.t["2wkczD"],
    days: i.t["ocdS+f"],
    months: i.t["az14+h"],
    years: i.t["5Gk1ns"]
  }),
  c = () => ({
    hours: i.t.JZP2Rs,
    days: i.t["3moSHc"],
    months: i.t["0Ddwr1"],
    years: i.t.cR7lcs
  });

function u(e) {
  return 0 === e ? l : 1 === e ? c : true
}
let d = (e, t) => {
    let n = u(t);
    return (0, r.A)(e, n, false)
  },
  f = e => (null != e ? new Date(e) : new Date).getTime()