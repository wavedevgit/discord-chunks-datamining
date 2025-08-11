/** Chunk was on 88934 **/
/** chunk id: 682807, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk794295 = require("./794295.js"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk881294 = require("./881294.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk845958 = require("./845958.js");

function h(e) {
  var t, n;
  let {
    application: a,
    className: l,
    innerClassName: o
  } = e, c = null != (n = null == (t = a.directory_entry) ? true : t.external_urls) ? n : [];
  return null != a.terms_of_service_url || null != a.privacy_policy_url || c.length > 0 ? <div className={i()(m.container, l)}>{<s.X6q variant={"heading-sm/semibold"} color={"header-primary"}>{p.intl.string(p.t.l6DP2t)}</s.X6q>}{<div className={i()(m.list, o)}>{c.map((e, t) => <g url={e.url}>{e.name}</g>)}{null != a.terms_of_service_url ? <f icon={s.aAW} url={a.terms_of_service_url}>{p.intl.string(p.t.s7STcX)}</f> : null}{null != a.privacy_policy_url ? <f icon={s.mBM} url={a.privacy_policy_url}>{p.intl.string(p.t.kH3JR0)}</f> : null}</div>}</div> : null
}

function g(e) {
  var t, n;
  let {
    url: a,
    children: i
  } = e, o = (0, c.ZP)(), u = d.Z.getByUrl(a), p = (0, l.wj)(o) ? null == u || null == (t = u.icon) ? true : t.darkSVG : null == u || null == (n = u.icon) ? true : n.lightSVG;
  return <f icon={true === p ? s.xPt : true} imageSrc={p} url={a}>{i}</f>
}

function f(e) {
  let {
    icon: t,
    imageSrc: n,
    iconColor: a,
    url: l,
    children: c
  } = e, d = (0, u.nu)(), p = null;
  null != t ? p = <t className={m.listIcon} color={null != a ? a : "currentColor"} width={20} height={20} size={"custom"} /> : null != n && (p = <img className={m.listImage} src={n} alt={""} />);
  let h = <r.Fragment>{p}{<s.Text className={m.listText} variant={"text-sm/medium"} selectable={true}>{c}</s.Text>}</r.Fragment>;
  return <o.Z href={l} className={i()(m.listItem, m.linkItem)} trusted={!d} useDefaultUnderlineStyles={false}>{h}</o.Z>
}