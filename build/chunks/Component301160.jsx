/** Chunk was on 21112 **/
/** chunk id: 301160, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  EmojiAddModal: () => j
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk768581 = require("./768581.js"),
  Chunk570533 = require("./570533.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk22079 = require("./22079.js");

function c(e) {
  let {
    emoji: i,
    onChange: t,
    value: n
  } = e, o = l.ZP.getEmojiURL({
    id: i.id,
    animated: i.animated,
    size: 24
  });
  return (0, a.jsx)(s.XZJ, {
    size: 20,
    className: d.emojiRow,
    onChange: t,
    type: s.XZJ.Types.INVERTED,
    value: n,
    reverse: true,
    children: (0, a.jsxs)("div", {
      className: d.emojiLabel,
      children: [(0, a.jsx)("img", {
        className: d.emojiImage,
        src: o,
        width: 24,
        height: 24,
        alt: ""
      }), (0, a.jsx)(s.Text, {
        color: "header-primary",
        variant: "text-md/medium",
        className: d.emojiAlias,
        children: i.name
      })]
    })
  })
}

function j(e) {
  let {
    guildId: i,
    initialTierEmojiIds: t,
    onSubmit: l,
    transitionToManageEmoji: j,
    transitionState: h,
    onClose: u
  } = e, x = (0, r.Z)(i), [p, f] = n.useState(new Set), g = p.size > 0;
  return (0, a.jsx)(o.Modal, {
    transitionState: h,
    onClose: u,
    title: m.intl.string(m.t.xC6tUl),
    actions: [{
      text: m.intl.string(m.t["ETE/oK"]),
      variant: "secondary",
      onClick: u
    }, {
      text: m.intl.format(m.t.pX74jo, {
        totalEmoji: p.size
      }),
      variant: "primary",
      onClick: function() {
        l(p), u()
      },
      disabled: !g
    }],
    children: (0, a.jsxs)(s.Kqy, {
      gap: "md",
      children: [(0, a.jsx)(s.Text, {
        variant: "text-md/normal",
        children: m.intl.format(m.t["OnK+Cw"], {
          transitionToManageEmoji: j
        })
      }), null != x && x.length > 0 && (0, a.jsx)("div", {
        className: d.emojiContainer,
        children: x.map(e => null != t && t.has(e.id) ? null : (0, a.jsx)(c, {
          emoji: e,
          onChange: () => {
            var i;
            return i = e.id, void f(e => {
              let t = new Set(e);
              return p.has(i) ? t.delete(i) : t.add(i), t
            })
          },
          value: p.has(e.id)
        }, e.id))
      })]
    })
  })
}