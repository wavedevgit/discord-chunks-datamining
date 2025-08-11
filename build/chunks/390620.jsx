/** Chunk was on 43404 **/
/** chunk id: 390620, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => x
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.js"),
  Chunk430824 = require("./430824.js"),
  Chunk70956 = require("./70956.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk882714 = require("./882714.js"),
  Chunk986449 = require("./986449.js");
let g = 6 * Chunk70956.Z.Millis.SECOND;

function f(e) {
  let {
    emoji: t,
    guildId: n
  } = e, l = (0, a.e7)([u.Z], () => {
    var e;
    return null == (e = u.Z.getGuild(n)) ? true : e.name
  });
  return <div className={i()(h.toast, m.toast)}>{<s.Z emojiId={t.id} size={"default"} />}{<o.Text variant={"text-md/normal"} color={"text-tertiary"}>{d.intl.format(d.t.BaxFf3, {
        emojiName: t.name,
        emojiNameHook: (e, t) => (0, r.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "text-primary",
          tag: "strong",
          children: e
        }, t),
        guildName: l,
        guildNameHook: (e, t) => (0, r.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "text-primary",
          tag: "strong",
          children: e
        }, t)
      })}</o.Text>}</div>
}

function x(e) {
  let {
    emoji: t,
    guildId: n
  } = e;
  (0, o.showToast)((0, o.createToast)("", o.ToastType.CUSTOM, {
    position: o.ToastPosition.TOP,
    component: <f emoji={t} guildId={n} />,
    duration: g
  }))
}