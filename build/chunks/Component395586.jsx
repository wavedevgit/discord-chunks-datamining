/** Chunk was on 384 **/
/** chunk id: 395586, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AL: () => o,
  f3: () => s
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk674180 = require("./674180.js");
let a = Chunk473749.createContext(true);

function s() {
  let e = Chunk473749.useContext(a);
  if (null == module) throw Error("useCreatorMonetizationSettingsDisabled must be used within a CreatorMonetizationSettingsDisabledContext");
  return module
}

function o(e) {
  let {
    guildId: t,
    children: n
  } = e, {
    shouldRestrictUpdatingCreatorMonetizationSettings: i
  } = (0, l.gX)(t);
  return (0, r.jsx)(a.Provider, {
    value: i,
    children: n
  })
}