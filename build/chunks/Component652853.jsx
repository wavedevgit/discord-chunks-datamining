/** Chunk was on web.js **/
/** chunk id: 652853, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => l,
  z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk541049 = require("./541049.js"),
  Chunk210887 = require("./210887.js");
let s = Chunk473749.createContext({
  theme: Chunk210887.Z.themePreferenceForSystemTheme((0, Chunk541049.Z)()),
  themeType: null,
  primaryColor: null,
  secondaryColor: null,
  userId: null
});

function l(e) {
  let {
    theme: t,
    themeType: n,
    primaryColor: a,
    secondaryColor: o,
    userId: l,
    children: c
  } = e, u = i.useMemo(() => ({
    theme: t,
    themeType: n,
    primaryColor: a,
    secondaryColor: o,
    userId: l
  }), [t, n, a, o, l]);
  return (0, r.jsx)(s.Provider, {
    value: u,
    children: c
  })
}
let c = () => Chunk473749.useContext(s)