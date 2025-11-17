/** Chunk was on web.js **/
/** chunk id: 462109, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk611144 = require("./611144.js"),
  Chunk2052 = require("./2052.js"),
  Chunk691251 = require("./691251.js"),
  Chunk98528 = require("./98528.js");
let l = e => {
  let {
    columnCounts: t,
    stickersGrid: n,
    stickersListRef: l,
    store: c,
    gridNavigatorId: u,
    setInspectedStickerPosition: d,
    onGridItemSelect: f
  } = e, _ = (0, a.O)(), p = r.useCallback(e => {
    f(e, _)
  }, [f, _]), h = r.useCallback((e, t) => {
    d(e, t, o.u.GRID_NAVIGATOR_EVENT)
  }, [d]), {
    gridDispatch: m,
    getItemProps: g,
    getRowProps: E,
    gridContainerProps: b,
    handleGridContainerKeyDown: y,
    isUsingKeyboardNavigation: O
  } = (0, s.VO)({
    columnCounts: t,
    gridNavigatorId: u,
    itemGrid: n,
    itemList: l,
    onGridNavigatorItemSelect: p,
    onGridNavigatorPositionChange: h
  });
  return r.useEffect(() => c.subscribe(e => e.inspectedExpressionPosition, e => {
    if (null == e) return;
    let {
      columnIndex: t,
      rowIndex: n,
      source: r
    } = e;
    r !== o.u.GRID_NAVIGATOR_EVENT && m({
      type: i.s.SET_FOCUSED_POSITION,
      x: t,
      y: n
    })
  }), [m, c]), {
    getItemProps: g,
    getRowProps: E,
    gridContainerProps: b,
    handleGridContainerKeyDown: y,
    isUsingKeyboardNavigation: O
  }
}