/** Chunk was on 36878 **/
/** chunk id: 829210, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./361932.js"), require("./187205.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
  Chunk481060 = require("./481060.js"),
  Chunk59662 = require("./59662.js"),
  Chunk28682 = require("./28682.js"),
  Chunk854014 = require("./854014.js"),
  Chunk610844 = require("./610844.js");

function m(e) {
  let {
    node: t
  } = e, {
    history: n,
    activeIndex: l,
    pushPanel: r
  } = (0, c.t)(), a = t.useTitle(), s = o.useMemo(() => t.layout.flatMap(e => e.type === u.J.CATEGORY ? [e] : e.type === u.J.PANE ? e.layout : []), [t]), f = n[l] === t;
  return <i.Fragment>{<d.Z icon={t.icon} title={a} active={f} onClick={() => r(t)} />}{f && s.length > 1 && <x categories={s} />}</i.Fragment>
}

function x(e) {
  let {
    categories: t
  } = e, [n, l] = o.useState(0), [c, u] = (0, s.q_F)(() => ({
    y: 0,
    config: {
      mass: .1,
      friction: 20,
      tension: 300
    }
  })), d = o.useMemo(() => t.map(e => {
    var t;
    return {
      title: null == (t = e.useTitle) ? true : t.call(e),
      key: e.key
    }
  }).filter(e => {
    let {
      title: t
    } = e;
    return null != t
  }), [t]);
  return <div className={f.subnav}>{<div className={f.track}><a.animated.div className={f.thumb} style={c} /></div>}{<ul>{d.map((e, t) => {
        let {
          title: o,
          key: a
        } = e;
        return (0, i.jsx)(s.P3F, {
          onClick: () => {
            l(t), u({
              y: 40 * t
            })
          },
          tag: "li",
          className: r()({
            [f.active]: t === n
          }),
          children: o
        }, a)
      })}</ul>}</div>
}