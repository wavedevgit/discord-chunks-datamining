/** Chunk was on 4566 **/
n.d(t, {
  Z: () => j
}), n(47120), n(978209);
var r = n(200651),
  i = n(192379),
  l = n(392711),
  o = n.n(l),
  a = n(442837),
  s = n(481060),
  c = n(904245),
  u = n(268350),
  d = n(926491),
  p = n(419922),
  h = n(314897),
  f = n(375954),
  m = n(594174),
  g = n(626135),
  b = n(51144),
  _ = n(901461),
  C = n(981631),
  v = n(388032),
  y = n(116068);
let x = "749054660769218631";

function j(e) {
  var t;
  let {
    channel: n
  } = e, [l, j] = i.useState("");
  i.useEffect(() => {
    (0, u.FQ)("847199849233514549", !0)
  }, []);
  let O = (0, a.e7)([f.Z, h.default], () => !!o()(f.Z.getMessages(n.id).toArray()).reverse().find(e => e.author.id !== h.default.getId() && e.state === C.yb.SENT && !(0, _.Z)(e))),
    E = (0, a.e7)([m.default], () => m.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
    N = null !== (t = b.ZP.useName(E)) && void 0 !== t ? t : v.NW.string(v.t.y1Wu2d),
    I = (0, a.e7)([d.Z], () => d.Z.getStickerById(x)),
    P = i.useCallback(async () => {
      if (null == l || "" === l) try {
        await c.Z.sendGreetMessage(n.id, x), g.default.track(C.rMx.DM_EMPTY_ACTION, {
          channel_id: n.id,
          channel_type: n.type,
          source: "Wave",
          type: "Send wave"
        })
      } catch (e) {
        e.ok || 429 !== e.status || j(v.NW.string(v.t["Whhv4+"]))
      }
    }, [n.id, n.type, l]),
    S = v.NW.formatToPlainString(v.t.m0zYbW, {
      username: N
    }),
    Z = null != l && "" !== l ? (0, r.jsx)(s.Text, {
      className: y.error,
      color: "text-danger",
      variant: "text-sm/normal",
      children: l
    }) : null;
  return O ? (0, r.jsxs)("div", {
    className: y.containerCompact,
    children: [(0, r.jsxs)(s.P3F, {
      className: null != l && "" !== l ? y.compactButtonDisabled : y.compactButton,
      "aria-label": v.NW.string(v.t.pJObYG),
      onClick: P,
      children: [(0, r.jsx)(p.ZP, {
        sticker: I,
        size: 24
      }), (0, r.jsx)(s.Text, {
        className: y.text,
        variant: "text-md/medium",
        children: S
      })]
    }), Z]
  }) : (0, r.jsxs)("div", {
    className: y.containerExpanded,
    children: [(0, r.jsx)(p.ZP, {
      sticker: I,
      size: 160
    }), (0, r.jsx)(s.zxk, {
      className: y.button,
      onClick: P,
      disabled: !!l,
      children: S
    }), Z]
  })
}