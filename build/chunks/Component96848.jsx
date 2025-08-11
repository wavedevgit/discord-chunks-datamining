/** Chunk was on web.js **/
/** chunk id: 96848, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk907040 = require("./907040.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk853464 = require("./853464.js");
let d = {
    section: Chunk981631.jXE.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
    openPopoutType: "gift_effect_emoji_picker"
  },
  f = Chunk185923.Hz.GIFT;

function _(e) {
  let {
    setEmojiConfetti: t,
    emojiConfetti: n
  } = e, [s, l] = i.useState(false), _ = i.useRef(null), p = e => (0, r.jsxs)("div", {
    className: u.customGiftContent,
    children: [(0, r.jsxs)("div", {
      className: u.customGiftHeader,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-md/bold",
        children: c.intl.string(c.t.Hl2IgY)
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: c.intl.string(c.t.stGFAw)
      })]
    }), e]
  }), h = e => {
    let {
      emoji: n
    } = e;
    null != t && (t(n), l(false))
  };
  return (0, r.jsx)(o.yRy, {
    targetElementRef: _,
    shouldShow: s,
    position: "bottom",
    align: "left",
    onRequestClose: () => l(false),
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(o.VqE, {
        children: (0, r.jsx)(a.Z, {
          analyticsOverride: d,
          closePopout: t,
          onSelectEmoji: h,
          wrapper: "div",
          pickerIntention: f,
          renderHeader: p,
          headerClassName: u.emojiHeader,
          className: u.emojiList,
          listHeaderClassName: u.emojiList,
          categoryListClassName: u.categoryList,
          searchProps: {
            accessory: (0, r.jsx)(r.Fragment, {})
          }
        })
      })
    },
    children: () => (0, r.jsx)(o.P3F, {
      className: u.container,
      onClick: () => l(true),
      innerRef: _,
      children: (null == n ? true : n.name) == null ? (0, r.jsxs)("div", {
        className: u.contentContainer,
        children: [(0, r.jsx)(o.EO4, {
          size: "custom",
          color: "currentColor",
          className: u.emojiIcon,
          width: 14,
          height: 14
        }), (0, r.jsx)(o.Text, {
          className: u.text,
          variant: "text-sm/semibold",
          lineClamp: 1,
          children: c.intl.string(c.t.Hl2IgY)
        })]
      }) : (0, r.jsxs)("div", {
        className: u.contentContainer,
        children: [(0, r.jsx)(o.Text, {
          className: u.textSelected,
          variant: "text-sm/semibold",
          children: null == n.guildId ? n.optionallyDiverseSequence : null
        }), (0, r.jsx)(o.Text, {
          className: u.text,
          variant: "text-sm/semibold",
          lineClamp: 1,
          children: n.name.replace(/_/g, " ")
        })]
      })
    })
  })
}