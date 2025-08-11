/** Chunk was on 4419 **/
/** chunk id: 745367, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk864762 = require("./864762.js"),
  Chunk779341 = require("./779341.js"),
  Chunk642566 = require("./642566.jsx"),
  Chunk742699 = require("./742699.jsx"),
  Chunk686494 = require("./686494.jsx"),
  Chunk573703 = require("./573703.jsx"),
  Chunk798930 = require("./798930.js"),
  Chunk981631 = require("./981631.js"),
  Chunk475286 = require("./475286.js");

function h(n) {
  let {
    transitionState: e,
    onClose: t,
    analyticsLocation: h
  } = n, {
    slide: p,
    gotoNext: x,
    gotoError: b,
    handleWaitingForConnection: g,
    handleAuthToken: f,
    expectedCallbackState: v,
    callbackData: j
  } = (0, r.k)(h, C.ABu.CRUNCHYROLL);
  return <i.Y0X className={_.modal} transitionState={e} disableTrack={true} parentComponent={"CrunchyrollLinkModal"}><i.MyZ activeSlide={p} width={408}>{<i.Mi4 id={u.O.LANDING}><a.Z onContinue={x} onClose={t} /></i.Mi4>}{<i.Mi4 id={u.O.PRE_CONNECT}><c.Z isWaitingForConnection={false} onWaitingForConnection={g} onAuthToken={f} onError={b} onClose={t} /></i.Mi4>}{<i.Mi4 id={u.O.PRE_CONNECT_WAITING}><c.Z isWaitingForConnection={true} expectedCallbackState={v} onAuthToken={f} onError={b} onClose={t} /></i.Mi4>}{<i.Mi4 id={u.O.DISCORD_CONSENT}><s.Z authToken={j} onContinue={x} onError={b} onClose={t} /></i.Mi4>}{<i.Mi4 id={u.O.ERROR}><l.Z onContinue={x} onClose={t} /></i.Mi4>}{<i.Mi4 id={u.O.SUCCESS}><d.Z onClose={t} /></i.Mi4>}</i.MyZ></i.Y0X>
}