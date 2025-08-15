/** Chunk was on 37720 **/
/** chunk id: 357632, original params: t,i,r (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk106351 = require("./106351.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk388032 = require("./388032.jsx");
let o = t => {
  let {
    channel: i,
    onClose: r,
    onConfirm: o,
    transitionState: c
  } = t, {
    title: d,
    body: h,
    confirm: x
  } = function(t) {
    let i = (0, l.ZP)(t, true);
    return t.type === e.d.GUILD_CATEGORY ? {
      title: s.intl.string(s.t["4VpUw8"]),
      body: s.intl.format(s.t.GuhMa2, {
        channelName: i
      }),
      confirm: s.intl.string(s.t.xOscRk)
    } : {
      title: s.intl.string(s.t["4VpUw8"]),
      body: s.intl.format(s.t["2z/hBg"], {
        channelName: i
      }),
      confirm: s.intl.string(s.t.gGs6TU)
    }
  }(i);
  return (0, n.jsxs)(a.Y0X, {
    transitionState: c,
    "aria-label": d,
    parentComponent: "RemoveFromFavoritesModal",
    children: [(0, n.jsx)(a.xBx, {
      separator: false,
      children: (0, n.jsx)(a.X6q, {
        variant: "heading-lg/semibold",
        children: d
      })
    }), (0, n.jsx)(a.hzk, {
      children: (0, n.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "header-primary",
        children: h
      })
    }), (0, n.jsx)(a.mzw, {
      children: (0, n.jsxs)(a.hE2, {
        direction: "horizontal-reverse",
        children: [(0, n.jsx)(a.zxk, {
          variant: "critical-primary",
          text: x,
          onClick: o
        }), (0, n.jsx)(a.zxk, {
          variant: "secondary",
          text: s.intl.string(s.t["ETE/oK"]),
          onClick: r
        })]
      })
    })]
  })
}