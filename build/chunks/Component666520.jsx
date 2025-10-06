/** Chunk was on 31553 **/
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
  Chunk460211 = require("./460211.js");

function p(e) {
  let {
    autoFocus: n = false,
    className: t,
    userId: p,
    onUpdate: f
  } = e, h = (0, r.e7)([c.Z], () => c.Z.hidePersonalInformation), {
    loading: x,
    note: j
  } = (0, a.Z)(p), v = i.useRef(null);
  return (i.useEffect(() => {
    if (!n || h) return;
    let e = v.current;
    (null == e ? true : e.selectionStart) != null && (e.focus(), e.setSelection(e.value.length, e.value.length))
  }, [n, h]), h) ? null : (0, l.jsx)("div", {
    className: t,
    children: (0, l.jsx)(o.lcI, {
      ref: v,
      className: m.textarea,
      disabled: x,
      placeholder: x ? u.intl.string(u.t["WLKx//"]) : u.intl.string(u.t.VBhOe3),
      "aria-label": u.intl.string(u.t.PbMNh4),
      onBlur: e => {
        let n = e.currentTarget.value;
        (null != j ? j : "") !== n && (null == f || f(), s.Z.updateNote(p, n))
      },
      onKeyPress: e => {
        if (13 === e.which)
          if (e.shiftKey) {
            var n;
            (null != (n = e.currentTarget.value.match(/\n/g)) ? n : []).length >= 5 && e.preventDefault()
          } else e.preventDefault(), e.currentTarget.blur();
        else e.which === d.yXg.SPACE && e.stopPropagation()
      },
      defaultValue: null != j ? j : true,
      maxLength: d.vuo
    })
  })
}