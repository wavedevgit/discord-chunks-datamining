/** Chunk was on 22988 **/
/** chunk id: 795691, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js"), require("./457542.js"), require("./642613.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk279881 = require("./279881.js"),
  Chunk383124 = require("./383124.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk955373 = require("./955373.js");

function d(e) {
  let {
    guildId: t,
    selectedGameApplicationIds: n,
    onUpdateGames: d,
    disabled: u
  } = e, {
    topGames: m,
    tryFetchTopGames: g
  } = (0, a.I)(), p = m.get(t), [h, f] = i.useState(false);
  i.useEffect(() => {
    f(true), g(t).finally(() => {
      f(false)
    })
  }, [t, g]);
  let b = i.useMemo(() => null == p ? [] : Object.keys(p).filter(e => !n.includes(e)).sort((e, t) => p[t].score - p[e].score), [p, n]),
    x = i.useCallback(e => {
      n.includes(e) ? d(n.filter(t => t !== e)) : d([...n, e])
    }, [d, n]);
  return h && null == p ? <l.$jN /> : null == b || 0 === b.length ? null : <r.Fragment>{<div className={c.separator} />}{<div className={c.gamesContainer}>{<l.Text variant={"text-xs/semibold"} color={"text-muted"}>{o.intl.string(o.t.bFGpub)}</l.Text>}{<div className={c.gamesList}>{b.map(e => (0, r.jsx)(s.Z, {
          applicationId: e,
          selected: false,
          onClick: x,
          disabled: u
        }, e))}</div>}</div>}</r.Fragment>
}