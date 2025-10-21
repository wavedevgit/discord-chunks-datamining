/** Chunk was on 31688 **/
/** chunk id: 205557, original params: t,e,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  d = require.n(Chunk512722),
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
let b = [Chunk721383._];

function j(t) {
  let {
    windowKey: e,
    channelId: n,
    participantId: o
  } = t, a = (0, s.e7)([w.Z], () => w.Z.getChannel(n));
  d()(null != a, "channel cannot be null for tile popout");
  let c = (0, s.e7)([Z.Z], () => Z.Z.getParticipant(n, o), [n, o]);
  l.useEffect(() => {
    null == c && P.xv(e)
  }, [c, e]);
  let j = t => {
    let {
      unmountWindow: e
    } = t;
    u.Z.returnParticipant(n, o), e()
  };
  if (null == c) return (0, i.jsx)(h.Z, {
    withTitleBar: true,
    keybinds: b,
    windowKey: e,
    title: m.intl.string(m.t.lfzt24),
    channelId: n,
    onBeforeUnload: j,
    hideModals: true,
    children: (0, i.jsx)("div", {
      className: r()("root", y.rootPopout, y.tilePopout),
      children: (0, i.jsx)("div", {
        className: y.tileContainer,
        children: m.intl.string(m.t.PmKUHq)
      })
    })
  });
  let v = c.type === g.fO.USER ? c.user.username : c.type === g.fO.STREAM ? m.intl.formatToPlainString(m.t["/DC1y9"], {
    username: c.user.username
  }) : m.intl.string(m.t["8vlBo7"]);
  return (0, i.jsx)(h.Z, {
    withTitleBar: true,
    keybinds: b,
    windowKey: e,
    title: v,
    channelId: a.id,
    onBeforeUnload: j,
    hideModals: true,
    children: (0, i.jsx)("div", {
      className: r()("root", y.rootPopout, y.tilePopout),
      children: (0, i.jsx)(p.Z.Provider, {
        value: a.guild_id,
        children: (0, i.jsx)(x.ZP, {
          timeout: 2e3,
          children: () => (0, i.jsx)(f.ZP, {
            participant: c,
            channel: a,
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