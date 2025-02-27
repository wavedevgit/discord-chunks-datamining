/** Chunk was on 50749 **/
n.d(t, {
  Z: () => U
}), n(789020), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(512722),
  s = n.n(a),
  c = n(392711),
  d = n.n(c),
  u = n(533800),
  p = n(692547),
  m = n(481060),
  b = n(447543),
  g = n(225433),
  f = n(129861),
  h = n(493544),
  x = n(700582),
  j = n(410030),
  v = n(933557),
  N = n(346486),
  O = n(600164),
  y = n(666657),
  _ = n(664452),
  C = n(560114),
  I = n(699516),
  E = n(594174),
  S = n(630388),
  P = n(965638),
  w = n(757539),
  Z = n(981631),
  T = n(388032),
  W = n(940982),
  k = n(951565),
  A = n(802138);

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let L = {
    INVITER: 3,
    INVITE_CODE: 3,
    USES: 1,
    EXPIRES: 2
  },
  M = {
    HEADER: 0,
    ACTIONS_V1: 1,
    ACTIONS_V2: 2,
    TABLE: 3
  };

function B(e) {
  var t;
  let {
    invite: n,
    showChannel: i = !1,
    inviteDisabled: l = !1,
    hide: a = !1
  } = e, s = n.uses;
  return n.maxUses > 0 && (s = "".concat(n.uses, "/").concat(n.maxUses)), (0, r.jsxs)(O.Z, {
    className: o()(W.inviteSettingsInviteRow, k.card, {
      [W.inviteDisabledRow]: l
    }),
    children: [(0, r.jsxs)(O.Z, {
      grow: L.INVITER,
      basis: 0,
      align: O.Z.Align.CENTER,
      className: o()(W.text),
      children: [null != n.inviter && (0, r.jsx)(x.Z, {
        user: n.inviter,
        size: m.EFr.SIZE_24,
        className: W.avatar
      }), (0, r.jsxs)("div", {
        children: [null != n.inviter && (0, r.jsx)(f.Z, {
          discriminatorClass: W.discriminator,
          user: n.inviter
        }), i && (0, r.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: (0, v.F6)(n.channel, E.default, I.Z, !0)
        })]
      })]
    }), (0, r.jsx)(O.Z, {
      grow: L.INVITE_CODE,
      shrink: 1,
      basis: 0,
      align: O.Z.Align.CENTER,
      className: W.text,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(m.Text, {
          className: W.inviteCode,
          variant: "text-sm/normal",
          children: a ? "..." : n.code
        }), !a && (0, S.yE)(null !== (t = n.flags) && void 0 !== t ? t : 0, u.$.IS_APPLICATION_BYPASS) ? (0, r.jsxs)("div", {
          className: W.bypass,
          children: [(0, r.jsx)(m.Text, {
            className: W.text,
            variant: "text-xs/normal",
            color: "text-muted",
            children: T.NW.string(T.t["1i1bUl"])
          }), (0, r.jsx)(m.ua7, {
            text: T.NW.string(T.t["jvd/LC"]),
            children: e => (0, r.jsx)(m.d3s, R(D({
              size: "xxs",
              color: "currentColor"
            }, e), {
              className: W.infoIcon
            }))
          })]
        }) : null]
      })
    }), (0, r.jsx)(O.Z, {
      grow: L.USES,
      basis: 0,
      align: O.Z.Align.CENTER,
      className: o()(W.text),
      children: (0, r.jsx)(m.Text, {
        className: W.uses,
        variant: "text-sm/normal",
        children: s
      })
    }), (0, r.jsx)(O.Z, {
      grow: L.EXPIRES,
      basis: 0,
      align: O.Z.Align.CENTER,
      className: o()(W.text, W.countdownColumn),
      children: (0, r.jsx)(m.Text, {
        className: W.countdown,
        variant: "text-sm/normal",
        children: (0, r.jsx)(N.Z, {
          deadline: n.getExpiresAt()
        })
      })
    }), (0, r.jsx)(g.Z, {
      className: W.revokeInvite,
      onClick: () => {
        b.ZP.revokeInvite(n)
      }
    })]
  })
}

function U(e) {
  let {
    invites: t,
    guild: l,
    hide: o,
    canCreateInvites: a,
    withV2Actions: c,
    channel: u = null,
    showChannel: b = !1,
    loading: g = !1
  } = e;
  s()(null != l, "guild is required");
  let f = (0, j.ZP)(),
    x = (0, P.MQ)(l),
    v = (0, P.O4)(l),
    N = i.useMemo(() => null == t || g ? [] : d()(t).sortBy(e => {
      var t, n;
      return (null !== (n = null === (t = e.inviter) || void 0 === t ? void 0 : t.username) && void 0 !== n ? n : "").toLowerCase()
    }).value(), [t, g]),
    I = () => {
      (0, m.ZDy)(async () => e => (0, r.jsx)(C.default, R(D({}, e), {
        channel: u,
        guild: l,
        source: Z.t4x.SETTINGS_INVITE
      })))
    },
    [E, S] = i.useState(62),
    k = () => {
      let e = {
        source: y.Zu.GUILD_SETTINGS
      };
      (0, m.ZDy)(async () => t => (0, r.jsx)(_.default, R(D({}, t), {
        guildId: l.id,
        analyticsData: e
      })))
    };
  return (0, r.jsx)(h.Xi, {
    sections: [1, +!c, +!!c, Math.max(1, N.length)],
    renderSection: e => {
      let {
        section: t
      } = e;
      return t === M.TABLE ? 0 !== N.length || g ? (0, r.jsxs)(O.Z, {
        children: [(0, r.jsx)(O.Z.Child, {
          grow: L.INVITER,
          basis: 0,
          className: A.marginReset,
          children: (0, r.jsx)(m.vwX, {
            children: T.NW.string(T.t.EgHyKy)
          })
        }), (0, r.jsx)(O.Z.Child, {
          basis: 0,
          grow: L.INVITE_CODE,
          className: A.marginReset,
          children: (0, r.jsx)(m.vwX, {
            children: T.NW.string(T.t.LBlFEB)
          })
        }), (0, r.jsx)(O.Z.Child, {
          grow: L.USES,
          basis: 0,
          children: (0, r.jsx)(m.vwX, {
            children: T.NW.string(T.t.erWrmJ)
          })
        }), (0, r.jsx)(O.Z.Child, {
          grow: L.EXPIRES,
          basis: 0,
          children: (0, r.jsx)(m.vwX, {
            children: T.NW.string(T.t["1aM27e"])
          })
        })]
      }) : (0, r.jsx)("div", {
        children: (0, r.jsxs)(m.ubH, {
          theme: f,
          children: [(0, r.jsx)(m.oxh, {
            darkSrc: n(914814),
            lightSrc: n(370392),
            width: 256,
            height: 130
          }), (0, r.jsx)(m.OZU, {
            note: T.NW.string(T.t.F53CAQ),
            children: T.NW.string(T.t["+nLJkZ"])
          })]
        })
      }) : null
    },
    renderRow: e => {
      let {
        section: t,
        row: n
      } = e;
      if (t === M.HEADER) return (0, r.jsx)(m.X6q, {
        variant: "heading-lg/semibold",
        color: "header-primary",
        className: W.header,
        children: T.NW.string(T.t["9F90iY"])
      });
      if (t === M.ACTIONS_V1) return (0, r.jsxs)(m.hjN, {
        className: W.actions,
        children: [(0, r.jsx)(m.R94, {
          className: A.marginBottom20,
          type: m.geA.DESCRIPTION,
          children: !0 === a ? T.NW.format(T.t["97VdNj"], {
            onCreateInvite: I
          }) : T.NW.string(T.t.WDw38P)
        }), (0, r.jsxs)("div", {
          className: W.inviteDisabledContainer,
          children: [(0, r.jsx)(m.zxk, {
            size: m.zxk.Sizes.SMALL,
            color: v ? m.zxk.Colors.BRAND : m.zxk.Colors.RED,
            disabled: !x,
            onClick: k,
            children: v ? T.NW.string(T.t["/dbw3N"]) : T.NW.string(T.t.Uwsjn5)
          }), v && (0, r.jsxs)("div", {
            className: W.inviteDisabledTip,
            children: [(0, r.jsx)(m.P4T, {
              size: "custom",
              width: 20,
              height: 20,
              color: p.Z.unsafe_rawColors.YELLOW_300.css
            }), (0, r.jsx)(m.Text, {
              variant: "text-sm/normal",
              children: T.NW.string(T.t["2LLbj4"])
            })]
          })]
        }), (0, r.jsx)(m.$i$, {
          className: W.headerDivider
        })]
      }, "header");
      if (t === M.ACTIONS_V2) return (0, r.jsx)(w.Y, {
        hasInvites: N.length > 0,
        setHeight: S,
        onShowDisableInvites: k,
        onShowInviteModal: I,
        hasInviteDisabledPermission: x,
        invitesDisabled: v,
        canCreateInvites: a
      });
      if (t === M.TABLE) {
        if (0 === N.length && 0 === n && g) return (0, r.jsx)(m.$jN, {
          className: A.marginTop20,
          type: m.$jN.Type.SPINNING_CIRCLE
        }, "spinner");
        let e = N[n];
        return null == e ? null : (0, r.jsx)(B, {
          hide: o,
          invite: e,
          showChannel: b,
          inviteDisabled: v
        }, e.code)
      }
    },
    rowHeight: (e, t) => e === M.HEADER ? 64 : e === M.ACTIONS_V1 ? 109 : e === M.ACTIONS_V2 ? E : e === M.TABLE ? 0 === N.length && 0 === t && g ? 62 : 62 * (null != N[t]) : 0,
    sectionHeight: e => e === M.TABLE ? 0 !== N.length || g ? 28 : 240 : 0
  })
}