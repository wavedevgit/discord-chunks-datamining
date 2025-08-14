/** Chunk was on web.js **/
/** chunk id: 557711, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk5192 = require("./5192.js"),
  Chunk829820 = require("./829820.js"),
  Chunk191242 = require("./191242.js");

function d(e) {
  let {
    activity: t,
    user: n,
    channelId: i,
    guildId: d,
    source: f,
    size: _,
    look: p,
    color: h,
    className: m,
    onAction: g
  } = e, {
    tooltip: E,
    loading: b,
    disabled: y,
    onClick: O
  } = (0, c.Fe)(t, n, f, l.ZP.getNickname(d, i, n)), v = () => {
    null == g || g(), O()
  };
  return (0, r.jsx)(s.ua7, {
    text: E,
    children: e => {
      let {
        onMouseEnter: n,
        onMouseLeave: i
      } = e;
      return (0, r.jsx)(a.zx, {
        size: _,
        className: o()(u.syncButton, m),
        innerClassName: u.syncButtonInner,
        look: p,
        color: h,
        onClick: v,
        onMouseEnter: n,
        onMouseLeave: i,
        disabled: y,
        submitting: b,
        "aria-label": null != E ? E : t.name,
        children: (0, r.jsx)(s.iOO, {
          size: "xs",
          color: "currentColor"
        })
      })
    }
  })
}