/** Chunk was on 95501 **/
/** chunk id: 367516, original params: t,n,a (module,exports,require) **/
require.d(exports, {
  default: () => g
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

function g(t) {
  let {
    transitionState: n,
    onClose: a,
    onGIFSelected: g,
    hideFavorites: j = false,
    modalTitle: p = _.intl.string(_.t["0VinIJ"]),
    defaultText: E = _.intl.string(_.t.OrwKgi),
    giftIntentType: m,
    analyticsLocationHistory: N
  } = t, [S, k] = i.useState(null), [I, T] = i.useState(""), f = i.useCallback(t => {
    k(t), null == g || g(t)
  }, [g]), v = i.useCallback(async () => {
    if (null != S) {
      let t = r.A.getChannelId();
      null != t && ("" !== I && await o.A.sendMessage(t, {
        content: I,
        tts: false,
        invalidEmojis: [],
        validNonShortcutEmojis: []
      }, true, {
        location: C.Hx.GIFTING
      }), await o.A.sendMessage(t, {
        content: S.url,
        tts: false,
        invalidEmojis: [],
        validNonShortcutEmojis: []
      }, true, {
        location: C.Hx.GIFTING
      }), null != m && d.default.track(u.HAw.GIFT_INTENT_MESSAGE_SENT, {
        gift_intent_type: m,
        location_stack: N
      }), await a())
    }
  }, [S, I, a, m, N]);
  return (0, e.jsx)(l.Modal, {
    transitionState: n,
    onClose: a,
    title: p,
    input: (0, e.jsx)(s.fs1, {
      value: I,
      onChange: t => T(t),
      placeholder: E
    }),
    actions: [{
      variant: "secondary",
      text: _.intl.string(_.t["ETE/oC"]),
      onClick: a
    }, {
      variant: "primary",
      text: _.intl.string(_.t.TXNS7S),
      onClick: v,
      loading: false,
      disabled: null == S
    }],
    children: (0, e.jsx)(c.A, {
      hideFavorites: j,
      onSelectGIF: f,
      selectedGIF: S,
      initialQuery: _.intl.string(_.t.jrtJi4),
      className: h.jT,
      headerClassName: h.Hc,
      contentClassName: h.jE
    })
  })
}