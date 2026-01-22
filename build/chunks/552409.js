/** Chunk was on web.js **/
/** chunk id: 552409, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => r
});
var r = {};
r = {
  deselectedItem: e => `${e.item} nincs kijel\xf6lve.`,
  longPressToSelect: "Nyomja hosszan a kijel\xf6l\xe9shez.",
  select: "Kijel\xf6l\xe9s",
  selectedAll: "Az \xf6sszes elem kijel\xf6lve.",
  selectedCount: (e, t) => `${t.plural(e.count,{"=0":"Egy elem sincs kijel\xf6lve",one:()=>`${t.number(e.count)} elem kijel\xf6lve`,other:()=>`${t.number(e.count)} elem kijel\xf6lve`})}.`,
  selectedItem: e => `${e.item} kijel\xf6lve.`
}