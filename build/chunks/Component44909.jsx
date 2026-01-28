/** Chunk was on 5606 **/
/** chunk id: 44909, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk244242 = require("./244242.jsx");

function s(e) {
  let {
    node: t
  } = e, {
    useValue: n,
    setValue: s,
    useTitle: a,
    useSubtitle: o,
    useOptions: c,
    useBadge: d
  } = t, u = a(), p = null == o ? true : o(), _ = n(), m = c(), g = null == d ? true : d();
  return (0, r.jsx)(l.L, {
    children: (0, r.jsx)(i.z6M, {
      label: u,
      description: p,
      options: m,
      value: _,
      badge: g,
      onChange: e => s(e)
    })
  })
}