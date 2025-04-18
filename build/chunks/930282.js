/** Chunk was on 71350 **/
n.d(t, {
  HR: () => h,
  L5: () => f,
  ZP: () => b
});
var a = n(200651),
  i = n(192379),
  l = n(120356),
  r = n.n(l),
  o = n(653603),
  s = n.n(o),
  c = n(902704),
  d = n(453687),
  u = n(318713),
  m = n(981631),
  p = n(388032),
  g = n(161441),
  _ = n(852831);

function f(e, t) {
  return e.type === m.uaV.VOICE_HANGOUT_INVITE ? "" : e.hasFlag(m.iLy.SOURCE_MESSAGE_DELETED) ? p.NW.string(p.t.JOtgS0) : t
}

function h(e, t) {
  var n, a;
  let {
    message: i
  } = t, {
    message: l
  } = e;
  return (0, c.Z)(e, t, ["message"]) && i.content === l.content && i.state === l.state && (null == (n = i.editedTimestamp) ? void 0 : n.toString()) === (null == (a = l.editedTimestamp) ? void 0 : a.toString())
}
let b = i.memo(function(e) {
  var t;
  let {
    className: n,
    message: l,
    children: o,
    content: c,
    onUpdate: h,
    contentRef: b
  } = e, y = l.isEdited(), C = l.state === m.yb.SEND_FAILED, x = l.state === m.yb.SENDING, v = l.isCommandType(), T = null == (t = l.editedTimestamp) ? void 0 : t.toString(), O = i.useRef(!1);
  return i.useLayoutEffect(() => {
    O.current ? null != h && h() : O.current = !0
  }, [h, l.content, c, T, o]), (0, a.jsxs)("div", {
    id: (0, d.ut)(l),
    ref: b,
    className: r()(n, _.markup, {
      [g.messageContent]: !0,
      [g.isSending]: x && !v,
      [g.markupRtl]: "rtl" === s()(l.content),
      [g.isFailed]: C,
      [g.isUnsupported]: l.isUnsupported
    }),
    children: [null != o ? o : f(l, c), y && null != l.editedTimestamp && (0, a.jsxs)(a.Fragment, {
      children: [" ", (0, a.jsx)(u.Z, {
        timestamp: l.editedTimestamp,
        isEdited: !0,
        isInline: !1,
        children: (0, a.jsxs)("span", {
          className: g.edited,
          children: ["(", p.NW.string(p.t.C8sXIC), ")"]
        })
      })]
    })]
  })
}, h)