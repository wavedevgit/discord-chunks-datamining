/** Chunk was on 86915 **/
"use strict";
n.r(t), n.d(t, {
  default: () => M
});
var r = n(200651),
  i = n(192379),
  l = n(442837),
  s = n(481060),
  a = n(570140),
  o = n(787014),
  c = n(37234),
  d = n(503089),
  u = n(493544),
  h = n(367907),
  g = n(933557),
  m = n(471445),
  p = n(351123),
  f = n(685929),
  x = n(665906),
  j = n(210887),
  b = n(131704),
  N = n(533947),
  v = n(277053),
  y = n(388610),
  C = n(592125),
  S = n(496675),
  Z = n(699516),
  w = n(594174),
  O = n(585483),
  E = n(787263),
  T = n(975316),
  R = n(428813),
  _ = n(2147),
  I = n(856606),
  P = n(981631),
  W = n(388032),
  L = n(388644);

function D(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
    n = arguments.length > 2 ? arguments[2] : void 0;
  h.ZP.trackWithMetadata(P.rMx.SETTINGS_PANE_VIEWED, {
    settings_type: "channel",
    origin_pane: t,
    destination_pane: e,
    location: n
  })
}
class A extends i.PureComponent {
  componentDidMount() {
    D(this.props.section, null, this.props.analyticsLocation)
  }
  componentWillUnmount() {
    a.Z.wait(() => (0, o.xv)())
  }
  componentDidUpdate(e) {
    let {
      formState: t,
      section: n
    } = e, {
      formState: r,
      section: i,
      canManageRoles: l,
      canManageChannels: s,
      canManageWebhooks: a,
      canUnlinkChannel: o
    } = this.props;
    (s || l || a || o) && (r !== P.QZA.CLOSED || r === t) && (l || i !== P.CoT.PERMISSIONS) && (a || o || i !== P.CoT.INTEGRATIONS) ? i !== n && D(i, n): (0, c.xf)()
  }
  render() {
    let {
      theme: e,
      sidebarTheme: t,
      section: n,
      channel: i,
      category: l,
      canManageRoles: a,
      canManageChannels: h,
      canDeleteChannels: f,
      canManageWebhooks: x,
      canUnlinkChannel: j
    } = this.props;
    return null == i ? null : (0, r.jsx)(d.ZP, {
      theme: e,
      sidebarTheme: t,
      section: null != n ? n : P.CoT.OVERVIEW,
      onSetSection: o.zc,
      onClose: c.xf,
      sections: function(e) {
        let {
          channel: t,
          category: n,
          canManageRoles: i,
          canManageChannels: l,
          canDeleteChannels: a,
          canManageWebhooks: d,
          canUnlinkChannel: h
        } = e, f = (0, m.KS)(t), {
          GUILD_CATEGORY: x
        } = P.d4z, j = b.Ec.has(t.type), C = t.type === x ? W.NW.string(W.t.ifbXnJ) : j ? t.isForumPost() ? W.NW.string(W.t.nEOg1N) : W.NW.string(W.t.H7vTe3) : W.NW.string(W.t["8D8Rsb"]);
        return [{
          section: u.ID.HEADER,
          label: null != t ? (0, r.jsxs)(r.Fragment, {
            children: [null != f ? (0, r.jsx)(f, {
              size: "xxs",
              color: "currentColor",
              className: L.channelIcon
            }) : null, (0, g.F6)(t, w.default, Z.Z), null != n ? (0, r.jsx)(s.Text, {
              tag: "span",
              variant: "text-xs/semibold",
              color: "header-secondary",
              lineClamp: 1,
              className: L.category,
              children: (0, g.F6)(n, w.default, Z.Z)
            }) : null]
          }) : W.NW.string(W.t.XPDhcX)
        }, {
          section: P.CoT.OVERVIEW,
          label: W.NW.string(W.t["/dp6yc"]),
          ariaLabel: W.NW.string(W.t["/dp6yc"]),
          element: _.Z,
          notice: {
            element: _.G,
            stores: [y.Z]
          }
        }, {
          section: P.CoT.PERMISSIONS,
          label: W.NW.string(W.t.xrmhRU),
          element: p.Z,
          notice: {
            element: I.n,
            stores: [v.Z]
          },
          predicate: () => i && !j
        }, {
          section: P.CoT.INSTANT_INVITES,
          label: W.NW.string(W.t["9F90iY"]),
          element: R.Z,
          type: u.bT.CUSTOM,
          predicate: () => t.type !== x && l && !j
        }, {
          section: P.CoT.INTEGRATIONS,
          label: W.NW.string(W.t.s69NLC),
          ariaLabel: W.NW.string(W.t.s69NLC),
          element: T.Z,
          notice: {
            stores: [N.Z],
            element: T.B
          },
          predicate: () => (!!d || !!h) && b.Ti.has(t.type)
        }, {
          section: u.ID.DIVIDER
        }, {
          section: P.CoT.DELETE,
          onClick() {
            (0, E.w)(t, function() {
              O.S.subscribeOnce(P.CkL.LAYER_POP_COMPLETE, () => {
                (0, o.zz)(t.id)
              }), (0, c.xf)()
            })
          },
          label: C,
          ariaLabel: C,
          icon: (0, r.jsx)(s.XHJ, {
            size: "xs",
            color: "currentColor"
          }),
          predicate: () => a
        }]
      }({
        channel: i,
        category: l,
        canManageRoles: a,
        canManageChannels: h,
        canDeleteChannels: f,
        canManageWebhooks: x,
        canUnlinkChannel: j
      })
    })
  }
}

function M() {
  let {
    channel: e,
    analyticsLocation: t
  } = (0, l.cj)([y.Z], () => y.Z.getProps()), n = (0, l.e7)([y.Z], () => y.Z.getFormState()), i = (0, l.e7)([y.Z], () => y.Z.getSection()), s = (0, l.e7)([j.Z], () => j.Z.theme), a = (0, l.e7)([j.Z], () => j.Z.darkSidebar ? P.BRd.DARK : void 0), o = (0, x.C7)(e), c = (0, x.Xb)(e), {
    canManageChannels: d,
    canManageRoles: u,
    canManageWebhooks: h,
    canUnlinkChannel: g
  } = (0, l.cj)([S.Z], () => ({
    canManageChannels: S.Z.can(P.Plq.MANAGE_CHANNELS, e),
    canManageRoles: null != e && S.Z.can(P.Plq.MANAGE_ROLES, e),
    canManageWebhooks: null != e && S.Z.can(P.Plq.MANAGE_WEBHOOKS, e),
    canUnlinkChannel: (0, f.C)(e, S.Z)
  })), m = (0, l.e7)([C.Z], () => C.Z.getChannel(null == e ? void 0 : e.parent_id));
  return (0, r.jsx)(A, {
    channel: e,
    category: m,
    canManageChannels: (null == e ? void 0 : e.isThread()) ? o : d,
    canDeleteChannels: (null == e ? void 0 : e.isThread()) ? c : d,
    canManageRoles: u,
    canManageWebhooks: h,
    canUnlinkChannel: g,
    formState: n,
    theme: s,
    sidebarTheme: a,
    section: i,
    analyticsLocation: t
  })
}