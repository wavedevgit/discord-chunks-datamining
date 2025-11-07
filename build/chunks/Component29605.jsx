/** Chunk was on 64982 **/
/** chunk id: 29605, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  FT: () => $,
  L3: () => Q,
  ZP: () => en
}), require("./388685.js"), require("./583741.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  d = require.n(Chunk392711),
  Chunk509442 = require("./509442.js"),
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
  Chunk570908 = require("./570908.jsx"),
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

function Y(e) {
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
let q = d().throttle(Chunk80932.OQ, 1e3),
  X = e => {
    var t, n;
    let {
      guildId: l,
      emoji: s,
      onEdit: o,
      editingDisabled: c = false,
      isNewlyAdded: d = false
    } = e, [g, m] = i.useState(s.name), f = A.ZP.getEmojiURL({
      id: s.id,
      animated: s.animated,
      size: 32
    }), [_] = (0, h.q_F)(() => ({
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
    }), d ? "respect-motion-settings" : "animate-never"), [O] = (0, h.q_F)(() => ({
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
    }), d ? "respect-motion-settings" : "animate-never"), C = G.ZP.useUserTag(s.user);
    return (0, r.jsxs)("div", {
      className: a()(V.emojiRow, K.card),
      role: "row",
      children: [(0, r.jsx)("div", {
        className: V.emojiColumn,
        children: (0, r.jsx)(p.u, {
          text: s.available ? null : W.intl.string(W.t.KUzI73),
          children: (0, r.jsx)(u.animated.div, {
            className: a()(V.emojiImage, {
              [V.emojiDisabled]: !s.available
            }),
            style: (t = Y({}, d ? _ : {}, d ? O : {}), n = n = {
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
          })
        })
      }), (0, r.jsx)("div", {
        className: V.column,
        children: (0, r.jsx)("div", {
          className: V.emojiAliasInputContainer,
          children: (0, r.jsx)(v.Z, {
            className: a()({
              [V.emojiAliasInputDisabled]: c
            }),
            disabled: c,
            minLen: 1,
            maxLen: z.Yc,
            name: W.intl.string(W.t.qUpzYO),
            autoComplete: "off",
            value: null != g ? g : "",
            onBlur: () => {
              if (g === s.name) return;
              let e = L.ZP.sanitizeEmojiName(g);
              e !== s.name && (0, x.dv)({
                guildId: l,
                emojiId: s.id,
                name: e
              }), m(e)
            },
            onChange: e => {
              m(e.target.value)
            }
          })
        })
      }), (0, r.jsx)("div", {
        className: V.column,
        children: (0, r.jsx)(y.Z, {
          avatar: (0, r.jsx)(h.qEK, {
            src: s.user.getAvatarURL(l, 20),
            "aria-label": C,
            size: h.EFr.SIZE_20
          }),
          name: (0, r.jsx)(h.Text, {
            variant: "text-sm/normal",
            children: C
          })
        })
      }), null != o && !c && (0, r.jsx)(h.P3F, {
        "aria-label": W.intl.string(W.t.bt75uw),
        className: V.editEmojiRolesButton,
        onClick: () => o(s, l),
        children: (0, r.jsx)(h.vdY, {
          size: "md",
          color: "currentColor",
          className: V.editEmojiRolesIcon
        })
      }), !c && (0, r.jsx)(j.Z, {
        className: V.emojiRemove,
        onClick: () => {
          (0, x.RE)(l, s.id).catch(e => {
            let {
              status: t
            } = e;
            429 === t && b.Z.show({
              title: W.intl.string(W.t.iufib1),
              body: W.intl.string(W.t.Whhv4w)
            })
          })
        }
      })]
    })
  },
  J = e => {
    let {
      isLoading: t,
      staticEmoji: i,
      animatedEmoji: l,
      theme: a,
      guild: s,
      onEdit: o,
      newlyAddedEmojiIds: c
    } = e;
    return t ? (0, r.jsx)(h.$jN, {
      className: V.spinner,
      type: h.$jN.Type.SPINNING_CIRCLE
    }) : 0 === i.length && 0 === l.length ? (0, r.jsxs)(h.ubH, {
      theme: a,
      className: V.empty,
      children: [(0, r.jsx)(h.oxh, {
        darkSrc: n(458601),
        lightSrc: n(673557),
        width: 272,
        height: 212
      }), (0, r.jsx)(h.OZU, {
        note: W.intl.string(W.t.RBbtMy),
        children: W.intl.string(W.t.lxsmBd)
      })]
    }) : (0, r.jsxs)("div", {
      children: [(0, r.jsx)(Q, {
        title: W.intl.string(W.t.sMOuuS),
        maxSlots: (0, k.y4)(s),
        emojiCount: i.length,
        children: (0, r.jsx)($, {
          emojis: i,
          guild: s,
          onEdit: o,
          newlyAddedEmojiIds: c
        })
      }), (0, r.jsx)(Q, {
        title: W.intl.string(W.t.wWjQye),
        maxSlots: (0, k.y4)(s),
        emojiCount: l.length,
        children: (0, r.jsx)($, {
          emojis: l,
          guild: s,
          onEdit: o,
          newlyAddedEmojiIds: c
        })
      })]
    })
  },
  Q = e => {
    let {
      title: t,
      maxSlots: n,
      emojiCount: i,
      children: l
    } = e, a = Math.max(n - i, 0);
    return (0, r.jsx)(h.C3N, {
      label: t,
      description: W.intl.format(W.t.sgL8sI, {
        count: a
      }),
      children: l
    })
  },
  $ = e => {
    let {
      emojis: t,
      guild: n,
      onEdit: l,
      editingDisabled: a = false,
      newlyAddedEmojiIds: s
    } = e, o = i.useMemo(() => [...t].reverse(), [t]), {
      canManageGuildExpression: c
    } = (0, Z.Gw)(n), d = (0, m.e7)([R.Z], () => R.Z.theme);
    return 0 === t.length ? (0, r.jsx)(h.ubH, {
      theme: d,
      children: (0, r.jsx)(h.OZU, {
        children: W.intl.string(W.t.SpxYoT)
      })
    }) : (0, r.jsxs)("div", {
      role: "table",
      "aria-label": W.intl.string(W.t.sMOuuS),
      className: V.table,
      children: [(0, r.jsxs)("div", {
        role: "rowgroup",
        className: V.tableHeader,
        children: [(0, r.jsx)("div", {
          role: "columnheader",
          className: V.emojiColumn,
          children: (0, r.jsx)(h.Text, {
            variant: "text-sm/semibold",
            children: W.intl.string(W.t.Z0i3Gp)
          })
        }), (0, r.jsx)("div", {
          role: "columnheader",
          className: V.columnLabel,
          children: (0, r.jsx)(h.Text, {
            variant: "text-sm/semibold",
            children: W.intl.string(W.t.giajw6)
          })
        }), (0, r.jsx)("div", {
          role: "columnheader",
          className: V.columnLabel,
          children: (0, r.jsx)(h.Text, {
            variant: "text-sm/semibold",
            children: W.intl.string(W.t.edavpq)
          })
        })]
      }), (0, r.jsx)("div", {
        role: "rowgroup",
        className: V.tableBody,
        children: o.map(e => {
          var t;
          return (0, r.jsx)(X, {
            guildId: n.id,
            emoji: e,
            onEdit: l,
            editingDisabled: a || !c(e),
            isNewlyAdded: null != (t = null == s ? true : s.has(e.id)) && t
          }, e.id)
        })
      })]
    })
  },
  ee = e => {
    let t, n, i, {
        staticEmojiCount: l,
        animatedEmojiCount: a,
        guild: s
      } = e,
      o = (0, k.y4)(s),
      c = Math.min(o - l, o - a),
      d = s.premiumTier,
      u = (0, k.FZ)(d);
    return null == u || d === H.Eu4.TIER_3 || c > 0 ? null : (c > o ? (t = W.intl.formatToPlainString(W.t.j0UH0m, {
      level: u
    }), n = W.intl.formatToPlainString(W.t.VQeyK6, {
      level: u
    }), i = H.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL) : (t = W.intl.string(W.t.zT9SxY), n = W.intl.formatToPlainString(W.t.dBZ1RU, {
      level: u
    }), i = H.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL), (0, r.jsx)(P.Z, {
      header: t,
      text: n,
      guild: s,
      analyticsLocation: {
        page: H.ZY5.GUILD_SETTINGS,
        section: H.jXE.GUILD_SETTINGS_STICKERS,
        object: i,
        objectType: (0, k.ge)(u)
      }
    }))
  },
  et = () => (0, Chunk951288.jsxs)("div", {
    children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
      variant: "heading-sm/semibold",
      children: Chunk388032.intl.string(Chunk388032.t.jrXfyw)
    }), (0, Chunk951288.jsxs)("ul", {
      className: Chunk878341.emojiUploadUploadRequirementsList,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        tag: "li",
        children: Chunk388032.intl.string(Chunk388032.t.N2qTQ3)
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        tag: "li",
        children: Chunk388032.intl.format(Chunk388032.t.gfAXoR, {
          maxSize: Chunk185923.xG
        })
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        tag: "li",
        children: Chunk388032.intl.string(Chunk388032.t.rnwKPH)
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        tag: "li",
        children: Chunk388032.intl.string(Chunk388032.t["8Vr5Qd"])
      })]
    })]
  }),
  en = () => {
    let e = Chunk647438.useRef(null),
      t = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
      [l, a] = Chunk647438.useState("");
    o()(null != exports, "ConnectedGuildSettingsEmoji must be rendered within a guild context");
    let s = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme),
      {
        canCreateExpressions: c
      } = (0, Chunk357156.XJ)(exports),
      {
        revision: u,
        emojis: p,
        autoOpen: b
      } = (0, Chunk442837.cj)([Chunk471613.Z], () => ({
        revision: Chunk471613.Z.getEmojiRevision(exports.id),
        emojis: Chunk471613.Z.getEmojis(exports.id),
        autoOpen: Chunk471613.Z.getEmojiFileInputAutoOpen()
      })),
      x = (0, Chunk110924.Z)(Chunk509442),
      [j, v] = Chunk647438.useState(false),
      [y, P] = Chunk647438.useState(false),
      A = Chunk647438.useRef(null),
      {
        maxEmojiSlots: L,
        availableEmojiSlots: k,
        staticEmoji: G,
        totalStaticEmoji: z,
        animatedEmoji: K,
        totalAnimatedEmoji: X
      } = (0, Chunk719403.t)({
        guild: exports
      }),
      Q = (0, Chunk556019.qt)({
        location: "guild_settings",
        autoTrackExposure: true
      }),
      [$, en] = Chunk647438.useState(null),
      er = Chunk570908 || 0 === Chunk267642 || !Chunk392711;
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
      q(exports.id)
    }, [exports.id]), Chunk647438.useEffect(() => {
      null != Chunk80932 && Chunk80932 < Chunk509442 && q(exports.id)
    }, [Chunk509442, Chunk80932, exports.id]), Chunk647438.useEffect(() => {
      if (null != Chunk28664 && null == $) return void en(Chunk28664)
    }, [Chunk28664, $]);
    let ei = Chunk647438.useMemo(() => Q.isEmojiEditingExperimentEnabled && null != $ ? new Set(d().differenceBy(Chunk28664, $, "id").map(e => e.id)) : new Set, [Q.isEmojiEditingExperimentEnabled, Chunk28664, $]),
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
      ea = async (e, n, r) => {
        let i = await (0, T.G)({
          data: e,
          file: n,
          image: r,
          guildId: t.id,
          uploadId: l,
          hideErrorModal: true,
          analyticsLocation: {
            page: H.ZY5.GUILD_SETTINGS
          }
        });
        if ("object" != typeof i || !("id" in i)) return i;
        F.MK({
          emojiId: i.id,
          userImage: {
            data: e,
            file: n,
            image: r
          }
        })
      }, es = async e => {
        a((0, g.Z)()), D.default.track(H.rMx.EMOJI_UPLOAD_STARTED, {
          guild_id: t.id,
          upload_id: l
        }), await (0, w._j)(e, ea), v(true)
      }, eo = () => {
        null !== Chunk768581.current && ((0, Chunk481060.Mr3)(Chunk768581.current), Chunk768581.current = null)
      }, ec = async e => {
        A.current = await (0, h.ZDy)(async () => {
          let {
            default: t
          } = await n.e("16169").then(n.bind(n, 935333));
          return n => (0, r.jsx)(t, Y({
            processFiles: () => es(e)
          }, n))
        })
      }, ed = (0, Chunk200876.l)(exports), eu = Q.isEmojiEditingExperimentEnabled ? e => el({
        emoji: e
      }) : true;
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk878341.emojiSettings,
      children: [0 === Chunk267642 ? null : (0, Chunk951288.jsx)(Chunk327802.Z, {
        className: Chunk878341.emojiUploadContainer,
        onDrop: ec
      }), (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
        gap: 20,
        children: [(0, Chunk951288.jsxs)(Chunk481060.Kqy, {
          gap: 4,
          children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
            variant: "heading-lg/semibold",
            children: Chunk388032.intl.string(Chunk388032.t.sMOuuS)
          }), (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-md/normal",
            children: Chunk388032.intl.format(Chunk388032.t.TA1BR0, {
              count: Chunk176354
            })
          })]
        }), (0, Chunk951288.jsx)(ee, {
          guild: exports,
          staticEmojiCount: Chunk185923,
          animatedEmojiCount: X
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk878341.uploader,
          children: [ed && (0, Chunk951288.jsx)(Chunk481060.Wn, {
            messageType: Chunk481060.QYI.INFO,
            children: Chunk388032.intl.format(Chunk388032.t.uMkfTo, {
              onClick: () => Chunk434404.Z.open(exports.id, Chunk981631.pNK.ROLE_SUBSCRIPTIONS, true, Chunk981631.KsC.ROLE_SUBSCRIPTION_EMOJI)
            })
          }), Q.enabled ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
            children: [(0, Chunk951288.jsx)(Chunk481060.Button, {
              variant: "primary",
              text: Chunk388032.intl.string(Chunk388032.t["DU0dy/"]),
              onClick: () => el(),
              disabled: 0 === Chunk267642
            }), (0, Chunk951288.jsx)(Chunk481060.Text, {
              variant: "text-xs/normal",
              children: Chunk388032.intl.string(Chunk388032.t.EgNCTi)
            })]
          }) : (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
            children: [(0, Chunk951288.jsx)(et, {}), (0, Chunk951288.jsxs)(Chunk755721.zx, {
              "data-migration-pending": true,
              tabIndex: false,
              size: Chunk755721.zx.Sizes.MEDIUM,
              onClick: () => {
                let e = (0, Chunk772848.Z)();
                a(module), Chunk626135.default.track(Chunk981631.rMx.EMOJI_UPLOAD_STARTED, {
                  guild_id: exports.id,
                  upload_id: module
                })
              },
              disabled: er,
              submitting: Chunk570908,
              focusProps: {
                within: true
              },
              children: [Chunk388032.intl.string(Chunk388032.t["DU0dy/"]), Chunk267642 > 0 ? (0, Chunk951288.jsx)(Chunk372129.ZP, {
                ref: module,
                disabled: er,
                tabIndex: 0,
                onChange: ea,
                setLoading: Chunk372444,
                multiple: true
              }) : null]
            })]
          })]
        }), (0, Chunk951288.jsx)(J, {
          isLoading: null == Chunk28664,
          staticEmoji: Chunk51144,
          animatedEmoji: Chunk620842,
          guild: exports,
          theme: Chunk512722,
          onEdit: eu,
          newlyAddedEmojiIds: ei
        })]
      })]
    })
  }