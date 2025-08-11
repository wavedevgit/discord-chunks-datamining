/** Chunk was on 11776 **/
/** chunk id: 666520, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk34854 = require("./34854.js"),
  Chunk531301 = require("./531301.js"),
  Chunk246946 = require("./246946.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk343074 = require("./343074.js");

function m(e) {
  let {
    autoFocus: t = false,
    className: n,
    userId: m,
    onUpdate: p
  } = e, g = (0, i.e7)([s.Z], () => s.Z.hidePersonalInformation), {
    loading: b,
    note: j
  } = (0, c.Z)(m), h = l.useRef(null);
  return (l.useEffect(() => {
    if (!t || g) return;
    let e = h.current;
    (null == e ? true : e.selectionStart) != null && (e.focus(), e.setSelection(e.value.length, e.value.length))
  }, [t, g]), g) ? null : <div className={n}><o.lcI ref={h} className={f.textarea} disabled={b} placeholder={b ? u.intl.string(u.t["WLKx//"]) : u.intl.string(u.t.VBhOe3)} aria-label={u.intl.string(u.t.PbMNh4)} onBlur={e => {
        let t = e.currentTarget.value;
        (null != j ? j : "") !== t && (null == p || p(), a.Z.updateNote(m, t))
      }} onKeyPress={e => {
        if (13 === e.which)
          if (e.shiftKey) {
            var t;
            (null != (t = e.currentTarget.value.match(/\n/g)) ? t : []).length >= 5 && e.preventDefault()
          } else e.preventDefault(), e.currentTarget.blur();
        else e.which === d.yXg.SPACE && e.stopPropagation()
      }} defaultValue={null != j ? j : true} maxLength={d.vuo} /></div>
}