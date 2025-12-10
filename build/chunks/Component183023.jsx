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
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk323810 = require("./323810.js"),
  Chunk524444 = require("./524444.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk975900 = require("./975900.js");

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

function Q(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Q(Object(t)).forEach(function(n) {
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
    (0, I.u)({
      emojiId: t.emojiId,
      currentGuildId: L.Z.getGuildId()
    });
    let n = (0, B.Z)(t.name),
      i = n !== t.name;
    return (0, r.jsx)(c.V, {
      children: (0, r.jsx)(F.W_, {
        children: (0, r.jsxs)(b.Z, {
          className: K.emojiSection,
          children: [(0, r.jsx)(m.Z, {
            emojiName: t.name,
            className: K.primaryEmoji,
            src: t.src,
            animated: false,
            size: "jumbo"
          }), (0, r.jsxs)(b.Z, {
            direction: b.Z.Direction.VERTICAL,
            justify: b.Z.Justify.CENTER,
            className: K.truncatingText,
            children: [(0, r.jsx)(p.Text, {
              className: K.__invalid_emojiName,
              variant: "text-md/semibold",
              children: i ? (0, r.jsx)("div", {
                className: K.customEmojiLabel,
                children: n
              }) : (0, r.jsx)(u.Z, {
                children: n
              })
            }), (0, r.jsx)(p.Text, {
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
    } = t, c = J, d = k.ZP.getGuildIconURL({
      id: a,
      icon: s,
      size: c,
      canAnimate: true
    }), f = (n = null == n || n) || t.isDiscoverable(), _ = () => {
      t.isDiscoverable() ? (0, U.Ub)(a, {}) : n && (0, D.uL)(V.Z5c.CHANNEL(a, x.Z.getChannelId(a)))
    }, m = () => null != d && f ? (0, r.jsxs)(p.P3F, {
      "aria-label": l,
      onClick: _,
      children: [(0, r.jsx)("img", {
        src: d,
        alt: "",
        className: K.guildIcon
      }), " :"]
    }) : (0, r.jsx)(T.Z, {
      size: T.Z.Sizes.SMALL,
      className: K.guildIconNotClickable,
      guild: t
    }), h = () => f ? (0, r.jsx)(p.P3F, {
      onClick: _,
      className: K.truncatingText,
      children: (0, r.jsx)(p.Heading, {
        className: K.guildName,
        variant: "heading-md/semibold",
        children: (0, r.jsx)(u.Z, {
          children: l
        })
      })
    }) : (0, r.jsx)(p.Heading, {
      variant: "heading-md/semibold",
      children: (0, r.jsx)(u.Z, {
        children: l
      })
    }), g = t.isDiscoverable() && null != t.presenceCount, E = () => {
      let e = !i && !n;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(p.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          children: W.intl.format(W.t["LC+S+m"], {
            membersOnline: t.presenceCount
          })
        }), (0, r.jsx)("div", {
          className: K.dotSeparator
        }), e ? (0, r.jsx)(p.P3F, {
          className: K.joinGuildLink,
          onClick: _,
          children: (0, r.jsx)(p.Text, {
            variant: "text-xs/normal",
            color: "text-link",
            children: W.intl.string(W.t.riu2R5)
          })
        }) : (0, r.jsx)(p.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          children: W.intl.string(W.t.inyJqO)
        })]
      })
    }, O = () => g ? E() : (0, r.jsx)(p.Text, {
      variant: "text-xs/normal",
      color: "text-default",
      children: W.intl.string(W.t.H29mx4)
    });
    return (0, r.jsxs)(b.Z, {
      align: b.Z.Align.CENTER,
      children: [(0, r.jsx)(y.ZP, {
        mask: y.ZP.Masks.SQUIRCLE,
        width: c,
        height: c,
        className: K.__invalid_guildIconContainer,
        children: m()
      }), (0, r.jsxs)(b.Z, {
        direction: b.Z.Direction.VERTICAL,
        className: o()(K.__invalid_guildInformation, K.truncatingText),
        children: [(0, r.jsxs)(b.Z, {
          align: b.Z.Align.CENTER,
          children: [(0, r.jsx)(C.Z, {
            guild: t,
            className: K.guildBadge
          }), h()]
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
      closePopout: C,
      onToggleShowMoreEmojis: D,
      guildEmoji: x,
      demoMode: k = false,
      nonce: U
    } = e, B = (0, l.e7)([j.default], () => j.default.getCurrentUser()), z = (0, l.e7)([L.Z], () => L.Z.getGuildId()), q = G.ZP.isPremium(B), Q = null != z && (z === (null == v ? true : v.id) || z === (null == T ? true : T.id)), X = null != T, J = null != (t = null == v ? true : v.isDiscoverable()) && t;
    k && (q = true, J = true, X = false, Q = false);
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
        isRoleSubscriptionEmoji: A.yH(x),
        isUnusableRoleSubscriptionEmoji: A.Fv(x, null != z ? z : true),
        userIsRoleSubscriber: N.Z.getUserSubscriptionRoles(x.guildId).size > 0
      }, [x, z]),
      eo = !!er && (0, O.Ol)(null == x ? true : x.guildId),
      {
        analyticsLocations: es
      } = (0, g.ZP)(h.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
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
    let el = L.Z.getGuildId(),
      ec = (0, Z.a)({
        sourceType: d,
        expressionSourceApplication: y,
        isPremium: q,
        hasJoinedEmojiSourceGuild: X,
        isRoleSubscriptionEmoji: et,
        isUnusableRoleSubscriptionEmoji: er,
        userIsRoleSubscriber: ei,
        emojiComesFromCurrentGuild: Q,
        isDiscoverable: J,
        shouldHideRoleSubscriptionCTA: eo,
        onOpenPremiumSettings: () => {
          C(), M.default.track(V.rMx.PREMIUM_PROMOTION_OPENED, {
            location_page: $.page,
            location_section: $.section
          }), (0, R.z)()
        }
      }),
      eu = X && er && !eo && (q && et || !q),
      ed = ec.emojiDescription,
      ef = (0, I.u)({
        emojiId: c.emojiId,
        currentGuildId: el,
        popoutData: ec,
        emojiSourceGuildId: null == v ? true : v.id,
        nonce: U,
        demoMode: k
      }),
      ep = ec.type === Z.$.JOIN_GUILD,
      e_ = ec.type === Z.$.GET_PREMIUM,
      em = () => {
        let e = async () => {
          if (k || null == v || X) return;
          C();
          let e = v.id;
          try {
            await _.Z.joinGuild(e), _.Z.transitionToGuildSync(e)
          } catch (e) {}
        }, t = () => {
          C(), (null == T ? true : T.id) != null && _.Z.transitionToGuildSync(T.id, {
            sourceLocationStack: [h.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL]
          }, H.oC.ROLE_SUBSCRIPTIONS)
        }, n = !X && J, i = () => e_ ? (0, r.jsx)(w.Z, {
          className: K.ctaButton,
          subscriptionTier: Y.Si.TIER_2,
          size: f.zx.Sizes.SMALL,
          fullWidth: true,
          textOptions: {
            textOverride: ec.text
          },
          onSubscribeModalClose: t => t ? e() : C(),
          postSuccessGuild: n && null != v ? v : true,
          premiumModalAnalyticsLocation: $
        }) : ep ? (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: K.ctaButton,
          children: (0, r.jsx)(p.Button, {
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
            children: [(0, r.jsx)(m.Z, {
              className: K.primaryEmoji,
              emojiId: c.emojiId,
              emojiName: c.name,
              animated: c.animated,
              size: "jumbo"
            }), (0, r.jsxs)(b.Z, {
              direction: b.Z.Direction.VERTICAL,
              justify: b.Z.Justify.CENTER,
              className: K.truncatingText,
              children: [(0, r.jsx)(p.Text, {
                variant: "text-md/semibold",
                children: (0, r.jsx)(u.Z, {
                  children: c.name
                })
              }), null != ed && (0, r.jsx)(p.Text, {
                variant: "text-sm/normal",
                children: ed
              })]
            })]
          }), i(), eu && (0, r.jsx)(P.Z, {
            text: ei ? W.intl.string(W.t.yma8Vp) : W.intl.string(W.t.nN2DIo),
            size: "sm",
            fullWidth: true,
            onClick: t
          })]
        })
      },
      [eh, eg] = i.useState(false),
      eE = () => {
        var e, t;
        let n = null != v && !X && J && (null != (t = null == v || null == (e = v.emojis) ? true : e.length) ? t : 0) > 1,
          i = () => {
            n && (null == D || D(), eh || k || M.default.track(V.rMx.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, ef), eg(!eh))
          },
          a = () => {
            let e = W.intl.string(W.t.pnsAS2);
            return (0, r.jsx)(p.P3F, {
              onClick: i,
              className: K.showMoreEmojis,
              children: (0, r.jsxs)(b.Z, {
                children: [(0, r.jsx)(p.Text, {
                  className: K.__invalid_showMoreEmojisLabel,
                  "aria-label": e,
                  variant: "text-xs/normal",
                  color: "none",
                  children: e
                }), (0, r.jsx)(p.CJ0, {
                  size: "md",
                  color: "currentColor",
                  className: o()(K.showMoreEmojisArrow, {
                    [K.showMoreEmojisArrowCollapsed]: !eh
                  })
                })]
              })
            })
          };
        return (0, r.jsxs)("div", {
          className: K.guildSection,
          children: [(0, r.jsx)(p.Text, {
            className: K.guildTitle,
            variant: "text-sm/medium",
            color: "text-subtle",
            children: X ? W.intl.string(W.t.ohTzZH) : W.intl.string(W.t["eLfh+a"])
          }), (0, r.jsx)(en, {
            expressionSourceGuild: null != v ? v : S.JO.createFromGuildRecord(T),
            hasJoinedExpressionSourceGuild: X,
            isDisplayingJoinGuildButtonInPopout: ep
          }), n && (0, r.jsxs)(r.Fragment, {
            children: [a(), null != c.emojiId && eh && (0, r.jsx)(ea, {
              emojiId: c.emojiId,
              expressionSourceGuild: v,
              popoutData: ec,
              onClose: C,
              hasJoinedEmojiSourceGuild: X,
              isDisplayingButtonInTopSection: ep || e_
            })]
          })]
        })
      },
      eb = J || X && !Q || null != v;
    return (0, r.jsxs)(F.W_, {
      className: K.popoutContent,
      children: [em(), eb && eE()]
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
    } = e, c = (null != (t = null == i ? true : i.emojis) ? t : []).slice(0, $ + 1).filter(e => e.id !== n).slice(0, $), u = () => a ? null : c.map(e => (0, r.jsx)(d.u, X(q({
      text: e.require_colons ? ":".concat(e.name, ":") : e.name
    }, F.b_), {
      children: (0, r.jsx)(m.Z, {
        className: K.otherEmoji,
        emojiId: e.id,
        animated: e.animated
      })
    }), e.id)), {
      type: f,
      description: _
    } = o, h = () => f === Z.$.GET_PREMIUM ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(w.Z, {
        subscriptionTier: Y.Si.TIER_2,
        textOptions: {
          textOverride: o.text
        },
        className: K.ctaButton,
        fullWidth: true,
        onClick: () => s()
      }), null != _ && (0, r.jsx)("div", {
        className: K.ctaDescription,
        children: (0, r.jsx)(p.Text, {
          variant: "text-sm/medium",
          "aria-label": _,
          children: _
        })
      })]
    }) : f === Z.$.JOIN_GUILD ? (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: K.ctaButton,
      children: (0, r.jsx)(p.Button, {
        variant: "primary",
        size: "sm",
        text: o.text,
        fullWidth: true,
        onClick: () => {
          (0, U.Ub)(i.id, {})
        }
      })
    }) : null;
    return (0, r.jsxs)("div", {
      className: K.otherEmojisContainer,
      children: [u(), !l && h()]
    })
  }