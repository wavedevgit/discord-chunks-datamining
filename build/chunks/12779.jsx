/** Chunk was on 49152 **/
/** chunk id: 12779, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk194082 = require("./194082.js"),
  Chunk14338 = require("./14338.js"),
  Chunk76692 = require("./76692.js");
let d = Chunk73800.memo(function(e) {
  let {
    label: t,
    participantCount: n,
    onClick: i,
    className: l,
    collapsed: d,
    speakers: h,
    channel: p,
    isStreamLive: f
  } = e;
  return <s.P3F onClick={i} className={a()(u.container, l)}>{null == h ? <s.BFJ size={"custom"} color={"currentColor"} width={20} height={20} className={u.micIcon} /> : <s.S6n size={"custom"} color={"currentColor"} width={20} height={20} className={u.micIcon} />}{<s.Text color={"header-primary"} variant={"text-md/semibold"} className={u.text}>{t}{" — "}{n}</s.Text>}{d && null != p && null != h && h.length > 0 && <r.Fragment>{<c.Z channel={p} speakers={h} />}{f && <o.ZP />}</r.Fragment>}{<s.CJ0 size={"custom"} color={"currentColor"} width={20} height={20} className={a()(u.downIcon, {
        [u.upIcon]: d
      })} />}</s.P3F>
})