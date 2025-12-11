/** Chunk was on 6850 **/
/** chunk id: 42551, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk658722 = require("./658722.js"),
  a = require.n(Chunk658722),
  Chunk954955 = require("./954955.js"),
  s = require.n(Chunk954955),
  Chunk498607 = require("./498607.js"),
  d = require.n(Chunk498607),
  Chunk399606 = require("./399606.js"),
  Chunk333200 = require("./333200.jsx"),
  Chunk563115 = require("./563115.jsx"),
  Chunk910693 = require("./910693.js"),
  Chunk893966 = require("./893966.js"),
  Chunk527379 = require("./527379.js"),
  Chunk285173 = require("./285173.jsx"),
  Chunk388032 = require("./388032.jsx");
let j = new Set;

function x(e) {
  let {
    guildId: t
  } = e, n = (0, b.BG)(t), i = (0, u.e7)([f.Z], () => f.Z.getSearchStateByGuildId(t), [t], d()), [o, c] = l.useState(i.selectedRoleIds), x = (0, m.h)(t, j, true), v = l.useCallback(e => {
    (0, p.Dr)(t, {
      selectedRoleIds: e
    }), n(e)
  }, [t, n]), y = l.useMemo(() => s()(v, 300), [v]), O = l.useCallback(e => {
    let t = new Set(null != e ? e : []);
    c(t), y(t)
  }, [y]), H = l.useCallback(e => {
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
  }, [t]), w = l.useCallback((e, t) => {
    let n = new Map(x.map(e => [e.record.id, e]));
    return e.filter(e => {
      let r = n.get(e.value);
      if (null == r) returnfalse;
      let {
        record: l
      } = r;
      return a()(t.toLowerCase(), l.name.toLowerCase())
    })
  }, [x]);
  return (0, r.jsx)(C.V, {
    label: g.intl.string(g.t.ZveC7e),
    hideLabel: true,
    placeholder: g.intl.string(g.t.ZveC7e),
    value: Array.from(o),
    onSelectionChange: O,
    options: x,
    formatOption: H,
    customMatchSorter: w,
    selectionMode: "multiple",
    autoFocus: true,
    closeOnSelect: false,
    shouldFocusWrap: true
  })
}