/** Chunk was on 73628 **/
/** chunk id: 587123, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  P: () => o,
  W: () => i
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk828762 = require("./828762.js");
let a = Chunk647438.createContext(true);

function o() {
  let e = Chunk647438.useContext(a);
  if (null == module) throw Error("No GuildProductAttachmentManagerContextProvider found");
  return module
}

function i(e) {
  var {
    children: A,
    guildId: t
  } = e, n = function(e, A) {
    if (null == e) return {};
    var t, r, n = function(e, A) {
      if (null == e) return {};
      var t, r, n = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) t = l[r], A.indexOf(t) >= 0 || (n[t] = e[t]);
      return n
    }(e, A);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) t = l[r], !(A.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t])
    }
    return n
  }(e, ["children", "guildId"]);
  let o = (0, l.Z)(t, n);
  return (0, r.jsx)(a.Provider, {
    value: o,
    children: A
  })
}