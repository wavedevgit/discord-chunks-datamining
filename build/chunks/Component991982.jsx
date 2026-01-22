/** Chunk was on 94503 **/
/** chunk id: 991982, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => i,
  Y: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js");

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function i(e) {
  let {
    guildId: t,
    userId: i,
    anaylticsLocations: s,
    modReportId: o
  } = e;
  (0, r.mMO)(async () => {
    let {
      default: e
    } = await n.e("94390").then(n.bind(n, 524085));
    return n => (0, l.jsx)(e, a({
      guildId: t,
      userId: i,
      anaylticsLocations: s,
      modReportId: o
    }, n))
  })
}

function s(e) {
  let {
    guildId: t,
    userId: i,
    anaylticsLocations: s
  } = e;
  (0, r.mMO)(async () => {
    let {
      default: e
    } = await n.e("31815").then(n.bind(n, 21754));
    return n => (0, l.jsx)(e, a({
      guildId: t,
      userId: i,
      anaylticsLocations: s
    }, n))
  })
}