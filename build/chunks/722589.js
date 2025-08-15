/** Chunk was on web.js **/
/** chunk id: 722589, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => d
}), require("./704826.js"), require("./35282.js"), require("./388685.js");
var Chunk593473 = require("./593473.js"),
  Chunk981631 = require("./981631.js");
let a = "_",
  o = /(-|%20)/g,
  s = "AND",
  l = /%26/g,
  c = {
    THE_LAST_MEADOW: "CLICKER_GAME"
  };

function u(e) {
  return null == e ? "" : e.toUpperCase().replace(o, a).replace(l, s)
}

function d(e) {
  var t;
  let [, , n, a] = e.split("/"), o = u(n), s = null != (t = c[o]) ? t : o, l = u(a);
  if (i.oAB.hasOwnProperty(s) && (null == l || "" === l || i.oAB.hasOwnProperty(l))) {
    let {
      source: e
    } = (0, r.parse)(location.search);
    return {
      source: e,
      section: i.oAB[s],
      subsection: l
    }
  }
  return null
}