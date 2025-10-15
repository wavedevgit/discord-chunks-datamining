/** Chunk was on 1272 **/
/** chunk id: 362870, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk515753 = require("./515753.jsx"),
  Chunk150560 = require("./150560.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let d = function(e) {
  let {
    selected: t
  } = e, n = (0, l.JA)("quests"), d = i.useCallback(() => {
    s.Z.getState().setUtmCurrentContext({
      utmContentCurrent: "PRIMARY_QUEST_HOME"
    })
  }, []);
  return (0, r.jsx)(o.Qj, function(e) {
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
  }({
    onClick: d,
    route: c.Z5c.QUEST_HOME_V2,
    selected: t,
    icon: a.qDn,
    text: u.intl.string(u.t.JALI2N)
  }, n))
}