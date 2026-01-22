/** Chunk was on web.js **/
/** chunk id: 351839, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => r
});
var r = {};
r = {
  deselectedItem: e => `${e.item} non s\xe9lectionn\xe9.`,
  longPressToSelect: "Appuyez de mani\xe8re prolong\xe9e pour passer en mode de s\xe9lection.",
  select: "S\xe9lectionner",
  selectedAll: "Tous les \xe9l\xe9ments s\xe9lectionn\xe9s.",
  selectedCount: (e, t) => `${t.plural(e.count,{"=0":"Aucun \xe9l\xe9ment s\xe9lectionn\xe9",one:()=>`${t.number(e.count)} \xe9l\xe9ment s\xe9lectionn\xe9`,other:()=>`${t.number(e.count)} \xe9l\xe9ments s\xe9lectionn\xe9s`})}.`,
  selectedItem: e => `${e.item} s\xe9lectionn\xe9.`
}