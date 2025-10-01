/** Chunk was on 86915 **/
/** chunk id: 351123, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => J
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk611457 = require("./611457.js");

function U(e) {
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

function W(e) {
  let {
    channel: t,
    roles: n,
    members: l,
    disabledReason: r,
    getRemoveTooltipHint: a
  } = e;
  return (0, i.jsx)(d.aVo, {
    className: H.roleMemberList,
    sections: [n.length, l.length],
    renderRow: function(e) {
      let c, g, j, {
          section: v,
          row: y
        } = e,
        N = false;
      switch (v) {
        case D.m$.ROLES:
          var S;
          j = (g = n[y]).rowType === D.aC.ROLE && (null == (S = g.tags) ? true : S.guild_connections) === null ? (0, i.jsx)(b.Z, {
            className: H.shield,
            color: g.colorString,
            size: 20
          }) : (0, i.jsx)(d.lZ8, {
            size: "custom",
            className: H.shield,
            color: g.colorString,
            height: 20
          }), c = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
              className: H.rowHeight,
              children: j
            }), (0, i.jsx)(d.Text, {
              variant: "text-sm/normal",
              className: H.rowLabel,
              color: g.disabled ? "text-muted" : "text-default",
              children: g.name
            })]
          }), N = g.disabled;
          break;
        case D.m$.MEMBERS:
          g = l[y], c = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(d.qEK, {
              src: g.avatarURL,
              size: d.EFr.SIZE_24,
              "aria-hidden": true
            }), (0, i.jsx)(d.Text, {
              className: H.rowLabel,
              variant: "text-sm/normal",
              children: g.name
            }), g.bot && (0, i.jsx)(f.Z, {
              verified: g.verifiedBot,
              className: H.rowBotTag
            }), null != g.nickname && (0, i.jsx)(d.Text, {
              color: "text-muted",
              className: H.rowLabelSubText,
              variant: "text-sm/normal",
              children: g.username
            })]
          }), N = g.disabled;
          break;
        default:
          g = null
      }
      if (null == g) return null;
      let E = !N && null == r && null != g.id;
      return (0, i.jsxs)(x.Z, {
        justify: x.Z.Justify.BETWEEN,
        align: x.Z.Align.CENTER,
        className: H.memberRow,
        children: [(0, i.jsx)(x.Z, {
          justify: x.Z.Justify.START,
          align: x.Z.Align.CENTER,
          className: H.__invalid_memberRowBody,
          children: c
        }), (0, i.jsx)(d.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          children: P.zB(g.rowType)
        }), g.rowType !== D.aC.EMPTY_STATE && (0, i.jsx)(o.u, {
          asContainer: true,
          text: null != r ? r : a(g.rowType, g.disabled),
          children: (0, i.jsx)(d.P3F, {
            onClick: () => {
              var e, n, i;
              return E && null != g && (e = g.id, n = g.name, i = g.rowType, void u.Z.show({
                title: V.intl.string(V.t.GuPYQE),
                body: V.intl.format(V.t.xERCnZ, {
                  name: n
                }),
                cancelText: V.intl.string(V.t["ETE/oK"]),
                onConfirm: () => (function(e, n) {
                  if (t.isGuildStageVoice()) {
                    let i = (0, C._L)(e, n === D.aC.ROLE ? m.BN.ROLE : m.BN.MEMBER, t);
                    (0, C.Os)(i) ? h.Z.clearPermissionOverwrite(t.id, i.id): (0, p.hw)(t.id, [i])
                  } else h.Z.clearPermissionOverwrite(t.id, e)
                })(e, i)
              }))
            },
            "aria-disabled": !E,
            "aria-label": V.intl.string(V.t.N86XcH),
            children: (0, i.jsx)(d.k$p, {
              size: "md",
              color: "currentColor",
              className: s()(H.removeIcon, {
                [H.disabledRemoveIcon]: N || r
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
          return (0, i.jsx)(X, {
            title: V.intl.string(V.t.LPJmLy)
          }, "roles-title");
        case D.m$.MEMBERS:
          return (0, i.jsx)(X, {
            title: V.intl.string(V.t["9Oq93t"])
          }, "members-title")
      }
    },
    sectionHeight: 49
  })
}

function z(e) {
  let {
    guild: t,
    channel: l,
    permissionUpdates: r
  } = e, o = (0, a.e7)([Z.Z], () => Z.Z.getSortedRoles(t.id)), c = P.RZ(t, o, l, N.yP, r), u = (0, a.e7)([O.ZP], () => P.cR(O.ZP.getMemberIds(t.id), l, t, N.yP, r)), h = (0, C.nG)(l.id);

  function g() {
    (0, d.ZDy)(async () => {
      let {
        default: e
      } = await n.e("46786").then(n.bind(n, 388131));
      return t => (0, i.jsx)(e, G(U({}, t), {
        channelId: l.id
      }))
    })
  }
  return (0, i.jsxs)("div", {
    className: s()(H.settingCard, H.active),
    children: [(0, i.jsx)(L.Z, {
      label: V.intl.string(V.t.StpcFR),
      description: V.intl.string(V.t.f7VbhI),
      icon: (0, i.jsx)(d.ewx, {
        size: "custom",
        color: "currentColor",
        className: H.cardIcon,
        height: 20,
        width: 20
      }),
      id: "StageModeratorSettingCard"
    }), (0, i.jsxs)("div", {
      className: H.cardFolder,
      children: [(0, i.jsxs)(x.Z, {
        justify: x.Z.Justify.BETWEEN,
        align: x.Z.Align.CENTER,
        className: H.folderHeader,
        children: [(0, i.jsx)(d.vwX, {
          tag: "h5",
          className: H.folderTitle,
          children: V.intl.string(V.t["7BWDRU"])
        }), (0, i.jsx)(d.ua7, {
          text: V.intl.string(V.t.arRuER),
          shouldShow: !h,
          children: e => (0, i.jsx)(d.zxk, G(U({
            variant: "primary",
            size: "sm",
            text: V.intl.string(V.t.dMJ3Y2)
          }, e), {
            onClick: g,
            disabled: !h
          }))
        })]
      }), (0, i.jsx)(W, {
        channel: l,
        roles: c,
        members: u,
        disabledReason: h ? null : V.intl.string(V.t.arRuER),
        getRemoveTooltipHint: S.kk
      })]
    })]
  })
}

function F(e) {
  let {
    guild: t,
    channel: l,
    isPrivateGuildChannel: r,
    roles: o,
    members: u
  } = e, h = (0, a.e7)([T.Z], () => T.Z.can(B.Pl.ADMINISTRATOR, t)), g = I.Uu(B.Pl.VIEW_CHANNEL, t), p = I.Uu(B.Pl.ADMINISTRATOR, t);
  async function m() {
    let e = l.accessPermissions,
      s = R.default.getCurrentUser();
    if (!r && null != await (0, v.T)(t.id, l.id)) return void(0, d.ZDy)(async () => {
      let {
        ConfirmModal: e
      } = await Promise.resolve().then(n.bind(n, 878678));
      return n => (0, i.jsx)(e, G(U({}, n), {
        confirmButtonColor: c.Tt.BRAND,
        header: V.intl.string(V.t.ZzdgUl),
        confirmText: V.intl.string(V.t.BddRzc),
        children: (0, i.jsx)(d.Text, {
          variant: "text-md/normal",
          children: V.intl.format(V.t.DwY2vL, {
            onClick: () => {
              y.Z.open(t.id, k.pNK.ONBOARDING), n.onClose()
            }
          })
        })
      }))
    });
    P.$e(l, e, r), r || null == s || h || P.Yh(l, e)
  }
  let f = {
    title: V.intl.string(V.t.aUI70t),
    subtitle: V.intl.string(V.t.hfbjIC),
    formLabel: V.intl.string(V.t.P6eCbG)
  };
  return l.isCategory() ? (f.title = V.intl.string(V.t.lEPAZ2), f.subtitle = V.intl.string(V.t["RQUk6+"]), f.formLabel = V.intl.string(V.t["8VIxJi"])) : l.type === k.d4z.GUILD_VOICE && (f.subtitle = V.intl.string(V.t.cLjvKi)), (0, i.jsxs)("div", {
    className: s()(H.settingCard, {
      [H.active]: r
    }),
    children: [(0, i.jsx)(L.Z, {
      description: f.subtitle,
      icon: (0, i.jsx)(d.mBM, {
        size: "custom",
        color: "currentColor",
        className: H.cardIcon,
        height: 20,
        width: 20
      }),
      id: "PrivateChannelSettingCard",
      label: f.title,
      onChange: m,
      value: r
    }), (0, i.jsxs)("div", {
      className: H.cardFolder,
      children: [p && (0, i.jsx)("div", {
        className: H.adminWarning,
        children: (0, i.jsx)(d.Wn, {
          messageType: d.QYI.WARNING,
          children: V.intl.string(V.t["5f3HIC"])
        })
      }), !g && !p && !r && (0, i.jsx)("div", {
        className: H.adminWarning,
        children: (0, i.jsx)(d.Wn, {
          messageType: d.QYI.WARNING,
          children: V.intl.string(V.t.ZAk4Q0)
        })
      }), r && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(x.Z, {
          justify: x.Z.Justify.BETWEEN,
          align: x.Z.Align.CENTER,
          className: H.folderHeader,
          children: [(0, i.jsx)(d.vwX, {
            tag: "h5",
            className: H.folderTitle,
            children: f.formLabel
          }), (0, i.jsx)(d.zxk, {
            variant: "primary",
            size: "sm",
            text: V.intl.string(V.t.dMJ3Y2),
            onClick: function() {
              (0, d.ZDy)(async () => {
                let {
                  default: e
                } = await Promise.resolve().then(n.bind(n, 185413));
                return t => (0, i.jsx)(e, G(U({}, t), {
                  channelId: l.id,
                  inSettings: true
                }))
              })
            }
          })]
        }), (0, i.jsx)(W, {
          channel: l,
          roles: o,
          members: u,
          getRemoveTooltipHint: P.yv
        })]
      })]
    })]
  })
}

function X(e) {
  let {
    title: t
  } = e;
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(d.izJ, {
      className: H.divider
    }), (0, i.jsx)(d.vwX, {
      className: s()(H.folderTitle, H.sectionTitle),
      tag: "h5",
      children: t
    })]
  })
}
let J = Chunk442837.ZP.connectStores([Chunk277053.Z, Chunk496675.Z, Chunk271383.ZP, Chunk430824.Z, Chunk485386.Z], () => {
  let e, t = Chunk277053.Z.channel,
    n = Chunk277053.Z.category,
    i = [],
    l = [],
    r = {},
    s = false;
  if (null != exports) {
    e = Chunk430824.Z.getGuild(exports.getGuildId());
    let n = Chunk271383.ZP.getMemberIds(null == module ? true : module.id);
    if (null != module) {
      let a = Chunk485386.Z.getSortedRoles(module.id);
      r = Chunk277053.Z.editedPermissionIds.reduce((e, t) => {
        let n = E.Z.getPermissionOverwrite(t);
        return null != n && (e[t] = n), e
      }, {}), i = Chunk605436.kA(module, Chunk442837, exports, exports.accessPermissions, Chunk120356), l = Chunk605436.cR(require, exports, module, exports.accessPermissions, Chunk120356), s = Chunk605436.Yk(exports, Chunk120356)
    }
  }
  return {
    canSyncChannel: null != require && Chunk496675.Z.can(Chunk231338.Pl.MANAGE_ROLES, require),
    category: require,
    channel: exports,
    filteredMembers: Chunk647438,
    filteredRoles: Chunk951288,
    guild: module,
    isPrivateGuildChannel: s,
    locked: Chunk277053.Z.locked,
    permissionUpdates: Chunk120356
  }
})(function(e) {
  let {
    canSyncChannel: t,
    category: r,
    channel: s,
    filteredMembers: a,
    filteredRoles: o,
    guild: c,
    isPrivateGuildChannel: u,
    locked: h,
    permissionUpdates: p
  } = e, [m, f] = l.useState(!I.Uu(B.Pl.SEND_MESSAGES, s));
  if (null == s || null == c) return null;
  let b = {
    title: V.intl.string(V.t.BAZMBg),
    subtitle: V.intl.string(V.t.XLrZys)
  };
  return s.isCategory() && (b.title = V.intl.string(V.t["/uELTk"]), b.subtitle = V.intl.string(V.t["8iAg3d"])), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(d.vwX, {
      tag: "h1",
      children: b.title
    }), (0, i.jsx)(d.R94, {
      children: b.subtitle
    }), null != r && t ? h ? (0, i.jsx)(M.Z, {
      canSync: false,
      icon: d.DuK,
      noticeText: V.intl.format(V.t.ETJqLi, {
        categoryName: r.name
      })
    }) : (0, i.jsx)(M.Z, {
      buttonText: V.intl.string(V.t.NVwuHh),
      canSync: true,
      icon: (0, d.GSL)(_.Z),
      noticeText: V.intl.format(V.t.OIhm0N, {
        categoryName: r.name
      }),
      onClick: function() {
        null != r && (0, d.ZDy)(async () => {
          let {
            default: e
          } = await Promise.resolve().then(n.bind(n, 170509));
          return t => (0, i.jsx)(e, G(U({}, t), {
            channel: s,
            category: r,
            onConfirm: async () => {
              let {
                guild_id: e
              } = r, t = U({}, r.permissionOverwrites);
              null != e && null == t[e] && (t[e] = I.we(e)), await (0, j.u)(s, t[e].deny, t[e].allow) && (0, g.wk)(s.id, {
                permissionOverwrites: Object.values(t)
              })
            }
          }))
        })
      }
    }) : null, s.isGuildStageVoice() ? (0, i.jsx)(z, {
      guild: c,
      channel: s,
      permissionUpdates: p
    }) : null, (0, i.jsx)(F, {
      channel: s,
      guild: c,
      isPrivateGuildChannel: u,
      roles: o,
      members: a
    }), false, (0, i.jsx)(A.Z, {})]
  })
})