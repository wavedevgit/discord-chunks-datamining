/** Chunk was on 5890 **/
/** chunk id: 171793, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk455708 = require("./455708.jsx"),
  Chunk944486 = require("./944486.js"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx");

function h(t) {
  let {
    transitionState: i,
    onClose: n,
    onGIFSelected: h,
    hideFavorites: g = false,
    modalTitle: p = u.intl.string(u.t["0VinIJ"]),
    defaultText: C = u.intl.string(u.t.OrwKgi)
  } = t, [v, j] = l.useState(null), [k, I] = l.useState(""), S = l.useCallback(t => {
    j(t), null == h || h(t)
  }, [h]), w = l.useCallback(async () => {
    if (null != v) {
      let t = c.Z.getChannelId();
      null != t && ("" !== k && await o.Z.sendMessage(t, {
        content: k,
        tts: false,
        invalidEmojis: [],
        validNonShortcutEmojis: []
      }, true, {
        location: d.dy.GIFTING
      }), await o.Z.sendMessage(t, {
        content: v.url,
        tts: false,
        invalidEmojis: [],
        validNonShortcutEmojis: []
      }, true, {
        location: d.dy.GIFTING
      }), await n())
    }
  }, [v, k, n]);
  return (0, a.jsx)(e.Modal, {
    transitionState: i,
    onClose: n,
    title: p,
    input: (0, a.jsx)(s.Kx8, {
      value: k,
      onChange: t => I(t),
      placeholder: C
    }),
    actions: [{
      variant: "secondary",
      text: u.intl.string(u.t["ETE/oC"]),
      onClick: n
    }, {
      variant: "primary",
      text: u.intl.string(u.t.TXNS7S),
      onClick: w,
      loading: false,
      disabled: null == v
    }],
    children: (0, a.jsx)(r.Z, {
      hideFavorites: g,
      onSelectGIF: S,
      selectedGIF: v,
      initialQuery: u.intl.string(u.t.jrtJi4)
    })
  })
}