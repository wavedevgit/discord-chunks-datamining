/** Chunk was on 193 **/
/** chunk id: 259637, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk658722 = require("./658722.js"),
  i = require.n(Chunk658722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk339085 = require("./339085.js"),
  Chunk456269 = require("./456269.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk909454 = require("./909454.js");
let f = e => {
  let {
    tag: t
  } = e, {
    id: n,
    name: r,
    emojiId: i,
    emojiName: d
  } = t, u = (0, l.e7)([c.ZP], () => null != i ? c.ZP.getUsableCustomEmojiById(i) : null), f = null != i || null != d;
  return (0, a.jsx)(s.lo1, {
    value: n,
    children: (0, a.jsx)(s.lo1.Label, {
      children: (0, a.jsxs)("div", {
        className: m.row,
        children: [f ? (0, a.jsx)(o.Z, {
          className: m.__invalid_emoji,
          emojiId: i,
          emojiName: d,
          animated: !!(null == u ? true : u.animated)
        }) : (0, a.jsx)(s.lO_, {
          size: "md",
          color: "currentColor",
          className: m.__invalid_emoji
        }), (0, a.jsx)(s.Text, {
          variant: "text-md/semibold",
          color: "text-default",
          children: r
        })]
      })
    })
  }, n)
};

function h(e) {
  let {
    parentChannel: t,
    appliedTags: n,
    maxTagsApplied: r,
    onSelectTag: l,
    onClose: o
  } = e, c = (0, d.Vm)(t);
  return (0, a.jsx)(s.DBG, {
    value: n,
    onChange: e => {
      (!r || n.has(e)) && (l(e), o())
    },
    placeholder: u.intl.string(u.t.MbhGm7),
    "aria-label": u.intl.string(u.t.MbhGm7),
    children: e => c.filter(t => i()(e.toLowerCase(), t.name.toLowerCase())).map(e => (0, a.jsx)(f, {
      tag: e
    }, e.id))
  })
}