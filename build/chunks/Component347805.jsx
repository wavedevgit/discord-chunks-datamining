/** Chunk was on 63974 **/
/** chunk id: 347805, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk629403 = require("./629403.js"),
  Chunk612630 = require("./612630.js"),
  Chunk351906 = require("./351906.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk75945 = require("./75945.js");

function f(e) {
  let {
    autoFocus: t = false,
    className: n,
    userId: f,
    onUpdate: m
  } = e, A = (0, r.bG)([d.A], () => d.A.hidePersonalInformation), {
    loading: x,
    note: g
  } = (0, a.A)(f), j = i.useRef(null);
  return (i.useEffect(() => {
    if (!t || A) return;
    let e = j.current;
    (null == e ? true : e.selectionStart) != null && (e.focus(), e.setSelection(e.value.length, e.value.length))
  }, [t, A]), A) ? null : (0, l.jsx)("div", {
    className: n,
    children: (0, l.jsx)(s.d4u, {
      ref: j,
      className: p.P,
      disabled: x,
      placeholder: x ? u.intl.string(u.t["WLKx/9"]) : u.intl.string(u.t.VBhOe2),
      "aria-label": u.intl.string(u.t.PbMNh2),
      onBlur: e => {
        let t = e.currentTarget.value;
        (null != g ? g : "") !== t && (null == m || m(), o.A.updateNote(f, t))
      },
      onKeyPress: e => {
        if (13 === e.which)
          if (e.shiftKey) {
            var t;
            (null != (t = e.currentTarget.value.match(/\n/g)) ? t : []).length >= 5 && e.preventDefault()
          } else e.preventDefault(), e.currentTarget.blur();
        else e.which === c.Ks6.SPACE && e.stopPropagation()
      },
      defaultValue: null != g ? g : true,
      maxLength: c.T7x
    })
  })
}