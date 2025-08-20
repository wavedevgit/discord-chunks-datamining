/** Chunk was on 75283 **/
/** chunk id: 666520, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk34854 = require("./34854.js"),
  Chunk531301 = require("./531301.js"),
  Chunk246946 = require("./246946.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk215258 = require("./215258.js");

function p(e) {
  let {
    autoFocus: t = false,
    className: n,
    userId: p,
    onUpdate: m
  } = e, b = (0, i.e7)([s.Z], () => s.Z.hidePersonalInformation), {
    loading: g,
    note: h
  } = (0, c.Z)(p), x = o.useRef(null);
  return (o.useEffect(() => {
    if (!t || b) return;
    let e = x.current;
    (null == e ? true : e.selectionStart) != null && (e.focus(), e.setSelection(e.value.length, e.value.length))
  }, [t, b]), b) ? null : (0, r.jsx)("div", {
    className: n,
    children: (0, r.jsx)(l.lcI, {
      ref: x,
      className: f.textarea,
      disabled: g,
      placeholder: g ? u.intl.string(u.t["WLKx//"]) : u.intl.string(u.t.VBhOe3),
      "aria-label": u.intl.string(u.t.PbMNh4),
      onBlur: e => {
        let t = e.currentTarget.value;
        (null != h ? h : "") !== t && (null == m || m(), a.Z.updateNote(p, t))
      },
      onKeyPress: e => {
        if (13 === e.which)
          if (e.shiftKey) {
            var t;
            (null != (t = e.currentTarget.value.match(/\n/g)) ? t : []).length >= 5 && e.preventDefault()
          } else e.preventDefault(), e.currentTarget.blur();
        else e.which === d.yXg.SPACE && e.stopPropagation()
      },
      defaultValue: null != h ? h : true,
      maxLength: d.vuo
    })
  })
}