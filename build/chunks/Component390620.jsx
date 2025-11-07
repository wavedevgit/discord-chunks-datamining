/** Chunk was on 2262 **/
/** chunk id: 390620, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk70956 = require("./70956.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk384490 = require("./384490.js"),
  Chunk583140 = require("./583140.js");
let g = 6 * Chunk70956.Z.Millis.SECOND;

function p(e) {
  let {
    emoji: t,
    guildId: n
  } = e, i = (0, a.e7)([u.Z], () => {
    var e;
    return null == (e = u.Z.getGuild(n)) ? true : e.name
  });
  return (0, r.jsxs)("div", {
    className: l()(m.toast, h.toast),
    children: [(0, r.jsx)(o.Z, {
      emojiId: t.id,
      size: "default"
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-tertiary",
      children: d.intl.format(d.t.BaxFf8, {
        emojiName: t.name,
        emojiNameHook: (e, t) => (0, r.jsx)(s.Text, {
          variant: "text-md/semibold",
          color: "text-primary",
          tag: "strong",
          children: e
        }, t),
        guildName: i,
        guildNameHook: (e, t) => (0, r.jsx)(s.Text, {
          variant: "text-md/semibold",
          color: "text-primary",
          tag: "strong",
          children: e
        }, t)
      })
    })]
  })
}

function f(e) {
  let {
    emoji: t,
    guildId: n
  } = e;
  (0, s.showToast)((0, s.createToast)("", s.ToastType.CUSTOM, {
    position: s.ToastPosition.TOP,
    component: (0, r.jsx)(p, {
      emoji: t,
      guildId: n
    }),
    duration: g
  }))
}