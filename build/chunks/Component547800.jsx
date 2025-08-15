/** Chunk was on web.js **/
/** chunk id: 547800, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  CalendarPicker: () => f,
  default: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk939711 = require("./939711.js"),
  l = require.n(Chunk939711),
  Chunk442837 = require("./442837.js"),
  Chunk706454 = require("./706454.js");
require("./10294.js");
var Chunk122668 = require("./122668.js");

function f(e) {
  let {
    value: t = o()().local(),
    minDate: n,
    maxDate: a,
    onSelect: s,
    calendarClassName: f,
    autoFocus: _,
    onClickOutside: p
  } = e, h = i.useCallback((e, t) => {
    null == s || s(o()(e), t)
  }, [s]), m = i.useMemo(() => t.toDate(), [t]), g = i.useMemo(() => null == a ? true : a.toDate(), [a]), E = i.useMemo(() => null == n ? true : n.toDate(), [n]), b = (0, c.e7)([u.default], () => u.default.locale), y = i.useRef(null), O = i.useCallback(e => {
    let t = e.currentTarget;
    t.classList.contains("react-datepicker__day") && setTimeout(() => {
      var e, n;
      if (null == (e = y.current) ? true : e.contains(t)) return;
      let r = null == (n = y.current) ? true : n.querySelector('.react-datepicker__day[tabindex="0"]');
      null != r && r.focus()
    }, 100)
  }, []);
  return (0, r.jsx)("div", {
    ref: y,
    className: d.calendarPicker,
    children: (0, r.jsx)(l(), {
      calendarClassName: f,
      selected: m,
      onChange: h,
      autoFocus: _,
      fixedHeight: true,
      inline: true,
      locale: b,
      maxDate: g,
      minDate: E,
      onKeyDown: O,
      onClickOutside: p
    })
  })
}
let _ = f