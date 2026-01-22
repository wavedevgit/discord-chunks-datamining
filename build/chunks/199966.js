/** Chunk was on web.js **/
/** chunk id: 199966, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => a,
  x: () => i
}), require("./65821.js");
var Chunk64700 = require("./64700.js");
let i = Chunk64700.createContext(true);

function a() {
  let e = r.useContext(i);
  if (null == e) throw Error("useSettingsV2Context must be used within a SettingsV2Provider");
  return e
}