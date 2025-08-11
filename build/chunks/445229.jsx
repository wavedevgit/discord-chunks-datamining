/** Chunk was on 61526 **/
/** chunk id: 445229, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk5192 = require("./5192.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk542776 = require("./542776.js");

function v(e) {
  let {
    user: t
  } = e, n = m.ZP.useName(null, null, t);
  return <div className={f.userItem}>{<u.Z user={t} />}{<s.Text color={"header-primary"} variant={"text-sm/medium"}>{n}</s.Text>}</div>
}

function h(e) {
  let {
    clip: t,
    className: n
  } = e, l = (0, o.Wu)([c.default], () => t.users.map(c.default.getUser).filter(d.lm)), u = r.useCallback(e => {
    let {
      row: t
    } = e, n = l[t];
    return null == n ? null : <v user={n} />
  }, [l]);
  return <div className={i()(n, f.root)}>{<div className={f.__invalid_header}><s.vwX className={f.title}>{p.intl.string(p.t.WTozwc)}{<div className={f.userCountPill}>{<s.Text color={"text-default"} variant={"text-xs/medium"}>{l.length}</s.Text>}{<s.iFz size={"xs"} color={"currentColor"} className={f.userCountIcon} />}</div>}</s.vwX></div>}{<s.aVo className={f.__invalid_userList} sectionHeight={0} rowHeight={40} sections={[l.length]} renderRow={u} />}</div>
}