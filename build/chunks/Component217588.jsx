/** Chunk was on web.js **/
/** chunk id: 217588, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => $
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk194983 = require("./194983.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk493773 = require("./493773.js"),
  Chunk367907 = require("./367907.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk231053 = require("./231053.js"),
  Chunk697568 = require("./697568.js"),
  Chunk183023 = require("./183023.jsx"),
  Chunk524444 = require("./524444.jsx"),
  Chunk98278 = require("./98278.js"),
  Chunk767714 = require("./767714.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk453070 = require("./453070.js"),
  Chunk926491 = require("./926491.js"),
  Chunk378233 = require("./378233.js"),
  Chunk419922 = require("./419922.jsx"),
  Chunk688179 = require("./688179.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk564651 = require("./564651.js"),
  Chunk975900 = require("./975900.js");

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      k(e, t, n[t])
    })
  }
  return e
}

function U(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function G(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : U(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let B = 80,
  Z = 48,
  F = 32,
  V = 2,
  H = 3,
  Y = 12,
  W = (e, t) => t ? x.intl.format(x.t.auckXz, {
    stickerPackName: e.name
  }) : x.intl.format(x.t.OzB6e3, {
    stickerPackName: e.name
  }),
  K = e => {
    let {
      sticker: t,
      stickerPack: n
    } = e;
    return i.useMemo(() => null == n ? [] : n.stickers.slice(0, H + 1).reduce((e, n) => e.length !== H && n.id !== t.id ? e.concat(n) : e, []), [t, n])
  };

function z(e) {
  T.default.track(D.rMx.PREMIUM_PROMOTION_OPENED, {
    location_page: null != e.guild_id ? D.ZY5.GUILD_CHANNEL : D.ZY5.DM_CHANNEL,
    location_section: D.jXE.STICKER_POPOUT
  }), (0, y.z)()
}

function q(e) {
  let {
    sticker: t,
    description: n
  } = e;
  return (0, r.jsxs)(h.Z, {
    children: [(0, r.jsx)(R.Z, {
      sticker: t,
      size: Z,
      isInteracting: true
    }), (0, r.jsxs)(h.Z, {
      direction: h.Z.Direction.VERTICAL,
      justify: h.Z.Justify.CENTER,
      className: M.truncatingText,
      children: [(0, r.jsx)(d.Text, {
        variant: "text-md/semibold",
        children: (0, r.jsx)(l.Z, {
          children: t.name
        })
      }), null != n && (0, r.jsx)(d.Text, {
        variant: "text-sm/normal",
        children: n
      })]
    })]
  })
}
let X = e => {
    let {
      closePopout: t,
      sticker: n,
      channel: a,
      refreshPositionKey: o
    } = e, [l, c, u] = (0, s.Wu)([C.Z], () => [C.Z.getStickerPack(n.pack_id), !C.Z.hasLoadedStickerPacks, C.Z.isPremiumPack(n.pack_id)], [n]), f = K({
      sticker: n,
      stickerPack: l
    });
    (0, A.Pq)(n.pack_id);
    let _ = (0, A.Sd)(a),
      h = {
        refreshPositionKey: o,
        channel: a
      },
      m = i.useRef(h);
    if (i.useEffect(() => {
        m.current = h
      }), i.useEffect(() => {
        let {
          refreshPositionKey: e
        } = m.current;
        e()
      }, [c]), i.useEffect(() => {
        let {
          channel: e
        } = m.current;
        T.default.track(D.rMx.OPEN_POPOUT, j({
          type: D.jXE.STICKER_POPOUT,
          guild_id: e.getGuildId(),
          sticker_pack_id: n.pack_id
        }, (0, p.v_)(e)))
      }, [n.pack_id]), c || null == l) return (0, r.jsx)(b.SE, {
      className: L.popoutLoader
    });
    let g = u,
      E = () => {
        g && (0, P.m)({
          stickerPack: l,
          stickerPickerCategories: _
        }), t()
      };
    return (0, r.jsxs)(b.W_, {
      className: L.popoutContent,
      children: [(0, r.jsx)(d.Heading, {
        variant: "heading-md/semibold",
        children: n.name
      }), (0, r.jsx)(d.Text, {
        variant: "text-sm/normal",
        children: W(l, u)
      }), (0, r.jsx)("ul", {
        className: L.stickersList,
        children: f.map(e => (0, r.jsx)(R.Z, {
          isInteracting: true,
          size: B,
          sticker: e
        }, e.id))
      }), u && (0, r.jsx)("div", {
        className: L.packActions,
        children: (0, r.jsx)(d.Button, {
          variant: "secondary",
          size: "sm",
          text: x.intl.string(x.t.GPy3Ar),
          onClick: E
        }, "view-sticker-pack")
      })]
    })
  },
  Q = e => {
    let t, {
        sticker: n,
        channel: a,
        closePopout: l,
        refreshPositionKey: y
      } = e,
      [A, C] = i.useState(null),
      [N, P] = i.useState(false),
      k = I.default.getCurrentUser(),
      U = S.ZP.canUseCustomStickersEverywhere(k),
      B = (0, s.e7)([v.Z], () => v.Z.getGuild(n.guild_id)),
      Z = null != B,
      [H, W] = i.useState(false),
      [K, X] = i.useState(null),
      Q = i.useMemo(() => ({
        page: null != a.guild_id ? D.ZY5.GUILD_CHANNEL : D.ZY5.DM_CHANNEL,
        section: D.jXE.STICKER_POPOUT
      }), [a.guild_id]),
      {
        current: J
      } = i.useRef(j({
        guild_id: a.getGuildId()
      }, (0, p.v_)(a))),
      $ = {
        stickerSourceGuild: B,
        refreshPositionKey: y
      },
      ee = i.useRef($);
    i.useEffect(() => {
      ee.current = $
    }), i.useEffect(() => {
      let {
        stickerSourceGuild: e
      } = ee.current;
      (async () => {
        (null == e || e.features.has(D.GuildFeatures.DISCOVERABLE)) && C(await (0, g.Z)(n.id)), P(true)
      })()
    }, [n.id, Z]);
    let et = n.guild_id === a.getGuildId(),
      en = null != A,
      er = false,
      ei = "Custom Sticker Popout";
    U ? t = Z ? et ? x.intl.string(x.t.fZ0DiG) : x.intl.string(x.t["1f6D9m"]) : en ? x.intl.string(x.t.yHmoR9) : x.intl.string(x.t.vZaScH) : Z ? (t = et ? x.intl.string(x.t.jNphpt) : x.intl.string(x.t.lyD5ZW), er = true, ei = "Custom Sticker Popout (Upsell)") : en ? (t = x.intl.string(x.t.IuXYch), er = true, ei = "Custom Sticker Popout (Upsell)") : (t = x.intl.format(x.t.hGWuxU, {
      openPremiumSettings: () => {
        z(a), l()
      }
    }), ei = "Custom Sticker Popout (Soft Upsell)");
    let ea = !er && !Z && en && U;
    if (i.useEffect(() => {
        let {
          refreshPositionKey: e
        } = ee.current;
        e()
      }, [N, A]), (0, _.ZP)(() => {
        T.default.track(D.rMx.OPEN_POPOUT, j({
          type: ei
        }, J))
      }), !N) return (0, r.jsx)(b.SE, {
      className: L.popoutLoader
    });
    {
      let e = () => {
          let e = async () => {
            if (null == A || Z) return;
            l();
            let e = A.id;
            try {
              await f.Z.joinGuild(e), f.Z.transitionToGuildSync(e)
            } catch (e) {}
          };
          return (0, r.jsxs)("div", {
            className: M.emojiSection,
            children: [(0, r.jsx)(q, {
              description: t,
              sticker: n
            }), er && (0, r.jsx)(O.Z, {
              className: M.ctaButton,
              subscriptionTier: w.Si.TIER_2,
              size: u.zx.Sizes.SMALL,
              fullWidth: true,
              textOptions: {
                textOverride: x.intl.string(x.t["gl/XHJ"])
              },
              onSubscribeModalClose: t => t ? e() : l(),
              postSuccessGuild: Z || null == A ? true : A,
              premiumModalAnalyticsLocation: Q
            }), ea && (0, r.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: M.ctaButton,
              children: (0, r.jsx)(d.Button, {
                variant: "primary",
                size: "sm",
                text: x.intl.string(x.t.riu2R5),
                fullWidth: true,
                onClick: e
              })
            })]
          })
        },
        i = () => {
          var e;
          if (!en && !Z) return;
          let t = (null != (e = null == A ? true : A.stickers) ? e : []).slice(0, Y + 1).filter(e => e.id !== n.id).slice(0, Y),
            i = () => {
              y(), W(!H)
            },
            a = null != A ? m.JO.createFromDiscoverableGuild(A) : m.JO.createFromGuildRecord(B);
          return (0, r.jsxs)("div", {
            className: M.guildSection,
            children: [(0, r.jsx)(d.Text, {
              variant: "text-sm/normal",
              color: "text-secondary",
              className: M.guildTitle,
              children: Z ? x.intl.string(x.t.kx6pEG) : x.intl.string(x.t.pDE7Gb)
            }), (0, r.jsx)(E.Oe, {
              expressionSourceGuild: a,
              hasJoinedExpressionSourceGuild: Z,
              isDisplayingJoinGuildButtonInPopout: ea
            }), !Z && (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(d.P3F, {
                onClick: i,
                className: M.showMoreEmojis,
                children: (0, r.jsxs)(h.Z, {
                  children: [(0, r.jsx)(d.Text, {
                    className: M.__invalid_showMoreEmojisLabel,
                    variant: "text-xs/normal",
                    color: "none",
                    children: x.intl.string(x.t.vtH5hn)
                  }), (0, r.jsx)(d.CJ0, {
                    size: "md",
                    color: "currentColor",
                    className: o()(M.showMoreEmojisArrow, {
                      [M.showMoreEmojisArrowCollapsed]: !H
                    })
                  })]
                })
              }), H && (0, r.jsx)(h.Z, {
                wrap: h.Z.Wrap.WRAP,
                align: h.Z.Align.START,
                justify: h.Z.Justify.START,
                className: M.otherEmojisContainer,
                children: t.map(e => (0, r.jsx)(c.u, G(j({
                  text: e.name
                }, b.b_), {
                  children: (0, r.jsx)("div", {
                    className: o()(M.otherEmoji, {
                      [L.nonInteractingSticker]: null != K && K !== e.id
                    }),
                    onMouseEnter: () => {
                      X(e.id)
                    },
                    onMouseLeave: () => {
                      X(null)
                    },
                    children: (0, r.jsx)(R.Z, {
                      size: F,
                      enlargeOnInteraction: true,
                      enlargeWithName: false,
                      enlargeScaleFactor: V,
                      isInteracting: K === e.id,
                      sticker: e
                    })
                  }, e.id)
                }), e.id))
              })]
            })]
          })
        };
      return (0, r.jsxs)(b.W_, {
        className: M.popoutContent,
        children: [e(), (null != B || null != A) && i()]
      })
    }
  };

function J(e) {
  let {
    channel: t,
    closePopout: n,
    sticker: i
  } = e;
  return (0, r.jsx)(b.W_, {
    className: L.popoutContent,
    children: (0, r.jsx)(q, {
      sticker: i,
      description: x.intl.format(x.t.hGWuxU, {
        openPremiumSettings: () => {
          n(), z(t)
        }
      })
    })
  })
}
let $ = e => {
  let {
    renderableSticker: t,
    channel: n,
    closePopout: i,
    refreshPositionKey: a
  } = e, [o, s] = (0, A.XW)(t, true);
  return null != o && (0, N.jl)(o) ? (0, r.jsx)(X, {
    sticker: o,
    closePopout: i,
    channel: n,
    refreshPositionKey: a
  }) : null != o && (0, N.J8)(o) ? (0, r.jsx)(Q, {
    sticker: o,
    channel: n,
    closePopout: i,
    refreshPositionKey: a
  }) : s ? s && null == o ? (0, r.jsx)(J, {
    channel: n,
    closePopout: i,
    sticker: t
  }) : (i(), null) : (0, r.jsx)(b.SE, {})
}