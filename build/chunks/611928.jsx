/** Chunk was on 88934 **/
/** chunk id: 611928, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Cm: () => m,
  ZP: () => g,
  _6: () => h,
  aV: () => p,
  z6: () => u
});
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
  Chunk481060 = require("./481060.js"),
  Chunk794916 = require("./794916.js");

function u(e) {
  let {
    scrollPosition: t
  } = e;
  return <o.animated.div className={d.backdrop} style={{
      opacity: null == t ? true : t.to([0, 100], [0, 1])
    }} />
}

function p(e) {
  let {
    icon: t
  } = e;
  return <t className={d.icon} color={c.TVs.colors.HEADER_PRIMARY} size={"md"} />
}

function m(e) {
  let {
    onClick: t,
    icon: n
  } = e;
  return <c.P3F className={d.iconButton} onClick={t}><n color={"currentColor"} size={"sm"} /></c.P3F>
}
var h = ((r = {}).OVERLAY = "overlay", r.RELATIVE = "relative", r);

function g(e) {
  let {
    className: t,
    variant: n,
    children: r
  } = e, l = i.useMemo(() => "overlay" === n ? d.overlay : d.relative, [n]);
  return <div className={s()(d.headerBar, l, t)}>{r}</div>
}