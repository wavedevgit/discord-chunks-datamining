/** Chunk was on 44411 **/
/** chunk id: 632678, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk621466 = require("./621466.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk628965 = require("./628965.js"),
  Chunk152056 = require("./152056.js"),
  Chunk985018 = require("./985018.jsx");

function c() {
  let e = d.A.useField("query"),
    t = s.useCallback((e, t) => {
      t.stopPropagation(), t.preventDefault(), d.A.setState({
        isActive: e
      })
    }, []),
    n = s.useCallback(() => {
      d.A.setState({
        query: "",
        isActive: false
      })
    }, []),
    c = s.useRef(null),
    h = (0, l.bG)([a.A], () => a.A.getSection());
  s.useEffect(() => {
    let e = e => {
      var t;
      let n = c.current;
      (null == (t = (0, r.BF)(e)) ? true : t.activeElement) === document.body && (null == n || n.focus())
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [h]);
  let p = s.useCallback(e => {
    d.A.setState({
      query: e
    })
  }, []);
  return (0, i.jsx)("div", {
    style: {
      marginBottom: "8px"
    },
    children: (0, i.jsx)(o.IWV, {
      ref: c,
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