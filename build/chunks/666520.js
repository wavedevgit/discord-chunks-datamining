/** Chunk was on 81818 **/
t.d(n, {
  Z: () => p
}), t(301563);
var r = t(200651),
  o = t(192379),
  i = t(442837),
  l = t(481060),
  s = t(34854),
  c = t(531301),
  a = t(246946),
  d = t(981631),
  u = t(388032),
  f = t(741170);

function p(e) {
  let {
    autoFocus: n = !1,
    className: t,
    userId: p,
    onUpdate: b
  } = e, m = (0, i.e7)([a.Z], () => a.Z.hidePersonalInformation), {
    loading: v,
    note: g
  } = (0, c.Z)(p), y = o.useRef(null);
  return (o.useEffect(() => {
    if (!n || m) return;
    let e = y.current;
    (null == e ? void 0 : e.selectionStart) != null && (e.focus(), e.setSelection(e.value.length, e.value.length))
  }, [n, m]), m) ? null : (0, r.jsx)("div", {
    className: t,
    children: (0, r.jsx)(l.lcI, {
      ref: y,
      className: f.textarea,
      disabled: v,
      placeholder: v ? u.NW.string(u.t["WLKx//"]) : u.NW.string(u.t.VBhOe3),
      "aria-label": u.NW.string(u.t.PbMNh4),
      onBlur: e => {
        let n = e.currentTarget.value;
        (null != g ? g : "") !== n && (null == b || b(), s.Z.updateNote(p, n))
      },
      onKeyPress: e => {
        if (13 === e.which) {
          if (e.shiftKey) {
            var n;
            (null !== (n = e.currentTarget.value.match(/\n/g)) && void 0 !== n ? n : []).length >= 5 && e.preventDefault()
          } else e.preventDefault(), e.currentTarget.blur()
        } else e.which === d.yXg.SPACE && e.stopPropagation()
      },
      defaultValue: null != g ? g : void 0,
      maxLength: d.vuo
    })
  })
}