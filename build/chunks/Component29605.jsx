/** Chunk was on 6049 **/
/** chunk id: 29605, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  FT: () => X,
  L3: () => K,
  ZP: () => Q
}), require("./388685.js"), require("./583741.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  d = require.n(Chunk392711),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk80932 = require("./80932.js"),
  Chunk225433 = require("./225433.jsx"),
  Chunk599059 = require("./599059.jsx"),
  Chunk327802 = require("./327802.jsx"),
  Chunk110924 = require("./110924.js"),
  Chunk200876 = require("./200876.js"),
  Chunk556019 = require("./556019.js"),
  Chunk748523 = require("./748523.js"),
  Chunk719403 = require("./719403.js"),
  Chunk730089 = require("./730089.js"),
  Chunk372444 = require("./372444.jsx"),
  Chunk372129 = require("./372129.jsx"),
  Chunk357156 = require("./357156.js"),
  Chunk210887 = require("./210887.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk176354 = require("./176354.js"),
  Chunk267642 = require("./267642.js"),
  Chunk51144 = require("./51144.js"),
  Chunk434404 = require("./434404.js"),
  Chunk471613 = require("./471613.js"),
  Chunk999382 = require("./999382.js"),
  Chunk806774 = require("./806774.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk878341 = require("./878341.js"),
  Chunk620842 = require("./620842.js");

function z(e) {
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
let W = d().throttle(Chunk80932.OQ, 1e3),
  V = e => {
    let {
      guildId: t,
      emoji: n,
      onEdit: l,
      editingDisabled: s = false
    } = e, [o, c] = i.useState(n.name), d = w.ZP.getEmojiURL({
      id: n.id,
      animated: n.animated,
      size: 32
    }), u = D.ZP.useUserTag(n.user);
    return (0, r.jsxs)("div", {
      className: a()(F.emojiRow, H.card),
      children: [(0, r.jsx)("div", {
        className: F.emojiColumn,
        children: (0, r.jsx)(p.ua7, {
          text: n.available ? null : B.intl.string(B.t["KUzI7+"]),
          children: e => {
            var t, i;
            return (0, r.jsx)("div", (t = z({}, e), i = i = {
              className: a()(F.emojiImage, {
                [F.emojiDisabled]: !n.available
              }),
              style: {
                backgroundImage: "url(".concat(d, ")")
              }
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(i)).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }), t))
          }
        })
      }), (0, r.jsx)("div", {
        className: F.column,
        children: (0, r.jsx)("div", {
          className: F.emojiAliasInputContainer,
          children: (0, r.jsx)(x.Z, {
            className: a()({
              [F.emojiAliasInputDisabled]: s
            }),
            disabled: s,
            minLen: 1,
            maxLen: U.Yc,
            name: B.intl.string(B.t.qUpzYG),
            autoComplete: "off",
            value: null != o ? o : "",
            onBlur: () => {
              if (o !== n.name) {
                let e = R.ZP.sanitizeEmojiName(o);
                e !== n.name && (0, f.dv)({
                  guildId: t,
                  emojiId: n.id,
                  name: e
                }), c(e)
              }
            },
            onChange: e => {
              c(e.target.value)
            }
          })
        })
      }), (0, r.jsxs)("div", {
        className: F.column,
        children: [(0, r.jsx)(p.qEK, {
          src: n.user.getAvatarURL(t, 20),
          "aria-label": u,
          size: p.EFr.SIZE_20
        }), (0, r.jsx)(p.R94, {
          className: F.emojiRowText,
          children: u
        })]
      }), null != l && !s && (0, r.jsx)(p.P3F, {
        "aria-label": B.intl.string(B.t.bt75u7),
        className: F.editEmojiRolesButton,
        onClick: () => l(n, t),
        children: (0, r.jsx)(p.vdY, {
          size: "md",
          color: "currentColor",
          className: F.editEmojiRolesIcon
        })
      }), !s && (0, r.jsx)(b.Z, {
        className: F.emojiRemove,
        onClick: () => {
          (0, f.RE)(t, n.id).catch(e => {
            let {
              status: t
            } = e;
            429 === t && h.Z.show({
              title: B.intl.string(B.t.iufib2),
              body: B.intl.string(B.t["Whhv4+"])
            })
          })
        }
      })]
    })
  },
  Y = e => {
    let {
      isLoading: t,
      staticEmoji: i,
      animatedEmoji: l,
      theme: a,
      guild: s
    } = e;
    return t ? (0, r.jsx)(p.$jN, {
      className: F.spinner,
      type: p.$jN.Type.SPINNING_CIRCLE
    }) : 0 === i.length && 0 === l.length ? (0, r.jsxs)(p.ubH, {
      theme: a,
      className: F.empty,
      children: [(0, r.jsx)(p.oxh, {
        darkSrc: n(458601),
        lightSrc: n(673557),
        width: 272,
        height: 212
      }), (0, r.jsx)(p.OZU, {
        note: B.intl.string(B.t.RBbtMz),
        children: B.intl.string(B.t.lxsmBQ)
      })]
    }) : (0, r.jsxs)("div", {
      children: [(0, r.jsx)(K, {
        title: B.intl.string(B.t.sMOuub),
        maxSlots: (0, Z.y4)(s),
        emojiCount: i.length
      }), (0, r.jsx)(X, {
        emojis: i,
        guild: s
      }), (0, r.jsx)(K, {
        title: B.intl.string(B.t.wWjQyc),
        maxSlots: (0, Z.y4)(s),
        emojiCount: l.length
      }), (0, r.jsx)(X, {
        emojis: l,
        guild: s
      })]
    })
  },
  K = e => {
    let {
      title: t,
      maxSlots: n,
      emojiCount: i
    } = e, l = Math.max(n - i, 0);
    return (0, r.jsxs)(p.vwX, {
      tag: p.RB0.H2,
      className: F.title,
      children: [t, (0, r.jsxs)("span", {
        children: [" — ", B.intl.format(B.t.sgL8sL, {
          count: l
        })]
      })]
    })
  },
  X = e => {
    let {
      emojis: t,
      guild: n,
      onEdit: l,
      editingDisabled: a = false
    } = e, s = i.useMemo(() => [...t].reverse(), [t]), {
      canManageGuildExpression: o
    } = (0, S.Gw)(n);
    return 0 === t.length ? (0, r.jsx)(p.R94, {
      type: p.geA.DESCRIPTION,
      className: F.content,
      children: B.intl.string(B.t.SpxYoa)
    }) : (0, r.jsxs)(p.hjN, {
      className: F.content,
      children: [(0, r.jsxs)("div", {
        className: F.emojiTable,
        children: [(0, r.jsx)(p.R94, {
          type: p.geA.DESCRIPTION,
          className: F.emojiColumn,
          children: B.intl.string(B.t.Z0i3Gh)
        }), (0, r.jsx)(p.R94, {
          type: p.geA.DESCRIPTION,
          className: F.columnLabel,
          children: B.intl.string(B.t.giajw8)
        }), (0, r.jsx)(p.R94, {
          type: p.geA.DESCRIPTION,
          className: F.columnLabel,
          children: B.intl.string(B.t.edavpq)
        })]
      }), s.map(e => (0, r.jsx)(V, {
        guildId: n.id,
        emoji: e,
        onEdit: l,
        editingDisabled: a || !o(e)
      }, e.id))]
    })
  },
  q = e => {
    let t, n, i, {
        staticEmojiCount: l,
        animatedEmojiCount: a,
        guild: s
      } = e,
      o = (0, Z.y4)(s),
      c = Math.min(o - l, o - a),
      d = s.premiumTier,
      u = (0, Z.FZ)(d);
    return null == u || d === G.Eu4.TIER_3 || c > 0 ? null : (c > o ? (t = B.intl.formatToPlainString(B.t.j0UH0t, {
      level: u
    }), n = B.intl.formatToPlainString(B.t.VQeyKy, {
      level: u
    }), i = G.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL) : (t = B.intl.string(B.t.zT9Sxc), n = B.intl.formatToPlainString(B.t.dBZ1RU, {
      level: u
    }), i = G.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL), (0, r.jsx)(I.Z, {
      header: t,
      text: n,
      guild: s,
      analyticsLocation: {
        page: G.ZY5.GUILD_SETTINGS,
        section: G.jXE.GUILD_SETTINGS_STICKERS,
        object: i,
        objectType: (0, Z.ge)(u)
      }
    }))
  },
  J = () => (0, Chunk951288.jsxs)("div", {
    children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
      tag: Chunk481060.RB0.H2,
      className: Chunk878341.emojiUploadUploadRequirementsHeading,
      children: Chunk388032.intl.string(Chunk388032.t.jrXfy8)
    }), (0, Chunk951288.jsxs)("ul", {
      className: Chunk878341.emojiUploadUploadRequirementsList,
      children: [(0, Chunk951288.jsx)("li", {
        children: (0, Chunk951288.jsx)(Chunk481060.R94, {
          type: Chunk481060.geA.DESCRIPTION,
          children: Chunk388032.intl.string(Chunk388032.t.N2qTQ0)
        })
      }), (0, Chunk951288.jsx)("li", {
        children: (0, Chunk951288.jsx)(Chunk481060.R94, {
          type: Chunk481060.geA.DESCRIPTION,
          children: Chunk388032.intl.format(Chunk388032.t.gfAXoa, {
            maxSize: Chunk185923.xG
          })
        })
      }), (0, Chunk951288.jsx)("li", {
        children: (0, Chunk951288.jsx)(Chunk481060.R94, {
          type: Chunk481060.geA.DESCRIPTION,
          children: Chunk388032.intl.string(Chunk388032.t.rnwKPD)
        })
      }), (0, Chunk951288.jsx)("li", {
        children: (0, Chunk951288.jsx)(Chunk481060.R94, {
          type: Chunk481060.geA.DESCRIPTION,
          children: Chunk388032.intl.string(Chunk388032.t["8Vr5QU"])
        })
      })]
    })]
  }),
  Q = () => {
    let e = Chunk647438.useRef(null),
      t = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
      [l, a] = Chunk647438.useState("");
    o()(null != exports, "ConnectedGuildSettingsEmoji must be rendered within a guild context");
    let s = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme),
      {
        canCreateExpressions: c
      } = (0, Chunk357156.XJ)(exports),
      {
        revision: d,
        emojis: h,
        autoOpen: f
      } = (0, Chunk442837.cj)([Chunk471613.Z], () => ({
        revision: Chunk471613.Z.getEmojiRevision(exports.id),
        emojis: Chunk471613.Z.getEmojis(exports.id),
        autoOpen: Chunk471613.Z.getEmojiFileInputAutoOpen()
      })),
      b = (0, Chunk110924.Z)(d),
      [x, I] = Chunk647438.useState(false),
      [w, R] = Chunk647438.useState(false),
      Z = Chunk647438.useRef(null),
      {
        maxEmojiSlots: D,
        availableEmojiSlots: U,
        staticEmoji: H,
        totalStaticEmoji: V,
        animatedEmoji: K,
        totalAnimatedEmoji: X
      } = (0, Chunk719403.t)({
        guild: exports
      }),
      Q = (0, Chunk556019.qt)({
        location: "guild_settings",
        autoTrackExposure: true
      }),
      $ = Chunk768581 || 0 === Chunk185923 || !Chunk392711;
    Chunk647438.useEffect(() => {
      Chunk599059 && er()
    }, [Chunk599059]), Chunk647438.useEffect(() => {
      if (Chunk80932) {
        if (!$) {
          var t;
          null == (t = module.current) || exports.activateUploadDialogue()
        }
        Chunk806774.m({
          autoOpen: false
        })
      }
    }, [Chunk80932, $]), Chunk647438.useEffect(() => {
      W(exports.id)
    }, [exports.id]), Chunk647438.useEffect(() => {
      null != Chunk225433 && Chunk225433 < d && W(exports.id)
    }, [d, Chunk225433, exports.id]);
    let ee = Chunk647438.useCallback(() => (0, Chunk748523.i)({
        analyticsLocation: {
          page: Chunk981631.ZY5.GUILD_SETTINGS,
          section: Chunk981631.jXE.GUILD_SETTINGS_EMOJI_ADD_BUTTON
        }
      }), []),
      et = (e, n, r) => (0, N.G)({
        data: e,
        file: n,
        image: r,
        guildId: t.id,
        uploadId: l,
        hideErrorModal: true,
        analyticsLocation: {
          page: G.ZY5.GUILD_SETTINGS
        }
      }),
      en = async e => {
        a((0, u.Z)()), P.default.track(G.rMx.EMOJI_UPLOAD_STARTED, {
          guild_id: t.id,
          upload_id: l
        }), await (0, E._j)(e, et), I(true)
      }, er = () => {
        null !== Chunk267642.current && ((0, Chunk481060.Mr3)(Chunk267642.current), Chunk267642.current = null)
      }, ei = async e => {
        Z.current = await (0, p.ZDy)(async () => {
          let {
            default: t
          } = await n.e("16169").then(n.bind(n, 935333));
          return n => (0, r.jsx)(t, z({
            processFiles: () => en(e)
          }, n))
        })
      }, el = (0, Chunk200876.l)(exports);
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk878341.emojiSettings,
      children: [0 === Chunk185923 ? null : (0, Chunk951288.jsx)(Chunk327802.Z, {
        className: Chunk878341.emojiUploadContainer,
        onDrop: ei
      }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
        tag: Chunk481060.RB0.H1,
        title: Chunk388032.intl.string(Chunk388032.t.sMOuub),
        children: [(0, Chunk951288.jsx)(q, {
          guild: exports,
          staticEmojiCount: V,
          animatedEmojiCount: X
        }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
          className: Chunk878341.uploader,
          children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
            type: Chunk481060.geA.DESCRIPTION,
            children: Chunk388032.intl.format(Chunk388032.t.TA1BR0, {
              count: Chunk51144
            })
          }), el && (0, Chunk951288.jsx)(Chunk481060.R94, {
            type: Chunk481060.geA.DESCRIPTION,
            children: Chunk388032.intl.format(Chunk388032.t.uMkfTk, {
              onClick: () => Chunk434404.Z.open(exports.id, Chunk981631.pNK.ROLE_SUBSCRIPTIONS, true, Chunk981631.KsC.ROLE_SUBSCRIPTION_EMOJI)
            })
          }), Q.enabled ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
            children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
              variant: "primary",
              text: Chunk388032.intl.string(Chunk388032.t.DU0dy8),
              onClick: ee,
              disabled: 0 === Chunk185923
            }), (0, Chunk951288.jsx)(Chunk481060.Text, {
              variant: "text-xs/normal",
              children: Chunk388032.intl.string(Chunk388032.t.EgNCTk)
            })]
          }) : (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
            children: [(0, Chunk951288.jsx)(J, {}), (0, Chunk951288.jsxs)(Chunk755721.zx, {
              tabIndex: false,
              size: Chunk755721.zx.Sizes.MEDIUM,
              onClick: () => {
                let e = (0, Chunk772848.Z)();
                a(module), Chunk626135.default.track(Chunk981631.rMx.EMOJI_UPLOAD_STARTED, {
                  guild_id: exports.id,
                  upload_id: module
                })
              },
              disabled: $,
              submitting: Chunk768581,
              focusProps: {
                within: true
              },
              children: [Chunk388032.intl.string(Chunk388032.t.DU0dy8), Chunk185923 > 0 ? (0, Chunk951288.jsx)(Chunk372129.ZP, {
                ref: module,
                disabled: $,
                tabIndex: 0,
                onChange: et,
                setLoading: Chunk176354,
                multiple: true
              }) : null]
            })]
          })]
        }), (0, Chunk951288.jsx)(Y, {
          isLoading: null == Chunk668781,
          staticEmoji: Chunk620842,
          animatedEmoji: K,
          guild: exports,
          theme: Chunk512722
        })]
      })]
    })
  }