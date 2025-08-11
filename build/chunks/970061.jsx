/** Chunk was on 22988 **/
/** chunk id: 970061, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk648993 = require("./648993.js");

function m(e) {
  let {
    checked: t,
    children: n
  } = e;
  return <div className={u.row}>{<c.Text variant={"text-md/normal"} color={"interactive-active"} className={u.rowText}>{n}</c.Text>}{t ? <c.owK size={"md"} color={"currentColor"} secondaryColor={o.Z.unsafe_rawColors.WHITE_500.css} className={a()(u.rowIcon, u.rowIconChecked)} /> : <div className={a()(u.rowIcon, u.rowIconEmpty)} />}</div>
}

function g(e) {
  let {
    title: t,
    children: n,
    buttonLabel: l,
    buttonCallback: a,
    disabled: o
  } = e, [g, p] = i.useState(false), h = n.flatMap(e => e.items.map(e => e.completed)), f = h.filter(e => e).length / h.length, b = (0, c.q_F)({
    width: "".concat(100 * f, "%")
  });
  return <div className={u.container}>{<c.P3F className={u.headerBar} onClick={() => p(e => !e)}>{<c.X6q variant={"heading-md/semibold"} className={u.headerText}>{t}</c.X6q>}{<d.Z direction={g ? d.Z.Directions.DOWN : d.Z.Directions.UP} className={u.headerCaret} />}</c.P3F>}{<div className={u.progressBarOuter}><s.animated.div className={u.progressBarInner} style={b} /></div>}{!g && n.map((e, t) => {
      let {
        title: n,
        items: l
      } = e;
      return <i.Fragment>{t > 0 && <c.$i$ className={u.divider} />}{<c.vwX className={u.categoryTitle}>{n}</c.vwX>}{l.map((e, t) => <m checked={e.completed}>{e.description}</m>)}</i.Fragment>
    })}{null !== l && "" !== l && null !== a && <div>{<c.$i$ className={u.divider} />}{<div data-button-hoisted-classname-wrapper={true} className={u.button}><c.zxk variant={"primary"} size={"sm"} text={l} onClick={a} disabled={1 !== f || o} /></div>}</div>}</div>
}