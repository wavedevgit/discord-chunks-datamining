/** Chunk was on 64228 **/
/** chunk id: 347805, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => p
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

function p(e) {
  let {
    autoFocus: l = false,
    className: t,
    userId: p,
    onUpdate: m
  } = e, x = (0, r.bG)([d.A], () => d.A.hidePersonalInformation), {
    loading: A,
    note: j
  } = (0, o.A)(p), h = i.useRef(null);
  return (i.useEffect(() => {
    if (!l || x) return;
    let e = h.current;
    (null == e ? true : e.selectionStart) != null && (e.focus(), e.setSelection(e.value.length, e.value.length))
  }, [l, x]), x) ? null : (0, n.jsx)("div", {
    className: t,
    children: (0, n.jsx)(s.d4u, {
      ref: h,
      className: f.P,
      disabled: A,
      placeholder: A ? u.intl.string(u.t["WLKx/9"]) : u.intl.string(u.t.VBhOe2),
      "aria-label": u.intl.string(u.t.PbMNh2),
      onBlur: e => {
        let l = e.currentTarget.value;
        (null != j ? j : "") !== l && (null == m || m(), a.A.updateNote(p, l))
      },
      onKeyPress: e => {
        if (13 === e.which)
          if (e.shiftKey) {
            var l;
            (null != (l = e.currentTarget.value.match(/\n/g)) ? l : []).length >= 5 && e.preventDefault()
          } else e.preventDefault(), e.currentTarget.blur();
        else e.which === c.Ks6.SPACE && e.stopPropagation()
      },
      defaultValue: null != j ? j : true,
      maxLength: c.T7x
    })
  })
}