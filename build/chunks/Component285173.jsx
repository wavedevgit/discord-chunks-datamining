/** Chunk was on 69937 **/
/** chunk id: 285173, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => d,
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk412899 = require("./412899.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk884902 = require("./884902.js"),
  Chunk231338 = require("./231338.js");

function d(e) {
  var t;
  let {
    role: n,
    guildId: l
  } = e, s = (0, c._f)(l, null != n ? n : true, null == n ? true : n.colorStrings), u = (0, i.e7)([o.Z], () => o.Z.roleStyle), d = (0, a.dQu)(a.TVs.unsafe_rawColors.PRIMARY_300).hex(), E = null != (t = null == n ? true : n.colorString) ? t : d;
  return null == n ? null : "dot" === u ? (0, r.jsx)(a.FhE, {
    color: null != E ? E : true,
    colors: s,
    background: false,
    tooltip: false
  }) : (0, r.jsx)(a.xko, {
    color: null != E ? E : null,
    colors: s
  })
}

function E(e) {
  var t;
  let {
    guildId: n,
    role: i,
    className: o,
    canRemove: c = false,
    onRemove: d = u.dG
  } = e, E = (0, a.dQu)(a.TVs.unsafe_rawColors.PRIMARY_300).hex(), _ = null != (t = null == i ? true : i.colorString) ? t : E, A = l.useMemo(() => ({
    backgroundColor: "".concat(_, "27")
  }), [_]);
  return null == i ? null : (0, r.jsx)(a.P3F, {
    children: (0, r.jsx)(s.UB, {
      className: o,
      style: A,
      role: i,
      guildId: n,
      canRemove: c,
      onRemove: d
    })
  })
}