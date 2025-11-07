/** Chunk was on web.js **/
/** chunk id: 547800, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  CalendarPicker: () => _,
  default: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk939711 = require("./939711.js"),
  l = require.n(Chunk939711),
  Chunk442837 = require("./442837.js"),
  Chunk241601 = require("./241601.js"),
  Chunk706454 = require("./706454.js");
require("./10294.js");
var Chunk122668 = require("./122668.js");

function _(e) {
  var t, n;
  let {
    value: a = o()().local(),
    minDate: s,
    maxDate: _,
    onSelect: p,
    calendarClassName: h,
    autoFocus: m,
    onClickOutside: g
  } = e, E = i.useCallback((e, t) => {
    null == p || p(o()(e), t)
  }, [p]), b = i.useMemo(() => a.toDate(), [a]), y = i.useMemo(() => null == _ ? true : _.toDate(), [_]), O = i.useMemo(() => null == s ? true : s.toDate(), [s]), v = (0, c.e7)([d.default], () => d.default.locale), I = (0, u.jY)(), S = i.useRef(null), T = i.useCallback(e => {
    let t = e.currentTarget;
    t.classList.contains("react-datepicker__day") && setTimeout(() => {
      var e, n;
      if (null == (e = S.current) ? true : e.contains(t)) return;
      let r = null == (n = S.current) ? true : n.querySelector('.react-datepicker__day[tabindex="0"]');
      null != r && r.focus()
    }, 100)
  }, []);
  return (0, r.jsx)("div", {
    ref: S,
    className: f.calendarPicker,
    children: (0, r.jsx)(l(), {
      calendarClassName: h,
      selected: b,
      onChange: E,
      autoFocus: m,
      fixedHeight: true,
      inline: true,
      locale: v,
      calendarStartDay: null != (n = null == (t = I.options) ? true : t.weekStartsOn) ? n : 0,
      maxDate: y,
      minDate: O,
      onKeyDown: T,
      onClickOutside: g
    })
  })
}
let p = _