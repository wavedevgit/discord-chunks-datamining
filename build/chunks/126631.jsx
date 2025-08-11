/** Chunk was on 75708 **/
/** chunk id: 126631, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk541716 = require("./541716.js"),
  Chunk752305 = require("./752305.js"),
  Chunk893718 = require("./893718.js"),
  Chunk313201 = require("./313201.js"),
  Chunk131704 = require("./131704.js"),
  Chunk993413 = require("./993413.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk967600 = require("./967600.js");
let h = (0, Chunk313201.hQ)(),
  f = (0, Chunk131704.kt)({
    id: "1",
    type: Chunk981631.d4z.DM
  }),
  b = (0, Chunk313201.hQ)();

function x(e) {
  let {
    sectionTitle: t,
    errors: n,
    onBioChange: c,
    pendingBio: d,
    placeholder: x,
    currentBio: _,
    disabled: j = false
  } = e, [E, C] = r.useState(null != d ? d : _), [O, v] = r.useState((0, l.JM)(E)), S = r.useRef(false);
  return r.useEffect(() => {
    if (true === d) {
      let e = (0, l.JM)(_);
      C(_), v(e)
    }
  }, [d, _]), <u.Z title={t} titleId={h} description={p.intl.string(p.t.Bbw6AQ)} errors={n} disabled={j}>{<o.ZP aria-describedby={b} aria-labelledby={h} className={g.bioTextAreaContainer} innerClassName={g.bioTextArea} maxCharacterCount={m.tPV} onChange={function(e, t, n) {
        t !== E && (C(t), v(n), c(t))
      }} placeholder={x} channel={f} textValue={E} richValue={O} type={a.Ie.PROFILE_BIO_INPUT} onBlur={() => {
        S.current = false
      }} onFocus={() => {
        S.current = true
      }} focused={S.current} onSubmit={function() {
        return new Promise(e => {
          e({
            shouldClear: false,
            shouldRefocus: true
          })
        })
      }} />}{<s.nn4 id={b}>{p.intl.format(p.t["+DFxLS"], {
        maxLength: m.tPV
      })}</s.nn4>}</u.Z>
}