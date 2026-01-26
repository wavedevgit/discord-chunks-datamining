/** Chunk was on 39048 **/
/** chunk id: 209812, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  GK: () => a,
  ZV: () => o
}), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk465932 = require("./465932.js");
let s = Chunk64700.createContext(true);

function a() {
  let e = i.useContext(s);
  if (null == e) throw Error("useCreatorMonetizationSettingsDisabled must be used within a CreatorMonetizationSettingsDisabledContext");
  return e
}

function o(e) {
  let {
    guildId: t,
    children: n
  } = e, {
    shouldRestrictUpdatingCreatorMonetizationSettings: i
  } = (0, l.nq)(t);
  return (0, r.jsx)(s.Provider, {
    value: i,
    children: n
  })
}