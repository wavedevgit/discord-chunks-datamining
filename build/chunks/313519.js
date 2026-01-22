/** Chunk was on web.js **/
/** chunk id: 313519, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk788413 = require("./788413.js"),
  Chunk212245 = require("./212245.js"),
  Chunk60587 = require("./60587.js"),
  Chunk887695 = require("./887695.js");
let l = e => {
  let {
    columnCounts: t,
    stickersGrid: n,
    stickersListRef: l,
    store: c,
    gridNavigatorId: u,
    setInspectedStickerPosition: d,
    onGridItemSelect: f
  } = e, p = (0, a.p)(), _ = r.useCallback(e => {
    f(e, p)
  }, [f, p]), h = r.useCallback((e, t) => {
    d(e, t, s.t.GRID_NAVIGATOR_EVENT)
  }, [d]), {
    gridDispatch: m,
    getItemProps: g,
    getRowProps: E,
    gridContainerProps: b,
    handleGridContainerKeyDown: y,
    isUsingKeyboardNavigation: O
  } = (0, o.Ff)({
    columnCounts: t,
    gridNavigatorId: u,
    itemGrid: n,
    itemList: l,
    onGridNavigatorItemSelect: _,
    onGridNavigatorPositionChange: h
  });
  return r.useEffect(() => c.subscribe(e => e.inspectedExpressionPosition, e => {
    if (null == e) return;
    let {
      columnIndex: t,
      rowIndex: n,
      source: r
    } = e;
    r !== s.t.GRID_NAVIGATOR_EVENT && m({
      type: i.n.SET_FOCUSED_POSITION,
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