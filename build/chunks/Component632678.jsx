/** Chunk was on web.js **/
/** chunk id: 632678, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk621466 = require("./621466.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk628965 = require("./628965.js"),
  Chunk152056 = require("./152056.js"),
  Chunk985018 = require("./985018.jsx");

function d() {
  let e = c.A.useField("query"),
    t = i.useCallback((e, t) => {
      t.stopPropagation(), t.preventDefault(), c.A.setState({
        isActive: e
      })
    }, []),
    n = i.useCallback(() => {
      c.A.setState({
        query: "",
        isActive: false
      })
    }, []),
    d = i.useRef(null),
    f = (0, s.bG)([l.A], () => l.A.getSection());
  i.useEffect(() => {
    let e = e => {
      var t;
      let n = d.current;
      (null == (t = (0, a.BF)(e)) ? true : t.activeElement) === document.body && (null == n || n.focus())
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [f]);
  let p = i.useCallback(e => {
    c.A.setState({
      query: e
    })
  }, []);
  return (0, r.jsx)("div", {
    style: {
      marginBottom: "8px"
    },
    children: (0, r.jsx)(o.IWV, {
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