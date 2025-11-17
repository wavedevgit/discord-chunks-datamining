/** Chunk was on web.js **/
/** chunk id: 152810, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => l
});
var Chunk752689 = require("./752689.js"),
  Chunk880016 = require("./880016.js"),
  Chunk172395 = require("./172395.js"),
  Chunk473749 = require("./473749.js"),
  Chunk935904 = require("./935904.js");

function l(e, t) {
  let {
    role: n = "dialog"
  } = e, l = (0, r.mp)();
  l = e["aria-label"] ? true : l;
  let c = (0, o.useRef)(false);
  return (0, o.useEffect)(() => {
    if (t.current && !t.current.contains(document.activeElement)) {
      (0, a.e)(t.current);
      let e = setTimeout(() => {
        (document.activeElement === t.current || document.activeElement === document.body) && (c.current = true, t.current && (t.current.blur(), (0, a.e)(t.current)), c.current = false)
      }, 500);
      return () => {
        clearTimeout(e)
      }
    }
  }, [t]), (0, s.Bq)(), {
    dialogProps: {
      ...(0, i.z)(e, {
        labelable: true
      }),
      role: n,
      tabIndex: false,
      "aria-labelledby": e["aria-labelledby"] || l,
      onBlur: e => {
        c.current && e.stopPropagation()
      }
    },
    titleProps: {
      id: l
    }
  }
}