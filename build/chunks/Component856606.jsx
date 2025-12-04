/** Chunk was on 86915 **/
/** chunk id: 856606, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => er,
  n: () => $
}), require("./539854.js"), require("./415506.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk149765 = require("./149765.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk496600 = require("./496600.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk493683 = require("./493683.js"),
  Chunk741361 = require("./741361.js"),
  Chunk239091 = require("./239091.js"),
  Chunk668390 = require("./668390.jsx"),
  Chunk911969 = require("./911969.js"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk409513 = require("./409513.js"),
  Chunk325476 = require("./325476.jsx"),
  Chunk627050 = require("./627050.js"),
  Chunk722252 = require("./722252.jsx"),
  Chunk146085 = require("./146085.js"),
  Chunk601964 = require("./601964.js"),
  Chunk598077 = require("./598077.js"),
  Chunk277053 = require("./277053.js"),
  Chunk388610 = require("./388610.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk892880 = require("./892880.js"),
  Chunk63063 = require("./63063.js"),
  Chunk5192 = require("./5192.js"),
  Chunk233608 = require("./233608.js"),
  Chunk700785 = require("./700785.js"),
  Chunk51144 = require("./51144.js"),
  Chunk257017 = require("./257017.js"),
  Chunk188857 = require("./188857.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk198750 = require("./198750.js"),
  Chunk95632 = require("./95632.js");

function Q(e) {
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

function K(e, t) {
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
let $ = Chunk442837.ZP.connectStores([Chunk277053.Z, Chunk388610.Z], () => {
  let e = Chunk388610.Z.getChannel();
  return {
    submitting: Chunk277053.Z.formState === Chunk981631.QZA.SUBMITTING,
    onReset() {
      (0, Chunk741361.S1)()
    },
    onSave() {
      if (null == module) return;
      let t = Chunk277053.Z.editedPermissionIds.reduce((e, t) => {
        let n = P.Z.getPermissionOverwrite(t);
        return null != n && e.push(n), e
      }, []);
      (0, Chunk741361.hw)(module.id, exports)
    }
  }
})(Chunk796027.Z);

function ee(e) {
  let {
    overwrite: t
  } = e, n = (0, u.e7)([P.Z], () => P.Z.channel), l = (0, u.e7)([M.Z], () => null != n ? M.Z.getGuild(n.getGuildId()) : null), r = (0, u.e7)([L.Z], () => null != l && null != t && t.type === y.BN.ROLE ? L.Z.getRole(l.id, t.id) : true), a = N.N.useExperiment({
    guildId: null == n ? true : n.guild_id,
    location: "ChannelSettingsPermissions"
  }).enabled, {
    enabled: s
  } = Z.Z.useExperiment({
    location: "ChannelSettingsPermissionsContent",
    guildId: null == n ? true : n.guild_id
  });
  if (null == n || null == l || null == t) return null;
  let {
    guild_id: o,
    id: d
  } = n, h = () => {
    var e;
    if (null == M.Z.getGuild(o)) return "";
    let n = t.type === y.BN.MEMBER ? D.default.getUser(t.id) : true,
      i = null != (e = null == n ? true : n.username) ? e : "";
    return null != r ? r.name : i
  }, g = (e, i) => {
    if ("boolean" == typeof i) throw Error("Unexpected boolean action");
    let {
      allow: l,
      deny: r
    } = t;
    switch (r = c.Od(r, e), l = c.Od(l, e), i) {
      case "ALLOW":
        l = c.IH(l, e);
        break;
      case "DENY":
        r = c.IH(r, e)
    }
    if (A.Z.can(e, n, {
        [t.id]: K(Q({}, t), {
          allow: l,
          deny: r
        })
      }))(0, x.kY)(n, t.id, l, r);
    else {
      let e;
      if (t.type === y.BN.MEMBER) {
        let n = D.default.getUser(t.id);
        null != n && (e = F.ZP.getName(n))
      } else if (t.type === y.BN.ROLE) {
        let i = M.Z.getGuild(n.getGuildId());
        if (null != i) {
          let n = L.Z.getRole(i.id, t.id);
          null != n && (e = n.name)
        }
      }
      W.X(e)
    }
  }, m = e => {
    let t = A.Z.can(Y.Plq.ADMINISTRATOR, l) || A.Z.can(Y.Plq.MANAGE_ROLES, n, true, true, true);
    return n.isGuildStageVoice() && w.xS.has(e) ? q.intl.string(q.t.bTS5lf) : !((!c.fS(e, Y.Plq.MANAGE_ROLES) || t) && (null == e || A.Z.can(e, l) || t)) && q.intl.string(q.t.nOtPMM)
  }, j = t.id === o, v = n.isForumLikeChannel() && c.e$(t.deny, Y.Plq.SEND_MESSAGES), C = c.e$(t.deny, Y.Plq.SEND_MESSAGES), O = c.e$(t.deny, Y.Plq.READ_MESSAGE_HISTORY), T = V.Z.generateChannelPermissionSpec(o, n, j, {
    createPostsDisabled: v,
    sendMessagesDisabled: C,
    readMessageHistoryDisabled: O,
    inGameMentionsExperiment: a
  });
  return (0, i.jsxs)(S.ZP.Content, {
    className: J.layoutStyle,
    children: [T.map((e, n) => (0, i.jsx)(E.Z, {
      spec: e,
      allow: t.allow,
      deny: t.deny,
      onChange: g,
      permissionRender: m,
      className: J.permissionsForm,
      hasBypassSlowmodePermission: s
    }, n)), o === t.id ? null : (0, i.jsx)(f.Button, {
      variant: "critical-secondary",
      text: q.intl.format(q.t.txPV7k, {
        name: h()
      }),
      onClick: () => {
        let e = h();
        p.Z.show({
          title: q.intl.string(q.t.GuPYQB),
          body: q.intl.format(q.t.xERCnZ, {
            name: e
          }),
          cancelText: q.intl.string(q.t["ETE/oC"]),
          onConfirm: () => b.Z.clearPermissionOverwrite(d, t.id)
        })
      }
    })]
  })
}

function et(e) {
  let {
    guildId: t,
    channelId: n,
    user: l
  } = e, r = l.getAvatarURL(t, 32), s = G.ZP.getNickname(t, n, l), o = F.ZP.useUserTag(l), c = null, d = null;
  return c = null != s ? s : l.hasAvatarForGuild(t) ? l.username : o, (null != s || l.hasAvatarForGuild(t)) && (d = (0, i.jsxs)("div", {
    className: J.userRowSubText,
    children: [l.hasAvatarForGuild(t) ? (0, i.jsx)(f.qEK, {
      className: J.userRowSubAvatar,
      size: f.EFr.SIZE_16,
      src: l.getAvatarURL(true, 16),
      "aria-label": l.username
    }) : null, (0, i.jsx)(f.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: o
    })]
  })), (0, i.jsxs)("div", {
    className: a()(X.listBoxItemContent, J.inline),
    children: [(0, i.jsx)(f.qEK, {
      size: f.EFr.SIZE_32,
      src: r,
      "aria-label": l.username,
      className: J.userRowAvatar
    }), (0, i.jsxs)("div", {
      className: J.userRowText,
      children: [(0, i.jsx)(f.Text, {
        className: J.userRowText,
        variant: "text-md/normal",
        children: c
      }), d]
    })]
  })
}

function en(e) {
  return "object" == typeof e && null != e && "colorString" in e && "name" in e
}

function ei(e) {
  let {
    guild: t,
    channel: n,
    permissionOverwrites: r,
    onClose: s,
    onSelect: c
  } = e, h = (0, u.e7)([L.Z], () => L.Z.getSortedRoles(t.id)), m = (0, u.Wu)([R.ZP], () => R.ZP.getMemberIds(t.id)), p = l.useMemo(() => [...h.filter(e => null == r[e.id]), ...o()(m).map(D.default.getUser).filter(k.lm).filter(e => null == r[e.id]).sortBy(e => e.username.toLowerCase()).value()], [m, r, h]);
  return (0, i.jsx)(d.VqE, {
    className: J.createOverwritePopout,
    children: (0, i.jsxs)(g.uz, {
      selectionMode: "single",
      onSelectionChange: e => {
        null != e && (en(e) ? c(e.id, y.BN.ROLE) : e instanceof _.Z && c(e.id, y.BN.MEMBER), s())
      },
      options: p,
      formatOption: e => ({
        id: e.id,
        value: e,
        label: en(e) ? e.name : F.ZP.getUserTag(e)
      }),
      children: [(0, i.jsx)("div", {
        className: J.searchBar,
        children: (0, i.jsx)(g.Ct, {
          label: q.intl.string(q.t.lT5Zth),
          placeholder: q.intl.string(q.t.V2pZRh),
          showChevronButton: false,
          onQueryChange: e => {
            let n = e.target.value;
            B.Z.requestMembers(t.id, n, 20)
          }
        })
      }), (0, i.jsx)(g.px, {
        renderListItem: e => {
          let {
            value: l
          } = e;
          if (en(l)) {
            let e;
            return null != l.colorString && (e = {
              color: l.colorString
            }), (0, i.jsxs)("div", {
              className: a()(X.listBoxItemContent, J.roleRow),
              children: [(0, i.jsx)(f.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                className: J.roleName,
                style: e,
                children: l.name
              }), (0, i.jsx)(f.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: q.intl.string(q.t.IqVT2L)
              })]
            })
          }
          if (l instanceof _.Z) return (0, i.jsx)(et, {
            guildId: t.id,
            channelId: n.id,
            user: l
          })
        },
        maxVisibleItems: 7
      })]
    })
  })
}

function el() {
  let e = Chunk473749.useRef(null),
    {
      channel: t,
      permissionOverwrites: r,
      selectedOverwriteId: a
    } = (0, Chunk442837.cj)([Chunk277053.Z], () => Chunk277053.Z),
    s = null == exports ? true : exports.getGuildId(),
    {
      guild: c,
      sortedGuildRoles: d
    } = (0, Chunk442837.cj)([Chunk430824.Z, Chunk485386.Z], () => {
      let e = null != Chunk392711 ? Chunk430824.Z.getGuild(Chunk392711) : true,
        t = null != module ? Chunk485386.Z.getSortedRoles(module.id) : true;
      return {
        guild: module,
        sortedGuildRoles: exports
      }
    }, [Chunk392711]),
    h = (0, Chunk188857.Z)(Chunk392711, Chunk120356),
    g = (0, Chunk410030.ZP)(),
    Z = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.roleStyle),
    N = Chunk473749.useCallback((e, l) => {
      if (null == t) return null;
      (0, j.jW)(e, async () => {
        let {
          id: e,
          role: r,
          name: a
        } = l, s = null != c ? (0, T.lV)(c) : null, o = null != r && s === r.id, {
          default: d
        } = await n.e("83884").then(n.bind(n, 905687));
        return n => (0, i.jsx)(d, K(Q({}, n), {
          id: e,
          role: r,
          handleDeletePermission: o ? true : () => {
            p.Z.show({
              title: q.intl.string(q.t.GuPYQB),
              body: q.intl.format(q.t.xERCnZ, {
                name: a
              }),
              cancelText: q.intl.string(q.t["ETE/oC"]),
              onConfirm: () => b.Z.clearPermissionOverwrite(t.id, e)
            })
          }
        }))
      })
    }, [exports, Chunk149765]);
  if (null == Chunk149765 || null == Chunk793030 || null == exports || null == Chunk120356) return null;
  let E = e => {
      let {
        position: n,
        closePopout: l
      } = e;
      return (0, i.jsx)(ei, {
        guild: c,
        channel: t,
        permissionOverwrites: r,
        position: null != n ? n : "bottom",
        onSelect: w,
        onClose: l
      })
    },
    w = (e, n) => {
      b.Z.updatePermissionOverwrite(t.id, {
        id: e,
        type: n,
        allow: H.Hn,
        deny: H.Hn
      }).then(() => (0, x.Aj)(e))
    };
  null != Chunk120356 && null == Chunk120356[Chunk149765.id] && (Chunk120356[Chunk149765.id] = Chunk700785.we(Chunk149765.id));
  let _ = Chunk793030.filter(e => {
      var t;
      return (null == (t = r[e.id]) ? true : t.type) === y.BN.ROLE
    }).map(e => (0, i.jsx)(v.Z, {
      theme: g,
      roleStyle: Z,
      id: e.id,
      role: e,
      guild: c,
      color: e.colorString,
      "aria-label": e.name,
      onContextMenu: t => N(t, {
        id: e.id,
        name: e.name,
        role: e
      }),
      children: e.name
    }, "".concat(a, "-").concat(e.id))),
    I = o()(Chunk796027).sortBy(e => e.username.toLowerCase()).map(e => {
      let t = e.getAvatarURL(c.id, 24);
      return (0, i.jsx)(v.Z, {
        id: e.id,
        guild: c,
        theme: g,
        roleStyle: Z,
        "aria-label": F.ZP.getUserTag(e, {
          decoration: "never"
        }),
        onContextMenu: t => N(t, {
          id: e.id,
          name: e.username
        }),
        children: (0, i.jsxs)("div", {
          className: J.inline,
          children: [(0, i.jsx)(f.qEK, {
            size: f.EFr.SIZE_20,
            src: t,
            "aria-label": e.username,
            className: J.xsmallAvatar
          }), (0, i.jsx)("span", {
            className: J.username,
            children: F.ZP.getUserTag(e)
          })]
        })
      }, "".concat(a, "-").concat(e.id))
    }).value();
  return (0, Chunk54381.jsx)(Chunk325476.ZP.Sidebar, {
    className: Chunk198750.layoutStyle,
    scrollable: true,
    children: (0, Chunk54381.jsxs)(Chunk481060.njP, {
      onItemSelect: Chunk741361.Aj,
      selectedItem: a,
      orientation: "vertical",
      children: [(() => {
        let t = (0, Chunk780384.wj)(Chunk496600) ? require("./521715.js") : require("./299603.js");
        return (0, Chunk54381.jsx)(Chunk481060.yRy, {
          targetElementRef: module,
          renderPopout: Chunk722252,
          position: "bottom",
          autoInvert: false,
          clickTrap: true,
          children: n => (0, i.jsx)(f.njP.Header, K(Q({
            ref: e
          }, n), {
            children: (0, i.jsxs)("div", {
              className: J.sidebarHeaderDefault,
              children: [(0, i.jsxs)("span", {
                children: [q.intl.string(q.t["LPJmL/"]), "/", q.intl.string(q.t["9Oq93m"])]
              }), (0, i.jsx)("img", {
                alt: "",
                className: J.sidebarHeader,
                src: t
              })]
            })
          }))
        })
      })(), Chunk598077, Chunk388610, (0, Chunk54381.jsxs)(Chunk473749.Fragment, {
        children: [(0, Chunk54381.jsx)(Chunk481060.njP.Separator, {
          style: {
            marginTop: 20,
            marginBottom: 14
          }
        }), (0, Chunk54381.jsx)(Chunk481060.Anchor, {
          href: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PERMISSIONS_TUTORIAL),
          target: "_blank",
          children: (0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            color: "text-link",
            children: Chunk388032.intl.string(Chunk388032.t.pfoA83)
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
  } = (0, Chunk442837.cj)([Chunk277053.Z], () => Chunk277053.Z);
  if (null == (0, Chunk442837.e7)([Chunk430824.Z], () => null != module ? Chunk430824.Z.getGuild(module.getGuildId()) : null) || null == module || null == exports || null == require) return null;
  let l = exports[require];
  return (0, Chunk54381.jsxs)(Chunk325476.ZP, {
    className: Chunk198750.container,
    children: [(0, Chunk54381.jsx)(el, {}), (0, Chunk54381.jsx)(ee, {
      overwrite: Chunk473749
    })]
  })
}