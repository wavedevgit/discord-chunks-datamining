/** Chunk was on 384 **/
/** chunk id: 727843, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  I: () => a,
  N: () => s
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");
let l = Chunk473749.createContext(true);

function s() {
  let e = Chunk473749.useContext(l);
  if (null == module) throw Error("No edit state; are you missing an <EditStateContextProvider />?");
  return module
}

function a(e) {
  var {
    children: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["children"]);
  return (0, r.jsx)(l.Provider, {
    value: n,
    children: t
  })
}