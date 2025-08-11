/** Chunk was on web.js **/
/** chunk id: 267128, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => B,
  f: () => G
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk407477 = require("./407477.js"),
  Chunk387188 = require("./387188.js"),
  Chunk978003 = require("./978003.js"),
  Chunk39154 = require("./39154.js"),
  Chunk245216 = require("./245216.jsx"),
  Chunk79390 = require("./79390.js"),
  Chunk869765 = require("./869765.js"),
  Chunk403132 = require("./403132.js"),
  Chunk378233 = require("./378233.js"),
  Chunk768581 = require("./768581.js"),
  Chunk55935 = require("./55935.js"),
  Chunk823379 = require("./823379.js"),
  Chunk453687 = require("./453687.js"),
  Chunk930282 = require("./930282.js"),
  Chunk123145 = require("./123145.jsx"),
  Chunk223021 = require("./223021.js"),
  Chunk217702 = require("./217702.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk848697 = require("./848697.js"),
  Chunk73433 = require("./73433.js");

function L(e) {
  let {
    width: t = 12,
    height: n = 8,
    color: i = "currentColor",
    className: o,
    foreground: a
  } = e;
  return <svg className={o} width={t} height={n} viewBox={"0 0 12 8"}><path d={"M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z"} className={a} fill={i} /></svg>
}

function x(e) {
  let {
    width: t = 18,
    height: n = 18,
    className: i,
    foreground: o
  } = e;
  return <svg className={i} width={t} height={n} viewBox={"0 0 18 18"}><path fill={"#3ba55c"} d={"M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0"} className={o} /></svg>
}

function M(e, t, n, i, o, s) {
  return <img alt={""} src={(null == t ? true : t.guildMemberAvatar) != null && null != n ? (0, O.JM)({
      guildId: n,
      userId: e.id,
      avatar: t.guildMemberAvatar
    }) : e.getAvatarURL(n, 16)} onClick={i} onContextMenu={o} className={a()({
      [w.replyAvatar]: true,
      [w.clickable]: null != i
    })} ref={s} />
}

function k(e, t, n) {
  let {
    referencedMessage: o,
    channel: a,
    compact: s,
    isReplyAuthorBlocked: l,
    repliedAuthor: f,
    showAvatarPopout: _,
    onClickAvatar: p,
    onContextMenu: h,
    onPopoutRequestClose: m
  } = e, {
    analyticsLocations: g
  } = (0, d.ZP)(u.Z.AVATAR), b = i.useRef(null);
  if (s || o.state !== E.Y.LOADED || l) return n === R.uaV.CONTEXT_MENU_COMMAND ? <div className={w.replyChatIconContainer}><c.kBi size={"xs"} /></div> : <div className={w.replyBadge}><L className={w.replyIcon} /></div>;
  if (o.message.type === R.uaV.USER_JOIN || o.message.type === R.uaV.ROLE_SUBSCRIPTION_PURCHASE || o.message.type === R.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || o.message.type === R.uaV.GUILD_GAMING_STATS_PROMPT) return <x className={w.userJoinSystemMessageIcon} />;
  if (o.message.type === R.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return <c.Prq size={"md"} color={"currentColor"} className={w.ticketIcon} />;
  if (o.message.type === R.uaV.POLL_RESULT) return <c.QDj className={w.repliedTextContentLeadingIcon} width={C.WW} height={C.WW} size={"custom"} />;
  let y = () => M(o.message.author, f, a.guild_id, p, h, b);
  return null != t && null != _ ? <d.Gt value={g}><c.yRy targetElementRef={b} renderPopout={t} shouldShow={_} position={"right"} onRequestClose={m}>{y}</c.yRy></d.Gt> : <d.Gt value={g}>{y()}</d.Gt>
}

function j(e, t) {
  let {
    baseMessage: n,
    channel: i,
    referencedMessage: o,
    showUsernamePopout: a,
    onClickUsername: s,
    onContextMenu: l,
    onPopoutRequestClose: c
  } = e, u = (null == o ? true : o.state) === E.Y.LOADED ? o.message : true;
  return null == u || u.type === R.uaV.USER_JOIN || u.type === R.uaV.ROLE_SUBSCRIPTION_PURCHASE || u.type === R.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION || u.type === R.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || u.type === R.uaV.GUILD_GAMING_STATS_PROMPT || u.type === R.uaV.POLL_RESULT ? null : <A.Z message={u} channel={i} compact={true} withMentionPrefix={(0, b.Z)(n, u)} showPopout={a} renderPopout={t} onClick={s} onContextMenu={l} onPopoutRequestClose={c} isRepliedMessage={true} />
}

function U(e, t, n) {
  let {
    content: i,
    referencedMessage: o,
    isReplyAuthorBlocked: s,
    isReplyAuthorIgnored: l,
    onClickReply: u
  } = e, d = o.state !== E.Y.DELETED ? u : true;
  switch (o.state) {
    case E.Y.LOADED: {
      let {
        contentPlaceholder: e,
        renderedContent: u,
        trailingIcon: f,
        leadingIcon: _
      } = G(o.message, i, s, l, w.repliedTextContent, {
        trailingIconClass: w.repliedTextContentTrailingIcon,
        leadingIconClass: w.repliedTextContentLeadingIcon,
        iconSize: C.WW
      });
      return <r.Fragment>{_}{<c.P3F className={a()(w.repliedTextPreview, w.clickable, {
            [w.repliedMessageClickableSpineHovered]: t
          })} onClick={d} onMouseEnter={n} onMouseLeave={n}><c.nuw>{null != u ? u : (0, r.jsx)("span", {
              className: w.repliedTextPlaceholder,
              children: e
            })}</c.nuw></c.P3F>}{f}</r.Fragment>
    }
    case E.Y.NOT_LOADED:
      return <c.P3F className={a()(w.repliedTextPreview, w.clickable)} onClick={d}><span className={w.repliedTextPlaceholder}>{P.intl.string(P.t["1i+hMj"])}</span></c.P3F>;
    case E.Y.DELETED:
      return <div className={w.repliedTextPreview}><span className={w.repliedTextPlaceholder}>{P.intl.string(P.t.mE3KJC)}</span></div>;
    default:
      (0, I.vE)(o)
  }
}

function G(e, t, n, i, o, s) {
  let l, u, d, f, E = (0, h.Z)(e),
    {
      trailingIconClass: b,
      leadingIconClass: O,
      iconSize: v
    } = s,
    I = null == t || "" === t || Array.isArray(t) && 0 === t.length,
    T = (0, y.cv)(E).length > 0,
    A = null != E.interaction,
    N = E.hasFlag(R.iLy.IS_VOICE_MESSAGE),
    C = E.isPoll(),
    L = E.type === R.uaV.POLL_RESULT;
  if ((0, p.Z)(e) && (f = <m.Z size={"custom"} className={O} width={v} height={v} />), n) l = P.intl.string(P.t.XAkOo6);
  else if (i) l = P.intl.string(P.t.G7p6v7);
  else if (E.type === R.uaV.CHANNEL_PINNED_MESSAGE) l = P.intl.string(P.t.sCfDDg);
  else if (E.type === R.uaV.EMOJI_ADDED) u = <_.Zh message={E} rendered={t} />;
  else if (I)
    if (C) {
      var x, M;
      u = <div className={a()(w.repliedTextContent, D.markup)}>{null == E || null == (M = E.poll) || null == (x = M.question) ? true : x.text}</div>
    } else L ? l = (0, g.N4)(E) : T ? l = P.intl.string(P.t.kHdYCQ) : A ? l = P.intl.string(P.t["E+6SSU"]) : N ? l = P.intl.string(P.t["XC3A5+"]) : E.hasFlag(R.iLy.IS_COMPONENTS_V2) ? l = P.intl.string(P.t.Xxat6e) : (l = P.intl.string(P.t["6hGo0d"]), d = <c.XBm size={"custom"} color={"currentColor"} className={b} width={v} height={v} />);
  else u = <S.ZP message={E} content={t} className={o} compact={true} />;
  return T ? d = <c.B7q size={"custom"} color={"currentColor"} className={b} width={v} height={v} /> : A ? d = <c.SsZ size={"custom"} color={"currentColor"} className={b} width={v} height={v} /> : N ? d = <c.S6n size={"custom"} color={"currentColor"} className={b} width={19 / 24 * v} height={v} /> : (E.attachments.length > 0 || E.embeds.length > 0) && !L && (d = <c.XBm size={"custom"} color={"currentColor"} className={b} width={v} height={v} />), {
    contentPlaceholder: l,
    renderedContent: u,
    trailingIcon: d,
    leadingIcon: f
  }
}

function B(e) {
  let t, {
      repliedAuthor: n,
      baseAuthor: o,
      baseMessage: s,
      referencedMessage: u,
      renderPopout: d,
      isReplySpineClickable: _,
      showReplySpine: p
    } = e,
    {
      canShowReactionsOnMessageHover: h
    } = f.ZP.useExperiment({
      location: "RepliedMessage"
    }, {
      autoTrackExposure: false
    }),
    [m, g] = i.useState(false),
    b = i.useMemo(() => null != d && u.state === E.Y.LOADED ? e => d(e, u.message) : true, [u, d]),
    y = i.useCallback(() => g(e => !e), []),
    O = k(e, b, s.type),
    I = j(e, b),
    S = U(e, m, y),
    A = i.useMemo(() => e.compact ? (0, N.Z)((0, v.vc)(l()(), "LT")) : null, [e.compact]);
  null != n && null != o && (t = P.intl.formatToPlainString(P.t.RhbQ2N, {
    author: null == o ? true : o.nick,
    repliedAuthor: null == n ? true : n.nick
  }));
  let C = s.type === R.uaV.CONTEXT_MENU_COMMAND;
  return <div id={(0, T.Gq)(s)} className={a()(w.repliedMessage, A, C ? w.contextCommandMessage : {
      [w.messageSpine]: !h || !_ && p
    })} aria-label={t}>{h && _ && p && <c.P3F tag={"div"} aria-label={P.intl.string(P.t.dpjpOj)} className={a()(w.repliedMessageClickableSpine, {
        [w.repliedMessageContentHovered]: m
      })} onClick={e.onClickReply} onMouseEnter={y} onMouseLeave={y} />}{O}{I}{S}</div>
}