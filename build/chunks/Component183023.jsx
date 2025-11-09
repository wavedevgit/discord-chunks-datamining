/** Chunk was on web.js **/
/** chunk id: 183023, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Az: () => et,
  Oe: () => en,
  UA: () => ei,
  n_: () => ea,
  vk: () => er
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk507274 = require("./507274.jsx"),
  Chunk194983 = require("./194983.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk686546 = require("./686546.jsx"),
  Chunk738774 = require("./738774.js"),
  Chunk785896 = require("./785896.js"),
  Chunk231053 = require("./231053.js"),
  Chunk944386 = require("./944386.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk372769 = require("./372769.jsx"),
  Chunk889564 = require("./889564.js"),
  Chunk687476 = require("./687476.js"),
  Chunk761966 = require("./761966.jsx"),
  Chunk563927 = require("./563927.js"),
  Chunk98278 = require("./98278.js"),
  Chunk767714 = require("./767714.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk900849 = require("./900849.js"),
  Chunk74538 = require("./74538.js"),
  Chunk886132 = require("./886132.js"),
  Chunk524444 = require("./524444.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk702417 = require("./702417.js");

function z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      z(e, t, n[t])
    })
  }
  return e
}

function X(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Q(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : X(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let J = 32,
  $ = 12,
  ee = () => ({
    page: null != (0, Chunk442837.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId()) ? Chunk981631.ZY5.GUILD_CHANNEL : Chunk981631.ZY5.DM_CHANNEL,
    section: Chunk981631.jXE.EMOJI_UPSELL_POPOUT
  }),
  et = e => {
    let {
      node: t
    } = e;
    (0, S.u)({
      emojiId: t.emojiId,
      currentGuildId: M.Z.getGuildId()
    });
    let n = (0, P.Z)(t.name);
    return (0, r.jsx)(c.V, {
      children: (0, r.jsx)(F.W_, {
        children: (0, r.jsxs)(b.Z, {
          className: K.emojiSection,
          children: [(0, r.jsx)(h.Z, {
            emojiName: t.name,
            className: K.primaryEmoji,
            src: t.src,
            animated: false,
            size: "jumbo"
          }), (0, r.jsxs)(b.Z, {
            direction: b.Z.Direction.VERTICAL,
            justify: b.Z.Justify.CENTER,
            className: K.truncatingText,
            children: [(0, r.jsx)(_.Text, {
              className: K.__invalid_emojiName,
              variant: "text-md/semibold",
              children: (0, r.jsx)(u.Z, {
                children: n
              })
            }), (0, r.jsx)(_.Text, {
              variant: "text-sm/normal",
              children: W.intl.string(W.t.sXdH8c)
            })]
          })]
        })
      })
    })
  },
  en = e => {
    let {
      expressionSourceGuild: t,
      hasJoinedExpressionSourceGuild: n,
      isDisplayingJoinGuildButtonInPopout: i
    } = e, {
      id: a,
      icon: s,
      name: l
    } = t, c = J, d = U.ZP.getGuildIconURL({
      id: a,
      icon: s,
      size: c,
      canAnimate: true
    }), f = (n = null == n || n) || t.isDiscoverable(), p = () => {
      t.isDiscoverable() ? (0, G.Ub)(a, {}) : n && (0, x.uL)(V.Z5c.CHANNEL(a, L.Z.getChannelId(a)))
    }, h = () => null != d && f ? (0, r.jsxs)(_.P3F, {
      "aria-label": l,
      onClick: p,
      children: [(0, r.jsx)("img", {
        src: d,
        alt: "",
        className: K.guildIcon
      }), " :"]
    }) : (0, r.jsx)(T.Z, {
      size: T.Z.Sizes.SMALL,
      className: K.guildIconNotClickable,
      guild: t
    }), m = () => f ? (0, r.jsx)(_.P3F, {
      onClick: p,
      className: K.truncatingText,
      children: (0, r.jsx)(_.Heading, {
        className: K.guildName,
        variant: "heading-md/semibold",
        children: (0, r.jsx)(u.Z, {
          children: l
        })
      })
    }) : (0, r.jsx)(_.Heading, {
      variant: "heading-md/semibold",
      children: (0, r.jsx)(u.Z, {
        children: l
      })
    }), g = t.isDiscoverable() && null != t.presenceCount, E = () => {
      let e = !i && !n;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(_.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: W.intl.format(W.t["LC+S+m"], {
            membersOnline: t.presenceCount
          })
        }), (0, r.jsx)("div", {
          className: K.dotSeparator
        }), e ? (0, r.jsx)(_.P3F, {
          className: K.joinGuildLink,
          onClick: p,
          children: (0, r.jsx)(_.Text, {
            variant: "text-xs/normal",
            color: "text-link",
            children: W.intl.string(W.t.riu2R5)
          })
        }) : (0, r.jsx)(_.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: W.intl.string(W.t.inyJqO)
        })]
      })
    }, O = () => g ? E() : (0, r.jsx)(_.Text, {
      variant: "text-xs/normal",
      color: "header-secondary",
      children: W.intl.string(W.t.H29mx4)
    });
    return (0, r.jsxs)(b.Z, {
      align: b.Z.Align.CENTER,
      children: [(0, r.jsx)(y.ZP, {
        mask: y.ZP.Masks.SQUIRCLE,
        width: c,
        height: c,
        className: K.__invalid_guildIconContainer,
        children: h()
      }), (0, r.jsxs)(b.Z, {
        direction: b.Z.Direction.VERTICAL,
        className: o()(K.__invalid_guildInformation, K.truncatingText),
        children: [(0, r.jsxs)(b.Z, {
          align: b.Z.Align.CENTER,
          children: [(0, r.jsx)(A.Z, {
            guild: t,
            className: K.guildBadge
          }), m()]
        }), (0, r.jsx)(b.Z, {
          align: b.Z.Align.CENTER,
          children: O()
        })]
      })]
    })
  },
  er = e => {
    let {
      node: t,
      closePopout: n,
      refreshPositionKey: i,
      nonce: a
    } = e, {
      expressionSourceGuild: o,
      expressionSourceApplication: s,
      sourceType: l,
      joinedEmojiSourceGuildRecord: u,
      emoji: d,
      isFetching: f
    } = (0, v.i)({
      emojiId: t.emojiId,
      refreshPositionKey: i
    });
    return f ? (0, r.jsx)(F.SE, {}) : (0, r.jsx)(c.V, {
      "aria-label": t.name,
      children: (0, r.jsx)(ei, {
        node: t,
        sourceType: l,
        expressionSourceApplication: s,
        guildEmoji: null != d ? d : true,
        expressionSourceGuild: o,
        joinedEmojiSourceGuildRecord: u,
        closePopout: n,
        onToggleShowMoreEmojis: i,
        demoMode: false,
        nonce: a
      })
    })
  },
  ei = e => {
    var t, n, a;
    let {
      node: c,
      sourceType: d,
      expressionSourceApplication: y,
      expressionSourceGuild: v,
      joinedEmojiSourceGuildRecord: T,
      closePopout: A,
      onToggleShowMoreEmojis: P,
      guildEmoji: x,
      demoMode: L = false,
      nonce: U
    } = e, G = (0, l.e7)([j.default], () => j.default.getCurrentUser()), z = (0, l.e7)([M.Z], () => M.Z.getGuildId()), q = B.ZP.isPremium(G), X = null != z && (z === (null == v ? true : v.id) || z === (null == T ? true : T.id)), Q = null != T, J = null != (t = null == v ? true : v.isDiscoverable()) && t;
    L && (q = true, J = true, Q = false, X = false);
    let $ = ee(),
      {
        isRoleSubscriptionEmoji: et,
        isUnusableRoleSubscriptionEmoji: er,
        userIsRoleSubscriber: ei
      } = i.useMemo(() => null == x ? {
        isRoleSubscriptionEmoji: false,
        isUnusableRoleSubscriptionEmoji: false,
        userIsRoleSubscriber: false
      } : {
        isRoleSubscriptionEmoji: C.yH(x),
        isUnusableRoleSubscriptionEmoji: C.Fv(x, null != z ? z : true),
        userIsRoleSubscriber: N.Z.getUserSubscriptionRoles(x.guildId).size > 0
      }, [x, z]),
      eo = !!er && (0, O.Ol)(null == x ? true : x.guildId),
      {
        analyticsLocations: es
      } = (0, g.ZP)(m.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
    (0, E.Z)({
      type: s.ImpressionTypes.MODAL,
      name: s.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
      properties: {
        location_stack: es,
        emoji_guild_id: null != (n = null == x ? true : x.guildId) ? n : null,
        emoji_id: null != (a = null == x ? true : x.id) ? a : null
      }
    }, {
      disableTrack: !et
    });
    let el = M.Z.getGuildId(),
      ec = (0, Z.a)({
        sourceType: d,
        expressionSourceApplication: y,
        isPremium: q,
        hasJoinedEmojiSourceGuild: Q,
        isRoleSubscriptionEmoji: et,
        isUnusableRoleSubscriptionEmoji: er,
        userIsRoleSubscriber: ei,
        emojiComesFromCurrentGuild: X,
        isDiscoverable: J,
        shouldHideRoleSubscriptionCTA: eo,
        onOpenPremiumSettings: () => {
          A(), k.default.track(V.rMx.PREMIUM_PROMOTION_OPENED, {
            location_page: $.page,
            location_section: $.section
          }), (0, w.z)()
        }
      }),
      eu = Q && er && !eo && (q && et || !q),
      ed = ec.emojiDescription,
      ef = (0, S.u)({
        emojiId: c.emojiId,
        currentGuildId: el,
        popoutData: ec,
        emojiSourceGuildId: null == v ? true : v.id,
        nonce: U,
        demoMode: L
      }),
      e_ = ec.type === Z.$.JOIN_GUILD,
      ep = ec.type === Z.$.GET_PREMIUM,
      eh = () => {
        let e = async () => {
          if (L || null == v || Q) return;
          A();
          let e = v.id;
          try {
            await p.Z.joinGuild(e), p.Z.transitionToGuildSync(e)
          } catch (e) {}
        }, t = () => {
          A(), (null == T ? true : T.id) != null && p.Z.transitionToGuildSync(T.id, {
            sourceLocationStack: [m.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL]
          }, H.oC.ROLE_SUBSCRIPTIONS)
        }, n = !Q && J, i = () => ep ? (0, r.jsx)(D.Z, {
          className: K.ctaButton,
          subscriptionTier: Y.Si.TIER_2,
          size: f.zx.Sizes.SMALL,
          fullWidth: true,
          textOptions: {
            textOverride: ec.text
          },
          onSubscribeModalClose: t => t ? e() : A(),
          postSuccessGuild: n && null != v ? v : true,
          premiumModalAnalyticsLocation: $
        }) : e_ ? (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: K.ctaButton,
          children: (0, r.jsx)(_.Button, {
            variant: "primary",
            size: "sm",
            text: ec.text,
            fullWidth: true,
            onClick: e
          })
        }) : true;
        return (0, r.jsxs)("div", {
          className: K.emojiSection,
          children: [(0, r.jsxs)(b.Z, {
            children: [(0, r.jsx)(h.Z, {
              className: K.primaryEmoji,
              emojiId: c.emojiId,
              emojiName: c.name,
              animated: c.animated,
              size: "jumbo"
            }), (0, r.jsxs)(b.Z, {
              direction: b.Z.Direction.VERTICAL,
              justify: b.Z.Justify.CENTER,
              className: K.truncatingText,
              children: [(0, r.jsx)(_.Text, {
                variant: "text-md/semibold",
                children: (0, r.jsx)(u.Z, {
                  children: c.name
                })
              }), null != ed && (0, r.jsx)(_.Text, {
                variant: "text-sm/normal",
                children: ed
              })]
            })]
          }), i(), eu && (0, r.jsx)(R.Z, {
            text: ei ? W.intl.string(W.t.yma8Vp) : W.intl.string(W.t.nN2DIo),
            size: "sm",
            fullWidth: true,
            onClick: t
          })]
        })
      },
      [em, eg] = i.useState(false),
      eE = () => {
        var e, t;
        let n = null != v && !Q && J && (null != (t = null == v || null == (e = v.emojis) ? true : e.length) ? t : 0) > 1,
          i = () => {
            n && (null == P || P(), em || L || k.default.track(V.rMx.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, ef), eg(!em))
          },
          a = () => {
            let e = W.intl.string(W.t.pnsAS2);
            return (0, r.jsx)(_.P3F, {
              onClick: i,
              className: K.showMoreEmojis,
              children: (0, r.jsxs)(b.Z, {
                children: [(0, r.jsx)(_.Text, {
                  className: K.__invalid_showMoreEmojisLabel,
                  "aria-label": e,
                  variant: "text-xs/normal",
                  color: "none",
                  children: e
                }), (0, r.jsx)(_.CJ0, {
                  size: "md",
                  color: "currentColor",
                  className: o()(K.showMoreEmojisArrow, {
                    [K.showMoreEmojisArrowCollapsed]: !em
                  })
                })]
              })
            })
          };
        return (0, r.jsxs)("div", {
          className: K.guildSection,
          children: [(0, r.jsx)(_.Text, {
            className: K.guildTitle,
            variant: "text-sm/medium",
            color: "text-secondary",
            children: Q ? W.intl.string(W.t.ohTzZH) : W.intl.string(W.t["eLfh+a"])
          }), (0, r.jsx)(en, {
            expressionSourceGuild: null != v ? v : I.JO.createFromGuildRecord(T),
            hasJoinedExpressionSourceGuild: Q,
            isDisplayingJoinGuildButtonInPopout: e_
          }), n && (0, r.jsxs)(r.Fragment, {
            children: [a(), null != c.emojiId && em && (0, r.jsx)(ea, {
              emojiId: c.emojiId,
              expressionSourceGuild: v,
              popoutData: ec,
              onClose: A,
              hasJoinedEmojiSourceGuild: Q,
              isDisplayingButtonInTopSection: e_ || ep
            })]
          })]
        })
      },
      eb = J || Q && !X || null != v;
    return (0, r.jsxs)(F.W_, {
      className: K.popoutContent,
      children: [eh(), eb && eE()]
    })
  },
  ea = e => {
    var t;
    let {
      emojiId: n,
      expressionSourceGuild: i,
      hasJoinedEmojiSourceGuild: a,
      popoutData: o,
      onClose: s,
      isDisplayingButtonInTopSection: l
    } = e, c = (null != (t = null == i ? true : i.emojis) ? t : []).slice(0, $ + 1).filter(e => e.id !== n).slice(0, $), u = () => a ? null : c.map(e => (0, r.jsx)(d.u, Q(q({
      text: e.require_colons ? ":".concat(e.name, ":") : e.name
    }, F.b_), {
      children: (0, r.jsx)(h.Z, {
        className: K.otherEmoji,
        emojiId: e.id,
        animated: e.animated
      })
    }), e.id)), {
      type: f,
      description: p
    } = o, m = () => f === Z.$.GET_PREMIUM ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(D.Z, {
        subscriptionTier: Y.Si.TIER_2,
        textOptions: {
          textOverride: o.text
        },
        className: K.ctaButton,
        fullWidth: true,
        onClick: () => s()
      }), null != p && (0, r.jsx)("div", {
        className: K.ctaDescription,
        children: (0, r.jsx)(_.Text, {
          variant: "text-sm/medium",
          "aria-label": p,
          children: p
        })
      })]
    }) : f === Z.$.JOIN_GUILD ? (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: K.ctaButton,
      children: (0, r.jsx)(_.Button, {
        variant: "primary",
        size: "sm",
        text: o.text,
        fullWidth: true,
        onClick: () => {
          (0, G.Ub)(i.id, {})
        }
      })
    }) : null;
    return (0, r.jsxs)("div", {
      className: K.otherEmojisContainer,
      children: [u(), !l && m()]
    })
  }