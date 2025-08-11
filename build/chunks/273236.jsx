/** Chunk was on 53512 **/
/** chunk id: 273236, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk867309 = require("./867309.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.js"),
  Chunk94546 = require("./94546.js"),
  Chunk699343 = require("./699343.js");
let x = Chunk73800.forwardRef(function(e, t) {
  let {} = e, [r, a] = s.useState("before"), [x, j] = s.useState(false), [g, _] = s.useState(false);
  s.useImperativeHandle(t, () => ({
    maybeChangeToAfterTab: () => (g || b("after"), g)
  }));
  let b = s.useCallback(e => {
    j(true), setTimeout(() => {
      l.unstable_batchedUpdates(() => {
        "after" === e && _(true), j(false), a(e)
      })
    }, 400)
  }, []);
  return <c.Ttm className={m.content}>{<div className={m.header}>{<c.Dkj size={"custom"} color={"currentColor"} width={40} height={40} />}{<c.X6q variant={"heading-xl/semibold"} color={"header-primary"}>{o.intl.string(o.t.c0Fhpa)}</c.X6q>}{<c.Text className={m.__invalid_subtitle} variant={"text-md/normal"} color={"header-secondary"}>{o.intl.string(o.t.dKPfBQ)}</c.Text>}</div>}{<div className={d.container}>{<div className={d.tabs}>{<div className={d.tabBackground} style={{
            left: "before" === r ? 0 : "50%"
          }} />}{<c.P3F className={d.tab} onClick={() => b("before")}><c.Text variant={"text-sm/medium"} color={"before" === r ? "header-primary" : "text-muted"}>{o.intl.string(o.t.sLv7LC)}</c.Text></c.P3F>}{<c.P3F className={d.tab} onClick={() => b("after")}><c.Text variant={"text-sm/medium"} color={"after" === r ? "header-primary" : "text-muted"}>{o.intl.string(o.t.R8eSY2)}</c.Text></c.P3F>}</div>}{<div className={d.previewContainer}>{<div className={d.guilds}>{<div className={d.unreadGuild}><img src={n(180681)} width={36} height={36} alt={"Example Guild Icon"} /></div>}{<div className={"after" === r ? d.guild : d.unreadGuild}><img src={n(390115)} width={36} height={36} alt={"Example Guild Icon"} /></div>}{<div className={"after" === r ? d.guild : d.unreadGuild}><img src={n(536411)} width={36} height={36} alt={"Example Guild Icon"} /></div>}</div>}{<div className={d.channels}>{<u mention={true} name={o.intl.string(o.t.WFejRk)} />}{<u name={o.intl.string(o.t.jqWm9f)} />}{<u grey={"after" === r} name={o.intl.string(o.t.p9z9Iy)} />}{<u grey={"after" === r} name={o.intl.string(o.t["2bdWDw"])} />}{<u name={o.intl.string(o.t["Ci+Our"])} />}{<u grey={"after" === r} name={o.intl.string(o.t["/7TEdn"])} />}{<u grey={"after" === r} name={o.intl.string(o.t["Ime/t7"])} />}</div>}</div>}{<h hidden={x || "after" === r} className={d.tipBefore1} text={o.intl.string(o.t.WrPMOD)} />}{<h hidden={x || "after" === r} className={d.tipBefore2} text={o.intl.string(o.t["pApL7+"])} />}{<h hidden={x || "before" === r} className={d.tipAfter1} text={o.intl.string(o.t.eZb3iY)} />}{<h hidden={x || "before" === r} className={d.tipAfter2} text={o.intl.string(o.t.M3KrJS)} />}</div>}</c.Ttm>
});

function h(e) {
  let {
    text: t,
    className: n,
    hidden: s
  } = e;
  return <div className={a()(n, d.tip, {
      [d.hidden]: s
    })}>{<c.Text className={d.__invalid_tipText} variant={"text-sm/normal"} color={"text-secondary"}>{t}</c.Text>}{<div className={d.tipLine} />}</div>
}

function u(e) {
  let {
    grey: t,
    mention: n,
    name: s
  } = e;
  return <div className={a()(d.channel, {
      [d.grey]: t,
      [d.mention]: n
    })}>{<c.VL1 size={"xs"} color={"currentColor"} className={d.channelIcon} />}{<c.Text variant={"text-md/medium"} className={d.channelName}>{s}</c.Text>}</div>
}