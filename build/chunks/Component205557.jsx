/** Chunk was on 31688 **/
/** chunk id: 205557, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => T
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk475179 = require("./475179.js"),
  Chunk872810 = require("./872810.js"),
  Chunk721383 = require("./721383.js"),
  Chunk372900 = require("./372900.js"),
  Chunk238246 = require("./238246.jsx"),
  Chunk788983 = require("./788983.js"),
  Chunk885006 = require("./885006.js"),
  Chunk27457 = require("./27457.jsx"),
  Chunk937995 = require("./937995.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk358221 = require("./358221.js"),
  Chunk598006 = require("./598006.js"),
  Chunk768864 = require("./768864.jsx"),
  Chunk354459 = require("./354459.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk542123 = require("./542123.js");
let j = [Chunk721383._];

function T(e) {
  let {
    windowKey: t,
    channelId: n,
    participantId: s
  } = e, T = (0, l.e7)([w.Z], () => w.Z.getChannel(n)), E = (0, l.e7)([I.Z], () => I.Z.getParticipant(n, s), [n, s]), M = null != T && null != E, v = (0, l.e7)([y.Z], () => y.Z.getVoiceChannelId() === n);
  i.useEffect(() => {
    M && v || d.xv(t)
  }, [M, v, t]);
  let U = i.useCallback(e => {
      let {
        unmountWindow: t
      } = e;
      a.Z.returnParticipant(n, s), t()
    }, [n, s]),
    x = (0, C.B)({
      channel: T,
      appContext: b.IlC.POPOUT
    }),
    D = i.useCallback(() => {
      (0, O._5)(E) && (0, o.rn)(E.stream, {
        forceMultiple: true
      })
    }, [E]),
    S = i.useMemo(() => null == E ? g.intl.string(g.t.lfzt24) : E.type === O.fO.USER ? E.user.username : E.type === O.fO.STREAM ? g.intl.formatToPlainString(g.t["/DC1y9"], {
      username: E.user.username
    }) : g.intl.string(g.t["8vlBo7"]), [E]),
    R = (0, h.Z)();
  return (0, r.jsx)(c.Z, {
    withTitleBar: true,
    keybinds: j,
    windowKey: t,
    title: S,
    channelId: n,
    onBeforeUnload: U,
    hideModals: true,
    children: M ? (0, r.jsx)(u.Z.Provider, {
      value: T.guild_id,
      children: (0, r.jsx)(p.ZP, {
        timeout: 2e3,
        children: () => (0, r.jsx)(f.ZP, {
          className: P.tile,
          participant: E,
          channel: T,
          width: R.width,
          inCall: true,
          popoutType: m.P.CALL_TILE,
          focused: true,
          noBorder: true,
          onContextMenu: x,
          onClick: D
        })
      })
    }) : null
  })
}