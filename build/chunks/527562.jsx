/** Chunk was on web.js **/
/** chunk id: 527562, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk699553 = require("./699553.js"),
  Chunk314852 = require("./314852.js"),
  Chunk65361 = require("./65361.js"),
  Chunk878184 = require("./878184.js"),
  Chunk798476 = require("./798476.js"),
  Chunk423252 = require("./423252.jsx"),
  Chunk835941 = require("./835941.js");
let E = 50001;

function b(e) {
  let {
    guildId: t,
    name: n,
    setPopoutRef: o,
    onClose: b
  } = e, {
    analyticsLocations: y
  } = (0, u.ZP)(c.Z.GUILD_PROFILE), {
    guildProfile: O,
    fetchGuildProfile: v,
    fetchStatus: I
  } = (0, _.u)(t), T = (0, s.e7)([f.Z], () => f.Z.getErrorCode(t)), S = i.useRef(null), A = i.useCallback(() => {
    v(true)
  }, [v]);
  i.useEffect(() => {
    v()
  }, [v]), i.useEffect(() => {
    (0, d.vb)(t, y)
  }, [t, y]), i.useEffect(() => {
    null == o || o(null == S ? true : S.current)
  }, [S, o]);
  let N = i.useMemo(() => I === f.a.NOT_FETCHED || I === f.a.FETCHING ? <div className={a()(g.container, g.spinnerContainer)}><l.$jN /></div> : null == O && T === E ? <div className={g.container}><m.Z guildId={t} name={n} /></div> : null == O ? <div className={g.container}><p.Z name={n} onRetry={A} /></div> : <div className={g.container}><h.ZP profile={O} onClose={b} /></div>, [I, O, T, t, n, A, b]);
  return <l.VqE ref={S} aria-label={null == O ? true : O.name}>{N}</l.VqE>
}