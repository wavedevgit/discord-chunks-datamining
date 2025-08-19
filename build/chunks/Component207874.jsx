/** Chunk was on 4756 **/
/** chunk id: 207874, original params: e,t,n (module,exports,require) **/
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
  } = e, n = (0, u.Z7)(), d = r.useCallback((e, t) => {
    t.stopPropagation(), t.preventDefault(), (0, u.QH)(e)
  }, []), h = r.useCallback(() => {
    (0, u.QH)(false), (0, u.yN)("")
  }, []), p = r.useRef(null), g = (0, s.e7)([o.Z], () => o.Z.getSection());
  return r.useEffect(() => {
    let e = e => {
      var t;
      let n = p.current;
      (null == (t = (0, a.uB)(e)) ? true : t.activeElement) === document.body && (null == n || n.focus())
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [g]), (0, i.jsx)("div", {
    style: {
      marginBottom: "8px"
    },
    children: (0, i.jsx)(l.E1j, {
      ref: p,
      query: n,
      onClear: h,
      onChange: u.yN,
      placeholder: c.intl.string(c.t["5h0QOD"]),
      className: t,
      inputProps: {
        "aria-label": c.intl.string(c.t.pk9BWV),
        "aria-expanded": true,
        onFocus: e => d(true, e),
        onBlur: e => d(false, e)
      }
    })
  })
}