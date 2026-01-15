/** Chunk was on web.js **/
/** chunk id: 739007, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk670596 = require("./670596.js"),
  Chunk561779 = require("./561779.jsx"),
  Chunk30724 = require("./30724.js");
let u = e => "".concat(e.toFixed(0), "%"),
  d = Chunk473749.forwardRef(function(e, t) {
    let {
      value: n,
      minValue: a = 0,
      maxValue: d = 100,
      onChange: f,
      onInteraction: p,
      renderValue: _ = u,
      "aria-label": h
    } = e, m = i.useRef(null), g = i.useMemo(() => o().debounce(() => null == p ? true : p(s.U.SLIDER), 100), [p]);
    i.useImperativeHandle(t, () => ({
      focus: () => {
        var e;
        return null == (e = m.current) ? true : e.focus()
      },
      blur: () => {
        var e;
        return null == (e = m.current) ? true : e.blur()
      },
      activate: () => false
    }), []);
    let E = e => {
      f(e), g()
    };
    return (0, r.jsx)("div", {
      className: c.sliderContainer,
      children: (0, r.jsx)(l.i, {
        ref: m,
        mini: true,
        handleSize: 16,
        className: c.slider,
        initialValue: n,
        minValue: a,
        maxValue: d,
        onValueChange: E,
        asValueChanges: f,
        onValueRender: _,
        orientation: "horizontal",
        "aria-label": h
      })
    })
  })