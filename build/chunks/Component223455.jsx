/** Chunk was on 80960 **/
/** chunk id: 223455, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => Z
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk721037 = require("./721037.jsx"),
  Chunk561472 = require("./561472.jsx"),
  Chunk679080 = require("./679080.js"),
  Chunk777019 = require("./777019.js"),
  Chunk400332 = require("./400332.js"),
  Chunk721383 = require("./721383.js"),
  Chunk566620 = require("./566620.js"),
  Chunk317381 = require("./317381.js"),
  Chunk617552 = require("./617552.jsx"),
  Chunk372900 = require("./372900.js"),
  Chunk238246 = require("./238246.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk598006 = require("./598006.js"),
  Chunk677601 = require("./677601.jsx"),
  Chunk639030 = require("./639030.js");
let C = [Chunk679080.S, Chunk777019.O, Chunk400332.U, Chunk721383._];

function Z(e) {
  let {
    windowKey: t,
    channelId: n
  } = e, a = (0, s.e7)([b.Z], () => b.Z.getChannel(n));
  o()(null != a, "channel cannot be null for popout");
  let l = (0, s.e7)([y.ZP], () => y.ZP.getSelfEmbeddedActivityForChannel(a.id), [a]);
  return (0, r.jsx)(E.Z, {
    withTitleBar: true,
    keybinds: C,
    windowKey: t,
    title: a.name,
    channelId: a.id,
    onBeforeUnload: e => {
      let {
        e: t,
        unmountWindow: n
      } = e;
      if (null != l) {
        let e = (0, f.nJ)(l.applicationId, a.id);
        t.preventDefault(), (0, g.Z)({
          onConfirm: async () => {
            await e, n()
          },
          usesPopoutContext: true
        })
      } else n()
    },
    children: (0, r.jsx)("div", {
      className: i()("root", x.rootPopout),
      children: (0, r.jsxs)(v.Z.Provider, {
        value: a.guild_id,
        children: [(0, r.jsx)(d.Z, {
          channel: a,
          draftType: D.d.ChannelMessage
        }), (0, r.jsx)(j.Z, {
          channel: a,
          popoutType: P.P.VOICE_UI
        }), (0, r.jsx)(c.Z, {
          popoutWindowKey: t,
          popoutWindowHasTitleBar: true
        })]
      })
    })
  })
}