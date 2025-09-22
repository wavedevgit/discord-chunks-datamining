/** Chunk was on 73628 **/
/** chunk id: 587123, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  P: () => i,
  W: () => o
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk828762 = require("./828762.js");
let a = Chunk647438.createContext(true);

function i() {
  let e = Chunk647438.useContext(a);
  if (null == module) throw Error("No GuildProductAttachmentManagerContextProvider found");
  return module
}

function o(e) {
  var {
    children: A,
    guildId: t
  } = e, r = function(e, A) {
    if (null == e) return {};
    var t, n, r = function(e, A) {
      if (null == e) return {};
      var t, n, r = {},
        l = Object.keys(e);
      for (n = 0; n < l.length; n++) t = l[n], A.indexOf(t) >= 0 || (r[t] = e[t]);
      return r
    }(e, A);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (n = 0; n < l.length; n++) t = l[n], !(A.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
  }(e, ["children", "guildId"]);
  let i = (0, l.Z)(t, r);
  return (0, n.jsx)(a.Provider, {
    value: i,
    children: A
  })
}