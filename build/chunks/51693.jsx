/** Chunk was on 52030 **/
/** chunk id: 51693, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js"), require("./457542.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk658550 = require("./658550.js"),
  Chunk481060 = require("./481060.js"),
  Chunk507453 = require("./507453.js"),
  Chunk388032 = require("./388032.js");

function d(e) {
  let {
    mfaChallenge: t,
    finish: n,
    setSlide: d,
    onClose: c,
    isSlideReady: u,
    headerAlignStart: h
  } = e, [f, m] = r.useState(false), [g, x] = r.useState(null), [p, S] = r.useState(""), j = r.useRef(null);
  return r.useEffect(() => {
    if (u) {
      var e;
      null == (e = j.current) || e.focus()
    }
  }, [u]), <form onSubmit={e => {
      e.preventDefault(), m(true), x(null), n({
        mfaType: "totp",
        data: p
      }).catch(e => {
        var t, n;
        x(null != (n = null == (t = e.body) ? true : t.message) ? n : e.message)
      }).finally(() => {
        m(false)
      })
    }}>{<a.Z.SlideHeader onClose={c} headerAlignStart={h} />}{<a.Z.SlideContent scrollbarType={"none"}><s.xJW title={o.intl.string(o.t.HZPBOT)}>{<s.oil inputRef={j} onChange={S} placeholder={o.intl.string(o.t.tARzgo)} maxLength={i.gH} minLength={i.gH} value={p} autoComplete={"one-time-code"} spellCheck={"false"} disabled={f} />}{<a.Z.SlideError error={g} />}</s.xJW></a.Z.SlideContent>}{<a.Z.SlideFooter mfaChallenge={t} setSlide={d} showConfirm={true} disabled={p.length !== i.gH} submitting={f} />}</form>
}