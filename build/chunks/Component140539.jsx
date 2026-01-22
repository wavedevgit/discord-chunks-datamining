/** Chunk was on 71138 **/
/** chunk id: 140539, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => F
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk417597 = require("./417597.js"),
  Chunk197808 = require("./197808.jsx"),
  Chunk738876 = require("./738876.jsx"),
  Chunk877991 = require("./877991.js"),
  Chunk332779 = require("./332779.js"),
  Chunk568765 = require("./568765.js"),
  Chunk512513 = require("./512513.js"),
  Chunk795816 = require("./795816.js"),
  Chunk933958 = require("./933958.js"),
  Chunk47294 = require("./47294.jsx"),
  Chunk386467 = require("./386467.js"),
  Chunk923917 = require("./923917.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk31717 = require("./31717.js"),
  Chunk164617 = require("./164617.js"),
  Chunk540462 = require("./540462.jsx"),
  Chunk678035 = require("./678035.js");
let R = [Chunk877991.L, Chunk332779.T, Chunk568765.w, Chunk512513.z];

function F(e) {
  let {
    windowKey: t,
    channelId: n
  } = e, a = (0, o.bG)([b.A], () => b.A.getChannel(n));
  s()(null != a, "channel cannot be null for popout");
  let l = (0, o.bG)([g.Ay], () => g.Ay.getSelfEmbeddedActivityForChannel(a.id), [a]);
  return (0, r.jsx)(v.A, {
    withTitleBar: true,
    keybinds: R,
    windowKey: t,
    title: a.name,
    channelId: a.id,
    onBeforeUnload: e => {
      let {
        e: t,
        unmountWindow: n
      } = e;
      if (null != l) {
        let e = (0, h.od)(l.applicationId, a.id);
        t.preventDefault(), (0, A.A)({
          onConfirm: async () => {
            await e, n()
          },
          usesPopoutContext: true
        })
      } else n()
    },
    children: (0, r.jsx)("div", {
      className: i()("root", D.M),
      children: (0, r.jsxs)(f.A.Provider, {
        value: a.guild_id,
        children: [(0, r.jsx)(c.A, {
          channel: a,
          draftType: C.C.ChannelMessage
        }), (0, r.jsx)(x.A, {
          channel: a,
          popoutType: E.N.VOICE_UI
        }), (0, r.jsx)(d.A, {
          popoutWindowKey: t,
          popoutWindowHasTitleBar: true
        })]
      })
    })
  })
}