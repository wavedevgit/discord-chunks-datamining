/** Chunk was on web.js **/
/** chunk id: 183023, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Az: () => ee,
  Oe: () => et,
  UA: () => er,
  n_: () => ei,
  vk: () => en
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk507274 = require("./507274.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk596454 = require("./596454.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk213609 = require("./213609.js"),
  Chunk600164 = require("./600164.js"),
  Chunk686546 = require("./686546.js"),
  Chunk111028 = require("./111028.jsx"),
  Chunk738774 = require("./738774.js"),
  Chunk785896 = require("./785896.js"),
  Chunk231053 = require("./231053.js"),
  Chunk944386 = require("./944386.js"),
  Chunk565138 = require("./565138.js"),
  Chunk372769 = require("./372769.js"),
  Chunk889564 = require("./889564.js"),
  Chunk687476 = require("./687476.js"),
  Chunk761966 = require("./761966.js"),
  Chunk563927 = require("./563927.js"),
  Chunk98278 = require("./98278.js"),
  Chunk767714 = require("./767714.js"),
  Chunk703656 = require("./703656.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk900849 = require("./900849.js"),
  Chunk74538 = require("./74538.js"),
  Chunk886132 = require("./886132.js"),
  Chunk524444 = require("./524444.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.js"),
  Chunk239594 = require("./239594.js");

function K(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      K(e, t, n[t])
    })
  }
  return e
}

function q(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function X(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : q(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Q = 32,
  J = 12,
  $ = () => ({
    page: null != (0, Chunk442837.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId()) ? Chunk981631.ZY5.GUILD_CHANNEL : Chunk981631.ZY5.DM_CHANNEL,
    section: Chunk981631.jXE.EMOJI_UPSELL_POPOUT
  }),
  ee = e => {
    let {
      node: t
    } = e;
    (0, I.u)({
      emojiId: t.emojiId,
      currentGuildId: x.Z.getGuildId()
    });
    let n = (0, R.Z)(t.name);
    return <c.V><Z.W_><g.Z className={W.emojiSection}>{<_.Z emojiName={t.name} className={W.primaryEmoji} src={t.src} animated={false} size={"jumbo"} />}{<g.Z direction={g.Z.Direction.VERTICAL} justify={g.Z.Justify.CENTER} className={W.truncatingText}>{<d.Text className={W.__invalid_emojiName} variant={"text-md/semibold"}><b.Z>{n}</b.Z></d.Text>}{<d.Text variant={"text-sm/normal"}>{Y.intl.string(Y.t.sXdH8f)}</d.Text>}</g.Z>}</g.Z></Z.W_></c.V>
  },
  et = e => {
    let {
      expressionSourceGuild: t,
      hasJoinedExpressionSourceGuild: n,
      isDisplayingJoinGuildButtonInPopout: i
    } = e, {
      id: o,
      icon: s,
      name: l
    } = t, c = Q, u = j.ZP.getGuildIconURL({
      id: o,
      icon: s,
      size: c,
      canAnimate: true
    }), f = (n = null == n || n) || t.isDiscoverable(), _ = () => {
      t.isDiscoverable() ? (0, U.Ub)(o, {}) : n && (0, D.uL)(F.Z5c.CHANNEL(o, L.Z.getChannelId(o)))
    }, p = () => null != u && f ? <d.P3F aria-label={l} onClick={_}>{<img src={u} alt={""} className={W.guildIcon} />}{" :"}</d.P3F> : <T.Z size={T.Z.Sizes.SMALL} className={W.guildIconNotClickable} guild={t} />, h = () => f ? <d.P3F onClick={_} className={W.truncatingText}><d.X6q className={W.guildName} variant={"heading-md/semibold"}><b.Z>{l}</b.Z></d.X6q></d.P3F> : <d.X6q variant={"heading-md/semibold"}><b.Z>{l}</b.Z></d.X6q>, m = t.isDiscoverable() && null != t.presenceCount, y = () => {
      let e = !i && !n;
      return <r.Fragment>{<d.Text variant={"text-xs/normal"} color={"header-secondary"}>{Y.intl.format(Y.t["LC+S+v"], {
            membersOnline: t.presenceCount
          })}</d.Text>}{<div className={W.dotSeparator} />}{e ? <d.P3F className={W.joinGuildLink} onClick={_}><d.Text variant={"text-xs/normal"} color={"text-link"}>{Y.intl.string(Y.t.riu2R0)}</d.Text></d.P3F> : <d.Text variant={"text-xs/normal"} color={"header-secondary"}>{Y.intl.string(Y.t.inyJqK)}</d.Text>}</r.Fragment>
    }, O = () => m ? y() : <d.Text variant={"text-xs/normal"} color={"header-secondary"}>{Y.intl.string(Y.t.H29mx8)}</d.Text>;
    return <g.Z align={g.Z.Align.CENTER}>{<E.ZP mask={E.ZP.Masks.SQUIRCLE} width={c} height={c} className={W.__invalid_guildIconContainer}>{p()}</E.ZP>}{<g.Z direction={g.Z.Direction.VERTICAL} className={a()(W.__invalid_guildInformation, W.truncatingText)}>{<g.Z align={g.Z.Align.CENTER}>{<S.Z guild={t} className={W.guildBadge} />}{h()}</g.Z>}{<g.Z align={g.Z.Align.CENTER}>{O()}</g.Z>}</g.Z>}</g.Z>
  },
  en = e => {
    let {
      node: t,
      closePopout: n,
      refreshPositionKey: i,
      nonce: o
    } = e, {
      expressionSourceGuild: a,
      expressionSourceApplication: s,
      sourceType: l,
      joinedEmojiSourceGuildRecord: u,
      emoji: d,
      isFetching: f
    } = (0, O.i)({
      emojiId: t.emojiId,
      refreshPositionKey: i
    });
    return f ? <Z.SE /> : <c.V aria-label={t.name}><er node={t} sourceType={l} expressionSourceApplication={s} guildEmoji={null != d ? d : true} expressionSourceGuild={a} joinedEmojiSourceGuildRecord={u} closePopout={n} onToggleShowMoreEmojis={i} demoMode={false} nonce={o} /></c.V>
  },
  er = e => {
    var t, n, o;
    let {
      node: c,
      sourceType: E,
      expressionSourceApplication: O,
      expressionSourceGuild: T,
      joinedEmojiSourceGuildRecord: S,
      closePopout: R,
      onToggleShowMoreEmojis: D,
      guildEmoji: L,
      demoMode: j = false,
      nonce: U
    } = e, K = (0, l.e7)([M.default], () => M.default.getCurrentUser()), z = (0, l.e7)([x.Z], () => x.Z.getGuildId()), q = G.ZP.isPremium(K), X = null != z && (z === (null == T ? true : T.id) || z === (null == S ? true : S.id)), Q = null != S, J = null != (t = null == T ? true : T.isDiscoverable()) && t;
    j && (q = true, J = true, Q = false, X = false);
    let ee = $(),
      {
        isRoleSubscriptionEmoji: en,
        isUnusableRoleSubscriptionEmoji: er,
        userIsRoleSubscriber: eo
      } = i.useMemo(() => null == L ? {
        isRoleSubscriptionEmoji: false,
        isUnusableRoleSubscriptionEmoji: false,
        userIsRoleSubscriber: false
      } : {
        isRoleSubscriptionEmoji: A.yH(L),
        isUnusableRoleSubscriptionEmoji: A.Fv(L, null != z ? z : true),
        userIsRoleSubscriber: N.Z.getUserSubscriptionRoles(L.guildId).size > 0
      }, [L, z]),
      ea = !!er && (0, y.Ol)(null == L ? true : L.guildId),
      {
        analyticsLocations: es
      } = (0, h.ZP)(p.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
    (0, m.Z)({
      type: s.ImpressionTypes.MODAL,
      name: s.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
      properties: {
        location_stack: es,
        emoji_guild_id: null != (n = null == L ? true : L.guildId) ? n : null,
        emoji_id: null != (o = null == L ? true : L.id) ? o : null
      }
    }, {
      disableTrack: !en
    });
    let el = x.Z.getGuildId(),
      ec = (0, B.a)({
        sourceType: E,
        expressionSourceApplication: O,
        isPremium: q,
        hasJoinedEmojiSourceGuild: Q,
        isRoleSubscriptionEmoji: en,
        isUnusableRoleSubscriptionEmoji: er,
        userIsRoleSubscriber: eo,
        emojiComesFromCurrentGuild: X,
        isDiscoverable: J,
        shouldHideRoleSubscriptionCTA: ea,
        onOpenPremiumSettings: () => {
          R(), k.default.track(F.rMx.PREMIUM_PROMOTION_OPENED, {
            location_page: ee.page,
            location_section: ee.section
          }), (0, P.z)()
        }
      }),
      eu = Q && er && !ea && (q && en || !q),
      ed = ec.emojiDescription,
      ef = (0, I.u)({
        emojiId: c.emojiId,
        currentGuildId: el,
        popoutData: ec,
        emojiSourceGuildId: null == T ? true : T.id,
        nonce: U,
        demoMode: j
      }),
      e_ = ec.type === B.$.JOIN_GUILD,
      ep = ec.type === B.$.GET_PREMIUM,
      eh = () => {
        let e = async () => {
          if (j || null == T || Q) return;
          R();
          let e = T.id;
          try {
            await f.Z.joinGuild(e), f.Z.transitionToGuildSync(e)
          } catch (e) {}
        }, t = () => {
          R(), (null == S ? true : S.id) != null && f.Z.transitionToGuildSync(S.id, {
            sourceLocationStack: [p.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL]
          }, V.oC.ROLE_SUBSCRIPTIONS)
        }, n = !Q && J, i = () => ep ? <w.Z className={W.ctaButton} subscriptionTier={H.Si.TIER_2} size={u.zx.Sizes.SMALL} fullWidth={true} textOptions={{
            textOverride: ec.text
          }} onSubscribeModalClose={t => t ? e() : R()} postSuccessGuild={n && null != T ? T : true} premiumModalAnalyticsLocation={ee} /> : e_ ? <div data-button-hoisted-classname-wrapper={true} className={W.ctaButton}><d.zxk variant={"primary"} size={"sm"} text={ec.text} fullWidth={true} onClick={e} /></div> : true;
        return <div className={W.emojiSection}>{<g.Z>{<_.Z className={W.primaryEmoji} emojiId={c.emojiId} emojiName={c.name} animated={c.animated} size={"jumbo"} />}{<g.Z direction={g.Z.Direction.VERTICAL} justify={g.Z.Justify.CENTER} className={W.truncatingText}>{<d.Text variant={"text-md/semibold"}><b.Z>{c.name}</b.Z></d.Text>}{null != ed && <d.Text variant={"text-sm/normal"}>{ed}</d.Text>}</g.Z>}</g.Z>}{i()}{eu && <C.Z className={W.ctaButton} size={u.zx.Sizes.SMALL} fullWidth={true} onClick={t}>{eo ? Y.intl.string(Y.t.yma8Vl) : Y.intl.string(Y.t.nN2DIi)}</C.Z>}</div>
      },
      [em, eg] = i.useState(false),
      eE = () => {
        var e, t;
        let n = null != T && !Q && J && (null != (t = null == T || null == (e = T.emojis) ? true : e.length) ? t : 0) > 1,
          i = () => {
            n && (null == D || D(), em || j || k.default.track(F.rMx.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, ef), eg(!em))
          },
          o = () => {
            let e = Y.intl.string(Y.t.pnsAS0);
            return <d.P3F onClick={i} className={W.showMoreEmojis}><g.Z>{<d.Text className={W.__invalid_showMoreEmojisLabel} aria-label={e} variant={"text-xs/normal"} color={"none"}>{e}</d.Text>}{<d.CJ0 size={"md"} color={"currentColor"} className={a()(W.showMoreEmojisArrow, {
                    [W.showMoreEmojisArrowCollapsed]: !em
                  })} />}</g.Z></d.P3F>
          };
        return <div className={W.guildSection}>{<d.vwX className={W.guildTitle}>{Q ? Y.intl.string(Y.t.ohTzZG) : Y.intl.string(Y.t["eLfh+f"])}</d.vwX>}{<et expressionSourceGuild={null != T ? T : v.JO.createFromGuildRecord(S)} hasJoinedExpressionSourceGuild={Q} isDisplayingJoinGuildButtonInPopout={e_} />}{n && <r.Fragment>{o()}{null != c.emojiId && em && <ei emojiId={c.emojiId} expressionSourceGuild={T} popoutData={ec} onClose={R} hasJoinedEmojiSourceGuild={Q} isDisplayingButtonInTopSection={e_ || ep} />}</r.Fragment>}</div>
      },
      eb = J || Q && !X || null != T;
    return <Z.W_ className={W.popoutContent}>{eh()}{eb && eE()}</Z.W_>
  },
  ei = e => {
    var t;
    let {
      emojiId: n,
      expressionSourceGuild: i,
      hasJoinedEmojiSourceGuild: o,
      popoutData: a,
      onClose: s,
      isDisplayingButtonInTopSection: l
    } = e, c = (null != (t = null == i ? true : i.emojis) ? t : []).slice(0, J + 1).filter(e => e.id !== n).slice(0, J), u = () => o ? null : c.map(e => <d.ua7{...X(z({
      text: e.require_colons ? ":".concat(e.name, ":") : e.name
    }, Z.b_), {
      children: t => (0, r.jsx)(_.Z, z({
        className: W.otherEmoji,
        emojiId: e.id,
        animated: e.animated
      }, t))
    })} />), {
      type: f,
      description: p
    } = a, h = () => f === B.$.GET_PREMIUM ? <r.Fragment>{<w.Z subscriptionTier={H.Si.TIER_2} textOptions={{
          textOverride: a.text
        }} className={W.ctaButton} fullWidth={true} onClick={() => s()} />}{null != p && <div className={W.ctaDescription}><d.Text variant={"text-sm/medium"} aria-label={p}>{p}</d.Text></div>}</r.Fragment> : f === B.$.JOIN_GUILD ? <div data-button-hoisted-classname-wrapper={true} className={W.ctaButton}><d.zxk variant={"primary"} size={"sm"} text={a.text} fullWidth={true} onClick={() => {
          (0, U.Ub)(i.id, {})
        }} /></div> : null;
    return <div className={W.otherEmojisContainer}>{u()}{!l && h()}</div>
  }