/** Chunk was on 71567 **/
"use strict";
n.d(t, {
  Z: () => S,
  w: () => T
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(106351),
  o = n(442837),
  c = n(481060),
  d = n(367907),
  u = n(933557),
  m = n(369994),
  g = n(162157),
  p = n(177862),
  h = n(11265),
  f = n(592125),
  b = n(984933),
  x = n(496675),
  j = n(699516),
  N = n(594174),
  v = n(434404),
  _ = n(449226),
  O = n(981631),
  y = n(388032),
  C = n(412856);

function I(e) {
  let {
    guild: t,
    isExpanded: n,
    selectedChannelId: s,
    className: l
  } = e, h = (0, g.BT)(t), b = t.canHaveRaidActivityAlerts(), [x, j] = i.useState(b), N = (0, o.e7)([f.Z], () => f.Z.getChannel(s), [s]), v = (0, u.ZP)(N), I = async () => {
    j(!x);
    try {
      var e;
      await (0, m.f6)(t, !b);
      let n = null !== (e = null != s ? s : t.safetyAlertsChannelId) && void 0 !== e ? e : null;
      if (null != n) {
        let e = {
          raid_alert_type: p.wR.JOIN_RAID,
          enabled: !b,
          raid_alert_channel_id: n,
          guild_id: t.id,
          channel_id: n
        };
        (0, d.yw)(O.rMx.GUILD_RAID_ALERTS_SETUP, e)
      }
    } catch (e) {
      (0, c.showToast)((0, c.createToast)(y.NW.string(y.t["46Rs3t"]), c.ToastType.FAILURE)), j(!b)
    }
  };
  return (0, r.jsxs)("div", {
    className: a()(C.itemWrapper, l),
    children: [(0, r.jsxs)("div", {
      className: C.itemContent,
      children: [(0, r.jsx)(c.X6q, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: y.NW.string(y.t.Qp98s7)
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: y.NW.string(y.t.Mg843t)
      }), n || null == s ? null : (0, r.jsxs)(c.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        className: C.valuePill,
        children: [(0, r.jsx)(c.VL1, {
          size: "xxs",
          color: "currentColor"
        }), " ", v]
      })]
    }), (0, r.jsx)(_.Z, {
      checked: x,
      onChange: I,
      disabled: !h || null == s
    })]
  })
}

function E(e) {
  var t;
  let {
    guild: n,
    selectedChannelId: i,
    setSelectedChannelId: s,
    className: m
  } = e, g = null !== (t = n.safetyAlertsChannelId) && void 0 !== t ? t : null, h = (0, o.Wu)([b.ZP, N.default, j.Z, x.Z], () => {
    let e = b.ZP.getChannels(n.id)[b.sH].filter(e => {
      let {
        channel: t
      } = e;
      return t.type === l.d.GUILD_TEXT && x.Z.can(O.Plq.SEND_MESSAGES, t)
    }).map(e => {
      let {
        channel: t
      } = e;
      return {
        value: t.id,
        label: (0, u.F6)(t, N.default, j.Z, !0)
      }
    });
    return null != g ? e : [...e]
  }, [n.id, g]), f = async e => {
    s(e);
    try {
      if (e !== g && (await v.Z.saveGuild(n.id, {
          safetyAlertsChannelId: e
        }, {
          throwErr: !0
        }), v.Z.updateGuild({
          safetyAlertsChannelId: e
        })), null != e) {
        let t = {
          raid_alert_type: p.wR.JOIN_RAID,
          enabled: n.canHaveRaidActivityAlerts(),
          raid_alert_channel_id: e,
          guild_id: n.id,
          channel_id: e
        };
        (0, d.yw)(O.rMx.GUILD_RAID_ALERTS_SETUP, t)
      }
    } catch (e) {
      (0, c.showToast)((0, c.createToast)(y.NW.string(y.t["46Rs3t"]), c.ToastType.FAILURE)), s(g)
    }
  };
  return (0, r.jsx)("div", {
    className: a()(C.itemBodyContainer, m),
    children: (0, r.jsxs)("div", {
      className: C.itemBodyInner,
      children: [(0, r.jsx)(c.vwX, {
        children: y.NW.string(y.t.sMkYEx)
      }), (0, r.jsx)(c.VcW, {
        wrapperClassName: C.bringToFront,
        options: h,
        onChange: f,
        value: i,
        maxVisibleItems: 5
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "interactive-normal",
        children: y.NW.string(y.t["1QxN9P"])
      })]
    })
  })
}

function S(e) {
  var t, n;
  let {
    guild: s
  } = e, [a, l] = i.useState(!1), o = null !== (t = s.safetyAlertsChannelId) && void 0 !== t ? t : null, [c, d] = i.useState(null != o ? o : null !== (n = null == s ? void 0 : s.publicUpdatesChannelId) && void 0 !== n ? n : null);
  return (0, r.jsx)(h.Z, {
    renderHeader: (0, r.jsx)(I, {
      isExpanded: a,
      guild: s,
      selectedChannelId: c
    }),
    isExpanded: a,
    onExpand: () => l(!a),
    children: (0, r.jsx)(E, {
      guild: s,
      selectedChannelId: c,
      setSelectedChannelId: d
    })
  })
}

function T(e) {
  var t, n;
  let {
    guild: s
  } = e, a = null !== (t = s.safetyAlertsChannelId) && void 0 !== t ? t : null, [l, o] = i.useState(null != a ? a : null !== (n = null == s ? void 0 : s.publicUpdatesChannelId) && void 0 !== n ? n : null);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(I, {
      isExpanded: !0,
      guild: s,
      selectedChannelId: l,
      className: C.noPadding
    }), (0, r.jsx)(E, {
      guild: s,
      selectedChannelId: l,
      setSelectedChannelId: o,
      className: C.noPadding
    })]
  })
}