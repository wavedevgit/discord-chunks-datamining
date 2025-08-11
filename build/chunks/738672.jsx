/** Chunk was on web.js **/
/** chunk id: 738672, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk909820 = require("./909820.js"),
  Chunk740492 = require("./740492.js"),
  Chunk937995 = require("./937995.js"),
  Chunk618158 = require("./618158.jsx");
let d = 24;

function f(e) {
  let {
    buttonRef: t,
    dismissed: n,
    onDismiss: f,
    renderComponent: _,
    nudgeAlignIntoViewport: p = false,
    skipForceHide: h = false
  } = e, m = i.useContext(c.h9), [g, E] = i.useState(""), [b, y] = i.useState(false), O = (0, o.e7)([l.ZP], () => l.ZP.callHeaderHeight), v = i.useRef(null), I = i.useRef(0);
  i.useEffect(() => {
    let e = t.current;
    if (null != e) return e.addEventListener("click", f), () => e.removeEventListener("click", f)
  }), i.useEffect(() => {
    if (!h) {
      var e, t;
      E(String(I.current)), y(true !== O && O < (null != (t = null == (e = v.current) ? true : e.clientHeight) ? t : 300) + d), I.current += 1
    }
  }, [O, v, h]);
  let {
    preventIdle: T,
    allowIdle: S
  } = (0, u.Y)("popup");
  return (null == t ? true : t.current) == null ? null : <s.ZP><a.jRF targetRef={t} position={"top"} align={"center"} spacing={0} positionKey={g} nudgeAlignIntoViewport={p}>{() => (0, r.jsx)("div", {
        ref: v,
        onMouseOver: T,
        onFocus: T,
        onBlur: S,
        onMouseLeave: S,
        children: _({
          hidden: b || m || n,
          onDismiss: f
        })
      })}</a.jRF></s.ZP>
}