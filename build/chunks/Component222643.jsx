/** Chunk was on 1113 **/
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
    renderComponent: h,
    nudgeAlignIntoViewport: p = false,
    skipForceHide: g = false
  } = e, f = l.useContext(c.vG), [m, b] = l.useState(""), [A, y] = l.useState(false), O = (0, i.bG)([o.Ay], () => o.Ay.callHeaderHeight), _ = l.useRef(null), j = l.useRef(0);
  l.useEffect(() => {
    let e = t.current;
    if (null != e) return e.addEventListener("click", d), () => e.removeEventListener("click", d)
  }), l.useEffect(() => {
    if (!g) {
      var e, t;
      b(String(j.current)), y(true !== O && O < (null != (e = null == (t = _.current) ? true : t.clientHeight) ? e : 300) + 24), j.current += 1
    }
  }, [O, _, g]);
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
      nudgeAlignIntoViewport: p,
      children: () => (0, r.jsx)("div", {
        ref: _,
        onMouseOver: x,
        onFocus: x,
        onBlur: v,
        onMouseLeave: v,
        children: h({
          hidden: A || f || n,
          onDismiss: d
        })
      })
    })
  })
}