/** Chunk was on web.js **/
/** chunk id: 841680, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => l
});
var Chunk723906 = require("./723906.js"),
  Chunk290424 = require("./290424.js"),
  Chunk805447 = require("./805447.js"),
  Chunk64700 = require("./64700.js"),
  Chunk925573 = require("./925573.js");

function l(e, t) {
  let {
    role: n = "dialog"
  } = e, l = (0, r.X1)();
  l = e["aria-label"] ? true : l;
  let c = (0, o.useRef)(false);
  return (0, o.useEffect)(() => {
    if (t.current && !t.current.contains(document.activeElement)) {
      (0, a.l)(t.current);
      let e = setTimeout(() => {
        (document.activeElement === t.current || document.activeElement === document.body) && (c.current = true, t.current && (t.current.blur(), (0, a.l)(t.current)), c.current = false)
      }, 500);
      return () => {
        clearTimeout(e)
      }
    }
  }, [t]), (0, s.Se)(), {
    dialogProps: {
      ...(0, i.$)(e, {
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