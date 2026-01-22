/** Chunk was on web.js **/
/** chunk id: 964355, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk900283 = require("./900283.js"),
  Chunk106236 = require("./106236.jsx"),
  Chunk134971 = require("./134971.js");
let u = e => "".concat(e.toFixed(0), "%"),
  d = Chunk64700.forwardRef(function(e, t) {
    let {
      value: n,
      minValue: a = 0,
      maxValue: d = 100,
      onChange: f,
      onInteraction: p,
      renderValue: _ = u,
      "aria-label": h
    } = e, m = i.useRef(null), g = i.useMemo(() => s().debounce(() => null == p ? true : p(o.Q.SLIDER), 100), [p]);
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
      className: c.x,
      children: (0, r.jsx)(l.A, {
        ref: m,
        mini: true,
        handleSize: 16,
        className: c.a,
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