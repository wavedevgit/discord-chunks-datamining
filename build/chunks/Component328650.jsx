/** Chunk was on 21968 **/
/** chunk id: 328650, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => Z
}), require("./938796.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  d = require.n(Chunk735438),
  Chunk821418 = require("./821418.js"),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk846293 = require("./846293.js"),
  Chunk579872 = require("./579872.jsx"),
  Chunk414079 = require("./414079.jsx"),
  Chunk297413 = require("./297413.jsx"),
  Chunk361739 = require("./361739.jsx"),
  Chunk966327 = require("./966327.jsx"),
  Chunk736653 = require("./736653.js"),
  Chunk429913 = require("./429913.js"),
  Chunk47167 = require("./47167.js"),
  Chunk576470 = require("./576470.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk769015 = require("./769015.jsx"),
  Chunk834409 = require("./834409.js"),
  Chunk671576 = require("./671576.jsx"),
  Chunk540683 = require("./540683.js"),
  Chunk234355 = require("./234355.jsx"),
  Chunk957103 = require("./957103.jsx"),
  Chunk526132 = require("./526132.js"),
  Chunk734057 = require("./734057.js"),
  Chunk317525 = require("./317525.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk347951 = require("./347951.js"),
  Chunk537855 = require("./537855.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk928128 = require("./928128.js"),
  Chunk506823 = require("./506823.js"),
  Chunk473169 = require("./473169.js");

function F(e) {
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

function Y(e, t) {
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
    inviteSource: s,
    inviteSourceTrailingContent: o,
    uses: c,
    expiresAt: d,
    roles: u,
    guildId: p,
    showRolesColumn: m,
    onRevokeInvite: g
  } = e;
  return (0, i.jsxs)(E.A, {
    className: a()(V._O, z.N, {
      [V.Gg]: t
    }),
    children: [(0, i.jsxs)(E.A, {
      grow: 4,
      basis: 0,
      align: E.A.Align.CENTER,
      className: V.Qq,
      children: [null != n && (0, i.jsx)(A.A, {
        user: n,
        size: f._3J.SIZE_24,
        className: V.my
      }), (0, i.jsxs)("div", {
        children: [null != n && (0, i.jsx)(O.A, {
          discriminatorClass: V.D2,
          user: n
        }), r && null != l && (0, i.jsx)(f.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          children: (0, N.m1)(l, G.default, M.A, true)
        })]
      })]
    }), (0, i.jsx)(E.A, {
      grow: 3,
      shrink: 1,
      basis: 0,
      align: E.A.Align.CENTER,
      className: V.Qq,
      children: (0, i.jsxs)("div", {
        className: V.AL,
        children: [s, o]
      })
    }), (0, i.jsx)(E.A, {
      grow: 1,
      basis: 0,
      align: E.A.Align.CENTER,
      className: V.Qq,
      children: (0, i.jsx)(f.Text, {
        className: V.r9,
        variant: "text-sm/normal",
        children: c
      })
    }), (0, i.jsx)(E.A, {
      grow: 2,
      basis: 0,
      align: E.A.Align.CENTER,
      className: a()(V.Qq, V.sA),
      children: (0, i.jsx)(f.Text, {
        className: V.qW,
        variant: "text-sm/normal",
        children: d
      })
    }), m && null != p && (0, i.jsx)(E.A, {
      grow: 2,
      basis: 0,
      align: E.A.Align.CENTER,
      className: V.Qq,
      children: (0, i.jsx)(k.A, {
        roles: u,
        guildId: p
      })
    }), (0, i.jsx)(j.A, {
      className: V.eb,
      onClick: g
    })]
  })
}

function J(e) {
  var t, n;
  let {
    invite: r,
    showChannel: l = false,
    inviteDisabled: a = false,
    hide: s = false,
    showRolesColumn: o
  } = e, c = null == (n = r.guild) ? true : n.id, d = r.uses;
  r.maxUses > 0 && (d = "".concat(r.uses, "/").concat(r.maxUses));
  let g = (0, m.bG)([D.A], () => null == c ? [] : r.roles.map(e => D.A.getRole(c, e.id)).filter(e => null != e), [c, r.roles]);
  return (0, i.jsx)(q, {
    isDisabled: a,
    inviter: r.inviter,
    showChannel: l,
    channel: r.channel,
    inviteSource: (0, i.jsx)(f.Text, {
      className: V.Rg,
      variant: "text-sm/normal",
      children: s ? "..." : r.code
    }),
    inviteSourceTrailingContent: !s && (0, p.Lt)(null != (t = r.flags) ? t : 0, u.Q.IS_APPLICATION_BYPASS) ? (0, i.jsxs)("div", {
      className: V.XH,
      children: [(0, i.jsx)(f.Text, {
        className: V.Qq,
        variant: "text-xs/normal",
        color: "text-muted",
        children: H.intl.string(H.t["1i1bUl"])
      }), (0, i.jsx)(b.m, {
        text: H.intl.string(H.t["jvd/LF"]),
        children: (0, i.jsx)(f.mir, {
          size: "xxs",
          color: "currentColor",
          className: V.G
        })
      })]
    }) : null,
    uses: d,
    expiresAt: (0, i.jsx)(w.A, {
      deadline: r.getExpiresAt()
    }),
    roles: g,
    guildId: c,
    showRolesColumn: o,
    onRevokeInvite: () => {
      h.Ay.revokeInvite(r)
    }
  })
}

function Q(e) {
  let {
    applicationId: t,
    channel: r,
    showChannel: l = false,
    inviteDisabled: a = false,
    showRolesColumn: s
  } = e, o = (0, _.h)(t), c = (0, m.bG)([G.default], () => {
    var e;
    return G.default.getUser(null == (e = r.linkedLobby) ? true : e.linked_by)
  }), d = (0, R.e)(r);
  return (0, i.jsx)(q, {
    isDisabled: a,
    inviter: c,
    showChannel: l,
    channel: r,
    inviteSource: (0, i.jsxs)("div", {
      className: V._z,
      children: [(0, i.jsx)(T.A, {
        game: o,
        size: T.M.XXSMALL
      }), (0, i.jsx)(f.Text, {
        className: V.PD,
        variant: "text-sm/normal",
        children: null == o ? true : o.name
      })]
    }),
    uses: H.intl.string(H.t.jHpxwo),
    expiresAt: H.intl.string(H.t.PqEzn8),
    roles: [],
    guildId: r.guild_id,
    showRolesColumn: s,
    onRevokeInvite: () => {
      d && null != o ? (0, f.mMO)(async () => {
        let {
          default: e
        } = await n.e("73380").then(n.bind(n, 106895));
        return t => (0, i.jsx)(e, Y(F({}, t), {
          channel: r,
          application: o
        }))
      }) : x.A.show({
        title: H.intl.string(H.t.JmUENg),
        body: H.intl.string(H.t.SrvsML)
      })
    }
  })
}

function Z(e) {
  let {
    invites: t,
    guild: l,
    hide: a,
    canCreateInvites: s,
    withV2Actions: c,
    channel: u = null,
    showChannel: p = false,
    loading: b = false
  } = e;
  o()(null != l, "guild is required");
  let h = (0, v.Ay)(),
    x = (0, U.Fi)(l),
    j = (0, U.Wr)(l),
    O = (0, I.E)(l.id, "SettingsInvites").enabled,
    A = r.useMemo(() => null == t || b ? [] : d()(t).sortBy(e => {
      var t, n;
      return (null != (t = null == (n = e.inviter) ? true : n.username) ? t : "").toLowerCase()
    }).value(), [t, b]),
    _ = (0, m.yK)([L.A], () => L.A.getSortedLinkedChannelsForGuild(l.id).filter(e => null == u || e.id === u.id)),
    N = r.useMemo(() => b ? [] : [...A.map(e => ({
      type: "invite",
      data: e
    })), ..._.map(e => ({
      type: "channel",
      data: e
    }))], [A, _, b]),
    w = () => {
      (0, f.mMO)(async () => e => (0, i.jsx)(P.default, Y(F({}, e), {
        channel: u,
        guild: l,
        source: W.PE1.SETTINGS_INVITE
      })))
    },
    [T, k] = r.useState(62),
    R = () => {
      let e = {
        source: C.Eo.GUILD_SETTINGS
      };
      (0, f.mMO)(async () => t => (0, i.jsx)(S.default, Y(F({}, t), {
        guildId: l.id,
        analyticsData: e
      })))
    };
  return (0, i.jsx)(y.ic, {
    sections: [1, +!c, +!!c, Math.max(1, N.length)],
    renderSection: e => {
      let {
        section: t
      } = e;
      if (3 === t)
        if (0 === N.length && !b) return (0, i.jsx)("div", {
          children: (0, i.jsxs)(f.ppr, {
            theme: h,
            children: [(0, i.jsx)(f.G8R, {
              darkSrc: n(774125),
              lightSrc: n(151803),
              width: 256,
              height: 130
            }), (0, i.jsx)(f.SGT, {
              note: H.intl.string(H.t.F53CAc),
              children: H.intl.string(H.t["+nLJkZ"])
            })]
          })
        }, "empty-state");
        else return (0, i.jsxs)(E.A, {
          children: [(0, i.jsx)(E.A.Child, {
            grow: 4,
            basis: 0,
            className: K.Gf,
            children: (0, i.jsx)(f.Text, {
              variant: "text-md/medium",
              children: H.intl.string(H.t.EgHyKy)
            })
          }), (0, i.jsx)(E.A.Child, {
            basis: 0,
            grow: 3,
            className: K.Gf,
            children: (0, i.jsx)(f.Text, {
              variant: "text-md/medium",
              children: _.length > 0 ? H.intl.string(H.t.l7VISQ) : H.intl.string(H.t.LBlFEN)
            })
          }), (0, i.jsx)(E.A.Child, {
            grow: 1,
            basis: 0,
            children: (0, i.jsx)(f.Text, {
              variant: "text-md/medium",
              children: H.intl.string(H.t.erWrmA)
            })
          }), (0, i.jsx)(E.A.Child, {
            grow: 2,
            basis: 0,
            children: (0, i.jsx)(f.Text, {
              variant: "text-md/medium",
              children: H.intl.string(H.t["1aM27d"])
            })
          }), O && (0, i.jsx)(E.A.Child, {
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
        className: V.wx,
        children: H.intl.string(H.t["9F90ic"])
      });
      if (1 === t) return (0, i.jsxs)("div", {
        className: V.o1,
        children: [(0, i.jsx)(f.Text, {
          className: K.SX,
          variant: "text-sm/normal",
          color: "text-subtle",
          children: true === s ? H.intl.format(H.t["97VdNm"], {
            onCreateInvite: w
          }) : H.intl.string(H.t.WDw38H)
        }), (0, i.jsxs)("div", {
          className: V.N5,
          children: [(0, i.jsx)(f.Button, {
            size: "sm",
            variant: j ? "primary" : "critical-primary",
            text: j ? H.intl.string(H.t["/dbw3H"]) : H.intl.string(H.t.Uwsjn6),
            onClick: R,
            disabled: !x
          }), j && (0, i.jsxs)("div", {
            className: V.TJ,
            children: [(0, i.jsx)(f.EpV, {
              size: "custom",
              width: 20,
              height: 20,
              color: g.A.unsafe_rawColors.YELLOW_300.css
            }), (0, i.jsx)(f.Text, {
              variant: "text-sm/normal",
              children: H.intl.string(H.t["2LLbj9"])
            })]
          })]
        }), (0, i.jsx)(f.cGx, {
          className: V.zN
        })]
      });
      if (2 === t) return (0, i.jsx)(B.K, {
        hasInvites: A.length > 0,
        setHeight: k,
        onShowDisableInvites: R,
        onShowInviteModal: w,
        hasInviteDisabledPermission: x,
        invitesDisabled: j,
        canCreateInvites: s
      }, "actions-v2");
      if (3 === t) {
        if (0 === N.length && 0 === n && b) return (0, i.jsx)(f.y$y, {
          className: K.QX,
          type: f.y$y.Type.SPINNING_CIRCLE
        }, "spinner");
        let e = N[n];
        switch (null == e ? true : e.type) {
          case "invite":
            return (0, i.jsx)(J, {
              hide: a,
              invite: e.data,
              showChannel: p,
              inviteDisabled: j,
              showRolesColumn: O
            }, e.data.code);
          case "channel":
            var r;
            return (0, i.jsx)(Q, {
              applicationId: null == (r = e.data.linkedLobby) ? true : r.application_id,
              channel: e.data,
              showChannel: p,
              inviteDisabled: j,
              showRolesColumn: O
            }, e.data.id);
          default:
            return null
        }
      }
    },
    rowHeight: (e, t) => 0 === e ? 64 : 1 === e ? 109 : 2 === e ? T : 3 === e ? 0 === N.length && 0 === t && b ? 62 : 62 * (null != N[t]) : 0,
    sectionHeight: e => 3 === e ? 0 !== N.length || b ? 28 : 240 : 0
  })
}