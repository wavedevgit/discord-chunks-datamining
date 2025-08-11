/** Chunk was on web.js **/
/** chunk id: 388035, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk704215 = require("./704215.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk970731 = require("./970731.js"),
  Chunk2818 = require("./2818.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk327298 = require("./327298.js"),
  Chunk235810 = require("./235810.js");
let p = Chunk704215.z.FOR_LATER_POPOUT_COACHMARK,
  h = () => <div className={Chunk327298.imageContainer}><img className={Chunk327298.image} src={Chunk235810} alt={""} /></div>,
  m = e => <l.ZP className={f.container} asset={(0, r.jsx)(h, {})} header={d.intl.string(d.t.qPbFKy)} content={d.intl.string(d.t.URrJq6)} buttonCTA={d.intl.string(d.t["NX+WJC"])} buttonProps={{
      color: o.Tt.WHITE,
      innerClassName: f.primaryButton
    }} onClick={() => e(u.L.USER_DISMISS)} markAsDismissed={e} caretPosition={l.DF.TOP_RIGHT} />;

function g(e) {
  let {
    location: t,
    children: n,
    targetElementRef: i
  } = e, {
    enabled: o,
    inInbox: l
  } = c.Z.useExperiment({
    location: "ForLaterCoachmarkWeb"
  }, {
    autoTrackExposure: false
  }), u = t === (l ? "inbox-button" : "bookmarks-button"), d = o && u ? [p] : [], [f, _] = (0, s.US)(d, true);
  return f !== p ? n : <a.yRy targetElementRef={i} renderPopout={() => m(_)} position={"bottom"} align={"right"} animation={a.yRy.Animation.TRANSLATE} shouldShow={true}>{() => n}</a.yRy>
}