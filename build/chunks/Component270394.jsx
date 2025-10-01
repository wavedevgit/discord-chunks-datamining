/** Chunk was on 98039 **/
/** chunk id: 270394, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => K
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
  Chunk634755 = require("./634755.js"),
  Chunk757539 = require("./757539.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk427580 = require("./427580.js"),
  Chunk504401 = require("./504401.js"),
  Chunk10198 = require("./10198.js");

function H(e) {
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

function G(e, t) {
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

function z(e) {
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
  return (0, i.jsxs)(N.Z, {
    className: a()(B.inviteSettingsInviteRow, U.card, {
      [B.inviteDisabledRow]: t
    }),
    children: [(0, i.jsxs)(N.Z, {
      grow: 3,
      basis: 0,
      align: N.Z.Align.CENTER,
      className: B.text,
      children: [null != n && (0, i.jsx)(v.Z, {
        user: n,
        size: b.EFr.SIZE_24,
        className: B.avatar
      }), (0, i.jsxs)("div", {
        children: [null != n && (0, i.jsx)(x.Z, {
          discriminatorClass: B.discriminator,
          user: n
        }), r && null != l && (0, i.jsx)(b.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: (0, _.F6)(l, k.default, E.Z, true)
        })]
      })]
    }), (0, i.jsx)(N.Z, {
      grow: 3,
      shrink: 1,
      basis: 0,
      align: N.Z.Align.CENTER,
      className: B.text,
      children: (0, i.jsxs)("div", {
        className: B.inviteSourceContainer,
        children: [o, s]
      })
    }), (0, i.jsx)(N.Z, {
      grow: 1,
      basis: 0,
      align: N.Z.Align.CENTER,
      className: B.text,
      children: (0, i.jsx)(b.Text, {
        className: B.uses,
        variant: "text-sm/normal",
        children: c
      })
    }), (0, i.jsx)(N.Z, {
      grow: 2,
      basis: 0,
      align: N.Z.Align.CENTER,
      className: a()(B.text, B.countdownColumn),
      children: (0, i.jsx)(b.Text, {
        className: B.countdown,
        variant: "text-sm/normal",
        children: d
      })
    }), (0, i.jsx)(h.Z, {
      className: B.revokeInvite,
      onClick: u
    })]
  })
}

function F(e) {
  var t;
  let {
    invite: n,
    showChannel: r = false,
    inviteDisabled: l = false,
    hide: a = false
  } = e, o = n.uses;
  return n.maxUses > 0 && (o = "".concat(n.uses, "/").concat(n.maxUses)), (0, i.jsx)(z, {
    isDisabled: l,
    inviter: n.inviter,
    showChannel: r,
    channel: n.channel,
    inviteSource: (0, i.jsx)(b.Text, {
      className: B.inviteCode,
      variant: "text-sm/normal",
      children: a ? "..." : n.code
    }),
    inviteSourceTrailingContent: !a && (0, A.yE)(null != (t = n.flags) ? t : 0, u.$.IS_APPLICATION_BYPASS) ? (0, i.jsxs)("div", {
      className: B.bypass,
      children: [(0, i.jsx)(b.Text, {
        className: B.text,
        variant: "text-xs/normal",
        color: "text-muted",
        children: M.intl.string(M.t["1i1bUl"])
      }), (0, i.jsx)(b.ua7, {
        text: M.intl.string(M.t["jvd/LC"]),
        children: e => (0, i.jsx)(b.d3s, G(H({
          size: "xxs",
          color: "currentColor"
        }, e), {
          className: B.infoIcon
        }))
      })]
    }) : null,
    uses: o,
    expiresAt: (0, i.jsx)(C.Z, {
      deadline: n.getExpiresAt()
    }),
    onRevokeInvite: () => {
      g.ZP.revokeInvite(n)
    }
  })
}

function q(e) {
  let {
    applicationId: t,
    channel: r,
    showChannel: l = false,
    inviteDisabled: a = false
  } = e, o = (0, O.q)(t), s = (0, p.e7)([k.default], () => {
    var e;
    return k.default.getUser(null == (e = r.linkedLobby) ? true : e.linked_by)
  }), c = (0, Z.Y)(r);
  return (0, i.jsx)(z, {
    isDisabled: a,
    inviter: s,
    showChannel: l,
    channel: r,
    inviteSource: (0, i.jsxs)("div", {
      className: B.linkedChannelJoinSource,
      children: [(0, i.jsx)(w.Z, {
        game: o,
        size: w.A.XXSMALL
      }), (0, i.jsx)(b.Text, {
        className: B.linkedChannelJoinSourceText,
        variant: "text-sm/normal",
        children: null == o ? true : o.name
      })]
    }),
    uses: M.intl.string(M.t.jHpxws),
    expiresAt: M.intl.string(M.t.PqEzn5),
    onRevokeInvite: () => {
      if (!c || null == o) return void f.Z.show({
        title: M.intl.string(M.t.JmUENj),
        body: M.intl.string(M.t.SrvsMD)
      });
      (0, b.ZDy)(async () => {
        let {
          default: e
        } = await n.e("30019").then(n.bind(n, 719498));
        return t => (0, i.jsx)(e, G(H({}, t), {
          channel: r,
          application: o
        }))
      })
    }
  })
}

function K(e) {
  let {
    invites: t,
    guild: l,
    hide: a,
    canCreateInvites: o,
    withV2Actions: c,
    channel: u = null,
    showChannel: g = false,
    loading: f = false
  } = e;
  s()(null != l, "guild is required");
  let h = (0, y.ZP)(),
    x = (0, D.MQ)(l),
    v = (0, D.O4)(l),
    O = r.useMemo(() => null == t || f ? [] : d()(t).sortBy(e => {
      var t, n;
      return (null != (n = null == (t = e.inviter) ? true : t.username) ? n : "").toLowerCase()
    }).value(), [t, f]),
    _ = (0, p.Wu)([T.Z], () => T.Z.getSortedLinkedChannelsForGuild(l.id).filter(e => null == u || e.id === u.id)),
    C = r.useMemo(() => f ? [] : [...O.map(e => ({
      type: "invite",
      data: e
    })), ..._.map(e => ({
      type: "channel",
      data: e
    }))], [O, _, f]),
    w = () => {
      (0, b.ZDy)(async () => e => (0, i.jsx)(I.default, G(H({}, e), {
        channel: u,
        guild: l,
        source: L.t4x.SETTINGS_INVITE
      })))
    },
    [Z, E] = r.useState(62),
    k = () => {
      let e = {
        source: S.Zu.GUILD_SETTINGS
      };
      (0, b.ZDy)(async () => t => (0, i.jsx)(P.default, G(H({}, t), {
        guildId: l.id,
        analyticsData: e
      })))
    };
  return (0, i.jsx)(j.Xi, {
    sections: [1, +!c, +!!c, Math.max(1, C.length)],
    renderSection: e => {
      let {
        section: t
      } = e;
      if (3 === t)
        if (0 === C.length && !f) return (0, i.jsx)("div", {
          children: (0, i.jsxs)(b.ubH, {
            theme: h,
            children: [(0, i.jsx)(b.oxh, {
              darkSrc: n(914814),
              lightSrc: n(370392),
              width: 256,
              height: 130
            }), (0, i.jsx)(b.OZU, {
              note: M.intl.string(M.t.F53CAQ),
              children: M.intl.string(M.t["+nLJkZ"])
            })]
          })
        }, "empty-state");
        else return (0, i.jsxs)(N.Z, {
          children: [(0, i.jsx)(N.Z.Child, {
            grow: 3,
            basis: 0,
            className: W.marginReset,
            children: (0, i.jsx)(b.vwX, {
              children: M.intl.string(M.t.EgHyKy)
            })
          }), (0, i.jsx)(N.Z.Child, {
            basis: 0,
            grow: 3,
            className: W.marginReset,
            children: (0, i.jsx)(b.vwX, {
              children: _.length > 0 ? M.intl.string(M.t.l7VISU) : M.intl.string(M.t.LBlFEB)
            })
          }), (0, i.jsx)(N.Z.Child, {
            grow: 1,
            basis: 0,
            children: (0, i.jsx)(b.vwX, {
              children: M.intl.string(M.t.erWrmJ)
            })
          }), (0, i.jsx)(N.Z.Child, {
            grow: 2,
            basis: 0,
            children: (0, i.jsx)(b.vwX, {
              children: M.intl.string(M.t["1aM27e"])
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
      if (0 === t) return (0, i.jsx)(b.X6q, {
        variant: "heading-lg/semibold",
        color: "header-primary",
        className: B.header,
        children: M.intl.string(M.t["9F90iY"])
      });
      if (1 === t) return (0, i.jsxs)(b.hjN, {
        className: B.actions,
        children: [(0, i.jsx)(b.R94, {
          className: W.marginBottom20,
          type: b.geA.DESCRIPTION,
          children: true === o ? M.intl.format(M.t["97VdNj"], {
            onCreateInvite: w
          }) : M.intl.string(M.t.WDw38P)
        }), (0, i.jsxs)("div", {
          className: B.inviteDisabledContainer,
          children: [(0, i.jsx)(b.zxk, {
            size: "sm",
            variant: v ? "primary" : "critical-primary",
            text: v ? M.intl.string(M.t["/dbw3N"]) : M.intl.string(M.t.Uwsjn5),
            onClick: k,
            disabled: !x
          }), v && (0, i.jsxs)("div", {
            className: B.inviteDisabledTip,
            children: [(0, i.jsx)(b.Mgn, {
              size: "custom",
              width: 20,
              height: 20,
              color: m.Z.unsafe_rawColors.YELLOW_300.css
            }), (0, i.jsx)(b.Text, {
              variant: "text-sm/normal",
              children: M.intl.string(M.t["2LLbj4"])
            })]
          })]
        }), (0, i.jsx)(b.izJ, {
          className: B.headerDivider
        })]
      }, "header");
      if (2 === t) return (0, i.jsx)(R.Y, {
        hasInvites: O.length > 0,
        setHeight: E,
        onShowDisableInvites: k,
        onShowInviteModal: w,
        hasInviteDisabledPermission: x,
        invitesDisabled: v,
        canCreateInvites: o
      }, "actions-v2");
      if (3 === t) {
        if (0 === C.length && 0 === n && f) return (0, i.jsx)(b.$jN, {
          className: W.marginTop20,
          type: b.$jN.Type.SPINNING_CIRCLE
        }, "spinner");
        let e = C[n];
        switch (null == e ? true : e.type) {
          case "invite":
            return (0, i.jsx)(F, {
              hide: a,
              invite: e.data,
              showChannel: g,
              inviteDisabled: v
            }, e.data.code);
          case "channel":
            var r;
            return (0, i.jsx)(q, {
              applicationId: null == (r = e.data.linkedLobby) ? true : r.application_id,
              channel: e.data,
              showChannel: g,
              inviteDisabled: v
            }, e.data.id);
          default:
            return null
        }
      }
    },
    rowHeight: (e, t) => 0 === e ? 64 : 1 === e ? 109 : 2 === e ? Z : 3 === e ? 0 === C.length && 0 === t && f ? 62 : 62 * (null != C[t]) : 0,
    sectionHeight: e => 3 === e ? 0 !== C.length || f ? 28 : 240 : 0
  })
}