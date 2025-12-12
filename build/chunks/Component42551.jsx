/** Chunk was on 6850 **/
/** chunk id: 42551, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk658722 = require("./658722.js"),
  o = require.n(Chunk658722),
  Chunk954955 = require("./954955.js"),
  s = require.n(Chunk954955),
  Chunk498607 = require("./498607.js"),
  u = require.n(Chunk498607),
  Chunk399606 = require("./399606.js"),
  Chunk333200 = require("./333200.jsx"),
  Chunk563115 = require("./563115.jsx"),
  Chunk910693 = require("./910693.js"),
  Chunk893966 = require("./893966.js"),
  Chunk527379 = require("./527379.js"),
  Chunk285173 = require("./285173.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk236143 = require("./236143.js");
let x = new Set;

function v(e) {
  let {
    guildId: t
  } = e, n = (0, b.BG)(t), i = (0, d.e7)([f.Z], () => f.Z.getSearchStateByGuildId(t), [t], u()), [a, c] = l.useState(i.selectedRoleIds), v = (0, m.h)(t, x, true), y = l.useCallback(e => {
    (0, p.Dr)(t, {
      selectedRoleIds: e
    }), n(e)
  }, [t, n]), O = l.useMemo(() => s()(y, 300), [y]), H = l.useCallback(e => {
    let t = new Set(null != e ? e : []);
    c(t), O(t)
  }, [O]), w = l.useCallback(e => {
    let {
      record: n
    } = e;
    return {
      id: n.id,
      value: n.id,
      label: n.name,
      leading: (0, r.jsx)(h.$, {
        role: n,
        guildId: t
      }, n.id)
    }
  }, [t]), S = l.useCallback((e, t) => {
    let n = new Map(v.map(e => [e.record.id, e]));
    return e.filter(e => {
      let r = n.get(e.value);
      if (null == r) returnfalse;
      let {
        record: l
      } = r;
      return o()(t.toLowerCase(), l.name.toLowerCase())
    })
  }, [v]);
  return (0, r.jsx)("div", {
    className: j.rolePopout,
    children: (0, r.jsx)(C.V, {
      label: g.intl.string(g.t.ZveC7e),
      hideLabel: true,
      placeholder: g.intl.string(g.t.ZveC7e),
      value: Array.from(a),
      onSelectionChange: H,
      options: v,
      formatOption: w,
      customMatchSorter: S,
      selectionMode: "multiple",
      autoFocus: true,
      closeOnSelect: false,
      shouldFocusWrap: true
    })
  })
}