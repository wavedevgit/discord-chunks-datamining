/** Chunk was on web.js **/
/** chunk id: 767143, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G7: () => en,
  MV: () => et,
  iP: () => er,
  mG: () => ea,
  sX: () => ei
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk110259 = require("./110259.js"),
  Chunk311907 = require("./311907.js"),
  Chunk305866 = require("./305866.jsx"),
  Chunk3026 = require("./3026.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk686956 = require("./686956.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk573435 = require("./573435.jsx"),
  Chunk836039 = require("./836039.js"),
  Chunk695282 = require("./695282.js"),
  Chunk624793 = require("./624793.js"),
  Chunk731383 = require("./731383.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk714991 = require("./714991.jsx"),
  Chunk492494 = require("./492494.js"),
  Chunk384684 = require("./384684.js"),
  Chunk985242 = require("./985242.jsx"),
  Chunk87719 = require("./87719.js"),
  Chunk465794 = require("./465794.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk486020 = require("./486020.js"),
  Chunk449054 = require("./449054.js"),
  Chunk927578 = require("./927578.js"),
  Chunk450707 = require("./450707.js"),
  Chunk252061 = require("./252061.js"),
  Chunk652176 = require("./652176.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk767419 = require("./767419.js");

function q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      q(e, t, n[t])
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
    page: null != (0, l.bG)([x.A], () => x.A.getGuildId()) ? H.liQ.GUILD_CHANNEL : H.liQ.DM_CHANNEL,
    section: H.JJy.EMOJI_UPSELL_POPOUT
  }),
  et = e => {
    let {
      node: t
    } = e;
    (0, I.i)({
      emojiId: t.emojiId,
      currentGuildId: x.A.getGuildId()
    });
    let n = (0, V.A)(t.name),
      i = n !== t.name;
    return (0, r.jsx)(c.l, {
      children: (0, r.jsx)(B.Uq, {
        children: (0, r.jsxs)(y.A, {
          className: z.gH,
          children: [(0, r.jsx)(h.A, {
            emojiName: t.name,
            className: z.P$,
            src: t.src,
            animated: false,
            size: "jumbo"
          }), (0, r.jsxs)(y.A, {
            direction: y.A.Direction.VERTICAL,
            justify: y.A.Justify.CENTER,
            className: z.bM,
            children: [(0, r.jsx)(p.Text, {
              className: z.__invalid_emojiName,
              variant: "text-md/semibold",
              children: i ? (0, r.jsx)("div", {
                className: z.Gl,
                children: n
              }) : (0, r.jsx)(u.A, {
                children: n
              })
            }), (0, r.jsx)(p.Text, {
              variant: "text-sm/normal",
              children: K.intl.string(K.t.sXdH8c)
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
    } = t, c = J, d = k.Ay.getGuildIconURL({
      id: a,
      icon: s,
      size: c,
      canAnimate: true
    }), f = (n = null == n || n) || t.isDiscoverable(), _ = () => {
      t.isDiscoverable() ? (0, U.Z2)(a, {}) : n && (0, D.pX)(H.BVt.CHANNEL(a, L.A.getChannelId(a)))
    }, h = () => null != d && f ? (0, r.jsxs)(p.DUT, {
      "aria-label": l,
      onClick: _,
      children: [(0, r.jsx)("img", {
        src: d,
        alt: "",
        className: z.$f
      }), " :"]
    }) : (0, r.jsx)(S.A, {
      size: S.A.Sizes.SMALL,
      className: z.oi,
      guild: t
    }), m = () => f ? (0, r.jsx)(p.DUT, {
      onClick: _,
      className: z.bM,
      children: (0, r.jsx)(p.Heading, {
        className: z.J5,
        variant: "heading-md/semibold",
        children: (0, r.jsx)(u.A, {
          children: l
        })
      })
    }) : (0, r.jsx)(p.Heading, {
      variant: "heading-md/semibold",
      children: (0, r.jsx)(u.A, {
        children: l
      })
    }), g = t.isDiscoverable() && null != t.presenceCount, E = () => {
      let e = !i && !n;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(p.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          children: K.intl.format(K.t["LC+S+m"], {
            membersOnline: t.presenceCount
          })
        }), (0, r.jsx)("div", {
          className: z.zk
        }), e ? (0, r.jsx)(p.DUT, {
          className: z.Ki,
          onClick: _,
          children: (0, r.jsx)(p.Text, {
            variant: "text-xs/normal",
            color: "text-link",
            children: K.intl.string(K.t.riu2R5)
          })
        }) : (0, r.jsx)(p.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          children: K.intl.string(K.t.inyJqO)
        })]
      })
    }, O = () => g ? E() : (0, r.jsx)(p.Text, {
      variant: "text-xs/normal",
      color: "text-default",
      children: K.intl.string(K.t.H29mx4)
    });
    return (0, r.jsxs)(y.A, {
      align: y.A.Align.CENTER,
      children: [(0, r.jsx)(b.Ay, {
        mask: b.Ay.Masks.SQUIRCLE,
        width: c,
        height: c,
        className: z.__invalid_guildIconContainer,
        children: h()
      }), (0, r.jsxs)(y.A, {
        direction: y.A.Direction.VERTICAL,
        className: o()(z.__invalid_guildInformation, z.bM),
        children: [(0, r.jsxs)(y.A, {
          align: y.A.Align.CENTER,
          children: [(0, r.jsx)(T.A, {
            guild: t,
            className: z.n2
          }), m()]
        }), (0, r.jsx)(y.A, {
          align: y.A.Align.CENTER,
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
    } = (0, v.y)({
      emojiId: t.emojiId,
      refreshPositionKey: i
    });
    return f ? (0, r.jsx)(B.Y0, {}) : (0, r.jsx)(c.l, {
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
      expressionSourceApplication: b,
      expressionSourceGuild: v,
      joinedEmojiSourceGuildRecord: S,
      closePopout: T,
      onToggleShowMoreEmojis: D,
      guildEmoji: L,
      demoMode: k = false,
      nonce: U
    } = e, V = (0, l.bG)([M.default], () => M.default.getCurrentUser()), q = (0, l.bG)([x.A], () => x.A.getGuildId()), Z = G.Ay.isPremium(V), Q = null != q && (q === (null == v ? true : v.id) || q === (null == S ? true : S.id)), X = null != S, J = null != (t = null == v ? true : v.isDiscoverable()) && t;
    k && (Z = true, J = true, X = false, Q = false);
    let $ = ee(),
      {
        isRoleSubscriptionEmoji: et,
        isUnusableRoleSubscriptionEmoji: er,
        userIsRoleSubscriber: ei
      } = i.useMemo(() => null == L ? {
        isRoleSubscriptionEmoji: false,
        isUnusableRoleSubscriptionEmoji: false,
        userIsRoleSubscriber: false
      } : {
        isRoleSubscriptionEmoji: C.kT(L),
        isUnusableRoleSubscriptionEmoji: C.JN(L, null != q ? q : true),
        userIsRoleSubscriber: N.A.getUserSubscriptionRoles(L.guildId).size > 0
      }, [L, q]),
      eo = !!er && (0, O.tE)(null == L ? true : L.guildId),
      {
        analyticsLocations: es
      } = (0, g.Ay)(m.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
    (0, E.A)({
      type: s.ImpressionTypes.MODAL,
      name: s.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
      properties: {
        location_stack: es,
        emoji_guild_id: null != (n = null == L ? true : L.guildId) ? n : null,
        emoji_id: null != (a = null == L ? true : L.id) ? a : null
      }
    }, {
      disableTrack: !et
    });
    let el = x.A.getGuildId(),
      ec = (0, F.O)({
        sourceType: d,
        expressionSourceApplication: b,
        isPremium: Z,
        hasJoinedEmojiSourceGuild: X,
        isRoleSubscriptionEmoji: et,
        isUnusableRoleSubscriptionEmoji: er,
        userIsRoleSubscriber: ei,
        emojiComesFromCurrentGuild: Q,
        isDiscoverable: J,
        shouldHideRoleSubscriptionCTA: eo,
        onOpenPremiumSettings: () => {
          T(), j.default.track(H.HAw.PREMIUM_PROMOTION_OPENED, {
            location_page: $.page,
            location_section: $.section
          }), (0, R.Z)()
        }
      }),
      eu = X && er && !eo && (Z && et || !Z),
      ed = ec.emojiDescription,
      ef = (0, I.i)({
        emojiId: c.emojiId,
        currentGuildId: el,
        popoutData: ec,
        emojiSourceGuildId: null == v ? true : v.id,
        nonce: U,
        demoMode: k
      }),
      ep = ec.type === F.u.JOIN_GUILD,
      e_ = ec.type === F.u.GET_PREMIUM,
      eh = () => {
        let e = async () => {
          if (k || null == v || X) return;
          T();
          let e = v.id;
          try {
            await _.A.joinGuild(e), _.A.transitionToGuildSync(e)
          } catch (e) {}
        }, t = () => {
          T(), (null == S ? true : S.id) != null && _.A.transitionToGuildSync(S.id, {
            sourceLocationStack: [m.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL]
          }, Y.VV.ROLE_SUBSCRIPTIONS)
        }, n = !X && J, i = () => e_ ? (0, r.jsx)(P.A, {
          className: z.lI,
          subscriptionTier: W.pe.TIER_2,
          size: f.$n.Sizes.SMALL,
          fullWidth: true,
          textOptions: {
            textOverride: ec.text
          },
          onSubscribeModalClose: t => t ? e() : T(),
          postSuccessGuild: n && null != v ? v : true,
          premiumModalAnalyticsLocation: $
        }) : ep ? (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: z.lI,
          children: (0, r.jsx)(p.Button, {
            variant: "primary",
            size: "sm",
            text: ec.text,
            fullWidth: true,
            onClick: e
          })
        }) : true;
        return (0, r.jsxs)("div", {
          className: z.gH,
          children: [(0, r.jsxs)(y.A, {
            children: [(0, r.jsx)(h.A, {
              className: z.P$,
              emojiId: c.emojiId,
              emojiName: c.name,
              animated: c.animated,
              size: "jumbo"
            }), (0, r.jsxs)(y.A, {
              direction: y.A.Direction.VERTICAL,
              justify: y.A.Justify.CENTER,
              className: z.bM,
              children: [(0, r.jsx)(p.Text, {
                variant: "text-md/semibold",
                children: (0, r.jsx)(u.A, {
                  children: c.name
                })
              }), null != ed && (0, r.jsx)(p.Text, {
                variant: "text-sm/normal",
                children: ed
              })]
            })]
          }), i(), eu && (0, r.jsx)(w.A, {
            text: ei ? K.intl.string(K.t.yma8Vp) : K.intl.string(K.t.nN2DIo),
            size: "sm",
            fullWidth: true,
            onClick: t
          })]
        })
      },
      [em, eg] = i.useState(false),
      eE = () => {
        var e, t;
        let n = null != v && !X && J && (null != (e = null == v || null == (t = v.emojis) ? true : t.length) ? e : 0) > 1,
          i = () => {
            n && (null == D || D(), em || k || j.default.track(H.HAw.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, ef), eg(!em))
          },
          a = () => {
            let e = K.intl.string(K.t.pnsAS2);
            return (0, r.jsx)(p.DUT, {
              onClick: i,
              className: z.wK,
              children: (0, r.jsxs)(y.A, {
                children: [(0, r.jsx)(p.Text, {
                  className: z.__invalid_showMoreEmojisLabel,
                  "aria-label": e,
                  variant: "text-xs/normal",
                  color: "none",
                  children: e
                }), (0, r.jsx)(p.abt, {
                  size: "md",
                  color: "currentColor",
                  className: o()(z.ZB, {
                    [z.cP]: !em
                  })
                })]
              })
            })
          };
        return (0, r.jsxs)("div", {
          className: z.tl,
          children: [(0, r.jsx)(p.Text, {
            className: z.YW,
            variant: "text-sm/medium",
            color: "text-subtle",
            children: X ? K.intl.string(K.t.ohTzZH) : K.intl.string(K.t["eLfh+a"])
          }), (0, r.jsx)(en, {
            expressionSourceGuild: null != v ? v : A.GO.createFromGuildRecord(S),
            hasJoinedExpressionSourceGuild: X,
            isDisplayingJoinGuildButtonInPopout: ep
          }), n && (0, r.jsxs)(r.Fragment, {
            children: [a(), null != c.emojiId && em && (0, r.jsx)(ea, {
              emojiId: c.emojiId,
              expressionSourceGuild: v,
              popoutData: ec,
              onClose: T,
              hasJoinedEmojiSourceGuild: X,
              isDisplayingButtonInTopSection: ep || e_
            })]
          })]
        })
      },
      ey = J || X && !Q || null != v;
    return (0, r.jsxs)(B.Uq, {
      className: z.Bm,
      children: [eh(), ey && eE()]
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
    } = e, c = (null != (t = null == i ? true : i.emojis) ? t : []).slice(0, $ + 1).filter(e => e.id !== n).slice(0, $), u = () => a ? null : c.map(e => (0, r.jsx)(d.m, X(Z({
      text: e.require_colons ? ":".concat(e.name, ":") : e.name
    }, B.Uk), {
      children: (0, r.jsx)(h.A, {
        className: z.Th,
        emojiId: e.id,
        animated: e.animated
      })
    }), e.id)), {
      type: f,
      description: _
    } = o, m = () => f === F.u.GET_PREMIUM ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(P.A, {
        subscriptionTier: W.pe.TIER_2,
        textOptions: {
          textOverride: o.text
        },
        className: z.lI,
        fullWidth: true,
        onClick: () => s()
      }), null != _ && (0, r.jsx)("div", {
        className: z.vd,
        children: (0, r.jsx)(p.Text, {
          variant: "text-sm/medium",
          "aria-label": _,
          children: _
        })
      })]
    }) : f === F.u.JOIN_GUILD ? (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: z.lI,
      children: (0, r.jsx)(p.Button, {
        variant: "primary",
        size: "sm",
        text: o.text,
        fullWidth: true,
        onClick: () => {
          (0, U.Z2)(i.id, {})
        }
      })
    }) : null;
    return (0, r.jsxs)("div", {
      className: z.LX,
      children: [u(), !l && m()]
    })
  }