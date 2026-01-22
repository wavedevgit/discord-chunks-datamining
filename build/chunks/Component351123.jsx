/** Chunk was on 86915 **/
/** chunk id: 351123, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => q
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk493683 = require("./493683.js"),
  Chunk787014 = require("./787014.js"),
  Chunk741361 = require("./741361.js"),
  Chunk911969 = require("./911969.js"),
  Chunk385499 = require("./385499.jsx"),
  Chunk134433 = require("./134433.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk156699 = require("./156699.js"),
  Chunk693196 = require("./693196.js"),
  Chunk434404 = require("./434404.js"),
  Chunk200498 = require("./200498.js"),
  Chunk146085 = require("./146085.js"),
  Chunk192079 = require("./192079.js"),
  Chunk277053 = require("./277053.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk903386 = require("./903386.jsx"),
  Chunk700785 = require("./700785.js"),
  Chunk605436 = require("./605436.js"),
  Chunk374347 = require("./374347.jsx"),
  Chunk415236 = require("./415236.jsx"),
  Chunk182905 = require("./182905.jsx"),
  Chunk71080 = require("./71080.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk267263 = require("./267263.js");

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

function H(e, t) {
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
    channel: t,
    roles: n,
    members: l,
    disabledReason: r,
    getRemoveTooltipHint: s
  } = e;
  return (0, i.jsx)(d.aVo, {
    className: V.roleMemberList,
    sections: [n.length, l.length],
    renderRow: function(e) {
      let c, g, j, {
          section: v,
          row: y
        } = e,
        S = false;
      switch (v) {
        case D.m$.ROLES:
          var O;
          j = (g = n[y]).rowType === D.aC.ROLE && (null == (O = g.tags) ? true : O.guild_connections) === null ? (0, i.jsx)(b.Z, {
            className: V.shield,
            color: g.colorString,
            size: 20
          }) : (0, i.jsx)(d.lZ8, {
            size: "custom",
            className: V.shield,
            color: g.colorString,
            height: 20
          }), c = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
              className: V.rowHeight,
              children: j
            }), (0, i.jsx)(d.Text, {
              variant: "text-sm/normal",
              className: V.rowLabel,
              color: g.disabled ? "text-muted" : "text-default",
              children: g.name
            })]
          }), S = g.disabled;
          break;
        case D.m$.MEMBERS:
          g = l[y], c = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(d.qEK, {
              src: g.avatarURL,
              size: d.EFr.SIZE_24,
              "aria-hidden": true
            }), (0, i.jsx)(d.Text, {
              className: V.rowLabel,
              variant: "text-sm/normal",
              children: g.name
            }), g.bot && (0, i.jsx)(p.Z, {
              verified: g.verifiedBot,
              className: V.rowBotTag
            }), null != g.nickname && (0, i.jsx)(d.Text, {
              color: "text-muted",
              className: V.rowLabelSubText,
              variant: "text-sm/normal",
              children: g.username
            })]
          }), S = g.disabled;
          break;
        default:
          g = null
      }
      if (null == g) return null;
      let Z = !S && null == r && null != g.id;
      return (0, i.jsxs)(x.Z, {
        justify: x.Z.Justify.BETWEEN,
        align: x.Z.Align.CENTER,
        className: V.memberRow,
        children: [(0, i.jsx)(x.Z, {
          justify: x.Z.Justify.START,
          align: x.Z.Align.CENTER,
          className: V.__invalid_memberRowBody,
          children: c
        }), (0, i.jsx)(d.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          children: M.zB(g.rowType)
        }), g.rowType !== D.aC.EMPTY_STATE && (0, i.jsx)(o.u, {
          asContainer: true,
          text: null != r ? r : s(g.rowType, g.disabled),
          children: (0, i.jsx)(d.P3F, {
            onClick: () => {
              var e, n, i;
              return Z && null != g && (e = g.id, n = g.name, i = g.rowType, void u.Z.show({
                title: U.intl.string(U.t.GuPYQB),
                body: U.intl.format(U.t.xERCnZ, {
                  name: n
                }),
                cancelText: U.intl.string(U.t["ETE/oC"]),
                onConfirm: () => (function(e, n) {
                  if (t.isGuildStageVoice()) {
                    let i = (0, C._L)(e, n === D.aC.ROLE ? f.BN.ROLE : f.BN.MEMBER, t);
                    (0, C.Os)(i) ? h.Z.clearPermissionOverwrite(t.id, i.id): (0, m.hw)(t.id, [i])
                  } else h.Z.clearPermissionOverwrite(t.id, e)
                })(e, i)
              }))
            },
            "aria-disabled": !Z,
            "aria-label": U.intl.string(U.t.N86XcP),
            children: (0, i.jsx)(d.k$p, {
              size: "md",
              color: "currentColor",
              className: a()(V.removeIcon, {
                [V.disabledRemoveIcon]: S || r
              })
            })
          })
        })]
      }, g.id)
    },
    rowHeight: 40,
    renderSection: function(e) {
      let {
        section: t
      } = e;
      switch (t) {
        case D.m$.ROLES:
          return (0, i.jsx)(Y, {
            title: U.intl.string(U.t["LPJmL/"])
          }, "roles-title");
        case D.m$.MEMBERS:
          return (0, i.jsx)(Y, {
            title: U.intl.string(U.t["9Oq93m"])
          }, "members-title")
      }
    },
    sectionHeight: 49
  })
}

function W(e) {
  let {
    guild: t,
    channel: l,
    permissionUpdates: r
  } = e, c = (0, s.e7)([E.Z], () => E.Z.getSortedRoles(t.id)), u = M.RZ(t, c, l, S.yP, r), h = (0, s.e7)([N.ZP], () => M.cR(N.ZP.getMemberIds(t.id), l, t, S.yP, r)), g = (0, C.nG)(l.id);
  return (0, i.jsxs)("div", {
    className: a()(V.settingCard, V.active),
    children: [(0, i.jsx)(A.Z, {
      label: U.intl.string(U.t.StpcFU),
      description: U.intl.string(U.t.f7VbhF),
      icon: (0, i.jsx)(d.ewx, {
        size: "custom",
        color: "currentColor",
        className: V.cardIcon,
        height: 20,
        width: 20
      }),
      id: "StageModeratorSettingCard"
    }), (0, i.jsxs)("div", {
      className: V.cardFolder,
      children: [(0, i.jsxs)(x.Z, {
        justify: x.Z.Justify.BETWEEN,
        align: x.Z.Align.CENTER,
        className: V.folderHeader,
        children: [(0, i.jsx)(d.Text, {
          variant: "text-md/semibold",
          children: U.intl.string(U.t["7BWDRb"])
        }), (0, i.jsx)(o.u, {
          text: U.intl.string(U.t.arRuES),
          shouldShow: !g,
          children: (0, i.jsx)(d.Button, {
            variant: "primary",
            size: "sm",
            text: U.intl.string(U.t.dMJ3Y6),
            onClick: function() {
              (0, d.ZDy)(async () => {
                let {
                  default: e
                } = await n.e("46786").then(n.bind(n, 388131));
                return t => (0, i.jsx)(e, H(G({}, t), {
                  channelId: l.id
                }))
              })
            },
            disabled: !g
          })
        })]
      }), (0, i.jsx)(F, {
        channel: l,
        roles: u,
        members: h,
        disabledReason: g ? null : U.intl.string(U.t.arRuES),
        getRemoveTooltipHint: O.kk
      })]
    })]
  })
}

function z(e) {
  let {
    guild: t,
    channel: l,
    isPrivateGuildChannel: r,
    roles: o,
    members: u
  } = e, h = (0, s.e7)([T.Z], () => T.Z.can(B.Pl.ADMINISTRATOR, t)), g = R.Uu(B.Pl.VIEW_CHANNEL, t), m = R.Uu(B.Pl.ADMINISTRATOR, t);
  async function f() {
    let e = l.accessPermissions,
      a = P.default.getCurrentUser();
    if (!r && null != await (0, v.T)(t.id, l.id)) return void(0, d.ZDy)(async () => {
      let {
        VoidConfirmModal: e
      } = await Promise.resolve().then(n.bind(n, 288022));
      return n => (0, i.jsx)(e, H(G({}, n), {
        confirmButtonColor: c.Tt.BRAND,
        header: U.intl.string(U.t.ZzdgUm),
        confirmText: U.intl.string(U.t.BddRzS),
        children: (0, i.jsx)(d.Text, {
          variant: "text-md/normal",
          children: U.intl.format(U.t.DwY2vN, {
            onClick: () => {
              y.Z.open(t.id, k.pNK.ONBOARDING), n.onClose()
            }
          })
        })
      }))
    });
    M.$e(l, e, r), r || null == a || h || M.Yh(l, e)
  }
  let p = {
    title: U.intl.string(U.t.aUI70g),
    subtitle: U.intl.string(U.t.hfbjIH),
    formLabel: U.intl.string(U.t.P6eCbP)
  };
  return l.isCategory() ? (p.title = U.intl.string(U.t.lEPAZ5), p.subtitle = U.intl.string(U.t.RQUk61), p.formLabel = U.intl.string(U.t["8VIxJu"])) : l.type === k.d4z.GUILD_VOICE && (p.subtitle = U.intl.string(U.t.cLjvKg)), (0, i.jsxs)("div", {
    className: a()(V.settingCard, {
      [V.active]: r
    }),
    children: [(0, i.jsx)(A.Z, {
      description: p.subtitle,
      icon: (0, i.jsx)(d.mBM, {
        size: "custom",
        color: "currentColor",
        className: V.cardIcon,
        height: 20,
        width: 20
      }),
      id: "PrivateChannelSettingCard",
      label: p.title,
      onChange: f,
      value: r
    }), (0, i.jsxs)("div", {
      className: V.cardFolder,
      children: [m && (0, i.jsx)("div", {
        className: V.adminWarning,
        children: (0, i.jsx)(d.Wn, {
          messageType: d.QYI.WARNING,
          children: U.intl.string(U.t["5f3HIC"])
        })
      }), !g && !m && !r && (0, i.jsx)("div", {
        className: V.adminWarning,
        children: (0, i.jsx)(d.Wn, {
          messageType: d.QYI.WARNING,
          children: U.intl.string(U.t.ZAk4Q9)
        })
      }), r && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(x.Z, {
          justify: x.Z.Justify.BETWEEN,
          align: x.Z.Align.CENTER,
          className: V.folderHeader,
          children: [(0, i.jsx)(d.Heading, {
            variant: "heading-sm/semibold",
            className: V.folderTitle,
            children: p.formLabel
          }), (0, i.jsx)(d.Button, {
            variant: "primary",
            size: "sm",
            text: U.intl.string(U.t.dMJ3Y6),
            onClick: function() {
              (0, d.ZDy)(async () => {
                let {
                  default: e
                } = await Promise.resolve().then(n.bind(n, 185413));
                return t => (0, i.jsx)(e, H(G({}, t), {
                  channelId: l.id,
                  inSettings: true
                }))
              })
            }
          })]
        }), (0, i.jsx)(F, {
          channel: l,
          roles: o,
          members: u,
          getRemoveTooltipHint: M.yv
        })]
      })]
    })]
  })
}

function Y(e) {
  let {
    title: t
  } = e;
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(d.izJ, {
      className: V.divider
    }), (0, i.jsx)(d.Heading, {
      variant: "heading-sm/semibold",
      className: a()(V.folderTitle, V.sectionTitle),
      children: t
    })]
  })
}
let q = Chunk442837.ZP.connectStores([Chunk277053.Z, Chunk496675.Z, Chunk271383.ZP, Chunk430824.Z, Chunk485386.Z], () => {
  let e, t = Z.Z.channel,
    n = Z.Z.category,
    i = [],
    l = [],
    r = {},
    a = false;
  if (null != t) {
    e = w.Z.getGuild(t.getGuildId());
    let n = N.ZP.getMemberIds(null == e ? true : e.id);
    if (null != e) {
      let s = E.Z.getSortedRoles(e.id);
      r = Z.Z.editedPermissionIds.reduce((e, t) => {
        let n = Z.Z.getPermissionOverwrite(t);
        return null != n && (e[t] = n), e
      }, {}), i = M.kA(e, s, t, t.accessPermissions, r), l = M.cR(n, t, e, t.accessPermissions, r), a = M.Yk(t, r)
    }
  }
  return {
    canSyncChannel: null != n && T.Z.can(B.Pl.MANAGE_ROLES, n),
    category: n,
    channel: t,
    filteredMembers: l,
    filteredRoles: i,
    guild: e,
    isPrivateGuildChannel: a,
    locked: Z.Z.locked,
    permissionUpdates: r
  }
})(function(e) {
  let {
    canSyncChannel: t,
    category: r,
    channel: a,
    filteredMembers: s,
    filteredRoles: o,
    guild: c,
    isPrivateGuildChannel: u,
    locked: h,
    permissionUpdates: m
  } = e, [f, p] = l.useState(!R.Uu(B.Pl.SEND_MESSAGES, a));
  if (null == a || null == c) return null;
  let b = {
    title: U.intl.string(U.t.BAZMBn),
    subtitle: U.intl.string(U.t.XLrZyp)
  };
  return a.isCategory() && (b.title = U.intl.string(U.t["/uELTj"]), b.subtitle = U.intl.string(U.t["8iAg3Q"])), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(d.Heading, {
      variant: "heading-lg/semibold",
      children: b.title
    }), (0, i.jsx)(d.Text, {
      variant: "text-sm/normal",
      children: b.subtitle
    }), null != r && t ? h ? (0, i.jsx)(_.Z, {
      canSync: false,
      icon: d.DuK,
      noticeText: U.intl.format(U.t.ETJqLl, {
        categoryName: r.name
      })
    }) : (0, i.jsx)(_.Z, {
      buttonText: U.intl.string(U.t.NVwuHq),
      canSync: true,
      icon: (0, d.GSL)(I.Z),
      noticeText: U.intl.format(U.t.OIhm0M, {
        categoryName: r.name
      }),
      onClick: function() {
        null != r && (0, d.ZDy)(async () => {
          let {
            default: e
          } = await Promise.resolve().then(n.bind(n, 901492));
          return t => (0, i.jsx)(e, H(G({}, t), {
            channel: a,
            category: r,
            onConfirm: async () => {
              let {
                guild_id: e
              } = r, t = G({}, r.permissionOverwrites);
              null != e && null == t[e] && (t[e] = R.we(e)), await (0, j.R)(a, t[e].deny, t[e].allow) && (0, g.wk)(a.id, {
                permissionOverwrites: Object.values(t)
              })
            }
          }))
        })
      }
    }) : null, a.isGuildStageVoice() ? (0, i.jsx)(W, {
      guild: c,
      channel: a,
      permissionUpdates: m
    }) : null, (0, i.jsx)(z, {
      channel: a,
      guild: c,
      isPrivateGuildChannel: u,
      roles: o,
      members: s
    }), false, (0, i.jsx)(L.Z, {})]
  })
})