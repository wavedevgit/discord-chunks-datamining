/** Chunk was on 93979 **/
/** chunk id: 666520, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => f
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

function f(e) {
  let {
    autoFocus: n = false,
    className: t,
    userId: f,
    onUpdate: p
  } = e, x = (0, r.e7)([a.Z], () => a.Z.hidePersonalInformation), {
    loading: h,
    note: b
  } = (0, s.Z)(f), j = o.useRef(null);
  return (o.useEffect(() => {
    if (!n || x) return;
    let e = j.current;
    (null == e ? true : e.selectionStart) != null && (e.focus(), e.setSelection(e.value.length, e.value.length))
  }, [n, x]), x) ? null : (0, l.jsx)("div", {
    className: t,
    children: (0, l.jsx)(i.lcI, {
      ref: j,
      className: m.textarea,
      disabled: h,
      placeholder: h ? u.intl.string(u.t["WLKx//"]) : u.intl.string(u.t.VBhOe3),
      "aria-label": u.intl.string(u.t.PbMNh4),
      onBlur: e => {
        let n = e.currentTarget.value;
        (null != b ? b : "") !== n && (null == p || p(), c.Z.updateNote(f, n))
      },
      onKeyPress: e => {
        if (13 === e.which)
          if (e.shiftKey) {
            var n;
            (null != (n = e.currentTarget.value.match(/\n/g)) ? n : []).length >= 5 && e.preventDefault()
          } else e.preventDefault(), e.currentTarget.blur();
        else e.which === d.yXg.SPACE && e.stopPropagation()
      },
      defaultValue: null != b ? b : true,
      maxLength: d.vuo
    })
  })
}