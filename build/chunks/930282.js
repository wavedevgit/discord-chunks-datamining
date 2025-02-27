/** Chunk was on 78846 **/
n.d(t, {
  HR: () => _,
  L5: () => f,
  ZP: () => b
});
var a = n(200651),
  i = n(192379),
  r = n(120356),
  o = n.n(r),
  l = n(653603),
  s = n.n(l),
  c = n(902704),
  d = n(453687),
  u = n(318713),
  m = n(981631),
  p = n(388032),
  g = n(432957),
  h = n(509045);

function f(e, t) {
  return e.type === m.uaV.VOICE_HANGOUT_INVITE ? "" : e.hasFlag(m.iLy.SOURCE_MESSAGE_DELETED) ? p.NW.string(p.t.JOtgS0) : t
}

function _(e, t) {
  var n, a;
  let {
    message: i
  } = t, {
    message: r
  } = e;
  return (0, c.Z)(e, t, ["message"]) && i.content === r.content && i.state === r.state && (null === (n = i.editedTimestamp) || void 0 === n ? void 0 : n.toString()) === (null === (a = r.editedTimestamp) || void 0 === a ? void 0 : a.toString())
}
let b = i.memo(function(e) {
  var t;
  let {
    className: n,
    message: r,
    children: l,
    content: c,
    onUpdate: _,
    contentRef: b
  } = e, y = r.isEdited(), v = r.state === m.yb.SEND_FAILED, x = r.state === m.yb.SENDING, C = r.isCommandType(), O = null === (t = r.editedTimestamp) || void 0 === t ? void 0 : t.toString(), j = i.useRef(!1);
  return i.useLayoutEffect(() => {
    j.current ? null != _ && _() : j.current = !0
  }, [_, r.content, c, O, l]), (0, a.jsxs)("div", {
    id: (0, d.ut)(r),
    ref: b,
    className: o()(n, h.markup, {
      [g.messageContent]: !0,
      [g.isSending]: x && !C,
      [g.markupRtl]: "rtl" === s()(r.content),
      [g.isFailed]: v,
      [g.isUnsupported]: r.isUnsupported
    }),
    children: [null != l ? l : f(r, c), y && null != r.editedTimestamp && (0, a.jsxs)(a.Fragment, {
      children: [" ", (0, a.jsx)(u.Z, {
        timestamp: r.editedTimestamp,
        isEdited: !0,
        isInline: !1,
        children: (0, a.jsxs)("span", {
          className: g.edited,
          children: ["(", p.NW.string(p.t.C8sXIC), ")"]
        })
      })]
    })]
  })
}, _)