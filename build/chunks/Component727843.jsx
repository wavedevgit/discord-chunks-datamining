/** Chunk was on 5533 **/
/** chunk id: 727843, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => s,
  N: () => a
}), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js");
let l = Chunk73800.createContext(true);

function a() {
  let e = Chunk73800.useContext(l);
  if (null == module) throw Error("No edit state; are you missing an <EditStateContextProvider />?");
  return module
}

function s(e) {
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