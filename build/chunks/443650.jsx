/** Chunk was on 88806 **/
/** chunk id: 443650, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk809086 = require("./809086.js"),
  Chunk760146 = require("./760146.js");

function a(e) {
  let {
    className: t,
    onClose: r
  } = e;
  return <l.P3F className={c()(u.closeButtonContainer, t)} onClick={r}><l.Dio size={"xs"} color={"currentColor"} className={u.closeButtonIcon} /></l.P3F>
}

function s(e) {
  let {
    guildProductListing: t,
    onClose: r,
    className: o
  } = e;
  return <l.xBx className={c()(u.header, o)} separator={false}>{<i.Z className={u.headerImage} listing={t} imageSize={500} alt={""} />}{<a className={u.closeButton} onClose={r} />}</l.xBx>
}