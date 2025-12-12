/** Chunk was on web.js **/
/** chunk id: 321051, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk283066 = require("./283066.js"),
  Chunk697426 = require("./697426.js"),
  Chunk603074 = require("./603074.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk596806 = require("./596806.js");
let _ = [54, 8, 8, 8];

function m(e) {
  let {
    onSelect: t,
    sound: n
  } = e, [o, m] = i.useState(false), h = i.useRef(null), g = (0, c.Z)({
    location: "GiftSoundboard"
  }), E = a()(p.text, g && p.refresh);

  function b(e) {
    m(false), null == t || t(e)
  }
  let y = e => (0, r.jsxs)("div", {
    className: p.customGiftHeader,
    children: [(0, r.jsxs)("div", {
      className: p.__invalid_customGiftHeaderText,
      children: [(0, r.jsx)(l.Text, {
        variant: "text-md/bold",
        children: f.intl.string(f.t.aThJz8)
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: f.intl.string(f.t.stGFA3)
      })]
    }), (0, r.jsx)("div", {
      className: p.searchAndSound,
      children: e
    })]
  });
  return (0, r.jsx)(l.yRy, {
    targetElementRef: h,
    shouldShow: o,
    position: "bottom",
    align: "left",
    onRequestClose: () => m(false),
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(l.VqE, {
        children: (0, r.jsx)(d.Z, {
          suppressPlaySound: true,
          shouldShowUpsell: false,
          guildId: null,
          channel: null,
          onClose: t,
          onSelect: b,
          analyticsSource: "gift soundboard",
          soundButtonOverlay: u.Pb.ADD,
          listPadding: _,
          renderHeader: y,
          defaultSoundsOnly: true
        })
      })
    },
    children: () => (0, r.jsx)(l.P3F, {
      className: a()(p.container, g && p.refresh),
      onClick: () => m(true),
      innerRef: h,
      children: null == n ? (0, r.jsxs)("div", {
        className: p.contentContainer,
        children: [(0, r.jsx)(l.KY1, {
          size: "custom",
          color: g ? s.Z.colors.ICON_STRONG : s.Z.colors.WHITE,
          className: p.soundIcon,
          width: 14,
          height: 14
        }), (0, r.jsx)(l.Text, {
          className: E,
          variant: "text-sm/semibold",
          lineClamp: 1,
          children: f.intl.string(f.t.aThJz8)
        })]
      }) : (0, r.jsxs)("div", {
        className: p.contentContainer,
        children: [(0, r.jsx)(l.Text, {
          className: E,
          variant: "text-sm/semibold",
          lineClamp: 1,
          children: n.emojiName
        }), (0, r.jsx)(l.Text, {
          className: E,
          variant: "text-sm/semibold",
          lineClamp: 1,
          children: n.name
        })]
      })
    })
  })
}