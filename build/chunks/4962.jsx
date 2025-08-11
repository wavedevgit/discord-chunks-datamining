/** Chunk was on 1272 **/
/** chunk id: 4962, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./415506.js");
var r, Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk700582 = require("./700582.js"),
  Chunk451478 = require("./451478.js"),
  Chunk388032 = require("./388032.js"),
  Chunk36028 = require("./36028.js"),
  f = ((r = f || {})[r.STAFF_NOTES = 1] = "STAFF_NOTES", r);
let h = Chunk442837.ZP.connectStores([Chunk451478.Z], () => ({
    animate: Chunk451478.Z.isFocused()
  }))(e => {
    let {
      user: t,
      className: n,
      animate: r
    } = e;
    return <div className={a()(p.staffReviewHeader, n)}>{<c.Z size={s.EFr.SIZE_32} user={t} animate={r} />}{<div className={p.headerText}>{<div className={p.label}>{d.intl.string(d.t.vmzMZG)}</div>}{<div className={p.username}>{t.username}</div>}</div>}</div>
  }),
  g = e => {
    let {
      data: t,
      className: n
    } = e;
    if (1 === t.type) {
      if (null == t.staffNotes) return null;
      let {
        user: e,
        content: r
      } = t.staffNotes;
      return null == e ? null : <div className={n}>{<h user={e} className={p.header} />}{<div className={p.notes}>{r}</div>}</div>
    }
    throw Error("Unknown type")
  };
g.Types = f;
let m = g