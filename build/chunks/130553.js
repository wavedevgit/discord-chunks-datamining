/** Chunk was on web.js **/
/** chunk id: 130553, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => p
});
var Chunk709629 = require("./709629.js"),
  Chunk388196 = require("./388196.js"),
  Chunk88058 = require("./88058.js"),
  Chunk24645 = require("./24645.js"),
  Chunk586235 = require("./586235.js"),
  Chunk647438 = require("./647438.js"),
  Chunk146810 = require("./146810.js"),
  Chunk600711 = require("./600711.js"),
  Chunk839161 = require("./839161.js"),
  Chunk792160 = require("./792160.js");

function _(e) {
  return e && e.__esModule ? e.default : e
}

function p(e, t, n) {
  var p, h;
  let m, g, {
      node: E
    } = e,
    b = E.props.allowsSorting,
    {
      gridCellProps: y
    } = (0, d.n)({
      ...e,
      focusMode: "child"
    }, t, n),
    O = E.props.isSelectionCell && "single" === t.selectionManager.selectionMode,
    {
      pressProps: v
    } = (0, c.r)({
      isDisabled: !b || O,
      onPress() {
        t.sort(E.key)
      },
      ref: n
    }),
    {
      focusableProps: I
    } = (0, u.kc)({}, n),
    T = (null == (p = t.sortDescriptor) ? true : p.column) === E.key,
    S = null == (h = t.sortDescriptor) ? true : h.direction;
  E.props.allowsSorting && !(0, a.Dt)() && (g = T ? S : "none");
  let A = (0, f.q)(_(i.Z), "@react-aria/table");
  b && (m = `${A.format("sortable")}`, T && S && (0, a.Dt)() && (m = `${m}, ${A.format(S)}`));
  let C = (0, o.P)(m),
    N = 0 === t.collection.size;
  return (0, l.useEffect)(() => {
    N && t.selectionManager.focusedKey === E.key && t.selectionManager.setFocusedKey(null)
  }, [N, t.selectionManager, E.key]), {
    columnHeaderProps: {
      ...(0, s.d)(I, y, v, C, N ? {
        tabIndex: false
      } : null),
      role: "columnheader",
      id: (0, r.z9)(t, E.key),
      "aria-colspan": E.colSpan && E.colSpan > 1 ? E.colSpan : true,
      "aria-sort": g
    }
  }
}