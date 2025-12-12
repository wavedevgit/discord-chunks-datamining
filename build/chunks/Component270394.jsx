/** Chunk was on 9414 **/
/** chunk id: 270394, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Q
}), require("./997841.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  d = require.n(Chunk392711),
  Chunk533800 = require("./533800.js"),
  Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk156953 = require("./156953.js"),
  Chunk560114 = require("./560114.jsx"),
  Chunk741834 = require("./741834.jsx"),
  Chunk685929 = require("./685929.js"),
  Chunk592125 = require("./592125.js"),
  Chunk485386 = require("./485386.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk634755 = require("./634755.js"),
  Chunk757539 = require("./757539.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk400413 = require("./400413.js"),
  Chunk579480 = require("./579480.js"),
  Chunk478411 = require("./478411.js");

function z(e) {
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

function V(e, t) {
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

function q(e) {
  let {
    isDisabled: t,
    inviter: n,
    showChannel: r,
    channel: l,
    inviteSource: o,
    inviteSourceTrailingContent: s,
    uses: c,
    expiresAt: d,
    roles: u,
    guildId: m,
    showRolesColumn: b,
    onRevokeInvite: p
  } = e;
  return (0, i.jsxs)(T.Z, {
    className: a()(G.inviteSettingsInviteRow, F.card, {
      [G.inviteDisabledRow]: t
    }),
    children: [(0, i.jsxs)(T.Z, {
      grow: 3,
      basis: 0,
      align: T.Z.Align.CENTER,
      className: G.text,
      children: [null != n && (0, i.jsx)(y.Z, {
        user: n,
        size: f.EFr.SIZE_24,
        className: G.avatar
      }), (0, i.jsxs)("div", {
        children: [null != n && (0, i.jsx)(v.Z, {
          discriminatorClass: G.discriminator,
          user: n
        }), r && null != l && (0, i.jsx)(f.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          children: (0, S.F6)(l, M.default, L.Z, true)
        })]
      })]
    }), (0, i.jsx)(T.Z, {
      grow: 3,
      shrink: 1,
      basis: 0,
      align: T.Z.Align.CENTER,
      className: G.text,
      children: (0, i.jsxs)("div", {
        className: G.inviteSourceContainer,
        children: [o, s]
      })
    }), (0, i.jsx)(T.Z, {
      grow: 1,
      basis: 0,
      align: T.Z.Align.CENTER,
      className: G.text,
      children: (0, i.jsx)(f.Text, {
        className: G.uses,
        variant: "text-sm/normal",
        children: c
      })
    }), (0, i.jsx)(T.Z, {
      grow: 2,
      basis: 0,
      align: T.Z.Align.CENTER,
      className: a()(G.text, G.countdownColumn),
      children: (0, i.jsx)(f.Text, {
        className: G.countdown,
        variant: "text-sm/normal",
        children: d
      })
    }), b && null != m && (0, i.jsx)(T.Z, {
      grow: 2,
      basis: 0,
      align: T.Z.Align.CENTER,
      className: G.text,
      children: (0, i.jsx)(k.Z, {
        roles: u,
        guildId: m
      })
    }), (0, i.jsx)(j.Z, {
      className: G.revokeInvite,
      onClick: p
    })]
  })
}

function Y(e) {
  var t, n;
  let {
    invite: r,
    showChannel: l = false,
    inviteDisabled: a = false,
    hide: o = false,
    showRolesColumn: s
  } = e, c = null == (t = r.guild) ? true : t.id, d = r.uses;
  r.maxUses > 0 && (d = "".concat(r.uses, "/").concat(r.maxUses));
  let p = (0, b.e7)([R.Z], () => null == c ? [] : r.roles.map(e => R.Z.getRole(c, e.id)).filter(e => null != e), [c, r.roles]);
  return (0, i.jsx)(q, {
    isDisabled: a,
    inviter: r.inviter,
    showChannel: l,
    channel: r.channel,
    inviteSource: (0, i.jsx)(f.Text, {
      className: G.inviteCode,
      variant: "text-sm/normal",
      children: o ? "..." : r.code
    }),
    inviteSourceTrailingContent: !o && (0, m.yE)(null != (n = r.flags) ? n : 0, u.$.IS_APPLICATION_BYPASS) ? (0, i.jsxs)("div", {
      className: G.bypass,
      children: [(0, i.jsx)(f.Text, {
        className: G.text,
        variant: "text-xs/normal",
        color: "text-muted",
        children: H.intl.string(H.t["1i1bUl"])
      }), (0, i.jsx)(g.u, {
        text: H.intl.string(H.t["jvd/LF"]),
        children: (0, i.jsx)(f.d3s, {
          size: "xxs",
          color: "currentColor",
          className: G.infoIcon
        })
      })]
    }) : null,
    uses: d,
    expiresAt: (0, i.jsx)(I.Z, {
      deadline: r.getExpiresAt()
    }),
    roles: p,
    guildId: c,
    showRolesColumn: s,
    onRevokeInvite: () => {
      h.ZP.revokeInvite(r)
    }
  })
}

function J(e) {
  let {
    applicationId: t,
    channel: r,
    showChannel: l = false,
    inviteDisabled: a = false,
    showRolesColumn: o
  } = e, s = (0, N.q)(t), c = (0, b.e7)([M.default], () => {
    var e;
    return M.default.getUser(null == (e = r.linkedLobby) ? true : e.linked_by)
  }), d = (0, A.Y)(r);
  return (0, i.jsx)(q, {
    isDisabled: a,
    inviter: c,
    showChannel: l,
    channel: r,
    inviteSource: (0, i.jsxs)("div", {
      className: G.linkedChannelJoinSource,
      children: [(0, i.jsx)(E.Z, {
        game: s,
        size: E.A.XXSMALL
      }), (0, i.jsx)(f.Text, {
        className: G.linkedChannelJoinSourceText,
        variant: "text-sm/normal",
        children: null == s ? true : s.name
      })]
    }),
    uses: H.intl.string(H.t.jHpxwo),
    expiresAt: H.intl.string(H.t.PqEzn8),
    roles: [],
    guildId: r.guild_id,
    showRolesColumn: o,
    onRevokeInvite: () => {
      if (!d || null == s) return void x.Z.show({
        title: H.intl.string(H.t.JmUENg),
        body: H.intl.string(H.t.SrvsML)
      });
      (0, f.ZDy)(async () => {
        let {
          default: e
        } = await n.e("30019").then(n.bind(n, 719498));
        return t => (0, i.jsx)(e, V(z({}, t), {
          channel: r,
          application: s
        }))
      })
    }
  })
}

function Q(e) {
  let {
    invites: t,
    guild: l,
    hide: a,
    canCreateInvites: o,
    withV2Actions: c,
    channel: u = null,
    showChannel: m = false,
    loading: g = false
  } = e;
  s()(null != l, "guild is required");
  let h = (0, C.ZP)(),
    x = (0, U.MQ)(l),
    j = (0, U.O4)(l),
    v = (0, P.J)(l.id, "SettingsInvites").enabled,
    y = r.useMemo(() => null == t || g ? [] : d()(t).sortBy(e => {
      var t, n;
      return (null != (n = null == (t = e.inviter) ? true : t.username) ? n : "").toLowerCase()
    }).value(), [t, g]),
    N = (0, b.Wu)([D.Z], () => D.Z.getSortedLinkedChannelsForGuild(l.id).filter(e => null == u || e.id === u.id)),
    S = r.useMemo(() => g ? [] : [...y.map(e => ({
      type: "invite",
      data: e
    })), ...N.map(e => ({
      type: "channel",
      data: e
    }))], [y, N, g]),
    I = () => {
      (0, f.ZDy)(async () => e => (0, i.jsx)(_.default, V(z({}, e), {
        channel: u,
        guild: l,
        source: W.t4x.SETTINGS_INVITE
      })))
    },
    [E, k] = r.useState(62),
    A = () => {
      let e = {
        source: Z.Zu.GUILD_SETTINGS
      };
      (0, f.ZDy)(async () => t => (0, i.jsx)(w.default, V(z({}, t), {
        guildId: l.id,
        analyticsData: e
      })))
    };
  return (0, i.jsx)(O.Xi, {
    sections: [1, +!c, +!!c, Math.max(1, S.length)],
    renderSection: e => {
      let {
        section: t
      } = e;
      if (3 === t)
        if (0 === S.length && !g) return (0, i.jsx)("div", {
          children: (0, i.jsxs)(f.ubH, {
            theme: h,
            children: [(0, i.jsx)(f.oxh, {
              darkSrc: n(914814),
              lightSrc: n(370392),
              width: 256,
              height: 130
            }), (0, i.jsx)(f.OZU, {
              note: H.intl.string(H.t.F53CAc),
              children: H.intl.string(H.t["+nLJkZ"])
            })]
          })
        }, "empty-state");
        else return (0, i.jsxs)(T.Z, {
          children: [(0, i.jsx)(T.Z.Child, {
            grow: 3,
            basis: 0,
            className: K.marginReset,
            children: (0, i.jsx)(f.Text, {
              variant: "text-md/medium",
              children: H.intl.string(H.t.EgHyKy)
            })
          }), (0, i.jsx)(T.Z.Child, {
            basis: 0,
            grow: 3,
            className: K.marginReset,
            children: (0, i.jsx)(f.Text, {
              variant: "text-md/medium",
              children: N.length > 0 ? H.intl.string(H.t.l7VISQ) : H.intl.string(H.t.LBlFEN)
            })
          }), (0, i.jsx)(T.Z.Child, {
            grow: 1,
            basis: 0,
            children: (0, i.jsx)(f.Text, {
              variant: "text-md/medium",
              children: H.intl.string(H.t.erWrmA)
            })
          }), (0, i.jsx)(T.Z.Child, {
            grow: 2,
            basis: 0,
            children: (0, i.jsx)(f.Text, {
              variant: "text-md/medium",
              children: H.intl.string(H.t["1aM27d"])
            })
          }), v && (0, i.jsx)(T.Z.Child, {
            grow: 2,
            basis: 0,
            children: (0, i.jsx)(f.Text, {
              variant: "text-md/medium",
              children: H.intl.string(H.t["LPJmL/"])
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
      if (0 === t) return (0, i.jsx)(f.Heading, {
        variant: "heading-lg/semibold",
        color: "text-strong",
        className: G.header,
        children: H.intl.string(H.t["9F90ic"])
      });
      if (1 === t) return (0, i.jsxs)("div", {
        className: G.actions,
        children: [(0, i.jsx)(f.Text, {
          className: K.marginBottom20,
          variant: "text-sm/normal",
          color: "text-subtle",
          children: true === o ? H.intl.format(H.t["97VdNm"], {
            onCreateInvite: I
          }) : H.intl.string(H.t.WDw38H)
        }), (0, i.jsxs)("div", {
          className: G.inviteDisabledContainer,
          children: [(0, i.jsx)(f.Button, {
            size: "sm",
            variant: j ? "primary" : "critical-primary",
            text: j ? H.intl.string(H.t["/dbw3H"]) : H.intl.string(H.t.Uwsjn6),
            onClick: A,
            disabled: !x
          }), j && (0, i.jsxs)("div", {
            className: G.inviteDisabledTip,
            children: [(0, i.jsx)(f.Mgn, {
              size: "custom",
              width: 20,
              height: 20,
              color: p.Z.unsafe_rawColors.YELLOW_300.css
            }), (0, i.jsx)(f.Text, {
              variant: "text-sm/normal",
              children: H.intl.string(H.t["2LLbj9"])
            })]
          })]
        }), (0, i.jsx)(f.izJ, {
          className: G.headerDivider
        })]
      });
      if (2 === t) return (0, i.jsx)(B.Y, {
        hasInvites: y.length > 0,
        setHeight: k,
        onShowDisableInvites: A,
        onShowInviteModal: I,
        hasInviteDisabledPermission: x,
        invitesDisabled: j,
        canCreateInvites: o
      }, "actions-v2");
      if (3 === t) {
        if (0 === S.length && 0 === n && g) return (0, i.jsx)(f.$jN, {
          className: K.marginTop20,
          type: f.$jN.Type.SPINNING_CIRCLE
        }, "spinner");
        let e = S[n];
        switch (null == e ? true : e.type) {
          case "invite":
            return (0, i.jsx)(Y, {
              hide: a,
              invite: e.data,
              showChannel: m,
              inviteDisabled: j,
              showRolesColumn: v
            }, e.data.code);
          case "channel":
            var r;
            return (0, i.jsx)(J, {
              applicationId: null == (r = e.data.linkedLobby) ? true : r.application_id,
              channel: e.data,
              showChannel: m,
              inviteDisabled: j,
              showRolesColumn: v
            }, e.data.id);
          default:
            return null
        }
      }
    },
    rowHeight: (e, t) => 0 === e ? 64 : 1 === e ? 109 : 2 === e ? E : 3 === e ? 0 === S.length && 0 === t && g ? 62 : 62 * (null != S[t]) : 0,
    sectionHeight: e => 3 === e ? 0 !== S.length || g ? 28 : 240 : 0
  })
}