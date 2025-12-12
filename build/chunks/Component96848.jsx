/** Chunk was on web.js **/
/** chunk id: 96848, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk907040 = require("./907040.jsx"),
  Chunk283066 = require("./283066.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk907728 = require("./907728.js");
let m = {
    section: Chunk981631.jXE.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
    openPopoutType: "gift_effect_emoji_picker"
  },
  h = Chunk185923.Hz.GIFT;

function g(e) {
  let {
    setEmojiConfetti: t,
    emojiConfetti: n
  } = e, [a, d] = i.useState(false), f = i.useRef(null), g = (0, u.Z)({
    location: "GiftEmoji"
  }), E = o()(_.text, g && _.refresh), b = e => (0, r.jsxs)("div", {
    className: _.customGiftContent,
    children: [(0, r.jsxs)("div", {
      className: _.customGiftHeader,
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
  return (0, r.jsx)(l.yRy, {
    targetElementRef: f,
    shouldShow: a,
    position: "bottom",
    align: "left",
    onRequestClose: () => d(false),
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(l.VqE, {
        children: (0, r.jsx)(c.Z, {
          analyticsOverride: m,
          closePopout: t,
          onSelectEmoji: y,
          wrapper: "div",
          pickerIntention: h,
          renderHeader: b,
          headerClassName: _.emojiHeader,
          className: _.emojiList,
          listHeaderClassName: _.emojiList,
          categoryListClassName: _.categoryList,
          searchProps: {
            accessory: (0, r.jsx)(r.Fragment, {})
          }
        })
      })
    },
    children: () => (0, r.jsx)(l.P3F, {
      className: o()(_.container, g && _.refresh),
      onClick: () => d(true),
      innerRef: f,
      children: (null == n ? true : n.name) == null ? (0, r.jsxs)("div", {
        className: _.contentContainer,
        children: [(0, r.jsx)(l.EO4, {
          size: "custom",
          color: g ? s.Z.colors.ICON_STRONG : s.Z.colors.WHITE,
          className: _.emojiIcon,
          width: 14,
          height: 14
        }), (0, r.jsx)(l.Text, {
          className: E,
          variant: "text-sm/semibold",
          lineClamp: 1,
          children: p.intl.string(p.t.Hl2Ige)
        })]
      }) : (0, r.jsxs)("div", {
        className: _.contentContainer,
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