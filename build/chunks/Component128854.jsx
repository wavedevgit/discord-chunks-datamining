/** Chunk was on 30243 **/
/** chunk id: 128854, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  F: () => a,
  c: () => o
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js");
let i = Chunk647438.createContext(null);

function o() {
  let e = Chunk647438.useContext(i);
  if (null == module) throw Error("Could not find context for useMessageAccessoriesComponentContext.");
  return module
}

function a(e) {
  var {
    children: t
  } = e, r = function(e, t) {
    if (null == e) return {};
    var r, n, l = function(e, t) {
      if (null == e) return {};
      var r, n, l = {},
        i = Object.keys(e);
      for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
    }
    return l
  }(e, ["children"]);
  return (0, n.jsx)(i.Provider, {
    value: r,
    children: t
  })
}