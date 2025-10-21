/** Chunk was on 31688 **/
/** chunk id: 205557, original params: t,e,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => w
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  u = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk475179 = require("./475179.js"),
  Chunk721383 = require("./721383.js"),
  Chunk372900 = require("./372900.js"),
  Chunk238246 = require("./238246.jsx"),
  Chunk788983 = require("./788983.js"),
  Chunk27457 = require("./27457.jsx"),
  Chunk937995 = require("./937995.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk358221 = require("./358221.js"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk702511 = require("./702511.js");
let v = [Chunk721383._];

function w(t) {
  let {
    windowKey: e,
    channelId: n,
    participantId: o
  } = t, r = (0, s.e7)([m.Z], () => m.Z.getChannel(n));
  u()(null != r, "channel cannot be null for tile popout");
  let c = (0, s.e7)([x.Z], () => x.Z.getParticipant(n, o), [n, o]);
  l.useEffect(() => {
    null == c && P.xv(e)
  }, [c, e]);
  let w = l.useCallback(t => {
      let {
        unmountWindow: e
      } = t;
      d.Z.returnParticipant(n, o), e()
    }, [n, o]),
    y = l.useMemo(() => null == c ? Z.intl.string(Z.t.lfzt24) : c.type === C.fO.USER ? c.user.username : c.type === C.fO.STREAM ? Z.intl.formatToPlainString(Z.t["/DC1y9"], {
      username: c.user.username
    }) : Z.intl.string(Z.t["8vlBo7"]), [c]);
  return (0, i.jsx)(h.Z, {
    withTitleBar: true,
    keybinds: v,
    windowKey: e,
    title: y,
    channelId: n,
    onBeforeUnload: w,
    hideModals: true,
    children: (0, i.jsx)("div", {
      className: a()("root", b.rootPopout, b.tilePopout),
      children: null == c ? (0, i.jsx)("div", {
        className: b.tileContainer,
        children: Z.intl.string(Z.t.PmKUHq)
      }) : (0, i.jsx)(p.Z.Provider, {
        value: r.guild_id,
        children: (0, i.jsx)(g.ZP, {
          timeout: 2e3,
          children: () => (0, i.jsx)(f.ZP, {
            participant: c,
            channel: r,
            inCall: true,
            width: 854,
            inPopout: true,
            containerStyle: {
              width: "100%",
              height: "100%"
            },
            style: {
              padding: "8px"
            }
          })
        })
      })
    })
  })
}