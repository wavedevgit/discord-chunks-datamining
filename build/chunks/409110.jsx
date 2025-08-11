/** Chunk was on 38062 **/
/** chunk id: 409110, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk485386 = require("./485386.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk598952 = require("./598952.js"),
  Chunk392739 = require("./392739.jsx"),
  Chunk916001 = require("./916001.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk721692 = require("./721692.js");
let h = "expanded-area";

function j(e) {
  let {
    attachments: t,
    role: n,
    roleLocked: i
  } = e, [l, m] = a.useState(false);
  return <r.Fragment>{<s.P3F className={f.viewContents} onClick={() => {
        m(e => !e)
      }} aria-expanded={l} aria-controls={h}>{<s.Text variant={"text-sm/medium"} color={"text-default"}>{l ? x.intl.string(x.t.DKNxgI) : x.intl.string(x.t.ESEKub)}</s.Text>}{<o.Z className={f.caretIcon} direction={l ? o.Z.Directions.UP : o.Z.Directions.DOWN} />}</s.P3F>}{<s.LZC size={12} />}{l && <ul className={f.contentsContainer} id={h}>{<d.Z label={x.intl.string(x.t.DWYJub)}><ul className={f.attachmentGrid}>{t.map(e => (0, r.jsx)(c.Z, {
            attachment: e
          }, e.id))}</ul></d.Z>}{null != n && <r.Fragment>{<div className={f.separator} />}{<d.Z label={x.intl.string(x.t.o9xphY)}><u.Z role={n} textVariant={"text-md/medium"} locked={i} /></d.Z>}</r.Fragment>}</ul>}</r.Fragment>
}

function _(e) {
  var t;
  let {
    listing: n
  } = e, a = null != (t = n.attachments) ? t : [], s = (0, i.e7)([l.Z], () => {
    var e;
    return l.Z.getRole(n.guild_id, null != (e = n.role_id) ? e : m.lds)
  }), o = !n.has_entitlement;
  return 0 === a.length && null == s ? null : 0 === a.length && null != s ? <u.Z role={s} textVariant={"text-md/medium"} locked={o} /> : <j attachments={a} role={s} roleLocked={o} />
}