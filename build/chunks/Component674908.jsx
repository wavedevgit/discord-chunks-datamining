/** Chunk was on 98920 **/
/** chunk id: 674908, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk36563 = require("./36563.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk835473 = require("./835473.js"),
  Chunk471445 = require("./471445.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk305347 = require("./305347.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk906467 = require("./906467.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk55935 = require("./55935.js"),
  Chunk823379 = require("./823379.js"),
  Chunk709054 = require("./709054.js"),
  Chunk435064 = require("./435064.js"),
  Chunk894694 = require("./894694.js"),
  Chunk39604 = require("./39604.js"),
  Chunk930311 = require("./930311.js"),
  Chunk680056 = require("./680056.js"),
  Chunk115559 = require("./115559.jsx"),
  Chunk356659 = require("./356659.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk955114 = require("./955114.js");

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function R(e) {
  var t;
  let {
    clip: R,
    channelId: L,
    onClose: P
  } = e, A = R.type === y.NJ.SCREENSHOT, {
    getEditedClip: M,
    voiceAudioEnabled: D,
    setVoiceAudioEnabled: U,
    applicationAudioEnabled: Z,
    setApplicationAudioEnabled: z,
    soundboardAudioEnabled: B,
    setSoundboardAudioEnabled: V,
    pause: F,
    clipName: G,
    setClipName: _,
    isTemporary: K,
    setIsTemporary: W
  } = (0, E.D)(), H = (0, u.q)(R.applicationId), q = (0, i.e7)([x.Z], () => x.Z.isClipExporting(R.id)), {
    onShareClick: Y
  } = (0, k.Z)(L), J = (0, i.e7)([p.Z], () => p.Z.isDeveloper), X = (0, C.q)(R), $ = a.useCallback(async () => {
    await (0, N.WY)(R.id), W(false)
  }, [R.id, W]), Q = (0, i.Wu)([v.default], () => R.users.map(v.default.getUser).filter(b.lm)), ee = a.useMemo(() => new Date(j.default.extractTimestamp(R.id)), [R.id]), et = (0, i.e7)([f.Z], () => R.version >= 3 && null != R.guildId ? f.Z.getGuild(R.guildId) : null), en = (0, i.e7)([h.Z], () => R.version >= 3 && null != R.channelId ? h.Z.getChannel(R.channelId) : null), el = null != en ? (0, c.KS)(en, et) : null;
  return (0, l.jsxs)("div", {
    className: O.clipForm,
    children: [(0, l.jsxs)("div", {
      className: O.clipFormHeader,
      children: [(0, l.jsxs)("div", {
        className: O.headerContent,
        children: [(0, l.jsx)(d.Z, {
          game: H,
          size: d.A.XSMALL
        }), (0, l.jsx)(s.Heading, {
          variant: "heading-md/medium",
          color: "text-default",
          className: O.headerTitle,
          children: null != (t = null == H ? true : H.name) ? t : R.applicationName
        })]
      }), (0, l.jsxs)("div", {
        className: O.headerButtons,
        children: [J && (0, l.jsx)(s.hU, {
          onClick: function() {
            (0, s.ZDy)(async () => {
              let {
                default: e
              } = await n.e("90946").then(n.bind(n, 69480));
              return t => (0, l.jsx)(e, I(T({}, t), {
                clip: R
              }))
            }, {
              stackingBehavior: "stack"
            })
          },
          icon: s.nnZ,
          size: "sm",
          variant: "icon-only",
          "aria-label": "Debug Info"
        }), (0, l.jsx)(s.hU, {
          onClick: P,
          icon: s.Uz9,
          size: "sm",
          variant: "icon-only",
          "aria-label": w.intl.string(w.t.cpT0Cq)
        })]
      })]
    }), (0, l.jsx)(s.zJl, {
      className: O.clipFormSection,
      children: (0, l.jsxs)(s.C3N, {
        children: [K && (0, l.jsx)(s.M14, {
          type: "info",
          children: (0, l.jsxs)(s.Kqy, {
            gap: 8,
            children: [(0, l.jsx)(s.Text, {
              variant: "text-sm/normal",
              children: w.intl.string(w.t.EkUv4u)
            }), (0, l.jsx)(s.Button, {
              size: "sm",
              variant: "primary",
              onClick: $,
              text: w.intl.string(w.t["BfLmm+"])
            })]
          })
        }), (0, l.jsx)(s.oil, {
          label: w.intl.string(w.t.SJKc5n),
          onChange: e => {
            "" === e ? _(true) : _(e)
          },
          value: G,
          minLength: S.XH,
          maxLength: S.MG,
          placeholder: X
        }), !A && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(s.kcT, {
            label: w.intl.string(w.t.GnQui9),
            checked: Z,
            onChange: z
          }), (0, l.jsx)(s.kcT, {
            label: w.intl.string(w.t["5mVOCb"]),
            checked: D,
            onChange: U
          }), (0, l.jsx)(s.kcT, {
            label: w.intl.string(w.t["8K7Ges"]),
            checked: B,
            onChange: V
          })]
        }), (0, l.jsx)(s.gNt, {
          label: w.intl.string(w.t.g8pDeY),
          layout: "horizontal",
          children: (0, l.jsx)(s.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: (0, g.Y4)(ee)
          })
        }), (0, l.jsx)(s.gNt, {
          label: w.intl.string(w.t.WTozwe),
          layout: "horizontal",
          children: (0, l.jsx)(r.Z, {
            users: Q,
            maxUsers: 10
          })
        }), null != et && (0, l.jsx)(s.gNt, {
          label: w.intl.string(w.t.vVKqVh),
          layout: "horizontal",
          children: (0, l.jsxs)("div", {
            className: O.fieldContent,
            children: [(0, l.jsx)(m.ZP, {
              guild: et,
              iconSize: 16
            }), (0, l.jsx)(s.Text, {
              variant: "text-sm/normal",
              color: "text-subtle",
              children: et.name
            })]
          })
        }), null != en && null != el && (0, l.jsx)(s.gNt, {
          label: w.intl.string(w.t.GPxI1G),
          layout: "horizontal",
          children: (0, l.jsxs)("div", {
            className: O.fieldContent,
            children: [(0, l.jsx)(el, {
              size: "custom",
              width: 16,
              height: 16,
              color: "currentColor"
            }), (0, l.jsx)(s.Text, {
              variant: "text-sm/normal",
              color: "text-subtle",
              children: en.name
            })]
          })
        }), R.version >= 3 && null != R.activity && (null != R.activity.state || null != R.activity.details) && (0, l.jsx)(s.gNt, {
          label: w.intl.string(w.t.aTpwmw),
          layout: "horizontal",
          children: (0, l.jsx)(s.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: [R.activity.state, R.activity.details].filter(Boolean).join(" › ")
          })
        })]
      })
    }), (0, l.jsx)("div", {
      className: O.clipFormFooter,
      children: (0, l.jsxs)(s.ButtonGroup, {
        direction: "horizontal",
        fullWidth: true,
        children: [(0, l.jsx)(s.Button, {
          loading: q,
          disabled: q,
          variant: "primary",
          icon: s.aAc,
          iconPosition: "start",
          onClick: () => Y({
            clips: [M()]
          }),
          text: w.intl.string(w.t.RDE0Sc)
        }), (0, l.jsx)(s.hU, {
          "aria-label": w.intl.string(w.t.PdRCRg),
          loading: q,
          disabled: q,
          variant: "secondary",
          onClick: function(e) {
            F(), (0, o.jW)(e, async () => {
              let {
                default: e
              } = await n.e("32157").then(n.bind(n, 151090));
              return t => (0, l.jsx)(e, I(T({}, t), {
                clips: [M()],
                channelId: L,
                onAfterDelete: P
              }))
            })
          },
          icon: s.xhG
        })]
      })
    })]
  })
}