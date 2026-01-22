/** Chunk was on web.js **/
/** chunk id: 552117, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => J
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk3026 = require("./3026.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk686956 = require("./686956.js"),
  Chunk964486 = require("./964486.js"),
  Chunk58149 = require("./58149.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk624793 = require("./624793.js"),
  Chunk477712 = require("./477712.js"),
  Chunk767143 = require("./767143.jsx"),
  Chunk652176 = require("./652176.jsx"),
  Chunk87719 = require("./87719.js"),
  Chunk465794 = require("./465794.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk256449 = require("./256449.js"),
  Chunk679382 = require("./679382.js"),
  Chunk378058 = require("./378058.js"),
  Chunk148355 = require("./148355.jsx"),
  Chunk915488 = require("./915488.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk986785 = require("./986785.js"),
  Chunk767419 = require("./767419.js");

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
let V = 80,
  F = 48,
  B = 32,
  H = 2,
  Y = 3,
  W = 12,
  K = (e, t) => t ? x.intl.format(x.t.auckXz, {
    stickerPackName: e.name
  }) : x.intl.format(x.t.OzB6e3, {
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
  S.default.track(P.HAw.PREMIUM_PROMOTION_OPENED, {
    location_page: null != e.guild_id ? P.liQ.GUILD_CHANNEL : P.liQ.DM_CHANNEL,
    location_section: P.JJy.STICKER_POPOUT
  }), (0, y.Z)()
}

function X(e) {
  let {
    sticker: t,
    description: n
  } = e;
  return (0, r.jsxs)(h.A, {
    children: [(0, r.jsx)(R.A, {
      sticker: t,
      size: F,
      isInteracting: true
    }), (0, r.jsxs)(h.A, {
      direction: h.A.Direction.VERTICAL,
      justify: h.A.Justify.CENTER,
      className: j.bM,
      children: [(0, r.jsx)(d.Text, {
        variant: "text-md/semibold",
        children: (0, r.jsx)(l.A, {
          children: t.name
        })
      }), null != n && (0, r.jsx)(d.Text, {
        variant: "text-sm/normal",
        children: n
      })]
    })]
  })
}
let Z = e => {
    let {
      closePopout: t,
      sticker: n,
      channel: a,
      refreshPositionKey: s
    } = e, [l, c, u] = (0, o.yK)([C.A], () => [C.A.getStickerPack(n.pack_id), !C.A.hasLoadedStickerPacks, C.A.isPremiumPack(n.pack_id)], [n]), f = z({
      sticker: n,
      stickerPack: l
    });
    (0, T.Sr)(n.pack_id);
    let p = (0, T.pD)(a),
      h = {
        refreshPositionKey: s,
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
        S.default.track(P.HAw.OPEN_POPOUT, k({
          type: P.JJy.STICKER_POPOUT,
          guild_id: e.getGuildId(),
          sticker_pack_id: n.pack_id
        }, (0, _.dI)(e)))
      }, [n.pack_id]), c || null == l) return (0, r.jsx)(b.Y0, {
      className: L.v0
    });
    let g = u,
      E = () => {
        g && (0, w.a)({
          stickerPack: l,
          stickerPickerCategories: p
        }), t()
      };
    return (0, r.jsxs)(b.Uq, {
      className: L.Bm,
      children: [(0, r.jsx)(d.Heading, {
        variant: "heading-md/semibold",
        children: n.name
      }), (0, r.jsx)(d.Text, {
        variant: "text-sm/normal",
        children: K(l, u)
      }), (0, r.jsx)("ul", {
        className: L.pQ,
        children: f.map(e => (0, r.jsx)(R.A, {
          isInteracting: true,
          size: V,
          sticker: e
        }, e.id))
      }), u && (0, r.jsx)("div", {
        className: L.j0,
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
      [T, C] = i.useState(null),
      [N, w] = i.useState(false),
      M = v.default.getCurrentUser(),
      U = I.Ay.canUseCustomStickersEverywhere(M),
      V = (0, o.bG)([A.A], () => A.A.getGuild(n.guild_id)),
      F = null != V,
      [Y, K] = i.useState(false),
      [z, Z] = i.useState(null),
      Q = i.useMemo(() => ({
        page: null != a.guild_id ? P.liQ.GUILD_CHANNEL : P.liQ.DM_CHANNEL,
        section: P.JJy.STICKER_POPOUT
      }), [a.guild_id]),
      {
        current: $
      } = i.useRef(k({
        guild_id: a.getGuildId()
      }, (0, _.dI)(a))),
      J = {
        stickerSourceGuild: V,
        refreshPositionKey: y
      },
      ee = i.useRef(J);
    i.useEffect(() => {
      ee.current = J
    }), i.useEffect(() => {
      let {
        stickerSourceGuild: e
      } = ee.current;
      (async () => {
        (null == e || e.features.has(P.GuildFeatures.DISCOVERABLE)) && C(await (0, g.A)(n.id)), w(true)
      })()
    }, [n.id, F]);
    let et = n.guild_id === a.getGuildId(),
      en = null != T,
      er = false,
      ei = "Custom Sticker Popout";
    U ? t = F ? et ? x.intl.string(x.t.fZ0DiG) : x.intl.string(x.t["1f6D9m"]) : en ? x.intl.string(x.t.yHmoR9) : x.intl.string(x.t.vZaScH) : F ? (t = et ? x.intl.string(x.t.jNphpt) : x.intl.string(x.t.lyD5ZW), er = true, ei = "Custom Sticker Popout (Upsell)") : en ? (t = x.intl.string(x.t.IuXYch), er = true, ei = "Custom Sticker Popout (Upsell)") : (t = x.intl.format(x.t.hGWuxU, {
      openPremiumSettings: () => {
        q(a), l()
      }
    }), ei = "Custom Sticker Popout (Soft Upsell)");
    let ea = !er && !F && en && U;
    if (i.useEffect(() => {
        let {
          refreshPositionKey: e
        } = ee.current;
        e()
      }, [N, T]), (0, p.Ay)(() => {
        S.default.track(P.HAw.OPEN_POPOUT, k({
          type: ei
        }, $))
      }), !N) return (0, r.jsx)(b.Y0, {
      className: L.v0
    });
    {
      let e = () => {
          let e = async () => {
            if (null == T || F) return;
            l();
            let e = T.id;
            try {
              await f.A.joinGuild(e), f.A.transitionToGuildSync(e)
            } catch (e) {}
          };
          return (0, r.jsxs)("div", {
            className: j.gH,
            children: [(0, r.jsx)(X, {
              description: t,
              sticker: n
            }), er && (0, r.jsx)(O.A, {
              className: j.lI,
              subscriptionTier: D.pe.TIER_2,
              size: u.$n.Sizes.SMALL,
              fullWidth: true,
              textOptions: {
                textOverride: x.intl.string(x.t["gl/XHJ"])
              },
              onSubscribeModalClose: t => t ? e() : l(),
              postSuccessGuild: F || null == T ? true : T,
              premiumModalAnalyticsLocation: Q
            }), ea && (0, r.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: j.lI,
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
          if (!en && !F) return;
          let t = (null != (e = null == T ? true : T.stickers) ? e : []).slice(0, W + 1).filter(e => e.id !== n.id).slice(0, W),
            i = () => {
              y(), K(!Y)
            },
            a = null != T ? m.GO.createFromDiscoverableGuild(T) : m.GO.createFromGuildRecord(V);
          return (0, r.jsxs)("div", {
            className: j.tl,
            children: [(0, r.jsx)(d.Text, {
              variant: "text-sm/normal",
              color: "text-subtle",
              className: j.YW,
              children: F ? x.intl.string(x.t.kx6pEG) : x.intl.string(x.t.pDE7Gb)
            }), (0, r.jsx)(E.G7, {
              expressionSourceGuild: a,
              hasJoinedExpressionSourceGuild: F,
              isDisplayingJoinGuildButtonInPopout: ea
            }), !F && (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(d.DUT, {
                onClick: i,
                className: j.wK,
                children: (0, r.jsxs)(h.A, {
                  children: [(0, r.jsx)(d.Text, {
                    className: j.__invalid_showMoreEmojisLabel,
                    variant: "text-xs/normal",
                    color: "none",
                    children: x.intl.string(x.t.vtH5hn)
                  }), (0, r.jsx)(d.abt, {
                    size: "md",
                    color: "currentColor",
                    className: s()(j.ZB, {
                      [j.cP]: !Y
                    })
                  })]
                })
              }), Y && (0, r.jsx)(h.A, {
                wrap: h.A.Wrap.WRAP,
                align: h.A.Align.START,
                justify: h.A.Justify.START,
                className: j.LX,
                children: t.map(e => (0, r.jsx)(c.m, G(k({
                  text: e.name
                }, b.Uk), {
                  children: (0, r.jsx)("div", {
                    className: s()(j.Th, {
                      [L.vT]: null != z && z !== e.id
                    }),
                    onMouseEnter: () => {
                      Z(e.id)
                    },
                    onMouseLeave: () => {
                      Z(null)
                    },
                    children: (0, r.jsx)(R.A, {
                      size: B,
                      enlargeOnInteraction: true,
                      enlargeWithName: false,
                      enlargeScaleFactor: H,
                      isInteracting: z === e.id,
                      sticker: e
                    })
                  }, e.id)
                }), e.id))
              })]
            })]
          })
        };
      return (0, r.jsxs)(b.Uq, {
        className: j.Bm,
        children: [e(), (null != V || null != T) && i()]
      })
    }
  };

function $(e) {
  let {
    channel: t,
    closePopout: n,
    sticker: i
  } = e;
  return (0, r.jsx)(b.Uq, {
    className: L.Bm,
    children: (0, r.jsx)(X, {
      sticker: i,
      description: x.intl.format(x.t.hGWuxU, {
        openPremiumSettings: () => {
          n(), q(t)
        }
      })
    })
  })
}
let J = e => {
  let {
    renderableSticker: t,
    channel: n,
    closePopout: i,
    refreshPositionKey: a
  } = e, [s, o] = (0, T.Zq)(t, true);
  return null != s && (0, N.FD)(s) ? (0, r.jsx)(Z, {
    sticker: s,
    closePopout: i,
    channel: n,
    refreshPositionKey: a
  }) : null != s && (0, N.Xw)(s) ? (0, r.jsx)(Q, {
    sticker: s,
    channel: n,
    closePopout: i,
    refreshPositionKey: a
  }) : o ? o && null == s ? (0, r.jsx)($, {
    channel: n,
    closePopout: i,
    sticker: t
  }) : (i(), null) : (0, r.jsx)(b.Y0, {})
}