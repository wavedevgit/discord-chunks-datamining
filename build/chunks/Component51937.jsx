/** Chunk was on 41917 **/
/** chunk id: 51937, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk55187 = require("./55187.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk698395 = require("./698395.js"),
  Chunk169764 = require("./169764.js");

function l(e) {
  let {
    isWaitingForConnection: t,
    onWaitingForConnection: n,
    expectedCallbackState: l,
    onAuthToken: d,
    onError: f,
    onClose: b
  } = e, u = t ? (0, r.jsx)("img", {
    src: c.A,
    width: "231",
    height: "172",
    alt: ""
  }) : (0, r.jsx)("img", {
    src: a.A,
    width: "231",
    height: "160",
    alt: ""
  }), p = t ? o.intl.string(o.t.EuwcxO) : o.intl.string(o.t["e/z3na"]), g = t ? o.intl.string(o.t["1GjS/W"]) : o.intl.string(o.t["7tXu0i"]);
  return (0, r.jsx)(s.b, {
    platformType: i.fg2.XBOX,
    isWaitingForConnection: t,
    onWaitingForConnection: n,
    expectedCallbackState: l,
    onAuthToken: d,
    onError: f,
    onClose: b,
    img: u,
    title: p,
    body: g
  })
}