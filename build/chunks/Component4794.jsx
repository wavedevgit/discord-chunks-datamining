/** Chunk was on 46984 **/
/** chunk id: 4794, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk59662 = require("./59662.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk530171 = require("./530171.jsx"),
  Chunk175993 = require("./175993.jsx"),
  Chunk445642 = require("./445642.js");
let p = Chunk473749.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: i,
    useCollapsedSubtitle: p,
    useNotice: b
  } = t, [y, v] = l.useState(false), {
    navTransition: g
  } = (0, s.t)();
  l.useEffect(() => {
    (null == g ? true : g.targetAccordionKey) === t.key && v(true)
  }, [null == g ? true : g.targetAccordionKey, t.key]);
  let h = null == n ? true : n(y),
    m = null == p ? true : p(),
    x = null == b ? true : b();
  return (0, r.jsx)("div", {
    className: o()({
      [f.open]: y
    }),
    children: (0, r.jsx)(a.Kqy, {
      direction: "vertical",
      gap: 8,
      children: (0, r.jsxs)(u.I, {
        title: h,
        collapsedSubtitle: m,
        isOpen: y,
        setIsOpen: v,
        children: [null != x && (0, r.jsx)(d.Z, {
          notice: x
        }), i.map(e => (0, r.jsx)(c.Z, {
          node: e
        }, e.key))]
      })
    })
  })
})