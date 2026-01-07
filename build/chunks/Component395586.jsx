/** Chunk was on 9536 **/
/** chunk id: 395586, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  AL: () => o,
  f3: () => s
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk674180 = require("./674180.js");
let a = Chunk473749.createContext(true);

function s() {
  let e = i.useContext(a);
  if (null == e) throw Error("useCreatorMonetizationSettingsDisabled must be used within a CreatorMonetizationSettingsDisabledContext");
  return e
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