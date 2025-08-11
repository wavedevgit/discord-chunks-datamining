/** Chunk was on web.js **/
/** chunk id: 652853, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => l,
  z: () => c
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk541049 = require("./541049.js"),
  Chunk210887 = require("./210887.js");
let s = Chunk73800.createContext({
  theme: Chunk210887.Z.themePreferenceForSystemTheme((0, Chunk541049.Z)()),
  themeType: null,
  primaryColor: null,
  secondaryColor: null
});

function l(e) {
  let {
    theme: t,
    themeType: n,
    primaryColor: o,
    secondaryColor: a,
    children: l
  } = e, c = i.useMemo(() => ({
    theme: t,
    themeType: n,
    primaryColor: o,
    secondaryColor: a
  }), [t, n, o, a]);
  return <s.Provider value={c}>{l}</s.Provider>
}
let c = () => Chunk73800.useContext(s)