/** Chunk was on 11776 **/
/** chunk id: 786366, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./953529.js"), require("./997841.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk597312 = require("./597312.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk860719 = require("./860719.js"),
  Chunk621853 = require("./621853.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk137861 = require("./137861.js");

function u(e) {
  let {
    icon: t,
    title: n,
    description: l
  } = e;
  return <div className={d.row}>{<div className={d.rowIcon}><t size={"custom"} width={20} height={20} color={"currentColor"} /></div>}{<div className={d.rowText}>{<o.X6q variant={"text-xs/semibold"}>{n}</o.X6q>}{<o.Text variant={"text-sm/normal"}>{l}</o.Text>}</div>}</div>
}

function f(e) {
  let {
    user: t
  } = e, n = (0, i.e7)([c.Z], () => {
    var e;
    return null == (e = c.Z.getUserProfile(t.id)) ? true : e.application
  }), {
    hasMessageContent: f,
    hasGuildPresences: m,
    hasGuildMembers: p
  } = (0, a.w)({
    flags: null == n ? true : n.flags
  });
  return <l.zJ fade={true} className={d.scroller}>{f && <u icon={o.kBi} title={s.intl.string(s.t["7Tmhfn"])} description={s.intl.string(s.t["eu5x7+"])} />}{m && <u icon={o.iWm} title={s.intl.string(s.t.awYSsL)} description={s.intl.string(s.t.TpsXoK)} />}{p && <u icon={o.BFJ} title={s.intl.string(s.t.WuKeSE)} description={s.intl.string(s.t.wOBmtb)} />}{<o.Text variant={"text-xs/normal"}>{s.intl.format(s.t.b6nqk5, {
        helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
      })}</o.Text>}</l.zJ>
}