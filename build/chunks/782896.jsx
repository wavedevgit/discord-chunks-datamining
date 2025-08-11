/** Chunk was on 34779 **/
/** chunk id: 782896, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => m
}), require("./388685.js"), require("./290780.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk797670 = require("./797670.js"),
  Chunk29953 = require("./29953.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk836344 = require("./836344.js");

function f(e) {
  let {
    children: t
  } = e;
  return <s.ZP className={p.facepileItemContainer} mask={s.ZP.Masks.SQUIRCLE} width={25} height={25}>{t}</s.ZP>
}

function g(e) {
  let {
    guilds: t,
    numTruncated: n
  } = e;
  return <div className={p.guildIconList}>{t.map(e => <div className={p.guildIconItem}>{<div><u.V guild={e} size={20} /></div>}{<o.Text className={p.guildIconItemText} variant={"text-xs/medium"}>{e.name}</o.Text>}</div>)}{n > 0 && <o.Text variant={"text-xs/medium"} color={"text-secondary"}>{h.intl.format(d.default.bAzBIS, {
        numServers: n
      })}</o.Text>}</div>
}

function m(e) {
  let {
    guildIds: t
  } = e, n = (0, l.e7)([c.Z], () => c.Z.getGuildId()), s = (0, l.Wu)([a.Z], () => t.map(e => a.Z.getGuild(e)), [t]), m = (0, i.useMemo)(() => s.filter(e => null != e), [s]), {
    visibleGuilds: b,
    numTruncated: O,
    visibleGuildsTooltip: _,
    numTruncatedTooltipGuilds: y
  } = (0, i.useMemo)(() => {
    let e = [...m];
    if (null != n) {
      let t = m.findIndex(e => e.id === n);
      false !== t && (e.splice(t, 1), e.unshift(m[t]))
    }
    return 4 === e.length ? {
      visibleGuilds: e,
      numTruncated: 0,
      visibleGuildsTooltip: e,
      numTruncatedTooltipGuilds: 0
    } : {
      visibleGuilds: e.slice(0, 3),
      numTruncated: e.length - 3,
      visibleGuildsTooltip: e.slice(0, 15),
      numTruncatedTooltipGuilds: e.length - 15
    }
  }, [m, n]);
  return <o.DY3 aria-label={h.intl.string(d.default.TG0Qsb)} text={(0, r.jsx)(g, {
      guilds: _,
      numTruncated: y
    })} position={"top"}><div className={p.facepile}>{b.map(e => <f><u.V guild={e} size={20} /></f>)}{O > 0 && <f><o.Text className={p.textItem} color={"text-secondary"} variant={"text-xxs/semibold"}>{"+"}{O}</o.Text></f>}</div></o.DY3>
}