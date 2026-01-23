/** Chunk was on 31748 **/
/** chunk id: 229659, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk502671 = require("./502671.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js");

function s(e) {
  let t = (0, l.useRef)(null),
    [n, s] = (0, l.useState)(null),
    [c] = (0, l.useState)(() => new i.TimelineDataSeries),
    u = (0, o.rdh)(a.A.colors.BACKGROUND_BASE_LOW).hsl(),
    d = (0, o.rdh)(a.A.colors.TEXT_DEFAULT).hsl(),
    f = (0, o.rdh)(a.A.colors.BACKGROUND_MOD_MUTED).hsl(),
    p = (0, o.rdh)(a.A.unsafe_rawColors.BRAND_500).hsl();
  (0, l.useEffect)(() => {
    var e;
    let n = t.current;
    if (null == n) return;
    let r = new i.TimelineGraphView(n, null != (e = window.devicePixelRatio) ? e : 1);
    r.backgroundColor = u, r.textColor = d, r.gridColor = f, r.timeOptions = {
      timeStyle: "short"
    }, r.fontFamily = "gg sans", r.fontSize = 11, c.setColor(p), r.addDataSeries(c), r.updateEndDate(), s(r)
  }, [t, u, p, f, d, c]);
  let g = e.converter,
    m = null != g ? e.dataPoints.map(e => {
      var t, n;
      return t = function(e) {
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
      }({}, e), n = n = {
        value: g(e.value)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t
    }) : e.dataPoints;
  c.setPoints(m), null == n || n.updateEndDate();
  let _ = {
    width: e.width,
    height: e.height
  };
  return (0, r.jsx)("canvas", {
    style: _,
    width: e.width,
    height: e.height,
    ref: t
  }, "canvas")
}