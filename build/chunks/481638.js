/** Chunk was on web.js **/
/** chunk id: 481638, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => _
});
var Chunk224507 = require("./224507.js"),
  Chunk825733 = require("./825733.js"),
  Chunk408713 = require("./408713.js"),
  Chunk807177 = require("./807177.js"),
  Chunk803082 = require("./803082.js"),
  Chunk64700 = require("./64700.js"),
  Chunk8321 = require("./8321.js"),
  Chunk946020 = require("./946020.js"),
  Chunk788951 = require("./788951.js"),
  Chunk47276 = require("./47276.js");

function p(e) {
  return e && e.__esModule ? e.default : e
}

function _(e, t, n) {
  var _, h;
  let m, g, {
      node: E
    } = e,
    y = E.props.allowsSorting,
    {
      gridCellProps: b
    } = (0, d.Q)({
      ...e,
      focusMode: "child"
    }, t, n),
    O = E.props.isSelectionCell && "single" === t.selectionManager.selectionMode,
    {
      pressProps: v
    } = (0, c.d)({
      isDisabled: !y || O,
      onPress() {
        t.sort(E.key)
      },
      ref: n
    }),
    {
      focusableProps: A
    } = (0, u.Wc)({}, n),
    I = (null == (_ = t.sortDescriptor) ? true : _.column) === E.key,
    S = null == (h = t.sortDescriptor) ? true : h.direction;
  E.props.allowsSorting && !(0, a.m0)() && (g = I ? S : "none");
  let T = (0, f.o)(p(i.A), "@react-aria/table");
  y && (m = `${T.format("sortable")}`, I && S && (0, a.m0)() && (m = `${m}, ${T.format(S)}`));
  let C = (0, o.I)(m),
    N = 0 === t.collection.size;
  return (0, l.useEffect)(() => {
    N && t.selectionManager.focusedKey === E.key && t.selectionManager.setFocusedKey(null)
  }, [N, t.selectionManager, E.key]), {
    columnHeaderProps: {
      ...(0, s.v)(A, b, v, C, N ? {
        tabIndex: false
      } : null),
      role: "columnheader",
      id: (0, r.zD)(t, E.key),
      "aria-colspan": E.colSpan && E.colSpan > 1 ? E.colSpan : true,
      "aria-sort": g
    }
  }
}