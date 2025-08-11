/** Chunk was on web.js **/
/** chunk id: 89057, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Vq: () => y,
  c8: () => b,
  oQ: () => O
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk600164 = require("./600164.js"),
  Chunk63063 = require("./63063.js"),
  Chunk211242 = require("./211242.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk747168 = require("./747168.js"),
  Chunk51125 = require("./51125.js"),
  Chunk47268 = require("./47268.js");

function E(e) {
  let {
    className: t
  } = e, n = (0, c.ZP)(), i = (0, s.wj)(n) ? m : g;
  return <div className={o()(h.container, t)}>{<l.X6q className={h.header} variant={"heading-xl/semibold"}>{p.intl.string(p.t.vwMEHR)}</l.X6q>}{<l.Text className={h.description} variant={"text-md/normal"} color={"header-secondary"}>{<p>{p.intl.string(p.t.fev8MT)}</p>}{<p>{p.intl.format(p.t.IHxEJS, {
          helpdeskArticle: d.Z.getArticleURL(_.BhN.BLOCKED_PAYMENTS)
        })}</p>}</l.Text>}{<img src={i} className={h.splashImage} alt={"Blocked Payments"} />}</div>
}

function b() {
  return <E className={Chunk747168.settings} />
}

function y(e) {
  let {
    onClose: t
  } = e;
  return <r.Fragment>{<l.xBx className={h.blockedPaymentsModalHeader} justify={u.Z.Justify.END} data-migration-pending={true}><l.olH onClick={t} data-migration-pending={true} /></l.xBx>}{<l.hzk className={h.blockedPaymentsModalContent} data-migration-pending={true}><E className={h.modal} /></l.hzk>}</r.Fragment>
}

function O(e) {
  let {
    className: t
  } = e;
  return (0, f.Q)() ? <l.Zbd className={o()(h.blockedPaymentsWarning, t)} type={l.Zbd.Types.CUSTOM}>{<l.Mgn size={"custom"} width={20} height={20} className={h.blockedPaymentsWarningIcon} color={a.Z.unsafe_rawColors.YELLOW_300.css} />}{<l.Text variant={"text-sm/normal"}>{p.intl.format(p.t.NYkcCg, {
        helpdeskArticle: d.Z.getArticleURL(_.BhN.BLOCKED_PAYMENTS)
      })}</l.Text>}</l.Zbd> : null
}