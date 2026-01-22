/** Chunk was on 78888 **/
/** chunk id: 159495, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  $: () => $,
  A: () => er
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
  Chunk389723 = require("./389723.jsx"),
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

function q(e) {
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

function K(e, t) {
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
let $ = Chunk311907.Ay.connectStores([Chunk176360.A, Chunk863036.A], () => {
  let e = I.A.getChannel();
  return {
    submitting: R.A.formState === J.XlH.SUBMITTING,
    onReset() {
      (0, x.Ts)()
    },
    onSave() {
      if (null == e) return;
      let t = R.A.editedPermissionIds.reduce((e, t) => {
        let n = R.A.getPermissionOverwrite(t);
        return null != n && e.push(n), e
      }, []);
      (0, x.R$)(e.id, t)
    }
  }
})(Chunk36525.A);

function ee(e) {
  let {
    overwrite: t
  } = e, n = (0, u.bG)([R.A], () => R.A.channel), i = (0, u.bG)([_.A], () => null != n ? _.A.getGuild(n.getGuildId()) : null), r = (0, u.bG)([P.A], () => null != i && null != t && t.type === y.r2.ROLE ? P.A.getRole(i.id, t.id) : true), s = E.M.useExperiment({
    guildId: null == n ? true : n.guild_id,
    location: "ChannelSettingsPermissions"
  }).enabled, {
    enabled: a
  } = C.A.useExperiment({
    location: "ChannelSettingsPermissionsContent",
    guildId: null == n ? true : n.guild_id
  });
  if (null == n || null == i || null == t) return null;
  let {
    guild_id: o,
    id: d
  } = n, h = () => {
    var e;
    if (null == _.A.getGuild(o)) return "";
    let n = t.type === y.r2.MEMBER ? k.default.getUser(t.id) : true,
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
    if (D.A.can(e, n, {
        [t.id]: K(q({}, t), {
          allow: i,
          deny: r
        })
      }))(0, x.LA)(n, t.id, i, r);
    else {
      let e;
      if (t.type === y.r2.MEMBER) {
        let n = k.default.getUser(t.id);
        null != n && (e = W.Ay.getName(n))
      } else if (t.type === y.r2.ROLE) {
        let l = _.A.getGuild(n.getGuildId());
        if (null != l) {
          let n = P.A.getRole(l.id, t.id);
          null != n && (e = n.name)
        }
      }
      Z.t(e)
    }
  }, m = e => {
    let t = D.A.can(J.xBc.ADMINISTRATOR, i) || D.A.can(J.xBc.MANAGE_ROLES, n, true, true, true);
    return n.isGuildStageVoice() && T.Zq.has(e) ? z.intl.string(z.t.bTS5lf) : !((!c.aI(e, J.xBc.MANAGE_ROLES) || t) && (null == e || D.A.can(e, i) || t)) && z.intl.string(z.t.nOtPMM)
  }, j = t.id === o, A = n.isForumLikeChannel() && c.zy(t.deny, J.xBc.SEND_MESSAGES), v = c.zy(t.deny, J.xBc.SEND_MESSAGES), O = c.zy(t.deny, J.xBc.READ_MESSAGE_HISTORY), w = H.A.generateChannelPermissionSpec(o, n, j, {
    createPostsDisabled: A,
    sendMessagesDisabled: v,
    readMessageHistoryDisabled: O,
    inGameMentionsExperiment: s
  });
  return (0, l.jsxs)(N.Ay.Content, {
    className: Q.uA,
    children: [w.map((e, n) => (0, l.jsx)(S.A, {
      spec: e,
      allow: t.allow,
      deny: t.deny,
      onChange: g,
      permissionRender: m,
      className: Q.p2,
      hasBypassSlowmodePermission: a,
      guildId: o
    }, n)), o === t.id ? null : (0, l.jsx)(f.Button, {
      variant: "critical-secondary",
      text: z.intl.format(z.t.txPV7k, {
        name: h()
      }),
      onClick: () => {
        let e = h();
        p.A.show({
          title: z.intl.string(z.t.GuPYQB),
          body: z.intl.format(z.t.xERCnZ, {
            name: e
          }),
          cancelText: z.intl.string(z.t["ETE/oC"]),
          onConfirm: () => b.A.clearPermissionOverwrite(d, t.id)
        })
      }
    })]
  })
}

function et(e) {
  let {
    guildId: t,
    channelId: n,
    user: i
  } = e, r = i.getAvatarURL(t, 32), a = V.Ay.getNickname(t, n, i), o = W.Ay.useUserTag(i), c = null, d = null;
  return c = null != a ? a : i.hasAvatarForGuild(t) ? i.username : o, (null != a || i.hasAvatarForGuild(t)) && (d = (0, l.jsxs)("div", {
    className: Q.BP,
    children: [i.hasAvatarForGuild(t) ? (0, l.jsx)(f.euF, {
      className: Q.PX,
      size: f._3J.SIZE_16,
      src: i.getAvatarURL(true, 16),
      "aria-label": i.username
    }) : null, (0, l.jsx)(f.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: o
    })]
  })), (0, l.jsxs)("div", {
    className: s()(X.uN, Q.mG),
    children: [(0, l.jsx)(f.euF, {
      size: f._3J.SIZE_32,
      src: r,
      "aria-label": i.username,
      className: Q.RJ
    }), (0, l.jsxs)("div", {
      className: Q.F0,
      children: [(0, l.jsx)(f.Text, {
        className: Q.F0,
        variant: "text-md/normal",
        children: c
      }), d]
    })]
  })
}

function en(e) {
  return "object" == typeof e && null != e && "colorString" in e && "name" in e
}

function el(e) {
  let {
    guild: t,
    channel: n,
    permissionOverwrites: r,
    onClose: a,
    onSelect: c
  } = e, h = (0, u.bG)([P.A], () => P.A.getSortedRoles(t.id)), m = (0, u.yK)([L.Ay], () => L.Ay.getMemberIds(t.id)), p = i.useMemo(() => [...h.filter(e => null == r[e.id]), ...o()(m).map(k.default.getUser).filter(G.Vq).filter(e => null == r[e.id]).sortBy(e => e.username.toLowerCase()).value()], [m, r, h]);
  return (0, l.jsx)(d.lGe, {
    className: Q.Nd,
    children: (0, l.jsxs)(g.iS, {
      selectionMode: "single",
      onSelectionChange: e => {
        null != e && (en(e) ? c(e.id, y.r2.ROLE) : e instanceof M.A && c(e.id, y.r2.MEMBER), a())
      },
      options: p,
      formatOption: e => ({
        id: e.id,
        value: e,
        label: en(e) ? e.name : W.Ay.getUserTag(e)
      }),
      children: [(0, l.jsx)("div", {
        className: Q.ON,
        children: (0, l.jsx)(g.a3, {
          label: z.intl.string(z.t.lT5Zth),
          placeholder: z.intl.string(z.t.V2pZRh),
          showChevronButton: false,
          onQueryChange: e => {
            let n = e.target.value;
            B.A.requestMembers(t.id, n, 20)
          }
        })
      }), (0, l.jsx)(g.X2, {
        renderListItem: e => {
          let {
            value: i
          } = e;
          if (en(i)) {
            let e;
            return null != i.colorString && (e = {
              color: i.colorString
            }), (0, l.jsxs)("div", {
              className: s()(X.uN, Q.xf),
              children: [(0, l.jsx)(f.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                className: Q.S3,
                style: e,
                children: i.name
              }), (0, l.jsx)(f.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: z.intl.string(z.t.IqVT2L)
              })]
            })
          }
          if (i instanceof M.A) return (0, l.jsx)(et, {
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

function ei() {
  let e, t = i.useRef(null),
    {
      channel: r,
      permissionOverwrites: s,
      selectedOverwriteId: a
    } = (0, u.cf)([R.A], () => R.A),
    c = null == r ? true : r.getGuildId(),
    {
      guild: d,
      sortedGuildRoles: h
    } = (0, u.cf)([_.A, P.A], () => {
      let e = null != c ? _.A.getGuild(c) : true,
        t = null != e ? P.A.getSortedRoles(e.id) : true;
      return {
        guild: e,
        sortedGuildRoles: t
      }
    }, [c]),
    g = (0, Y.A)(c, s),
    C = (0, v.Ay)(),
    E = (0, u.bG)([O.A], () => O.A.roleStyle),
    S = i.useCallback((e, t) => {
      if (null == r) return null;
      (0, j.L3)(e, async () => {
        let {
          id: e,
          role: i,
          name: s
        } = t, a = null != d ? (0, w.af)(d) : null, o = null != i && a === i.id, {
          default: c
        } = await n.e("77168").then(n.bind(n, 495603));
        return t => (0, l.jsx)(c, K(q({}, t), {
          id: e,
          role: i,
          handleDeletePermission: o ? true : () => {
            p.A.show({
              title: z.intl.string(z.t.GuPYQB),
              body: z.intl.format(z.t.xERCnZ, {
                name: s
              }),
              cancelText: z.intl.string(z.t["ETE/oC"]),
              onConfirm: () => b.A.clearPermissionOverwrite(r.id, e)
            })
          }
        }))
      })
    }, [r, d]);
  if (null == d || null == h || null == r || null == s) return null;
  let T = (e, t) => {
    b.A.updatePermissionOverwrite(r.id, {
      id: e,
      type: t,
      allow: F.x3,
      deny: F.x3
    }).then(() => (0, x.G9)(e))
  };
  null != s && null == s[d.id] && (s[d.id] = F.xT(d.id));
  let M = h.filter(e => {
      var t;
      return (null == (t = s[e.id]) ? true : t.type) === y.r2.ROLE
    }).map(e => (0, l.jsx)(A.A, {
      theme: C,
      roleStyle: E,
      id: e.id,
      role: e,
      guild: d,
      color: e.colorString,
      "aria-label": e.name,
      onContextMenu: t => S(t, {
        id: e.id,
        name: e.name,
        role: e
      }),
      children: e.name
    }, "".concat(a, "-").concat(e.id))),
    I = o()(g).sortBy(e => e.username.toLowerCase()).map(e => {
      let t = e.getAvatarURL(d.id, 24);
      return (0, l.jsx)(A.A, {
        id: e.id,
        guild: d,
        theme: C,
        roleStyle: E,
        "aria-label": W.Ay.getUserTag(e, {
          decoration: "never"
        }),
        onContextMenu: t => S(t, {
          id: e.id,
          name: e.username
        }),
        children: (0, l.jsxs)("div", {
          className: Q.mG,
          children: [(0, l.jsx)(f.euF, {
            size: f._3J.SIZE_20,
            src: t,
            "aria-label": e.username,
            className: Q.bE
          }), (0, l.jsx)("span", {
            className: Q.Xh,
            children: W.Ay.getUserTag(e)
          })]
        })
      }, "".concat(a, "-").concat(e.id))
    }).value();
  return (0, l.jsx)(N.Ay.Sidebar, {
    className: Q.uA,
    scrollable: true,
    children: (0, l.jsxs)(f.VQ0, {
      onItemSelect: x.G9,
      selectedItem: a,
      orientation: "vertical",
      children: [(e = (0, m.Mw)(C) ? n(546716) : n(233497), (0, l.jsx)(f.YNO, {
        targetElementRef: t,
        renderPopout: e => {
          let {
            position: t,
            closePopout: n
          } = e;
          return (0, l.jsx)(el, {
            guild: d,
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
        children: n => (0, l.jsx)(f.VQ0.Header, K(q({
          ref: t
        }, n), {
          children: (0, l.jsxs)("div", {
            className: Q.$M,
            children: [(0, l.jsxs)("span", {
              children: [z.intl.string(z.t["LPJmL/"]), "/", z.intl.string(z.t["9Oq93m"])]
            }), (0, l.jsx)("img", {
              alt: "",
              className: Q.aN,
              src: e
            })]
          })
        }))
      })), M, I, (0, l.jsxs)(i.Fragment, {
        children: [(0, l.jsx)(f.VQ0.Separator, {
          style: {
            marginTop: 20,
            marginBottom: 14
          }
        }), (0, l.jsx)(f.MzZ, {
          href: U.A.getArticleURL(J.MVz.PERMISSIONS_TUTORIAL),
          target: "_blank",
          children: (0, l.jsx)(f.Text, {
            variant: "text-sm/normal",
            color: "text-link",
            children: z.intl.string(z.t.pfoA83)
          })
        })]
      })]
    })
  })
}

function er() {
  let {
    channel: e,
    permissionOverwrites: t,
    selectedOverwriteId: n
  } = (0, u.cf)([R.A], () => R.A);
  if (null == (0, u.bG)([_.A], () => null != e ? _.A.getGuild(e.getGuildId()) : null) || null == e || null == t || null == n) return null;
  let i = t[n];
  return (0, l.jsxs)(N.Ay, {
    className: Q.kL,
    children: [(0, l.jsx)(ei, {}), (0, l.jsx)(ee, {
      overwrite: i
    })]
  })
}