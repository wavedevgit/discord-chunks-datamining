/** Chunk was on 77069 **/
/** chunk id: 154869, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  $: () => N
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk216476 = require("./216476.js");
let N = (0, Chunk509613.ON)(Chunk313789.n.CLIPS_SCREENSHOT_KEYBIND, {
  useSearchTerms: () => [g.intl.string(g.t["0U/hj7"]), g.intl.string(g.t["5zxkdo"])],
  usePredicate: Chunk924557.PP,
  Component: () => {
    let t = (0, r.e7)([E.ZP], () => E.ZP.getKeybindForAction(_.kg4.SAVE_CLIP, true)),
      e = (0, r.e7)([E.ZP], () => E.ZP.getKeybindForAction(_.kg4.SAVE_SCREENSHOT, true));
    u()(null != t, "Save clip keybind unset"), u()(null != e, "Save screenshot keybind unset");
    let n = l.useCallback(t => {
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
      }({}, e), i = i = {
        shortcut: t
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
    }, [e]);
    return (0, i.jsx)(a.gNt, {
      label: g.intl.string(g.t["0U/hj7"]),
      description: g.intl.string(g.t["5zxkdo"]),
      layout: "horizontal",
      children: (0, i.jsx)("div", {
        className: I.keyRecorder,
        children: (0, i.jsx)(T.Z, {
          defaultValue: e.shortcut,
          onChange: n
        })
      })
    })
  }
})