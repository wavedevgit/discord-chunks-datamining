/** Chunk was on 31688 **/
/** chunk id: 205557, original params: e,t,n (module,exports,require) **/
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
  Chunk598006 = require("./598006.js"),
  Chunk768864 = require("./768864.jsx"),
  Chunk354459 = require("./354459.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk11830 = require("./11830.js");
let C = [Chunk721383._];

function P(e) {
  let {
    windowKey: t,
    channelId: n,
    participantId: o
  } = e, P = (0, l.e7)([p.Z], () => p.Z.getChannel(n)), j = (0, l.e7)([w.Z], () => w.Z.getParticipant(n, o), [n, o]), T = null != P && null != j;
  i.useEffect(() => {
    T || c.xv(t)
  }, [T, t]);
  let E = i.useCallback(e => {
      let {
        unmountWindow: t
      } = e;
      a.Z.returnParticipant(n, o), t()
    }, [n, o]),
    M = (0, I.B)({
      channel: P,
      appContext: O.IlC.POPOUT
    }),
    v = i.useMemo(() => null == j ? b.intl.string(b.t.lfzt24) : j.type === m.fO.USER ? j.user.username : j.type === m.fO.STREAM ? b.intl.formatToPlainString(b.t["/DC1y9"], {
      username: j.user.username
    }) : b.intl.string(b.t["8vlBo7"]), [j]),
    U = (0, d.Z)();
  return (0, r.jsx)(u.Z, {
    withTitleBar: true,
    keybinds: C,
    windowKey: t,
    title: v,
    channelId: n,
    onBeforeUnload: E,
    hideModals: true,
    children: T ? (0, r.jsx)(s.Z.Provider, {
      value: P.guild_id,
      children: (0, r.jsx)(f.ZP, {
        timeout: 2e3,
        children: () => (0, r.jsx)(h.ZP, {
          className: g.tile,
          participant: j,
          channel: P,
          width: U.width,
          inCall: true,
          popoutType: y.P.CALL_TILE,
          focused: true,
          noBorder: true,
          onContextMenu: M
        })
      })
    }) : null
  })
}