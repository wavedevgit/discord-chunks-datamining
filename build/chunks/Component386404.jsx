/** Chunk was on 35894 **/
/** chunk id: 386404, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk91871 = require("./91871.js"),
  o = require.n(Chunk91871),
  Chunk111956 = require("./111956.js"),
  s = require.n(Chunk111956),
  Chunk33851 = require("./33851.js"),
  d = require.n(Chunk33851),
  Chunk417597 = require("./417597.js"),
  Chunk783878 = require("./783878.jsx"),
  Chunk57222 = require("./57222.jsx"),
  Chunk504049 = require("./504049.js"),
  Chunk266047 = require("./266047.js"),
  Chunk221950 = require("./221950.js"),
  Chunk950072 = require("./950072.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk246542 = require("./246542.js");
let x = new Set;

function y(e) {
  let {
    guildId: t
  } = e, n = (0, b.hs)(t), i = (0, u.bG)([m.A], () => m.A.getSearchStateByGuildId(t), [t], d()), [a, c] = l.useState(i.selectedRoleIds), y = (0, f.H)(t, x, true), O = l.useCallback(e => {
    (0, p.Ld)(t, {
      selectedRoleIds: e
    }), n(e)
  }, [t, n]), v = l.useMemo(() => s()(O, 300), [O]), H = l.useCallback(e => {
    let t = new Set(null != e ? e : []);
    c(t), v(t)
  }, [v]), w = l.useCallback(e => {
    let {
      record: n
    } = e;
    return {
      id: n.id,
      value: n.id,
      label: n.name,
      leading: (0, r.jsx)(j.C, {
        role: n,
        guildId: t
      }, n.id)
    }
  }, [t]), A = l.useCallback((e, t) => {
    let n = new Map(y.map(e => [e.record.id, e]));
    return e.filter(e => {
      let r = n.get(e.value);
      if (null == r) returnfalse;
      let {
        record: l
      } = r;
      return o()(t.toLowerCase(), l.name.toLowerCase())
    })
  }, [y]);
  return (0, r.jsx)("div", {
    className: h.qm,
    children: (0, r.jsx)(C.Z, {
      label: g.intl.string(g.t.ZveC7e),
      hideLabel: true,
      placeholder: g.intl.string(g.t.ZveC7e),
      value: Array.from(a),
      onSelectionChange: H,
      options: y,
      formatOption: w,
      customMatchSorter: A,
      selectionMode: "multiple",
      autoFocus: true,
      closeOnSelect: false,
      shouldFocusWrap: true
    })
  })
}