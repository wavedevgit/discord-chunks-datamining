/** Chunk was on 22988 **/
/** chunk id: 395586, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AL: () => o,
  f3: () => s
}), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk674180 = require("./674180.js");
let a = Chunk73800.createContext(true);

function s() {
  let e = Chunk73800.useContext(a);
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
  return <a.Provider value={i}>{n}</a.Provider>
}