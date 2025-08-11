/** Chunk was on 93886 **/
/** chunk id: 650613, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk255367 = require("./255367.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk892001 = require("./892001.js"),
  Chunk594174 = require("./594174.js"),
  Chunk719247 = require("./719247.js"),
  Chunk71585 = require("./71585.js"),
  Chunk146282 = require("./146282.js"),
  Chunk897674 = require("./897674.js"),
  Chunk561308 = require("./561308.js"),
  Chunk206583 = require("./206583.js"),
  Chunk873289 = require("./873289.js");

function b(e) {
  let {
    id: t
  } = e, a = (0, r.e7)([o.default], () => o.default.getUser(t));
  return null == a ? null : <l.P3F className={p.entryAuthor} onClick={function() {
      (0, s.openUserProfileModal)({
        sourceAnalyticsLocations: [i.Z.DEV_TOOLS],
        userId: t
      })
    }}><l.Text variant={"text-md/semibold"}>{a.username}</l.Text></l.P3F>
}

function f() {
  var e;
  let t = (0, Chunk442837.e7)([Chunk146282.Z], () => Chunk146282.Z.getFeed(Chunk206583.YN.GLOBAL_FEED)),
    a = (0, Chunk442837.e7)([Chunk146282.Z], () => Chunk146282.Z.getFilters()),
    i = (0, Chunk442837.cj)([Chunk719247.Z], () => {
      var e;
      let a = {};
      for (let n of null != (e = null == exports ? true : exports.entries) ? module : []) require[(0, Chunk719247.T)(Chunk255367.content)] = Chunk719247.Z.canRenderContent(Chunk255367.content);
      return require
    }, [exports]),
    s = (0, Chunk442837.e7)([Chunk71585.Z], () => Chunk71585.Z.getImpressionCappedItemIds());
  if (null == require) return null;
  let o = null == exports || null == (e = exports.entries) ? true : module.flatMap(e => {
    let {
      content: t
    } = e;
    if (!(0, m.g)(a, t)) return [];
    let r = i[(0, c.T)(t)];
    return <li className={p.locatorEntry}>{<b type={t.author_type} id={t.author_id} />}{!r && <l.Text variant={"text-md/normal"}>{"Expired or no matching presence"}</l.Text>}{(0, x.n2)(t) && <l.Text variant={"text-md/normal"}>{"Expired at "}{t.expires_at}</l.Text>}{s.has(t.id) && <l.Text variant={"text-md/normal"}>{"Impression capped"}</l.Text>}</li>
  });
  return <Chunk481060.hjN>{<Chunk481060.vwX>{"Selected Content"}</Chunk481060.vwX>}{null != Chunk594174 ? <ul>{Chunk594174}</ul> : <div>{"(none?)"}</div>}</Chunk481060.hjN>
}