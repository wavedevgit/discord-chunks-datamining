/** Chunk was on 54844 **/
/** chunk id: 273389, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.js"),
  Chunk388032 = require("./388032.js"),
  Chunk130883 = require("./130883.js");
let c = e => {
  let t, {
      button: n,
      submitting: c,
      disableNext: d,
      onClick: u,
      canNavigateBack: m,
      onBackClicked: p,
      isModeratorReport: g
    } = e,
    x = l.useRef(null),
    _ = null != n && "cancel" !== n.type,
    b = m && (null == n ? true : n.type) !== "done",
    h = _ || b;
  if (l.useEffect(() => {
      if ((null == n ? true : n.type) === "submit" || (null == n ? true : n.type) === "done") {
        var e;
        null == (e = x.current) || e.focus()
      }
    }, [null == n ? true : n.type]), !h) return null;
  let f = s.intl.string(s.t.i4jeWV);
  return (null == n ? true : n.type) === "submit" ? (t = "critical-primary", f = g ? s.intl.string(o.default.ZUyreX) : s.intl.string(s.t["G+vU8/"])) : (null == n ? true : n.type) === "next" ? f = s.intl.string(s.t.PDTjLC) : (null == n ? true : n.type) === "cancel" && (f = s.intl.string(s.t["ETE/oK"]), t = "secondary"), <i.mzw data-migration-pending={true} direction={a.Z.Direction.HORIZONTAL}><i.hE2 fullWidth={b && _}>{b && <i.zxk onClick={p} variant={"secondary"} disabled={c} text={s.intl.string(s.t["13/7kZ"])} />}{_ && <i.zxk onClick={() => {
          null != n && u(n)
        }} variant={t} disabled={c || d} buttonRef={x} text={f} />}</i.hE2></i.mzw>
}