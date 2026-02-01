/** Chunk was on 9753 **/
/** chunk id: 552117, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => H
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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

function M(e) {
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

function k(e) {
  E.default.track(P.HAw.PREMIUM_PROMOTION_OPENED, {
    location_page: null != e.guild_id ? P.liQ.GUILD_CHANNEL : P.liQ.DM_CHANNEL,
    location_section: P.JJy.STICKER_POPOUT
  }), (0, A.e)()
}

function U(e) {
  let {
    sticker: t,
    description: n
  } = e;
  return (0, r.jsxs)(g.A, {
    children: [(0, r.jsx)(T.A, {
      sticker: t,
      size: 48,
      isInteracting: true
    }), (0, r.jsxs)(g.A, {
      direction: g.A.Direction.VERTICAL,
      justify: g.A.Justify.CENTER,
      className: L.bM,
      children: [(0, r.jsx)(d.Text, {
        variant: "text-md/semibold",
        children: (0, r.jsx)(o.A, {
          children: t.name
        })
      }), null != n && (0, r.jsx)(d.Text, {
        variant: "text-sm/normal",
        children: n
      })]
    })]
  })
}
let G = e => {
    let {
      closePopout: t,
      sticker: n,
      channel: l,
      refreshPositionKey: a
    } = e, [o, c, u] = (0, s.yK)([I.A], () => [I.A.getStickerPack(n.pack_id), !I.A.hasLoadedStickerPacks, I.A.isPremiumPack(n.pack_id)], [n]), p = (e => {
      let {
        sticker: t,
        stickerPack: n
      } = e;
      return i.useMemo(() => null == n ? [] : n.stickers.slice(0, 4).reduce((e, n) => 3 !== e.length && n.id !== t.id ? e.concat(n) : e, []), [t, n])
    })({
      sticker: n,
      stickerPack: o
    });
    (0, C.Sr)(n.pack_id);
    let m = (0, C.pD)(l),
      g = {
        refreshPositionKey: a,
        channel: l
      },
      _ = i.useRef(g);
    return (i.useEffect(() => {
      _.current = g
    }), i.useEffect(() => {
      let {
        refreshPositionKey: e
      } = _.current;
      e()
    }, [c]), i.useEffect(() => {
      let {
        channel: e
      } = _.current;
      E.default.track(P.HAw.OPEN_POPOUT, M({
        type: P.JJy.STICKER_POPOUT,
        guild_id: e.getGuildId(),
        sticker_pack_id: n.pack_id
      }, (0, f.dI)(e)))
    }, [n.pack_id]), c || null == o) ? (0, r.jsx)(y.Y0, {
      className: D.v0
    }) : (0, r.jsxs)(y.Uq, {
      className: D.Bm,
      children: [(0, r.jsx)(d.Heading, {
        variant: "heading-md/semibold",
        children: n.name
      }), (0, r.jsx)(d.Text, {
        variant: "text-sm/normal",
        children: u ? R.intl.format(R.t.auckXz, {
          stickerPackName: o.name
        }) : R.intl.format(R.t.OzB6e3, {
          stickerPackName: o.name
        })
      }), (0, r.jsx)("ul", {
        className: D.pQ,
        children: p.map(e => (0, r.jsx)(T.A, {
          isInteracting: true,
          size: 80,
          sticker: e
        }, e.id))
      }), u && (0, r.jsx)("div", {
        className: D.j0,
        children: (0, r.jsx)(d.Button, {
          variant: "secondary",
          size: "sm",
          text: R.intl.string(R.t.GPy3Ar),
          onClick: () => {
            u && (0, N.a)({
              stickerPack: o,
              stickerPickerCategories: m
            }), t()
          }
        }, "view-sticker-pack")
      })]
    })
  },
  B = e => {
    let t, {
        sticker: n,
        channel: l,
        closePopout: o,
        refreshPositionKey: A
      } = e,
      [C, I] = i.useState(null),
      [S, N] = i.useState(false),
      G = x.default.getCurrentUser(),
      B = j.Ay.canUseCustomStickersEverywhere(G),
      F = (0, s.bG)([O.A], () => O.A.getGuild(n.guild_id)),
      H = null != F,
      [V, z] = i.useState(false),
      [W, K] = i.useState(null),
      Y = i.useMemo(() => ({
        page: null != l.guild_id ? P.liQ.GUILD_CHANNEL : P.liQ.DM_CHANNEL,
        section: P.JJy.STICKER_POPOUT
      }), [l.guild_id]),
      {
        current: q
      } = i.useRef(M({
        guild_id: l.getGuildId()
      }, (0, f.dI)(l))),
      J = {
        stickerSourceGuild: F,
        refreshPositionKey: A
      },
      Q = i.useRef(J);
    i.useEffect(() => {
      Q.current = J
    }), i.useEffect(() => {
      let {
        stickerSourceGuild: e
      } = Q.current;
      (async () => {
        (null == e || e.features.has(P.GuildFeatures.DISCOVERABLE)) && I(await (0, h.A)(n.id)), N(true)
      })()
    }, [n.id, H]);
    let X = n.guild_id === l.getGuildId(),
      Z = null != C,
      $ = false,
      ee = "Custom Sticker Popout";
    B ? t = H ? X ? R.intl.string(R.t.fZ0DiG) : R.intl.string(R.t["1f6D9m"]) : Z ? R.intl.string(R.t.yHmoR9) : R.intl.string(R.t.vZaScH) : H ? (t = X ? R.intl.string(R.t.jNphpt) : R.intl.string(R.t.lyD5ZW), $ = true, ee = "Custom Sticker Popout (Upsell)") : Z ? (t = R.intl.string(R.t.IuXYch), $ = true, ee = "Custom Sticker Popout (Upsell)") : (t = R.intl.format(R.t.hGWuxU, {
      openPremiumSettings: () => {
        k(l), o()
      }
    }), ee = "Custom Sticker Popout (Soft Upsell)");
    let et = !$ && !H && Z && B;
    if (i.useEffect(() => {
        let {
          refreshPositionKey: e
        } = Q.current;
        e()
      }, [S, C]), (0, m.Ay)(() => {
        E.default.track(P.HAw.OPEN_POPOUT, M({
          type: ee
        }, q))
      }), !S) return (0, r.jsx)(y.Y0, {
      className: D.v0
    });
    {
      let e;
      return (0, r.jsxs)(y.Uq, {
        className: L.Bm,
        children: [(e = async () => {
          if (null == C || H) return;
          o();
          let e = C.id;
          try {
            await p.A.joinGuild(e), p.A.transitionToGuildSync(e)
          } catch (e) {}
        }, (0, r.jsxs)("div", {
          className: L.gH,
          children: [(0, r.jsx)(U, {
            description: t,
            sticker: n
          }), $ && (0, r.jsx)(v.A, {
            className: L.lI,
            subscriptionTier: w.pe.TIER_2,
            size: u.$n.Sizes.SMALL,
            fullWidth: true,
            textOptions: {
              textOverride: R.intl.string(R.t["gl/XHJ"])
            },
            onSubscribeModalClose: t => t ? e() : o(),
            postSuccessGuild: H || null == C ? true : C,
            premiumModalAnalyticsLocation: Y
          }), et && (0, r.jsx)("div", {
            "data-button-hoisted-classname-wrapper": true,
            className: L.lI,
            children: (0, r.jsx)(d.Button, {
              variant: "primary",
              size: "sm",
              text: R.intl.string(R.t.riu2R5),
              fullWidth: true,
              onClick: e
            })
          })]
        })), (null != F || null != C) && (() => {
          var e;
          if (!Z && !H) return;
          let t = (null != (e = null == C ? true : C.stickers) ? e : []).slice(0, 13).filter(e => e.id !== n.id).slice(0, 12),
            i = null != C ? _.GO.createFromDiscoverableGuild(C) : _.GO.createFromGuildRecord(F);
          return (0, r.jsxs)("div", {
            className: L.tl,
            children: [(0, r.jsx)(d.Text, {
              variant: "text-sm/normal",
              color: "text-subtle",
              className: L.YW,
              children: H ? R.intl.string(R.t.kx6pEG) : R.intl.string(R.t.pDE7Gb)
            }), (0, r.jsx)(b.G7, {
              expressionSourceGuild: i,
              hasJoinedExpressionSourceGuild: H,
              isDisplayingJoinGuildButtonInPopout: et
            }), !H && (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(d.DUT, {
                onClick: () => {
                  A(), z(!V)
                },
                className: L.wK,
                children: (0, r.jsxs)(g.A, {
                  children: [(0, r.jsx)(d.Text, {
                    className: L.__invalid_showMoreEmojisLabel,
                    variant: "text-xs/normal",
                    color: "none",
                    children: R.intl.string(R.t.vtH5hn)
                  }), (0, r.jsx)(d.abt, {
                    size: "md",
                    color: "currentColor",
                    className: a()(L.ZB, {
                      [L.cP]: !V
                    })
                  })]
                })
              }), V && (0, r.jsx)(g.A, {
                wrap: g.A.Wrap.WRAP,
                align: g.A.Align.START,
                justify: g.A.Justify.START,
                className: L.LX,
                children: t.map(e => {
                  var t, n;
                  return (0, r.jsx)(c.m, (t = M({
                    text: e.name
                  }, y.Uk), n = n = {
                    children: (0, r.jsx)("div", {
                      className: a()(L.Th, {
                        [D.vT]: null != W && W !== e.id
                      }),
                      onMouseEnter: () => {
                        K(e.id)
                      },
                      onMouseLeave: () => {
                        K(null)
                      },
                      children: (0, r.jsx)(T.A, {
                        size: 32,
                        enlargeOnInteraction: true,
                        enlargeWithName: false,
                        enlargeScaleFactor: 2,
                        isInteracting: W === e.id,
                        sticker: e
                      })
                    }, e.id)
                  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r)
                    }
                    return n
                  })(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                  }), t), e.id)
                })
              })]
            })]
          })
        })()]
      })
    }
  };

function F(e) {
  let {
    channel: t,
    closePopout: n,
    sticker: i
  } = e;
  return (0, r.jsx)(y.Uq, {
    className: D.Bm,
    children: (0, r.jsx)(U, {
      sticker: i,
      description: R.intl.format(R.t.hGWuxU, {
        openPremiumSettings: () => {
          n(), k(t)
        }
      })
    })
  })
}
let H = e => {
  let {
    renderableSticker: t,
    channel: n,
    closePopout: i,
    refreshPositionKey: l
  } = e, [a, s] = (0, C.Zq)(t, true);
  return null != a && (0, S.FD)(a) ? (0, r.jsx)(G, {
    sticker: a,
    closePopout: i,
    channel: n,
    refreshPositionKey: l
  }) : null != a && (0, S.Xw)(a) ? (0, r.jsx)(B, {
    sticker: a,
    channel: n,
    closePopout: i,
    refreshPositionKey: l
  }) : s ? s && null == a ? (0, r.jsx)(F, {
    channel: n,
    closePopout: i,
    sticker: t
  }) : (i(), null) : (0, r.jsx)(y.Y0, {})
}