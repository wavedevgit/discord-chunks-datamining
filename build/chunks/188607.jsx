/** Chunk was on 88934 **/
/** chunk id: 188607, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk678694 = require("./678694.js"),
  Chunk216780 = require("./216780.js"),
  Chunk388032 = require("./388032.js"),
  Chunk675017 = require("./675017.js"),
  Chunk882008 = require("./882008.js");
let p = function(e) {
  let {
    selectedCategoryId: t,
    searchAllCategories: n
  } = e, p = (0, i.e7)([s.Z], () => s.Z.getCategories()), m = a.useMemo(() => {
    var e;
    return null == (e = p.find(e => e.id === t)) ? true : e.name
  }, [p, t]), h = t === o.MU || null == m ? c.intl.string(c.t["FVJt+/"]) : c.intl.formatToPlainString(c.t.FjCaND, {
    categoryName: m
  }), g = t === o.MU ? c.intl.string(c.t.GXiMtb) : c.intl.format(c.t.JaLoFB, {
    onClick: n
  });
  return <div className={d.container}>{<img alt={""} src={u} className={d.image} />}{<l.X6q variant={"heading-xl/semibold"} className={d.header}>{h}</l.X6q>}{<l.Text variant={"text-md/normal"} color={"header-secondary"}>{g}</l.Text>}</div>
}