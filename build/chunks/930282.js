/** Chunk was on 60608 **/
"use strict";
n.d(t, {
  HR: () => b,
  L5: () => _,
  ZP: () => h
});
var r = n(200651),
  o = n(192379),
  a = n(120356),
  i = n.n(a),
  s = n(653603),
  c = n.n(s),
  l = n(902704),
  u = n(453687),
  d = n(318713),
  p = n(981631),
  g = n(388032),
  m = n(681894),
  f = n(662758);

function _(e, t) {
  return e.type === p.uaV.VOICE_HANGOUT_INVITE ? "" : e.hasFlag(p.iLy.SOURCE_MESSAGE_DELETED) ? g.NW.string(g.t.JOtgS0) : t
}

function b(e, t) {
  var n, r;
  let {
    message: o
  } = t, {
    message: a
  } = e;
  return (0, l.Z)(e, t, ["message"]) && o.content === a.content && o.state === a.state && (null === (n = o.editedTimestamp) || void 0 === n ? void 0 : n.toString()) === (null === (r = a.editedTimestamp) || void 0 === r ? void 0 : r.toString())
}
let h = o.memo(function(e) {
  var t;
  let {
    className: n,
    message: a,
    children: s,
    content: l,
    onUpdate: b,
    contentRef: h
  } = e, y = a.isEdited(), v = a.state === p.yb.SEND_FAILED, O = a.state === p.yb.SENDING, C = a.isCommandType(), x = null === (t = a.editedTimestamp) || void 0 === t ? void 0 : t.toString(), j = o.useRef(!1);
  return o.useLayoutEffect(() => {
    j.current ? null != b && b() : j.current = !0
  }, [b, a.content, l, x, s]), (0, r.jsxs)("div", {
    id: (0, u.ut)(a),
    ref: h,
    className: i()(n, f.markup, {
      [m.messageContent]: !0,
      [m.isSending]: O && !C,
      [m.markupRtl]: "rtl" === c()(a.content),
      [m.isFailed]: v,
      [m.isUnsupported]: a.isUnsupported
    }),
    children: [null != s ? s : _(a, l), y && null != a.editedTimestamp && (0, r.jsxs)(r.Fragment, {
      children: [" ", (0, r.jsx)(d.Z, {
        timestamp: a.editedTimestamp,
        isEdited: !0,
        isInline: !1,
        children: (0, r.jsxs)("span", {
          className: m.edited,
          children: ["(", g.NW.string(g.t.C8sXIC), ")"]
        })
      })]
    })]
  })
}, b)