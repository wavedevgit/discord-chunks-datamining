/** Chunk was on 4670 **/
/** chunk id: 812757, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  t: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  r = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk97260 = require("./97260.js"),
  Chunk117178 = require("./117178.jsx"),
  Chunk419954 = require("./419954.js"),
  Chunk532624 = require("./532624.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk280973 = require("./280973.js");
let g = (0, Chunk419954.E2)(Chunk780964.X.CLIPS_KEYBIND, {
  useSearchTerms: () => [_.intl.string(_.t.pf54EU), _.intl.string(_.t["QyB/jK"])],
  Component: () => {
    let e = (0, a.bG)([c.Ay], () => c.Ay.getKeybindForAction(S.hCu.SAVE_CLIP, true));
    r()(null != e, "Save clip keybind unset");
    let t = l.useCallback(t => {
      var i, n;
      o.A.setKeybind((i = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(i);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
            return Object.getOwnPropertyDescriptor(i, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = i[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({}, e), n = n = {
        shortcut: t
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          i.push.apply(i, n)
        }
        return i
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(n, e))
      }), i))
    }, [e]);
    return (0, n.jsx)(u.D0$, {
      label: _.intl.string(_.t.pf54EU),
      description: _.intl.string(_.t["QyB/jK"]),
      layout: "horizontal",
      children: (0, n.jsx)("div", {
        className: E.g,
        children: (0, n.jsx)(d.A, {
          defaultValue: e.shortcut,
          onChange: t
        })
      })
    })
  }
})