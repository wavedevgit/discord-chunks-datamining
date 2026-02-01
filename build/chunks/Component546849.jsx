/** Chunk was on 9207 **/
/** chunk id: 546849, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk128450 = require("./128450.jsx"),
  Chunk985018 = require("./985018.jsx");

function a(e) {
  let {
    sectionTitle: t,
    errors: n,
    onPronounsChange: a,
    pendingPronouns: o,
    placeholder: c,
    currentPronouns: d,
    disabled: u = false
  } = e;
  return (0, r.jsx)(l.A, {
    title: t,
    errors: n,
    disabled: u,
    children: (0, r.jsx)(i.ksK, {
      placeholder: null != c ? c : s.intl.string(s.t.NPEUUu),
      maxLength: 40,
      value: null != o ? o : d,
      onChange: function(e) {
        a(e === d ? true : e)
      },
      disabled: u
    })
  })
}