/** Chunk was on 47841 **/
/** chunk id: 306444, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => a,
  O: () => s
}), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js");
let l = Chunk64700.createContext(true);

function s() {
  let e = i.useContext(l);
  if (null == e) throw Error("No edit state; are you missing an <EditStateContextProvider />?");
  return e
}

function a(e) {
  let {
    children: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, r, i, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.getOwnPropertyNames(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }(e, ["children"]);
  return (0, r.jsx)(l.Provider, {
    value: n,
    children: t
  })
}