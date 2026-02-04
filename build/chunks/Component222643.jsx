/** Chunk was on 44669 **/
/** chunk id: 222643, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk43189 = require("./43189.js"),
  Chunk964404 = require("./964404.js"),
  Chunk461782 = require("./461782.jsx"),
  Chunk447404 = require("./447404.jsx");

function d(e) {
  let {
    buttonRef: t,
    dismissed: n,
    onDismiss: d,
    renderComponent: p,
    nudgeAlignIntoViewport: h = false,
    skipForceHide: g = false
  } = e, f = l.useContext(c.vG), [m, b] = l.useState(""), [A, y] = l.useState(false), O = (0, i.bG)([o.Ay], () => o.Ay.callHeaderHeight), j = l.useRef(null), _ = l.useRef(0);
  l.useEffect(() => {
    let e = t.current;
    if (null != e) return e.addEventListener("click", d), () => e.removeEventListener("click", d)
  }), l.useEffect(() => {
    if (!g) {
      var e, t;
      b(String(_.current)), y(true !== O && O < (null != (e = null == (t = j.current) ? true : t.clientHeight) ? e : 300) + 24), _.current += 1
    }
  }, [O, j, g]);
  let {
    preventIdle: x,
    allowIdle: v
  } = (0, u.o)("popup");
  return (null == t ? true : t.current) == null ? null : (0, r.jsx)(a.Ay, {
    children: (0, r.jsx)(s.QCO, {
      targetRef: t,
      position: "top",
      align: "center",
      spacing: 0,
      positionKey: m,
      nudgeAlignIntoViewport: h,
      children: () => (0, r.jsx)("div", {
        ref: j,
        onMouseOver: x,
        onFocus: x,
        onBlur: v,
        onMouseLeave: v,
        children: p({
          hidden: A || f || n,
          onDismiss: d
        })
      })
    })
  })
}