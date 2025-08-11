/** Chunk was on 88934 **/
/** chunk id: 571737, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk783097 = require("./783097.js"),
  Chunk768581 = require("./768581.js"),
  Chunk956965 = require("./956965.js"),
  Chunk548514 = require("./548514.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk393023 = require("./393023.js");
let m = function(e) {
  let {
    application: t,
    onButtonsVisibilityChange: n
  } = e, m = a.useRef(null), h = a.useMemo(() => o.ZP.getApplicationIconURL({
    id: t.id,
    icon: t.icon,
    size: 96
  }), [t]), g = a.useMemo(() => {
    let e = [];
    return (0, s.vJ)(t) && e.push(u.intl.string(u.t.LO4f0N)), (0, s.Cb)(t) && (0 !== e.length && e.push("•"), e.push(u.intl.string(u.t["8z5B2d"]))), (0, s.Hu)(t) && (0 !== e.length && e.push("•"), e.push(u.intl.string(u.t["5khEk5"]))), e
  }, [t]);
  return <r.Fragment>{<c.Z application={t} bannerType={"detail"} iconURL={h} />}{<div className={p.avatarContainer} style={{
        height: 52
      }}><img src={h} alt={""} className={p.avatar} height={96} width={96} style={{
          borderWidth: 4,
          marginLeft: 28
        }} /></div>}{<div className={p.infoContainer}>{<div className={p.metadataContainer}>{<l.X6q variant={"heading-xxl/bold"} color={"header-primary"} lineClamp={1}>{t.name}</l.X6q>}{<div className={p.disclosuresContainer}>{g.map((e, t) => (0, r.jsx)(l.Text, {
            className: p.disclosuresText,
            variant: "text-xs/normal",
            color: "text-muted",
            children: e
          }, t))}</div>}</div>}{<i.$ innerRef={m} onChange={n} active={true}><d.Z ref={m} application={t} size={"md"} /></i.$>}</div>}</r.Fragment>
}