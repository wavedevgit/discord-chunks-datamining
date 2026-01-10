/** Chunk was on 49131 **/
/** chunk id: 259637, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
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
let h = e => {
  let {
    tag: t
  } = e, {
    id: n,
    name: a,
    emojiId: i,
    emojiName: d
  } = t, u = (0, l.e7)([c.ZP], () => null != i ? c.ZP.getUsableCustomEmojiById(i) : null), h = null != i || null != d;
  return (0, r.jsx)(s.lo1, {
    value: n,
    children: (0, r.jsx)(s.lo1.Label, {
      children: (0, r.jsxs)("div", {
        className: m.row,
        children: [h ? (0, r.jsx)(o.Z, {
          className: m.__invalid_emoji,
          emojiId: i,
          emojiName: d,
          animated: !!(null == u ? true : u.animated)
        }) : (0, r.jsx)(s.lO_, {
          size: "md",
          color: "currentColor",
          className: m.__invalid_emoji
        }), (0, r.jsx)(s.Text, {
          variant: "text-md/semibold",
          color: "text-default",
          children: a
        })]
      })
    })
  }, n)
};

function f(e) {
  let {
    parentChannel: t,
    appliedTags: n,
    maxTagsApplied: a,
    onSelectTag: l,
    onClose: o
  } = e, c = (0, d.Vm)(t);
  return (0, r.jsx)(s.DBG, {
    value: n,
    onChange: e => {
      (!a || n.has(e)) && (l(e), o())
    },
    placeholder: u.intl.string(u.t.MbhGm7),
    "aria-label": u.intl.string(u.t.MbhGm7),
    children: e => c.filter(t => i()(e.toLowerCase(), t.name.toLowerCase())).map(e => (0, r.jsx)(h, {
      tag: e
    }, e.id))
  })
}