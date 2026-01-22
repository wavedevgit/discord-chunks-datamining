/** Chunk was on web.js **/
/** chunk id: 622993, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => r
});
var r = {};
r = {
  deselectedItem: e => `Kohdetta ${e.item} ei valittu.`,
  longPressToSelect: "Siirry valintatilaan painamalla pitk\xe4\xe4n.",
  select: "Valitse",
  selectedAll: "Kaikki kohteet valittu.",
  selectedCount: (e, t) => `${t.plural(e.count,{"=0":"Ei yht\xe4\xe4n kohdetta valittu",one:()=>`${t.number(e.count)} kohde valittu`,other:()=>`${t.number(e.count)} kohdetta valittu`})}.`,
  selectedItem: e => `${e.item} valittu.`
}