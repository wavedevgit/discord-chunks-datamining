/** Chunk was on 42300 **/
/** chunk id: 738672, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk909820 = require("./909820.js"),
  Chunk740492 = require("./740492.js"),
  Chunk937995 = require("./937995.jsx"),
  Chunk618158 = require("./618158.jsx");

function d(e) {
  let {
    buttonRef: t,
    dismissed: n,
    onDismiss: d,
    renderComponent: p,
    nudgeAlignIntoViewport: h = false,
    skipForceHide: f = false
  } = e, m = r.useContext(c.h9), [g, b] = r.useState(""), [C, y] = r.useState(false), _ = (0, l.e7)([s.ZP], () => s.ZP.callHeaderHeight), v = r.useRef(null), x = r.useRef(0);
  r.useEffect(() => {
    let e = t.current;
    if (null != e) return e.addEventListener("click", d), () => e.removeEventListener("click", d)
  }), r.useEffect(() => {
    if (!f) {
      var e, t;
      b(String(x.current)), y(true !== _ && _ < (null != (t = null == (e = v.current) ? true : e.clientHeight) ? t : 300) + 24), x.current += 1
    }
  }, [_, v, f]);
  let {
    preventIdle: O,
    allowIdle: j
  } = (0, u.Y)("popup");
  return (null == t ? true : t.current) == null ? null : (0, i.jsx)(o.ZP, {
    children: (0, i.jsx)(a.jRF, {
      targetRef: t,
      position: "top",
      align: "center",
      spacing: 0,
      positionKey: g,
      nudgeAlignIntoViewport: h,
      children: () => (0, i.jsx)("div", {
        ref: v,
        onMouseOver: O,
        onFocus: O,
        onBlur: j,
        onMouseLeave: j,
        children: p({
          hidden: C || m || n,
          onDismiss: d
        })
      })
    })
  })
}