/** Chunk was on 87997 **/
/** chunk id: 991982, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => a,
  Y: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js");

function i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function a(e) {
  let {
    guildId: t,
    userId: a,
    anaylticsLocations: o,
    modReportId: u
  } = e;
  (0, l.mMO)(async () => {
    let {
      default: e
    } = await n.e("94390").then(n.bind(n, 524085));
    return n => (0, r.jsx)(e, i({
      guildId: t,
      userId: a,
      anaylticsLocations: o,
      modReportId: u
    }, n))
  })
}

function o(e) {
  let {
    guildId: t,
    userId: a,
    anaylticsLocations: o
  } = e;
  (0, l.mMO)(async () => {
    let {
      default: e
    } = await n.e("31815").then(n.bind(n, 21754));
    return n => (0, r.jsx)(e, i({
      guildId: t,
      userId: a,
      anaylticsLocations: o
    }, n))
  })
}