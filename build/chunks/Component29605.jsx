/** Chunk was on 64982 **/
/** chunk id: 29605, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  FT: () => Q,
  L3: () => J,
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
  Chunk137317 = require("./137317.js"),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk878341 = require("./878341.js"),
  Chunk620842 = require("./620842.js");

function K(e) {
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
let Y = d().throttle(Chunk80932.OQ, 1e3),
  q = e => {
    var t, n;
    let {
      guildId: l,
      emoji: a,
      onEdit: o,
      editingDisabled: c = false,
      isNewlyAdded: d = false
    } = e, [m, g] = i.useState(a.name), f = D.ZP.getEmojiURL({
      id: a.id,
      animated: a.animated,
      size: 32
    }), [v] = (0, h.q_F)(() => ({
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
    }), d ? "respect-motion-settings" : "animate-never"), [C] = (0, h.q_F)(() => ({
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
    }), d ? "respect-motion-settings" : "animate-never"), O = k.ZP.useUserTag(a.user);
    return (0, r.jsxs)("div", {
      className: s()(W.emojiRow, V.card),
      children: [(0, r.jsx)("div", {
        className: W.emojiColumn,
        children: (0, r.jsxs)(p.u, {
          text: a.available ? null : z.intl.string(z.t["KUzI7+"]),
          children: [(0, r.jsx)(u.animated.div, {
            className: s()(W.emojiImage, {
              [W.emojiDisabled]: !a.available
            }),
            style: (t = K({}, d ? v : {}, d ? C : {}), n = n = {
              backgroundImage: "url(".concat(f, ")")
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(n)).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t)
          }), ")"]
        })
      }), (0, r.jsx)("div", {
        className: W.column,
        children: (0, r.jsx)("div", {
          className: W.emojiAliasInputContainer,
          children: (0, r.jsx)(_.Z, {
            className: s()({
              [W.emojiAliasInputDisabled]: c
            }),
            disabled: c,
            minLen: 1,
            maxLen: H.Yc,
            name: z.intl.string(z.t.qUpzYG),
            autoComplete: "off",
            value: null != m ? m : "",
            onBlur: () => {
              if (m === a.name) return;
              let e = A.ZP.sanitizeEmojiName(m);
              e !== a.name && (0, b.dv)({
                guildId: l,
                emojiId: a.id,
                name: e
              }), g(e)
            },
            onChange: e => {
              g(e.target.value)
            }
          })
        })
      }), (0, r.jsxs)("div", {
        className: W.column,
        children: [(0, r.jsx)(h.qEK, {
          src: a.user.getAvatarURL(l, 20),
          "aria-label": O,
          size: h.EFr.SIZE_20
        }), (0, r.jsx)(h.R94, {
          className: W.emojiRowText,
          children: O
        })]
      }), null != o && !c && (0, r.jsx)(h.P3F, {
        "aria-label": z.intl.string(z.t.bt75u7),
        className: W.editEmojiRolesButton,
        onClick: () => o(a, l),
        children: (0, r.jsx)(h.vdY, {
          size: "md",
          color: "currentColor",
          className: W.editEmojiRolesIcon
        })
      }), !c && (0, r.jsx)(j.Z, {
        className: W.emojiRemove,
        onClick: () => {
          (0, b.RE)(l, a.id).catch(e => {
            let {
              status: t
            } = e;
            429 === t && x.Z.show({
              title: z.intl.string(z.t.iufib2),
              body: z.intl.string(z.t["Whhv4+"])
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
    return t ? (0, r.jsx)(h.$jN, {
      className: W.spinner,
      type: h.$jN.Type.SPINNING_CIRCLE
    }) : 0 === i.length && 0 === l.length ? (0, r.jsxs)(h.ubH, {
      theme: s,
      className: W.empty,
      children: [(0, r.jsx)(h.oxh, {
        darkSrc: n(458601),
        lightSrc: n(673557),
        width: 272,
        height: 212
      }), (0, r.jsx)(h.OZU, {
        note: z.intl.string(z.t.RBbtMz),
        children: z.intl.string(z.t.lxsmBQ)
      })]
    }) : (0, r.jsxs)("div", {
      children: [(0, r.jsx)(J, {
        title: z.intl.string(z.t.sMOuub),
        maxSlots: (0, L.y4)(a),
        emojiCount: i.length
      }), (0, r.jsx)(Q, {
        emojis: i,
        guild: a,
        onEdit: o,
        newlyAddedEmojiIds: c
      }), (0, r.jsx)(J, {
        title: z.intl.string(z.t.wWjQyc),
        maxSlots: (0, L.y4)(a),
        emojiCount: l.length
      }), (0, r.jsx)(Q, {
        emojis: l,
        guild: a,
        onEdit: o,
        newlyAddedEmojiIds: c
      })]
    })
  },
  J = e => {
    let {
      title: t,
      maxSlots: n,
      emojiCount: i
    } = e, l = Math.max(n - i, 0);
    return (0, r.jsxs)(h.vwX, {
      tag: h.RB0.H2,
      className: W.title,
      children: [t, (0, r.jsxs)("span", {
        children: [" — ", z.intl.format(z.t.sgL8sL, {
          count: l
        })]
      })]
    })
  },
  Q = e => {
    let {
      emojis: t,
      guild: n,
      onEdit: l,
      editingDisabled: s = false,
      newlyAddedEmojiIds: a
    } = e, o = i.useMemo(() => [...t].reverse(), [t]), {
      canManageGuildExpression: c
    } = (0, w.Gw)(n);
    return 0 === t.length ? (0, r.jsx)(h.R94, {
      type: h.geA.DESCRIPTION,
      className: W.content,
      children: z.intl.string(z.t.SpxYoa)
    }) : (0, r.jsxs)(h.hjN, {
      className: W.content,
      children: [(0, r.jsxs)("div", {
        className: W.emojiTable,
        children: [(0, r.jsx)(h.R94, {
          type: h.geA.DESCRIPTION,
          className: W.emojiColumn,
          children: z.intl.string(z.t.Z0i3Gh)
        }), (0, r.jsx)(h.R94, {
          type: h.geA.DESCRIPTION,
          className: W.columnLabel,
          children: z.intl.string(z.t.giajw8)
        }), (0, r.jsx)(h.R94, {
          type: h.geA.DESCRIPTION,
          className: W.columnLabel,
          children: z.intl.string(z.t.edavpq)
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
      o = (0, L.y4)(a),
      c = Math.min(o - l, o - s),
      d = a.premiumTier,
      u = (0, L.FZ)(d);
    return null == u || d === F.Eu4.TIER_3 || c > 0 ? null : (c > o ? (t = z.intl.formatToPlainString(z.t.j0UH0t, {
      level: u
    }), n = z.intl.formatToPlainString(z.t.VQeyKy, {
      level: u
    }), i = F.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL) : (t = z.intl.string(z.t.zT9Sxc), n = z.intl.formatToPlainString(z.t.dBZ1RU, {
      level: u
    }), i = F.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL), (0, r.jsx)(T.Z, {
      header: t,
      text: n,
      guild: a,
      analyticsLocation: {
        page: F.ZY5.GUILD_SETTINGS,
        section: F.jXE.GUILD_SETTINGS_STICKERS,
        object: i,
        objectType: (0, L.ge)(u)
      }
    }))
  },
  ee = () => (0, Chunk951288.jsxs)("div", {
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
        emojis: p,
        autoOpen: x
      } = (0, Chunk442837.cj)([Chunk471613.Z], () => ({
        revision: Chunk471613.Z.getEmojiRevision(exports.id),
        emojis: Chunk471613.Z.getEmojis(exports.id),
        autoOpen: Chunk471613.Z.getEmojiFileInputAutoOpen()
      })),
      b = (0, Chunk110924.Z)(Chunk137317),
      [j, _] = Chunk647438.useState(false),
      [T, D] = Chunk647438.useState(false),
      A = Chunk647438.useRef(null),
      {
        maxEmojiSlots: L,
        availableEmojiSlots: k,
        staticEmoji: H,
        totalStaticEmoji: V,
        animatedEmoji: q,
        totalAnimatedEmoji: J
      } = (0, Chunk719403.t)({
        guild: exports
      }),
      Q = (0, Chunk556019.qt)({
        location: "guild_settings",
        autoTrackExposure: true
      }),
      [et, en] = Chunk647438.useState(null),
      er = Chunk372444 || 0 === Chunk51144 || !Chunk392711;
    Chunk647438.useEffect(() => {
      Chunk225433 && eo()
    }, [Chunk225433]), Chunk647438.useEffect(() => {
      if (Chunk668781) {
        if (!er) {
          var t;
          null == (t = module.current) || exports.activateUploadDialogue()
        }
        Chunk806774.ml({
          autoOpen: false
        })
      }
    }, [Chunk668781, er]), Chunk647438.useEffect(() => {
      Y(exports.id)
    }, [exports.id]), Chunk647438.useEffect(() => {
      null != Chunk80932 && Chunk80932 < Chunk137317 && Y(exports.id)
    }, [Chunk137317, Chunk80932, exports.id]), Chunk647438.useEffect(() => {
      if (null != Chunk28664 && null == et) return void en(Chunk28664)
    }, [Chunk28664, et]);
    let ei = Chunk647438.useMemo(() => Q.isEmojiEditingExperimentEnabled && null != et ? new Set(d().differenceBy(Chunk28664, et, "id").map(e => e.id)) : new Set, [Q.isEmojiEditingExperimentEnabled, Chunk28664, et]),
      el = Chunk647438.useCallback(function() {
        let {
          emoji: e
        } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
        if (Q.isEmojiEditingExperimentEnabled && null != module) return void(0, Chunk748523.i)({
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
      }, [Q.isEmojiEditingExperimentEnabled, exports]),
      es = async (e, n, r) => {
        let i = await (0, S.G)({
          data: e,
          file: n,
          image: r,
          guildId: t.id,
          uploadId: l,
          hideErrorModal: true,
          analyticsLocation: {
            page: F.ZY5.GUILD_SETTINGS
          }
        });
        if ("object" != typeof i || !("id" in i)) return i;
        B.MK({
          emojiId: i.id,
          userImage: {
            data: e,
            file: n,
            image: r
          }
        })
      }, ea = async e => {
        s((0, m.Z)()), Z.default.track(F.rMx.EMOJI_UPLOAD_STARTED, {
          guild_id: t.id,
          upload_id: l
        }), await (0, P._j)(e, es), _(true)
      }, eo = () => {
        null !== Chunk176354.current && ((0, Chunk481060.Mr3)(Chunk176354.current), Chunk176354.current = null)
      }, ec = async e => {
        A.current = await (0, h.ZDy)(async () => {
          let {
            default: t
          } = await n.e("16169").then(n.bind(n, 935333));
          return n => (0, r.jsx)(t, K({
            processFiles: () => ea(e)
          }, n))
        })
      }, ed = (0, Chunk200876.l)(exports), eu = Q.isEmojiEditingExperimentEnabled ? e => el({
        emoji: e
      }) : true;
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk878341.emojiSettings,
      children: [0 === Chunk51144 ? null : (0, Chunk951288.jsx)(Chunk327802.Z, {
        className: Chunk878341.emojiUploadContainer,
        onDrop: ec
      }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
        tag: Chunk481060.RB0.H1,
        title: Chunk388032.intl.string(Chunk388032.t.sMOuub),
        children: [(0, Chunk951288.jsx)($, {
          guild: exports,
          staticEmojiCount: Chunk620842,
          animatedEmojiCount: J
        }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
          className: Chunk878341.uploader,
          children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
            type: Chunk481060.geA.DESCRIPTION,
            children: Chunk388032.intl.format(Chunk388032.t.TA1BR0, {
              count: Chunk267642
            })
          }), ed && (0, Chunk951288.jsx)(Chunk481060.R94, {
            type: Chunk481060.geA.DESCRIPTION,
            children: Chunk388032.intl.format(Chunk388032.t.uMkfTk, {
              onClick: () => Chunk434404.Z.open(exports.id, Chunk981631.pNK.ROLE_SUBSCRIPTIONS, true, Chunk981631.KsC.ROLE_SUBSCRIPTION_EMOJI)
            })
          }), Q.enabled ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
            children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
              variant: "primary",
              text: Chunk388032.intl.string(Chunk388032.t.DU0dy8),
              onClick: () => el(),
              disabled: 0 === Chunk51144
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
              submitting: Chunk372444,
              focusProps: {
                within: true
              },
              children: [Chunk388032.intl.string(Chunk388032.t.DU0dy8), Chunk51144 > 0 ? (0, Chunk951288.jsx)(Chunk372129.ZP, {
                ref: module,
                disabled: er,
                tabIndex: 0,
                onChange: es,
                setLoading: Chunk768581,
                multiple: true
              }) : null]
            })]
          })]
        }), (0, Chunk951288.jsx)(X, {
          isLoading: null == Chunk28664,
          staticEmoji: Chunk185923,
          animatedEmoji: q,
          guild: exports,
          theme: Chunk512722,
          onEdit: eu,
          newlyAddedEmojiIds: ei
        })]
      })]
    })
  }