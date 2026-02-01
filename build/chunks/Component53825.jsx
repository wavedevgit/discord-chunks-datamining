/** Chunk was on 30485 **/
/** chunk id: 53825, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  N: () => I
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  r = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk97260 = require("./97260.js"),
  Chunk117178 = require("./117178.jsx"),
  Chunk734066 = require("./734066.js"),
  Chunk419954 = require("./419954.js"),
  Chunk532624 = require("./532624.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk280973 = require("./280973.js");
let I = (0, Chunk419954.E2)(Chunk780964.X.CLIPS_SCREENSHOT_KEYBIND, {
  useSearchTerms: () => [g.intl.string(g.t["0U/hj7"]), g.intl.string(g.t["5zxkdo"])],
  usePredicate: Chunk734066.BW,
  Component: () => {
    let t = (0, u.bG)([S.Ay], () => S.Ay.getKeybindForAction(E.hCu.SAVE_CLIP, true)),
      e = (0, u.bG)([S.Ay], () => S.Ay.getKeybindForAction(E.hCu.SAVE_SCREENSHOT, true));
    r()(null != t, "Save clip keybind unset"), r()(null != e, "Save screenshot keybind unset");
    let i = l.useCallback(t => {
      var i, n;
      o.A.setKeybind((i = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(i);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
            return Object.getOwnPropertyDescriptor(i, t).enumerable
          }))), n.forEach(function(e) {
            var n;
            n = i[e], e in t ? Object.defineProperty(t, e, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = n
          })
        }
        return t
      }({}, e), n = n = {
        shortcut: t
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(n)) : (function(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          i.push.apply(i, n)
        }
        return i
      })(Object(n)).forEach(function(t) {
        Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(n, t))
      }), i))
    }, [e]);
    return (0, n.jsx)(a.D0$, {
      label: g.intl.string(g.t["0U/hj7"]),
      description: g.intl.string(g.t["5zxkdo"]),
      layout: "horizontal",
      children: (0, n.jsx)("div", {
        className: _.g,
        children: (0, n.jsx)(d.A, {
          defaultValue: e.shortcut,
          onChange: i
        })
      })
    })
  }
})