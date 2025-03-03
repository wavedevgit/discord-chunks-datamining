/** Chunk was on 51424 **/
n.d(t, {
  Z: () => h
});
var r = n(200651);
n(192379);
var i = n(120356),
  l = n.n(i),
  o = n(481060),
  a = n(922611),
  s = n(592125),
  c = n(944486),
  u = n(471253),
  d = n(623633),
  _ = n(930180),
  E = n(388032),
  p = n(211534);

function m(e) {
  let t = c.Z.getVoiceChannelId();
  if (null == t) return;
  let n = s.Z.getChannel(t);
  null != n && (0, u.RK)(n, e)
}

function f(e) {
  var t, n;
  let {
    channelId: i
  } = e, s = null !== (t = (0, _._d)(i)) && void 0 !== t ? t : 0, c = null !== (n = (0, _.K3)(i)) && void 0 !== n ? n : 0, u = (0, a.D)({
    location: "invited_to_speak_header"
  });
  return s > 0 && c > 0 ? (0, r.jsx)("div", {
    className: p.blocked,
    children: (0, r.jsx)("div", {
      className: l()(p.blockedText, p.noIcon),
      children: E.NW.string(E.t.xlJRfn)
    })
  }) : u && s > 0 ? (0, r.jsx)("div", {
    className: p.blocked,
    children: (0, r.jsx)("div", {
      className: l()(p.blockedText, p.noIcon),
      children: E.NW.string(E.t.WYad9f)
    })
  }) : s > 0 ? (0, r.jsxs)("div", {
    className: p.blocked,
    children: [u ? null : (0, r.jsx)(o.t6m, {
      size: "xxs",
      color: "currentColor",
      className: p.blockedIcon
    }), (0, r.jsx)("div", {
      className: l()(p.blockedText, {
        [p.noIcon]: u
      }),
      children: E.NW.format(E.t.ATpigY, {
        number: s
      })
    })]
  }) : c > 0 ? (0, r.jsx)("div", {
    className: p.blocked,
    children: (0, r.jsx)("div", {
      className: l()(p.blockedText, p.noIcon),
      children: E.NW.string(E.t.eHq2OD)
    })
  }) : null
}

function h() {
  let e = (0, d.Z)();
  return null == e ? null : (0, r.jsxs)(o.qXd, {
    className: p.container,
    color: o.DM8.DEFAULT,
    children: [(0, r.jsx)("div", {
      children: E.NW.string(E.t.Ul1RJS)
    }), (0, r.jsx)(f, {
      channelId: e.id
    }), (0, r.jsx)(o.zxk, {
      className: p.acceptButton,
      size: o.zxk.Sizes.MIN,
      color: o.zxk.Colors.WHITE,
      onClick: () => m(!1),
      children: (0, r.jsx)(o.Text, {
        className: p.acceptText,
        variant: "text-xs/normal",
        color: "none",
        children: E.NW.string(E.t.MpO0p6)
      })
    }), (0, r.jsx)(o.zxk, {
      className: p.declineButton,
      look: o.zxk.Looks.OUTLINED,
      size: o.zxk.Sizes.MIN,
      color: o.zxk.Colors.WHITE,
      onClick: () => m(!0),
      children: (0, r.jsx)(o.Text, {
        className: p.declineText,
        variant: "text-xs/normal",
        color: "none",
        children: E.NW.string(E.t["1YDv7e"])
      })
    })]
  })
}