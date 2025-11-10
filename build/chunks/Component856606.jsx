/** Chunk was on 86915 **/
/** chunk id: 856606, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => et,
  n: () => J
}), require("./539854.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk796027 = require("./796027.jsx"),
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
  Chunk940639 = require("./940639.jsx"),
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
  Chunk198750 = require("./198750.js");

function q(e) {
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
let J = Chunk442837.ZP.connectStores([Chunk277053.Z, Chunk388610.Z], () => {
  let e = Chunk388610.Z.getChannel();
  return {
    submitting: Chunk277053.Z.formState === Chunk981631.QZA.SUBMITTING,
    onReset() {
      (0, Chunk741361.S1)()
    },
    onSave() {
      if (null == module) return;
      let t = Chunk277053.Z.editedPermissionIds.reduce((e, t) => {
        let n = w.Z.getPermissionOverwrite(t);
        return null != n && e.push(n), e
      }, []);
      (0, Chunk741361.hw)(module.id, exports)
    }
  }
})(Chunk796027.Z);

function X(e) {
  let {
    overwrite: t
  } = e, n = (0, o.e7)([w.Z], () => w.Z.channel), l = (0, o.e7)([P.Z], () => null != n ? P.Z.getGuild(n.getGuildId()) : null), r = (0, o.e7)([R.Z], () => null != l && null != t && t.type === b.BN.ROLE ? R.Z.getRole(l.id, t.id) : true), s = S.N.useExperiment({
    guildId: null == n ? true : n.guild_id,
    location: "ChannelSettingsPermissions"
  }).enabled, {
    enabled: c
  } = y.Z.useExperiment({
    location: "ChannelSettingsPermissionsContent",
    guildId: null == n ? true : n.guild_id
  });
  if (null == n || null == l || null == t) return null;
  let {
    guild_id: d,
    id: m
  } = n, f = () => {
    var e;
    if (null == P.Z.getGuild(d)) return "";
    let n = t.type === b.BN.MEMBER ? L.default.getUser(t.id) : true,
      i = null != (e = null == n ? true : n.username) ? e : "";
    return null != r ? r.name : i
  }, x = (e, i) => {
    if ("boolean" == typeof i) throw Error("Unexpected boolean action");
    let {
      allow: l,
      deny: r
    } = t;
    switch (r = a.Od(r, e), l = a.Od(l, e), i) {
      case "ALLOW":
        l = a.IH(l, e);
        break;
      case "DENY":
        r = a.IH(r, e)
    }
    if (I.Z.can(e, n, {
        [t.id]: Y(q({}, t), {
          allow: l,
          deny: r
        })
      }))(0, p.kY)(n, t.id, l, r);
    else {
      let e;
      if (t.type === b.BN.MEMBER) {
        let n = L.default.getUser(t.id);
        null != n && (e = U.ZP.getName(n))
      } else if (t.type === b.BN.ROLE) {
        let i = P.Z.getGuild(n.getGuildId());
        if (null != i) {
          let n = R.Z.getRole(i.id, t.id);
          null != n && (e = n.name)
        }
      }
      G.X(e)
    }
  }, j = e => {
    let t = I.Z.can(W.Plq.ADMINISTRATOR, l) || I.Z.can(W.Plq.MANAGE_ROLES, n, true, true, true);
    return n.isGuildStageVoice() && O.xS.has(e) ? F.intl.string(F.t.bTS5lf) : !((!a.fS(e, W.Plq.MANAGE_ROLES) || t) && (null == e || I.Z.can(e, l) || t)) && F.intl.string(F.t.nOtPMM)
  }, v = t.id === d, Z = n.isForumLikeChannel() && a.e$(t.deny, W.Plq.SEND_MESSAGES), E = a.e$(t.deny, W.Plq.SEND_MESSAGES), T = a.e$(t.deny, W.Plq.READ_MESSAGE_HISTORY), _ = B.Z.generateChannelPermissionSpec(d, n, v, {
    createPostsDisabled: Z,
    sendMessagesDisabled: E,
    readMessageHistoryDisabled: T,
    inGameMentionsExperiment: s
  });
  return (0, i.jsxs)(C.ZP.Content, {
    className: z.layoutStyle,
    children: [_.map((e, n) => (0, i.jsx)(N.Z, {
      spec: e,
      allow: t.allow,
      deny: t.deny,
      onChange: x,
      permissionRender: j,
      className: z.permissionsForm,
      hasBypassSlowmodePermission: c
    }, n)), d === t.id ? null : (0, i.jsx)(u.Button, {
      variant: "critical-secondary",
      text: F.intl.format(F.t.txPV7k, {
        name: f()
      }),
      onClick: () => {
        let e = f();
        h.Z.show({
          title: F.intl.string(F.t.GuPYQB),
          body: F.intl.format(F.t.xERCnZ, {
            name: e
          }),
          cancelText: F.intl.string(F.t["ETE/oC"]),
          onConfirm: () => g.Z.clearPermissionOverwrite(m, t.id)
        })
      }
    })]
  })
}

function Q(e) {
  let {
    guildId: t,
    channelId: n,
    user: l
  } = e, r = l.getAvatarURL(t, 32), s = k.ZP.getNickname(t, n, l), a = U.ZP.useUserTag(l), o = null, c = null;
  return o = null != s ? s : l.hasAvatarForGuild(t) ? l.username : a, (null != s || l.hasAvatarForGuild(t)) && (c = (0, i.jsxs)("div", {
    className: z.userRowSubText,
    children: [l.hasAvatarForGuild(t) ? (0, i.jsx)(u.qEK, {
      className: z.userRowSubAvatar,
      size: u.EFr.SIZE_16,
      src: l.getAvatarURL(true, 16),
      "aria-label": l.username
    }) : null, (0, i.jsx)(u.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: a
    })]
  })), (0, i.jsxs)("div", {
    className: z.inline,
    children: [(0, i.jsx)(u.qEK, {
      size: u.EFr.SIZE_32,
      src: r,
      "aria-label": l.username,
      className: z.userRowAvatar
    }), (0, i.jsxs)("div", {
      className: z.userRowText,
      children: [(0, i.jsx)(u.Text, {
        className: z.userRowText,
        variant: "text-md/normal",
        children: o
      }), c]
    })]
  })
}

function K(e) {
  return "object" == typeof e && null != e && "colorString" in e && "name" in e
}

function $(e) {
  let {
    guild: t,
    channel: n,
    permissionOverwrites: l,
    onClose: r,
    onSelect: a,
    position: c
  } = e, d = (0, o.e7)([R.Z], () => R.Z.getSortedRoles(t.id)), u = (0, o.Wu)([_.ZP], () => _.ZP.getMemberIds(t.id));
  return (0, i.jsx)(v.Z, {
    label: F.intl.string(F.t.lT5Zth),
    placeholder: F.intl.string(F.t.V2pZRh),
    "aria-label": F.intl.string(F.t["Uvt+p/"]),
    sections: [F.intl.string(F.t["LPJmL/"]), F.intl.string(F.t["9Oq93m"])],
    onRenderResult: e => {
      if (K(e)) {
        let t;
        return null != e.colorString && (t = {
          color: e.colorString
        }), (0, i.jsx)("span", {
          style: t,
          children: e.name
        })
      }
      if (e instanceof E.Z) return (0, i.jsx)(Q, {
        guildId: t.id,
        channelId: n.id,
        user: e
      })
    },
    onFilterResults: (e, t) => 0 === t ? d.filter(t => null == l[t.id] && e(t.name)) : s()(u).map(L.default.getUser).filter(M.lm).filter(t => null == l[t.id] && e(t.username.toLowerCase())).sortBy(e => e.username.toLowerCase()).value(),
    onQueryChange: e => {
      A.Z.requestMembers(t.id, e, 20)
    },
    onSelect: e => {
      null != e && (K(e) ? a(e.id, b.BN.ROLE) : e instanceof E.Z && a(e.id, b.BN.MEMBER))
    },
    onClose: r,
    position: c
  })
}

function ee() {
  let e = Chunk647438.useRef(null),
    {
      channel: t,
      permissionOverwrites: r,
      selectedOverwriteId: a
    } = (0, Chunk442837.cj)([Chunk277053.Z], () => Chunk277053.Z),
    c = null == exports ? true : exports.getGuildId(),
    {
      guild: v,
      sortedGuildRoles: y
    } = (0, Chunk442837.cj)([Chunk430824.Z, Chunk485386.Z], () => {
      let e = null != Chunk796027 ? Chunk430824.Z.getGuild(Chunk796027) : true,
        t = null != module ? Chunk485386.Z.getSortedRoles(module.id) : true;
      return {
        guild: module,
        sortedGuildRoles: exports
      }
    }, [Chunk796027]),
    S = (0, Chunk188857.Z)(Chunk796027, Chunk392711),
    N = (0, Chunk410030.ZP)(),
    O = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.roleStyle),
    E = Chunk647438.useCallback((e, l) => {
      if (null == t) return null;
      (0, m.jW)(e, async () => {
        let {
          id: e,
          role: r,
          name: s
        } = l, a = null != v ? (0, Z.lV)(v) : null, o = null != r && a === r.id, {
          default: c
        } = await n.e("83884").then(n.bind(n, 905687));
        return n => (0, i.jsx)(c, Y(q({}, n), {
          id: e,
          role: r,
          handleDeletePermission: o ? true : () => {
            h.Z.show({
              title: F.intl.string(F.t.GuPYQB),
              body: F.intl.format(F.t.xERCnZ, {
                name: s
              }),
              cancelText: F.intl.string(F.t["ETE/oC"]),
              onConfirm: () => g.Z.clearPermissionOverwrite(t.id, e)
            })
          }
        }))
      })
    }, [exports, Chunk940639]);
  if (null == Chunk940639 || null == Chunk409513 || null == exports || null == Chunk392711) return null;
  let T = e => {
      let {
        position: n,
        closePopout: l
      } = e;
      return (0, i.jsx)($, {
        guild: v,
        channel: t,
        permissionOverwrites: r,
        position: null != n ? n : "bottom",
        onSelect: _,
        onClose: l
      })
    },
    _ = (e, n) => {
      g.Z.updatePermissionOverwrite(t.id, {
        id: e,
        type: n,
        allow: H.Hn,
        deny: H.Hn
      }).then(() => (0, p.Aj)(e))
    };
  null != Chunk392711 && null == Chunk392711[Chunk940639.id] && (Chunk392711[Chunk940639.id] = Chunk700785.we(Chunk940639.id));
  let I = Chunk409513.filter(e => {
      var t;
      return (null == (t = r[e.id]) ? true : t.type) === b.BN.ROLE
    }).map(e => (0, i.jsx)(f.Z, {
      theme: N,
      roleStyle: O,
      id: e.id,
      role: e,
      guild: v,
      color: e.colorString,
      "aria-label": e.name,
      onContextMenu: t => E(t, {
        id: e.id,
        name: e.name,
        role: e
      }),
      children: e.name
    }, "".concat(a, "-").concat(e.id))),
    L = s()(Chunk627050).sortBy(e => e.username.toLowerCase()).map(e => {
      let t = e.getAvatarURL(v.id, 24);
      return (0, i.jsx)(f.Z, {
        id: e.id,
        guild: v,
        theme: N,
        roleStyle: O,
        "aria-label": U.ZP.getUserTag(e, {
          decoration: "never"
        }),
        onContextMenu: t => E(t, {
          id: e.id,
          name: e.username
        }),
        children: (0, i.jsxs)("div", {
          className: z.inline,
          children: [(0, i.jsx)(u.qEK, {
            size: u.EFr.SIZE_20,
            src: t,
            "aria-label": e.username,
            className: z.xsmallAvatar
          }), (0, i.jsx)("span", {
            className: z.username,
            children: U.ZP.getUserTag(e)
          })]
        })
      }, "".concat(a, "-").concat(e.id))
    }).value();
  return (0, Chunk951288.jsx)(Chunk325476.ZP.Sidebar, {
    className: Chunk198750.layoutStyle,
    scrollable: true,
    children: (0, Chunk951288.jsxs)(Chunk481060.njP, {
      onItemSelect: Chunk741361.Aj,
      selectedItem: Chunk149765,
      orientation: "vertical",
      children: [(() => {
        let t = (0, Chunk780384.wj)(Chunk722252) ? require("./521715.js") : require("./299603.js");
        return (0, Chunk951288.jsx)(Chunk481060.yRy, {
          targetElementRef: module,
          renderPopout: Chunk388610,
          position: "bottom",
          autoInvert: false,
          clickTrap: true,
          children: n => (0, i.jsx)(u.njP.Header, Y(q({
            ref: e
          }, n), {
            children: (0, i.jsxs)("div", {
              className: z.sidebarHeaderDefault,
              children: [(0, i.jsxs)("span", {
                children: [F.intl.string(F.t["LPJmL/"]), "/", F.intl.string(F.t["9Oq93m"])]
              }), (0, i.jsx)("img", {
                alt: "",
                className: z.sidebarHeader,
                src: t
              })]
            })
          }))
        })
      })(), Chunk496675, Chunk594174, (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
        children: [(0, Chunk951288.jsx)(Chunk481060.njP.Separator, {
          style: {
            marginTop: 20,
            marginBottom: 14
          }
        }), (0, Chunk951288.jsx)(Chunk481060.Anchor, {
          href: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PERMISSIONS_TUTORIAL),
          target: "_blank",
          children: (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            color: "text-link",
            children: Chunk388032.intl.string(Chunk388032.t.pfoA83)
          })
        })]
      })]
    })
  })
}

function et() {
  let {
    channel: e,
    permissionOverwrites: t,
    selectedOverwriteId: n
  } = (0, Chunk442837.cj)([Chunk277053.Z], () => Chunk277053.Z);
  if (null == (0, Chunk442837.e7)([Chunk430824.Z], () => null != module ? Chunk430824.Z.getGuild(module.getGuildId()) : null) || null == module || null == exports || null == require) return null;
  let l = exports[require];
  return (0, Chunk951288.jsxs)(Chunk325476.ZP, {
    className: Chunk198750.container,
    children: [(0, Chunk951288.jsx)(ee, {}), (0, Chunk951288.jsx)(X, {
      overwrite: Chunk647438
    })]
  })
}