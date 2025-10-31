/** Chunk was on 86736 **/
/** chunk id: 270394, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => V
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

function F(e, t) {
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

function K(e) {
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
  return (0, i.jsxs)(S.Z, {
    className: a()(B.inviteSettingsInviteRow, W.card, {
      [B.inviteDisabledRow]: t
    }),
    children: [(0, i.jsxs)(S.Z, {
      grow: 3,
      basis: 0,
      align: S.Z.Align.CENTER,
      className: B.text,
      children: [null != n && (0, i.jsx)(O.Z, {
        user: n,
        size: g.EFr.SIZE_24,
        className: B.avatar
      }), (0, i.jsxs)("div", {
        children: [null != n && (0, i.jsx)(j.Z, {
          discriminatorClass: B.discriminator,
          user: n
        }), r && null != l && (0, i.jsx)(g.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: (0, C.F6)(l, A.default, k.Z, true)
        })]
      })]
    }), (0, i.jsx)(S.Z, {
      grow: 3,
      shrink: 1,
      basis: 0,
      align: S.Z.Align.CENTER,
      className: B.text,
      children: (0, i.jsxs)("div", {
        className: B.inviteSourceContainer,
        children: [o, s]
      })
    }), (0, i.jsx)(S.Z, {
      grow: 1,
      basis: 0,
      align: S.Z.Align.CENTER,
      className: B.text,
      children: (0, i.jsx)(g.Text, {
        className: B.uses,
        variant: "text-sm/normal",
        children: c
      })
    }), (0, i.jsx)(S.Z, {
      grow: 2,
      basis: 0,
      align: S.Z.Align.CENTER,
      className: a()(B.text, B.countdownColumn),
      children: (0, i.jsx)(g.Text, {
        className: B.countdown,
        variant: "text-sm/normal",
        children: d
      })
    }), (0, i.jsx)(x.Z, {
      className: B.revokeInvite,
      onClick: u
    })]
  })
}

function z(e) {
  var t;
  let {
    invite: n,
    showChannel: r = false,
    inviteDisabled: l = false,
    hide: a = false
  } = e, o = n.uses;
  return n.maxUses > 0 && (o = "".concat(n.uses, "/").concat(n.maxUses)), (0, i.jsx)(K, {
    isDisabled: l,
    inviter: n.inviter,
    showChannel: r,
    channel: n.channel,
    inviteSource: (0, i.jsx)(g.Text, {
      className: B.inviteCode,
      variant: "text-sm/normal",
      children: a ? "..." : n.code
    }),
    inviteSourceTrailingContent: !a && (0, D.yE)(null != (t = n.flags) ? t : 0, u.$.IS_APPLICATION_BYPASS) ? (0, i.jsxs)("div", {
      className: B.bypass,
      children: [(0, i.jsx)(g.Text, {
        className: B.text,
        variant: "text-xs/normal",
        color: "text-muted",
        children: U.intl.string(U.t["1i1bUl"])
      }), (0, i.jsx)(b.u, {
        text: U.intl.string(U.t["jvd/LF"]),
        children: (0, i.jsx)(g.d3s, {
          size: "xxs",
          color: "currentColor",
          className: B.infoIcon
        })
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

function q(e) {
  let {
    applicationId: t,
    channel: r,
    showChannel: l = false,
    inviteDisabled: a = false
  } = e, o = (0, _.q)(t), s = (0, p.e7)([A.default], () => {
    var e;
    return A.default.getUser(null == (e = r.linkedLobby) ? true : e.linked_by)
  }), c = (0, T.Y)(r);
  return (0, i.jsx)(K, {
    isDisabled: a,
    inviter: s,
    showChannel: l,
    channel: r,
    inviteSource: (0, i.jsxs)("div", {
      className: B.linkedChannelJoinSource,
      children: [(0, i.jsx)(E.Z, {
        game: o,
        size: E.A.XXSMALL
      }), (0, i.jsx)(g.Text, {
        className: B.linkedChannelJoinSourceText,
        variant: "text-sm/normal",
        children: null == o ? true : o.name
      })]
    }),
    uses: U.intl.string(U.t.jHpxwo),
    expiresAt: U.intl.string(U.t.PqEzn8),
    onRevokeInvite: () => {
      if (!c || null == o) return void h.Z.show({
        title: U.intl.string(U.t.JmUENg),
        body: U.intl.string(U.t.SrvsML)
      });
      (0, g.ZDy)(async () => {
        let {
          default: e
        } = await n.e("30019").then(n.bind(n, 719498));
        return t => (0, i.jsx)(e, F(G({}, t), {
          channel: r,
          application: o
        }))
      })
    }
  })
}

function V(e) {
  let {
    invites: t,
    guild: l,
    hide: a,
    canCreateInvites: o,
    withV2Actions: c,
    channel: u = null,
    showChannel: b = false,
    loading: f = false
  } = e;
  s()(null != l, "guild is required");
  let h = (0, y.ZP)(),
    x = (0, R.MQ)(l),
    j = (0, R.O4)(l),
    O = r.useMemo(() => null == t || f ? [] : d()(t).sortBy(e => {
      var t, n;
      return (null != (n = null == (t = e.inviter) ? true : t.username) ? n : "").toLowerCase()
    }).value(), [t, f]),
    _ = (0, p.Wu)([Z.Z], () => Z.Z.getSortedLinkedChannelsForGuild(l.id).filter(e => null == u || e.id === u.id)),
    C = r.useMemo(() => f ? [] : [...O.map(e => ({
      type: "invite",
      data: e
    })), ..._.map(e => ({
      type: "channel",
      data: e
    }))], [O, _, f]),
    N = () => {
      (0, g.ZDy)(async () => e => (0, i.jsx)(w.default, F(G({}, e), {
        channel: u,
        guild: l,
        source: M.t4x.SETTINGS_INVITE
      })))
    },
    [E, T] = r.useState(62),
    k = () => {
      let e = {
        source: I.Zu.GUILD_SETTINGS
      };
      (0, g.ZDy)(async () => t => (0, i.jsx)(P.default, F(G({}, t), {
        guildId: l.id,
        analyticsData: e
      })))
    };
  return (0, i.jsx)(v.Xi, {
    sections: [1, +!c, +!!c, Math.max(1, C.length)],
    renderSection: e => {
      let {
        section: t
      } = e;
      if (3 === t)
        if (0 === C.length && !f) return (0, i.jsx)("div", {
          children: (0, i.jsxs)(g.ubH, {
            theme: h,
            children: [(0, i.jsx)(g.oxh, {
              darkSrc: n(914814),
              lightSrc: n(370392),
              width: 256,
              height: 130
            }), (0, i.jsx)(g.OZU, {
              note: U.intl.string(U.t.F53CAc),
              children: U.intl.string(U.t["+nLJkZ"])
            })]
          })
        }, "empty-state");
        else return (0, i.jsxs)(S.Z, {
          children: [(0, i.jsx)(S.Z.Child, {
            grow: 3,
            basis: 0,
            className: H.marginReset,
            children: (0, i.jsx)(g.Text, {
              variant: "text-md/medium",
              children: U.intl.string(U.t.EgHyKy)
            })
          }), (0, i.jsx)(S.Z.Child, {
            basis: 0,
            grow: 3,
            className: H.marginReset,
            children: (0, i.jsx)(g.Text, {
              variant: "text-md/medium",
              children: _.length > 0 ? U.intl.string(U.t.l7VISQ) : U.intl.string(U.t.LBlFEN)
            })
          }), (0, i.jsx)(S.Z.Child, {
            grow: 1,
            basis: 0,
            children: (0, i.jsx)(g.Text, {
              variant: "text-md/medium",
              children: U.intl.string(U.t.erWrmA)
            })
          }), (0, i.jsx)(S.Z.Child, {
            grow: 2,
            basis: 0,
            children: (0, i.jsx)(g.Text, {
              variant: "text-md/medium",
              children: U.intl.string(U.t["1aM27d"])
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
      if (0 === t) return (0, i.jsx)(g.Heading, {
        variant: "heading-lg/semibold",
        color: "header-primary",
        className: B.header,
        children: U.intl.string(U.t["9F90ic"])
      });
      if (1 === t) return (0, i.jsxs)("div", {
        className: B.actions,
        children: [(0, i.jsx)(g.Text, {
          className: H.marginBottom20,
          variant: "text-sm/normal",
          color: "text-secondary",
          children: true === o ? U.intl.format(U.t["97VdNm"], {
            onCreateInvite: N
          }) : U.intl.string(U.t.WDw38H)
        }), (0, i.jsxs)("div", {
          className: B.inviteDisabledContainer,
          children: [(0, i.jsx)(g.Button, {
            size: "sm",
            variant: j ? "primary" : "critical-primary",
            text: j ? U.intl.string(U.t["/dbw3H"]) : U.intl.string(U.t.Uwsjn6),
            onClick: k,
            disabled: !x
          }), j && (0, i.jsxs)("div", {
            className: B.inviteDisabledTip,
            children: [(0, i.jsx)(g.Mgn, {
              size: "custom",
              width: 20,
              height: 20,
              color: m.Z.unsafe_rawColors.YELLOW_300.css
            }), (0, i.jsx)(g.Text, {
              variant: "text-sm/normal",
              children: U.intl.string(U.t["2LLbj9"])
            })]
          })]
        }), (0, i.jsx)(g.izJ, {
          className: B.headerDivider
        })]
      });
      if (2 === t) return (0, i.jsx)(L.Y, {
        hasInvites: O.length > 0,
        setHeight: T,
        onShowDisableInvites: k,
        onShowInviteModal: N,
        hasInviteDisabledPermission: x,
        invitesDisabled: j,
        canCreateInvites: o
      }, "actions-v2");
      if (3 === t) {
        if (0 === C.length && 0 === n && f) return (0, i.jsx)(g.$jN, {
          className: H.marginTop20,
          type: g.$jN.Type.SPINNING_CIRCLE
        }, "spinner");
        let e = C[n];
        switch (null == e ? true : e.type) {
          case "invite":
            return (0, i.jsx)(z, {
              hide: a,
              invite: e.data,
              showChannel: b,
              inviteDisabled: j
            }, e.data.code);
          case "channel":
            var r;
            return (0, i.jsx)(q, {
              applicationId: null == (r = e.data.linkedLobby) ? true : r.application_id,
              channel: e.data,
              showChannel: b,
              inviteDisabled: j
            }, e.data.id);
          default:
            return null
        }
      }
    },
    rowHeight: (e, t) => 0 === e ? 64 : 1 === e ? 109 : 2 === e ? E : 3 === e ? 0 === C.length && 0 === t && f ? 62 : 62 * (null != C[t]) : 0,
    sectionHeight: e => 3 === e ? 0 !== C.length || f ? 28 : 240 : 0
  })
}