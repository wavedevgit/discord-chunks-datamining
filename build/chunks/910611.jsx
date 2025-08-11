/** Chunk was on web.js **/
/** chunk id: 910611, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  TS: () => W,
  ud: () => Z,
  v0: () => H
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk835473 = require("./835473.js"),
  Chunk385499 = require("./385499.jsx"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk370774 = require("./370774.js"),
  Chunk703656 = require("./703656.js"),
  Chunk621853 = require("./621853.js"),
  Chunk484459 = require("./484459.js"),
  Chunk699516 = require("./699516.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk63063 = require("./63063.js"),
  Chunk374386 = require("./374386.js"),
  Chunk946734 = require("./946734.js"),
  Chunk99843 = require("./99843.jsx"),
  Chunk372564 = require("./372564.jsx"),
  Chunk984370 = require("./984370.js"),
  Chunk217314 = require("./217314.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk100658 = require("./100658.js");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      M(e, t, n[t])
    })
  }
  return e
}

function j(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function U(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let G = 14;

function B(e) {
  var t;
  let {
    channel: n,
    children: i
  } = e, o = (0, u.q)(null == (t = n.linkedLobby) ? true : t.application_id), [a, s] = (0, p.US)([l.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], true, true);
  if (null == o) return null;
  let d = I.ZP.getApplicationIconURL({
      id: o.id,
      icon: o.icon,
      size: G
    }),
    [f, _] = function() {
      return a !== l.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP ? [L.intl.string(L.t.XJVlf3), true] : [<div className={x.linkedLobbyEducationTooltip}>{<c.Text variant={"text-md/semibold"} color={"header-primary"}>{L.intl.string(L.t.YIVr4O)}</c.Text>}{<c.Text variant={"text-sm/medium"} color={"header-secondary"}>{L.intl.format(L.t["16agur"], {
            helpdeskArticle: T.Z.getArticleURL(w.BhN.LINKED_LOBBIES)
          })}</c.Text>}{<c.P3F className={x.linkedLobbyEducationTooltipCloseClickContainer} onClick={() => s(D.L.USER_DISMISS)}><c.Dio className={x.linkedLobbyEducationTooltipCloseIcon} color={"currentColor"} /></c.P3F>}</div>, L.intl.string(L.t.YIVr4O)]
    }();
  return <c.ua7 tooltipClassName={x.linkedLobbyEducationTooltipWrapper} position={"bottom"} align={"left"} text={f} aria-label={_} forceOpen={a === l.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP || true}>{e => (0, r.jsxs)("div", U(k({
      className: x.linkedLobbyTooltip
    }, e), {
      children: [i, (0, r.jsxs)(c.Text, {
        className: x.linkedLobby,
        variant: "text-sm/medium",
        color: "header-primary",
        children: ["•", (0, r.jsx)("img", {
          alt: "",
          src: d,
          className: x.linkedLobbyApplicationIcon
        }), o.name]
      })]
    }))}</c.ua7>
}

function Z(e) {
  let {
    channel: t,
    channelName: n,
    parentChannel: o,
    guild: s,
    inSidebar: l = false,
    handleClick: u,
    handleContextMenu: d,
    handleParentClick: p,
    handleParentContextMenu: h,
    renderFollowButton: m
  } = e, g = (0, _.KS)(t, s), {
    prefix: E,
    level: b
  } = K(t.type, s), O = <r.Fragment>{null != E ? <c.nn4>{E}{":"}</c.nn4> : null}{" "}{n}</r.Fragment>;
  switch (t.type) {
    case w.d4z.DM:
      return <P.Z level={b} channel={t} handleClick={u} handleContextMenu={d} />;
    case w.d4z.GROUP_DM:
      if (t.isManaged()) return O;
      return <r.Fragment>{<c.nn4>{L.intl.string(L.t["e5y+go"])}</c.nn4>}{<N.j channel={t} />}</r.Fragment>;
    case w.d4z.GUILD_ANNOUNCEMENT:
    case w.d4z.GUILD_TEXT:
    case w.d4z.GUILD_FORUM:
    case w.d4z.GUILD_MEDIA:
      return null != t.linkedLobby ? <B channel={t}>{Y(g, t.type === w.d4z.GUILD_ANNOUNCEMENT ? L.intl.string(L.t.l1dkSE) : L.intl.string(L.t.Pnajj4))}{<R.Z.Title level={b} onContextMenu={d} onClick={u}>{O}</R.Z.Title>}</B> : <i.Fragment>{Y(g, t.type === w.d4z.GUILD_ANNOUNCEMENT ? L.intl.string(L.t.l1dkSE) : L.intl.string(L.t.Pnajj4))}{<R.Z.Title level={b} onContextMenu={d} onClick={u}>{O}</R.Z.Title>}{null != m ? m() : null}</i.Fragment>;
    case w.d4z.GUILD_VOICE:
      return <i.Fragment>{Y(g, L.intl.string(L.t.BVZqJi))}{<R.Z.Title level={b} onContextMenu={d} onClick={u}>{O}</R.Z.Title>}</i.Fragment>;
    case w.d4z.GUILD_STAGE_VOICE:
      return <i.Fragment>{Y(g, L.intl.string(L.t.EErMzM))}{<R.Z.Title level={b} onContextMenu={d} onClick={u}>{O}</R.Z.Title>}</i.Fragment>;
    case w.d4z.ANNOUNCEMENT_THREAD:
    case w.d4z.PUBLIC_THREAD:
    case w.d4z.PRIVATE_THREAD:
      let I = null;
      if (!l && null != o) {
        let e = (0, _.KS)(o, s);
        I = <i.Fragment>{Y(e, L.intl.string(L.t.Pnajj4))}{<R.Z.Title level={b} onContextMenu={h} onClick={p} className={a()(x.parentChannelName, x.cursorPointer)}>{(0, f.F6)(o, v.default, y.Z)}</R.Z.Title>}{<R.Z.Caret />}</i.Fragment>
      }
      let T = (null == o ? true : o.type) != null && w.TPd.GUILD_THREADS_ONLY.has(o.type);
      return <i.Fragment>{I}{Y(T ? null : g, L.intl.string(L.t["7Xm5QE"]))}{<R.Z.Title level={b} onContextMenu={d} onClick={u} className={a()({
            [x.cursorPointer]: l,
            [x.forumPostTitle]: T,
            [x.forumPostSidebarTitle]: l && T
          })}>{O}</R.Z.Title>}</i.Fragment>;
    case w.d4z.GUILD_DIRECTORY:
      let S = (null == s ? true : s.features.has(w.oNc.HUB)) ? L.intl.formatToPlainString(L.t.Dy2aho, {
        guildName: n
      }) : n;
      return <i.Fragment>{null !== g ? <R.Z.ChannelIcon icon={g} aria-hidden={true} /> : null}{<R.Z.Title level={b} onContextMenu={d} onClick={u}>{null != E ? <c.nn4>{E}{":"}</c.nn4> : null}{" "}{S}</R.Z.Title>}</i.Fragment>;
    default:
      return null
  }
}

function F(e) {
  var t, n;
  return null != (n = null == (t = e.badges) ? true : t.some(e => e.id.startsWith("staff"))) && n
}
let V = e => {
  var t;
  let {
    channel: n
  } = e, o = (0, s.e7)([v.default], () => v.default.getCurrentUser()), a = (0, s.e7)([v.default], () => v.default.getUser(n.getRecipientId())), l = (0, S.G)(), c = (0, s.e7)([E.Z], () => null != a ? E.Z.getUserProfile(a.id) : null), u = null != c && (null != (t = null == c ? true : c.fetchEndedAt) ? t : 0) > 0;
  return (i.useEffect(() => {
    (null == o ? true : o.isStaff()) && null != a && !a.isStaff() && (0, b.Z)(a.id, a.getAvatarURL(true, 80), {
      dispatchWait: true,
      withMutualGuilds: true,
      withMutualFriendsCount: true
    })
  }, [o, a]), n.isDM() && (null == o ? true : o.isStaff()) && null != a) ? a.isStaff() ? <d.Z type={d.Z.Types.STAFF_ONLY_DM} /> : l && u && !F(c) ? <d.Z type={d.Z.Types.NOT_STAFF_WARNING} /> : null : null
};

function H(e, t) {
  switch (e.type) {
    case w.d4z.DM:
      return <r.Fragment>{<V channel={e} />}{<A.Z channel={e} />}</r.Fragment>;
    case w.d4z.GUILD_ANNOUNCEMENT:
    case w.d4z.GUILD_TEXT:
    case w.d4z.GUILD_VOICE:
    case w.d4z.GUILD_STAGE_VOICE:
    case w.d4z.GROUP_DM:
      return null != t ? <C.Z channel={e} guild={t} /> : null;
    default:
      return null
  }
}

function Y(e, t) {
  return <r.Fragment>{null !== e && <R.Z.ChannelIcon icon={e} aria-hidden={true} />}{<c.nn4>{t}</c.nn4>}</r.Fragment>
}

function W(e) {
  let {
    guild: t,
    channel: n,
    caretPosition: o = "left"
  } = e, a = (0, s.e7)([O.Z], () => O.Z.getGuildId()), l = (0, m.D)(), u = i.useRef(null);
  if (a !== w.I_8 && !l || null == t) return null;
  let d = () => {
    (0, g.XU)(t.id, n.id)
  };
  return <c.ua7 text={t.name} targetElementRef={u} position={"bottom"}>{e => (0, r.jsxs)(c.P3F, U(k({}, e), {
      onClick: d,
      className: x.guildBreadcrumbContainer,
      children: ["left" === o && (0, r.jsx)(R.Z.Caret, {
        direction: "left"
      }), (0, r.jsx)("div", {
        ref: u,
        children: (0, r.jsx)(h.Z, {
          guild: t,
          size: h.Z.Sizes.SMALLER,
          className: x.guildBreadcrumbIcon,
          active: true
        })
      }), "right" === o && (0, r.jsx)(R.Z.Caret, {
        direction: "right"
      })]
    }))}</c.ua7>
}

function K(e, t) {
  var n, r;
  switch (e) {
    case w.d4z.DM:
      return {
        prefix: L.intl.string(L.t.EJRzg4), level: 1
      };
    case w.d4z.GROUP_DM:
      return {
        prefix: L.intl.string(L.t["e5y+go"]), level: 1
      };
    case w.d4z.GUILD_DIRECTORY:
      return {
        prefix: null != (n = null == t ? true : t.name) ? n : "", level: 1
      };
    case w.d4z.GUILD_ANNOUNCEMENT:
    case w.d4z.GUILD_TEXT:
    case w.d4z.GUILD_FORUM:
    case w.d4z.GUILD_MEDIA:
    case w.d4z.GUILD_STAGE_VOICE:
    case w.d4z.GUILD_VOICE:
      return {
        prefix: null != (r = null == t ? true : t.name) ? r : "", level: 1
      };
    case w.d4z.ANNOUNCEMENT_THREAD:
    case w.d4z.PUBLIC_THREAD:
    case w.d4z.PRIVATE_THREAD:
      return {
        prefix: L.intl.string(L.t["7Xm5QE"]), level: 2
      };
    default:
      return {
        prefix: null, level: 1
      }
  }
}