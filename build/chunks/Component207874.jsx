/** Chunk was on web.js **/
/** chunk id: 207874, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk663389 = require("./663389.js"),
  Chunk5967 = require("./5967.js"),
  Chunk996733 = require("./996733.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    style: t
  } = e, n = (0, c.Z7)(), d = i.useCallback((e, t) => {
    t.stopPropagation(), t.preventDefault(), (0, c.QH)(e)
  }, []), f = i.useCallback(() => {
    (0, c.QH)(false), (0, c.yN)("")
  }, []), _ = i.useRef(null), p = (0, a.e7)([s.Z], () => s.Z.getSection());
  return i.useEffect(() => {
    let e = e => {
      var t;
      let n = _.current;
      (null == (t = (0, l.uB)(e)) ? true : t.activeElement) === document.body && (null == n || n.focus())
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [p]), (0, r.jsx)("div", {
    style: {
      marginBottom: "8px"
    },
    children: (0, r.jsx)(o.E1j, {
      ref: _,
      query: n,
      onClear: f,
      onChange: c.yN,
      placeholder: u.intl.string(u.t["5h0QOD"]),
      className: t,
      inputProps: {
        "aria-label": u.intl.string(u.t.pk9BWV),
        "aria-expanded": true,
        onFocus: e => d(true, e),
        onBlur: e => d(false, e)
      }
    })
  })
}