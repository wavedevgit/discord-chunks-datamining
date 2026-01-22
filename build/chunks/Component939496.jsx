/** Chunk was on web.js **/
/** chunk id: 939496, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => c,
  U: () => l
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk677313 = require("./677313.js"),
  Chunk544028 = require("./544028.js");
let o = Chunk64700.createContext({
  theme: Chunk544028.A.themePreferenceForSystemTheme((0, Chunk677313.A)()),
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
    secondaryColor: s,
    userId: l,
    children: c
  } = e, u = i.useMemo(() => ({
    theme: t,
    themeType: n,
    primaryColor: a,
    secondaryColor: s,
    userId: l
  }), [t, n, a, s, l]);
  return (0, r.jsx)(o.Provider, {
    value: u,
    children: c
  })
}
let c = () => i.useContext(o)