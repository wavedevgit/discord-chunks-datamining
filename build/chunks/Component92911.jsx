/** Chunk was on 47841 **/
/** chunk id: 92911, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => F
}), require("./896048.js"), require("./228524.js"), require("./733351.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk812729 = require("./812729.js"),
  c = require.n(Chunk812729),
  Chunk131346 = require("./131346.js"),
  Chunk744818 = require("./744818.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk964486 = require("./964486.js"),
  Chunk775602 = require("./775602.js"),
  Chunk47167 = require("./47167.js"),
  Chunk713654 = require("./713654.js"),
  Chunk508675 = require("./508675.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk714991 = require("./714991.jsx"),
  Chunk95035 = require("./95035.jsx"),
  Chunk447696 = require("./447696.js"),
  Chunk861410 = require("./861410.js"),
  Chunk734057 = require("./734057.js"),
  Chunk603349 = require("./603349.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk488926 = require("./488926.js"),
  Chunk997509 = require("./997509.js"),
  Chunk694012 = require("./694012.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js"),
  Chunk650583 = require("./650583.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk134599 = require("./134599.js");

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
let M = "WELCOME_CHANNEL",
  U = e => {
    var t;
    let l, {
        guildId: a,
        welcomeChannel: c,
        onEdit: m,
        onChannelReorder: p,
        isDropHovered: O,
        index: y
      } = e,
      v = i.useRef(null),
      A = (0, u.bG)([N.A], () => N.A.getChannel(c.channel_id)),
      E = (0, u.bG)([j.Ay], () => null != c.emoji_id ? j.Ay.getUsableCustomEmojiById(c.emoji_id) : null),
      S = null != A && T.MJ(P.xBc.VIEW_CHANNEL, A),
      I = null != (t = (0, h.gU)(A)) ? t : f.N$i,
      C = (0, x.Ay)(A, false),
      R = () => {
        (0, f.mMO)(async () => {
          let {
            default: e
          } = await n.e("40971").then(n.bind(n, 825894));
          return t => (0, r.jsx)(e, k(L({}, t), {
            onConfirm: () => {
              m(), t.onClose()
            },
            channelId: c.channel_id
          }))
        }, {
          onCloseRequest: () => w.FX
        })
      },
      [, U] = (0, o.i)({
        type: M,
        item: {
          channel: c,
          index: y
        },
        end: (e, t) => {
          null == e || t.didDrop() || p(e.channel, null, true)
        }
      }),
      [, F] = (0, d.H)({
        accept: M,
        hover: e => {
          p(e.channel, y, false)
        },
        drop: e => {
          p(e.channel, y, true)
        }
      });
    return i.useLayoutEffect(() => (U(F(v)), () => {
      U(null), F(null)
    }), [U, F]), l = S ? null != E || null != c.emoji_name ? (0, r.jsx)(b.A, {
      emojiId: null == E ? true : E.id,
      emojiName: null != E ? E.name : c.emoji_name,
      animated: !!(null == E ? true : E.animated)
    }) : (0, r.jsx)(I, {
      size: "md",
      color: "currentColor",
      className: G.p
    }) : (0, r.jsx)(_.A, {
      width: 24,
      height: 24,
      className: G.QW
    }), (0, r.jsxs)("div", {
      className: s()(G.w8, {
        [G.cB]: O
      }),
      ref: v,
      "data-dnd-name": c.description,
      onContextMenu: e => {
        (0, g.L3)(e, async () => {
          let {
            default: e
          } = await n.e("84913").then(n.bind(n, 36456));
          return t => (0, r.jsx)(e, k(L({}, t), {
            guildId: a,
            welcomeChannel: c,
            onChannelReorder: p,
            onShowDeleteModal: R,
            index: y
          }))
        })
      },
      children: [l, (0, r.jsxs)("div", {
        className: G.X3,
        children: [(0, r.jsx)(f.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: c.description
        }), (0, r.jsxs)(f.Text, {
          className: S ? true : G.op,
          variant: "text-xs/normal",
          color: "text-default",
          children: [(0, r.jsx)(I, {
            className: G.nO,
            size: "xxs",
            color: "currentColor"
          }), (0, r.jsx)("span", {
            children: S ? C : D.intl.string(D.t.zFuCsF)
          })]
        })]
      }), (0, r.jsx)(f.K0, {
        variant: "icon-only",
        icon: f.ucK,
        "aria-label": D.intl.string(D.t.JYBc3K),
        onClick: R
      })]
    })
  },
  F = e => {
    let {
      guild: t
    } = e, {
      welcomeSettings: l,
      originalWelcomeSettings: s
    } = (0, u.bG)([E.A], () => E.A.getSettingsProps()), a = (0, u.bG)([p.A], () => p.A.useReducedMotion), [o, d] = i.useState(null), [g, b] = i.useState(false), [x, h] = i.useState(false), {
      description: j,
      channels: N,
      enabled: T
    } = l, w = e => {
      null == t || c()(e, s.channels) || ((0, A.i4)(t.id, {
        channels: e
      }), b(true))
    }, M = e => {
      null == t || e !== s.enabled && ((0, A.i4)(t.id, {
        enabled: e
      }), h(!a), b(true))
    }, F = (e, t, n) => {
      if (null == N) return;
      let r = N.indexOf(e),
        i = [...N];
      null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), (0, A.Xx)({
        channels: i
      })), n ? (w(i), d(null)) : d(t)
    }, B = i.useRef(false);
    (0, m.Ay)(() => () => {
      B.current = true
    }), i.useEffect(() => () => {
      if (B.current && g) {
        let e = [],
          n = [],
          r = false;
        null == N || N.forEach(t => {
          e.push(t.description), n.push(t.channel_id), null != t.emoji_id && (r = true)
        }), S.default.track(P.HAw.GUILD_WELCOME_SCREEN_SETTINGS_UPDATED, {
          guild_id: null == t ? true : t.id,
          options: e,
          options_channel_ids: n,
          guild_description: j,
          has_custom_emojis: r,
          is_enabled: T
        })
      }
    }, [g, N, j, T, t]), i.useEffect(() => () => (0, A.Vv)(), []);
    let H = i.useCallback(() => {
      null != t && I.A.open(t.id, P.BEX.ONBOARDING)
    }, [t]);
    return null == t ? null : (0, r.jsxs)("div", {
      children: [(0, r.jsx)(f.Heading, {
        variant: "heading-lg/semibold",
        children: D.intl.string(D.t["2rkmDr"])
      }), (0, r.jsx)("div", {
        className: G.lm,
        children: (0, r.jsxs)(f.Text, {
          variant: "text-md/normal",
          children: [(0, r.jsx)(_.A, {
            className: G.EP
          }), D.intl.format(D.t["oj2vi+"], {
            onboardingLink: e => (0, r.jsx)(v.A, {
              onClick: H,
              children: e
            })
          })]
        })
      }), (0, r.jsx)(f.Text, {
        variant: "text-sm/normal",
        children: D.intl.string(D.t.w2d74x)
      }), (0, r.jsx)(C.A, {
        enabled: T,
        onPreview: (null == N ? true : N.length) === 0 ? true : () => {
          null != t && (0, f.mMO)(async () => {
            let {
              default: e
            } = await n.e("98063").then(n.bind(n, 143154));
            return n => (0, r.jsx)(e, k(L({}, n), {
              guildId: t.id,
              isPreview: true
            }))
          })
        },
        onToggle: T || (null == N ? true : N.length) !== 0 ? () => {
          M(!T)
        } : true,
        animateStatus: x,
        firstLine: T ? D.intl.string(D.t.JbB7Ql) : D.intl.string(D.t["/bd0Qv"]),
        secondLine: T ? D.intl.string(D.t.TA1g7z) : D.intl.string(D.t.nc6r1B)
      }), (0, r.jsxs)("div", {
        className: G.i1,
        children: [(0, r.jsxs)("div", {
          className: G.eB,
          children: [(0, r.jsx)(O.A, {
            size: O.A.Sizes.LARGER,
            className: G.Kk,
            guild: t,
            animate: true,
            tabIndex: false
          }), (0, r.jsx)(f.Heading, {
            className: G.re,
            variant: "heading-xl/semibold",
            children: D.intl.format(D.t["0aydCN"], {
              guildName: t.name,
              guildNameHook: (e, n) => (0, r.jsxs)("span", {
                children: [(0, r.jsx)(y.A, {
                  guild: t,
                  className: G.eZ,
                  flowerStarClassName: G.mP
                }), (0, r.jsx)("strong", {
                  children: e
                })]
              }, n)
            })
          }), (0, r.jsx)("div", {
            className: G.Wi,
            children: (0, r.jsx)(f.fs1, {
              placeholder: D.intl.string(D.t.qzZHaX),
              onChange: e => {
                (0, A.Xx)({
                  description: e
                })
              },
              onBlur: () => {
                null == t || j !== s.description && ((0, A.i4)(t.id, {
                  description: null == j ? true : j.trim()
                }), b(true))
              },
              onKeyDown: e => {
                e.key === R.dh.ENTER && e.preventDefault()
              },
              value: j,
              maxLength: 140,
              disabled: true
            })
          })]
        }), (0, r.jsx)(f.cGx, {
          className: G.yF
        }), (0, r.jsx)("div", {
          className: G.f6,
          children: (0, r.jsx)(f.D0$, {
            label: D.intl.string(D.t.euJXzT),
            description: D.intl.string(D.t.VOnnnz),
            children: null == N ? true : N.map((e, n) => (0, r.jsx)(U, {
              guildId: t.id,
              welcomeChannel: e,
              onEdit: e => {
                let t = [...null != N ? N : []];
                null == e ? t.splice(n, 1) : t[n] = e, (0, A.Xx)({
                  channels: t
                }), w(t), 0 === t.length && T && ((0, A.Xx)({
                  enabled: false
                }), M(false))
              },
              onChannelReorder: F,
              isDropHovered: n === o,
              index: n
            }, n))
          })
        })]
      })]
    })
  }