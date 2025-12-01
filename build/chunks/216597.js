/** Chunk was on web.js **/
/** chunk id: 216597, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => _
});
var Chunk455419 = require("./455419.js"),
  Chunk478906 = require("./478906.js"),
  Chunk21814 = require("./21814.js"),
  Chunk645537 = require("./645537.js"),
  Chunk158821 = require("./158821.js"),
  Chunk473749 = require("./473749.js"),
  Chunk226098 = require("./226098.js"),
  Chunk497448 = require("./497448.js"),
  Chunk90809 = require("./90809.js"),
  Chunk218769 = require("./218769.js");

function p(e) {
  return e && e.__esModule ? e.default : e
}

function _(e, t, n) {
  var _, m;
  let h, g, {
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
      focusableProps: S
    } = (0, u.kc)({}, n),
    I = (null == (_ = t.sortDescriptor) ? true : _.column) === E.key,
    T = null == (m = t.sortDescriptor) ? true : m.direction;
  E.props.allowsSorting && !(0, a.Dt)() && (g = I ? T : "none");
  let A = (0, f.q)(p(i.Z), "@react-aria/table");
  b && (h = `${A.format("sortable")}`, I && T && (0, a.Dt)() && (h = `${h}, ${A.format(T)}`));
  let C = (0, o.P)(h),
    N = 0 === t.collection.size;
  return (0, l.useEffect)(() => {
    N && t.selectionManager.focusedKey === E.key && t.selectionManager.setFocusedKey(null)
  }, [N, t.selectionManager, E.key]), {
    columnHeaderProps: {
      ...(0, s.d)(S, y, v, C, N ? {
        tabIndex: false
      } : null),
      role: "columnheader",
      id: (0, r.z9)(t, E.key),
      "aria-colspan": E.colSpan && E.colSpan > 1 ? E.colSpan : true,
      "aria-sort": g
    }
  }
}