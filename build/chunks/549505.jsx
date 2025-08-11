/** Chunk was on 71517 **/
/** chunk id: 549505, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => _
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk688465 = require("./688465.js"),
  Chunk547972 = require("./547972.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk332325 = require("./332325.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk347383 = require("./347383.js"),
  Chunk83173 = require("./83173.js");

function _(e) {
  let {
    transitionState: t,
    onClose: a
  } = e;
  return <n.Y0X transitionState={t} size={n.CgR.DYNAMIC} className={m.modalRoot} parentComponent={"MemberListContentLearnMoreModal"}>{<n.xBx separator={false} className={m.modalHeader}>{<div className={m.imageFrame}><img alt={c.intl.string(c.t.AWkQTk)} src={x} className={m.heroImage} /></div>}{<div className={m.headerWrapper}>{<n.X6q variant={"heading-xl/bold"}>{c.intl.string(c.t.gb37Ky)}</n.X6q>}{<i.Z className={m.betaTag} />}</div>}</n.xBx>}{<n.hzk className={m.modalContent}>{<div className={m.modalContentFrame}>{<n.Text variant={"text-md/medium"} color={"header-secondary"}>{c.intl.string(c.t.WKxo8v)}</n.Text>}{<h />}</div>}{<div className={m.modalFooter}>{<n.zxk onClick={a} variant={"primary"} fullWidth={true} text={c.intl.string(c.t["x/26d3"])} />}{<n.Text variant={"text-xs/normal"} color={"text-muted"} className={m.disclosureText}>{c.intl.format(c.t["5Ey5Dw"], {
            recentActivityURL: o.Z.getArticleURL(l.BhN.MEMBER_LIST_ACTIVITY_FEED),
            handleActivityPrivacyClick: () => {
              a(), (0, r.Z)(d.Z.ACTIVITY_PRIVACY)
            }
          })}</n.Text>}</div>}</n.hzk>}</n.Y0X>
}
let h = () => {
  let e = [{
    icon: <Chunk481060.iFz className={Chunk347383.icon} />,
    text: Chunk388032.intl.string(Chunk388032.t.vXBrdn)
  }, {
    icon: <Chunk481060.iWm className={Chunk347383.icon} />,
    text: Chunk388032.intl.string(Chunk388032.t.aExjOz)
  }, {
    icon: <Chunk481060.kBi className={Chunk347383.icon} />,
    text: Chunk388032.intl.string(Chunk388032.t["i7/QHB"])
  }, {
    icon: <Chunk481060.lMe className={Chunk347383.icon} />,
    text: Chunk388032.intl.string(Chunk388032.t.ZmBfKC)
  }];
  return <div className={Chunk347383.notes}>{module.map((e, t) => {
      let {
        icon: a,
        text: i
      } = e;
      return (0, s.jsxs)("div", {
        className: m.badgeNote,
        children: [(0, s.jsx)("div", {
          className: m.badge,
          children: a
        }), (0, s.jsx)(n.Text, {
          variant: "text-sm/medium",
          children: i
        })]
      }, "memberlist-learn-more-note-".concat(t))
    })}</div>
}