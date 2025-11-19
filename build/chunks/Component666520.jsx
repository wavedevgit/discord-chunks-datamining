/** Chunk was on 93979 **/
/** chunk id: 666520, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
    autoFocus: n = false,
    className: t,
    userId: p,
    onUpdate: f
  } = e, x = (0, o.e7)([c.Z], () => c.Z.hidePersonalInformation), {
    loading: h,
    note: v
  } = (0, a.Z)(p), j = i.useRef(null);
  return (i.useEffect(() => {
    if (!n || x) return;
    let e = j.current;
    (null == e ? true : e.selectionStart) != null && (e.focus(), e.setSelection(e.value.length, e.value.length))
  }, [n, x]), x) ? null : (0, l.jsx)("div", {
    className: t,
    children: (0, l.jsx)(r.lcI, {
      ref: j,
      className: m.textarea,
      disabled: h,
      placeholder: h ? u.intl.string(u.t["WLKx/9"]) : u.intl.string(u.t.VBhOe2),
      "aria-label": u.intl.string(u.t.PbMNh2),
      onBlur: e => {
        let n = e.currentTarget.value;
        (null != v ? v : "") !== n && (null == f || f(), s.Z.updateNote(p, n))
      },
      onKeyPress: e => {
        if (13 === e.which)
          if (e.shiftKey) {
            var n;
            (null != (n = e.currentTarget.value.match(/\n/g)) ? n : []).length >= 5 && e.preventDefault()
          } else e.preventDefault(), e.currentTarget.blur();
        else e.which === d.yXg.SPACE && e.stopPropagation()
      },
      defaultValue: null != v ? v : true,
      maxLength: d.vuo
    })
  })
}