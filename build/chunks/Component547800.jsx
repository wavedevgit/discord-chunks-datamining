/** Chunk was on web.js **/
/** chunk id: 547800, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  CalendarPicker: () => p,
  default: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk74570 = require("./74570.js"),
  l = require.n(Chunk74570),
  Chunk442837 = require("./442837.js"),
  Chunk241601 = require("./241601.js"),
  Chunk706454 = require("./706454.js");
require("./10294.js");
var Chunk122668 = require("./122668.js");

function p(e) {
  var t, n;
  let {
    value: o = a()().local(),
    minDate: s,
    maxDate: p,
    onSelect: _,
    calendarClassName: m,
    autoFocus: h,
    onClickOutside: g
  } = e, E = i.useCallback((e, t) => {
    null == _ || _(a()(e), t)
  }, [_]), b = i.useMemo(() => o.toDate(), [o]), y = i.useMemo(() => null == p ? true : p.toDate(), [p]), O = i.useMemo(() => null == s ? true : s.toDate(), [s]), v = (0, c.e7)([d.default], () => d.default.locale), S = (0, u.jY)(), I = i.useRef(null), T = i.useCallback(e => {
    let t = e.currentTarget;
    t.classList.contains("react-datepicker__day") && setTimeout(() => {
      var e, n;
      if (null == (e = I.current) ? true : e.contains(t)) return;
      let r = null == (n = I.current) ? true : n.querySelector('.react-datepicker__day[tabindex="0"]');
      null != r && r.focus()
    }, 100)
  }, []);
  return (0, r.jsx)("div", {
    ref: I,
    className: f.calendarPicker,
    children: (0, r.jsx)(l(), {
      calendarClassName: m,
      selected: b,
      onChange: E,
      autoFocus: h,
      fixedHeight: true,
      inline: true,
      locale: v,
      calendarStartDay: null != (n = null == (t = S.options) ? true : t.weekStartsOn) ? n : 0,
      maxDate: y,
      minDate: O,
      onKeyDown: T,
      onClickOutside: g
    })
  })
}
let _ = p