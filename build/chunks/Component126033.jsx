/** Chunk was on 90410 **/
/** chunk id: 126033, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  EmojiAddModal: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk486020 = require("./486020.js"),
  Chunk320137 = require("./320137.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk887369 = require("./887369.js");

function h(e) {
  let {
    emoji: t,
    onChange: a,
    value: n
  } = e, s = r.Ay.getEmojiURL({
    id: t.id,
    animated: t.animated,
    size: 24
  });
  return (0, i.jsx)(d.Kj, {
    size: 20,
    className: m.nI,
    onChange: a,
    type: d.Xo.INVERTED,
    value: n,
    reverse: true,
    children: (0, i.jsxs)("div", {
      className: m.H1,
      children: [(0, i.jsx)("img", {
        className: m.mp,
        src: s,
        width: 24,
        height: 24,
        alt: ""
      }), (0, i.jsx)(l.Text, {
        color: "text-strong",
        variant: "text-md/medium",
        className: m.JN,
        children: t.name
      })]
    })
  })
}

function u(e) {
  let {
    guildId: t,
    initialTierEmojiIds: a,
    onSubmit: d,
    transitionToManageEmoji: r,
    transitionState: u,
    onClose: x
  } = e, j = (0, c.A)(t), [p, f] = n.useState(new Set), v = p.size > 0;
  return (0, i.jsx)(s.Modal, {
    transitionState: u,
    onClose: x,
    title: o.intl.string(o.t.xC6tUv),
    actions: [{
      text: o.intl.string(o.t["ETE/oC"]),
      variant: "secondary",
      onClick: x
    }, {
      text: o.intl.format(o.t.pX74jh, {
        totalEmoji: p.size
      }),
      variant: "primary",
      onClick: function() {
        d(p), x()
      },
      disabled: !v
    }],
    children: (0, i.jsxs)(l.BJc, {
      gap: "md",
      children: [(0, i.jsx)(l.Text, {
        variant: "text-md/normal",
        children: o.intl.format(o.t["OnK+C1"], {
          transitionToManageEmoji: r
        })
      }), null != j && j.length > 0 && (0, i.jsx)("div", {
        className: m.qq,
        children: j.map(e => null != a && a.has(e.id) ? null : (0, i.jsx)(h, {
          emoji: e,
          onChange: () => {
            var t;
            return t = e.id, void f(e => {
              let a = new Set(e);
              return p.has(t) ? a.delete(t) : a.add(t), a
            })
          },
          value: p.has(e.id)
        }, e.id))
      })]
    })
  })
}