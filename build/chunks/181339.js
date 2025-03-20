/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => w,
  w: () => P
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(106351),
  o = n(442837),
  A = n(481060),
  c = n(367907),
  d = n(933557),
  u = n(369994),
  g = n(162157),
  f = n(177862),
  m = n(11265),
  p = n(592125),
  h = n(984933),
  C = n(496675),
  b = n(699516),
  v = n(594174),
  x = n(434404),
  N = n(449226),
  j = n(981631),
  E = n(388032),
  I = n(713401);

function O(e) {
  let {
    guild: t,
    isExpanded: n,
    selectedChannelId: s,
    className: l
  } = e, m = (0, g.BT)(t), h = t.canHaveRaidActivityAlerts(), [C, b] = i.useState(h), v = (0, o.e7)([p.Z], () => p.Z.getChannel(s), [s]), x = (0, d.ZP)(v), O = async () => {
    b(!C);
    try {
      var e;
      await (0, u.f6)(t, !h);
      let n = null !== (e = null != s ? s : t.safetyAlertsChannelId) && void 0 !== e ? e : null;
      if (null != n) {
        let e = {
          raid_alert_type: f.wR.JOIN_RAID,
          enabled: !h,
          raid_alert_channel_id: n,
          guild_id: t.id,
          channel_id: n
        };
        (0, c.yw)(j.rMx.GUILD_RAID_ALERTS_SETUP, e)
      }
    } catch (e) {
      (0, A.showToast)((0, A.createToast)(E.NW.string(E.t["46Rs3t"]), A.ToastType.FAILURE)), b(!h)
    }
  };
  return (0, r.jsxs)("div", {
    className: a()(I.itemWrapper, l),
    children: [(0, r.jsxs)("div", {
      className: I.itemContent,
      children: [(0, r.jsx)(A.X6q, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: E.NW.string(E.t.Qp98s7)
      }), (0, r.jsx)(A.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: E.NW.string(E.t.Mg843t)
      }), n || null == s ? null : (0, r.jsxs)(A.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        className: I.valuePill,
        children: [(0, r.jsx)(A.VL1, {
          size: "xxs",
          color: "currentColor"
        }), " ", x]
      })]
    }), (0, r.jsx)(N.Z, {
      checked: C,
      onChange: O,
      disabled: !m || null == s
    })]
  })
}

function y(e) {
  var t;
  let {
    guild: n,
    selectedChannelId: i,
    setSelectedChannelId: s,
    className: u
  } = e, g = null !== (t = n.safetyAlertsChannelId) && void 0 !== t ? t : null, m = (0, o.Wu)([h.ZP, v.default, b.Z, C.Z], () => {
    let e = h.ZP.getChannels(n.id)[h.sH].filter(e => {
      let {
        channel: t
      } = e;
      return t.type === l.d.GUILD_TEXT && C.Z.can(j.Plq.SEND_MESSAGES, t)
    }).map(e => {
      let {
        channel: t
      } = e;
      return {
        value: t.id,
        label: (0, d.F6)(t, v.default, b.Z, !0)
      }
    });
    return null != g ? e : [...e]
  }, [n.id, g]), p = async e => {
    s(e);
    try {
      if (e !== g && (await x.Z.saveGuild(n.id, {
          safetyAlertsChannelId: e
        }, {
          throwErr: !0
        }), x.Z.updateGuild({
          safetyAlertsChannelId: e
        })), null != e) {
        let t = {
          raid_alert_type: f.wR.JOIN_RAID,
          enabled: n.canHaveRaidActivityAlerts(),
          raid_alert_channel_id: e,
          guild_id: n.id,
          channel_id: e
        };
        (0, c.yw)(j.rMx.GUILD_RAID_ALERTS_SETUP, t)
      }
    } catch (e) {
      (0, A.showToast)((0, A.createToast)(E.NW.string(E.t["46Rs3t"]), A.ToastType.FAILURE)), s(g)
    }
  };
  return (0, r.jsx)("div", {
    className: a()(I.itemBodyContainer, u),
    children: (0, r.jsxs)("div", {
      className: I.itemBodyInner,
      children: [(0, r.jsx)(A.vwX, {
        children: E.NW.string(E.t.sMkYEx)
      }), (0, r.jsx)(A.VcW, {
        wrapperClassName: I.bringToFront,
        options: m,
        onChange: p,
        value: i,
        maxVisibleItems: 5
      }), (0, r.jsx)(A.Text, {
        variant: "text-sm/medium",
        color: "interactive-normal",
        children: E.NW.string(E.t["1QxN9P"])
      })]
    })
  })
}

function w(e) {
  var t, n;
  let {
    guild: s
  } = e, [a, l] = i.useState(!1), o = null !== (t = s.safetyAlertsChannelId) && void 0 !== t ? t : null, [A, c] = i.useState(null != o ? o : null !== (n = null == s ? void 0 : s.publicUpdatesChannelId) && void 0 !== n ? n : null);
  return (0, r.jsx)(m.Z, {
    renderHeader: (0, r.jsx)(O, {
      isExpanded: a,
      guild: s,
      selectedChannelId: A
    }),
    isExpanded: a,
    onExpand: () => l(!a),
    children: (0, r.jsx)(y, {
      guild: s,
      selectedChannelId: A,
      setSelectedChannelId: c
    })
  })
}

function P(e) {
  var t, n;
  let {
    guild: s
  } = e, a = null !== (t = s.safetyAlertsChannelId) && void 0 !== t ? t : null, [l, o] = i.useState(null != a ? a : null !== (n = null == s ? void 0 : s.publicUpdatesChannelId) && void 0 !== n ? n : null);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(O, {
      isExpanded: !0,
      guild: s,
      selectedChannelId: l,
      className: I.noPadding
    }), (0, r.jsx)(y, {
      guild: s,
      selectedChannelId: l,
      setSelectedChannelId: o,
      className: I.noPadding
    })]
  })
}