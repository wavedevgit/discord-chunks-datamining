/** Chunk was on 28538 **/
/** chunk id: 51299, original params: n,e,i (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk99690 = require("./99690.js"),
  Chunk23551 = require("./23551.jsx"),
  Chunk122021 = require("./122021.js"),
  Chunk388032 = require("./388032.js"),
  Chunk625276 = require("./625276.js");

function u(n) {
  let {
    onComplete: e,
    excludedPlatformTypes: i,
    includedPlatformTypes: t
  } = n, l = (0, r.fq)();
  return <div className={d.connectionsContainer}>{l.filter(n => !(null == i ? true : i.has(n.type)) && (null == t || t.has(n.type))).map(n => (0, a.jsx)(s.Z, {
      type: n.type,
      className: d.accountBtn,
      innerClassName: d.accountBtnInner,
      onConnect: () => e(n.type)
    }, n.type))}</div>
}

function m(n) {
  let {
    integrations: e,
    onCompleteApplication: i
  } = n;
  if (null == e || null == i) return null;
  let t = e.filter(n => {
    var e;
    return (null == (e = n.application) ? true : e.roleConnectionsVerificationUrl) != null
  });
  return 0 === t.length ? null : <a.Fragment>{<o.Text variant={"text-sm/medium"} color={"interactive-normal"} className={d.applicationsHeader}>{p.intl.string(p.t.PHjkRE)}</o.Text>}{<div className={d.applicationsContainer}>{t.map(n => {
        let e = n.application;
        l()(null != e, "application is null");
        let t = null == e ? true : e.bot;
        return l()(null != t, "bot is null"), (0, a.jsxs)(o.P3F, {
          onClick: () => i(e.id),
          className: d.application,
          children: [(0, a.jsx)(c.Z, {
            user: t,
            className: d.applicationIcon
          }), (0, a.jsxs)("div", {
            className: d.applicationNameContainer,
            children: [(0, a.jsx)(o.X6q, {
              variant: "heading-sm/semibold",
              className: d.applicationNameText,
              children: e.name
            }), null != e.description && e.description.length > 0 ? (0, a.jsx)(o.Text, {
              variant: "text-xs/normal",
              color: "header-secondary",
              className: d.applicationNameText,
              children: e.description
            }) : null]
          })]
        }, n.id)
      })}</div>}</a.Fragment>
}

function x(n) {
  let {
    transitionState: e,
    onComplete: i,
    onClose: t,
    excludedPlatformTypes: l,
    includedPlatformTypes: c,
    integrations: s,
    onCompleteApplication: r
  } = n;
  return <o.Y0X aria-label={p.intl.string(p.t.syl6HR)} size={o.CgR.SMALL} transitionState={e} className={d.container} fullscreenOnMobile={false} parentComponent={"ConnectionsGridModal"}><o.hzk>{<div className={d.header}>{<o.X6q className={d.title} variant={"text-lg/semibold"}>{p.intl.string(p.t.syl6HR)}</o.X6q>}{<o.olH onClick={t} />}</div>}{<u onComplete={function(n) {
          i(n), t()
        }} excludedPlatformTypes={l} includedPlatformTypes={c} />}{<m integrations={s} onCompleteApplication={null != r ? function(n) {
          null == r || r(n), t()
        } : true} />}</o.hzk></o.Y0X>
}