/** Chunk was on 13616 **/
/** chunk id: 270394, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => X
}), require("./997841.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  d = require.n(Chunk392711),
  Chunk533800 = require("./533800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk240872 = require("./240872.jsx"),
  Chunk225433 = require("./225433.jsx"),
  Chunk129861 = require("./129861.jsx"),
  Chunk493544 = require("./493544.js"),
  Chunk700582 = require("./700582.js"),
  Chunk410030 = require("./410030.js"),
  Chunk835473 = require("./835473.js"),
  Chunk933557 = require("./933557.js"),
  Chunk346486 = require("./346486.js"),
  Chunk600164 = require("./600164.js"),
  Chunk925329 = require("./925329.js"),
  Chunk666657 = require("./666657.js"),
  Chunk664452 = require("./664452.js"),
  Chunk560114 = require("./560114.js"),
  Chunk685929 = require("./685929.js"),
  Chunk592125 = require("./592125.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk630388 = require("./630388.js"),
  Chunk965638 = require("./965638.js"),
  Chunk757539 = require("./757539.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk541056 = require("./541056.js"),
  Chunk588866 = require("./588866.js"),
  Chunk20493 = require("./20493.js");

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

function z(e, t) {
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
let F = {
    INVITER: 3,
    INVITE_CODE: 3,
    USES: 1,
    EXPIRES: 2
  },
  V = {
    HEADER: 0,
    ACTIONS_V1: 1,
    ACTIONS_V2: 2,
    TABLE: 3
  };

function K(e) {
  let {
    isDisabled: t,
    inviter: n,
    showChannel: r,
    channel: l,
    inviteSource: a,
    inviteSourceTrailingContent: s,
    uses: c,
    expiresAt: d,
    onRevokeInvite: u
  } = e;
  return <S.Z className={o()(U.inviteSettingsInviteRow, W.card, {
      [U.inviteDisabledRow]: t
    })}>{<S.Z grow={F.INVITER} basis={0} align={S.Z.Align.CENTER} className={U.text}>{null != n && <O.Z user={n} size={g.EFr.SIZE_24} className={U.avatar} />}{<div>{null != n && <j.Z discriminatorClass={U.discriminator} user={n} />}{r && null != l && <g.Text variant={"text-xs/normal"} color={"header-secondary"}>{(0, C.F6)(l, A.default, k.Z, true)}</g.Text>}</div>}</S.Z>}{<S.Z grow={F.INVITE_CODE} shrink={1} basis={0} align={S.Z.Align.CENTER} className={U.text}><div className={U.inviteSourceContainer}>{a}{s}</div></S.Z>}{<S.Z grow={F.USES} basis={0} align={S.Z.Align.CENTER} className={U.text}><g.Text className={U.uses} variant={"text-sm/normal"}>{c}</g.Text></S.Z>}{<S.Z grow={F.EXPIRES} basis={0} align={S.Z.Align.CENTER} className={o()(U.text, U.countdownColumn)}><g.Text className={U.countdown} variant={"text-sm/normal"}>{d}</g.Text></S.Z>}{<x.Z className={U.revokeInvite} onClick={u} />}</S.Z>
}

function q(e) {
  var t;
  let {
    invite: n,
    showChannel: r = false,
    inviteDisabled: l = false,
    hide: o = false
  } = e, a = n.uses;
  return n.maxUses > 0 && (a = "".concat(n.uses, "/").concat(n.maxUses)), <K isDisabled={l} inviter={n.inviter} showChannel={r} channel={n.channel} inviteSource={(0, i.jsx)(g.Text, {
      className: U.inviteCode,
      variant: "text-sm/normal",
      children: o ? "..." : n.code
    })} inviteSourceTrailingContent={!o && (0, R.yE)(null != (t = n.flags) ? t : 0, u.$.IS_APPLICATION_BYPASS) ? (0, i.jsxs)("div", {
      className: U.bypass,
      children: [(0, i.jsx)(g.Text, {
        className: U.text,
        variant: "text-xs/normal",
        color: "text-muted",
        children: B.intl.string(B.t["1i1bUl"])
      }), (0, i.jsx)(g.ua7, {
        text: B.intl.string(B.t["jvd/LC"]),
        children: e => (0, i.jsx)(g.d3s, z(G({
          size: "xxs",
          color: "currentColor"
        }, e), {
          className: U.infoIcon
        }))
      })]
    }) : null} uses={a} expiresAt={(0, i.jsx)(N.Z, {
      deadline: n.getExpiresAt()
    })} onRevokeInvite={() => {
      f.ZP.revokeInvite(n)
    }} />
}

function Y(e) {
  let {
    applicationId: t,
    channel: r,
    showChannel: l = false,
    inviteDisabled: o = false
  } = e, a = (0, _.q)(t), s = (0, p.e7)([A.default], () => {
    var e;
    return A.default.getUser(null == (e = r.linkedLobby) ? true : e.linked_by)
  }), c = (0, P.Y)(r);
  return <K isDisabled={o} inviter={s} showChannel={l} channel={r} inviteSource={(0, i.jsxs)("div", {
      className: U.linkedChannelJoinSource,
      children: [(0, i.jsx)(I.Z, {
        game: a,
        size: I.Z.Sizes.XXSMALL
      }), (0, i.jsx)(g.Text, {
        className: U.linkedChannelJoinSourceText,
        variant: "text-sm/normal",
        children: null == a ? true : a.name
      })]
    })} uses={B.intl.string(B.t.jHpxws)} expiresAt={B.intl.string(B.t.PqEzn5)} onRevokeInvite={() => {
      if (!c || null == a) return void h.Z.show({
        title: B.intl.string(B.t.JmUENj),
        body: B.intl.string(B.t.SrvsMD)
      });
      (0, g.ZDy)(async () => {
        let {
          default: e
        } = await n.e("30019").then(n.bind(n, 719498));
        return t => (0, i.jsx)(e, z(G({}, t), {
          channel: r,
          application: a
        }))
      })
    }} />
}

function X(e) {
  let {
    invites: t,
    guild: l,
    hide: o,
    canCreateInvites: a,
    withV2Actions: c,
    channel: u = null,
    showChannel: f = false,
    loading: h = false
  } = e;
  s()(null != l, "guild is required");
  let x = (0, y.ZP)(),
    j = (0, D.MQ)(l),
    O = (0, D.O4)(l),
    _ = r.useMemo(() => null == t || h ? [] : d()(t).sortBy(e => {
      var t, n;
      return (null != (n = null == (t = e.inviter) ? true : t.username) ? n : "").toLowerCase()
    }).value(), [t, h]),
    C = (0, p.Wu)([T.Z], () => T.Z.getSortedLinkedChannelsForGuild(l.id).filter(e => null == u || e.id === u.id)),
    N = r.useMemo(() => h ? [] : [..._.map(e => ({
      type: "invite",
      data: e
    })), ...C.map(e => ({
      type: "channel",
      data: e
    }))], [_, C, h]),
    I = () => {
      (0, g.ZDy)(async () => e => <E.default{...z(G({}, e), {
        channel: u,
        guild: l,
        source: M.t4x.SETTINGS_INVITE
      })} />)
    },
    [P, k] = r.useState(62),
    A = () => {
      let e = {
        source: w.Zu.GUILD_SETTINGS
      };
      (0, g.ZDy)(async () => t => <Z.default{...z(G({}, t), {
        guildId: l.id,
        analyticsData: e
      })} />)
    };
  return <v.Xi sections={[1, +!c, +!!c, Math.max(1, N.length)]} renderSection={e => {
      let {
        section: t
      } = e;
      if (t === V.TABLE)
        if (0 === N.length && !h) return (0, i.jsx)("div", {
          children: (0, i.jsxs)(g.ubH, {
            theme: x,
            children: [(0, i.jsx)(g.oxh, {
              darkSrc: n(914814),
              lightSrc: n(370392),
              width: 256,
              height: 130
            }), (0, i.jsx)(g.OZU, {
              note: B.intl.string(B.t.F53CAQ),
              children: B.intl.string(B.t["+nLJkZ"])
            })]
          })
        }, "empty-state");
        else return (0, i.jsxs)(S.Z, {
          children: [(0, i.jsx)(S.Z.Child, {
            grow: F.INVITER,
            basis: 0,
            className: H.marginReset,
            children: (0, i.jsx)(g.vwX, {
              children: B.intl.string(B.t.EgHyKy)
            })
          }), (0, i.jsx)(S.Z.Child, {
            basis: 0,
            grow: F.INVITE_CODE,
            className: H.marginReset,
            children: (0, i.jsx)(g.vwX, {
              children: C.length > 0 ? B.intl.string(B.t.l7VISU) : B.intl.string(B.t.LBlFEB)
            })
          }), (0, i.jsx)(S.Z.Child, {
            grow: F.USES,
            basis: 0,
            children: (0, i.jsx)(g.vwX, {
              children: B.intl.string(B.t.erWrmJ)
            })
          }), (0, i.jsx)(S.Z.Child, {
            grow: F.EXPIRES,
            basis: 0,
            children: (0, i.jsx)(g.vwX, {
              children: B.intl.string(B.t["1aM27e"])
            })
          })]
        }, "table-header");
      return null
    }} renderRow={e => {
      let {
        section: t,
        row: n
      } = e;
      if (t === V.HEADER) return (0, i.jsx)(g.X6q, {
        variant: "heading-lg/semibold",
        color: "header-primary",
        className: U.header,
        children: B.intl.string(B.t["9F90iY"])
      });
      if (t === V.ACTIONS_V1) return (0, i.jsxs)(g.hjN, {
        className: U.actions,
        children: [(0, i.jsx)(g.R94, {
          className: H.marginBottom20,
          type: g.geA.DESCRIPTION,
          children: true === a ? B.intl.format(B.t["97VdNj"], {
            onCreateInvite: I
          }) : B.intl.string(B.t.WDw38P)
        }), (0, i.jsxs)("div", {
          className: U.inviteDisabledContainer,
          children: [(0, i.jsx)(b.zx, {
            size: b.zx.Sizes.SMALL,
            color: O ? b.zx.Colors.BRAND : b.zx.Colors.RED,
            disabled: !j,
            onClick: A,
            children: O ? B.intl.string(B.t["/dbw3N"]) : B.intl.string(B.t.Uwsjn5)
          }), O && (0, i.jsxs)("div", {
            className: U.inviteDisabledTip,
            children: [(0, i.jsx)(g.Mgn, {
              size: "custom",
              width: 20,
              height: 20,
              color: m.Z.unsafe_rawColors.YELLOW_300.css
            }), (0, i.jsx)(g.Text, {
              variant: "text-sm/normal",
              children: B.intl.string(B.t["2LLbj4"])
            })]
          })]
        }), (0, i.jsx)(g.$i$, {
          className: U.headerDivider
        })]
      }, "header");
      if (t === V.ACTIONS_V2) return (0, i.jsx)(L.Y, {
        hasInvites: _.length > 0,
        setHeight: k,
        onShowDisableInvites: A,
        onShowInviteModal: I,
        hasInviteDisabledPermission: j,
        invitesDisabled: O,
        canCreateInvites: a
      }, "actions-v2");
      if (t === V.TABLE) {
        if (0 === N.length && 0 === n && h) return (0, i.jsx)(g.$jN, {
          className: H.marginTop20,
          type: g.$jN.Type.SPINNING_CIRCLE
        }, "spinner");
        let e = N[n];
        switch (null == e ? true : e.type) {
          case "invite":
            return (0, i.jsx)(q, {
              hide: o,
              invite: e.data,
              showChannel: f,
              inviteDisabled: O
            }, e.data.code);
          case "channel":
            var r;
            return (0, i.jsx)(Y, {
              applicationId: null == (r = e.data.linkedLobby) ? true : r.application_id,
              channel: e.data,
              showChannel: f,
              inviteDisabled: O
            }, e.data.id);
          default:
            return null
        }
      }
    }} rowHeight={(e, t) => e === V.HEADER ? 64 : e === V.ACTIONS_V1 ? 109 : e === V.ACTIONS_V2 ? P : e === V.TABLE ? 0 === N.length && 0 === t && h ? 62 : 62 * (null != N[t]) : 0} sectionHeight={e => e === V.TABLE ? 0 !== N.length || h ? 28 : 240 : 0} />
}