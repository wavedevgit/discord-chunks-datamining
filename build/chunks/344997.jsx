/** Chunk was on web.js **/
/** chunk id: 344997, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => E
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk788080 = require("./788080.js"),
  Chunk800530 = require("./800530.js"),
  Chunk388032 = require("./388032.js"),
  Chunk94740 = require("./94740.js");
let f = e => o()().diff(o().unix(e), "days");

function _(e) {
  let {
    classificationId: t
  } = e, i = () => {
    (0, s.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("25183"), n.e("3940"), n.e("18831"), n.e("68464")]).then(n.bind(n, 41164));
      return n => <e classificationId={t} source={c.s.SystemDM} transitionState={n.transitionState} onClose={n.onClose} />
    })
  };
  return <s.eee onClick={i} className={d.detailsButton}>{u.intl.string(u.t.QsqdXF)}</s.eee>
}

function p(e) {
  let {
    learnMoreLink: t
  } = e;
  return <s.eee className={d.detailsButton} href={t}>{u.intl.string(u.t["8/GdRE"])}</s.eee>
}

function h(e) {
  let {
    ctaType: t,
    classificationId: n,
    learnMoreLink: i
  } = e;
  switch (t) {
    case c.wo.POLICY_VIOLATION_DETAIL:
      if (null == n) return null;
      return <_ classificationId={n} />;
    case c.wo.LEARN_MORE_LINK:
      if (null == i) return null;
      return <p learnMoreLink={i} />;
    default:
      return null
  }
}

function m(e) {
  let {
    iconType: t
  } = e, n = {
    default: <s.MqZ size={"xs"} color={a.Z.colors.TEXT_LINK.css} />,
    danger: <s.aNP color={a.Z.colors.STATUS_DANGER} />
  };
  return null != t && t in n ? <div className={d.icon}>{n[t]}</div> : null
}

function g(e) {
  let {
    children: t,
    theme: n
  } = e, i = {
    default: d.defaultFooterContainer,
    danger: d.dangerFooterContainer
  };
  return <div className={i[null != n ? n : "default"]}>{t}</div>
}

function E(e) {
  var t, n;
  if (null == e.embed || null == e.embed.fields) return null;
  let i = (0, l.fr)(e.embed);
  return null == i ? null : <s.P3F className={d.safetyPolicyNoticeContainer}>{<div className={d.noticeContent}>{<div className={d.headerRow}>{<m iconType={i.icon} />}{<s.Text variant={"text-md/semibold"}>{i.header}</s.Text>}</div>}{<div className={d.incidentTiming}><s.Text variant={"text-xs/medium"}>{u.intl.format(u.t.eevFb2, {
            daysAgo: f(null != (n = i.timestamp) ? n : 0)
          })}</s.Text></div>}{<div className={d.noticeBody}><s.Text variant={"text-md/normal"} color={"text-muted"}>{i.body}</s.Text></div>}</div>}{<g theme={i.theme}>{null == (t = i.ctas) ? true : t.map(e => (0, r.jsx)(h, {
        ctaType: e,
        classificationId: i.classification_id,
        learnMoreLink: i.learn_more_link
      }, e))}</g>}</s.P3F>
}