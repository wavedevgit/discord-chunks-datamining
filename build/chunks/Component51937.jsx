/** Chunk was on 41917 **/
/** chunk id: 51937, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk55187 = require("./55187.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk698395 = require("./698395.js"),
  Chunk169764 = require("./169764.js");

function c(e) {
  let {
    isWaitingForConnection: t,
    onWaitingForConnection: n,
    expectedCallbackState: c,
    onAuthToken: d,
    onError: p,
    onClose: u
  } = e, f = t ? (0, r.jsx)("img", {
    src: l.A,
    width: "231",
    height: "172",
    alt: ""
  }) : (0, r.jsx)("img", {
    src: a.A,
    width: "231",
    height: "160",
    alt: ""
  }), b = t ? i.intl.string(i.t.EuwcxO) : i.intl.string(i.t["e/z3na"]), g = t ? i.intl.string(i.t["1GjS/W"]) : i.intl.string(i.t["7tXu0i"]);
  return (0, r.jsx)(o.b, {
    platformType: s.fg2.XBOX,
    isWaitingForConnection: t,
    onWaitingForConnection: n,
    expectedCallbackState: c,
    onAuthToken: d,
    onError: p,
    onClose: u,
    img: f,
    title: b,
    body: g
  })
}