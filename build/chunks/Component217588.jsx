/** Chunk was on web.js **/
/** chunk id: 217588, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ee
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk493773 = require("./493773.js"),
  Chunk367907 = require("./367907.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk111028 = require("./111028.jsx"),
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

function j(e, t, n) {
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
      j(e, t, n[t])
    })
  }
  return e
}

function M(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function G(e, t) {
  if (null == e) return {};
  var n, r, i = B(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function B(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let Z = 80,
  F = 48,
  V = 32,
  H = 2,
  Y = 3,
  W = 12,
  K = (e, t) => t ? D.intl.format(D.t.auckX1, {
    stickerPackName: e.name
  }) : D.intl.format(D.t.OzB6e3, {
    stickerPackName: e.name
  }),
  z = e => {
    let {
      sticker: t,
      stickerPack: n
    } = e;
    return i.useMemo(() => null == n ? [] : n.stickers.slice(0, Y + 1).reduce((e, n) => e.length !== Y && n.id !== t.id ? e.concat(n) : e, []), [t, n])
  };

function q(e) {
  I.default.track(P.rMx.PREMIUM_PROMOTION_OPENED, {
    location_page: null != e.guild_id ? P.ZY5.GUILD_CHANNEL : P.ZY5.DM_CHANNEL,
    location_section: P.jXE.STICKER_POPOUT
  }), (0, b.z)()
}

function X(e) {
  let {
    sticker: t,
    description: n
  } = e;
  return (0, r.jsxs)(_.Z, {
    children: [(0, r.jsx)(N.Z, {
      sticker: t,
      size: F,
      isInteracting: true
    }), (0, r.jsxs)(_.Z, {
      direction: _.Z.Direction.VERTICAL,
      justify: _.Z.Justify.CENTER,
      className: L.truncatingText,
      children: [(0, r.jsx)(c.Text, {
        className: L.__invalid_emojiName,
        variant: "text-md/semibold",
        children: (0, r.jsx)(p.Z, {
          children: t.name
        })
      }), null != n && (0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        children: n
      })]
    })]
  })
}
let Q = e => {
    let {
      closePopout: t,
      sticker: n,
      channel: o,
      refreshPositionKey: a
    } = e, [l, u, d] = (0, s.Wu)([A.Z], () => [A.Z.getStickerPack(n.pack_id), !A.Z.hasLoadedStickerPacks, A.Z.isPremiumPack(n.pack_id)], [n]), _ = z({
      sticker: n,
      stickerPack: l
    });
    (0, S.Pq)(n.pack_id);
    let p = (0, S.Sd)(o),
      h = {
        refreshPositionKey: a,
        channel: o
      },
      m = i.useRef(h);
    if (i.useEffect(() => {
        m.current = h
      }), i.useEffect(() => {
        let {
          refreshPositionKey: e
        } = m.current;
        e()
      }, [u]), i.useEffect(() => {
        let {
          channel: e
        } = m.current;
        I.default.track(P.rMx.OPEN_POPOUT, k({
          type: P.jXE.STICKER_POPOUT,
          guild_id: e.getGuildId(),
          sticker_pack_id: n.pack_id
        }, (0, f.v_)(e)))
      }, [n.pack_id]), u || null == l) return (0, r.jsx)(E.SE, {
      className: x.popoutLoader
    });
    let g = d,
      b = () => {
        g && (0, R.m)({
          stickerPack: l,
          stickerPickerCategories: p
        }), t()
      };
    return (0, r.jsxs)(E.W_, {
      className: x.popoutContent,
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-md/semibold",
        children: n.name
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        children: K(l, d)
      }), (0, r.jsx)("ul", {
        className: x.stickersList,
        children: _.map(e => (0, r.jsx)(N.Z, {
          isInteracting: true,
          size: Z,
          sticker: e
        }, e.id))
      }), d && (0, r.jsx)("div", {
        className: x.packActions,
        children: (0, r.jsx)(c.zxk, {
          variant: "secondary",
          size: "sm",
          text: D.intl.string(D.t.GPy3Ag),
          onClick: b
        }, "view-sticker-pack")
      })]
    })
  },
  J = e => {
    let t, {
        sticker: n,
        channel: o,
        closePopout: p,
        refreshPositionKey: b
      } = e,
      [S, A] = i.useState(null),
      [C, R] = i.useState(false),
      j = v.default.getCurrentUser(),
      M = T.ZP.canUseCustomStickersEverywhere(j),
      B = (0, s.e7)([O.Z], () => O.Z.getGuild(n.guild_id)),
      Z = null != B,
      [F, Y] = i.useState(false),
      [K, z] = i.useState(null),
      Q = i.useMemo(() => ({
        page: null != o.guild_id ? P.ZY5.GUILD_CHANNEL : P.ZY5.DM_CHANNEL,
        section: P.jXE.STICKER_POPOUT
      }), [o.guild_id]),
      {
        current: J
      } = i.useRef(k({
        guild_id: o.getGuildId()
      }, (0, f.v_)(o))),
      $ = {
        stickerSourceGuild: B,
        refreshPositionKey: b
      },
      ee = i.useRef($);
    i.useEffect(() => {
      ee.current = $
    }), i.useEffect(() => {
      let {
        stickerSourceGuild: e
      } = ee.current;
      (async () => {
        (null == e || e.features.has(P.oNc.DISCOVERABLE)) && A(await (0, m.Z)(n.id)), R(true)
      })()
    }, [n.id, Z]);
    let et = n.guild_id === o.getGuildId(),
      en = null != S,
      er = false,
      ei = "Custom Sticker Popout";
    M ? t = Z ? et ? D.intl.string(D.t.fZ0DiI) : D.intl.string(D.t["1f6D9v"]) : en ? D.intl.string(D.t.yHmoR0) : D.intl.string(D.t.vZaScH) : Z ? (t = et ? D.intl.string(D.t.jNphpq) : D.intl.string(D.t.lyD5ZW), er = true, ei = "Custom Sticker Popout (Upsell)") : en ? (t = D.intl.string(D.t.IuXYcn), er = true, ei = "Custom Sticker Popout (Upsell)") : (t = D.intl.format(D.t.hGWuxc, {
      openPremiumSettings: () => {
        q(o), p()
      }
    }), ei = "Custom Sticker Popout (Soft Upsell)");
    let eo = !er && !Z && en && M;
    if (i.useEffect(() => {
        let {
          refreshPositionKey: e
        } = ee.current;
        e()
      }, [C, S]), (0, d.ZP)(() => {
        I.default.track(P.rMx.OPEN_POPOUT, k({
          type: ei
        }, J))
      }), !C) return (0, r.jsx)(E.SE, {
      className: x.popoutLoader
    });
    {
      let e = () => {
          let e = async () => {
            if (null == S || Z) return;
            p();
            let e = S.id;
            try {
              await u.Z.joinGuild(e), u.Z.transitionToGuildSync(e)
            } catch (e) {}
          };
          return (0, r.jsxs)("div", {
            className: L.emojiSection,
            children: [(0, r.jsx)(X, {
              description: t,
              sticker: n
            }), er && (0, r.jsx)(y.Z, {
              className: L.ctaButton,
              subscriptionTier: w.Si.TIER_2,
              size: l.zx.Sizes.SMALL,
              fullWidth: true,
              textOptions: {
                textOverride: D.intl.string(D.t["gl/XHB"])
              },
              onSubscribeModalClose: t => t ? e() : p(),
              postSuccessGuild: Z || null == S ? true : S,
              premiumModalAnalyticsLocation: Q
            }), eo && (0, r.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: L.ctaButton,
              children: (0, r.jsx)(c.zxk, {
                variant: "primary",
                size: "sm",
                text: D.intl.string(D.t.riu2R0),
                fullWidth: true,
                onClick: e
              })
            })]
          })
        },
        i = () => {
          var e;
          if (!en && !Z) return;
          let t = (null != (e = null == S ? true : S.stickers) ? e : []).slice(0, W + 1).filter(e => e.id !== n.id).slice(0, W),
            i = () => {
              b(), Y(!F)
            },
            o = null != S ? h.JO.createFromDiscoverableGuild(S) : h.JO.createFromGuildRecord(B);
          return (0, r.jsxs)("div", {
            className: L.guildSection,
            children: [(0, r.jsx)(c.vwX, {
              className: L.guildTitle,
              children: Z ? D.intl.string(D.t.kx6pEB) : D.intl.string(D.t.pDE7GR)
            }), (0, r.jsx)(g.Oe, {
              expressionSourceGuild: o,
              hasJoinedExpressionSourceGuild: Z,
              isDisplayingJoinGuildButtonInPopout: eo
            }), !Z && (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(c.P3F, {
                onClick: i,
                className: L.showMoreEmojis,
                children: (0, r.jsxs)(_.Z, {
                  children: [(0, r.jsx)(c.Text, {
                    className: L.__invalid_showMoreEmojisLabel,
                    variant: "text-xs/normal",
                    color: "none",
                    children: D.intl.string(D.t.vtH5ho)
                  }), (0, r.jsx)(c.CJ0, {
                    size: "md",
                    color: "currentColor",
                    className: a()(L.showMoreEmojisArrow, {
                      [L.showMoreEmojisArrowCollapsed]: !F
                    })
                  })]
                })
              }), F && (0, r.jsx)(_.Z, {
                wrap: _.Z.Wrap.WRAP,
                align: _.Z.Align.START,
                justify: _.Z.Justify.START,
                className: L.otherEmojisContainer,
                children: t.map(e => (0, r.jsx)(c.ua7, U(k({
                  text: e.name
                }, E.b_), {
                  children: t => {
                    var {
                      onMouseEnter: n,
                      onMouseLeave: i
                    } = t, o = G(t, ["onMouseEnter", "onMouseLeave"]);
                    return (0, r.jsx)("div", U(k({
                      className: a()(L.otherEmoji, {
                        [x.nonInteractingSticker]: null != K && K !== e.id
                      }),
                      onMouseEnter: () => {
                        null == n || n(), z(e.id)
                      },
                      onMouseLeave: () => {
                        null == i || i(), z(null)
                      }
                    }, o), {
                      children: (0, r.jsx)(N.Z, {
                        size: V,
                        enlargeOnInteraction: true,
                        enlargeWithName: false,
                        enlargeScaleFactor: H,
                        isInteracting: K === e.id,
                        sticker: e
                      })
                    }), e.id)
                  }
                }), e.id))
              })]
            })]
          })
        };
      return (0, r.jsxs)(E.W_, {
        className: L.popoutContent,
        children: [e(), (null != B || null != S) && i()]
      })
    }
  };

function $(e) {
  let {
    channel: t,
    closePopout: n,
    sticker: i
  } = e;
  return (0, r.jsx)(E.W_, {
    className: x.popoutContent,
    children: (0, r.jsx)(X, {
      sticker: i,
      description: D.intl.format(D.t.hGWuxc, {
        openPremiumSettings: () => {
          n(), q(t)
        }
      })
    })
  })
}
let ee = e => {
  let {
    renderableSticker: t,
    channel: n,
    closePopout: i,
    refreshPositionKey: o
  } = e, [a, s] = (0, S.XW)(t, true);
  return null != a && (0, C.jl)(a) ? (0, r.jsx)(Q, {
    sticker: a,
    closePopout: i,
    channel: n,
    refreshPositionKey: o
  }) : null != a && (0, C.J8)(a) ? (0, r.jsx)(J, {
    sticker: a,
    channel: n,
    closePopout: i,
    refreshPositionKey: o
  }) : s ? s && null == a ? (0, r.jsx)($, {
    channel: n,
    closePopout: i,
    sticker: t
  }) : (i(), null) : (0, r.jsx)(E.SE, {})
}