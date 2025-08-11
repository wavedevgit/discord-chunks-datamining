/** Chunk was on web.js **/
/** chunk id: 739007, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk670596 = require("./670596.js"),
  Chunk561779 = require("./561779.jsx"),
  Chunk993817 = require("./993817.js");
let u = e => "".concat(e.toFixed(0), "%"),
  d = Chunk73800.forwardRef(function(e, t) {
    let {
      value: n,
      minValue: o = 0,
      maxValue: d = 100,
      onChange: f,
      onInteraction: _,
      renderValue: p = u,
      "aria-label": h
    } = e, m = i.useRef(null), g = i.useRef(a().debounce(() => null == _ ? true : _(s.U.SLIDER), 100));
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
      f(e), g.current()
    };
    return (0, r.jsx)("div", {
      className: c.sliderContainer,
      children: (0, r.jsx)(l.i, {
        ref: m,
        mini: true,
        handleSize: 16,
        className: c.slider,
        initialValue: n,
        minValue: o,
        maxValue: d,
        onValueChange: E,
        asValueChanges: f,
        onValueRender: p,
        orientation: "horizontal",
        "aria-label": h
      })
    })
  })