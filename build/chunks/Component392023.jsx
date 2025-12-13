/** Chunk was on 60831 **/
/** chunk id: 392023, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk311308 = require("./311308.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js");

function s(e) {
  let t = (0, i.useRef)(null),
    [n, s] = (0, i.useState)(null),
    [u] = (0, i.useState)(() => new r.TimelineDataSeries),
    c = (0, o.dQu)(a.Z.colors.BACKGROUND_BASE_LOW).hsl(),
    d = (0, o.dQu)(a.Z.colors.TEXT_DEFAULT).hsl(),
    f = (0, o.dQu)(a.Z.colors.BACKGROUND_ACCENT).hsl(),
    g = (0, o.dQu)(a.Z.unsafe_rawColors.BRAND_500).hsl();
  (0, i.useEffect)(() => {
    var e;
    let n = t.current;
    if (null == n) return;
    let l = new r.TimelineGraphView(n, null != (e = window.devicePixelRatio) ? e : 1);
    l.backgroundColor = c, l.textColor = d, l.gridColor = f, l.timeOptions = {
      timeStyle: "short"
    }, l.fontFamily = "gg sans", l.fontSize = 11, u.setColor(g), l.addDataSeries(u), l.updateEndDate(), s(l)
  }, [t, c, g, f, d, u]);
  let h = e.converter,
    p = null != h ? e.dataPoints.map(e => {
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
        value: h(e.value)
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
  u.setPoints(p), null == n || n.updateEndDate();
  let E = {
    width: e.width,
    height: e.height
  };
  return (0, l.jsx)("canvas", {
    style: E,
    width: e.width,
    height: e.height,
    ref: t
  }, "canvas")
}