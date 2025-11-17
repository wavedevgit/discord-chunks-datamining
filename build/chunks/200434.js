/** Chunk was on web.js **/
/** chunk id: 200434, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => r
});
var r = {};
r = {
  deselectedItem: e => `Element ${e.item} ni izbran.`,
  longPressToSelect: `Za izbirni na\u{10D}in pritisnite in dlje \u{10D}asa dr\u{17E}ite.`,
  select: "Izberite",
  selectedAll: "Vsi elementi so izbrani.",
  selectedCount: (e, t) => `${t.plural(e.count,{"=0":"Noben element ni izbran",one:()=>`${t.number(e.count)} element je izbran`,other:()=>`${t.number(e.count)} elementov je izbranih`})}.`,
  selectedItem: e => `Element ${e.item} je izbran.`
}