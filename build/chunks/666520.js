/** Chunk was on 88235 **/
n.d(t, {
  Z: () => p
}), n(35282);
var r = n(200651),
  l = n(192379),
  i = n(442837),
  o = n(481060),
  s = n(34854),
  a = n(531301),
  c = n(246946),
  d = n(981631),
  u = n(388032),
  f = n(343074);

function p(e) {
  let {
    autoFocus: t = !1,
    className: n,
    userId: p,
    onUpdate: h
  } = e, j = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation), {
    loading: g,
    note: m
  } = (0, a.Z)(p), v = l.useRef(null);
  return (l.useEffect(() => {
    if (!t || j) return;
    let e = v.current;
    (null == e ? void 0 : e.selectionStart) != null && (e.focus(), e.setSelection(e.value.length, e.value.length))
  }, [t, j]), j) ? null : (0, r.jsx)("div", {
    className: n,
    children: (0, r.jsx)(o.lcI, {
      ref: v,
      className: f.textarea,
      disabled: g,
      placeholder: g ? u.intl.string(u.t["WLKx//"]) : u.intl.string(u.t.VBhOe3),
      "aria-label": u.intl.string(u.t.PbMNh4),
      onBlur: e => {
        let t = e.currentTarget.value;
        (null != m ? m : "") !== t && (null == h || h(), s.Z.updateNote(p, t))
      },
      onKeyPress: e => {
        if (13 === e.which)
          if (e.shiftKey) {
            var t;
            (null != (t = e.currentTarget.value.match(/\n/g)) ? t : []).length >= 5 && e.preventDefault()
          } else e.preventDefault(), e.currentTarget.blur();
        else e.which === d.yXg.SPACE && e.stopPropagation()
      },
      defaultValue: null != m ? m : void 0,
      maxLength: d.vuo
    })
  })
}