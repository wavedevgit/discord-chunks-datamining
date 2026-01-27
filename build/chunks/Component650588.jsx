/** Chunk was on web.js **/
/** chunk id: 650588, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk170887 = require("./170887.js"),
  Chunk807348 = require("./807348.js"),
  Chunk989799 = require("./989799.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk879254 = require("./879254.js");
let _ = [54, 8, 8, 8];

function h(e) {
  let {
    onSelect: t,
    sound: n
  } = e, [a, h] = i.useState(false), m = i.useRef(null), g = (0, c.A)({
    location: "GiftSoundboard"
  }), E = o()(p.Qq, g && p.Ow);

  function y(e) {
    h(false), null == t || t(e)
  }
  let b = e => (0, r.jsxs)("div", {
    className: p.Ry,
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
      className: p.$H,
      children: e
    })]
  });
  return (0, r.jsx)(l.YNO, {
    targetElementRef: m,
    shouldShow: a,
    position: "bottom",
    align: "left",
    onRequestClose: () => h(false),
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(l.lGe, {
        children: (0, r.jsx)(d.A, {
          suppressPlaySound: true,
          shouldShowUpsell: false,
          guildId: null,
          channel: null,
          onClose: t,
          onSelect: y,
          analyticsSource: "gift soundboard",
          soundButtonOverlay: u.If.ADD,
          listPadding: _,
          renderHeader: b,
          defaultSoundsOnly: true
        })
      })
    },
    children: () => (0, r.jsx)(l.DUT, {
      className: o()(p.kL, g && p.Ow),
      onClick: () => h(true),
      innerRef: m,
      children: null == n ? (0, r.jsxs)("div", {
        className: p.hQ,
        children: [(0, r.jsx)(l.JMI, {
          size: "custom",
          color: g ? s.A.colors.ICON_STRONG : s.A.colors.WHITE,
          className: p.tc,
          width: 14,
          height: 14
        }), (0, r.jsx)(l.Text, {
          className: E,
          variant: "text-sm/semibold",
          lineClamp: 1,
          children: f.intl.string(f.t.aThJz8)
        })]
      }) : (0, r.jsxs)("div", {
        className: p.hQ,
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