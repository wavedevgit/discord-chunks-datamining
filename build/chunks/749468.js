/** Chunk was on 33622 **/
/** chunk id: 749468, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  R: () => l
});
var Chunk677061 = require("./677061.js"),
  Chunk735437 = require("./735437.js"),
  Chunk495873 = require("./495873.js"),
  Chunk647438 = require("./647438.js"),
  Chunk765772 = require("./765772.js");

function l(e, a) {
  let {
    role: t = "dialog"
  } = e, l = (0, u.mp)();
  l = e["aria-label"] ? true : l;
  let s = (0, i.useRef)(false);
  return (0, i.useEffect)(() => {
    if (a.current && !a.current.contains(document.activeElement)) {
      (0, r.e)(a.current);
      let e = setTimeout(() => {
        (document.activeElement === a.current || document.activeElement === document.body) && (s.current = true, a.current && (a.current.blur(), (0, r.e)(a.current)), s.current = false)
      }, 500);
      return () => {
        clearTimeout(e)
      }
    }
  }, [a]), (0, o.Bq)(), {
    dialogProps: {
      ...(0, n.z)(e, {
        labelable: true
      }),
      role: t,
      tabIndex: false,
      "aria-labelledby": e["aria-labelledby"] || l,
      onBlur: e => {
        s.current && e.stopPropagation()
      }
    },
    titleProps: {
      id: l
    }
  }
}