/** Chunk was on 88647 **/
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
    nudgeAlignIntoViewport: f = false,
    skipForceHide: h = false
  } = e, m = i.useContext(c.h9), [g, b] = i.useState(""), [_, y] = i.useState(false), C = (0, l.e7)([s.ZP], () => s.ZP.callHeaderHeight), v = i.useRef(null), x = i.useRef(0);
  i.useEffect(() => {
    let e = t.current;
    if (null != e) return e.addEventListener("click", d), () => e.removeEventListener("click", d)
  }), i.useEffect(() => {
    if (!h) {
      var e, t;
      b(String(x.current)), y(true !== C && C < (null != (t = null == (e = v.current) ? true : e.clientHeight) ? t : 300) + 24), x.current += 1
    }
  }, [C, v, h]);
  let {
    preventIdle: O,
    allowIdle: E
  } = (0, u.Y)("popup");
  return (null == t ? true : t.current) == null ? null : (0, r.jsx)(o.ZP, {
    children: (0, r.jsx)(a.jRF, {
      targetRef: t,
      position: "top",
      align: "center",
      spacing: 0,
      positionKey: g,
      nudgeAlignIntoViewport: f,
      children: () => (0, r.jsx)("div", {
        ref: v,
        onMouseOver: O,
        onFocus: O,
        onBlur: E,
        onMouseLeave: E,
        children: p({
          hidden: _ || m || n,
          onDismiss: d
        })
      })
    })
  })
}