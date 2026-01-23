/** Chunk was on 46875 **/
/** chunk id: 337337, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk91871 = require("./91871.js"),
  i = require.n(Chunk91871),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk508675 = require("./508675.js"),
  Chunk435470 = require("./435470.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk553017 = require("./553017.js");
let h = e => {
  let {
    tag: t
  } = e, {
    id: n,
    name: r,
    emojiId: i,
    emojiName: d
  } = t, u = (0, a.bG)([c.Ay], () => null != i ? c.Ay.getUsableCustomEmojiById(i) : null), h = null != i || null != d;
  return (0, l.jsx)(s.x4T, {
    value: n,
    children: (0, l.jsx)(s.x4T.Label, {
      children: (0, l.jsxs)("div", {
        className: m.nM,
        children: [h ? (0, l.jsx)(o.A, {
          className: m.__invalid_emoji,
          emojiId: i,
          emojiName: d,
          animated: !!(null == u ? true : u.animated)
        }) : (0, l.jsx)(s.gqV, {
          size: "md",
          color: "currentColor",
          className: m.__invalid_emoji
        }), (0, l.jsx)(s.Text, {
          variant: "text-md/semibold",
          color: "text-default",
          children: r
        })]
      })
    })
  }, n)
};

function g(e) {
  let {
    parentChannel: t,
    appliedTags: n,
    maxTagsApplied: r,
    onSelectTag: a,
    onClose: o
  } = e, c = (0, d.OT)(t);
  return (0, l.jsx)(s.pzS, {
    value: n,
    onChange: e => {
      (!r || n.has(e)) && (a(e), o())
    },
    placeholder: u.intl.string(u.t.MbhGm7),
    "aria-label": u.intl.string(u.t.MbhGm7),
    children: e => c.filter(t => i()(e.toLowerCase(), t.name.toLowerCase())).map(e => (0, l.jsx)(h, {
      tag: e
    }, e.id))
  })
}