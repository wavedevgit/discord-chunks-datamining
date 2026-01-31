/** Chunk was on 78888 **/
/** chunk id: 414618, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => J
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
  Chunk308528 = require("./308528.js"),
  Chunk435183 = require("./435183.js"),
  Chunk702805 = require("./702805.js"),
  Chunk155718 = require("./155718.js"),
  Chunk709066 = require("./709066.jsx"),
  Chunk63104 = require("./63104.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk60868 = require("./60868.js"),
  Chunk894328 = require("./894328.js"),
  Chunk997509 = require("./997509.js"),
  Chunk776781 = require("./776781.js"),
  Chunk233993 = require("./233993.js"),
  Chunk110618 = require("./110618.js"),
  Chunk176360 = require("./176360.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk396465 = require("./396465.jsx"),
  Chunk488926 = require("./488926.js"),
  Chunk495273 = require("./495273.js"),
  Chunk270486 = require("./270486.jsx"),
  Chunk80686 = require("./80686.jsx"),
  Chunk908494 = require("./908494.jsx"),
  Chunk737045 = require("./737045.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk807484 = require("./807484.js");

function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function H(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
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
    members: i,
    disabledReason: r,
    getRemoveTooltipHint: a
  } = e;
  return (0, l.jsx)(c.B8B, {
    className: U.xz,
    sections: [n.length, i.length],
    renderRow: function(e) {
      let h, x, j, {
          section: A,
          row: v
        } = e,
        O = false;
      switch (A) {
        case D.oO.ROLES:
          var C;
          j = (x = n[v]).rowType === D.T6.ROLE && (null == (C = x.tags) ? true : C.guild_connections) === null ? (0, l.jsx)(f.A, {
            className: U.a,
            color: x.colorString,
            size: 20
          }) : (0, l.jsx)(c.iTF, {
            size: "custom",
            className: U.a,
            color: x.colorString,
            height: 20
          }), h = (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("div", {
              className: U.iw,
              children: j
            }), (0, l.jsx)(c.Text, {
              variant: "text-sm/normal",
              className: U.xZ,
              color: x.disabled ? "text-muted" : "text-default",
              children: x.name
            })]
          }), O = x.disabled;
          break;
        case D.oO.MEMBERS:
          x = i[v], h = (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(c.euF, {
              src: x.avatarURL,
              size: c._3J.SIZE_24,
              "aria-hidden": true
            }), (0, l.jsx)(c.Text, {
              className: U.xZ,
              variant: "text-sm/normal",
              children: x.name
            }), x.bot && (0, l.jsx)(p.A, {
              verified: x.verifiedBot,
              className: U.oN
            }), null != x.nickname && (0, l.jsx)(c.Text, {
              color: "text-muted",
              className: U.Gq,
              variant: "text-sm/normal",
              children: x.username
            })]
          }), O = x.disabled;
          break;
        default:
          x = null
      }
      if (null == x) return null;
      let N = !O && null == r && null != x.id;
      return (0, l.jsxs)(b.A, {
        justify: b.A.Justify.BETWEEN,
        align: b.A.Align.CENTER,
        className: U.TL,
        children: [(0, l.jsx)(b.A, {
          justify: b.A.Justify.START,
          align: b.A.Align.CENTER,
          className: U.__invalid_memberRowBody,
          children: h
        }), (0, l.jsx)(c.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          children: R.vV(x.rowType)
        }), x.rowType !== D.T6.EMPTY_STATE && (0, l.jsx)(o.m, {
          asContainer: true,
          text: null != r ? r : a(x.rowType, x.disabled),
          children: (0, l.jsx)(c.DUT, {
            onClick: () => {
              var e, n, l;
              return N && null != x && (e = x.id, n = x.name, l = x.rowType, void u.A.show({
                title: B.intl.string(B.t.GuPYQB),
                body: B.intl.format(B.t.xERCnZ, {
                  name: n
                }),
                cancelText: B.intl.string(B.t["ETE/oC"]),
                onConfirm: () => (function(e, n) {
                  if (t.isGuildStageVoice()) {
                    let l = (0, y.$b)(e, n === D.T6.ROLE ? m.r2.ROLE : m.r2.MEMBER, t);
                    (0, y.pF)(l) ? d.A.clearPermissionOverwrite(t.id, l.id): (0, g.R$)(t.id, [l])
                  } else d.A.clearPermissionOverwrite(t.id, e)
                })(e, l)
              }))
            },
            "aria-disabled": !N,
            "aria-label": B.intl.string(B.t.N86XcP),
            children: (0, l.jsx)(c.aXh, {
              size: "md",
              color: "currentColor",
              className: s()(U.Yz, {
                [U._2]: O || r
              })
            })
          })
        })]
      }, x.id)
    },
    rowHeight: 40,
    renderSection: function(e) {
      let {
        section: t
      } = e;
      switch (t) {
        case D.oO.ROLES:
          return (0, l.jsx)(Y, {
            title: B.intl.string(B.t["LPJmL/"])
          }, "roles-title");
        case D.oO.MEMBERS:
          return (0, l.jsx)(Y, {
            title: B.intl.string(B.t["9Oq93m"])
          }, "members-title")
      }
    },
    sectionHeight: 49
  })
}

function W(e) {
  let {
    guild: t,
    channel: i,
    permissionUpdates: r
  } = e, u = (0, a.bG)([S.A], () => S.A.getSortedRoles(t.id)), d = R.C$(t, u, i, v.QY, r), h = (0, a.bG)([N.Ay], () => R.Wi(N.Ay.getMemberIds(t.id), i, t, v.QY, r)), g = (0, y.qd)(i.id);
  return (0, l.jsxs)("div", {
    className: s()(U.j1, U.vu),
    children: [(0, l.jsx)(L.A, {
      label: B.intl.string(B.t.StpcFU),
      description: B.intl.string(B.t.f7VbhF),
      icon: (0, l.jsx)(c.qux, {
        size: "custom",
        color: "currentColor",
        className: U.Ie,
        height: 20,
        width: 20
      }),
      id: "StageModeratorSettingCard"
    }), (0, l.jsxs)("div", {
      className: U.X4,
      children: [(0, l.jsxs)(b.A, {
        justify: b.A.Justify.BETWEEN,
        align: b.A.Align.CENTER,
        className: U.MJ,
        children: [(0, l.jsx)(c.Text, {
          variant: "text-md/semibold",
          children: B.intl.string(B.t["7BWDRb"])
        }), (0, l.jsx)(o.m, {
          text: B.intl.string(B.t.arRuES),
          shouldShow: !g,
          children: (0, l.jsx)(c.Button, {
            variant: "primary",
            size: "sm",
            text: B.intl.string(B.t.dMJ3Y6),
            onClick: function() {
              (0, c.mMO)(async () => {
                let {
                  default: e
                } = await n.e("58608").then(n.bind(n, 841811));
                return t => (0, l.jsx)(e, H(V({}, t), {
                  channelId: i.id
                }))
              })
            },
            disabled: !g
          })
        })]
      }), (0, l.jsx)(F, {
        channel: i,
        roles: d,
        members: h,
        disabledReason: g ? null : B.intl.string(B.t.arRuES),
        getRemoveTooltipHint: O.Mt
      })]
    })]
  })
}

function Z(e) {
  let {
    guild: t,
    channel: i,
    isPrivateGuildChannel: r,
    roles: o,
    members: u
  } = e, d = (0, a.bG)([_.A], () => _.A.can(G.xB.ADMINISTRATOR, t)), h = M.MJ(G.xB.VIEW_CHANNEL, t), g = M.MJ(G.xB.ADMINISTRATOR, t);
  async function m() {
    let e = i.accessPermissions,
      s = T.default.getCurrentUser();
    r || null == await (0, j.D)(t.id, i.id) ? (R.uB(i, e, r), r || null == s || d || R.tP(i, e)) : (0, c.mMO)(async () => {
      let {
        Modal: e
      } = await Promise.resolve().then(n.bind(n, 158954));
      return n => (0, l.jsx)(e, H(V({}, n), {
        title: B.intl.string(B.t.ZzdgUm),
        subtitle: B.intl.format(B.t.DwY2vN, {
          onClick: () => {
            A.A.open(t.id, k.BEX.ONBOARDING), n.onClose()
          }
        }),
        actions: [{
          text: B.intl.string(B.t.BddRzS),
          onClick: n.onClose
        }]
      }))
    })
  }
  let p = {
    title: B.intl.string(B.t.aUI70g),
    subtitle: B.intl.string(B.t.hfbjIH),
    formLabel: B.intl.string(B.t.P6eCbP)
  };
  return i.isCategory() ? (p.title = B.intl.string(B.t.lEPAZ5), p.subtitle = B.intl.string(B.t.RQUk61), p.formLabel = B.intl.string(B.t["8VIxJu"])) : i.type === k.rbe.GUILD_VOICE && (p.subtitle = B.intl.string(B.t.cLjvKg)), (0, l.jsxs)("div", {
    className: s()(U.j1, {
      [U.vu]: r
    }),
    children: [(0, l.jsx)(L.A, {
      description: p.subtitle,
      icon: (0, l.jsx)(c.XAi, {
        size: "custom",
        color: "currentColor",
        className: U.Ie,
        height: 20,
        width: 20
      }),
      id: "PrivateChannelSettingCard",
      label: p.title,
      onChange: m,
      value: r
    }), (0, l.jsxs)("div", {
      className: U.X4,
      children: [g && (0, l.jsx)("div", {
        className: U.Ux,
        children: (0, l.jsx)(c.po8, {
          messageType: c.YCn.WARNING,
          children: B.intl.string(B.t["5f3HIC"])
        })
      }), !h && !g && !r && (0, l.jsx)("div", {
        className: U.Ux,
        children: (0, l.jsx)(c.po8, {
          messageType: c.YCn.WARNING,
          children: B.intl.string(B.t.ZAk4Q9)
        })
      }), r && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)(b.A, {
          justify: b.A.Justify.BETWEEN,
          align: b.A.Align.CENTER,
          className: U.MJ,
          children: [(0, l.jsx)(c.Heading, {
            variant: "heading-sm/semibold",
            className: U.DH,
            children: p.formLabel
          }), (0, l.jsx)(c.Button, {
            variant: "primary",
            size: "sm",
            text: B.intl.string(B.t.dMJ3Y6),
            onClick: function() {
              (0, c.mMO)(async () => {
                let {
                  default: e
                } = await Promise.resolve().then(n.bind(n, 685374));
                return t => (0, l.jsx)(e, H(V({}, t), {
                  channelId: i.id,
                  inSettings: true
                }))
              })
            }
          })]
        }), (0, l.jsx)(F, {
          channel: i,
          roles: o,
          members: u,
          getRemoveTooltipHint: R.ro
        })]
      })]
    })]
  })
}

function Y(e) {
  let {
    title: t
  } = e;
  return (0, l.jsxs)("div", {
    children: [(0, l.jsx)(c.cGx, {
      className: U.yF
    }), (0, l.jsx)(c.Heading, {
      variant: "heading-sm/semibold",
      className: s()(U.DH, U.Gf),
      children: t
    })]
  })
}
let J = Chunk311907.Ay.connectStores([Chunk176360.A, Chunk576705.A, Chunk696451.Ay, Chunk71393.A, Chunk317525.A], () => {
  let e, t = C.A.channel,
    n = C.A.category,
    l = [],
    i = [],
    r = {},
    s = false;
  if (null != t) {
    e = E.A.getGuild(t.getGuildId());
    let n = N.Ay.getMemberIds(null == e ? true : e.id);
    if (null != e) {
      let a = S.A.getSortedRoles(e.id);
      r = C.A.editedPermissionIds.reduce((e, t) => {
        let n = C.A.getPermissionOverwrite(t);
        return null != n && (e[t] = n), e
      }, {}), l = R.uX(e, a, t, t.accessPermissions, r), i = R.Wi(n, t, e, t.accessPermissions, r), s = R.Ae(t, r)
    }
  }
  return {
    canSyncChannel: null != n && _.A.can(G.xB.MANAGE_ROLES, n),
    category: n,
    channel: t,
    filteredMembers: i,
    filteredRoles: l,
    guild: e,
    isPrivateGuildChannel: s,
    locked: C.A.locked,
    permissionUpdates: r
  }
})(function(e) {
  let {
    canSyncChannel: t,
    category: r,
    channel: s,
    filteredMembers: a,
    filteredRoles: o,
    guild: u,
    isPrivateGuildChannel: d,
    locked: g,
    permissionUpdates: m
  } = e, [p, f] = i.useState(!M.MJ(G.xB.SEND_MESSAGES, s));
  if (null == s || null == u) return null;
  let b = {
    title: B.intl.string(B.t.BAZMBn),
    subtitle: B.intl.string(B.t.XLrZyp)
  };
  return s.isCategory() && (b.title = B.intl.string(B.t["/uELTj"]), b.subtitle = B.intl.string(B.t["8iAg3Q"])), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(c.Heading, {
      variant: "heading-lg/semibold",
      children: b.title
    }), (0, l.jsx)(c.Text, {
      variant: "text-sm/normal",
      children: b.subtitle
    }), null != r && t ? g ? (0, l.jsx)(P.A, {
      canSync: false,
      icon: c.fNY,
      noticeText: B.intl.format(B.t.ETJqLl, {
        categoryName: r.name
      })
    }) : (0, l.jsx)(P.A, {
      buttonText: B.intl.string(B.t.NVwuHq),
      canSync: true,
      icon: (0, c.kHD)(w.A),
      noticeText: B.intl.format(B.t.OIhm0M, {
        categoryName: r.name
      }),
      onClick: function() {
        null != r && (0, c.mMO)(async () => {
          let {
            default: e
          } = await Promise.resolve().then(n.bind(n, 544169));
          return t => (0, l.jsx)(e, H(V({}, t), {
            channel: s,
            category: r,
            onConfirm: async () => {
              let {
                guild_id: e
              } = r, t = V({}, r.permissionOverwrites);
              null != e && null == t[e] && (t[e] = M.xT(e)), await (0, x.n)(s, t[e].deny, t[e].allow) && (0, h.RT)(s.id, {
                permissionOverwrites: Object.values(t)
              })
            }
          }))
        })
      }
    }) : null, s.isGuildStageVoice() ? (0, l.jsx)(W, {
      guild: u,
      channel: s,
      permissionUpdates: m
    }) : null, (0, l.jsx)(Z, {
      channel: s,
      guild: u,
      isPrivateGuildChannel: d,
      roles: o,
      members: a
    }), false, (0, l.jsx)(I.A, {})]
  })
})