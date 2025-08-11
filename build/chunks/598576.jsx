/** Chunk was on 61366 **/
/** chunk id: 598576, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk864762 = require("./864762.js"),
  Chunk509340 = require("./509340.jsx"),
  Chunk135184 = require("./135184.jsx"),
  Chunk409553 = require("./409553.jsx"),
  Chunk494801 = require("./494801.jsx"),
  Chunk319392 = require("./319392.jsx"),
  Chunk798930 = require("./798930.js"),
  Chunk981631 = require("./981631.js"),
  Chunk475286 = require("./475286.js");

function b(e) {
  let {
    transitionState: t,
    onClose: n,
    analyticsLocation: b
  } = e, {
    slide: x,
    gotoNext: g,
    gotoError: C,
    handleWaitingForConnection: h,
    handleAuthToken: _,
    expectedCallbackState: m,
    callbackData: j
  } = (0, i.k)(b, p.ABu.XBOX);
  return <r.Y0X className={f.modal} transitionState={t} disableTrack={true} parentComponent={"XboxLinkModal"}><r.MyZ activeSlide={x} width={408}>{<r.Mi4 id={u.O.LANDING}><l.Z onContinue={g} onClose={n} /></r.Mi4>}{<r.Mi4 id={u.O.PRE_CONNECT}><c.Z isWaitingForConnection={false} onWaitingForConnection={h} onAuthToken={_} onError={C} onClose={n} /></r.Mi4>}{<r.Mi4 id={u.O.PRE_CONNECT_WAITING}><c.Z isWaitingForConnection={true} expectedCallbackState={m} onAuthToken={_} onError={C} onClose={n} /></r.Mi4>}{<r.Mi4 id={u.O.DISCORD_CONSENT}><s.Z authToken={j} onContinue={g} onError={C} onClose={n} /></r.Mi4>}{<r.Mi4 id={u.O.ERROR}><a.Z onContinue={g} onClose={n} /></r.Mi4>}{<r.Mi4 id={u.O.SUCCESS}><d.Z onClose={n} /></r.Mi4>}</r.MyZ></r.Y0X>
}