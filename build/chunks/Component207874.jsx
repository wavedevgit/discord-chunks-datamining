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
  let e = c.Z.useField("query"),
    t = i.useCallback((e, t) => {
      t.stopPropagation(), t.preventDefault(), c.Z.setState({
        isActive: e
      })
    }, []),
    n = i.useCallback(() => {
      c.Z.setState({
        query: "",
        isActive: false
      })
    }, []),
    d = i.useRef(null),
    f = (0, o.e7)([l.Z], () => l.Z.getSection());
  i.useEffect(() => {
    let e = e => {
      var t;
      let n = d.current;
      (null == (t = (0, a.uB)(e)) ? true : t.activeElement) === document.body && (null == n || n.focus())
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [f]);
  let p = i.useCallback(e => {
    c.Z.setState({
      query: e
    })
  }, []);
  return (0, r.jsx)("div", {
    style: {
      marginBottom: "8px"
    },
    children: (0, r.jsx)(s.E1j, {
      ref: d,
      query: e,
      onClear: n,
      onChange: p,
      placeholder: u.intl.string(u.t["5h0QOP"]),
      inputProps: {
        "aria-label": u.intl.string(u.t.pk9BWW),
        "aria-expanded": true,
        onFocus: e => t(true, e),
        onBlur: e => t(false, e)
      }
    })
  })
}