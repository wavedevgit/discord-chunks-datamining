/** Chunk was on 7891 **/
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
    nudgeAlignIntoViewport: h = false,
    skipForceHide: f = false
  } = e, m = r.useContext(c.h9), [g, b] = r.useState(""), [C, y] = r.useState(false), v = (0, l.e7)([s.ZP], () => s.ZP.callHeaderHeight), _ = r.useRef(null), O = r.useRef(0);
  r.useEffect(() => {
    let e = t.current;
    if (null != e) return e.addEventListener("click", d), () => e.removeEventListener("click", d)
  }), r.useEffect(() => {
    if (!f) {
      var e, t;
      b(String(O.current)), y(true !== v && v < (null != (t = null == (e = _.current) ? true : e.clientHeight) ? t : 300) + 24), O.current += 1
    }
  }, [v, _, f]);
  let {
    preventIdle: x,
    allowIdle: E
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
        ref: _,
        onMouseOver: x,
        onFocus: x,
        onBlur: E,
        onMouseLeave: E,
        children: p({
          hidden: C || m || n,
          onDismiss: d
        })
      })
    })
  })
}