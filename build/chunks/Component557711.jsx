/** Chunk was on 96750 **/
/** chunk id: 557711, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
    source: p,
    size: f,
    look: m,
    color: g,
    className: v,
    onAction: _
  } = e, {
    tooltip: b,
    loading: h,
    disabled: y,
    onClick: O
  } = (0, c.Fe)(t, n, p, s.ZP.getNickname(d, i, n)), j = () => {
    null == _ || _(), O()
  };
  return (0, r.jsx)(o.ua7, {
    text: b,
    children: e => {
      let {
        onMouseEnter: n,
        onMouseLeave: i
      } = e;
      return (0, r.jsx)(a.zx, {
        size: f,
        className: l()(u.syncButton, v),
        innerClassName: u.syncButtonInner,
        look: m,
        color: g,
        onClick: j,
        onMouseEnter: n,
        onMouseLeave: i,
        disabled: y,
        submitting: h,
        "aria-label": null != b ? b : t.name,
        children: (0, r.jsx)(o.iOO, {
          size: "xs",
          color: "currentColor"
        })
      })
    }
  })
}