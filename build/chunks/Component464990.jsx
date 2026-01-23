/** Chunk was on 67096 **/
/** chunk id: 464990, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  R: () => o,
  Z: () => i
}), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158363 = require("./158363.js");
let a = Chunk64700.createContext(true);

function i() {
  let e = n.useContext(a);
  if (null == e) throw Error("No GuildProductAttachmentManagerContextProvider found");
  return e
}

function o(e) {
  let {
    children: A,
    guildId: t
  } = e, n = function(e, A) {
    if (null == e) return {};
    var t, r, n, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (n = 0, t = Reflect.ownKeys(e); n < t.length; n++) r = t[n], !(A.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }
    if (l = function(e, A) {
        if (null == e) return {};
        var t, r, n = {},
          l = Object.getOwnPropertyNames(e);
        for (r = 0; r < l.length; r++) t = l[r], !(A.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]);
        return n
      }(e, A), Object.getOwnPropertySymbols)
      for (n = 0, t = Object.getOwnPropertySymbols(e); n < t.length; n++) r = t[n], !(A.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }(e, ["children", "guildId"]), i = (0, l.A)(t, n);
  return (0, r.jsx)(a.Provider, {
    value: i,
    children: A
  })
}