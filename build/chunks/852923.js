/** Chunk was on 76282 **/
n.d(t, {
  Z: () => h
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  l = n(481060),
  a = n(922611),
  s = n(592125),
  c = n(944486),
  u = n(471253),
  d = n(623633),
  _ = n(930180),
  p = n(388032),
  E = n(211534);

function f(e) {
  let t = c.Z.getVoiceChannelId();
  if (null == t) return;
  let n = s.Z.getChannel(t);
  null != n && (0, u.RK)(n, e)
}

function m(e) {
  var t, n;
  let {
    channelId: i
  } = e, s = null !== (t = (0, _._d)(i)) && void 0 !== t ? t : 0, c = null !== (n = (0, _.K3)(i)) && void 0 !== n ? n : 0, u = (0, a.D)({
    location: "invited_to_speak_header"
  });
  return s > 0 && c > 0 ? (0, r.jsx)("div", {
    className: E.blocked,
    children: (0, r.jsx)("div", {
      className: o()(E.blockedText, E.noIcon),
      children: p.NW.string(p.t.xlJRfn)
    })
  }) : u && s > 0 ? (0, r.jsx)("div", {
    className: E.blocked,
    children: (0, r.jsx)("div", {
      className: o()(E.blockedText, E.noIcon),
      children: p.NW.string(p.t.WYad9f)
    })
  }) : s > 0 ? (0, r.jsxs)("div", {
    className: E.blocked,
    children: [u ? null : (0, r.jsx)(l.t6m, {
      size: "xxs",
      color: "currentColor",
      className: E.blockedIcon
    }), (0, r.jsx)("div", {
      className: o()(E.blockedText, {
        [E.noIcon]: u
      }),
      children: p.NW.format(p.t.ATpigY, {
        number: s
      })
    })]
  }) : c > 0 ? (0, r.jsx)("div", {
    className: E.blocked,
    children: (0, r.jsx)("div", {
      className: o()(E.blockedText, E.noIcon),
      children: p.NW.string(p.t.eHq2OD)
    })
  }) : null
}

function h() {
  let e = (0, d.Z)();
  return null == e ? null : (0, r.jsxs)(l.qXd, {
    className: E.container,
    color: l.DM8.DEFAULT,
    children: [(0, r.jsx)("div", {
      children: p.NW.string(p.t.Ul1RJS)
    }), (0, r.jsx)(m, {
      channelId: e.id
    }), (0, r.jsx)(l.zxk, {
      className: E.acceptButton,
      size: l.zxk.Sizes.MIN,
      color: l.zxk.Colors.WHITE,
      onClick: () => f(!1),
      children: (0, r.jsx)(l.Text, {
        className: E.acceptText,
        variant: "text-xs/normal",
        color: "none",
        children: p.NW.string(p.t.MpO0p6)
      })
    }), (0, r.jsx)(l.zxk, {
      className: E.declineButton,
      look: l.zxk.Looks.OUTLINED,
      size: l.zxk.Sizes.MIN,
      color: l.zxk.Colors.WHITE,
      onClick: () => f(!0),
      children: (0, r.jsx)(l.Text, {
        className: E.declineText,
        variant: "text-xs/normal",
        color: "none",
        children: p.NW.string(p.t["1YDv7e"])
      })
    })]
  })
}