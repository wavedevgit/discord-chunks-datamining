/** Chunk was on 27087 **/
/** chunk id: 29605, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  FT: () => J,
  L3: () => Q,
  ZP: () => et
}), require("./388685.js"), require("./583741.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  d = require.n(Chunk392711),
  Chunk488290 = require("./488290.js"),
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
  Chunk100527 = require("./100527.js"),
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
  Chunk52116 = require("./52116.js"),
  Chunk504401 = require("./504401.js");

function W(e) {
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

function K(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Y = d().throttle(Chunk80932.OQ, 1e3),
  q = e => {
    let {
      guildId: t,
      emoji: n,
      onEdit: l,
      editingDisabled: a = false,
      isNewlyAdded: o = false
    } = e, [c, d] = i.useState(n.name), m = D.ZP.getEmojiURL({
      id: n.id,
      animated: n.animated,
      size: 32
    }), [g] = (0, f.q_F)(() => ({
      from: {
        scale: 2
      },
      to: {
        scale: 1
      },
      config: {
        mass: 10,
        tension: 1500,
        friction: 115
      }
    }), o ? "respect-motion-settings" : "animate-never"), [p] = (0, f.q_F)(() => ({
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      },
      config: {
        duration: 200,
        clamp: true
      }
    }), o ? "respect-motion-settings" : "animate-never"), v = L.ZP.useUserTag(n.user);
    return (0, r.jsxs)("div", {
      className: s()(z.emojiRow, V.card),
      children: [(0, r.jsx)("div", {
        className: z.emojiColumn,
        children: (0, r.jsx)(f.ua7, {
          text: n.available ? null : H.intl.string(H.t["KUzI7+"]),
          children: e => (0, r.jsx)(u.animated.div, K(W({}, e), {
            className: s()(z.emojiImage, {
              [z.emojiDisabled]: !n.available
            }),
            style: K(W({}, o ? g : {}, o ? p : {}), {
              backgroundImage: "url(".concat(m, ")")
            })
          }))
        })
      }), (0, r.jsx)("div", {
        className: z.column,
        children: (0, r.jsx)("div", {
          className: z.emojiAliasInputContainer,
          children: (0, r.jsx)(j.Z, {
            className: s()({
              [z.emojiAliasInputDisabled]: a
            }),
            disabled: a,
            minLen: 1,
            maxLen: F.Yc,
            name: H.intl.string(H.t.qUpzYG),
            autoComplete: "off",
            value: null != c ? c : "",
            onBlur: () => {
              if (c === n.name) return;
              let e = Z.ZP.sanitizeEmojiName(c);
              e !== n.name && (0, x.dv)({
                guildId: t,
                emojiId: n.id,
                name: e
              }), d(e)
            },
            onChange: e => {
              d(e.target.value)
            }
          })
        })
      }), (0, r.jsxs)("div", {
        className: z.column,
        children: [(0, r.jsx)(f.qEK, {
          src: n.user.getAvatarURL(t, 20),
          "aria-label": v,
          size: f.EFr.SIZE_20
        }), (0, r.jsx)(f.R94, {
          className: z.emojiRowText,
          children: v
        })]
      }), null != l && !a && (0, r.jsx)(f.P3F, {
        "aria-label": H.intl.string(H.t.bt75u7),
        className: z.editEmojiRolesButton,
        onClick: () => l(n, t),
        children: (0, r.jsx)(f.vdY, {
          size: "md",
          color: "currentColor",
          className: z.editEmojiRolesIcon
        })
      }), !a && (0, r.jsx)(b.Z, {
        className: z.emojiRemove,
        onClick: () => {
          (0, x.RE)(t, n.id).catch(e => {
            let {
              status: t
            } = e;
            429 === t && h.Z.show({
              title: H.intl.string(H.t.iufib2),
              body: H.intl.string(H.t["Whhv4+"])
            })
          })
        }
      })]
    })
  },
  X = e => {
    let {
      isLoading: t,
      staticEmoji: i,
      animatedEmoji: l,
      theme: s,
      guild: a,
      onEdit: o,
      newlyAddedEmojiIds: c
    } = e;
    return t ? (0, r.jsx)(f.$jN, {
      className: z.spinner,
      type: f.$jN.Type.SPINNING_CIRCLE
    }) : 0 === i.length && 0 === l.length ? (0, r.jsxs)(f.ubH, {
      theme: s,
      className: z.empty,
      children: [(0, r.jsx)(f.oxh, {
        darkSrc: n(458601),
        lightSrc: n(673557),
        width: 272,
        height: 212
      }), (0, r.jsx)(f.OZU, {
        note: H.intl.string(H.t.RBbtMz),
        children: H.intl.string(H.t.lxsmBQ)
      })]
    }) : (0, r.jsxs)("div", {
      children: [(0, r.jsx)(Q, {
        title: H.intl.string(H.t.sMOuub),
        maxSlots: (0, A.y4)(a),
        emojiCount: i.length
      }), (0, r.jsx)(J, {
        emojis: i,
        guild: a,
        onEdit: o,
        newlyAddedEmojiIds: c
      }), (0, r.jsx)(Q, {
        title: H.intl.string(H.t.wWjQyc),
        maxSlots: (0, A.y4)(a),
        emojiCount: l.length
      }), (0, r.jsx)(J, {
        emojis: l,
        guild: a,
        onEdit: o,
        newlyAddedEmojiIds: c
      })]
    })
  },
  Q = e => {
    let {
      title: t,
      maxSlots: n,
      emojiCount: i
    } = e, l = Math.max(n - i, 0);
    return (0, r.jsxs)(f.vwX, {
      tag: f.RB0.H2,
      className: z.title,
      children: [t, (0, r.jsxs)("span", {
        children: [" — ", H.intl.format(H.t.sgL8sL, {
          count: l
        })]
      })]
    })
  },
  J = e => {
    let {
      emojis: t,
      guild: n,
      onEdit: l,
      editingDisabled: s = false,
      newlyAddedEmojiIds: a
    } = e, o = i.useMemo(() => [...t].reverse(), [t]), {
      canManageGuildExpression: c
    } = (0, P.Gw)(n);
    return 0 === t.length ? (0, r.jsx)(f.R94, {
      type: f.geA.DESCRIPTION,
      className: z.content,
      children: H.intl.string(H.t.SpxYoa)
    }) : (0, r.jsxs)(f.hjN, {
      className: z.content,
      children: [(0, r.jsxs)("div", {
        className: z.emojiTable,
        children: [(0, r.jsx)(f.R94, {
          type: f.geA.DESCRIPTION,
          className: z.emojiColumn,
          children: H.intl.string(H.t.Z0i3Gh)
        }), (0, r.jsx)(f.R94, {
          type: f.geA.DESCRIPTION,
          className: z.columnLabel,
          children: H.intl.string(H.t.giajw8)
        }), (0, r.jsx)(f.R94, {
          type: f.geA.DESCRIPTION,
          className: z.columnLabel,
          children: H.intl.string(H.t.edavpq)
        })]
      }), o.map(e => {
        var t;
        return (0, r.jsx)(q, {
          guildId: n.id,
          emoji: e,
          onEdit: l,
          editingDisabled: s || !c(e),
          isNewlyAdded: null != (t = null == a ? true : a.has(e.id)) && t
        }, e.id)
      })]
    })
  },
  $ = e => {
    let t, n, i, {
        staticEmojiCount: l,
        animatedEmojiCount: s,
        guild: a
      } = e,
      o = (0, A.y4)(a),
      c = Math.min(o - l, o - s),
      d = a.premiumTier,
      u = (0, A.FZ)(d);
    return null == u || d === B.Eu4.TIER_3 || c > 0 ? null : (c > o ? (t = H.intl.formatToPlainString(H.t.j0UH0t, {
      level: u
    }), n = H.intl.formatToPlainString(H.t.VQeyKy, {
      level: u
    }), i = B.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL) : (t = H.intl.string(H.t.zT9Sxc), n = H.intl.formatToPlainString(H.t.dBZ1RU, {
      level: u
    }), i = B.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL), (0, r.jsx)(S.Z, {
      header: t,
      text: n,
      guild: a,
      analyticsLocation: {
        page: B.ZY5.GUILD_SETTINGS,
        section: B.jXE.GUILD_SETTINGS_STICKERS,
        object: i,
        objectType: (0, A.ge)(u)
      }
    }))
  },
  ee = () => (0, Chunk951288.jsxs)("div", {
    children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
      tag: Chunk481060.RB0.H2,
      className: Chunk52116.emojiUploadUploadRequirementsHeading,
      children: Chunk388032.intl.string(Chunk388032.t.jrXfy8)
    }), (0, Chunk951288.jsxs)("ul", {
      className: Chunk52116.emojiUploadUploadRequirementsList,
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
  et = () => {
    let e = Chunk647438.useRef(null),
      t = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
      [l, s] = Chunk647438.useState("");
    o()(null != exports, "ConnectedGuildSettingsEmoji must be rendered within a guild context");
    let a = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme),
      {
        canCreateExpressions: c
      } = (0, Chunk357156.XJ)(exports),
      {
        revision: u,
        emojis: h,
        autoOpen: x
      } = (0, Chunk442837.cj)([Chunk471613.Z], () => ({
        revision: Chunk471613.Z.getEmojiRevision(exports.id),
        emojis: Chunk471613.Z.getEmojis(exports.id),
        autoOpen: Chunk471613.Z.getEmojiFileInputAutoOpen()
      })),
      b = (0, Chunk110924.Z)(Chunk488290),
      [j, S] = Chunk647438.useState(false),
      [D, Z] = Chunk647438.useState(false),
      A = Chunk647438.useRef(null),
      {
        maxEmojiSlots: L,
        availableEmojiSlots: F,
        staticEmoji: V,
        totalStaticEmoji: K,
        animatedEmoji: q,
        totalAnimatedEmoji: Q
      } = (0, Chunk719403.t)({
        guild: exports
      }),
      J = (0, Chunk556019.qt)({
        location: "guild_settings",
        autoTrackExposure: true
      }),
      [et, en] = Chunk647438.useState(null),
      er = Chunk768581 || 0 === Chunk185923 || !Chunk392711;
    Chunk647438.useEffect(() => {
      Chunk599059 && eo()
    }, [Chunk599059]), Chunk647438.useEffect(() => {
      if (Chunk80932) {
        if (!er) {
          var t;
          null == (t = module.current) || exports.activateUploadDialogue()
        }
        Chunk806774.ml({
          autoOpen: false
        })
      }
    }, [Chunk80932, er]), Chunk647438.useEffect(() => {
      Y(exports.id)
    }, [exports.id]), Chunk647438.useEffect(() => {
      null != Chunk225433 && Chunk225433 < Chunk488290 && Y(exports.id)
    }, [Chunk488290, Chunk225433, exports.id]), Chunk647438.useEffect(() => {
      if (null != Chunk668781 && null == et) return void en(Chunk668781)
    }, [Chunk668781, et]);
    let ei = Chunk647438.useMemo(() => J.isEmojiEditingExperimentEnabled && null != et ? new Set(d().differenceBy(Chunk668781, et, "id").map(e => e.id)) : new Set, [J.isEmojiEditingExperimentEnabled, Chunk668781, et]),
      el = Chunk647438.useCallback(function() {
        let {
          emoji: e
        } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
        if (J.isEmojiEditingExperimentEnabled && null != module) return void(0, Chunk748523.i)({
          guildId: exports.id,
          emoji: module,
          analyticsLocation: Chunk100527.Z.GUILD_SETTINGS_EMOJI_EDIT_BUTTON
        });
        (0, Chunk748523.i)({
          guildId: exports.id,
          analyticsLocation: {
            page: Chunk981631.ZY5.GUILD_SETTINGS,
            section: Chunk981631.jXE.GUILD_SETTINGS_EMOJI_ADD_BUTTON
          }
        })
      }, [J.isEmojiEditingExperimentEnabled, exports]),
      es = async (e, n, r) => {
        let i = await (0, I.G)({
          data: e,
          file: n,
          image: r,
          guildId: t.id,
          uploadId: l,
          hideErrorModal: true,
          analyticsLocation: {
            page: B.ZY5.GUILD_SETTINGS
          }
        });
        if ("object" != typeof i || !("id" in i)) return i;
        U.MK({
          emojiId: i.id,
          userImage: {
            data: e,
            file: n,
            image: r
          }
        })
      }, ea = async e => {
        s((0, m.Z)()), R.default.track(B.rMx.EMOJI_UPLOAD_STARTED, {
          guild_id: t.id,
          upload_id: l
        }), await (0, T._j)(e, es), S(true)
      }, eo = () => {
        null !== Chunk267642.current && ((0, Chunk481060.Mr3)(Chunk267642.current), Chunk267642.current = null)
      }, ec = async e => {
        A.current = await (0, f.ZDy)(async () => {
          let {
            default: t
          } = await n.e("16169").then(n.bind(n, 935333));
          return n => (0, r.jsx)(t, W({
            processFiles: () => ea(e)
          }, n))
        })
      }, ed = (0, Chunk200876.l)(exports), eu = J.isEmojiEditingExperimentEnabled ? e => el({
        emoji: e
      }) : true;
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk52116.emojiSettings,
      children: [0 === Chunk185923 ? null : (0, Chunk951288.jsx)(Chunk327802.Z, {
        className: Chunk52116.emojiUploadContainer,
        onDrop: ec
      }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
        tag: Chunk481060.RB0.H1,
        title: Chunk388032.intl.string(Chunk388032.t.sMOuub),
        children: [(0, Chunk951288.jsx)($, {
          guild: exports,
          staticEmojiCount: K,
          animatedEmojiCount: Q
        }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
          className: Chunk52116.uploader,
          children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
            type: Chunk481060.geA.DESCRIPTION,
            children: Chunk388032.intl.format(Chunk388032.t.TA1BR0, {
              count: Chunk51144
            })
          }), ed && (0, Chunk951288.jsx)(Chunk481060.R94, {
            type: Chunk481060.geA.DESCRIPTION,
            children: Chunk388032.intl.format(Chunk388032.t.uMkfTk, {
              onClick: () => Chunk434404.Z.open(exports.id, Chunk981631.pNK.ROLE_SUBSCRIPTIONS, true, Chunk981631.KsC.ROLE_SUBSCRIPTION_EMOJI)
            })
          }), J.enabled ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
            children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
              variant: "primary",
              text: Chunk388032.intl.string(Chunk388032.t.DU0dy8),
              onClick: () => el(),
              disabled: 0 === Chunk185923
            }), (0, Chunk951288.jsx)(Chunk481060.Text, {
              variant: "text-xs/normal",
              children: Chunk388032.intl.string(Chunk388032.t.EgNCTk)
            })]
          }) : (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
            children: [(0, Chunk951288.jsx)(ee, {}), (0, Chunk951288.jsxs)(Chunk755721.zx, {
              "data-migration-pending": true,
              tabIndex: false,
              size: Chunk755721.zx.Sizes.MEDIUM,
              onClick: () => {
                let e = (0, Chunk772848.Z)();
                s(module), Chunk626135.default.track(Chunk981631.rMx.EMOJI_UPLOAD_STARTED, {
                  guild_id: exports.id,
                  upload_id: module
                })
              },
              disabled: er,
              submitting: Chunk768581,
              focusProps: {
                within: true
              },
              children: [Chunk388032.intl.string(Chunk388032.t.DU0dy8), Chunk185923 > 0 ? (0, Chunk951288.jsx)(Chunk372129.ZP, {
                ref: module,
                disabled: er,
                tabIndex: 0,
                onChange: es,
                setLoading: Chunk176354,
                multiple: true
              }) : null]
            })]
          })]
        }), (0, Chunk951288.jsx)(X, {
          isLoading: null == Chunk668781,
          staticEmoji: Chunk504401,
          animatedEmoji: q,
          guild: exports,
          theme: Chunk512722,
          onEdit: eu,
          newlyAddedEmojiIds: ei
        })]
      })]
    })
  }