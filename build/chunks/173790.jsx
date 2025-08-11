/** Chunk was on web.js **/
/** chunk id: 173790, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk218061 = require("./218061.js"),
  Chunk481060 = require("./481060.js"),
  Chunk361213 = require("./361213.js"),
  Chunk778569 = require("./778569.js"),
  Chunk213459 = require("./213459.js"),
  Chunk835473 = require("./835473.js"),
  Chunk541099 = require("./541099.js"),
  Chunk827498 = require("./827498.js"),
  Chunk783097 = require("./783097.js"),
  Chunk753972 = require("./753972.js"),
  Chunk387658 = require("./387658.js"),
  Chunk536650 = require("./536650.js"),
  Chunk675993 = require("./675993.js"),
  Chunk689079 = require("./689079.js"),
  Chunk388032 = require("./388032.js"),
  Chunk189102 = require("./189102.js"),
  Chunk413097 = require("./413097.js");
let I = 2048,
  T = 84;

function S(e) {
  var t;
  let {
    context: n,
    application: l,
    sectionName: c
  } = e, I = "channel" === n.type ? n.channel : true, S = (0, o.e7)([f.Z], () => f.Z.entrypoint()), N = null != (t = (0, d.q)(l.id === b.bi.BUILT_IN ? null : l.id)) ? t : l, C = (0, p.ye)(N) ? A : E.Z, R = i.useRef(null), [P, w] = i.useState(false), {
    iconURL: D,
    name: L
  } = i.useMemo(() => (0, p.sl)(N, {
    fakeAppIconURL: v,
    size: T
  }), [N]), x = (0, u.PL)(true, true), M = (0, u.LD)(null == I ? true : I.guild_id, true), k = i.useMemo(() => (0, u.If)(n, N.id), [x, M, n, N.id]), j = !k.isGuildInstalled && !k.isUserInstalled;
  return i.useEffect(() => {
    j && u.ZP.queryInstallOnDemandApp(N.id, null == I ? true : I.id)
  }, [N.id, null == I ? true : I.id, j]), <s.u2D className={O.container} fade={true} ref={R} role={"region"} aria-label={y.intl.formatToPlainString(y.t["4OP4Ul"], {
      applicationName: L
    })}>{<g.Z application={N} context={n} name={L} iconURL={D} scrollerRef={R} sectionName={c} />}{null != D && <h.Z src={D} className={O.appIcon} />}{<a.Z size={54} />}{<C context={n} application={N} sectionName={c} hasCommands={P} />}{S === _._b.TEXT ? <m.Z context={n} application={N} sectionName={c} installOnDemand={j} setHasCommands={w} /> : null}</s.u2D>
}

function A(e) {
  let {
    context: t,
    application: n,
    sectionName: i,
    hasCommands: o
  } = e, a = (0, c.Z)({
    applicationId: n.id,
    size: I,
    names: ["embedded_cover"]
  }), s = (0, p.yJ)(n), u = null != s && null != s.activity_preview_video_asset_id ? (0, l.Z)(n.id, s.activity_preview_video_asset_id) : null;
  return <E.Z context={t} application={n} imageCoverUrl={a.url} videoUrl={u} sectionName={i} hasCommands={o} />
}