/** Chunk was on 22173 **/
/** chunk id: 404616, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Lp: () => ei,
  NN: () => ed,
  TJ: () => eo,
  ZP: () => ec,
  au: () => eb,
  kZ: () => ef,
  m9: () => eg,
  og: () => ej
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  u = require.n(Chunk913527),
  Chunk94171 = require("./94171.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk738619 = require("./738619.js"),
  Chunk393238 = require("./393238.js"),
  Chunk963374 = require("./963374.js"),
  Chunk884338 = require("./884338.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk446489 = require("./446489.js"),
  Chunk824578 = require("./824578.js"),
  Chunk95398 = require("./95398.jsx"),
  Chunk247206 = require("./247206.js"),
  Chunk406432 = require("./406432.js"),
  Chunk169525 = require("./169525.js"),
  Chunk566006 = require("./566006.js"),
  Chunk255269 = require("./255269.js"),
  Chunk937889 = require("./937889.js"),
  Chunk443877 = require("./443877.js"),
  Chunk524444 = require("./524444.js"),
  Chunk287151 = require("./287151.jsx"),
  Chunk267128 = require("./267128.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk433355 = require("./433355.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk451478 = require("./451478.js"),
  Chunk55935 = require("./55935.js"),
  Chunk109434 = require("./109434.js"),
  Chunk360004 = require("./360004.js"),
  Chunk456269 = require("./456269.js"),
  Chunk109590 = require("./109590.js"),
  Chunk660189 = require("./660189.js"),
  Chunk208970 = require("./208970.js"),
  Chunk73315 = require("./73315.jsx"),
  Chunk470623 = require("./470623.js"),
  Chunk196255 = require("./196255.jsx"),
  Chunk858543 = require("./858543.js"),
  Chunk265641 = require("./265641.js"),
  Chunk627896 = require("./627896.js"),
  Chunk883728 = require("./883728.js"),
  Chunk981631 = require("./981631.js"),
  Chunk217702 = require("./217702.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk602512 = require("./602512.js"),
  Chunk73433 = require("./73433.js");

function el(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let ei = 72,
  eo = 72,
  ec = Chunk73800.memo(function(e) {
    let {
      threadId: t,
      goToThread: n,
      observePostVisibilityAnalytics: s,
      overrideMedia: i,
      className: c,
      containerWidth: u
    } = e, {
      channel: g,
      isOpen: b,
      messageCount: j,
      firstMessage: x,
      content: v,
      media: O
    } = function(e) {
      let {
        threadId: t,
        overrideMedia: n
      } = e, r = (0, h.e7)([L.Z], () => L.Z.getChannel(t));
      o()(null != r, "the thread should not be null here, a store must have missed an update");
      let a = (0, h.e7)([A.ZP], () => A.ZP.getCurrentSidebarChannelId(r.parent_id) === r.id),
        {
          firstMessage: s
        } = (0, G.cl)(r),
        {
          content: l,
          firstMedia: i
        } = (0, H.mX)({
          firstMessage: s
        }),
        {
          messageCountText: c
        } = (0, H.nP)(r);
      return {
        channel: r,
        isOpen: a,
        messageCount: c,
        firstMessage: s,
        content: l,
        media: null != n ? n : i
      }
    }({
      threadId: t,
      overrideMedia: i
    }), {
      ref: y,
      height: P
    } = (0, p.ZP)(), N = (0, q.xH)(e => e.setCardHeight, d.X);
    a.useEffect(() => {
      null != P && N(t, P)
    }, [P, N, t]), a.useEffect(() => {
      null == s || s(y.current, t)
    }, [y, s, t]);
    let C = a.useRef(null),
      {
        handleLeftClick: w,
        handleRightClick: Z
      } = (0, ee.Z)({
        facepileRef: C,
        goToThread: n,
        channel: g
      }),
      S = (0, m.JA)(t),
      {
        role: _,
        onFocus: T
      } = S,
      k = function(e, t) {
        if (null == e) return {};
        var n, r, a = function(e, t) {
          if (null == e) return {};
          var n, r, a = {},
            s = Object.keys(e);
          for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
        }
        return a
      }(S, ["role", "onFocus"]),
      {
        isFocused: M,
        handleFocus: E,
        handleBlur: I
      } = (0, Y.Z)(T);
    return <div ref={y} data-item-id={t} onClick={w} onContextMenu={Z} className={l()(ea.container, c, {
        [ea.isOpen]: b
      })}>{<f.P3F{...el({
        onClick: w,
        focusProps: {
          ringTarget: y
        },
        onContextMenu: Z,
        "aria-label": er.intl.formatToPlainString(er.t.pgYN6e, {
          title: g.name,
          count: j
        }),
        className: ea.focusTarget,
        onFocus: E,
        onBlur: I
      }, k)} />}{<div className={ea.left}>{<f.y5t><eu channel={g} firstMessage={x} content={v} hasMediaAttachment={null != O} containerWidth={u} /></f.y5t>}{<f.Rny enabled={!M}><eh channel={g} firstMessage={x} facepileRef={C} /></f.Rny>}</div>}{(null == x ? true : x.blocked) || null == O ? null : <ev channel={g} firstMedia={O} />}</div>
  });

function eu(e) {
  let {
    channel: t,
    firstMessage: n,
    content: a,
    hasMediaAttachment: s,
    containerWidth: i
  } = e, {
    isNew: o,
    hasUnreads: c
  } = (0, H.J$)(t), u = ed(t), {
    postTitleRef: d,
    isNewBadgeOverflow: m
  } = (0, $.x)(o, 24, i);
  return <div className={ea.body}>{<V.ZP channel={t} />}{<div className={l()(ea.header, {
        [ea.withNewBadgeOverflow]: m
      })}><div className={ea.headerText}>{<f.X6q variant={"heading-lg/semibold"} color={c ? "header-primary" : "text-muted"} lineClamp={2} className={ea.postTitleText}><span ref={d}>{u}{o && <span className={ea.newBadgeWrapper}><f.IGR className={ea.newBadge} color={g.Z.unsafe_rawColors.BRAND_260.css} text={er.intl.string(er.t.y2b7CA)} /></span>}</span></f.X6q>}{o && m && <f.IGR className={ea.newBadge} color={g.Z.unsafe_rawColors.BRAND_260.css} text={er.intl.string(er.t.y2b7CA)} />}</div></div>}{<div className={ea.message}><em channel={t} message={n} content={a} hasMediaAttachment={s} hasUnreads={c} /></div>}</div>
}

function ed(e) {
  let t = (0, h.e7)([J.Z], () => J.Z.getHasSearchResults(e.parent_id)),
    n = (0, h.e7)([J.Z], () => J.Z.getSearchQuery(e.parent_id)),
    r = (0, W.d)(e.guild_id, "forum_post_use_highlighted_channel_name"),
    s = a.useMemo(() => (0, j.nC)(t && null != n ? n : "", r), [t, n, r]);
  return a.useMemo(() => (0, T.ZP)({
    content: e.name,
    embeds: []
  }, {
    postProcessor: s
  }).content, [e.name, s])
}
let em = Chunk73800.memo(function(e) {
  let {
    message: t,
    channel: n,
    content: a,
    hasMediaAttachment: s,
    hasUnreads: i
  } = e, {
    isBlocked: o,
    isIgnored: c
  } = (0, h.cj)([D.Z], () => ({
    isBlocked: null != t && D.Z.isBlockedForMessage(t),
    isIgnored: null != t && D.Z.isIgnoredForMessage(t)
  })), u = (0, h.e7)([Q.Z], () => Q.Z.isLoading(n.id)), d = (0, h.e7)([B.Z], () => B.Z.can(et.Plq.MANAGE_MESSAGES, n)), m = R.cC.useSetting(), g = null;
  if (o) g = <f.Text className={ea.blockedMessage} variant={"text-sm/medium"} color={"text-muted"}>{er.intl.string(er.t.Lkp2fH)}</f.Text>;
  else if (c) g = <f.Text className={ea.blockedMessage} variant={"text-sm/medium"} color={"text-muted"}>{er.intl.string(er.t.yWK7ZG)}</f.Text>;
  else {
    let {
      contentPlaceholder: e,
      renderedContent: n
    } = null == t ? {
      contentPlaceholder: null,
      renderedContent: null
    } : (0, I.f)(t, a, o, c, l()(ea.messageContent, es.inlineFormat, es.__invalid_smallFontSize), {
      leadingIconClass: ea.messageContentLeadingIcon,
      trailingIconClass: ea.messageContentTrailingIcon,
      iconSize: en.WW
    });
    g = null != n ? <f.Text variant={"text-sm/semibold"} color={i ? "header-secondary" : "text-muted"}>{n}</f.Text> : s ? null : <f.Text tag={"span"} variant={"text-sm/medium"} color={i ? "header-secondary" : "text-muted"} className={ea.messageContent}>{null == t ? u ? null : er.intl.string(er.t.mE3KJC) : e}</f.Text>
  }
  return <N.aQ.Provider value={(0, _.Z)(m, d)}>{!o && <K.Z channel={n} message={t} renderColon={null != g} hasUnreads={i} />}{<f.Rny className={ea.messageFocusBlock}>{g}</f.Rny>}</N.aQ.Provider>
});

function eh(e) {
  let {
    channel: t,
    facepileRef: n,
    firstMessage: a
  } = e, s = (0, P.Q)(t.id), l = (null == a ? true : a.reactions) != null && a.reactions.length > 0;
  return <div className={ea.footer}>{l || null == a ? null : <ef firstMessage={a} channel={t} />}{null == a ? null : <eb firstMessage={a} channel={t} />}{<eg channel={t} iconSize={14} />}{<span className={ea.bullet}>{"•"}</span>}{s.length > 0 ? <div className={ea.typing}>{<ej channel={t} userIds={s} facepileRef={n} />}{<div className={ea.dots}><f.bbz themed={true} dotRadius={2} /></div>}{<b.ZP channel={t} className={ea.typingUsers} renderDots={false} />}</div> : <ep channel={t} />}</div>
}

function eg(e) {
  let {
    channel: t,
    iconSize: n,
    showReadState: a = false
  } = e, {
    messageCountText: s,
    unreadCount: i
  } = (0, H.nP)(t);
  return <div className={l()(ea.messageCountBox, {
      [ea.hasRead]: a && null == i
    })}>{<span className={ea.messageCountIcon}><f.kBi size={"custom"} color={"currentColor"} width={n} height={n} /></span>}{"number" == typeof s ? <y.Z value={s} digitWidth={9} className={ea.messageCountText} /> : <div className={ea.messageCountText}>{s}</div>}{null == i ? null : <f.Text className={ea.newMessageCount} variant={"text-sm/semibold"} color={"text-brand"}>{"("}{er.intl.format(er.t.z3PEtr, {
        count: i
      })}{")"}</f.Text>}</div>
}

function ef(e) {
  let {
    firstMessage: t,
    channel: n
  } = e, a = (0, h.e7)([L.Z], () => L.Z.getChannel(n.parent_id)), s = (0, H.Bs)(a), {
    disableReactionCreates: l,
    isLurking: i,
    isPendingMember: o
  } = (0, k.Z)(n);
  return null == s || l ? null : <E.le className={ea.updateReactionButton} message={t} readOnly={n.isArchivedLockedThread()} useChatFontScaling={false} isLurking={i} isPendingMember={o} emoji={s} hideCount={true} count={0} burst_count={0} me={false} me_burst={false} type={S.O.NORMAL} emojiSize={"reaction"} emojiSizeTooltip={"reaction"} />
}

function eb(e) {
  var t;
  let {
    firstMessage: n,
    channel: a
  } = e, s = (0, H.IN)(n), {
    disableReactionUpdates: l,
    isLurking: i,
    isPendingMember: o
  } = (0, k.Z)(a);
  return null == s ? null : <E.le{...el({
    className: ea.updateReactionButton,
    message: n,
    readOnly: l || a.isArchivedLockedThread(),
    isLurking: i,
    isPendingMember: o,
    useChatFontScaling: false,
    type: s.burst_count >= s.count ? S.O.BURST : S.O.NORMAL,
    emojiSize: "reaction",
    emojiSizeTooltip: "reaction"
  }, s)} />
}

function ep(e) {
  var t;
  let {
    channel: n
  } = e, {
    sortOrder: a
  } = (0, U.H)(n.parent_id), s = (0, H.xw)(n, a), l = null == (t = n.threadMetadata) ? true : t.createTimestamp, i = null == l ? null : er.intl.formatToPlainString(er.t["13euCQ"], {
    timestamp: (0, z.vc)(u()(l), "LLLL")
  });
  return <f.ua7 text={i} tooltipClassName={ea.timestampTooltip}>{e => {
      var t, n;
      return (0, r.jsx)(f.Text, (t = el({
        className: ea.__invalid_activityText,
        variant: "text-sm/normal",
        color: "header-secondary"
      }, e), n = n = {
        children: s
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    }}</f.ua7>
}

function ej(e) {
  let {
    channel: t,
    userIds: n,
    facepileRef: a
  } = e, s = (0, H.iM)(t, n);
  return <div ref={a}><x.ZP className={ea.__invalid_facepile} showDefaultAvatarsForNullUsers={true} guildId={t.guild_id} users={s} max={5} size={16} hideMoreUsers={true} showUserPopout={true} /></div>
}

function ex(e) {
  let {
    firstMedia: t,
    shouldObscure: n,
    obscureReason: a,
    shouldShowAgeVerification: s
  } = e, i = (0, h.e7)([F.Z], () => F.Z.isFocused()), o = (0, w.d$)(t.src), c = R.QK.useSetting(), u = (0, Z.MC)(a), {
    src: d,
    width: m,
    height: g,
    alt: b
  } = t;
  if (s) {
    var p;
    return <div aria-label={null != (p = null != u ? u : b) ? p : er.intl.string(er.t.hqwnc3)} className={l()(ea.thumbnailContainer, ea.obscuredThumbnailPlaceholder)} style={{
        maxWidth: eo,
        maxHeight: ei,
        height: g,
        width: m
      }} />
  }
  return d.startsWith("data:") ? <f.Eep src={d} width={m} height={g} minWidth={eo} minHeight={ei} alt={null != b && n ? u : b} className={ea.thumbnailContainer} imageClassName={l()(ea.thumbnailOverride, {
      [ea.obscured]: n
    })} /> : (0, M.Yi)({
    src: d,
    width: m,
    height: g,
    minWidth: eo,
    minHeight: ei,
    alt: null != b && n ? u : b,
    autoPlay: c,
    animated: o && !n && i,
    srcIsAnimated: t.srcIsAnimated,
    containerClassName: ea.thumbnailContainer,
    imageClassName: l()(ea.thumbnailOverride, {
      [ea.obscured]: n
    }),
    analyticsSource: "ForumPostMediaPreview"
  })
}

function ev(e) {
  let {
    channel: t,
    firstMedia: n
  } = e, [a, s] = (0, Z.hL)({
    media: n,
    channel: t
  }), l = (0, C.JO)(s);
  return <f.Rny enabled={true}><div className={ea.bodyMedia} onClick={function(e) {
        e.stopPropagation(), l && (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), v.Z.showAgeVerificationGetStartedModal(O.cU.FORUM_POST_MEDIA_PREVIEW))
      }}>{<ex firstMedia={n} shouldObscure={a} obscureReason={s} shouldShowAgeVerification={l} />}{a && <X.Z iconClassname={ea.obscuredTag} obscureReason={s} />}</div></f.Rny>
}