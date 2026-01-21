/** Chunk was on 82124 **/
/** chunk id: 738672, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  } = e, g = i.useContext(c.h9), [m, b] = i.useState(""), [y, v] = i.useState(false), O = (0, l.e7)([s.ZP], () => s.ZP.callHeaderHeight), j = i.useRef(null), x = i.useRef(0);
  i.useEffect(() => {
    let e = t.current;
    if (null != e) return e.addEventListener("click", d), () => e.removeEventListener("click", d)
  }), i.useEffect(() => {
    if (!h) {
      var e, t;
      b(String(x.current)), v(true !== O && O < (null != (t = null == (e = j.current) ? true : e.clientHeight) ? t : 300) + 24), x.current += 1
    }
  }, [O, j, h]);
  let {
    preventIdle: C,
    allowIdle: E
  } = (0, u.Y)("popup");
  return (null == t ? true : t.current) == null ? null : (0, r.jsx)(o.ZP, {
    children: (0, r.jsx)(a.jRF, {
      targetRef: t,
      position: "top",
      align: "center",
      spacing: 0,
      positionKey: m,
      nudgeAlignIntoViewport: f,
      children: () => (0, r.jsx)("div", {
        ref: j,
        onMouseOver: C,
        onFocus: C,
        onBlur: E,
        onMouseLeave: E,
        children: p({
          hidden: y || g || n,
          onDismiss: d
        })
      })
    })
  })
}