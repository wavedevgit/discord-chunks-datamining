/** Chunk was on 76443 **/
/** chunk id: 380334, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk927813 = require("./927813.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk618148 = require("./618148.js"),
  Chunk910200 = require("./910200.js");
let g = 6 * Chunk927813.A.Millis.SECOND;

function f(e) {
  let {
    emoji: t,
    guildId: n
  } = e, r = (0, a.bG)([o.A], () => {
    var e;
    return null == (e = o.A.getGuild(n)) ? true : e.name
  });
  return (0, l.jsxs)("div", {
    className: i()(h.oR, m.o),
    children: [(0, l.jsx)(u.A, {
      emojiId: t.id,
      size: "default"
    }), (0, l.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: d.intl.format(d.t.BaxFf8, {
        emojiName: t.name,
        emojiNameHook: (e, t) => (0, l.jsx)(s.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          tag: "strong",
          children: e
        }, t),
        guildName: r,
        guildNameHook: (e, t) => (0, l.jsx)(s.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          tag: "strong",
          children: e
        }, t)
      })
    })]
  })
}

function b(e) {
  let {
    emoji: t,
    guildId: n
  } = e;
  (0, s.showToast)((0, s.createToast)("", s.ToastType.CUSTOM, {
    position: s.ToastPosition.TOP,
    component: (0, l.jsx)(f, {
      emoji: t,
      guildId: n
    }),
    duration: g
  }))
}