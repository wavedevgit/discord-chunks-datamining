/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => M
}), n(47120), n(266796), n(566702), n(653041);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(348327),
  o = n.n(l),
  c = n(999153),
  A = n(584922),
  d = n(442837),
  u = n(481060),
  g = n(239091),
  f = n(596454),
  m = n(493773),
  p = n(607070),
  h = n(933557),
  C = n(471445),
  b = n(339085),
  v = n(565138),
  x = n(372769),
  N = n(690221),
  j = n(524329),
  E = n(575258),
  I = n(514698),
  O = n(592125),
  y = n(4912),
  w = n(626135),
  P = n(700785),
  B = n(434404),
  D = n(92160),
  T = n(981631),
  S = n(231338),
  L = n(388032),
  R = n(216793);

function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function Z(e, t) {
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
let W = "WELCOME_CHANNEL",
  k = e => {
    var t;
    let s, {
        guildId: l,
        welcomeChannel: o,
        onEdit: m,
        onChannelReorder: p,
        isDropHovered: v,
        index: x
      } = e,
      [N, j] = i.useState(!1),
      E = i.useRef(null),
      w = (0, d.e7)([O.Z], () => O.Z.getChannel(o.channel_id)),
      B = (0, d.e7)([b.ZP], () => null != o.emoji_id ? b.ZP.getUsableCustomEmojiById(o.emoji_id) : null),
      D = null != w && P.Uu(T.Plq.VIEW_CHANNEL, w),
      k = null !== (t = (0, C.KS)(w)) && void 0 !== t ? t : u.VL1,
      M = (0, h.ZP)(w, !1),
      [, _] = (0, c.c)({
        type: W,
        item: {
          channel: o,
          index: x
        },
        end: (e, t) => {
          null == e || t.didDrop() || p(e.channel, null, !0)
        }
      }),
      [, G] = (0, A.L)({
        accept: W,
        hover: e => {
          p(e.channel, x, !1)
        },
        drop: e => {
          p(e.channel, x, !0)
        }
      });
    return i.useLayoutEffect(() => (_(G(E)), () => {
      _(null), G(null)
    }), [_, G]), s = D ? null != B || null != o.emoji_name ? (0, r.jsx)(f.Z, {
      emojiId: null == B ? void 0 : B.id,
      emojiName: null != B ? B.name : o.emoji_name,
      animated: !!(null == B ? void 0 : B.animated)
    }) : (0, r.jsx)(k, {
      size: "md",
      color: "currentColor",
      className: R.channelIcon
    }) : (0, r.jsx)(y.Z, {
      width: 24,
      height: 24,
      className: R.warningIcon
    }), (0, r.jsxs)("div", {
      className: a()(R.welcomeChannel, {
        [R.dragging]: v
      }),
      ref: E,
      "data-dnd-name": o.description,
      onContextMenu: e => {
        (0, g.jW)(e, async () => {
          let {
            default: e
          } = await n.e("68535").then(n.bind(n, 602320));
          return t => (0, r.jsx)(e, Z(Q({}, t), {
            guildId: l,
            welcomeChannel: o,
            onChannelReorder: p,
            setShowConfirmModal: j,
            onEdit: m,
            index: x
          }))
        })
      },
      children: [s, (0, r.jsxs)("div", {
        className: R.channelDescriptionWrapper,
        children: [(0, r.jsx)(u.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: o.description
        }), (0, r.jsxs)(u.Text, {
          className: D ? void 0 : R.channelWarning,
          variant: "text-xs/normal",
          color: "header-secondary",
          children: [(0, r.jsx)(k, {
            className: R.channelTitleIcon,
            size: "xxs",
            color: "currentColor"
          }), (0, r.jsx)("span", {
            children: D ? M : L.NW.string(L.t.zFuCsL)
          })]
        })]
      }), (0, r.jsx)(u.zxk, {
        color: u.zxk.Colors.PRIMARY,
        size: u.zxk.Sizes.SMALL,
        disabled: !0,
        onClick: () => (0, u.ZDy)(async () => {
          let {
            default: e
          } = await n.e("39143").then(n.bind(n, 737868));
          return t => (0, r.jsx)(e, Z(Q({}, t), {
            welcomeChannel: o,
            guildId: l,
            onSave: m
          }))
        }, {
          onCloseRequest: () => S.Vq
        }),
        children: L.NW.string(L.t.bt75u7)
      }), N && (0, r.jsx)(I.Z, {
        onConfirm: () => m(),
        onCancel: () => j(!1),
        channelId: o.channel_id
      })]
    })
  },
  M = e => {
    let {
      guild: t,
      showCreateModal: s
    } = e, {
      welcomeSettings: a,
      originalWelcomeSettings: l
    } = (0, d.e7)([E.Z], () => E.Z.getSettingsProps()), c = (0, d.e7)([p.Z], () => p.Z.useReducedMotion), [A, g] = i.useState(null), [f, h] = i.useState(!1), [C, b] = i.useState(!1), {
      description: I,
      channels: O,
      enabled: P
    } = a, W = () => {
      null != t && I !== l.description && ((0, j.Es)(t.id, {
        description: null == I ? void 0 : I.trim()
      }), h(!0))
    }, M = e => {
      null != t && (o()(e, l.channels) || ((0, j.Es)(t.id, {
        channels: e
      }), h(!0)))
    }, _ = e => {
      null != t && e !== l.enabled && ((0, j.Es)(t.id, {
        enabled: e
      }), b(!c), h(!0))
    }, G = e => {
      if (null == e) return;
      let t = [...null != O ? O : [], e];
      (0, j.VP)({
        channels: t
      }), M(t)
    }, F = e => t => {
      let n = [...null != O ? O : []];
      null == t ? n.splice(e, 1) : n[e] = t, (0, j.VP)({
        channels: n
      }), M(n), 0 === n.length && P && ((0, j.VP)({
        enabled: !1
      }), _(!1))
    }, U = (e, t, n) => {
      if (null == O) return;
      let r = O.indexOf(e),
        i = [...O];
      null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), (0, j.VP)({
        channels: i
      })), n ? (M(i), g(null)) : g(t)
    }, H = i.useRef(!1);
    (0, m.ZP)(() => (null != t && s && (0, u.ZDy)(async () => {
      let {
        default: e
      } = await n.e("39143").then(n.bind(n, 737868));
      return n => (0, r.jsx)(e, Z(Q({}, n), {
        guildId: t.id,
        onSave: G
      }))
    }, {
      onCloseRequest: () => S.Vq
    }), () => {
      H.current = !0
    })), i.useEffect(() => () => {
      if (H.current && f) {
        let e = [],
          n = [],
          r = !1;
        null == O || O.forEach(t => {
          e.push(t.description), n.push(t.channel_id), null != t.emoji_id && (r = !0)
        }), w.default.track(T.rMx.GUILD_WELCOME_SCREEN_SETTINGS_UPDATED, {
          guild_id: null == t ? void 0 : t.id,
          options: e,
          options_channel_ids: n,
          guild_description: I,
          has_custom_emojis: r,
          is_enabled: P
        })
      }
    }, [f, O, I, P, t, H]), i.useEffect(() => () => (0, j.sm)(), []);
    let z = i.useCallback(() => {
      null != t && B.Z.open(t.id, T.pNK.ONBOARDING)
    }, [t]);
    return null == t ? null : (0, r.jsxs)(u.hjN, {
      title: L.NW.string(L.t["2rkmDg"]),
      tag: u.RB0.H1,
      children: [(0, r.jsx)("div", {
        className: R.notice,
        children: (0, r.jsxs)(u.Text, {
          variant: "text-md/normal",
          children: [(0, r.jsx)(y.Z, {
            className: R.noticeIcon
          }), L.NW.format(L.t.oj2vi4, {
            onboardingLink: e => (0, r.jsx)(N.Z, {
              onClick: z,
              children: e
            })
          })]
        })
      }), (0, r.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: L.NW.string(L.t["w2d74+"])
      }), (0, r.jsx)(D.Z, {
        enabled: P,
        onPreview: (null == O ? void 0 : O.length) === 0 ? void 0 : () => {
          null != t && (0, u.ZDy)(async () => {
            let {
              default: e
            } = await n.e("90542").then(n.bind(n, 184782));
            return n => (0, r.jsx)(e, Z(Q({}, n), {
              guildId: t.id,
              isPreview: !0
            }))
          })
        },
        onToggle: P || (null == O ? void 0 : O.length) !== 0 ? () => {
          _(!P)
        } : void 0,
        animateStatus: C,
        firstLine: P ? L.NW.string(L.t.JbB7Qk) : L.NW.string(L.t["/bd0Qk"]),
        secondLine: P ? L.NW.string(L.t["TA1g7+"]) : L.NW.string(L.t.nc6r1N)
      }), (0, r.jsxs)("div", {
        className: R.previewContainer,
        children: [(0, r.jsxs)("div", {
          className: R.welcomeHeader,
          children: [(0, r.jsx)(v.Z, {
            size: v.Z.Sizes.LARGER,
            className: R.icon,
            guild: t,
            animate: !0,
            tabIndex: -1
          }), (0, r.jsx)(u.X6q, {
            className: R.welcomeTitle,
            variant: "heading-xl/semibold",
            children: L.NW.format(L.t["0aydCA"], {
              guildName: t.name,
              guildNameHook: (e, n) => (0, r.jsxs)("span", {
                children: [(0, r.jsx)(x.Z, {
                  guild: t,
                  className: R.headerGuildBadge,
                  flowerStarClassName: R.flowerStar
                }), (0, r.jsx)("strong", {
                  children: e
                })]
              }, n)
            })
          }), (0, r.jsx)("div", {
            className: R.descriptionWrapper,
            children: (0, r.jsx)(u.Kx8, {
              className: R.descriptionInput,
              placeholder: L.NW.string(L.t.qzZHaW),
              onChange: e => {
                (0, j.VP)({
                  description: e
                })
              },
              onBlur: () => {
                W()
              },
              onKeyDown: e => {
                e.keyCode === T.yXg.ENTER && e.preventDefault()
              },
              value: I,
              maxLength: 140,
              disabled: !0
            })
          })]
        }), (0, r.jsx)(u.$i$, {
          className: R.divider
        }), (0, r.jsxs)("div", {
          className: R.welcomeChannels,
          children: [(0, r.jsx)(u.vwX, {
            children: L.NW.string(L.t.euJXzc)
          }), (0, r.jsx)(u.Text, {
            variant: "text-sm/normal",
            className: R.addChannelSubtext,
            children: L.NW.string(L.t.VOnnn5)
          }), null == O ? void 0 : O.map((e, n) => (0, r.jsx)(k, {
            guildId: t.id,
            welcomeChannel: e,
            onEdit: F(n),
            onChannelReorder: U,
            isDropHovered: n === A,
            index: n
          }, n)), (null == O || O.length < 5) && (0, r.jsx)(u.zxk, {
            onClick: () => (0, u.ZDy)(async () => {
              let {
                default: e
              } = await n.e("39143").then(n.bind(n, 737868));
              return n => (0, r.jsx)(e, Z(Q({}, n), {
                guildId: t.id,
                onSave: G
              }))
            }, {
              onCloseRequest: () => S.Vq
            }),
            className: R.addChannelButton,
            disabled: !0,
            color: u.zxk.Colors.PRIMARY,
            children: L.NW.string(L.t.U1BDe3)
          })]
        })]
      })]
    })
  }