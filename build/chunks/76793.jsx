/** Chunk was on 75708 **/
/** chunk id: 76793, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk232567 = require("./232567.js"),
  Chunk700582 = require("./700582.js"),
  Chunk906732 = require("./906732.js");
require("./90641.js"), require("./615830.js");
var Chunk630759 = require("./630759.js"),
  Chunk931500 = require("./931500.js");
require("./921157.js");
var Chunk892001 = require("./892001.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.js"),
  Chunk552312 = require("./552312.js");

function b(e) {
  let {
    userId: t,
    count: n
  } = e, {
    analyticsLocations: u
  } = (0, c.ZP)(), b = (0, s.e7)([p.default], () => p.default.getUser(t)), x = g.ZP.getFormattedName(b), _ = r.useCallback(() => {
    (0, d.Zn)(t)
  }, [t]), j = r.useCallback(() => (0, m.openUserProfileModal)({
    userId: t,
    sourceAnalyticsLocations: u
  }), [t, u]);
  return r.useEffect(() => {
    (0, l.PR)(t)
  }, [t]), <div className={f.section}>{null != b && <o.Z className={f.avatar} user={b} size={a.EFr.SIZE_40} />}{<div className={f.text}>{<a.P3F className={f.username} onClick={j}><a.Text variant={"text-md/semibold"} color={"interactive-active"}>{x}</a.Text></a.P3F>}{<a.Text variant={"text-md/medium"} color={"header-secondary"}>{h.intl.format(h.t["/MBjYG"], {
          count: n
        })}</a.Text>}</div>}{<a.P3F onClick={_} className={f.sectionIconContainer}><a.XHJ size={"xs"} /></a.P3F>}</div>
}

function x(e) {
  let {
    className: t,
    userId: n,
    verification: s,
    index: l
  } = e, o = (0, d.bo)(s.timestamp), c = r.useCallback(() => {
    (0, d.ZU)(n, s.verifiedKey)
  }, [s.verifiedKey, n]);
  return <div className={t}>{<div className={f.text}>{<a.Text variant={"text-sm/semibold"} color={"interactive-active"}>{h.intl.format(h.t.N4qBBA, {
          index: l + 1
        })}</a.Text>}{<a.Text variant={"text-sm/medium"} color={"header-secondary"}>{o}</a.Text>}</div>}{<a.P3F className={f.icon} onClick={c}><a.Dio size={"md"} color={a.TVs.colors.INTERACTIVE_NORMAL} /></a.P3F>}</div>
}

function _(e) {
  let {
    userId: t
  } = e, n = (0, u._)(t);
  return <i.Fragment>{<b userId={t} count={n.length} />}{n.map((e, s) => <r.Fragment>{<x className={f.row} userId={t} index={s} verification={e} />}{s !== n.length - 1 && <div className={f.divider} />}</r.Fragment>)}</i.Fragment>
}
require("./20493.js")