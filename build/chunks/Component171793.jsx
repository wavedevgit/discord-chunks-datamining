/** Chunk was on 5890 **/
/** chunk id: 171793, original params: t,n,a (module,exports,require) **/
require.d(exports, {
  default: () => C
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

function C(t) {
  let {
    transitionState: n,
    onClose: a,
    onGIFSelected: C,
    hideFavorites: S = false,
    modalTitle: k = g.intl.string(g.t["0VinIJ"]),
    defaultText: E = g.intl.string(g.t.OrwKgi),
    giftIntentType: I,
    analyticsLocationHistory: m
  } = t, [v, N] = i.useState(null), [_, f] = i.useState(""), j = i.useCallback(t => {
    N(t), null == C || C(t)
  }, [C]), x = i.useCallback(async () => {
    if (null != v) {
      let t = r.Z.getChannelId();
      null != t && ("" !== _ && await o.Z.sendMessage(t, {
        content: _,
        tts: false,
        invalidEmojis: [],
        validNonShortcutEmojis: []
      }, true, {
        location: h.dy.GIFTING
      }), await o.Z.sendMessage(t, {
        content: v.url,
        tts: false,
        invalidEmojis: [],
        validNonShortcutEmojis: []
      }, true, {
        location: h.dy.GIFTING
      }), null != I && c.default.track(u.rMx.GIFT_INTENT_MESSAGE_SENT, {
        gift_intent_type: I,
        location_stack: m
      }), await a())
    }
  }, [v, _, a, I, m]);
  return (0, e.jsx)(l.Modal, {
    transitionState: n,
    onClose: a,
    title: k,
    input: (0, e.jsx)(s.Kx8, {
      value: _,
      onChange: t => f(t),
      placeholder: E
    }),
    actions: [{
      variant: "secondary",
      text: g.intl.string(g.t["ETE/oC"]),
      onClick: a
    }, {
      variant: "primary",
      text: g.intl.string(g.t.TXNS7S),
      onClick: x,
      loading: false,
      disabled: null == v
    }],
    children: (0, e.jsx)(d.Z, {
      hideFavorites: S,
      onSelectGIF: j,
      selectedGIF: v,
      initialQuery: g.intl.string(g.t.jrtJi4),
      headerClassName: p.modalHeader
    })
  })
}