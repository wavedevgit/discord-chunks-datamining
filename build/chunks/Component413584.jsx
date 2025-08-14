/** Chunk was on 40725 **/
/** chunk id: 413584, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => B
}), require("./388685.js"), require("./953529.js"), require("./781311.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk348327 = require("./348327.js"),
  o = require.n(Chunk348327),
  Chunk562075 = require("./562075.js"),
  Chunk539202 = require("./539202.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk514698 = require("./514698.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk4912 = require("./4912.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk700785 = require("./700785.js"),
  Chunk434404 = require("./434404.js"),
  Chunk92160 = require("./92160.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk119802 = require("./119802.js");

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

function M(e, t) {
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
  U = e => {
    var t;
    let l, {
        guildId: s,
        welcomeChannel: o,
        onEdit: m,
        onChannelReorder: f,
        isDropHovered: b,
        index: _
      } = e,
      [O, y] = i.useState(false),
      C = i.useRef(null),
      N = (0, u.e7)([E.Z], () => E.Z.getChannel(o.channel_id)),
      T = (0, u.e7)([v.ZP], () => null != o.emoji_id ? v.ZP.getUsableCustomEmojiById(o.emoji_id) : null),
      w = null != N && P.Uu(Z.Plq.VIEW_CHANNEL, N),
      R = null != (t = (0, j.KS)(N)) ? t : g.VL1,
      U = (0, x.ZP)(N, false),
      [, B] = (0, c.c)({
        type: G,
        item: {
          channel: o,
          index: _
        },
        end: (e, t) => {
          null == e || t.didDrop() || f(e.channel, null, true)
        }
      }),
      [, F] = (0, d.L)({
        accept: G,
        hover: e => {
          f(e.channel, _, false)
        },
        drop: e => {
          f(e.channel, _, true)
        }
      });
    return i.useLayoutEffect(() => (B(F(C)), () => {
      B(null), F(null)
    }), [B, F]), l = w ? null != T || null != o.emoji_name ? (0, r.jsx)(h.Z, {
      emojiId: null == T ? true : T.id,
      emojiName: null != T ? T.name : o.emoji_name,
      animated: !!(null == T ? true : T.animated)
    }) : (0, r.jsx)(R, {
      size: "md",
      color: "currentColor",
      className: k.channelIcon
    }) : (0, r.jsx)(S.Z, {
      width: 24,
      height: 24,
      className: k.warningIcon
    }), (0, r.jsxs)("div", {
      className: a()(k.welcomeChannel, {
        [k.dragging]: b
      }),
      ref: C,
      "data-dnd-name": o.description,
      onContextMenu: e => {
        (0, p.jW)(e, async () => {
          let {
            default: e
          } = await n.e("68535").then(n.bind(n, 602320));
          return t => (0, r.jsx)(e, M(L({}, t), {
            guildId: s,
            welcomeChannel: o,
            onChannelReorder: f,
            setShowConfirmModal: y,
            onEdit: m,
            index: _
          }))
        })
      },
      children: [l, (0, r.jsxs)("div", {
        className: k.channelDescriptionWrapper,
        children: [(0, r.jsx)(g.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: o.description
        }), (0, r.jsxs)(g.Text, {
          className: w ? true : k.channelWarning,
          variant: "text-xs/normal",
          color: "header-secondary",
          children: [(0, r.jsx)(R, {
            className: k.channelTitleIcon,
            size: "xxs",
            color: "currentColor"
          }), (0, r.jsx)("span", {
            children: w ? U : A.intl.string(A.t.zFuCsL)
          })]
        })]
      }), (0, r.jsx)(g.zxk, {
        variant: "secondary",
        size: "sm",
        text: A.intl.string(A.t.bt75u7),
        disabled: true,
        onClick: () => (0, g.ZDy)(async () => {
          let {
            default: e
          } = await n.e("39143").then(n.bind(n, 737868));
          return t => (0, r.jsx)(e, M(L({}, t), {
            welcomeChannel: o,
            guildId: s,
            onSave: m
          }))
        }, {
          onCloseRequest: () => D.Vq
        })
      }), O && (0, r.jsx)(I.Z, {
        onConfirm: () => m(),
        onCancel: () => y(false),
        channelId: o.channel_id
      })]
    })
  },
  B = e => {
    let {
      guild: t,
      showCreateModal: l
    } = e, {
      welcomeSettings: a,
      originalWelcomeSettings: s
    } = (0, u.e7)([N.Z], () => N.Z.getSettingsProps()), c = (0, u.e7)([b.Z], () => b.Z.useReducedMotion), [d, p] = i.useState(null), [h, x] = i.useState(false), [j, v] = i.useState(false), {
      description: I,
      channels: E,
      enabled: P
    } = a, G = e => {
      null != t && (o()(e, s.channels) || ((0, C.Es)(t.id, {
        channels: e
      }), x(true)))
    }, B = e => {
      null != t && e !== s.enabled && ((0, C.Es)(t.id, {
        enabled: e
      }), v(!c), x(true))
    }, F = e => {
      if (null == e) return;
      let t = [...null != E ? E : [], e];
      (0, C.VP)({
        channels: t
      }), G(t)
    }, H = (e, t, n) => {
      if (null == E) return;
      let r = E.indexOf(e),
        i = [...E];
      null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), (0, C.VP)({
        channels: i
      })), n ? (G(i), p(null)) : p(t)
    }, z = i.useRef(false);
    (0, f.ZP)(() => (null != t && l && (0, g.ZDy)(async () => {
      let {
        default: e
      } = await n.e("39143").then(n.bind(n, 737868));
      return n => (0, r.jsx)(e, M(L({}, n), {
        guildId: t.id,
        onSave: F
      }))
    }, {
      onCloseRequest: () => D.Vq
    }), () => {
      z.current = true
    })), i.useEffect(() => () => {
      if (z.current && h) {
        let e = [],
          n = [],
          r = false;
        null == E || E.forEach(t => {
          e.push(t.description), n.push(t.channel_id), null != t.emoji_id && (r = true)
        }), T.default.track(Z.rMx.GUILD_WELCOME_SCREEN_SETTINGS_UPDATED, {
          guild_id: null == t ? true : t.id,
          options: e,
          options_channel_ids: n,
          guild_description: I,
          has_custom_emojis: r,
          is_enabled: P
        })
      }
    }, [h, E, I, P, t, z]), i.useEffect(() => () => (0, C.sm)(), []);
    let W = i.useCallback(() => {
      null != t && w.Z.open(t.id, Z.pNK.ONBOARDING)
    }, [t]);
    return null == t ? null : (0, r.jsxs)(g.hjN, {
      title: A.intl.string(A.t["2rkmDg"]),
      tag: g.RB0.H1,
      children: [(0, r.jsx)("div", {
        className: k.notice,
        children: (0, r.jsxs)(g.Text, {
          variant: "text-md/normal",
          children: [(0, r.jsx)(S.Z, {
            className: k.noticeIcon
          }), A.intl.format(A.t.oj2vi4, {
            onboardingLink: e => (0, r.jsx)(y.Z, {
              onClick: W,
              children: e
            })
          })]
        })
      }), (0, r.jsx)(g.Text, {
        variant: "text-sm/normal",
        children: A.intl.string(A.t["w2d74+"])
      }), (0, r.jsx)(R.Z, {
        enabled: P,
        onPreview: (null == E ? true : E.length) === 0 ? true : () => {
          null != t && (0, g.ZDy)(async () => {
            let {
              default: e
            } = await n.e("90542").then(n.bind(n, 184782));
            return n => (0, r.jsx)(e, M(L({}, n), {
              guildId: t.id,
              isPreview: true
            }))
          })
        },
        onToggle: P || (null == E ? true : E.length) !== 0 ? () => {
          B(!P)
        } : true,
        animateStatus: j,
        firstLine: P ? A.intl.string(A.t.JbB7Qk) : A.intl.string(A.t["/bd0Qk"]),
        secondLine: P ? A.intl.string(A.t["TA1g7+"]) : A.intl.string(A.t.nc6r1N)
      }), (0, r.jsxs)("div", {
        className: k.previewContainer,
        children: [(0, r.jsxs)("div", {
          className: k.welcomeHeader,
          children: [(0, r.jsx)(_.Z, {
            size: _.Z.Sizes.LARGER,
            className: k.icon,
            guild: t,
            animate: true,
            tabIndex: false
          }), (0, r.jsx)(g.X6q, {
            className: k.welcomeTitle,
            variant: "heading-xl/semibold",
            children: A.intl.format(A.t["0aydCA"], {
              guildName: t.name,
              guildNameHook: (e, n) => (0, r.jsxs)("span", {
                children: [(0, r.jsx)(O.Z, {
                  guild: t,
                  className: k.headerGuildBadge,
                  flowerStarClassName: k.flowerStar
                }), (0, r.jsx)("strong", {
                  children: e
                })]
              }, n)
            })
          }), (0, r.jsx)("div", {
            className: k.descriptionWrapper,
            children: (0, r.jsx)(m.iS, {
              className: k.descriptionInput,
              placeholder: A.intl.string(A.t.qzZHaW),
              onChange: e => {
                (0, C.VP)({
                  description: e
                })
              },
              onBlur: () => {
                null != t && I !== s.description && ((0, C.Es)(t.id, {
                  description: null == I ? true : I.trim()
                }), x(true))
              },
              onKeyDown: e => {
                e.keyCode === Z.yXg.ENTER && e.preventDefault()
              },
              value: I,
              maxLength: 140,
              disabled: true
            })
          })]
        }), (0, r.jsx)(g.$i$, {
          className: k.divider
        }), (0, r.jsxs)("div", {
          className: k.welcomeChannels,
          children: [(0, r.jsx)(g.vwX, {
            children: A.intl.string(A.t.euJXzc)
          }), (0, r.jsx)(g.Text, {
            variant: "text-sm/normal",
            className: k.addChannelSubtext,
            children: A.intl.string(A.t.VOnnn5)
          }), null == E ? true : E.map((e, n) => (0, r.jsx)(U, {
            guildId: t.id,
            welcomeChannel: e,
            onEdit: e => {
              let t = [...null != E ? E : []];
              null == e ? t.splice(n, 1) : t[n] = e, (0, C.VP)({
                channels: t
              }), G(t), 0 === t.length && P && ((0, C.VP)({
                enabled: false
              }), B(false))
            },
            onChannelReorder: H,
            isDropHovered: n === d,
            index: n
          }, n)), (null == E || E.length < 5) && (0, r.jsx)("div", {
            "data-button-hoisted-classname-wrapper": true,
            className: k.addChannelButton,
            children: (0, r.jsx)(g.zxk, {
              variant: "secondary",
              text: A.intl.string(A.t.U1BDe3),
              onClick: () => (0, g.ZDy)(async () => {
                let {
                  default: e
                } = await n.e("39143").then(n.bind(n, 737868));
                return n => (0, r.jsx)(e, M(L({}, n), {
                  guildId: t.id,
                  onSave: F
                }))
              }, {
                onCloseRequest: () => D.Vq
              }),
              disabled: true
            })
          })]
        })]
      })]
    })
  }