/** Chunk was on 2262 **/
/** chunk id: 390620, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk70956 = require("./70956.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk758151 = require("./758151.js"),
  Chunk141291 = require("./141291.js");
let h = 6 * Chunk70956.Z.Millis.SECOND;

function b(e) {
  let {
    emoji: t,
    guildId: n
  } = e, r = (0, a.e7)([u.Z], () => {
    var e;
    return null == (e = u.Z.getGuild(n)) ? true : e.name
  });
  return (0, l.jsxs)("div", {
    className: i()(g.toast, m.toast),
    children: [(0, l.jsx)(s.Z, {
      emojiId: t.id,
      size: "default"
    }), (0, l.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: d.intl.format(d.t.BaxFf8, {
        emojiName: t.name,
        emojiNameHook: (e, t) => (0, l.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          tag: "strong",
          children: e
        }, t),
        guildName: r,
        guildNameHook: (e, t) => (0, l.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
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
  (0, o.showToast)((0, o.createToast)("", o.ToastType.CUSTOM, {
    position: o.ToastPosition.TOP,
    component: (0, l.jsx)(b, {
      emoji: t,
      guildId: n
    }),
    duration: h
  }))
}