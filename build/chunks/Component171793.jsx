/** Chunk was on 5890 **/
/** chunk id: 171793, original params: t,n,a (module,exports,require) **/
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
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk557142 = require("./557142.js");

function g(t) {
  let {
    transitionState: n,
    onClose: a,
    onGIFSelected: g,
    hideFavorites: p = false,
    modalTitle: b = m.intl.string(m.t["0VinIJ"]),
    defaultText: N = m.intl.string(m.t.OrwKgi),
    giftIntentType: S,
    analyticsLocationHistory: _
  } = t, [f, k] = i.useState(null), [E, I] = i.useState(""), v = i.useCallback(t => {
    k(t), null == g || g(t)
  }, [g]), j = i.useCallback(async () => {
    if (null != f) {
      let t = r.Z.getChannelId();
      null != t && ("" !== E && await s.Z.sendMessage(t, {
        content: E,
        tts: false,
        invalidEmojis: [],
        validNonShortcutEmojis: []
      }, true, {
        location: C.dy.GIFTING
      }), await s.Z.sendMessage(t, {
        content: f.url,
        tts: false,
        invalidEmojis: [],
        validNonShortcutEmojis: []
      }, true, {
        location: C.dy.GIFTING
      }), null != S && c.default.track(u.rMx.GIFT_INTENT_MESSAGE_SENT, {
        gift_intent_type: S,
        location_stack: _
      }), await a())
    }
  }, [f, E, a, S, _]);
  return (0, e.jsx)(l.Modal, {
    transitionState: n,
    onClose: a,
    title: b,
    input: (0, e.jsx)(o.Kx8, {
      value: E,
      onChange: t => I(t),
      placeholder: N
    }),
    actions: [{
      variant: "secondary",
      text: m.intl.string(m.t["ETE/oC"]),
      onClick: a
    }, {
      variant: "primary",
      text: m.intl.string(m.t.TXNS7S),
      onClick: j,
      loading: false,
      disabled: null == f
    }],
    children: (0, e.jsx)(d.Z, {
      hideFavorites: p,
      onSelectGIF: v,
      selectedGIF: f,
      initialQuery: m.intl.string(m.t.jrtJi4),
      className: h.modalContainer,
      headerClassName: h.modalHeader,
      contentClassName: h.modalContent
    })
  })
}