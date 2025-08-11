/** Chunk was on web.js **/
/** chunk id: 181958, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk380818 = require("./380818.js");
let l = e => {
    let {
      data: t,
      disabled: n
    } = e, {
      content: i,
      className: l,
      onClick: c,
      disabled: u
    } = t;
    return <a.tEY><button type={"button"} className={o()(s.item, l)} onClick={c} disabled={n || u}>{i}</button></a.tEY>
  },
  c = e => {
    let {
      buttons: t,
      disabled: n,
      className: i
    } = e;
    return <div role={"group"} className={o()(s.group, i)}>{t.map((e, t) => (0, r.jsx)(l, {
        data: e,
        disabled: n
      }, t))}</div>
  }