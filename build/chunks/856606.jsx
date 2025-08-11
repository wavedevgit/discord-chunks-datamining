/** Chunk was on 86915 **/
/** chunk id: 856606, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => ee,
  n: () => J
}), require("./539854.js"), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk493683 = require("./493683.js"),
  Chunk741361 = require("./741361.js"),
  Chunk239091 = require("./239091.js"),
  Chunk668390 = require("./668390.jsx"),
  Chunk144991 = require("./144991.jsx"),
  Chunk852860 = require("./852860.jsx"),
  Chunk911969 = require("./911969.js"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk940639 = require("./940639.js"),
  Chunk325476 = require("./325476.jsx"),
  Chunk190263 = require("./190263.js"),
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
  Chunk483112 = require("./483112.js");

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

function X(e, t) {
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
        let n = Z.Z.getPermissionOverwrite(t);
        return null != n && e.push(n), e
      }, []);
      (0, Chunk741361.hw)(module.id, exports)
    }
  }
})(Chunk852860.Z);

function q(e) {
  let {
    overwrite: t
  } = e, n = (0, o.e7)([Z.Z], () => Z.Z.channel), l = (0, o.e7)([_.Z], () => null != n ? _.Z.getGuild(n.getGuildId()) : null), r = (0, o.e7)([R.Z], () => null != l && null != t && t.type === j.BN.ROLE ? R.Z.getRole(l.id, t.id) : true), s = N.D.useExperiment({
    guildId: null == n ? true : n.guild_id,
    location: "ChannelSettingsPermissions"
  }).enabled;
  if (null == n || null == l || null == t) return null;
  let {
    guild_id: c,
    id: m
  } = n, p = () => {
    var e;
    if (null == _.Z.getGuild(c)) return "";
    let n = t.type === j.BN.MEMBER ? P.default.getUser(t.id) : true,
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
        [t.id]: X(z({}, t), {
          allow: l,
          deny: r
        })
      }))(0, g.kY)(n, t.id, l, r);
    else {
      let e;
      if (t.type === j.BN.MEMBER) {
        let n = P.default.getUser(t.id);
        null != n && (e = V.ZP.getName(n))
      } else if (t.type === j.BN.ROLE) {
        let i = _.Z.getGuild(n.getGuildId());
        if (null != i) {
          let n = R.Z.getRole(i.id, t.id);
          null != n && (e = n.name)
        }
      }
      U.X(e)
    }
  }, b = e => {
    let t = I.Z.can(W.Plq.ADMINISTRATOR, l) || I.Z.can(W.Plq.MANAGE_ROLES, n, true, true, true);
    return n.isGuildStageVoice() && S.xS.has(e) ? G.intl.string(G.t.bTS5lZ) : !((!a.fS(e, W.Plq.MANAGE_ROLES) || t) && (null == e || I.Z.can(e, l) || t)) && G.intl.string(G.t.nOtPMD)
  }, v = t.id === c, y = n.isForumLikeChannel() && a.e$(t.deny, W.Plq.SEND_MESSAGES), E = a.e$(t.deny, W.Plq.SEND_MESSAGES), O = a.e$(t.deny, W.Plq.READ_MESSAGE_HISTORY), w = k.Z.generateChannelPermissionSpec(c, n, v, {
    createPostsDisabled: y,
    sendMessagesDisabled: E,
    readMessageHistoryDisabled: O
  });
  return <C.ZP.Content className={F.layoutStyle}>{w.map((e, n) => <f.Z spec={e} allow={t.allow} deny={t.deny} onChange={x} permissionRender={b} className={F.permissionsForm} inPinPermissionExperiment={s} />)}{c === t.id ? null : <d.zxk variant={"critical-secondary"} text={G.intl.format(G.t.txPV7u, {
        name: p()
      })} onClick={() => {
        let e = p();
        u.Z.show({
          title: G.intl.string(G.t.GuPYQE),
          body: G.intl.format(G.t.xERCnZ, {
            name: e
          }),
          cancelText: G.intl.string(G.t["ETE/oK"]),
          onConfirm: () => h.Z.clearPermissionOverwrite(m, t.id)
        })
      }} />}</C.ZP.Content>
}

function Y(e) {
  let {
    guildId: t,
    channelId: n,
    user: l
  } = e, r = l.getAvatarURL(t, 32), s = M.ZP.getNickname(t, n, l), a = V.ZP.useUserTag(l), o = null, c = null;
  return o = null != s ? s : l.hasAvatarForGuild(t) ? l.username : a, (null != s || l.hasAvatarForGuild(t)) && (c = <div className={F.userRowSubText}>{l.hasAvatarForGuild(t) ? <d.qEK className={F.userRowSubAvatar} size={d.EFr.SIZE_16} src={l.getAvatarURL(true, 16)} aria-label={l.username} /> : null}{<d.Text variant={"text-xs/normal"} color={"text-muted"}>{a}</d.Text>}</div>), <div className={F.inline}>{<d.qEK size={d.EFr.SIZE_32} src={r} aria-label={l.username} className={F.userRowAvatar} />}{<div className={F.userRowText}>{<d.Text className={F.userRowText} variant={"text-md/normal"}>{o}</d.Text>}{c}</div>}</div>
}

function Q(e) {
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
  } = e, d = (0, o.e7)([R.Z], () => R.Z.getSortedRoles(t.id)), u = (0, o.Wu)([T.ZP], () => T.ZP.getMemberIds(t.id));
  return <y.Z label={G.intl.string(G.t.lT5Ztr)} placeholder={G.intl.string(G.t.V2pZRk)} aria-label={G.intl.string(G.t["Uvt+p6"])} sections={[G.intl.string(G.t.LPJmLy), G.intl.string(G.t["9Oq93t"])]} onRenderResult={e => {
      if (Q(e)) {
        let t;
        return null != e.colorString && (t = {
          color: e.colorString
        }), (0, i.jsx)("span", {
          style: t,
          children: e.name
        })
      }
      if (e instanceof O.Z) return (0, i.jsx)(Y, {
        guildId: t.id,
        channelId: n.id,
        user: e
      })
    }} onFilterResults={(e, t) => 0 === t ? d.filter(t => null == l[t.id] && e(t.name)) : s()(u).map(P.default.getUser).filter(A.lm).filter(t => null == l[t.id] && e(t.username.toLowerCase())).sortBy(e => e.username.toLowerCase()).value()} onQueryChange={e => {
      L.Z.requestMembers(t.id, e, 20)
    }} onSelect={e => {
      null != e && (Q(e) ? a(e.id, j.BN.ROLE) : e instanceof O.Z && a(e.id, j.BN.MEMBER))
    }} onClose={r} position={c} />
}

function K() {
  let e = Chunk73800.useRef(null),
    {
      channel: t,
      permissionOverwrites: r,
      selectedOverwriteId: a
    } = (0, Chunk442837.cj)([Chunk277053.Z], () => Chunk277053.Z),
    f = null == exports ? true : exports.getGuildId(),
    {
      guild: x,
      sortedGuildRoles: y
    } = (0, Chunk442837.cj)([Chunk430824.Z, Chunk485386.Z], () => {
      let e = null != Chunk144991 ? Chunk430824.Z.getGuild(Chunk144991) : true,
        t = null != module ? Chunk485386.Z.getSortedRoles(module.id) : true;
      return {
        guild: module,
        sortedGuildRoles: exports
      }
    }, [Chunk144991]),
    N = (0, Chunk188857.Z)(Chunk144991, Chunk392711),
    S = (0, Chunk410030.ZP)(),
    O = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.roleStyle),
    w = Chunk73800.useCallback((e, l) => {
      if (null == t) return null;
      (0, m.jW)(e, async () => {
        let {
          id: e,
          role: r,
          name: s
        } = l, a = null != x ? (0, E.lV)(x) : null, o = null != r && a === r.id, {
          default: c
        } = await n.e("83884").then(n.bind(n, 905687));
        return n => <c{...X(z({}, n), {
          id: e,
          role: r,
          handleDeletePermission: o ? true : () => {
            u.Z.show({
              title: G.intl.string(G.t.GuPYQE),
              body: G.intl.format(G.t.xERCnZ, {
                name: s
              }),
              cancelText: G.intl.string(G.t["ETE/oK"]),
              onConfirm: () => h.Z.clearPermissionOverwrite(t.id, e)
            })
          }
        })} />
      })
    }, [exports, Chunk852860]);
  if (null == Chunk852860 || null == Chunk940639 || null == exports || null == Chunk392711) return null;
  let T = e => {
      let {
        position: n,
        closePopout: l
      } = e;
      return <$ guild={x} channel={t} permissionOverwrites={r} position={null != n ? n : "bottom"} onSelect={I} onClose={l} />
    },
    I = (e, n) => {
      h.Z.updatePermissionOverwrite(t.id, {
        id: e,
        type: n,
        allow: B.Hn,
        deny: B.Hn
      }).then(() => (0, g.Aj)(e))
    };
  null != Chunk392711 && null == Chunk392711[Chunk852860.id] && (Chunk392711[Chunk852860.id] = Chunk700785.we(Chunk852860.id));
  let P = Chunk940639.filter(e => {
      var t;
      return (null == (t = r[e.id]) ? true : t.type) === j.BN.ROLE
    }).map(e => <p.Z theme={S} roleStyle={O} id={e.id} role={e} guild={x} color={e.colorString} aria-label={e.name} onContextMenu={t => w(t, {
        id: e.id,
        name: e.name,
        role: e
      })}>{e.name}</p.Z>),
    A = s()(Chunk190263).sortBy(e => e.username.toLowerCase()).map(e => {
      let t = e.getAvatarURL(x.id, 24);
      return <p.Z id={e.id} guild={x} theme={S} roleStyle={O} aria-label={V.ZP.getUserTag(e, {
          decoration: "never"
        })} onContextMenu={t => w(t, {
          id: e.id,
          name: e.username
        })}><div className={F.inline}>{<d.qEK size={d.EFr.SIZE_20} src={t} aria-label={e.username} className={F.xsmallAvatar} />}{<span className={F.username}>{V.ZP.getUserTag(e)}</span>}</div></p.Z>
    }).value();
  return <Chunk325476.ZP.Sidebar className={Chunk483112.layoutStyle} scrollable={true}><Chunk481060.njP onItemSelect={Chunk741361.Aj} selectedItem={Chunk149765} orientation={"vertical"}>{(() => {
        let t = (0, Chunk780384.wj)(Chunk146085) ? require("./521715.js") : require("./299603.js");
        return <Chunk481060.yRy targetElementRef={module} renderPopout={Chunk271383} position={"bottom"} autoInvert={false} clickTrap={true}>{n => (0, i.jsx)(d.njP.Header, X(z({
            ref: e
          }, n), {
            children: (0, i.jsxs)("div", {
              className: F.sidebarHeaderDefault,
              children: [(0, i.jsxs)("span", {
                children: [G.intl.string(G.t.LPJmLy), "/", G.intl.string(G.t["9Oq93t"])]
              }), (0, i.jsx)("img", {
                alt: "",
                className: F.sidebarHeader,
                src: t
              })]
            })
          }))}</Chunk481060.yRy>
      })()}{Chunk594174}{Chunk823379}{<Chunk73800.Fragment>{<Chunk481060.njP.Separator style={{
            marginTop: 20,
            marginBottom: 14
          }} />}{<Chunk481060.R94 type={Chunk481060.geA.DESCRIPTION}><Chunk481060.eee href={Chunk63063.Z.getArticleURL(Chunk981631.BhN.PERMISSIONS_TUTORIAL)} target={"_blank"}>{Chunk388032.intl.string(Chunk388032.t["pfoA8/"])}</Chunk481060.eee></Chunk481060.R94>}</Chunk73800.Fragment>}</Chunk481060.njP></Chunk325476.ZP.Sidebar>
}

function ee() {
  let {
    channel: e,
    permissionOverwrites: t,
    selectedOverwriteId: n
  } = (0, Chunk442837.cj)([Chunk277053.Z], () => Chunk277053.Z);
  if (null == (0, Chunk442837.e7)([Chunk430824.Z], () => null != module ? Chunk430824.Z.getGuild(module.getGuildId()) : null) || null == module || null == exports || null == require) return null;
  let l = exports[require];
  return <Chunk325476.ZP className={Chunk483112.container}>{<K />}{<q overwrite={Chunk73800} />}</Chunk325476.ZP>
}