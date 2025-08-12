/** Chunk was on 54214 **/
/** chunk id: 259637, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk658722 = require("./658722.js"),
  a = require.n(Chunk658722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk339085 = require("./339085.js"),
  Chunk456269 = require("./456269.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk442304 = require("./442304.js");
let h = e => {
  let {
    tag: t
  } = e, {
    id: n,
    name: i,
    emojiId: a,
    emojiName: d
  } = t, u = (0, l.e7)([c.ZP], () => null != a ? c.ZP.getUsableCustomEmojiById(a) : null), h = null != a || null != d;
  return (0, r.jsx)(s.lo1, {
    value: n,
    children: (0, r.jsx)(s.lo1.Label, {
      children: (0, r.jsxs)("div", {
        className: m.row,
        children: [h ? (0, r.jsx)(o.Z, {
          className: m.__invalid_emoji,
          emojiId: a,
          emojiName: d,
          animated: !!(null == u ? true : u.animated)
        }) : (0, r.jsx)(s.lO_, {
          size: "md",
          color: "currentColor",
          className: m.__invalid_emoji
        }), (0, r.jsx)(s.Text, {
          variant: "text-md/semibold",
          color: "header-secondary",
          children: i
        })]
      })
    })
  }, n)
};

function g(e) {
  let {
    parentChannel: t,
    appliedTags: n,
    maxTagsApplied: i,
    onSelectTag: l,
    onClose: o
  } = e, c = (0, d.Vm)(t), m = (e, t) => t.filter(t => a()(e.toLowerCase(), t.name.toLowerCase()));
  return (0, r.jsx)(s.DBG, {
    showScrollbar: true,
    value: n,
    onChange: e => {
      (!i || n.has(e)) && (l(e), o())
    },
    placeholder: u.intl.string(u.t.MbhGm5),
    "aria-label": u.intl.string(u.t.MbhGm5),
    children: e => m(e, c).map(e => (0, r.jsx)(h, {
      tag: e
    }, e.id))
  })
}