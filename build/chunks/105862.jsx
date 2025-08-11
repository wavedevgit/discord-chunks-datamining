/** Chunk was on web.js **/
/** chunk id: 105862, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk782568 = require("./782568.js"),
  Chunk63063 = require("./63063.js"),
  Chunk827498 = require("./827498.js"),
  Chunk888617 = require("./888617.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk434666 = require("./434666.js"),
  Chunk983008 = require("./983008.js"),
  Chunk478408 = require("./478408.js");

function g(e) {
  let {
    showImage: t = true,
    padding: n = false
  } = e, g = (0, s.ZP)(), E = (0, o.ap)(g) ? m : h, b = i.useCallback(() => {
    (0, l.Z)(c.Z.getAppsSupportURL(f.BhN.APPS_LEARN_MORE))
  }, []), {
    trackSectionImpressionRef: y
  } = (0, d.Z)({
    sectionName: u.L3.NEW_TO_APPS,
    numItems: 1,
    numVisibleItems: 1
  });
  return <div className={n ? p.containerPadding : true}><div ref={e => {
        y.current = e
      }} className={p.container}>{t && <img className={p.image} src={E} alt={""} aria-hidden={true} />}{<div className={p.body}>{<a.X6q variant={"heading-lg/bold"} color={"header-primary"}>{_.intl.string(_.t["kw8/ER"])}</a.X6q>}{<a.Text variant={"text-xs/normal"} color={"text-default"}>{_.intl.string(_.t.GZoV1N)}</a.Text>}</div>}{<a.zxk variant={"primary"} text={_.intl.string(_.t.Ye51oa)} aria-label={_.intl.formatToPlainString(_.t.xx5Sur, {
          sectionTitle: _.intl.string(_.t["kw8/ER"]),
          sectionBody: _.intl.string(_.t.GZoV1N)
        })} onClick={b} />}</div></div>
}