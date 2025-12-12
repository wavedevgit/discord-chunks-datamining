/** Chunk was on web.js **/
/** chunk id: 739007, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk670596 = require("./670596.js"),
  Chunk561779 = require("./561779.jsx"),
  Chunk224757 = require("./224757.js");
let u = e => "".concat(e.toFixed(0), "%"),
  d = Chunk473749.forwardRef(function(e, t) {
    let {
      value: n,
      minValue: o = 0,
      maxValue: d = 100,
      onChange: f,
      onInteraction: p,
      renderValue: _ = u,
      "aria-label": m
    } = e, h = i.useRef(null), g = i.useMemo(() => a().debounce(() => null == p ? true : p(s.U.SLIDER), 100), [p]);
    i.useImperativeHandle(t, () => ({
      focus: () => {
        var e;
        return null == (e = h.current) ? true : e.focus()
      },
      blur: () => {
        var e;
        return null == (e = h.current) ? true : e.blur()
      },
      activate: () => false
    }), []);
    let E = e => {
      f(e), g()
    };
    return (0, r.jsx)("div", {
      className: c.sliderContainer,
      children: (0, r.jsx)(l.i, {
        ref: h,
        mini: true,
        handleSize: 16,
        className: c.slider,
        initialValue: n,
        minValue: o,
        maxValue: d,
        onValueChange: E,
        asValueChanges: f,
        onValueRender: _,
        orientation: "horizontal",
        "aria-label": m
      })
    })
  })