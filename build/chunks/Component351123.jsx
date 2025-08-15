/** Chunk was on 86915 **/
/** chunk id: 351123, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => X
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
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
  Chunk27544 = require("./27544.jsx"),
  Chunk415236 = require("./415236.jsx"),
  Chunk182905 = require("./182905.jsx"),
  Chunk71080 = require("./71080.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk411851 = require("./411851.js");

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

function W(e) {
  let {
    channel: t,
    roles: n,
    members: l,
    disabledReason: r,
    getRemoveTooltipHint: a
  } = e;
  return (0, i.jsx)(c.aVo, {
    className: V.roleMemberList,
    sections: [n.length, l.length],
    renderRow: function(e) {
      let o, h, j, {
          section: b,
          row: v
        } = e,
        C = false;
      switch (b) {
        case D.m$.ROLES:
          var N;
          j = (h = n[v]).rowType === D.aC.ROLE && (null == (N = h.tags) ? true : N.guild_connections) === null ? (0, i.jsx)(f.Z, {
            className: V.shield,
            color: h.colorString,
            size: 20
          }) : (0, i.jsx)(c.lZ8, {
            size: "custom",
            className: V.shield,
            color: h.colorString,
            height: 20
          }), o = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
              className: V.rowHeight,
              children: j
            }), (0, i.jsx)(c.Text, {
              variant: "text-sm/normal",
              className: V.rowLabel,
              color: h.disabled ? "text-muted" : "text-default",
              children: h.name
            })]
          }), C = h.disabled;
          break;
        case D.m$.MEMBERS:
          h = l[v], o = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(c.qEK, {
              src: h.avatarURL,
              size: c.EFr.SIZE_24,
              "aria-hidden": true
            }), (0, i.jsx)(c.Text, {
              className: V.rowLabel,
              variant: "text-sm/normal",
              children: h.name
            }), h.bot && (0, i.jsx)(p.Z, {
              verified: h.verifiedBot,
              className: V.rowBotTag
            }), null != h.nickname && (0, i.jsx)(c.Text, {
              color: "text-muted",
              className: V.rowLabelSubText,
              variant: "text-sm/normal",
              children: h.username
            })]
          }), C = h.disabled;
          break;
        default:
          h = null
      }
      if (null == h) return null;
      let S = !C && null == r && null != h.id;
      return (0, i.jsxs)(x.Z, {
        justify: x.Z.Justify.BETWEEN,
        align: x.Z.Align.CENTER,
        className: V.memberRow,
        children: [(0, i.jsx)(x.Z, {
          justify: x.Z.Justify.START,
          align: x.Z.Align.CENTER,
          className: V.__invalid_memberRowBody,
          children: o
        }), (0, i.jsx)(c.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          children: _.zB(h.rowType)
        }), h.rowType !== D.aC.EMPTY_STATE && (0, i.jsx)(c.DY3, {
          className: V.removeIconContainer,
          text: null != r ? r : a(h.rowType, h.disabled),
          children: (0, i.jsx)(c.P3F, {
            onClick: () => {
              var e, n, i;
              return S && null != h && (e = h.id, n = h.name, i = h.rowType, void d.Z.show({
                title: B.intl.string(B.t.GuPYQE),
                body: B.intl.format(B.t.xERCnZ, {
                  name: n
                }),
                cancelText: B.intl.string(B.t["ETE/oK"]),
                onConfirm: () => (function(e, n) {
                  if (t.isGuildStageVoice()) {
                    let i = (0, y._L)(e, n === D.aC.ROLE ? m.BN.ROLE : m.BN.MEMBER, t);
                    (0, y.Os)(i) ? u.Z.clearPermissionOverwrite(t.id, i.id): (0, g.hw)(t.id, [i])
                  } else u.Z.clearPermissionOverwrite(t.id, e)
                })(e, i)
              }))
            },
            "aria-disabled": !S,
            "aria-label": B.intl.string(B.t.N86XcH),
            children: (0, i.jsx)(c.k$p, {
              size: "md",
              color: "currentColor",
              className: s()(V.removeIcon, {
                [V.disabledRemoveIcon]: C || r
              })
            })
          })
        })]
      }, h.id)
    },
    rowHeight: 40,
    renderSection: function(e) {
      let {
        section: t
      } = e;
      switch (t) {
        case D.m$.ROLES:
          return (0, i.jsx)(z, {
            title: B.intl.string(B.t.LPJmLy)
          }, "roles-title");
        case D.m$.MEMBERS:
          return (0, i.jsx)(z, {
            title: B.intl.string(B.t["9Oq93t"])
          }, "members-title")
      }
    },
    sectionHeight: 49
  })
}

function G(e) {
  let {
    guild: t,
    channel: l,
    permissionUpdates: r
  } = e, o = (0, a.e7)([E.Z], () => E.Z.getSortedRoles(t.id)), d = _.RZ(t, o, l, C.yP, r), u = (0, a.e7)([O.ZP], () => _.cR(O.ZP.getMemberIds(t.id), l, t, C.yP, r)), h = (0, y.nG)(l.id);

  function g() {
    (0, c.ZDy)(async () => {
      let {
        default: e
      } = await n.e("46786").then(n.bind(n, 388131));
      return t => (0, i.jsx)(e, H(U({}, t), {
        channelId: l.id
      }))
    })
  }
  return (0, i.jsxs)("div", {
    className: s()(V.settingCard, V.active),
    children: [(0, i.jsx)(A.Z, {
      label: B.intl.string(B.t.StpcFR),
      description: B.intl.string(B.t.f7VbhI),
      icon: (0, i.jsx)(c.ewx, {
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
        children: [(0, i.jsx)(c.vwX, {
          tag: "h5",
          className: V.folderTitle,
          children: B.intl.string(B.t["7BWDRU"])
        }), (0, i.jsx)(c.ua7, {
          text: B.intl.string(B.t.arRuER),
          shouldShow: !h,
          children: e => (0, i.jsx)(c.zxk, H(U({
            variant: "primary",
            size: "sm",
            text: B.intl.string(B.t.dMJ3Y2)
          }, e), {
            onClick: g,
            disabled: !h
          }))
        })]
      }), (0, i.jsx)(W, {
        channel: l,
        roles: d,
        members: u,
        disabledReason: h ? null : B.intl.string(B.t.arRuER),
        getRemoveTooltipHint: N.kk
      })]
    })]
  })
}

function F(e) {
  let {
    guild: t,
    channel: l,
    isPrivateGuildChannel: r,
    roles: d,
    members: u
  } = e, h = (0, a.e7)([T.Z], () => T.Z.can(k.Pl.ADMINISTRATOR, t)), g = I.Uu(k.Pl.VIEW_CHANNEL, t), m = I.Uu(k.Pl.ADMINISTRATOR, t);
  async function p() {
    let e = l.accessPermissions,
      s = Z.default.getCurrentUser();
    if (!r && null != await (0, b.T)(t.id, l.id)) return void(0, c.ZDy)(async () => {
      let {
        ConfirmModal: e
      } = await Promise.resolve().then(n.bind(n, 878678));
      return n => (0, i.jsx)(e, H(U({}, n), {
        confirmButtonColor: o.Tt.BRAND,
        header: B.intl.string(B.t.ZzdgUl),
        confirmText: B.intl.string(B.t.BddRzc),
        children: (0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          children: B.intl.format(B.t.DwY2vL, {
            onClick: () => {
              v.Z.open(t.id, M.pNK.ONBOARDING), n.onClose()
            }
          })
        })
      }))
    });
    _.$e(l, e, r), r || null == s || h || _.Yh(l, e)
  }
  let f = {
    title: B.intl.string(B.t.aUI70t),
    subtitle: B.intl.string(B.t.hfbjIC),
    formLabel: B.intl.string(B.t.P6eCbG)
  };
  return l.isCategory() ? (f.title = B.intl.string(B.t.lEPAZ2), f.subtitle = B.intl.string(B.t["RQUk6+"]), f.formLabel = B.intl.string(B.t["8VIxJi"])) : l.type === M.d4z.GUILD_VOICE && (f.subtitle = B.intl.string(B.t.cLjvKi)), (0, i.jsxs)("div", {
    className: s()(V.settingCard, {
      [V.active]: r
    }),
    children: [(0, i.jsx)(A.Z, {
      description: f.subtitle,
      icon: (0, i.jsx)(c.mBM, {
        size: "custom",
        color: "currentColor",
        className: V.cardIcon,
        height: 20,
        width: 20
      }),
      id: "PrivateChannelSettingCard",
      label: f.title,
      onChange: p,
      value: r
    }), (0, i.jsxs)("div", {
      className: V.cardFolder,
      children: [m && (0, i.jsx)("div", {
        className: V.adminWarning,
        children: (0, i.jsx)(c.Wn, {
          messageType: c.QYI.WARNING,
          children: B.intl.string(B.t["5f3HIC"])
        })
      }), !g && !m && !r && (0, i.jsx)("div", {
        className: V.adminWarning,
        children: (0, i.jsx)(c.Wn, {
          messageType: c.QYI.WARNING,
          children: B.intl.string(B.t.ZAk4Q0)
        })
      }), r && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(x.Z, {
          justify: x.Z.Justify.BETWEEN,
          align: x.Z.Align.CENTER,
          className: V.folderHeader,
          children: [(0, i.jsx)(c.vwX, {
            tag: "h5",
            className: V.folderTitle,
            children: f.formLabel
          }), (0, i.jsx)(c.zxk, {
            variant: "primary",
            size: "sm",
            text: B.intl.string(B.t.dMJ3Y2),
            onClick: function() {
              (0, c.ZDy)(async () => {
                let {
                  default: e
                } = await Promise.resolve().then(n.bind(n, 185413));
                return t => (0, i.jsx)(e, H(U({}, t), {
                  channelId: l.id,
                  inSettings: true
                }))
              })
            }
          })]
        }), (0, i.jsx)(W, {
          channel: l,
          roles: d,
          members: u,
          getRemoveTooltipHint: _.yv
        })]
      })]
    })]
  })
}

function z(e) {
  let {
    title: t
  } = e;
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(c.$i$, {
      className: V.divider
    }), (0, i.jsx)(c.vwX, {
      className: s()(V.folderTitle, V.sectionTitle),
      tag: "h5",
      children: t
    })]
  })
}
let X = Chunk442837.ZP.connectStores([Chunk277053.Z, Chunk496675.Z, Chunk271383.ZP, Chunk430824.Z, Chunk485386.Z], () => {
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
        let n = S.Z.getPermissionOverwrite(t);
        return null != n && (e[t] = n), e
      }, {}), i = Chunk605436.kA(module, Chunk442837, exports, exports.accessPermissions, Chunk120356), l = Chunk605436.cR(require, exports, module, exports.accessPermissions, Chunk120356), s = Chunk605436.Yk(exports, Chunk120356)
    }
  }
  return {
    canSyncChannel: null != require && Chunk496675.Z.can(Chunk231338.Pl.MANAGE_ROLES, require),
    category: require,
    channel: exports,
    filteredMembers: Chunk73800,
    filteredRoles: Chunk255367,
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
    guild: d,
    isPrivateGuildChannel: u,
    locked: g,
    permissionUpdates: m
  } = e, [p, f] = l.useState(!I.Uu(k.Pl.SEND_MESSAGES, s));
  if (null == s || null == d) return null;
  let x = {
    title: B.intl.string(B.t.BAZMBg),
    subtitle: B.intl.string(B.t.XLrZys)
  };
  return s.isCategory() && (x.title = B.intl.string(B.t["/uELTk"]), x.subtitle = B.intl.string(B.t["8iAg3d"])), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(c.vwX, {
      tag: "h1",
      children: x.title
    }), (0, i.jsx)(c.R94, {
      children: x.subtitle
    }), null != r && t ? g ? (0, i.jsx)(L.Z, {
      canSync: false,
      icon: c.DuK,
      noticeText: B.intl.format(B.t.ETJqLi, {
        categoryName: r.name
      })
    }) : (0, i.jsx)(L.Z, {
      buttonText: B.intl.string(B.t.NVwuHh),
      canSync: true,
      icon: (0, c.GSL)(R.Z),
      noticeText: B.intl.format(B.t.OIhm0N, {
        categoryName: r.name
      }),
      onClick: function() {
        null != r && (0, c.ZDy)(async () => {
          let {
            default: e
          } = await Promise.resolve().then(n.bind(n, 170509));
          return t => (0, i.jsx)(e, H(U({}, t), {
            channel: s,
            category: r,
            onConfirm: async () => {
              let {
                guild_id: e
              } = r, t = U({}, r.permissionOverwrites);
              null != e && null == t[e] && (t[e] = I.we(e)), await (0, j.u)(s, t[e].deny, t[e].allow) && (0, h.wk)(s.id, {
                permissionOverwrites: Object.values(t)
              })
            }
          }))
        })
      }
    }) : null, s.isGuildStageVoice() ? (0, i.jsx)(G, {
      guild: d,
      channel: s,
      permissionUpdates: m
    }) : null, (0, i.jsx)(F, {
      channel: s,
      guild: d,
      isPrivateGuildChannel: u,
      roles: o,
      members: a
    }), false, (0, i.jsx)(P.Z, {})]
  })
})