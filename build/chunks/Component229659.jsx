/** Chunk was on 31748 **/
/** chunk id: 229659, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk502671 = require("./502671.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js");

function o(e) {
  let t = (0, r.useRef)(null),
    [n, o] = (0, r.useState)(null),
    [c] = (0, r.useState)(() => new i.TimelineDataSeries),
    u = (0, s.rdh)(a.A.colors.BACKGROUND_BASE_LOW).hsl(),
    d = (0, s.rdh)(a.A.colors.TEXT_DEFAULT).hsl(),
    f = (0, s.rdh)(a.A.colors.BACKGROUND_MOD_MUTED).hsl(),
    p = (0, s.rdh)(a.A.unsafe_rawColors.BRAND_500).hsl();
  (0, r.useEffect)(() => {
    var e;
    let n = t.current;
    if (null == n) return;
    let l = new i.TimelineGraphView(n, null != (e = window.devicePixelRatio) ? e : 1);
    l.backgroundColor = u, l.textColor = d, l.gridColor = f, l.timeOptions = {
      timeStyle: "short"
    }, l.fontFamily = "gg sans", l.fontSize = 11, c.setColor(p), l.addDataSeries(c), l.updateEndDate(), o(l)
  }, [t, u, p, f, d, c]);
  let b = e.converter,
    g = null != b ? e.dataPoints.map(e => {
      var t, n;
      return t = function(e) {
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
      }({}, e), n = n = {
        value: b(e.value)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t
    }) : e.dataPoints;
  c.setPoints(g), null == n || n.updateEndDate();
  let m = {
    width: e.width,
    height: e.height
  };
  return (0, l.jsx)("canvas", {
    style: m,
    width: e.width,
    height: e.height,
    ref: t
  }, "canvas")
}