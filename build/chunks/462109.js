/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  t: () => l
});
var r = n(192379),
  i = n(611144),
  o = n(2052),
  a = n(691251),
  s = n(98528);
let l = e => {
  let {
    columnCounts: t,
    stickersGrid: n,
    stickersListRef: l,
    store: c,
    gridNavigatorId: u,
    setInspectedStickerPosition: d,
    onGridItemSelect: f
  } = e, p = (0, o.O)(), _ = r.useCallback(e => {
    f(e, p)
  }, [f, p]), h = r.useCallback((e, t) => {
    d(e, t, a.u.GRID_NAVIGATOR_EVENT)
  }, [d]), {
    gridDispatch: m,
    getItemProps: g,
    getRowProps: E,
    gridContainerProps: v,
    handleGridContainerKeyDown: b,
    isUsingKeyboardNavigation: y
  } = (0, s.VO)({
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
    r !== a.u.GRID_NAVIGATOR_EVENT && m({
      type: i.s.SET_FOCUSED_POSITION,
      x: t,
      y: n
    })
  }), [m, c]), {
    getItemProps: g,
    getRowProps: E,
    gridContainerProps: v,
    handleGridContainerKeyDown: b,
    isUsingKeyboardNavigation: y
  }
}