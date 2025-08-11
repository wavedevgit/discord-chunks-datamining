/** Chunk was on web.js **/
/** chunk id: 504983, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => l,
  Z: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk933282 = require("./933282.js"),
  l = function(e) {
    return e.PREMIUM = "premium", e.LIMITED = "limited", e
  }({});
let c = {
    premium: {
      border: Chunk933282.premiumFeatureBorder,
      background: Chunk933282.premiumBackground
    },
    limited: {
      border: Chunk933282.limitedFeatureBorder,
      background: Chunk933282.limitedBackground
    }
  },
  u = Chunk73800.forwardRef(function(e, t) {
    let {
      children: n,
      type: i = "premium",
      isShown: o,
      hasBackground: l = false,
      className: u,
      backgroundClassName: d
    } = e;
    if (!o) return n;
    let {
      border: f,
      background: _
    } = c[i];
    return <div ref={t} className={a()(f, u)}><div className={a()(l ? _ : s.background, d)}>{n}</div></div>
  })