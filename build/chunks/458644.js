/** Chunk was on web.js **/
/** chunk id: 458644, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => r
});
var r = {};
r = {
  deselectedItem: e => `${e.item} niet geselecteerd.`,
  longPressToSelect: "Druk lang om de selectiemodus te openen.",
  select: "Selecteren",
  selectedAll: "Alle items geselecteerd.",
  selectedCount: (e, t) => `${t.plural(e.count,{"=0":"Geen items geselecteerd",one:()=>`${t.number(e.count)} item geselecteerd`,other:()=>`${t.number(e.count)} items geselecteerd`})}.`,
  selectedItem: e => `${e.item} geselecteerd.`
}