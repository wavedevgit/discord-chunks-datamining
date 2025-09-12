/** Chunk was on 80960 **/
/** chunk id: 223455, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => Z
});
var Chunk951288 = require("./951288.js"),
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
  Chunk729200 = require("./729200.js"),
  Chunk617552 = require("./617552.jsx"),
  Chunk372900 = require("./372900.js"),
  Chunk238246 = require("./238246.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk677601 = require("./677601.jsx"),
  Chunk702511 = require("./702511.js");
let R = [Chunk679080.S, Chunk777019.O, Chunk400332.U, Chunk721383._];

function Z(e) {
  let {
    windowKey: t,
    channelId: r
  } = e, a = (0, s.e7)([C.Z], () => C.Z.getChannel(r));
  o()(null != a, "channel cannot be null for popout");
  let l = (0, s.e7)([y.ZP], () => y.ZP.getSelfEmbeddedActivityForChannel(a.id), [a]);
  return (0, n.jsx)(b.Z, {
    withTitleBar: true,
    keybinds: R,
    windowKey: t,
    title: a.name,
    channelId: a.id,
    onBeforeUnload: e => {
      let {
        e: t,
        unmountWindow: r
      } = e;
      if (null != l) {
        let e = (0, g.g)() ? (0, f.nJ)(l.applicationId, a.id) : Promise.resolve(true);
        t.preventDefault(), (0, v.Z)({
          onConfirm: async () => {
            await e, r()
          },
          usesPopoutContext: true
        })
      } else r()
    },
    children: (0, n.jsx)("div", {
      className: i()("root", j.rootPopout),
      children: (0, n.jsxs)(D.Z.Provider, {
        value: a.guild_id,
        children: [(0, n.jsx)(d.Z, {
          channel: a,
          draftType: E.d.ChannelMessage
        }), (0, n.jsx)(P.Z, {
          channel: a
        }), (0, n.jsx)(c.Z, {
          popoutWindowKey: t,
          popoutWindowHasTitleBar: true
        })]
      })
    })
  })
}