/** Chunk was on 54844 **/
/** chunk id: 996701, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk88309 = require("./88309.js"),
  Chunk735247 = require("./735247.js");
let u = e => {
  let {
    data: {
      url: t,
      link_text: n,
      link_description: l,
      is_localized: o
    }
  } = e;
  return o ? <a.P3F role={"link"} className={i()(d.linkButton, c.listElement)} onClick={() => {
      (0, s.Z)(t)
    }}>{<div className={d.linkTextContainer}>{<a.Text className={d.__invalid_linkText} variant={"text-md/semibold"}>{n}</a.Text>}{null != l && "" !== l && <a.Text variant={"text-md/normal"} color={"text-muted"}>{l}</a.Text>}</div>}{<a.Gr1 size={"sm"} color={"currentColor"} className={d.linkIcon} />}</a.P3F> : null
};

function m(e) {
  let {
    elements: t
  } = e;
  if (null == t || 0 === t.length || null == t.find(e => {
      let {
        data: t
      } = e;
      return t.is_localized
    })) return null;
  let n = t.map((e, t) => {
      let {
        data: n
      } = e;
      return <u data={n} />
    }),
    l = t.some(e => {
      let {
        data: t
      } = e;
      return t.is_header_hidden
    });
  return <div className={i()(d.linksContainer, c.listElementWrapper)}>{!l && <a.X6q variant={"heading-sm/semibold"} color={"header-secondary"} className={d.header}>{o.intl.string(o.t.hvVgAQ)}</a.X6q>}{n}</div>
}