/** Chunk was on 66201 **/
/** chunk id: 285173, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => E,
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk412899 = require("./412899.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk884902 = require("./884902.js"),
  Chunk231338 = require("./231338.js");

function E(e) {
  var t;
  let {
    role: n,
    guildId: l
  } = e, s = (0, u._f)(l, null != n ? n : true, null == n ? true : n.colorStrings), c = (0, i.e7)([o.Z], () => o.Z.roleStyle), E = (0, a.dQu)(a.TVs.unsafe_rawColors.PRIMARY_300).hex(), d = null != (t = null == n ? true : n.colorString) ? t : E;
  return null == n ? null : "dot" === c ? (0, r.jsx)(a.FhE, {
    color: null != d ? d : true,
    colors: s,
    background: false,
    tooltip: false
  }) : (0, r.jsx)(a.xko, {
    color: null != d ? d : null,
    colors: s
  })
}

function d(e) {
  var t;
  let {
    guildId: n,
    role: i,
    className: o,
    canRemove: u = false,
    onRemove: E = c.dG
  } = e, d = (0, a.dQu)(a.TVs.unsafe_rawColors.PRIMARY_300).hex(), _ = null != (t = null == i ? true : i.colorString) ? t : d, A = l.useMemo(() => ({
    backgroundColor: "".concat(_, "27")
  }), [_]);
  return null == i ? null : (0, r.jsx)(a.P3F, {
    children: (0, r.jsx)(s.UB, {
      className: o,
      style: A,
      role: i,
      guildId: n,
      canRemove: u,
      onRemove: E
    })
  })
}