/** Chunk was on 78888 **/
/** chunk id: 159495, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  $: () => K,
  A: () => ei
}), require("./321073.js"), require("./65821.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk136722 = require("./136722.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk36525 = require("./36525.jsx"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
  Chunk308528 = require("./308528.js"),
  Chunk702805 = require("./702805.js"),
  Chunk442433 = require("./442433.js"),
  Chunk508384 = require("./508384.jsx"),
  Chunk155718 = require("./155718.js"),
  Chunk736653 = require("./736653.js"),
  Chunk775602 = require("./775602.js"),
  Chunk386849 = require("./386849.js"),
  Chunk861197 = require("./861197.jsx"),
  Chunk352505 = require("./352505.js"),
  Chunk942234 = require("./942234.jsx"),
  Chunk233993 = require("./233993.js"),
  Chunk260509 = require("./260509.js"),
  Chunk427157 = require("./427157.js"),
  Chunk176360 = require("./176360.js"),
  Chunk863036 = require("./863036.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js"),
  Chunk695184 = require("./695184.js"),
  Chunk975571 = require("./975571.js"),
  Chunk562153 = require("./562153.js"),
  Chunk558393 = require("./558393.js"),
  Chunk488926 = require("./488926.js"),
  Chunk427262 = require("./427262.js"),
  Chunk786033 = require("./786033.js"),
  Chunk13948 = require("./13948.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk442875 = require("./442875.js"),
  Chunk336389 = require("./336389.js");

function X(e) {
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

function q(e, t) {
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
let K = Chunk311907.Ay.connectStores([Chunk176360.A, Chunk863036.A], () => {
  let e = M.A.getChannel();
  return {
    submitting: w.A.formState === Y.XlH.SUBMITTING,
    onReset() {
      (0, b.Ts)()
    },
    onSave() {
      if (null == e) return;
      let t = w.A.editedPermissionIds.reduce((e, t) => {
        let n = w.A.getPermissionOverwrite(t);
        return null != n && e.push(n), e
      }, []);
      (0, b.R$)(e.id, t)
    }
  }
})(Chunk36525.A);

function $(e) {
  let {
    overwrite: t
  } = e, n = (0, d.bG)([w.A], () => w.A.channel), i = (0, d.bG)([L.A], () => null != n ? L.A.getGuild(n.getGuildId()) : null), r = (0, d.bG)([I.A], () => null != i && null != t && t.type === A.r2.ROLE ? I.A.getRole(i.id, t.id) : true), s = N.M.useExperiment({
    guildId: null == n ? true : n.guild_id,
    location: "ChannelSettingsPermissions"
  }).enabled, {
    enabled: a
  } = O.A.useExperiment({
    location: "ChannelSettingsPermissionsContent",
    guildId: null == n ? true : n.guild_id
  });
  if (null == n || null == i || null == t) return null;
  let {
    guild_id: o,
    id: u
  } = n, h = () => {
    var e;
    if (null == L.A.getGuild(o)) return "";
    let n = t.type === A.r2.MEMBER ? D.default.getUser(t.id) : true,
      l = null != (e = null == n ? true : n.username) ? e : "";
    return null != r ? r.name : l
  }, g = (e, l) => {
    if ("boolean" == typeof l) throw Error("Unexpected boolean action");
    let {
      allow: i,
      deny: r
    } = t;
    switch (r = c.TF(r, e), i = c.TF(i, e), l) {
      case "ALLOW":
        i = c.WQ(i, e);
        break;
      case "DENY":
        r = c.WQ(r, e)
    }
    if (P.A.can(e, n, {
        [t.id]: q(X({}, t), {
          allow: i,
          deny: r
        })
      }))(0, b.LA)(n, t.id, i, r);
    else {
      let e;
      if (t.type === A.r2.MEMBER) {
        let n = D.default.getUser(t.id);
        null != n && (e = F.Ay.getName(n))
      } else if (t.type === A.r2.ROLE) {
        let l = L.A.getGuild(n.getGuildId());
        if (null != l) {
          let n = I.A.getRole(l.id, t.id);
          null != n && (e = n.name)
        }
      }
      W.t(e)
    }
  }, x = e => {
    let t = P.A.can(Y.xBc.ADMINISTRATOR, i) || P.A.can(Y.xBc.MANAGE_ROLES, n, true, true, true);
    return n.isGuildStageVoice() && E.Zq.has(e) ? J.intl.string(J.t.bTS5lf) : !((!c.aI(e, Y.xBc.MANAGE_ROLES) || t) && (null == e || P.A.can(e, i) || t)) && J.intl.string(J.t.nOtPMM)
  }, j = t.id === o, y = n.isForumLikeChannel() && c.zy(t.deny, Y.xBc.SEND_MESSAGES), v = c.zy(t.deny, Y.xBc.SEND_MESSAGES), _ = c.zy(t.deny, Y.xBc.READ_MESSAGE_HISTORY), T = V.A.generateChannelPermissionSpec(o, n, j, {
    createPostsDisabled: y,
    sendMessagesDisabled: v,
    readMessageHistoryDisabled: _,
    inGameMentionsExperiment: s
  });
  return (0, l.jsxs)(C.Ay.Content, {
    className: z.uA,
    children: [T.map((e, n) => (0, l.jsx)(S.A, {
      spec: e,
      allow: t.allow,
      deny: t.deny,
      onChange: g,
      permissionRender: x,
      className: z.p2,
      hasBypassSlowmodePermission: a,
      guildId: o
    }, n)), o === t.id ? null : (0, l.jsx)(m.Button, {
      variant: "critical-secondary",
      text: J.intl.format(J.t.txPV7k, {
        name: h()
      }),
      onClick: () => {
        let e = h();
        p.A.show({
          title: J.intl.string(J.t.GuPYQB),
          body: J.intl.format(J.t.xERCnZ, {
            name: e
          }),
          cancelText: J.intl.string(J.t["ETE/oC"]),
          onConfirm: () => f.A.clearPermissionOverwrite(u, t.id)
        })
      }
    })]
  })
}

function ee(e) {
  let {
    guildId: t,
    channelId: n,
    user: i
  } = e, r = i.getAvatarURL(t, 32), a = U.Ay.getNickname(t, n, i), o = F.Ay.useUserTag(i), c = null, u = null;
  return c = null != a ? a : i.hasAvatarForGuild(t) ? i.username : o, (null != a || i.hasAvatarForGuild(t)) && (u = (0, l.jsxs)("div", {
    className: z.BP,
    children: [i.hasAvatarForGuild(t) ? (0, l.jsx)(m.euF, {
      className: z.PX,
      size: m._3J.SIZE_16,
      src: i.getAvatarURL(true, 16),
      "aria-label": i.username
    }) : null, (0, l.jsx)(m.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: o
    })]
  })), (0, l.jsxs)("div", {
    className: s()(Q.uN, z.mG),
    children: [(0, l.jsx)(m.euF, {
      size: m._3J.SIZE_32,
      src: r,
      "aria-label": i.username,
      className: z.RJ
    }), (0, l.jsxs)("div", {
      className: z.F0,
      children: [(0, l.jsx)(m.Text, {
        className: z.F0,
        variant: "text-md/normal",
        children: c
      }), u]
    })]
  })
}

function et(e) {
  return "object" == typeof e && null != e && "colorString" in e && "name" in e
}

function en(e) {
  let {
    guild: t,
    channel: n,
    permissionOverwrites: r,
    onClose: a,
    onSelect: c
  } = e, h = (0, d.bG)([I.A], () => I.A.getSortedRoles(t.id)), g = (0, d.yK)([R.Ay], () => R.Ay.getMemberIds(t.id)), p = i.useMemo(() => [...h.filter(e => null == r[e.id]), ...o()(g).map(D.default.getUser).filter(k.Vq).filter(e => null == r[e.id]).sortBy(e => e.username.toLowerCase()).value()], [g, r, h]);
  return (0, l.jsx)(u.lGe, {
    className: z.Nd,
    children: (0, l.jsxs)(m.iS7, {
      selectionMode: "single",
      onSelectionChange: e => {
        null != e && (et(e) ? c(e.id, A.r2.ROLE) : e instanceof T.A && c(e.id, A.r2.MEMBER), a())
      },
      options: p,
      formatOption: e => ({
        id: e.id,
        value: e,
        label: et(e) ? e.name : F.Ay.getUserTag(e)
      }),
      children: [(0, l.jsx)("div", {
        className: z.ON,
        children: (0, l.jsx)(m.a32, {
          label: J.intl.string(J.t.lT5Zth),
          placeholder: J.intl.string(J.t.V2pZRh),
          showChevronButton: false,
          onQueryChange: e => {
            let n = e.target.value;
            G.A.requestMembers(t.id, n, 20)
          }
        })
      }), (0, l.jsx)(m.X2W, {
        renderListItem: e => {
          let {
            value: i
          } = e;
          if (et(i)) {
            let e;
            return null != i.colorString && (e = {
              color: i.colorString
            }), (0, l.jsxs)("div", {
              className: s()(Q.uN, z.xf),
              children: [(0, l.jsx)(m.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                className: z.S3,
                style: e,
                children: i.name
              }), (0, l.jsx)(m.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: J.intl.string(J.t.IqVT2L)
              })]
            })
          }
          if (i instanceof T.A) return (0, l.jsx)(ee, {
            guildId: t.id,
            channelId: n.id,
            user: i
          })
        },
        maxVisibleItems: 7
      })]
    })
  })
}

function el() {
  let e, t = i.useRef(null),
    {
      channel: r,
      permissionOverwrites: s,
      selectedOverwriteId: a
    } = (0, d.cf)([w.A], () => w.A),
    c = null == r ? true : r.getGuildId(),
    {
      guild: u,
      sortedGuildRoles: h
    } = (0, d.cf)([L.A, I.A], () => {
      let e = null != c ? L.A.getGuild(c) : true,
        t = null != e ? I.A.getSortedRoles(e.id) : true;
      return {
        guild: e,
        sortedGuildRoles: t
      }
    }, [c]),
    O = (0, Z.A)(c, s),
    N = (0, y.Ay)(),
    S = (0, d.bG)([v.A], () => v.A.roleStyle),
    E = i.useCallback((e, t) => {
      if (null == r) return null;
      (0, x.L3)(e, async () => {
        let {
          id: e,
          role: i,
          name: s
        } = t, a = null != u ? (0, _.af)(u) : null, o = null != i && a === i.id, {
          default: c
        } = await n.e("77168").then(n.bind(n, 495603));
        return t => (0, l.jsx)(c, q(X({}, t), {
          id: e,
          role: i,
          handleDeletePermission: o ? true : () => {
            p.A.show({
              title: J.intl.string(J.t.GuPYQB),
              body: J.intl.format(J.t.xERCnZ, {
                name: s
              }),
              cancelText: J.intl.string(J.t["ETE/oC"]),
              onConfirm: () => f.A.clearPermissionOverwrite(r.id, e)
            })
          }
        }))
      })
    }, [r, u]);
  if (null == u || null == h || null == r || null == s) return null;
  let T = (e, t) => {
    f.A.updatePermissionOverwrite(r.id, {
      id: e,
      type: t,
      allow: H.x3,
      deny: H.x3
    }).then(() => (0, b.G9)(e))
  };
  null != s && null == s[u.id] && (s[u.id] = H.xT(u.id));
  let M = h.filter(e => {
      var t;
      return (null == (t = s[e.id]) ? true : t.type) === A.r2.ROLE
    }).map(e => (0, l.jsx)(j.A, {
      theme: N,
      roleStyle: S,
      id: e.id,
      role: e,
      guild: u,
      color: e.colorString,
      "aria-label": e.name,
      onContextMenu: t => E(t, {
        id: e.id,
        name: e.name,
        role: e
      }),
      children: e.name
    }, "".concat(a, "-").concat(e.id))),
    R = o()(O).sortBy(e => e.username.toLowerCase()).map(e => {
      let t = e.getAvatarURL(u.id, 24);
      return (0, l.jsx)(j.A, {
        id: e.id,
        guild: u,
        theme: N,
        roleStyle: S,
        "aria-label": F.Ay.getUserTag(e, {
          decoration: "never"
        }),
        onContextMenu: t => E(t, {
          id: e.id,
          name: e.username
        }),
        children: (0, l.jsxs)("div", {
          className: z.mG,
          children: [(0, l.jsx)(m.euF, {
            size: m._3J.SIZE_20,
            src: t,
            "aria-label": e.username,
            className: z.bE
          }), (0, l.jsx)("span", {
            className: z.Xh,
            children: F.Ay.getUserTag(e)
          })]
        })
      }, "".concat(a, "-").concat(e.id))
    }).value();
  return (0, l.jsx)(C.Ay.Sidebar, {
    className: z.uA,
    scrollable: true,
    children: (0, l.jsxs)(m.VQ0, {
      onItemSelect: b.G9,
      selectedItem: a,
      orientation: "vertical",
      children: [(e = (0, g.Mw)(N) ? n(546716) : n(233497), (0, l.jsx)(m.YNO, {
        targetElementRef: t,
        renderPopout: e => {
          let {
            position: t,
            closePopout: n
          } = e;
          return (0, l.jsx)(en, {
            guild: u,
            channel: r,
            permissionOverwrites: s,
            position: null != t ? t : "bottom",
            onSelect: T,
            onClose: n
          })
        },
        position: "bottom",
        autoInvert: false,
        clickTrap: true,
        children: n => (0, l.jsx)(m.VQ0.Header, q(X({
          ref: t
        }, n), {
          children: (0, l.jsxs)("div", {
            className: z.$M,
            children: [(0, l.jsxs)("span", {
              children: [J.intl.string(J.t["LPJmL/"]), "/", J.intl.string(J.t["9Oq93m"])]
            }), (0, l.jsx)("img", {
              alt: "",
              className: z.aN,
              src: e
            })]
          })
        }))
      })), M, R, (0, l.jsxs)(i.Fragment, {
        children: [(0, l.jsx)(m.VQ0.Separator, {
          style: {
            marginTop: 20,
            marginBottom: 14
          }
        }), (0, l.jsx)(m.MzZ, {
          href: B.A.getArticleURL(Y.MVz.PERMISSIONS_TUTORIAL),
          target: "_blank",
          children: (0, l.jsx)(m.Text, {
            variant: "text-sm/normal",
            color: "text-link",
            children: J.intl.string(J.t.pfoA83)
          })
        })]
      })]
    })
  })
}

function ei() {
  let {
    channel: e,
    permissionOverwrites: t,
    selectedOverwriteId: n
  } = (0, d.cf)([w.A], () => w.A);
  if (null == (0, d.bG)([L.A], () => null != e ? L.A.getGuild(e.getGuildId()) : null) || null == e || null == t || null == n) return null;
  let i = t[n];
  return (0, l.jsxs)(C.Ay, {
    className: z.kL,
    children: [(0, l.jsx)(el, {}), (0, l.jsx)($, {
      overwrite: i
    })]
  })
}