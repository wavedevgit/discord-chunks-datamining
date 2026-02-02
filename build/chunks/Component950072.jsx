/** Chunk was on 2155 **/
/** chunk id: 950072, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _,
  C: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk417454 = require("./417454.jsx"),
  Chunk775602 = require("./775602.js"),
  Chunk967144 = require("./967144.js"),
  Chunk818348 = require("./818348.js");

function E(e) {
  var t;
  let {
    role: n,
    guildId: r
  } = e, s = (0, u.X_)(r, null != n ? n : true, null == n ? true : n.colorStrings), c = (0, a.bG)([o.A], () => o.A.roleStyle), E = (0, i.rdh)(i.LU0.unsafe_rawColors.PRIMARY_300).hex(), _ = null != (t = null == n ? true : n.colorString) ? t : E;
  return null == n ? null : "dot" === c ? (0, l.jsx)(i.WYI, {
    color: null != _ ? _ : true,
    colors: s,
    background: false,
    tooltip: false
  }) : (0, l.jsx)(i.RYH, {
    color: null != _ ? _ : null,
    colors: s
  })
}

function _(e) {
  var t;
  let {
    guildId: n,
    role: a,
    className: o,
    canRemove: u = false,
    onRemove: E = c.tE
  } = e, _ = (0, i.rdh)(i.LU0.unsafe_rawColors.PRIMARY_300).hex(), d = null != (t = null == a ? true : a.colorString) ? t : _, g = r.useMemo(() => ({
    backgroundColor: "".concat(d, "27")
  }), [d]);
  return null == a ? null : (0, l.jsx)(i.DUT, {
    children: (0, l.jsx)(s.b_, {
      className: o,
      style: g,
      role: a,
      guildId: n,
      canRemove: u,
      onRemove: E
    })
  })
}