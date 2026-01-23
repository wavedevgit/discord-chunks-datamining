/** Chunk was on web.js **/
/** chunk id: 939538, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  CalendarPicker: () => p,
  default: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  s = require.n(Chunk989349),
  Chunk77967 = require("./77967.js"),
  l = require.n(Chunk77967),
  Chunk311907 = require("./311907.js"),
  Chunk11057 = require("./11057.js"),
  Chunk773669 = require("./773669.js"),
  Chunk731880 = require("./731880.js");

function p(e) {
  var t, n;
  let {
    value: a = s()().local(),
    minDate: o,
    maxDate: p,
    onSelect: _,
    calendarClassName: h,
    autoFocus: m,
    onClickOutside: g
  } = e, E = i.useCallback((e, t) => {
    null == _ || _(s()(e), t)
  }, [_]), y = i.useMemo(() => a.toDate(), [a]), b = i.useMemo(() => null == p ? true : p.toDate(), [p]), O = i.useMemo(() => null == o ? true : o.toDate(), [o]), v = (0, c.bG)([d.default], () => d.default.locale), A = (0, u.QO)(), I = i.useRef(null), S = i.useCallback(e => {
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
    className: f.Xn,
    children: (0, r.jsx)(l(), {
      calendarClassName: h,
      selected: y,
      onChange: E,
      autoFocus: m,
      fixedHeight: true,
      inline: true,
      locale: v,
      calendarStartDay: null != (t = null == (n = A.options) ? true : n.weekStartsOn) ? t : 0,
      maxDate: b,
      minDate: O,
      onKeyDown: S,
      onClickOutside: g
    })
  })
}
let _ = p