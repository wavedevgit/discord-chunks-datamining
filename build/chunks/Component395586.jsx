/** Chunk was on 64982 **/
/** chunk id: 395586, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AL: () => o,
  f3: () => s
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk674180 = require("./674180.js");
let a = Chunk647438.createContext(true);

function s() {
  let e = Chunk647438.useContext(a);
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