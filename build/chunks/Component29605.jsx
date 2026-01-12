/** Chunk was on 9536 **/
/** chunk id: 29605, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  FT: () => J,
  L3: () => X,
  ZP: () => ee
}), require("./388685.js"), require("./583741.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  d = require.n(Chunk392711),
  Chunk620389 = require("./620389.js"),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk908771 = require("./908771.js"),
  Chunk579480 = require("./579480.js");

function V(e) {
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
let K = d().throttle(Chunk80932.OQ, 1e3),
  Y = e => {
    var t, n;
    let {
      guildId: l,
      emoji: s,
      onEdit: o,
      editingDisabled: c = false,
      isNewlyAdded: d = false
    } = e, [g, f] = i.useState(s.name), j = R.ZP.getEmojiURL({
      id: s.id,
      animated: s.animated,
      size: 32
    }), [v] = (0, b.q_F)(() => ({
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
    }), d ? "respect-motion-settings" : "animate-never"), [O] = (0, b.q_F)(() => ({
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
    }), d ? "respect-motion-settings" : "animate-never"), C = L.ZP.useUserTag(s.user);
    return (0, r.jsxs)("div", {
      className: a()(W.emojiRow, z.card),
      role: "row",
      children: [(0, r.jsx)("div", {
        className: W.emojiColumn,
        children: (0, r.jsx)(m.u, {
          text: s.available ? null : H.intl.string(H.t.KUzI73),
          children: (0, r.jsx)(u.animated.div, {
            className: a()(W.emojiImage, {
              [W.emojiDisabled]: !s.available
            }),
            style: (t = V({}, d ? v : {}, d ? O : {}), n = n = {
              backgroundImage: "url(".concat(j, ")")
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
          children: (0, r.jsx)(x.Z, {
            className: a()({
              [W.emojiAliasInputDisabled]: c
            }),
            disabled: c,
            minLen: 1,
            maxLen: F.Yc,
            name: H.intl.string(H.t.qUpzYO),
            autoComplete: "off",
            value: null != g ? g : "",
            onBlur: () => {
              if (g === s.name) return;
              let e = D.ZP.sanitizeEmojiName(g);
              e !== s.name && (0, h.dv)({
                guildId: l,
                emojiId: s.id,
                name: e
              }), f(e)
            },
            onChange: e => {
              f(e.target.value)
            }
          })
        })
      }), (0, r.jsx)("div", {
        className: W.column,
        children: (0, r.jsx)(y.Z, {
          avatar: (0, r.jsx)(b.qEK, {
            src: s.user.getAvatarURL(l, 20),
            "aria-label": C,
            size: b.EFr.SIZE_20
          }),
          name: (0, r.jsx)(b.Text, {
            variant: "text-sm/normal",
            children: C
          })
        })
      }), !c && (0, r.jsxs)("div", {
        className: W.emojiRowTools,
        children: [null == o ? null : (0, r.jsx)(m.u, {
          text: H.intl.string(H.t.FOYn8U),
          "aria-label": H.intl.string(H.t.FOYn8U),
          children: (0, r.jsx)(b.hU, {
            size: "sm",
            variant: "secondary",
            icon: b.vdY,
            onClick: () => o(s, l),
            "aria-label": H.intl.string(H.t.FOYn8U)
          })
        }), (0, r.jsx)(m.u, {
          text: H.intl.string(H.t["+euLPe"]),
          "aria-label": H.intl.string(H.t["+euLPe"]),
          children: (0, r.jsx)(b.hU, {
            size: "sm",
            variant: "critical-secondary",
            icon: b.XHJ,
            onClick: () => {
              (0, h.RE)(l, s.id).catch(e => {
                let {
                  status: t
                } = e;
                429 === t && p.Z.show({
                  title: H.intl.string(H.t.iufib1),
                  body: H.intl.string(H.t.Whhv4w)
                })
              })
            },
            "aria-label": H.intl.string(H.t["+euLPe"])
          })
        })]
      })]
    })
  },
  q = e => {
    let {
      isLoading: t,
      staticEmoji: i,
      animatedEmoji: l,
      theme: a,
      guild: s,
      onEdit: o,
      newlyAddedEmojiIds: c
    } = e;
    return t ? (0, r.jsx)(b.$jN, {
      className: W.spinner,
      type: b.$jN.Type.SPINNING_CIRCLE
    }) : 0 === i.length && 0 === l.length ? (0, r.jsxs)(b.ubH, {
      theme: a,
      className: W.empty,
      children: [(0, r.jsx)(b.oxh, {
        darkSrc: n(458601),
        lightSrc: n(673557),
        width: 272,
        height: 212
      }), (0, r.jsx)(b.OZU, {
        note: H.intl.string(H.t.RBbtMy),
        children: H.intl.string(H.t.lxsmBd)
      })]
    }) : (0, r.jsxs)("div", {
      children: [(0, r.jsx)(X, {
        title: H.intl.string(H.t.sMOuuS),
        maxSlots: (0, A.y4)(s),
        emojiCount: i.length,
        children: (0, r.jsx)(J, {
          emojis: i,
          guild: s,
          onEdit: o,
          newlyAddedEmojiIds: c
        })
      }), (0, r.jsx)(X, {
        title: H.intl.string(H.t.wWjQye),
        maxSlots: (0, A.y4)(s),
        emojiCount: l.length,
        children: (0, r.jsx)(J, {
          emojis: l,
          guild: s,
          onEdit: o,
          newlyAddedEmojiIds: c
        })
      })]
    })
  },
  X = e => {
    let {
      title: t,
      maxSlots: n,
      emojiCount: i,
      children: l
    } = e, a = Math.max(n - i, 0);
    return (0, r.jsx)(b.C3N, {
      label: t,
      description: H.intl.format(H.t.sgL8sI, {
        count: a
      }),
      children: l
    })
  },
  J = e => {
    let {
      emojis: t,
      guild: n,
      onEdit: l,
      editingDisabled: a = false,
      newlyAddedEmojiIds: s
    } = e, o = i.useMemo(() => [...t].reverse(), [t]), {
      canManageGuildExpression: c
    } = (0, P.Gw)(n), d = (0, f.e7)([w.Z], () => w.Z.theme);
    return 0 === t.length ? (0, r.jsx)(b.ubH, {
      theme: d,
      children: (0, r.jsx)(b.OZU, {
        children: H.intl.string(H.t.SpxYoT)
      })
    }) : (0, r.jsxs)("div", {
      role: "table",
      "aria-label": H.intl.string(H.t.sMOuuS),
      className: W.table,
      children: [(0, r.jsxs)("div", {
        role: "rowgroup",
        className: W.tableHeader,
        children: [(0, r.jsx)("div", {
          role: "columnheader",
          className: W.emojiColumn,
          children: (0, r.jsx)(b.Text, {
            variant: "text-sm/semibold",
            children: H.intl.string(H.t.Z0i3Gp)
          })
        }), (0, r.jsx)("div", {
          role: "columnheader",
          className: W.columnLabel,
          children: (0, r.jsx)(b.Text, {
            variant: "text-sm/semibold",
            children: H.intl.string(H.t.giajw6)
          })
        }), (0, r.jsx)("div", {
          role: "columnheader",
          className: W.columnLabel,
          children: (0, r.jsx)(b.Text, {
            variant: "text-sm/semibold",
            children: H.intl.string(H.t.edavpq)
          })
        }), !a && (0, r.jsx)("div", {
          role: "none",
          className: W.toolsLabel
        })]
      }), (0, r.jsx)("div", {
        role: "rowgroup",
        className: W.tableBody,
        children: o.map(e => {
          var t;
          return (0, r.jsx)(Y, {
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
  Q = e => {
    let t, n, i, {
        staticEmojiCount: l,
        animatedEmojiCount: a,
        guild: s
      } = e,
      o = (0, A.y4)(s),
      c = Math.min(o - l, o - a),
      d = s.premiumTier,
      u = (0, A.FZ)(d);
    return null == u || d === B.Eu4.TIER_3 || c > 0 ? null : (c > o ? (t = H.intl.formatToPlainString(H.t.j0UH0m, {
      level: u
    }), n = H.intl.formatToPlainString(H.t.VQeyK6, {
      level: u
    }), i = B.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL) : (t = H.intl.string(H.t.zT9SxY), n = H.intl.formatToPlainString(H.t.dBZ1RU, {
      level: u
    }), i = B.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL), (0, r.jsx)(_.Z, {
      header: t,
      text: n,
      guild: s,
      analyticsLocation: {
        page: B.ZY5.GUILD_SETTINGS,
        section: B.jXE.GUILD_SETTINGS_STICKERS,
        object: i,
        objectType: (0, A.ge)(u)
      }
    }))
  },
  $ = () => (0, r.jsxs)("div", {
    children: [(0, r.jsx)(b.Heading, {
      variant: "heading-sm/semibold",
      children: H.intl.string(H.t.jrXfyw)
    }), (0, r.jsxs)("ul", {
      className: W.emojiUploadUploadRequirementsList,
      children: [(0, r.jsx)(b.Text, {
        variant: "text-sm/normal",
        tag: "li",
        children: H.intl.string(H.t.N2qTQ3)
      }), (0, r.jsx)(b.Text, {
        variant: "text-sm/normal",
        tag: "li",
        children: H.intl.format(H.t.gfAXoR, {
          maxSize: F.xG
        })
      }), (0, r.jsx)(b.Text, {
        variant: "text-sm/normal",
        tag: "li",
        children: H.intl.string(H.t.rnwKPH)
      }), (0, r.jsx)(b.Text, {
        variant: "text-sm/normal",
        tag: "li",
        children: H.intl.string(H.t["8Vr5Qd"])
      })]
    })]
  }),
  ee = () => {
    let e = i.useRef(null),
      t = i.useRef(0),
      l = (0, f.e7)([M.Z], () => M.Z.getGuild()),
      [a, s] = i.useState("");
    o()(null != l, "ConnectedGuildSettingsEmoji must be rendered within a guild context");
    let c = (0, f.e7)([w.Z], () => w.Z.theme),
      {
        canCreateExpressions: u
      } = (0, P.XJ)(l),
      {
        revision: m,
        emojis: p
      } = (0, f.cj)([G.Z], () => ({
        revision: G.Z.getEmojiRevision(l.id),
        emojis: G.Z.getEmojis(l.id)
      })),
      h = (0, v.Z)(m),
      [x, y] = i.useState(false),
      [_, R] = i.useState(false),
      D = i.useRef(null),
      {
        maxEmojiSlots: A,
        availableEmojiSlots: L,
        staticEmoji: F,
        totalStaticEmoji: z,
        animatedEmoji: Y,
        totalAnimatedEmoji: X
      } = (0, I.t)({
        guild: l
      }),
      J = (0, N.qt)({
        location: "guild_settings",
        autoTrackExposure: true
      }),
      [ee, et] = i.useState(null),
      en = _ || 0 === L || !u;
    i.useEffect(() => {
      x && es()
    }, [x]), i.useEffect(() => {
      K(l.id)
    }, [l.id]), i.useEffect(() => {
      null != h && h < m && K(l.id)
    }, [m, h, l.id]), i.useEffect(() => {
      if (null != p && null == ee) return void et(p)
    }, [p, ee]);
    let er = i.useMemo(() => J.enabled && null != ee ? new Set(d().differenceBy(p, ee, "id").map(e => e.id)) : new Set, [J.enabled, p, ee]),
      ei = i.useCallback(function() {
        let {
          emoji: e
        } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
        if (J.enabled && null != e) return void(0, E.i)({
          guildId: l.id,
          emoji: e,
          analyticsLocation: O.Z.GUILD_SETTINGS_EMOJI_EDIT_BUTTON
        });
        (0, E.i)({
          guildId: l.id,
          analyticsLocation: {
            page: B.ZY5.GUILD_SETTINGS,
            section: B.jXE.GUILD_SETTINGS_EMOJI_ADD_BUTTON
          }
        })
      }, [J.enabled, l]),
      el = async (e, t, n) => {
        let r = await (0, S.G)({
          data: e,
          file: t,
          image: n,
          guildId: l.id,
          uploadId: a,
          hideErrorModal: true,
          analyticsLocation: {
            page: B.ZY5.GUILD_SETTINGS
          }
        });
        if ("object" != typeof r || !("id" in r)) return r;
        U.M({
          emojiId: r.id,
          userImage: {
            data: e,
            file: t,
            image: n
          }
        })
      }, ea = async e => {
        s((0, g.Z)()), Z.default.track(B.rMx.EMOJI_UPLOAD_STARTED, {
          guild_id: l.id,
          upload_id: a
        }), await (0, T._j)(e, el), y(true)
      }, es = () => {
        null !== D.current && ((0, b.Mr3)(D.current), D.current = null)
      }, eo = async e => {
        D.current = await (0, b.ZDy)(async () => {
          let {
            default: t
          } = await n.e("16169").then(n.bind(n, 935333));
          return n => (0, r.jsx)(t, V({
            processFiles: () => ea(e)
          }, n))
        })
      }, ec = i.useCallback(async (e, n, r) => {
        await (0, E.i)({
          userImage: {
            data: e,
            file: n,
            image: r
          },
          guildId: l.id,
          analyticsLocation: {
            page: B.ZY5.GUILD_SETTINGS
          }
        }), t.current += 1
      }, [l.id]), ed = (0, C.l)(l), eu = J.enabled ? e => ei({
        emoji: e
      }) : true;
    return (0, r.jsxs)("div", {
      className: W.emojiSettings,
      children: [0 === L ? null : (0, r.jsx)(j.Z, {
        className: W.emojiUploadContainer,
        onDrop: eo
      }), (0, r.jsxs)(b.Kqy, {
        gap: 20,
        children: [(0, r.jsxs)(b.Kqy, {
          gap: 4,
          children: [(0, r.jsx)(b.Heading, {
            variant: "heading-lg/semibold",
            children: H.intl.string(H.t.sMOuuS)
          }), (0, r.jsx)(b.Text, {
            variant: "text-md/normal",
            children: H.intl.format(H.t.TA1BR0, {
              count: A
            })
          })]
        }), (0, r.jsx)(Q, {
          guild: l,
          staticEmojiCount: z,
          animatedEmojiCount: X
        }), (0, r.jsxs)("div", {
          className: W.uploader,
          children: [ed && (0, r.jsx)(b.Wn, {
            messageType: b.QYI.INFO,
            children: H.intl.format(H.t.uMkfTo, {
              onClick: () => k.Z.open(l.id, B.pNK.ROLE_SUBSCRIPTIONS, true, B.KsC.ROLE_SUBSCRIPTION_EMOJI)
            })
          }), J.enabled ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(b.Button, {
              text: H.intl.string(H.t["DU0dy/"]),
              variant: "primary",
              onClick: () => {
                var t;
                null == (t = e.current) || t.activateUploadDialogue()
              },
              disabled: _
            }), (0, r.jsx)("div", {
              className: W.fileInput,
              children: (0, r.jsx)(T.ZP, {
                ref: e,
                onChange: ec,
                setLoading: R,
                disabled: _
              }, t.current)
            }), (0, r.jsx)(b.Text, {
              variant: "text-xs/normal",
              children: H.intl.string(H.t.EgNCTi)
            })]
          }) : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)($, {}), (0, r.jsx)(b.Button, {
              text: H.intl.string(H.t["DU0dy/"]),
              variant: "primary",
              onClick: () => {
                var t;
                let n = (0, g.Z)();
                s(n), Z.default.track(B.rMx.EMOJI_UPLOAD_STARTED, {
                  guild_id: l.id,
                  upload_id: n
                }), null == (t = e.current) || t.activateUploadDialogue()
              },
              disabled: en,
              loading: _
            }), (0, r.jsx)("div", {
              className: W.fileInput,
              children: (0, r.jsx)(T.ZP, {
                ref: e,
                disabled: en,
                onChange: el,
                setLoading: R,
                multiple: true
              })
            })]
          })]
        }), (0, r.jsx)(q, {
          isLoading: null == p,
          staticEmoji: F,
          animatedEmoji: Y,
          guild: l,
          theme: c,
          onEdit: eu,
          newlyAddedEmojiIds: er
        })]
      })]
    })
  }