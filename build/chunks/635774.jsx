/** Chunk was on 85342 **/
/** chunk id: 635774, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk927687 = require("./927687.js");

function c(e) {
  let {
    onClose: t
  } = e;
  return <div className={l.infoContainer}>{<i.X6q className={l.finishTitle} color={"header-primary"} variant={"heading-xl/bold"}>{s.intl.string(s.t["3C+rbG"])}</i.X6q>}{<i.Text className={l.subtitleFinish} color={"header-secondary"} variant={"text-md/medium"}>{s.intl.string(s.t.TS1L09)}</i.Text>}{<i.Text className={l.promptFinish} color={"header-secondary"} variant={"text-md/medium"}>{s.intl.format(s.t.bWE0ZG, {
        onClick: () => {
          t(), a.Z.open(o.oAB.ACCOUNT)
        }
      })}</i.Text>}{<div data-button-hoisted-classname-wrapper={true} className={l.button}><i.zxk variant={"primary"} size={"sm"} text={s.intl.string(s.t["yD/zkp"])} type={"button"} onClick={t} /></div>}</div>
}