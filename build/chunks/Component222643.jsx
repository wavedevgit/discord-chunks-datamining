/** Chunk was on 97492 **/
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
    renderComponent: f,
    nudgeAlignIntoViewport: p = false,
    skipForceHide: h = false
  } = e, b = l.useContext(c.vG), [g, m] = l.useState(""), [A, y] = l.useState(false), O = (0, i.bG)([o.Ay], () => o.Ay.callHeaderHeight), j = l.useRef(null), v = l.useRef(0);
  l.useEffect(() => {
    let e = t.current;
    if (null != e) return e.addEventListener("click", d), () => e.removeEventListener("click", d)
  }), l.useEffect(() => {
    if (!h) {
      var e, t;
      m(String(v.current)), y(true !== O && O < (null != (e = null == (t = j.current) ? true : t.clientHeight) ? e : 300) + 24), v.current += 1
    }
  }, [O, j, h]);
  let {
    preventIdle: x,
    allowIdle: E
  } = (0, u.o)("popup");
  return (null == t ? true : t.current) == null ? null : (0, r.jsx)(s.Ay, {
    children: (0, r.jsx)(a.QCO, {
      targetRef: t,
      position: "top",
      align: "center",
      spacing: 0,
      positionKey: g,
      nudgeAlignIntoViewport: p,
      children: () => (0, r.jsx)("div", {
        ref: j,
        onMouseOver: x,
        onFocus: x,
        onBlur: E,
        onMouseLeave: E,
        children: f({
          hidden: A || b || n,
          onDismiss: d
        })
      })
    })
  })
}