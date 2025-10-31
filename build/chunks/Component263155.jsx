/** Chunk was on 64982 **/
/** chunk id: 263155, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => U
}), require("./388685.js"), require("./953529.js"), require("./781311.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk348327 = require("./348327.js"),
  o = require.n(Chunk348327),
  Chunk100568 = require("./100568.js"),
  Chunk417865 = require("./417865.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk493773 = require("./493773.js"),
  Chunk607070 = require("./607070.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk339085 = require("./339085.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk372769 = require("./372769.jsx"),
  Chunk690221 = require("./690221.jsx"),
  Chunk524329 = require("./524329.js"),
  Chunk575258 = require("./575258.js"),
  Chunk592125 = require("./592125.js"),
  Chunk4912 = require("./4912.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk700785 = require("./700785.js"),
  Chunk434404 = require("./434404.js"),
  Chunk92160 = require("./92160.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk295907 = require("./295907.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk859267 = require("./859267.js");

function L(e) {
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

function k(e, t) {
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
let G = "WELCOME_CHANNEL",
  M = e => {
    var t;
    let l, {
        guildId: s,
        welcomeChannel: o,
        onEdit: f,
        onChannelReorder: h,
        isDropHovered: v,
        index: _
      } = e,
      C = i.useRef(null),
      O = (0, u.e7)([E.Z], () => E.Z.getChannel(o.channel_id)),
      y = (0, u.e7)([j.ZP], () => null != o.emoji_id ? j.ZP.getUsableCustomEmojiById(o.emoji_id) : null),
      I = null != O && S.Uu(w.Plq.VIEW_CHANNEL, O),
      T = null != (t = (0, x.KS)(O)) ? t : g.VL1,
      P = (0, b.ZP)(O, false),
      R = () => {
        (0, g.ZDy)(async () => {
          let {
            default: e
          } = await n.e("73196").then(n.bind(n, 514698));
          return t => (0, r.jsx)(e, k(L({}, t), {
            onConfirm: () => {
              f(), t.onClose()
            },
            channelId: o.channel_id
          }))
        }, {
          onCloseRequest: () => Z.Vq
        })
      },
      [, M] = (0, c.c)({
        type: G,
        item: {
          channel: o,
          index: _
        },
        end: (e, t) => {
          null == e || t.didDrop() || h(e.channel, null, true)
        }
      }),
      [, U] = (0, d.L)({
        accept: G,
        hover: e => {
          h(e.channel, _, false)
        },
        drop: e => {
          h(e.channel, _, true)
        }
      });
    return i.useLayoutEffect(() => (M(U(C)), () => {
      M(null), U(null)
    }), [M, U]), l = I ? null != y || null != o.emoji_name ? (0, r.jsx)(p.Z, {
      emojiId: null == y ? true : y.id,
      emojiName: null != y ? y.name : o.emoji_name,
      animated: !!(null == y ? true : y.animated)
    }) : (0, r.jsx)(T, {
      size: "md",
      color: "currentColor",
      className: A.channelIcon
    }) : (0, r.jsx)(N.Z, {
      width: 24,
      height: 24,
      className: A.warningIcon
    }), (0, r.jsxs)("div", {
      className: a()(A.welcomeChannel, {
        [A.dragging]: v
      }),
      ref: C,
      "data-dnd-name": o.description,
      onContextMenu: e => {
        (0, m.jW)(e, async () => {
          let {
            default: e
          } = await n.e("68535").then(n.bind(n, 602320));
          return t => (0, r.jsx)(e, k(L({}, t), {
            guildId: s,
            welcomeChannel: o,
            onChannelReorder: h,
            onShowDeleteModal: R,
            index: _
          }))
        })
      },
      children: [l, (0, r.jsxs)("div", {
        className: A.channelDescriptionWrapper,
        children: [(0, r.jsx)(g.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: o.description
        }), (0, r.jsxs)(g.Text, {
          className: I ? true : A.channelWarning,
          variant: "text-xs/normal",
          color: "header-secondary",
          children: [(0, r.jsx)(T, {
            className: A.channelTitleIcon,
            size: "xxs",
            color: "currentColor"
          }), (0, r.jsx)("span", {
            children: I ? P : D.intl.string(D.t.zFuCsF)
          })]
        })]
      }), (0, r.jsx)(g.hU, {
        variant: "icon-only",
        icon: g.XHJ,
        "aria-label": D.intl.string(D.t.JYBc3K),
        onClick: R
      })]
    })
  },
  U = e => {
    let {
      guild: t
    } = e, {
      welcomeSettings: l,
      originalWelcomeSettings: a
    } = (0, u.e7)([y.Z], () => y.Z.getSettingsProps()), s = (0, u.e7)([h.Z], () => h.Z.useReducedMotion), [c, d] = i.useState(null), [m, p] = i.useState(false), [b, x] = i.useState(false), {
      description: j,
      channels: E,
      enabled: S
    } = l, Z = e => {
      null != t && (o()(e, a.channels) || ((0, O.Es)(t.id, {
        channels: e
      }), p(true)))
    }, G = e => {
      null != t && e !== a.enabled && ((0, O.Es)(t.id, {
        enabled: e
      }), x(!s), p(true))
    }, U = (e, t, n) => {
      if (null == E) return;
      let r = E.indexOf(e),
        i = [...E];
      null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), (0, O.VP)({
        channels: i
      })), n ? (Z(i), d(null)) : d(t)
    }, B = i.useRef(false);
    (0, f.ZP)(() => () => {
      B.current = true
    }), i.useEffect(() => () => {
      if (B.current && m) {
        let e = [],
          n = [],
          r = false;
        null == E || E.forEach(t => {
          e.push(t.description), n.push(t.channel_id), null != t.emoji_id && (r = true)
        }), I.default.track(w.rMx.GUILD_WELCOME_SCREEN_SETTINGS_UPDATED, {
          guild_id: null == t ? true : t.id,
          options: e,
          options_channel_ids: n,
          guild_description: j,
          has_custom_emojis: r,
          is_enabled: S
        })
      }
    }, [m, E, j, S, t]), i.useEffect(() => () => (0, O.sm)(), []);
    let F = i.useCallback(() => {
      null != t && T.Z.open(t.id, w.pNK.ONBOARDING)
    }, [t]);
    return null == t ? null : (0, r.jsxs)("div", {
      children: [(0, r.jsx)(g.Heading, {
        variant: "heading-lg/semibold",
        children: D.intl.string(D.t["2rkmDr"])
      }), (0, r.jsx)("div", {
        className: A.notice,
        children: (0, r.jsxs)(g.Text, {
          variant: "text-md/normal",
          children: [(0, r.jsx)(N.Z, {
            className: A.noticeIcon
          }), D.intl.format(D.t["oj2vi+"], {
            onboardingLink: e => (0, r.jsx)(C.Z, {
              onClick: F,
              children: e
            })
          })]
        })
      }), (0, r.jsx)(g.Text, {
        variant: "text-sm/normal",
        children: D.intl.string(D.t.w2d74x)
      }), (0, r.jsx)(P.Z, {
        enabled: S,
        onPreview: (null == E ? true : E.length) === 0 ? true : () => {
          null != t && (0, g.ZDy)(async () => {
            let {
              default: e
            } = await n.e("90542").then(n.bind(n, 184782));
            return n => (0, r.jsx)(e, k(L({}, n), {
              guildId: t.id,
              isPreview: true
            }))
          })
        },
        onToggle: S || (null == E ? true : E.length) !== 0 ? () => {
          G(!S)
        } : true,
        animateStatus: b,
        firstLine: S ? D.intl.string(D.t.JbB7Ql) : D.intl.string(D.t["/bd0Qv"]),
        secondLine: S ? D.intl.string(D.t.TA1g7z) : D.intl.string(D.t.nc6r1B)
      }), (0, r.jsxs)("div", {
        className: A.previewContainer,
        children: [(0, r.jsxs)("div", {
          className: A.welcomeHeader,
          children: [(0, r.jsx)(v.Z, {
            size: v.Z.Sizes.LARGER,
            className: A.icon,
            guild: t,
            animate: true,
            tabIndex: false
          }), (0, r.jsx)(g.Heading, {
            className: A.welcomeTitle,
            variant: "heading-xl/semibold",
            children: D.intl.format(D.t["0aydCN"], {
              guildName: t.name,
              guildNameHook: (e, n) => (0, r.jsxs)("span", {
                children: [(0, r.jsx)(_.Z, {
                  guild: t,
                  className: A.headerGuildBadge,
                  flowerStarClassName: A.flowerStar
                }), (0, r.jsx)("strong", {
                  children: e
                })]
              }, n)
            })
          }), (0, r.jsx)("div", {
            className: A.descriptionWrapper,
            children: (0, r.jsx)(g.Kx8, {
              placeholder: D.intl.string(D.t.qzZHaX),
              onChange: e => {
                (0, O.VP)({
                  description: e
                })
              },
              onBlur: () => {
                null != t && j !== a.description && ((0, O.Es)(t.id, {
                  description: null == j ? true : j.trim()
                }), p(true))
              },
              onKeyDown: e => {
                e.key === R.vn.ENTER && e.preventDefault()
              },
              value: j,
              maxLength: 140,
              disabled: true
            })
          })]
        }), (0, r.jsx)(g.izJ, {
          className: A.divider
        }), (0, r.jsx)("div", {
          className: A.welcomeChannels,
          children: (0, r.jsx)(g.gNt, {
            label: D.intl.string(D.t.euJXzT),
            description: D.intl.string(D.t.VOnnnz),
            children: null == E ? true : E.map((e, n) => (0, r.jsx)(M, {
              guildId: t.id,
              welcomeChannel: e,
              onEdit: e => {
                let t = [...null != E ? E : []];
                null == e ? t.splice(n, 1) : t[n] = e, (0, O.VP)({
                  channels: t
                }), Z(t), 0 === t.length && S && ((0, O.VP)({
                  enabled: false
                }), G(false))
              },
              onChannelReorder: U,
              isDropHovered: n === c,
              index: n
            }, n))
          })
        })]
      })]
    })
  }