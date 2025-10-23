/** Chunk was on 31688 **/
/** chunk id: 205557, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => E
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
let g = [Chunk721383._];

function E(e) {
  let {
    windowKey: t,
    channelId: n,
    participantId: s
  } = e, E = (0, l.e7)([w.Z], () => w.Z.getChannel(n)), L = (0, l.e7)([I.Z], () => I.Z.getParticipant(n, s), [n, s]), _ = null != E && null != L, U = (0, l.e7)([O.Z], () => O.Z.getVoiceChannelId() === n);
  i.useEffect(() => {
    _ && U || d.xv(t)
  }, [_, U, t]);
  let j = i.useCallback(e => {
      let {
        unmountWindow: t
      } = e;
      a.Z.returnParticipant(n, s), t()
    }, [n, s]),
    M = (0, T.B)({
      channel: E
    }),
    v = i.useCallback(() => {
      (0, P._5)(L) && (0, o.rn)(L.stream, {
        forceMultiple: true
      })
    }, [L]),
    x = i.useMemo(() => null == L ? m.intl.string(m.t.lfzt24) : L.type === P.fO.USER ? L.user.username : L.type === P.fO.STREAM ? m.intl.formatToPlainString(m.t["/DC1y9"], {
      username: L.user.username
    }) : m.intl.string(m.t["8vlBo7"]), [L]),
    A = (0, h.Z)();
  return (0, r.jsx)(c.Z, {
    withTitleBar: true,
    keybinds: g,
    windowKey: t,
    title: x,
    channelId: n,
    onBeforeUnload: j,
    appContext: y.IlC.CALL_TILE_POPOUT,
    hideModals: true,
    children: _ ? (0, r.jsx)(u.Z.Provider, {
      value: E.guild_id,
      children: (0, r.jsx)(p.ZP, {
        timeout: 2e3,
        children: () => (0, r.jsx)(f.ZP, {
          className: b.tile,
          participant: L,
          channel: E,
          width: A.width,
          inCall: true,
          popoutType: C.P.CALL_TILE,
          focused: true,
          noBorder: true,
          onContextMenu: M,
          onClick: v
        })
      })
    }) : null
  })
}