/** Chunk was on 47463 **/
/** chunk id: 270394, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => q
}), require("./997841.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  d = require.n(Chunk392711),
  Chunk533800 = require("./533800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk240872 = require("./240872.jsx"),
  Chunk225433 = require("./225433.jsx"),
  Chunk129861 = require("./129861.jsx"),
  Chunk493544 = require("./493544.jsx"),
  Chunk700582 = require("./700582.jsx"),
  Chunk410030 = require("./410030.js"),
  Chunk835473 = require("./835473.js"),
  Chunk933557 = require("./933557.js"),
  Chunk346486 = require("./346486.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk925329 = require("./925329.jsx"),
  Chunk666657 = require("./666657.js"),
  Chunk664452 = require("./664452.jsx"),
  Chunk560114 = require("./560114.jsx"),
  Chunk685929 = require("./685929.js"),
  Chunk592125 = require("./592125.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk630388 = require("./630388.js"),
  Chunk965638 = require("./965638.js"),
  Chunk757539 = require("./757539.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk809165 = require("./809165.js"),
  Chunk620842 = require("./620842.js"),
  Chunk197571 = require("./197571.js");

function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function F(e) {
  let {
    isDisabled: t,
    inviter: n,
    showChannel: r,
    channel: l,
    inviteSource: o,
    inviteSourceTrailingContent: s,
    uses: c,
    expiresAt: d,
    onRevokeInvite: u
  } = e;
  return (0, i.jsxs)(Z.Z, {
    className: a()(W.inviteSettingsInviteRow, U.card, {
      [W.inviteDisabledRow]: t
    }),
    children: [(0, i.jsxs)(Z.Z, {
      grow: 3,
      basis: 0,
      align: Z.Z.Align.CENTER,
      className: W.text,
      children: [null != n && (0, i.jsx)(y.Z, {
        user: n,
        size: g.EFr.SIZE_24,
        className: W.avatar
      }), (0, i.jsxs)("div", {
        children: [null != n && (0, i.jsx)(j.Z, {
          discriminatorClass: W.discriminator,
          user: n
        }), r && null != l && (0, i.jsx)(g.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: (0, C.F6)(l, A.default, k.Z, true)
        })]
      })]
    }), (0, i.jsx)(Z.Z, {
      grow: 3,
      shrink: 1,
      basis: 0,
      align: Z.Z.Align.CENTER,
      className: W.text,
      children: (0, i.jsxs)("div", {
        className: W.inviteSourceContainer,
        children: [o, s]
      })
    }), (0, i.jsx)(Z.Z, {
      grow: 1,
      basis: 0,
      align: Z.Z.Align.CENTER,
      className: W.text,
      children: (0, i.jsx)(g.Text, {
        className: W.uses,
        variant: "text-sm/normal",
        children: c
      })
    }), (0, i.jsx)(Z.Z, {
      grow: 2,
      basis: 0,
      align: Z.Z.Align.CENTER,
      className: a()(W.text, W.countdownColumn),
      children: (0, i.jsx)(g.Text, {
        className: W.countdown,
        variant: "text-sm/normal",
        children: d
      })
    }), (0, i.jsx)(x.Z, {
      className: W.revokeInvite,
      onClick: u
    })]
  })
}

function K(e) {
  var t;
  let {
    invite: n,
    showChannel: r = false,
    inviteDisabled: l = false,
    hide: a = false
  } = e, o = n.uses;
  return n.maxUses > 0 && (o = "".concat(n.uses, "/").concat(n.maxUses)), (0, i.jsx)(F, {
    isDisabled: l,
    inviter: n.inviter,
    showChannel: r,
    channel: n.channel,
    inviteSource: (0, i.jsx)(g.Text, {
      className: W.inviteCode,
      variant: "text-sm/normal",
      children: a ? "..." : n.code
    }),
    inviteSourceTrailingContent: !a && (0, D.yE)(null != (t = n.flags) ? t : 0, u.$.IS_APPLICATION_BYPASS) ? (0, i.jsxs)("div", {
      className: W.bypass,
      children: [(0, i.jsx)(g.Text, {
        className: W.text,
        variant: "text-xs/normal",
        color: "text-muted",
        children: B.intl.string(B.t["1i1bUl"])
      }), (0, i.jsx)(g.ua7, {
        text: B.intl.string(B.t["jvd/LC"]),
        children: e => (0, i.jsx)(g.d3s, z(G({
          size: "xxs",
          color: "currentColor"
        }, e), {
          className: W.infoIcon
        }))
      })]
    }) : null,
    uses: o,
    expiresAt: (0, i.jsx)(N.Z, {
      deadline: n.getExpiresAt()
    }),
    onRevokeInvite: () => {
      f.ZP.revokeInvite(n)
    }
  })
}

function V(e) {
  let {
    applicationId: t,
    channel: r,
    showChannel: l = false,
    inviteDisabled: a = false
  } = e, o = (0, _.q)(t), s = (0, p.e7)([A.default], () => {
    var e;
    return A.default.getUser(null == (e = r.linkedLobby) ? true : e.linked_by)
  }), c = (0, P.Y)(r);
  return (0, i.jsx)(F, {
    isDisabled: a,
    inviter: s,
    showChannel: l,
    channel: r,
    inviteSource: (0, i.jsxs)("div", {
      className: W.linkedChannelJoinSource,
      children: [(0, i.jsx)(S.Z, {
        game: o,
        size: S.Z.Sizes.XXSMALL
      }), (0, i.jsx)(g.Text, {
        className: W.linkedChannelJoinSourceText,
        variant: "text-sm/normal",
        children: null == o ? true : o.name
      })]
    }),
    uses: B.intl.string(B.t.jHpxws),
    expiresAt: B.intl.string(B.t.PqEzn5),
    onRevokeInvite: () => {
      if (!c || null == o) return void h.Z.show({
        title: B.intl.string(B.t.JmUENj),
        body: B.intl.string(B.t.SrvsMD)
      });
      (0, g.ZDy)(async () => {
        let {
          default: e
        } = await n.e("30019").then(n.bind(n, 719498));
        return t => (0, i.jsx)(e, z(G({}, t), {
          channel: r,
          application: o
        }))
      })
    }
  })
}

function q(e) {
  let {
    invites: t,
    guild: l,
    hide: a,
    canCreateInvites: o,
    withV2Actions: c,
    channel: u = null,
    showChannel: f = false,
    loading: h = false
  } = e;
  s()(null != l, "guild is required");
  let x = (0, O.ZP)(),
    j = (0, R.MQ)(l),
    y = (0, R.O4)(l),
    _ = r.useMemo(() => null == t || h ? [] : d()(t).sortBy(e => {
      var t, n;
      return (null != (n = null == (t = e.inviter) ? true : t.username) ? n : "").toLowerCase()
    }).value(), [t, h]),
    C = (0, p.Wu)([E.Z], () => E.Z.getSortedLinkedChannelsForGuild(l.id).filter(e => null == u || e.id === u.id)),
    N = r.useMemo(() => h ? [] : [..._.map(e => ({
      type: "invite",
      data: e
    })), ...C.map(e => ({
      type: "channel",
      data: e
    }))], [_, C, h]),
    S = () => {
      (0, g.ZDy)(async () => e => (0, i.jsx)(T.default, z(G({}, e), {
        channel: u,
        guild: l,
        source: M.t4x.SETTINGS_INVITE
      })))
    },
    [P, k] = r.useState(62),
    A = () => {
      let e = {
        source: w.Zu.GUILD_SETTINGS
      };
      (0, g.ZDy)(async () => t => (0, i.jsx)(I.default, z(G({}, t), {
        guildId: l.id,
        analyticsData: e
      })))
    };
  return (0, i.jsx)(v.Xi, {
    sections: [1, +!c, +!!c, Math.max(1, N.length)],
    renderSection: e => {
      let {
        section: t
      } = e;
      if (3 === t)
        if (0 === N.length && !h) return (0, i.jsx)("div", {
          children: (0, i.jsxs)(g.ubH, {
            theme: x,
            children: [(0, i.jsx)(g.oxh, {
              darkSrc: n(914814),
              lightSrc: n(370392),
              width: 256,
              height: 130
            }), (0, i.jsx)(g.OZU, {
              note: B.intl.string(B.t.F53CAQ),
              children: B.intl.string(B.t["+nLJkZ"])
            })]
          })
        }, "empty-state");
        else return (0, i.jsxs)(Z.Z, {
          children: [(0, i.jsx)(Z.Z.Child, {
            grow: 3,
            basis: 0,
            className: H.marginReset,
            children: (0, i.jsx)(g.vwX, {
              children: B.intl.string(B.t.EgHyKy)
            })
          }), (0, i.jsx)(Z.Z.Child, {
            basis: 0,
            grow: 3,
            className: H.marginReset,
            children: (0, i.jsx)(g.vwX, {
              children: C.length > 0 ? B.intl.string(B.t.l7VISU) : B.intl.string(B.t.LBlFEB)
            })
          }), (0, i.jsx)(Z.Z.Child, {
            grow: 1,
            basis: 0,
            children: (0, i.jsx)(g.vwX, {
              children: B.intl.string(B.t.erWrmJ)
            })
          }), (0, i.jsx)(Z.Z.Child, {
            grow: 2,
            basis: 0,
            children: (0, i.jsx)(g.vwX, {
              children: B.intl.string(B.t["1aM27e"])
            })
          })]
        }, "table-header");
      return null
    },
    renderRow: e => {
      let {
        section: t,
        row: n
      } = e;
      if (0 === t) return (0, i.jsx)(g.X6q, {
        variant: "heading-lg/semibold",
        color: "header-primary",
        className: W.header,
        children: B.intl.string(B.t["9F90iY"])
      });
      if (1 === t) return (0, i.jsxs)(g.hjN, {
        className: W.actions,
        children: [(0, i.jsx)(g.R94, {
          className: H.marginBottom20,
          type: g.geA.DESCRIPTION,
          children: true === o ? B.intl.format(B.t["97VdNj"], {
            onCreateInvite: S
          }) : B.intl.string(B.t.WDw38P)
        }), (0, i.jsxs)("div", {
          className: W.inviteDisabledContainer,
          children: [(0, i.jsx)(b.zx, {
            size: b.zx.Sizes.SMALL,
            color: y ? b.zx.Colors.BRAND : b.zx.Colors.RED,
            disabled: !j,
            onClick: A,
            children: y ? B.intl.string(B.t["/dbw3N"]) : B.intl.string(B.t.Uwsjn5)
          }), y && (0, i.jsxs)("div", {
            className: W.inviteDisabledTip,
            children: [(0, i.jsx)(g.Mgn, {
              size: "custom",
              width: 20,
              height: 20,
              color: m.Z.unsafe_rawColors.YELLOW_300.css
            }), (0, i.jsx)(g.Text, {
              variant: "text-sm/normal",
              children: B.intl.string(B.t["2LLbj4"])
            })]
          })]
        }), (0, i.jsx)(g.$i$, {
          className: W.headerDivider
        })]
      }, "header");
      if (2 === t) return (0, i.jsx)(L.Y, {
        hasInvites: _.length > 0,
        setHeight: k,
        onShowDisableInvites: A,
        onShowInviteModal: S,
        hasInviteDisabledPermission: j,
        invitesDisabled: y,
        canCreateInvites: o
      }, "actions-v2");
      if (3 === t) {
        if (0 === N.length && 0 === n && h) return (0, i.jsx)(g.$jN, {
          className: H.marginTop20,
          type: g.$jN.Type.SPINNING_CIRCLE
        }, "spinner");
        let e = N[n];
        switch (null == e ? true : e.type) {
          case "invite":
            return (0, i.jsx)(K, {
              hide: a,
              invite: e.data,
              showChannel: f,
              inviteDisabled: y
            }, e.data.code);
          case "channel":
            var r;
            return (0, i.jsx)(V, {
              applicationId: null == (r = e.data.linkedLobby) ? true : r.application_id,
              channel: e.data,
              showChannel: f,
              inviteDisabled: y
            }, e.data.id);
          default:
            return null
        }
      }
    },
    rowHeight: (e, t) => 0 === e ? 64 : 1 === e ? 109 : 2 === e ? P : 3 === e ? 0 === N.length && 0 === t && h ? 62 : 62 * (null != N[t]) : 0,
    sectionHeight: e => 3 === e ? 0 !== N.length || h ? 28 : 240 : 0
  })
}