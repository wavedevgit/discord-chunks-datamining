/** Chunk was on web.js **/
/** chunk id: 238017, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js"), require("./747238.js"), require("./812715.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk937773 = require("./937773.jsx"),
  Chunk170887 = require("./170887.js"),
  Chunk652215 = require("./652215.js"),
  Chunk307731 = require("./307731.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk752729 = require("./752729.js");
let h = {
    section: Chunk652215.JJy.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
    openPopoutType: "gift_effect_emoji_picker"
  },
  m = Chunk307731.b_.GIFT;

function g(e) {
  let {
    setEmojiConfetti: t,
    emojiConfetti: n
  } = e, [a, d] = i.useState(false), f = i.useRef(null), g = (0, u.A)({
    location: "GiftEmoji"
  }), E = s()(_.Qq, g && _.Ow), b = e => (0, r.jsxs)("div", {
    className: _.ZC,
    children: [(0, r.jsxs)("div", {
      className: _.Ry,
      children: [(0, r.jsx)(l.Text, {
        variant: "text-md/bold",
        children: p.intl.string(p.t.Hl2Ige)
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: p.intl.string(p.t.stGFA3)
      })]
    }), e]
  }), y = e => {
    let {
      emoji: n
    } = e;
    null != t && (t(n), d(false))
  };
  return (0, r.jsx)(l.YNO, {
    targetElementRef: f,
    shouldShow: a,
    position: "bottom",
    align: "left",
    onRequestClose: () => d(false),
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(l.lGe, {
        children: (0, r.jsx)(c.A, {
          analyticsOverride: h,
          closePopout: t,
          onSelectEmoji: y,
          wrapper: "div",
          pickerIntention: m,
          renderHeader: b,
          headerClassName: _.a8,
          className: _.vX,
          listHeaderClassName: _.vX,
          categoryListClassName: _.jv,
          searchProps: {
            accessory: (0, r.jsx)(r.Fragment, {})
          }
        })
      })
    },
    children: () => (0, r.jsx)(l.DUT, {
      className: s()(_.kL, g && _.Ow),
      onClick: () => d(true),
      innerRef: f,
      children: (null == n ? true : n.name) == null ? (0, r.jsxs)("div", {
        className: _.hQ,
        children: [(0, r.jsx)(l.nm2, {
          size: "custom",
          color: g ? o.A.colors.ICON_STRONG : o.A.colors.WHITE,
          className: _.mI,
          width: 14,
          height: 14
        }), (0, r.jsx)(l.Text, {
          className: E,
          variant: "text-sm/semibold",
          lineClamp: 1,
          children: p.intl.string(p.t.Hl2Ige)
        })]
      }) : (0, r.jsxs)("div", {
        className: _.hQ,
        children: [(0, r.jsx)(l.Text, {
          className: E,
          variant: "text-sm/semibold",
          children: null == n.guildId ? n.optionallyDiverseSequence : null
        }), (0, r.jsx)(l.Text, {
          className: E,
          variant: "text-sm/semibold",
          lineClamp: 1,
          children: n.name.replace(/_/g, " ")
        })]
      })
    })
  })
}