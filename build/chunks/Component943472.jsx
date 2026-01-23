/** Chunk was on 36133 **/
/** chunk id: 943472, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk367513 = require("./367513.js"),
  Chunk401843 = require("./401843.js"),
  Chunk512513 = require("./512513.js"),
  Chunk386467 = require("./386467.js"),
  Chunk923917 = require("./923917.jsx"),
  Chunk574172 = require("./574172.js"),
  Chunk981355 = require("./981355.js"),
  Chunk175203 = require("./175203.jsx"),
  Chunk461782 = require("./461782.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk313961 = require("./313961.js"),
  Chunk164617 = require("./164617.js"),
  Chunk567987 = require("./567987.jsx"),
  Chunk806931 = require("./806931.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk732154 = require("./732154.js");
let L = [Chunk512513.z];

function m(e) {
  let {
    windowKey: t,
    channelId: n,
    participantId: o
  } = e, m = (0, i.bG)([f.A], () => f.A.getChannel(n)), E = (0, i.bG)([O.A], () => O.A.getParticipant(n, o), [n, o]), g = null != m && null != E, _ = (0, i.bG)([I.A], () => I.A.getVoiceChannelId() === n);
  l.useEffect(() => {
    g && _ || d.close(t)
  }, [g, _, t]);
  let U = l.useCallback(e => {
      let {
        unmountWindow: t
      } = e;
      s.A.returnParticipant(n, o), t()
    }, [n, o]),
    j = (0, y.E)({
      channel: m
    }),
    M = l.useCallback(() => {
      (0, T.Ay)(E) && (0, a.A9)(E.stream, {
        forceMultiple: true
      })
    }, [E]),
    v = l.useMemo(() => null == E ? A.intl.string(A.t.lfzt24) : E.type === T.lp.USER ? E.user.username : E.type === T.lp.STREAM ? A.intl.formatToPlainString(A.t["/DC1y9"], {
      username: E.user.username
    }) : A.intl.string(A.t["8vlBo7"]), [E]),
    x = (0, h.A)();
  return (0, r.jsx)(c.A, {
    withTitleBar: true,
    keybinds: L,
    windowKey: t,
    title: v,
    channelId: n,
    onBeforeUnload: U,
    appContext: C.BRT.CALL_TILE_POPOUT,
    hideModals: true,
    children: g ? (0, r.jsx)(u.A.Provider, {
      value: m.guild_id,
      children: (0, r.jsx)(w.Ay, {
        timeout: 2e3,
        children: () => (0, r.jsx)(p.Ay, {
          className: P.V,
          participant: E,
          channel: m,
          width: x.width,
          inCall: true,
          popoutType: b.N.CALL_TILE,
          focused: true,
          noBorder: true,
          onContextMenu: j,
          onClick: M
        })
      })
    }) : null
  })
}