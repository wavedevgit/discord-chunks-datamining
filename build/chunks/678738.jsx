/** Chunk was on web.js **/
/** chunk id: 678738, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk313201 = require("./313201.js"),
  Chunk729894 = require("./729894.js");

function f(e) {
  let {
    children: t,
    heading: n,
    headingIcon: o,
    introText: f,
    className: _,
    scrollIntoView: p = false,
    headingClassName: h,
    headingVariant: m = "text-xs/semibold",
    headingColor: g = "header-secondary"
  } = e, E = (0, u.Dt)(), b = (0, s.e7)([c.Z], () => c.Z.useReducedMotion), y = i.useRef(null);
  return i.useEffect(() => {
    let e = y.current;
    if (null == e) return;
    let t = requestAnimationFrame(() => {
      e.scrollIntoView({
        behavior: b ? "auto" : "smooth"
      })
    });
    return () => cancelAnimationFrame(t)
  }, [b]), <section ref={p ? y : true} className={a()(d.section, _)} aria-labelledby={null != n ? E : true}>{null != n && <div className={d.headings}>{<div className={d.header}>{<l.X6q variant={m} color={g} className={h} id={E}>{n}</l.X6q>}{o}</div>}{null != f && <l.Text variant={"text-xs/normal"}>{f}</l.Text>}</div>}{<l.y5t>{t}</l.y5t>}</section>
}