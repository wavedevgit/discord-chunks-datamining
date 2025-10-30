/** Chunk was on 86915 **/
/** chunk id: 856606, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => ee,
  n: () => Y
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
  Chunk603124 = require("./603124.js");

function z(e) {
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

function q(e, t) {
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
let Y = Chunk442837.ZP.connectStores([Chunk277053.Z, Chunk388610.Z], () => {
  let e = Chunk388610.Z.getChannel();
  return {
    submitting: Chunk277053.Z.formState === Chunk981631.QZA.SUBMITTING,
    onReset() {
      (0, Chunk741361.S1)()
    },
    onSave() {
      if (null == module) return;
      let t = Chunk277053.Z.editedPermissionIds.reduce((e, t) => {
        let n = E.Z.getPermissionOverwrite(t);
        return null != n && e.push(n), e
      }, []);
      (0, Chunk741361.hw)(module.id, exports)
    }
  }
})(Chunk796027.Z);

function J(e) {
  let {
    overwrite: t
  } = e, n = (0, o.e7)([E.Z], () => E.Z.channel), l = (0, o.e7)([R.Z], () => null != n ? R.Z.getGuild(n.getGuildId()) : null), r = (0, o.e7)([_.Z], () => null != l && null != t && t.type === b.BN.ROLE ? _.Z.getRole(l.id, t.id) : true), s = C.N.useExperiment({
    guildId: null == n ? true : n.guild_id,
    location: "ChannelSettingsPermissions"
  }).enabled;
  if (null == n || null == l || null == t) return null;
  let {
    guild_id: c,
    id: d
  } = n, m = () => {
    var e;
    if (null == R.Z.getGuild(c)) return "";
    let n = t.type === b.BN.MEMBER ? I.default.getUser(t.id) : true,
      i = null != (e = null == n ? true : n.username) ? e : "";
    return null != r ? r.name : i
  }, f = (e, i) => {
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
    if (P.Z.can(e, n, {
        [t.id]: q(z({}, t), {
          allow: l,
          deny: r
        })
      }))(0, p.kY)(n, t.id, l, r);
    else {
      let e;
      if (t.type === b.BN.MEMBER) {
        let n = I.default.getUser(t.id);
        null != n && (e = H.ZP.getName(n))
      } else if (t.type === b.BN.ROLE) {
        let i = R.Z.getGuild(n.getGuildId());
        if (null != i) {
          let n = _.Z.getRole(i.id, t.id);
          null != n && (e = n.name)
        }
      }
      U.X(e)
    }
  }, x = e => {
    let t = P.Z.can(V.Plq.ADMINISTRATOR, l) || P.Z.can(V.Plq.MANAGE_ROLES, n, true, true, true);
    return n.isGuildStageVoice() && N.xS.has(e) ? W.intl.string(W.t.bTS5lf) : !((!a.fS(e, V.Plq.MANAGE_ROLES) || t) && (null == e || P.Z.can(e, l) || t)) && W.intl.string(W.t.nOtPMM)
  }, j = t.id === c, v = n.isForumLikeChannel() && a.e$(t.deny, V.Plq.SEND_MESSAGES), O = a.e$(t.deny, V.Plq.SEND_MESSAGES), Z = a.e$(t.deny, V.Plq.READ_MESSAGE_HISTORY), w = k.Z.generateChannelPermissionSpec(c, n, j, {
    createPostsDisabled: v,
    sendMessagesDisabled: O,
    readMessageHistoryDisabled: Z,
    inGameMentionsExperiment: s
  });
  return (0, i.jsxs)(y.ZP.Content, {
    className: F.layoutStyle,
    children: [w.map((e, n) => (0, i.jsx)(S.Z, {
      spec: e,
      allow: t.allow,
      deny: t.deny,
      onChange: f,
      permissionRender: x,
      className: F.permissionsForm
    }, n)), c === t.id ? null : (0, i.jsx)(u.Button, {
      variant: "critical-secondary",
      text: W.intl.format(W.t.txPV7k, {
        name: m()
      }),
      onClick: () => {
        let e = m();
        h.Z.show({
          title: W.intl.string(W.t.GuPYQB),
          body: W.intl.format(W.t.xERCnZ, {
            name: e
          }),
          cancelText: W.intl.string(W.t["ETE/oC"]),
          onConfirm: () => g.Z.clearPermissionOverwrite(d, t.id)
        })
      }
    })]
  })
}

function X(e) {
  let {
    guildId: t,
    channelId: n,
    user: l
  } = e, r = l.getAvatarURL(t, 32), s = D.ZP.getNickname(t, n, l), a = H.ZP.useUserTag(l), o = null, c = null;
  return o = null != s ? s : l.hasAvatarForGuild(t) ? l.username : a, (null != s || l.hasAvatarForGuild(t)) && (c = (0, i.jsxs)("div", {
    className: F.userRowSubText,
    children: [l.hasAvatarForGuild(t) ? (0, i.jsx)(u.qEK, {
      className: F.userRowSubAvatar,
      size: u.EFr.SIZE_16,
      src: l.getAvatarURL(true, 16),
      "aria-label": l.username
    }) : null, (0, i.jsx)(u.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: a
    })]
  })), (0, i.jsxs)("div", {
    className: F.inline,
    children: [(0, i.jsx)(u.qEK, {
      size: u.EFr.SIZE_32,
      src: r,
      "aria-label": l.username,
      className: F.userRowAvatar
    }), (0, i.jsxs)("div", {
      className: F.userRowText,
      children: [(0, i.jsx)(u.Text, {
        className: F.userRowText,
        variant: "text-md/normal",
        children: o
      }), c]
    })]
  })
}

function Q(e) {
  return "object" == typeof e && null != e && "colorString" in e && "name" in e
}

function K(e) {
  let {
    guild: t,
    channel: n,
    permissionOverwrites: l,
    onClose: r,
    onSelect: a,
    position: c
  } = e, d = (0, o.e7)([_.Z], () => _.Z.getSortedRoles(t.id)), u = (0, o.Wu)([T.ZP], () => T.ZP.getMemberIds(t.id));
  return (0, i.jsx)(v.Z, {
    label: W.intl.string(W.t.lT5Zth),
    placeholder: W.intl.string(W.t.V2pZRh),
    "aria-label": W.intl.string(W.t["Uvt+p/"]),
    sections: [W.intl.string(W.t["LPJmL/"]), W.intl.string(W.t["9Oq93m"])],
    onRenderResult: e => {
      if (Q(e)) {
        let t;
        return null != e.colorString && (t = {
          color: e.colorString
        }), (0, i.jsx)("span", {
          style: t,
          children: e.name
        })
      }
      if (e instanceof Z.Z) return (0, i.jsx)(X, {
        guildId: t.id,
        channelId: n.id,
        user: e
      })
    },
    onFilterResults: (e, t) => 0 === t ? d.filter(t => null == l[t.id] && e(t.name)) : s()(u).map(I.default.getUser).filter(L.lm).filter(t => null == l[t.id] && e(t.username.toLowerCase())).sortBy(e => e.username.toLowerCase()).value(),
    onQueryChange: e => {
      M.Z.requestMembers(t.id, e, 20)
    },
    onSelect: e => {
      null != e && (Q(e) ? a(e.id, b.BN.ROLE) : e instanceof Z.Z && a(e.id, b.BN.MEMBER))
    },
    onClose: r,
    position: c
  })
}

function $() {
  let e = Chunk647438.useRef(null),
    {
      channel: t,
      permissionOverwrites: r,
      selectedOverwriteId: a
    } = (0, Chunk442837.cj)([Chunk277053.Z], () => Chunk277053.Z),
    c = null == exports ? true : exports.getGuildId(),
    {
      guild: v,
      sortedGuildRoles: C
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
    Z = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.roleStyle),
    w = Chunk647438.useCallback((e, l) => {
      if (null == t) return null;
      (0, m.jW)(e, async () => {
        let {
          id: e,
          role: r,
          name: s
        } = l, a = null != v ? (0, O.lV)(v) : null, o = null != r && a === r.id, {
          default: c
        } = await n.e("83884").then(n.bind(n, 905687));
        return n => (0, i.jsx)(c, q(z({}, n), {
          id: e,
          role: r,
          handleDeletePermission: o ? true : () => {
            h.Z.show({
              title: W.intl.string(W.t.GuPYQB),
              body: W.intl.format(W.t.xERCnZ, {
                name: s
              }),
              cancelText: W.intl.string(W.t["ETE/oC"]),
              onConfirm: () => g.Z.clearPermissionOverwrite(t.id, e)
            })
          }
        }))
      })
    }, [exports, Chunk940639]);
  if (null == Chunk940639 || null == Chunk627050 || null == exports || null == Chunk392711) return null;
  let T = e => {
      let {
        position: n,
        closePopout: l
      } = e;
      return (0, i.jsx)(K, {
        guild: v,
        channel: t,
        permissionOverwrites: r,
        position: null != n ? n : "bottom",
        onSelect: P,
        onClose: l
      })
    },
    P = (e, n) => {
      g.Z.updatePermissionOverwrite(t.id, {
        id: e,
        type: n,
        allow: B.Hn,
        deny: B.Hn
      }).then(() => (0, p.Aj)(e))
    };
  null != Chunk392711 && null == Chunk392711[Chunk940639.id] && (Chunk392711[Chunk940639.id] = Chunk700785.we(Chunk940639.id));
  let I = Chunk627050.filter(e => {
      var t;
      return (null == (t = r[e.id]) ? true : t.type) === b.BN.ROLE
    }).map(e => (0, i.jsx)(f.Z, {
      theme: N,
      roleStyle: Z,
      id: e.id,
      role: e,
      guild: v,
      color: e.colorString,
      "aria-label": e.name,
      onContextMenu: t => w(t, {
        id: e.id,
        name: e.name,
        role: e
      }),
      children: e.name
    }, "".concat(a, "-").concat(e.id))),
    L = s()(Chunk722252).sortBy(e => e.username.toLowerCase()).map(e => {
      let t = e.getAvatarURL(v.id, 24);
      return (0, i.jsx)(f.Z, {
        id: e.id,
        guild: v,
        theme: N,
        roleStyle: Z,
        "aria-label": H.ZP.getUserTag(e, {
          decoration: "never"
        }),
        onContextMenu: t => w(t, {
          id: e.id,
          name: e.username
        }),
        children: (0, i.jsxs)("div", {
          className: F.inline,
          children: [(0, i.jsx)(u.qEK, {
            size: u.EFr.SIZE_20,
            src: t,
            "aria-label": e.username,
            className: F.xsmallAvatar
          }), (0, i.jsx)("span", {
            className: F.username,
            children: H.ZP.getUserTag(e)
          })]
        })
      }, "".concat(a, "-").concat(e.id))
    }).value();
  return (0, Chunk951288.jsx)(Chunk325476.ZP.Sidebar, {
    className: Chunk603124.layoutStyle,
    scrollable: true,
    children: (0, Chunk951288.jsxs)(Chunk481060.njP, {
      onItemSelect: Chunk741361.Aj,
      selectedItem: Chunk149765,
      orientation: "vertical",
      children: [(() => {
        let t = (0, Chunk780384.wj)(Chunk146085) ? require("./521715.js") : require("./299603.js");
        return (0, Chunk951288.jsx)(Chunk481060.yRy, {
          targetElementRef: module,
          renderPopout: Chunk271383,
          position: "bottom",
          autoInvert: false,
          clickTrap: true,
          children: n => (0, i.jsx)(u.njP.Header, q(z({
            ref: e
          }, n), {
            children: (0, i.jsxs)("div", {
              className: F.sidebarHeaderDefault,
              children: [(0, i.jsxs)("span", {
                children: [W.intl.string(W.t["LPJmL/"]), "/", W.intl.string(W.t["9Oq93m"])]
              }), (0, i.jsx)("img", {
                alt: "",
                className: F.sidebarHeader,
                src: t
              })]
            })
          }))
        })
      })(), Chunk594174, Chunk823379, (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
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

function ee() {
  let {
    channel: e,
    permissionOverwrites: t,
    selectedOverwriteId: n
  } = (0, Chunk442837.cj)([Chunk277053.Z], () => Chunk277053.Z);
  if (null == (0, Chunk442837.e7)([Chunk430824.Z], () => null != module ? Chunk430824.Z.getGuild(module.getGuildId()) : null) || null == module || null == exports || null == require) return null;
  let l = exports[require];
  return (0, Chunk951288.jsxs)(Chunk325476.ZP, {
    className: Chunk603124.container,
    children: [(0, Chunk951288.jsx)($, {}), (0, Chunk951288.jsx)(J, {
      overwrite: Chunk647438
    })]
  })
}