/** Chunk was on 9452 **/
/** chunk id: 139342, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  u = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk660216 = require("./660216.js"),
  Chunk825209 = require("./825209.jsx"),
  Chunk924557 = require("./924557.js"),
  Chunk509613 = require("./509613.js"),
  Chunk556296 = require("./556296.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk431220 = require("./431220.js");
let A = (0, Chunk509613.ON)(Chunk313789.n.CLIPS_KEYBIND, {
  useSearchTerms: () => [Chunk388032.intl.string(Chunk388032.t.pf54EU), Chunk388032.intl.string(Chunk388032.t["QyB/jK"])],
  usePredicate: Chunk924557.Go,
  render: () => {
    let t = (0, Chunk442837.e7)([Chunk556296.ZP], () => Chunk556296.ZP.getKeybindForAction(Chunk981631.kg4.SAVE_CLIP, true));
    u()(null != module, "Save clip keybind unset");
    let e = Chunk647438.useCallback(e => {
      var n, i;
      o.Z.setKeybind((n = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))), i.forEach(function(e) {
            var i;
            i = n[e], e in t ? Object.defineProperty(t, e, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = i
          })
        }
        return t
      }({}, t), i = i = {
        shortcut: e
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          n.push.apply(n, i)
        }
        return n
      })(Object(i)).forEach(function(t) {
        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(i, t))
      }), n))
    }, [module]);
    return (0, Chunk951288.jsx)(Chunk481060.gNt, {
      label: Chunk388032.intl.string(Chunk388032.t.pf54EU),
      description: Chunk388032.intl.string(Chunk388032.t["QyB/jK"]),
      layout: "horizontal",
      children: (0, Chunk951288.jsx)("div", {
        className: Chunk431220.keyRecorder,
        children: (0, Chunk951288.jsx)(Chunk825209.Z, {
          defaultValue: module.shortcut,
          onChange: exports
        })
      })
    })
  }
})