/** Chunk was on 31688 **/
/** chunk id: 205557, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => P
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk475179 = require("./475179.js"),
  Chunk721383 = require("./721383.js"),
  Chunk372900 = require("./372900.js"),
  Chunk238246 = require("./238246.jsx"),
  Chunk788983 = require("./788983.js"),
  Chunk885006 = require("./885006.js"),
  Chunk27457 = require("./27457.jsx"),
  Chunk937995 = require("./937995.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk358221 = require("./358221.js"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk11830 = require("./11830.js");
let m = [Chunk721383._];

function P(e) {
  let {
    windowKey: n,
    channelId: t,
    participantId: d
  } = e, P = (0, l.e7)([f.Z], () => f.Z.getChannel(t)), k = (0, l.e7)([p.Z], () => p.Z.getParticipant(t, d), [t, d]), x = null != P && null != k;
  r.useEffect(() => {
    x || s.xv(n)
  }, [x, n]);
  let y = r.useCallback(e => {
      let {
        unmountWindow: n
      } = e;
      u.Z.returnParticipant(t, d), n()
    }, [t, d]),
    C = r.useMemo(() => null == k ? v.intl.string(v.t.lfzt24) : k.type === g.fO.USER ? k.user.username : k.type === g.fO.STREAM ? v.intl.formatToPlainString(v.t["/DC1y9"], {
      username: k.user.username
    }) : v.intl.string(v.t["8vlBo7"]), [k]),
    E = (0, h.Z)();
  return (0, i.jsx)(a.Z, {
    withTitleBar: true,
    keybinds: m,
    windowKey: n,
    title: C,
    channelId: t,
    onBeforeUnload: y,
    hideModals: true,
    children: x ? (0, i.jsx)(o.Z.Provider, {
      value: P.guild_id,
      children: (0, i.jsx)(w.ZP, {
        timeout: 2e3,
        children: () => (0, i.jsx)(c.ZP, {
          className: Z.tile,
          participant: k,
          channel: P,
          width: E.width,
          inCall: true,
          inPopout: true,
          focused: true,
          noBorder: true
        })
      })
    }) : null
  })
}