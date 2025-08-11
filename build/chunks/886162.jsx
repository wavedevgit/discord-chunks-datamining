/** Chunk was on 1272 **/
/** chunk id: 886162, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk990547 = require("./990547.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk232567 = require("./232567.js"),
  Chunk213609 = require("./213609.js"),
  Chunk313201 = require("./313201.js"),
  Chunk23434 = require("./23434.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk432637 = require("./432637.js");

function g(e) {
  let {
    transitionState: t
  } = e, g = (0, a.e7)([d.Z], () => d.Z.getAction()), [m, b] = i.useState(false), _ = (0, u.Dt)();
  async function O() {
    return b(true), g === p.c2C.AGREEMENTS && b(await (0, s.Lr)()), null
  }
  return (0, c.Z)({
    type: l.ImpressionTypes.VIEW,
    name: l.ImpressionNames.USER_AGREEMENTS,
    properties: {
      required_action: g
    }
  }, {}, []), <o.Y0X aria-labelledby={_} transitionState={t} parentComponent={"UserAgreementsModal"}>{<div id={_} />}{<o.xBx separator={false}><o.X6q variant={"heading-lg/semibold"}>{f.intl.string(f.t["7glvXl"])}</o.X6q></o.xBx>}{<o.hzk>{<o.Text variant={"text-md/normal"}>{g === p.c2C.AGREEMENTS ? f.intl.format(f.t.zHolhY, {}) : null}</o.Text>}{<div className={h.container}>{<ul className={h.links}>{<li>{f.intl.format(f.t.iw0hFh, {
              url: p.EYA.TERMS
            })}</li>}{<li>{f.intl.format(f.t["36klnJ"], {
              url: p.EYA.PAID_TERMS
            })}</li>}{<li>{f.intl.format(f.t.TquFBA, {
              url: p.EYA.PRIVACY
            })}</li>}{<li>{f.intl.format(f.t.ia96TU, {
              url: p.EYA.GUIDELINES
            })}</li>}</ul>}{<img className={h.image} alt={""} src={n(146714)} />}</div>}{<o.Text variant={"text-md/normal"} className={h.agreementDescription}>{f.intl.string(f.t["+USXQE"])}</o.Text>}</o.hzk>}{<o.mzw><o.zxk variant={"active"} text={f.intl.string(f.t["+TBKLy"])} loading={m} onClick={O} /></o.mzw>}</o.Y0X>
}