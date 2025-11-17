/** Chunk was on web.js **/
/** chunk id: 207874, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk374470 = require("./374470.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk663389 = require("./663389.js"),
  Chunk996733 = require("./996733.js"),
  Chunk388032 = require("./388032.jsx");

function d() {
  let e = Chunk996733.Z.useField("query"),
    t = Chunk473749.useCallback((e, t) => {
      t.stopPropagation(), t.preventDefault(), c.Z.setState({
        isActive: e
      })
    }, []),
    n = Chunk473749.useCallback(() => {
      Chunk996733.Z.setState({
        query: "",
        isActive: false
      })
    }, []),
    d = Chunk473749.useRef(null),
    f = (0, Chunk442837.e7)([Chunk663389.Z], () => Chunk663389.Z.getSection());
  Chunk473749.useEffect(() => {
    let e = e => {
      var t;
      let n = d.current;
      (null == (t = (0, a.uB)(e)) ? true : t.activeElement) === document.body && (null == n || n.focus())
    };
    return window.addEventListener("keydown", module), () => window.removeEventListener("keydown", module)
  }, [f]);
  let _ = Chunk473749.useCallback(e => {
    c.Z.setState({
      query: e
    })
  }, []);
  return (0, Chunk54381.jsx)("div", {
    style: {
      marginBottom: "8px"
    },
    children: (0, Chunk54381.jsx)(Chunk481060.E1j, {
      ref: d,
      query: module,
      onClear: require,
      onChange: _,
      placeholder: Chunk388032.intl.string(Chunk388032.t["5h0QOP"]),
      inputProps: {
        "aria-label": Chunk388032.intl.string(Chunk388032.t.pk9BWW),
        "aria-expanded": true,
        onFocus: e => t(true, e),
        onBlur: e => t(false, e)
      }
    })
  })
}