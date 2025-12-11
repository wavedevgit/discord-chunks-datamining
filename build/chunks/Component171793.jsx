/** Chunk was on 5890 **/
/** chunk id: 171793, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk455708 = require("./455708.jsx"),
  Chunk944486 = require("./944486.js"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk557142 = require("./557142.js");

function g(t) {
  let {
    transitionState: n,
    onClose: e,
    onGIFSelected: g,
    hideFavorites: p = false,
    modalTitle: C = u.intl.string(u.t["0VinIJ"]),
    defaultText: m = u.intl.string(u.t.OrwKgi)
  } = t, [v, j] = a.useState(null), [k, I] = a.useState(""), S = a.useCallback(t => {
    j(t), null == g || g(t)
  }, [g]), b = a.useCallback(async () => {
    if (null != v) {
      let t = r.Z.getChannelId();
      null != t && ("" !== k && await o.Z.sendMessage(t, {
        content: k,
        tts: false,
        invalidEmojis: [],
        validNonShortcutEmojis: []
      }, true, {
        location: c.dy.GIFTING
      }), await o.Z.sendMessage(t, {
        content: v.url,
        tts: false,
        invalidEmojis: [],
        validNonShortcutEmojis: []
      }, true, {
        location: c.dy.GIFTING
      }), await e())
    }
  }, [v, k, e]);
  return (0, i.jsx)(l.Modal, {
    transitionState: n,
    onClose: e,
    title: C,
    input: (0, i.jsx)(s.Kx8, {
      value: k,
      onChange: t => I(t),
      placeholder: m
    }),
    actions: [{
      variant: "secondary",
      text: u.intl.string(u.t["ETE/oC"]),
      onClick: e
    }, {
      variant: "primary",
      text: u.intl.string(u.t.TXNS7S),
      onClick: b,
      loading: false,
      disabled: null == v
    }],
    children: (0, i.jsx)(d.Z, {
      hideFavorites: p,
      onSelectGIF: S,
      selectedGIF: v,
      initialQuery: u.intl.string(u.t.jrtJi4),
      headerClassName: h.modalHeader
    })
  })
}