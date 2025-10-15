/** Chunk was on 18290 **/
/** chunk id: 494801, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk212598 = require("./212598.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk250331 = require("./250331.js"),
  Chunk300778 = require("./300778.js");

function l(e) {
  let {
    isWaitingForConnection: t,
    onWaitingForConnection: n,
    expectedCallbackState: l,
    onAuthToken: d,
    onError: u,
    onClose: p
  } = e, f = t ? (0, o.jsx)("img", {
    src: c.Z,
    width: "231",
    height: "172",
    alt: ""
  }) : (0, o.jsx)("img", {
    src: a.Z,
    width: "231",
    height: "160",
    alt: ""
  }), b = t ? s.intl.string(s.t.EuwcxM) : s.intl.string(s.t["e/z3nZ"]), g = t ? s.intl.string(s.t["1GjS/f"]) : s.intl.string(s.t["7tXu0t"]);
  return (0, o.jsx)(r.t, {
    platformType: i.ABu.XBOX,
    isWaitingForConnection: t,
    onWaitingForConnection: n,
    expectedCallbackState: l,
    onAuthToken: d,
    onError: u,
    onClose: p,
    img: f,
    title: b,
    body: g
  })
}