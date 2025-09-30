/** Chunk was on 86915 **/
/** chunk id: 869779, original params: e,t,n (module,exports,require) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => B
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk787014 = require("./787014.js"),
  Chunk37234 = require("./37234.js"),
  Chunk503089 = require("./503089.jsx"),
  Chunk493544 = require("./493544.jsx"),
  Chunk367907 = require("./367907.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk351123 = require("./351123.jsx"),
  Chunk685929 = require("./685929.js"),
  Chunk984802 = require("./984802.js"),
  Chunk665906 = require("./665906.js"),
  Chunk210887 = require("./210887.js"),
  Chunk131704 = require("./131704.js"),
  Chunk533947 = require("./533947.js"),
  Chunk277053 = require("./277053.js"),
  Chunk388610 = require("./388610.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk585483 = require("./585483.js"),
  Chunk787263 = require("./787263.jsx"),
  Chunk975316 = require("./975316.jsx"),
  Chunk428813 = require("./428813.jsx"),
  Chunk2147 = require("./2147.jsx"),
  Chunk856606 = require("./856606.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk102865 = require("./102865.js");

function D(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
    n = arguments.length > 2 ? arguments[2] : true;
  h.ZP.trackWithMetadata(A.rMx.SETTINGS_PANE_VIEWED, {
    settings_type: "channel",
    origin_pane: t,
    destination_pane: e,
    location: n
  })
}
class k extends Chunk647438.PureComponent {
  componentDidMount() {
    D(this.props.section, null, this.props.analyticsLocation)
  }
  componentWillUnmount() {
    Chunk570140.Z.wait(() => (0, Chunk787014.xv)())
  }
  componentDidUpdate(e) {
    let {
      formState: t,
      section: n
    } = e, {
      formState: i,
      section: l,
      canManageRoles: r,
      canManageChannels: s,
      canManageWebhooks: a,
      canUnlinkChannel: o
    } = this.props;
    (s || r || a || o) && (i !== A.QZA.CLOSED || i === t) && (r || l !== A.CoT.PERMISSIONS) && (a || o || l !== A.CoT.INTEGRATIONS) ? l !== n && D(l, n): (0, c.xf)()
  }
  render() {
    let {
      theme: e,
      sidebarTheme: t,
      section: n,
      channel: l,
      category: r,
      canManageRoles: a,
      canManageChannels: h,
      canDeleteChannels: f,
      canManageWebhooks: b,
      canUnlinkChannel: x
    } = this.props;
    return null == Chunk647438 ? null : (0, Chunk951288.jsx)(Chunk503089.ZP, {
      theme: module,
      sidebarTheme: exports,
      section: null != require ? require : Chunk981631.CoT.OVERVIEW,
      onSetSection: Chunk787014.zc,
      onClose: Chunk37234.xf,
      sections: function(e) {
        let {
          channel: t,
          category: n,
          canManageRoles: l,
          canManageChannels: r,
          canDeleteChannels: a,
          canManageWebhooks: d,
          canUnlinkChannel: h
        } = e, f = (0, m.KS)(t), {
          GUILD_CATEGORY: b
        } = A.d4z, x = v.Ec.has(t.type), j = t.type === b ? L.intl.string(L.t.ifbXnJ) : x ? t.isForumPost() ? L.intl.string(L.t.nEOg1N) : L.intl.string(L.t.H7vTe3) : L.intl.string(L.t["8D8Rsb"]);
        return [{
          section: u.ID.HEADER,
          label: null != t ? (0, i.jsxs)(i.Fragment, {
            children: [null != f ? (0, i.jsx)(f, {
              size: "xxs",
              color: "currentColor",
              className: M.channelIcon
            }) : null, (0, g.F6)(t, Z.default, O.Z), null != n ? (0, i.jsx)(s.Text, {
              tag: "span",
              variant: "text-xs/semibold",
              color: "header-secondary",
              lineClamp: 1,
              className: M.category,
              children: (0, g.F6)(n, Z.default, O.Z)
            }) : null]
          }) : L.intl.string(L.t.XPDhcX)
        }, {
          section: A.CoT.OVERVIEW,
          label: L.intl.string(L.t["/dp6yc"]),
          ariaLabel: L.intl.string(L.t["/dp6yc"]),
          element: I.Z,
          notice: {
            element: I.G,
            stores: [N.Z]
          },
          predicate: () => !t.isModeratorReportChannel()
        }, {
          section: A.CoT.PERMISSIONS,
          label: L.intl.string(L.t.xrmhRU),
          element: p.Z,
          notice: {
            element: P.n,
            stores: [C.Z]
          },
          predicate: () => l && !x
        }, {
          section: A.CoT.INSTANT_INVITES,
          label: L.intl.string(L.t["9F90iY"]),
          element: _.Z,
          type: u.bT.CUSTOM,
          predicate: () => t.type !== b && r && !x && !t.isModeratorReportChannel()
        }, {
          section: A.CoT.INTEGRATIONS,
          label: L.intl.string(L.t.s69NLC),
          ariaLabel: L.intl.string(L.t.s69NLC),
          element: R.Z,
          notice: {
            stores: [y.Z],
            element: R.B
          },
          predicate: () => !(!d && !h || t.isModeratorReportChannel()) && v.Ti.has(t.type)
        }, {
          section: u.ID.DIVIDER
        }, {
          section: A.CoT.DELETE,
          onClick() {
            (0, T.w)(t, function() {
              w.S.subscribeOnce(A.CkL.LAYER_POP_COMPLETE, () => {
                (0, o.zz)(t.id)
              }), (0, c.xf)()
            })
          },
          label: j,
          ariaLabel: j,
          icon: (0, i.jsx)(s.XHJ, {
            size: "xs",
            color: "currentColor"
          }),
          variant: "destructive",
          predicate: () => a && !t.isModeratorReportChannel()
        }]
      }({
        channel: Chunk647438,
        category: Chunk442837,
        canManageRoles: Chunk570140,
        canManageChannels: Chunk367907,
        canDeleteChannels: Chunk685929,
        canManageWebhooks: Chunk984802,
        canUnlinkChannel: Chunk665906
      })
    })
  }
}

function B() {
  let {
    channel: e,
    analyticsLocation: t
  } = (0, Chunk442837.cj)([Chunk388610.Z], () => Chunk388610.Z.getProps()), n = (0, Chunk442837.e7)([Chunk388610.Z], () => Chunk388610.Z.getFormState()), l = (0, Chunk442837.e7)([Chunk388610.Z], () => Chunk388610.Z.getSection()), s = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme), a = (0, Chunk984802.Ll)(), o = (0, Chunk665906.C7)(module), c = (0, Chunk665906.Xb)(module), {
    canManageChannels: d,
    canManageRoles: u,
    canManageWebhooks: h,
    canUnlinkChannel: g
  } = (0, Chunk442837.cj)([Chunk496675.Z], () => ({
    canManageChannels: Chunk496675.Z.can(Chunk981631.Plq.MANAGE_CHANNELS, module),
    canManageRoles: null != module && Chunk496675.Z.can(Chunk981631.Plq.MANAGE_ROLES, module),
    canManageWebhooks: null != module && Chunk496675.Z.can(Chunk981631.Plq.MANAGE_WEBHOOKS, module),
    canUnlinkChannel: (0, Chunk685929.C)(module, Chunk496675.Z)
  })), m = (0, Chunk442837.e7)([Chunk592125.Z], () => Chunk592125.Z.getChannel(null == module ? true : module.parent_id));
  return (0, Chunk951288.jsx)(k, {
    channel: module,
    category: Chunk471445,
    canManageChannels: (null == module ? true : module.isThread()) ? Chunk787014 : Chunk503089,
    canDeleteChannels: (null == module ? true : module.isThread()) ? Chunk37234 : Chunk503089,
    canManageRoles: Chunk493544,
    canManageWebhooks: Chunk367907,
    canUnlinkChannel: Chunk933557,
    formState: require,
    theme: Chunk481060,
    sidebarTheme: Chunk570140,
    section: Chunk647438,
    analyticsLocation: exports
  })
}