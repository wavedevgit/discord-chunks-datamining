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
      emoji: s,
      onEdit: o,
      editingDisabled: c = false,
      isNewlyAdded: d = false
    } = e, [g, m] = i.useState(s.name), f = D.ZP.getEmojiURL({
      id: s.id,
      animated: s.animated,
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
    }), d ? "respect-motion-settings" : "animate-never"), [_] = (0, h.q_F)(() => ({
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
    }), d ? "respect-motion-settings" : "animate-never"), O = k.ZP.useUserTag(s.user);
    return (0, r.jsxs)("div", {
      className: a()(W.emojiRow, V.card),
      role: "row",
      children: [(0, r.jsx)("div", {
        className: W.emojiColumn,
        children: (0, r.jsx)(p.u, {
          text: s.available ? null : z.intl.string(z.t.KUzI73),
          children: (0, r.jsx)(u.animated.div, {
            className: a()(W.emojiImage, {
              [W.emojiDisabled]: !s.available
            }),
            style: (t = K({}, d ? v : {}, d ? _ : {}), n = n = {
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
        className: W.column,
        children: (0, r.jsx)("div", {
          className: W.emojiAliasInputContainer,
          children: (0, r.jsx)(j.Z, {
            className: a()({
              [W.emojiAliasInputDisabled]: c
            }),
            disabled: c,
            minLen: 1,
            maxLen: H.Yc,
            name: z.intl.string(z.t.qUpzYO),
            autoComplete: "off",
            value: null != g ? g : "",
            onBlur: () => {
              if (g === s.name) return;
              let e = A.ZP.sanitizeEmojiName(g);
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
        className: W.column,
        children: (0, r.jsx)(C.Z, {
          avatar: (0, r.jsx)(h.qEK, {
            src: s.user.getAvatarURL(l, 20),
            "aria-label": O,
            size: h.EFr.SIZE_20
          }),
          name: (0, r.jsx)(h.Text, {
            variant: "text-sm/normal",
            children: O
          })
        })
      }), !c && (0, r.jsxs)("div", {
        className: W.emojiRowTools,
        children: [null == o ? null : (0, r.jsx)(p.u, {
          text: z.intl.string(z.t.FOYn8U),
          "aria-label": z.intl.string(z.t.FOYn8U),
          children: (0, r.jsx)(h.hU, {
            size: "sm",
            variant: "secondary",
            icon: h.vdY,
            onClick: () => o(s, l),
            "aria-label": z.intl.string(z.t.FOYn8U)
          })
        }), (0, r.jsx)(p.u, {
          text: z.intl.string(z.t["+euLPe"]),
          "aria-label": z.intl.string(z.t["+euLPe"]),
          children: (0, r.jsx)(h.hU, {
            size: "sm",
            variant: "critical-secondary",
            icon: h.XHJ,
            onClick: () => {
              (0, x.RE)(l, s.id).catch(e => {
                let {
                  status: t
                } = e;
                429 === t && b.Z.show({
                  title: z.intl.string(z.t.iufib1),
                  body: z.intl.string(z.t.Whhv4w)
                })
              })
            },
            "aria-label": z.intl.string(z.t["+euLPe"])
          })
        })]
      })]
    })
  },
  X = e => {
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
      className: W.spinner,
      type: h.$jN.Type.SPINNING_CIRCLE
    }) : 0 === i.length && 0 === l.length ? (0, r.jsxs)(h.ubH, {
      theme: a,
      className: W.empty,
      children: [(0, r.jsx)(h.oxh, {
        darkSrc: n(458601),
        lightSrc: n(673557),
        width: 272,
        height: 212
      }), (0, r.jsx)(h.OZU, {
        note: z.intl.string(z.t.RBbtMy),
        children: z.intl.string(z.t.lxsmBd)
      })]
    }) : (0, r.jsxs)("div", {
      children: [(0, r.jsx)(J, {
        title: z.intl.string(z.t.sMOuuS),
        maxSlots: (0, L.y4)(s),
        emojiCount: i.length,
        children: (0, r.jsx)(Q, {
          emojis: i,
          guild: s,
          onEdit: o,
          newlyAddedEmojiIds: c
        })
      }), (0, r.jsx)(J, {
        title: z.intl.string(z.t.wWjQye),
        maxSlots: (0, L.y4)(s),
        emojiCount: l.length,
        children: (0, r.jsx)(Q, {
          emojis: l,
          guild: s,
          onEdit: o,
          newlyAddedEmojiIds: c
        })
      })]
    })
  },
  J = e => {
    let {
      title: t,
      maxSlots: n,
      emojiCount: i,
      children: l
    } = e, a = Math.max(n - i, 0);
    return (0, r.jsx)(h.C3N, {
      label: t,
      description: z.intl.format(z.t.sgL8sI, {
        count: a
      }),
      children: l
    })
  },
  Q = e => {
    let {
      emojis: t,
      guild: n,
      onEdit: l,
      editingDisabled: a = false,
      newlyAddedEmojiIds: s
    } = e, o = i.useMemo(() => [...t].reverse(), [t]), {
      canManageGuildExpression: c
    } = (0, w.Gw)(n), d = (0, m.e7)([Z.Z], () => Z.Z.theme);
    return 0 === t.length ? (0, r.jsx)(h.ubH, {
      theme: d,
      children: (0, r.jsx)(h.OZU, {
        children: z.intl.string(z.t.SpxYoT)
      })
    }) : (0, r.jsxs)("div", {
      role: "table",
      "aria-label": z.intl.string(z.t.sMOuuS),
      className: W.table,
      children: [(0, r.jsxs)("div", {
        role: "rowgroup",
        className: W.tableHeader,
        children: [(0, r.jsx)("div", {
          role: "columnheader",
          className: W.emojiColumn,
          children: (0, r.jsx)(h.Text, {
            variant: "text-sm/semibold",
            children: z.intl.string(z.t.Z0i3Gp)
          })
        }), (0, r.jsx)("div", {
          role: "columnheader",
          className: W.columnLabel,
          children: (0, r.jsx)(h.Text, {
            variant: "text-sm/semibold",
            children: z.intl.string(z.t.giajw6)
          })
        }), (0, r.jsx)("div", {
          role: "columnheader",
          className: W.columnLabel,
          children: (0, r.jsx)(h.Text, {
            variant: "text-sm/semibold",
            children: z.intl.string(z.t.edavpq)
          })
        })]
      }), (0, r.jsx)("div", {
        role: "rowgroup",
        className: W.tableBody,
        children: o.map(e => {
          var t;
          return (0, r.jsx)(q, {
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
  $ = e => {
    let t, n, i, {
        staticEmojiCount: l,
        animatedEmojiCount: a,
        guild: s
      } = e,
      o = (0, L.y4)(s),
      c = Math.min(o - l, o - a),
      d = s.premiumTier,
      u = (0, L.FZ)(d);
    return null == u || d === F.Eu4.TIER_3 || c > 0 ? null : (c > o ? (t = z.intl.formatToPlainString(z.t.j0UH0m, {
      level: u
    }), n = z.intl.formatToPlainString(z.t.VQeyK6, {
      level: u
    }), i = F.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL) : (t = z.intl.string(z.t.zT9SxY), n = z.intl.formatToPlainString(z.t.dBZ1RU, {
      level: u
    }), i = F.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL), (0, r.jsx)(T.Z, {
      header: t,
      text: n,
      guild: s,
      analyticsLocation: {
        page: F.ZY5.GUILD_SETTINGS,
        section: F.jXE.GUILD_SETTINGS_STICKERS,
        object: i,
        objectType: (0, L.ge)(u)
      }
    }))
  },
  ee = () => (0, Chunk951288.jsxs)("div", {
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
  et = () => {
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
        emojis: p
      } = (0, Chunk442837.cj)([Chunk471613.Z], () => ({
        revision: Chunk471613.Z.getEmojiRevision(exports.id),
        emojis: Chunk471613.Z.getEmojis(exports.id)
      })),
      b = (0, Chunk110924.Z)(Chunk509442),
      [x, j] = Chunk647438.useState(false),
      [C, T] = Chunk647438.useState(false),
      D = Chunk647438.useRef(null),
      {
        maxEmojiSlots: A,
        availableEmojiSlots: L,
        staticEmoji: k,
        totalStaticEmoji: H,
        animatedEmoji: V,
        totalAnimatedEmoji: q
      } = (0, Chunk719403.t)({
        guild: exports
      }),
      J = (0, Chunk556019.qt)({
        location: "guild_settings",
        autoTrackExposure: true
      }),
      [Q, et] = Chunk647438.useState(null),
      en = Chunk570908 || 0 === Chunk267642 || !Chunk392711;
    Chunk647438.useEffect(() => {
      Chunk80932 && es()
    }, [Chunk80932]), Chunk647438.useEffect(() => {
      Y(exports.id)
    }, [exports.id]), Chunk647438.useEffect(() => {
      null != Chunk668781 && Chunk668781 < Chunk509442 && Y(exports.id)
    }, [Chunk509442, Chunk668781, exports.id]), Chunk647438.useEffect(() => {
      if (null != Chunk28664 && null == Q) return void et(Chunk28664)
    }, [Chunk28664, Q]);
    let er = Chunk647438.useMemo(() => J.enabled && null != Q ? new Set(d().differenceBy(Chunk28664, Q, "id").map(e => e.id)) : new Set, [J.enabled, Chunk28664, Q]),
      ei = Chunk647438.useCallback(function() {
        let {
          emoji: e
        } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
        if (J.enabled && null != module) return void(0, Chunk748523.i)({
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
      }, [J.enabled, exports]),
      el = async (e, n, r) => {
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
        B.M({
          emojiId: i.id,
          userImage: {
            data: e,
            file: n,
            image: r
          }
        })
      }, ea = async e => {
        a((0, g.Z)()), R.default.track(F.rMx.EMOJI_UPLOAD_STARTED, {
          guild_id: t.id,
          upload_id: l
        }), await (0, P._j)(e, el), j(true)
      }, es = () => {
        null !== Chunk768581.current && ((0, Chunk481060.Mr3)(Chunk768581.current), Chunk768581.current = null)
      }, eo = async e => {
        D.current = await (0, h.ZDy)(async () => {
          let {
            default: t
          } = await n.e("16169").then(n.bind(n, 935333));
          return n => (0, r.jsx)(t, K({
            processFiles: () => ea(e)
          }, n))
        })
      }, ec = (0, Chunk200876.l)(exports), ed = J.enabled ? e => ei({
        emoji: e
      }) : true;
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk878341.emojiSettings,
      children: [0 === Chunk267642 ? null : (0, Chunk951288.jsx)(Chunk327802.Z, {
        className: Chunk878341.emojiUploadContainer,
        onDrop: eo
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
        }), (0, Chunk951288.jsx)($, {
          guild: exports,
          staticEmojiCount: Chunk185923,
          animatedEmojiCount: q
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk878341.uploader,
          children: [ec && (0, Chunk951288.jsx)(Chunk481060.Wn, {
            messageType: Chunk481060.QYI.INFO,
            children: Chunk388032.intl.format(Chunk388032.t.uMkfTo, {
              onClick: () => Chunk434404.Z.open(exports.id, Chunk981631.pNK.ROLE_SUBSCRIPTIONS, true, Chunk981631.KsC.ROLE_SUBSCRIPTION_EMOJI)
            })
          }), J.enabled ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
            children: [(0, Chunk951288.jsx)(Chunk481060.Button, {
              variant: "primary",
              text: Chunk388032.intl.string(Chunk388032.t["DU0dy/"]),
              onClick: () => ei(),
              disabled: 0 === Chunk267642
            }), (0, Chunk951288.jsx)(Chunk481060.Text, {
              variant: "text-xs/normal",
              children: Chunk388032.intl.string(Chunk388032.t.EgNCTi)
            })]
          }) : (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
            children: [(0, Chunk951288.jsx)(ee, {}), (0, Chunk951288.jsxs)(Chunk755721.zx, {
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
              disabled: en,
              submitting: Chunk570908,
              focusProps: {
                within: true
              },
              children: [Chunk388032.intl.string(Chunk388032.t["DU0dy/"]), Chunk267642 > 0 ? (0, Chunk951288.jsx)(Chunk372129.ZP, {
                ref: module,
                disabled: en,
                tabIndex: 0,
                onChange: el,
                setLoading: Chunk372444,
                multiple: true
              }) : null]
            })]
          })]
        }), (0, Chunk951288.jsx)(X, {
          isLoading: null == Chunk28664,
          staticEmoji: Chunk51144,
          animatedEmoji: Chunk620842,
          guild: exports,
          theme: Chunk512722,
          onEdit: ed,
          newlyAddedEmojiIds: er
        })]
      })]
    })
  }