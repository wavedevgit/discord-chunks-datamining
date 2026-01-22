/** Chunk was on 95501 **/
/** chunk id: 367516, original params: t,n,a (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk843472 = require("./843472.js"),
  Chunk855057 = require("./855057.jsx"),
  Chunk309010 = require("./309010.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk381941 = require("./381941.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk787790 = require("./787790.js");

function p(t) {
  let {
    transitionState: n,
    onClose: a,
    onGIFSelected: p,
    hideFavorites: C = false,
    modalTitle: E = g.intl.string(g.t["0VinIJ"]),
    defaultText: b = g.intl.string(g.t.OrwKgi),
    giftIntentType: N,
    analyticsLocationHistory: S
  } = t, [k, I] = i.useState(null), [T, v] = i.useState(""), _ = i.useCallback(t => {
    I(t), null == p || p(t)
  }, [p]), f = i.useCallback(async () => {
    if (null != k) {
      let t = r.A.getChannelId();
      null != t && ("" !== T && await o.A.sendMessage(t, {
        content: T,
        tts: false,
        invalidEmojis: [],
        validNonShortcutEmojis: []
      }, true, {
        location: h.Hx.GIFTING
      }), await o.A.sendMessage(t, {
        content: k.url,
        tts: false,
        invalidEmojis: [],
        validNonShortcutEmojis: []
      }, true, {
        location: h.Hx.GIFTING
      }), null != N && d.default.track(u.HAw.GIFT_INTENT_MESSAGE_SENT, {
        gift_intent_type: N,
        location_stack: S
      }), await a())
    }
  }, [k, T, a, N, S]);
  return (0, e.jsx)(l.Modal, {
    transitionState: n,
    onClose: a,
    title: E,
    input: (0, e.jsx)(s.fs1, {
      value: T,
      onChange: t => v(t),
      placeholder: b
    }),
    actions: [{
      variant: "secondary",
      text: g.intl.string(g.t["ETE/oC"]),
      onClick: a
    }, {
      variant: "primary",
      text: g.intl.string(g.t.TXNS7S),
      onClick: f,
      loading: false,
      disabled: null == k
    }],
    children: (0, e.jsx)(c.A, {
      hideFavorites: C,
      onSelectGIF: _,
      selectedGIF: k,
      initialQuery: g.intl.string(g.t.jrtJi4),
      className: j.jT,
      headerClassName: j.Hc,
      contentClassName: j.jE
    })
  })
}