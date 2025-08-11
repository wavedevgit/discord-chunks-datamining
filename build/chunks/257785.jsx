/** Chunk was on 93886 **/
/** chunk id: 257785, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  E: () => d,
  Z9: () => u,
  wl: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk572004 = require("./572004.js"),
  Chunk616257 = require("./616257.js");

function d(e) {
  let {
    className: t,
    children: a
  } = e;
  return <dl className={i()(c.properties, t)}>{a}</dl>
}
let u = e => {
  let {
    name: t,
    children: a,
    copyValue: l
  } = e, [i, d] = r.useState(false);
  return r.useEffect(() => {
    if (i) {
      let e = setTimeout(() => d(false), 1e3);
      return () => clearTimeout(e)
    }
  }, [i]), <n.Fragment>{<dt className={c.propertyName}>{t}</dt>}{<dd className={c.propertyValue}>{a}{null != l ? <s.P3F tag={"span"} className={c.copyPropertyButton} onClick={() => (0, o.JG)(l, () => d(true))}>{i ? (0, n.jsx)(s.kmB, {
          color: "currentColor",
          size: "sm"
        }) : (0, n.jsx)(s.TIy, {
          color: "currentColor",
          size: "sm"
        })}</s.P3F> : null}</dd>}</n.Fragment>
};

function m(e) {
  let {
    value: t
  } = e;
  return <s.XZJ size={16} value={t} shape={s.XZJ.Shapes.SMALL_BOX} displayOnly={true} />
}