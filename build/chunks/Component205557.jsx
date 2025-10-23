/** Chunk was on 31688 **/
/** chunk id: 205557, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => j
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
  Chunk358221 = require("./358221.js"),
  Chunk598006 = require("./598006.js"),
  Chunk768864 = require("./768864.jsx"),
  Chunk354459 = require("./354459.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk542123 = require("./542123.js");
let P = [Chunk721383._];

function j(e) {
  let {
    windowKey: t,
    channelId: n,
    participantId: s
  } = e, j = (0, l.e7)([w.Z], () => w.Z.getChannel(n)), T = (0, l.e7)([y.Z], () => y.Z.getParticipant(n, s), [n, s]), E = null != j && null != T;
  i.useEffect(() => {
    E || d.xv(t)
  }, [E, t]);
  let M = i.useCallback(e => {
      let {
        unmountWindow: t
      } = e;
      a.Z.returnParticipant(n, s), t()
    }, [n, s]),
    v = (0, I.B)({
      channel: j,
      appContext: O.IlC.POPOUT
    }),
    U = i.useCallback(() => {
      (0, C._5)(T) && (0, o.rn)(T.stream, {
        forceMultiple: true
      })
    }, [T]),
    x = i.useMemo(() => null == T ? b.intl.string(b.t.lfzt24) : T.type === C.fO.USER ? T.user.username : T.type === C.fO.STREAM ? b.intl.formatToPlainString(b.t["/DC1y9"], {
      username: T.user.username
    }) : b.intl.string(b.t["8vlBo7"]), [T]),
    D = (0, h.Z)();
  return (0, r.jsx)(c.Z, {
    withTitleBar: true,
    keybinds: P,
    windowKey: t,
    title: x,
    channelId: n,
    onBeforeUnload: M,
    hideModals: true,
    children: E ? (0, r.jsx)(u.Z.Provider, {
      value: j.guild_id,
      children: (0, r.jsx)(p.ZP, {
        timeout: 2e3,
        children: () => (0, r.jsx)(f.ZP, {
          className: g.tile,
          participant: T,
          channel: j,
          width: D.width,
          inCall: true,
          popoutType: m.P.CALL_TILE,
          focused: true,
          noBorder: true,
          onContextMenu: v,
          onClick: U
        })
      })
    }) : null
  })
}