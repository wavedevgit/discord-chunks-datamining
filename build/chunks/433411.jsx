/** Chunk was on 75708 **/
/** chunk id: 433411, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.js"),
  Chunk864106 = require("./864106.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk580747 = require("./580747.js"),
  Chunk345861 = require("./345861.jsx"),
  Chunk150039 = require("./150039.js"),
  Chunk993413 = require("./993413.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk142436 = require("./142436.js");

function x(e) {
  let {
    user: t,
    guild: n,
    className: s,
    sectionTitle: p,
    forcedDivider: x = false,
    withTutorial: j = false,
    isTryItOutFlow: E = false
  } = e, {
    analyticsLocations: C
  } = (0, c.ZP)(), O = null != n, {
    userAvatarDecoration: v,
    guildAvatarDecoration: S,
    pendingAvatarDecoration: T,
    pendingErrors: I
  } = (0, g.$U)(t, n), N = (0, m.Z)("enable_avatar_decoration_uploads"), y = r.useCallback(() => (0, u.ps)({
    analyticsLocations: C,
    isTryItOutFlow: E,
    guild: n
  }), [C, E, n]), A = E || true !== T ? null != T : (O ? S : v) != null, P = j ? o.gtL : l.zx;
  return <h.Z className={s} forcedDivider={x} hasBackground={true} title={p} errors={I}>{<div className={b.buttonsContainer}>{<P size={l.zx.Sizes.SMALL} onClick={y} className={a()({
          [b.buttonHighlighted]: j
        })}>{f.intl.string(f.t.BVcYCw)}</P>}{A && <div data-button-hoisted-classname-wrapper={true} className={b.removeButton}><o.zxk variant={"secondary"} size={"sm"} text={(0, d.ad)(t, n) ? f.intl.string(f.t.CHf9iI) : f.intl.string(f.t.OrokWl)} onClick={function() {
            (0, g.PO)(null == n ? true : n.id, null)
          }} /></div>}</div>}{t.isStaff() && N && <_ user={t} />}</h.Z>
}
let _ = e => {
  let {
    user: t
  } = e;
  return <div className={b.overrideButtonsContainer}>{<o.Text variant={"text-xs/bold"}>{"STAFF ONLY and Experimental. Upload a decoration to view throughout the app."}</o.Text>}{<p.Z onChange={e => {
        null != e && (t.avatarDecoration = {
          asset: e,
          skuID: "PALUE000000001"
        })
      }} buttonCTA={"Upload Override"} />}</div>
}