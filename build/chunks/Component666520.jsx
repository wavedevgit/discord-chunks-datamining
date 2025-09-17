/** Chunk was on 34712 **/
/** chunk id: 666520, original params: e,n,t (module,exports,require) **/
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
  Chunk799700 = require("./799700.js");

function p(e) {
  let {
    autoFocus: n = false,
    className: t,
    userId: p,
    onUpdate: m
  } = e, x = (0, l.e7)([s.Z], () => s.Z.hidePersonalInformation), {
    loading: b,
    note: h
  } = (0, a.Z)(p), g = r.useRef(null);
  return (r.useEffect(() => {
    if (!n || x) return;
    let e = g.current;
    (null == e ? true : e.selectionStart) != null && (e.focus(), e.setSelection(e.value.length, e.value.length))
  }, [n, x]), x) ? null : (0, o.jsx)("div", {
    className: t,
    children: (0, o.jsx)(i.lcI, {
      ref: g,
      className: f.textarea,
      disabled: b,
      placeholder: b ? u.intl.string(u.t["WLKx//"]) : u.intl.string(u.t.VBhOe3),
      "aria-label": u.intl.string(u.t.PbMNh4),
      onBlur: e => {
        let n = e.currentTarget.value;
        (null != h ? h : "") !== n && (null == m || m(), c.Z.updateNote(p, n))
      },
      onKeyPress: e => {
        if (13 === e.which)
          if (e.shiftKey) {
            var n;
            (null != (n = e.currentTarget.value.match(/\n/g)) ? n : []).length >= 5 && e.preventDefault()
          } else e.preventDefault(), e.currentTarget.blur();
        else e.which === d.yXg.SPACE && e.stopPropagation()
      },
      defaultValue: null != h ? h : true,
      maxLength: d.vuo
    })
  })
}