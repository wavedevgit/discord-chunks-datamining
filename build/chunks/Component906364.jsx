/** Chunk was on 30202 **/
/** chunk id: 906364, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk993413 = require("./993413.jsx"),
  Chunk388032 = require("./388032.jsx");

function l(e) {
  let {
    sectionTitle: t,
    errors: n,
    onPronounsChange: l,
    pendingPronouns: o,
    placeholder: c,
    currentPronouns: d,
    disabled: u = false
  } = e;
  return (0, i.jsx)(s.Z, {
    title: t,
    errors: n,
    disabled: u,
    children: (0, i.jsx)(r.oil, {
      placeholder: null != c ? c : a.intl.string(a.t.NPEUUl),
      maxLength: 40,
      value: null != o ? o : d,
      onChange: function(e) {
        l(e === d ? true : e)
      },
      disabled: u
    })
  })
}