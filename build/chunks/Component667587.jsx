/** Chunk was on 78888 **/
/** chunk id: 667587, original params: e,t,n (module,exports,require) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => B
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk435183 = require("./435183.js"),
  Chunk398590 = require("./398590.js"),
  Chunk83257 = require("./83257.jsx"),
  Chunk361739 = require("./361739.jsx"),
  Chunk58149 = require("./58149.js"),
  Chunk47167 = require("./47167.js"),
  Chunk713654 = require("./713654.js"),
  Chunk414618 = require("./414618.jsx"),
  Chunk526132 = require("./526132.js"),
  Chunk97469 = require("./97469.js"),
  Chunk406704 = require("./406704.js"),
  Chunk544028 = require("./544028.js"),
  Chunk95701 = require("./95701.js"),
  Chunk291731 = require("./291731.js"),
  Chunk176360 = require("./176360.js"),
  Chunk863036 = require("./863036.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk203982 = require("./203982.js"),
  Chunk608226 = require("./608226.jsx"),
  Chunk654030 = require("./654030.jsx"),
  Chunk955941 = require("./955941.jsx"),
  Chunk865678 = require("./865678.jsx"),
  Chunk159495 = require("./159495.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk175107 = require("./175107.js");

function k(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
    n = arguments.length > 2 ? arguments[2] : true;
  h.Ay.trackWithMetadata(P.HAw.SETTINGS_PANE_VIEWED, {
    settings_type: "channel",
    origin_pane: t,
    destination_pane: e,
    location: n
  })
}
class G extends Chunk64700.PureComponent {
  componentDidMount() {
    k(this.props.section, null, this.props.analyticsLocation)
  }
  componentWillUnmount() {
    a.h.wait(() => (0, o.VN)())
  }
  componentDidUpdate(e) {
    let {
      formState: t,
      section: n
    } = e, {
      formState: l,
      section: i,
      canManageRoles: r,
      canManageChannels: s,
      canManageWebhooks: a,
      canUnlinkChannel: o
    } = this.props;
    (s || r || a || o) && (l !== P.XlH.CLOSED || l === t) && (r || i !== P.p_A.PERMISSIONS) && (a || o || i !== P.p_A.INTEGRATIONS) ? i !== n && k(i, n): (0, c.jH)()
  }
  render() {
    let {
      theme: e,
      sidebarTheme: t,
      section: n,
      channel: i,
      category: r,
      canManageRoles: a,
      canManageChannels: h,
      canDeleteChannels: p,
      canManageWebhooks: b,
      canUnlinkChannel: x
    } = this.props;
    return null == i ? null : (0, l.jsx)(d.Ay, {
      theme: e,
      sidebarTheme: t,
      section: null != n ? n : P.p_A.OVERVIEW,
      onSetSection: o.c4,
      onClose: c.jH,
      sections: function(e) {
        let {
          channel: t,
          category: n,
          canManageRoles: i,
          canManageChannels: r,
          canDeleteChannels: a,
          canManageWebhooks: d,
          canUnlinkChannel: h
        } = e, p = (0, m.gU)(t), {
          GUILD_CATEGORY: b
        } = P.rbe, x = A.Le.has(t.type), j = t.type === b ? _.intl.string(_.t.ifbXnL) : x ? t.isForumPost() ? _.intl.string(_.t.nEOg1N) : _.intl.string(_.t.H7vTe2) : _.intl.string(_.t["8D8Rsb"]);
        return [{
          section: u.Fq.HEADER,
          label: null != t ? (0, l.jsxs)(l.Fragment, {
            children: [null != p ? (0, l.jsx)(p, {
              size: "xxs",
              color: "currentColor",
              className: D.p
            }) : null, (0, g.m1)(t, S.default, E.A), null != n ? (0, l.jsx)(s.Text, {
              tag: "span",
              variant: "text-xs/semibold",
              color: "text-default",
              lineClamp: 1,
              className: D.L,
              children: (0, g.m1)(n, S.default, E.A)
            }) : null]
          }) : _.intl.string(_.t.XPDhcc)
        }, {
          section: P.p_A.OVERVIEW,
          label: _.intl.string(_.t["/dp6yY"]),
          ariaLabel: _.intl.string(_.t["/dp6yY"]),
          element: I.A,
          notice: {
            element: I.w,
            stores: [O.A]
          },
          predicate: () => !t.isModeratorReportChannel()
        }, {
          section: P.p_A.PERMISSIONS,
          label: _.intl.string(_.t.xrmhRX),
          element: f.A,
          notice: {
            element: L.$,
            stores: [v.A]
          },
          predicate: () => i && !x
        }, {
          section: P.p_A.INSTANT_INVITES,
          label: _.intl.string(_.t["9F90ic"]),
          element: R.A,
          type: u.Py.CUSTOM,
          predicate: () => t.type !== b && r && !x && !t.isModeratorReportChannel()
        }, {
          section: P.p_A.INTEGRATIONS,
          label: _.intl.string(_.t.s69NLF),
          ariaLabel: _.intl.string(_.t.s69NLF),
          element: M.A,
          notice: {
            stores: [y.A],
            element: M.q
          },
          predicate: () => !(!d && !h || t.isModeratorReportChannel()) && A.oH.has(t.type)
        }, {
          section: u.Fq.DIVIDER
        }, {
          section: P.p_A.DELETE,
          onClick() {
            (0, w.O)(t, function() {
              T._.subscribeOnce(P.jej.LAYER_POP_COMPLETE, () => {
                (0, o.D3)(t.id)
              }), (0, c.jH)()
            })
          },
          label: j,
          ariaLabel: j,
          icon: (0, l.jsx)(s.ucK, {
            size: "xs",
            color: "currentColor"
          }),
          variant: "destructive",
          predicate: () => a && !t.isModeratorReportChannel()
        }]
      }({
        channel: i,
        category: r,
        canManageRoles: a,
        canManageChannels: h,
        canDeleteChannels: p,
        canManageWebhooks: b,
        canUnlinkChannel: x
      })
    })
  }
}

function B() {
  let {
    channel: e,
    analyticsLocation: t
  } = (0, r.cf)([O.A], () => O.A.getProps()), n = (0, r.bG)([O.A], () => O.A.getFormState()), i = (0, r.bG)([O.A], () => O.A.getSection()), s = (0, r.bG)([j.A], () => j.A.theme), a = (0, b.NC)(), o = (0, x.NI)(e), c = (0, x.H_)(e), {
    canManageChannels: d,
    canManageRoles: u,
    canManageWebhooks: h,
    canUnlinkChannel: g
  } = (0, r.cf)([N.A], () => ({
    canManageChannels: N.A.can(P.xBc.MANAGE_CHANNELS, e),
    canManageRoles: null != e && N.A.can(P.xBc.MANAGE_ROLES, e),
    canManageWebhooks: null != e && N.A.can(P.xBc.MANAGE_WEBHOOKS, e),
    canUnlinkChannel: (0, p.n)(e, N.A)
  })), m = (0, r.bG)([C.A], () => C.A.getChannel(null == e ? true : e.parent_id));
  return (0, l.jsx)(G, {
    channel: e,
    category: m,
    canManageChannels: (null == e ? true : e.isThread()) ? o : d,
    canDeleteChannels: (null == e ? true : e.isThread()) ? c : d,
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