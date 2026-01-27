/** Chunk was on web.js **/
/** chunk id: 714026, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk752238 = require("./752238.js"),
  Chunk433904 = require("./433904.js");

function c(e) {
  let {
    value: t,
    onChange: n
  } = e, a = "json", c = i.useRef(null), [u, d] = i.useState("");
  i.useEffect(() => {
    if (null != t && s.default.hasLanguage(a)) {
      let e = s.default.highlight(a, t, true);
      null != e ? d(e.value + "\n") : d(t + "\n")
    } else d(t + "\n")
  }, [t, a]);
  let f = e => {
      n(e.target.value)
    },
    p = e => {
      let t = e.target,
        n = t.previousElementSibling;
      null != n && (n.scrollTop = t.scrollTop, n.scrollLeft = t.scrollLeft)
    },
    _ = e => {
      if ("Tab" === e.key) {
        e.preventDefault();
        let r = e.target,
          i = r.selectionStart,
          a = r.selectionEnd;
        if (e.shiftKey) {
          let e = t.lastIndexOf("\n", i - 1) + 1,
            r = t.indexOf("\n", i),
            a = t.substring(e, false === r ? t.length : r),
            o = 0;
          for (let e = 0; e < Math.min(2, a.length); e++)
            if (" " === a[e]) o++;
            else break;
          o > 0 && (n(t.substring(0, e) + t.substring(e + o)), setTimeout(() => {
            if (null != c.current) {
              let t = Math.max(e, i - o);
              c.current.selectionStart = c.current.selectionEnd = t
            }
          }, 0))
        } else n(t.substring(0, i) + "  " + t.substring(a)), setTimeout(() => {
          null != c.current && (c.current.selectionStart = c.current.selectionEnd = i + 2)
        }, 0)
      }
    };
  return (0, r.jsxs)("div", {
    className: l.tg,
    children: [(0, r.jsx)("pre", {
      className: l.c5,
      "aria-hidden": "true",
      children: (0, r.jsx)("code", {
        className: o()("hljs", a),
        dangerouslySetInnerHTML: {
          __html: null != u ? u : ""
        }
      })
    }), (0, r.jsx)("textarea", {
      ref: c,
      className: l.mW,
      value: t,
      onChange: f,
      onScroll: p,
      onKeyDown: _,
      spellCheck: false,
      autoCapitalize: "off",
      autoComplete: "off",
      autoCorrect: "off",
      rows: 30
    })]
  })
}