/** Chunk was on 1272 **/
/** chunk id: 362870, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk843611 = require("./843611.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk515753 = require("./515753.jsx"),
  Chunk150560 = require("./150560.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let p = function() {
  var e;
  let t = (0, Chunk91192.JA)("quests"),
    n = (0, Chunk843611.TH)(),
    p = Chunk647438.useCallback(() => {
      Chunk150560.Z.getState().setUtmCurrentContext({
        utmContentCurrent: "PRIMARY_QUEST_HOME"
      })
    }, []);
  return (0, Chunk951288.jsx)(Chunk515753.Qj, function(e) {
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
    onClick: p,
    route: Chunk981631.Z5c.QUEST_HOME_V2,
    selected: (null == (e = (0, Chunk843611.LX)(require.pathname, Chunk981631.Z5c.QUEST_HOME_V2)) ? true : module.isExact) === true,
    icon: Chunk481060.qDn,
    text: Chunk388032.intl.string(Chunk388032.t.JALI2N)
  }, exports))
}