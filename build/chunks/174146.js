/** Chunk was on web.js **/
/** chunk id: 174146, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => r
});
var r = {};
r = {
  deselectedItem: e => `${e.item} ej markerat.`,
  longPressToSelect: "Tryck l\xe4nge n\xe4r du vill \xf6ppna v\xe4ljarl\xe4ge.",
  select: "Markera",
  selectedAll: "Alla markerade objekt.",
  selectedCount: (e, t) => `${t.plural(e.count,{"=0":"Inga markerade objekt",one:()=>`${t.number(e.count)} markerat objekt`,other:()=>`${t.number(e.count)} markerade objekt`})}.`,
  selectedItem: e => `${e.item} markerat.`
}