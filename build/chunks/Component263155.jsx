/** Chunk was on 29679 **/
/** chunk id: 263155, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => M
}), require("./388685.js"), require("./953529.js"), require("./781311.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk815096 = require("./815096.js");

function A(e) {
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

function L(e, t) {
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
let k = "WELCOME_CHANNEL",
  G = e => {
    var t;
    let l, {
        guildId: a,
        welcomeChannel: o,
        onEdit: f,
        onChannelReorder: h,
        isDropHovered: _,
        index: v
      } = e,
      C = i.useRef(null),
      O = (0, u.e7)([N.Z], () => N.Z.getChannel(o.channel_id)),
      y = (0, u.e7)([j.ZP], () => null != o.emoji_id ? j.ZP.getUsableCustomEmojiById(o.emoji_id) : null),
      I = null != O && S.Uu(w.Plq.VIEW_CHANNEL, O),
      T = null != (t = (0, b.KS)(O)) ? t : m.VL1,
      P = (0, x.ZP)(O, false),
      G = () => {
        (0, m.ZDy)(async () => {
          let {
            default: e
          } = await n.e("73196").then(n.bind(n, 514698));
          return t => (0, r.jsx)(e, L(A({}, t), {
            onConfirm: () => {
              f(), t.onClose()
            },
            channelId: o.channel_id
          }))
        }, {
          onCloseRequest: () => R.Vq
        })
      },
      [, M] = (0, c.c)({
        type: k,
        item: {
          channel: o,
          index: v
        },
        end: (e, t) => {
          null == e || t.didDrop() || h(e.channel, null, true)
        }
      }),
      [, U] = (0, d.L)({
        accept: k,
        hover: e => {
          h(e.channel, v, false)
        },
        drop: e => {
          h(e.channel, v, true)
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
      className: D.channelIcon
    }) : (0, r.jsx)(E.Z, {
      width: 24,
      height: 24,
      className: D.warningIcon
    }), (0, r.jsxs)("div", {
      className: s()(D.welcomeChannel, {
        [D.dragging]: _
      }),
      ref: C,
      "data-dnd-name": o.description,
      onContextMenu: e => {
        (0, g.jW)(e, async () => {
          let {
            default: e
          } = await n.e("68535").then(n.bind(n, 602320));
          return t => (0, r.jsx)(e, L(A({}, t), {
            guildId: a,
            welcomeChannel: o,
            onChannelReorder: h,
            onShowDeleteModal: G,
            index: v
          }))
        })
      },
      children: [l, (0, r.jsxs)("div", {
        className: D.channelDescriptionWrapper,
        children: [(0, r.jsx)(m.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: o.description
        }), (0, r.jsxs)(m.Text, {
          className: I ? true : D.channelWarning,
          variant: "text-xs/normal",
          color: "header-secondary",
          children: [(0, r.jsx)(T, {
            className: D.channelTitleIcon,
            size: "xxs",
            color: "currentColor"
          }), (0, r.jsx)("span", {
            children: I ? P : Z.intl.string(Z.t.zFuCsL)
          })]
        })]
      }), (0, r.jsx)(m.hU, {
        variant: "icon-only",
        icon: m.XHJ,
        "aria-label": Z.intl.string(Z.t.JYBc3N),
        onClick: G
      })]
    })
  },
  M = e => {
    let {
      guild: t
    } = e, {
      welcomeSettings: l,
      originalWelcomeSettings: s
    } = (0, u.e7)([y.Z], () => y.Z.getSettingsProps()), a = (0, u.e7)([h.Z], () => h.Z.useReducedMotion), [c, d] = i.useState(null), [g, p] = i.useState(false), [x, b] = i.useState(false), {
      description: j,
      channels: N,
      enabled: S
    } = l, R = e => {
      null != t && (o()(e, s.channels) || ((0, O.Es)(t.id, {
        channels: e
      }), p(true)))
    }, k = e => {
      null != t && e !== s.enabled && ((0, O.Es)(t.id, {
        enabled: e
      }), b(!a), p(true))
    }, M = (e, t, n) => {
      if (null == N) return;
      let r = N.indexOf(e),
        i = [...N];
      null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), (0, O.VP)({
        channels: i
      })), n ? (R(i), d(null)) : d(t)
    }, U = i.useRef(false);
    (0, f.ZP)(() => () => {
      U.current = true
    }), i.useEffect(() => () => {
      if (U.current && g) {
        let e = [],
          n = [],
          r = false;
        null == N || N.forEach(t => {
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
    }, [g, N, j, S, t]), i.useEffect(() => () => (0, O.sm)(), []);
    let B = i.useCallback(() => {
      null != t && T.Z.open(t.id, w.pNK.ONBOARDING)
    }, [t]);
    return null == t ? null : (0, r.jsxs)(m.hjN, {
      title: Z.intl.string(Z.t["2rkmDg"]),
      tag: m.RB0.H1,
      children: [(0, r.jsx)("div", {
        className: D.notice,
        children: (0, r.jsxs)(m.Text, {
          variant: "text-md/normal",
          children: [(0, r.jsx)(E.Z, {
            className: D.noticeIcon
          }), Z.intl.format(Z.t.oj2vi4, {
            onboardingLink: e => (0, r.jsx)(C.Z, {
              onClick: B,
              children: e
            })
          })]
        })
      }), (0, r.jsx)(m.Text, {
        variant: "text-sm/normal",
        children: Z.intl.string(Z.t["w2d74+"])
      }), (0, r.jsx)(P.Z, {
        enabled: S,
        onPreview: (null == N ? true : N.length) === 0 ? true : () => {
          null != t && (0, m.ZDy)(async () => {
            let {
              default: e
            } = await n.e("90542").then(n.bind(n, 184782));
            return n => (0, r.jsx)(e, L(A({}, n), {
              guildId: t.id,
              isPreview: true
            }))
          })
        },
        onToggle: S || (null == N ? true : N.length) !== 0 ? () => {
          k(!S)
        } : true,
        animateStatus: x,
        firstLine: S ? Z.intl.string(Z.t.JbB7Qk) : Z.intl.string(Z.t["/bd0Qk"]),
        secondLine: S ? Z.intl.string(Z.t["TA1g7+"]) : Z.intl.string(Z.t.nc6r1N)
      }), (0, r.jsxs)("div", {
        className: D.previewContainer,
        children: [(0, r.jsxs)("div", {
          className: D.welcomeHeader,
          children: [(0, r.jsx)(_.Z, {
            size: _.Z.Sizes.LARGER,
            className: D.icon,
            guild: t,
            animate: true,
            tabIndex: false
          }), (0, r.jsx)(m.X6q, {
            className: D.welcomeTitle,
            variant: "heading-xl/semibold",
            children: Z.intl.format(Z.t["0aydCA"], {
              guildName: t.name,
              guildNameHook: (e, n) => (0, r.jsxs)("span", {
                children: [(0, r.jsx)(v.Z, {
                  guild: t,
                  className: D.headerGuildBadge,
                  flowerStarClassName: D.flowerStar
                }), (0, r.jsx)("strong", {
                  children: e
                })]
              }, n)
            })
          }), (0, r.jsx)("div", {
            className: D.descriptionWrapper,
            children: (0, r.jsx)(m.Kx8, {
              placeholder: Z.intl.string(Z.t.qzZHaW),
              onChange: e => {
                (0, O.VP)({
                  description: e
                })
              },
              onBlur: () => {
                null != t && j !== s.description && ((0, O.Es)(t.id, {
                  description: null == j ? true : j.trim()
                }), p(true))
              },
              onKeyDown: e => {
                e.keyCode === w.yXg.ENTER && e.preventDefault()
              },
              value: j,
              maxLength: 140,
              disabled: true
            })
          })]
        }), (0, r.jsx)(m.izJ, {
          className: D.divider
        }), (0, r.jsxs)("div", {
          className: D.welcomeChannels,
          children: [(0, r.jsx)(m.vwX, {
            children: Z.intl.string(Z.t.euJXzc)
          }), (0, r.jsx)(m.Text, {
            variant: "text-sm/normal",
            className: D.addChannelSubtext,
            children: Z.intl.string(Z.t.VOnnn5)
          }), null == N ? true : N.map((e, n) => (0, r.jsx)(G, {
            guildId: t.id,
            welcomeChannel: e,
            onEdit: e => {
              let t = [...null != N ? N : []];
              null == e ? t.splice(n, 1) : t[n] = e, (0, O.VP)({
                channels: t
              }), R(t), 0 === t.length && S && ((0, O.VP)({
                enabled: false
              }), k(false))
            },
            onChannelReorder: M,
            isDropHovered: n === c,
            index: n
          }, n))]
        })]
      })]
    })
  }