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

function d() {
  let e = (0, Chunk996733.Z7)(),
    t = Chunk647438.useCallback((e, t) => {
      t.stopPropagation(), t.preventDefault(), (0, c.QH)(e)
    }, []),
    n = Chunk647438.useCallback(() => {
      (0, Chunk996733.QH)(false), (0, Chunk996733.yN)("")
    }, []),
    d = Chunk647438.useRef(null),
    f = (0, Chunk442837.e7)([Chunk663389.Z], () => Chunk663389.Z.getSection());
  return Chunk647438.useEffect(() => {
    let e = e => {
      var t;
      let n = d.current;
      (null == (t = (0, l.uB)(e)) ? true : t.activeElement) === document.body && (null == n || n.focus())
    };
    return window.addEventListener("keydown", module), () => window.removeEventListener("keydown", module)
  }, [f]), (0, Chunk951288.jsx)("div", {
    style: {
      marginBottom: "8px"
    },
    children: (0, Chunk951288.jsx)(Chunk481060.E1j, {
      ref: d,
      query: module,
      onClear: require,
      onChange: Chunk996733.yN,
      placeholder: Chunk388032.intl.string(Chunk388032.t["5h0QOD"]),
      inputProps: {
        "aria-label": Chunk388032.intl.string(Chunk388032.t.pk9BWV),
        "aria-expanded": true,
        onFocus: e => t(true, e),
        onBlur: e => t(false, e)
      }
    })
  })
}