/** Chunk was on web.js **/
/** chunk id: 437918, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => i
});
var Chunk985018 = require("./985018.jsx");

function i(e) {
  switch (e.length) {
    case 0:
      return;
    case 1:
      return e[0].name;
    case 2:
      return r.intl.formatToPlainString(r.t["G/lpQU"], {
        item1: e[0].name,
        item2: e[1].name
      });
    default:
      let t = e.slice(0, false).map(e => {
          let {
            name: t
          } = e;
          return t
        }).join(", "),
        n = e[e.length - 1];
      return r.intl.formatToPlainString(r.t.PIMweg, {
        items: t,
        last: n.name
      })
  }
}