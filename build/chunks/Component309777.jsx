/** Chunk was on 19632 **/
/** chunk id: 309777, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => T
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk342952 = require("./342952.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk429913 = require("./429913.js"),
  Chunk713654 = require("./713654.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk145497 = require("./145497.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk540999 = require("./540999.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk405269 = require("./405269.js"),
  Chunk403362 = require("./403362.js"),
  Chunk661191 = require("./661191.js"),
  Chunk274372 = require("./274372.js"),
  Chunk372684 = require("./372684.js"),
  Chunk399925 = require("./399925.js"),
  Chunk718812 = require("./718812.js"),
  Chunk794905 = require("./794905.js"),
  Chunk429364 = require("./429364.jsx"),
  Chunk696016 = require("./696016.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk919753 = require("./919753.js");

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var l = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
      return Object.getOwnPropertyDescriptor(l, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = l[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var l = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      l.push.apply(l, n)
    }
    return l
  })(Object(t)).forEach(function(l) {
    Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l))
  }), e
}

function T(e) {
  var t;
  let {
    clip: T,
    channelId: L,
    onClose: R
  } = e, M = T.type === y.nQ.SCREENSHOT, {
    getEditedClip: P,
    voiceAudioEnabled: U,
    setVoiceAudioEnabled: D,
    applicationAudioEnabled: z,
    setApplicationAudioEnabled: G,
    soundboardAudioEnabled: B,
    setSoundboardAudioEnabled: _,
    pause: K,
    clipName: V,
    setClipName: F,
    isTemporary: W,
    setIsTemporary: H
  } = (0, E.T)(), J = (0, u.h)(T.applicationId), X = (0, r.bG)([x.A], () => x.A.isClipExporting(T.id)), {
    onShareClick: $
  } = (0, N.A)(L), q = (0, r.bG)([p.A], () => p.A.isDeveloper), Q = (0, k.h)(T), Y = a.useCallback(async () => {
    await (0, C.w7)(T.id), H(false)
  }, [T.id, H]), Z = (0, r.yK)([f.default], () => T.users.map(f.default.getUser).filter(g.Vq)), ee = a.useMemo(() => new Date(j.default.extractTimestamp(T.id)), [T.id]), et = (0, r.bG)([v.A], () => T.version >= 3 && null != T.guildId ? v.A.getGuild(T.guildId) : null), el = (0, r.bG)([h.A], () => T.version >= 3 && null != T.channelId ? h.A.getChannel(T.channelId) : null), en = null != el ? (0, c.gU)(el, et) : null;
  return (0, n.jsxs)("div", {
    className: O.XV,
    children: [(0, n.jsxs)("div", {
      className: O.eW,
      children: [(0, n.jsxs)("div", {
        className: O.VW,
        children: [(0, n.jsx)(d.A, {
          game: J,
          size: d.M.XSMALL
        }), (0, n.jsx)(s.Heading, {
          variant: "heading-md/medium",
          color: "text-default",
          className: O.qd,
          children: null != (t = null == J ? true : J.name) ? t : T.applicationName
        })]
      }), (0, n.jsxs)("div", {
        className: O.Pz,
        children: [q && (0, n.jsx)(s.K0, {
          onClick: function() {
            (0, s.mMO)(async () => {
              let {
                default: e
              } = await l.e("10000").then(l.bind(l, 224883));
              return t => (0, n.jsx)(e, I(A({}, t), {
                clip: T
              }))
            }, {
              stackingBehavior: "stack"
            })
          },
          icon: s.Q5O,
          size: "sm",
          variant: "icon-only",
          "aria-label": "Debug Info"
        }), (0, n.jsx)(s.K0, {
          onClick: R,
          icon: s.d$L,
          size: "sm",
          variant: "icon-only",
          "aria-label": w.intl.string(w.t.cpT0Cq)
        })]
      })]
    }), (0, n.jsx)(s.IpV, {
      className: O.Md,
      children: (0, n.jsxs)(s.nVY, {
        children: [W && (0, n.jsx)(s.wx6, {
          type: "info",
          children: (0, n.jsxs)(s.BJc, {
            gap: 8,
            children: [(0, n.jsx)(s.Text, {
              variant: "text-sm/normal",
              children: w.intl.string(w.t.EkUv4u)
            }), (0, n.jsx)(s.Button, {
              size: "sm",
              variant: "primary",
              onClick: Y,
              text: w.intl.string(w.t["BfLmm+"])
            })]
          })
        }), (0, n.jsx)(s.ksK, {
          label: w.intl.string(w.t.SJKc5n),
          onChange: e => {
            "" === e ? F(true) : F(e)
          },
          value: V,
          minLength: S.U_,
          maxLength: S.mk,
          placeholder: Q
        }), !M && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(s.Ad5, {
            label: w.intl.string(w.t.GnQui9),
            checked: z,
            onChange: G
          }), (0, n.jsx)(s.Ad5, {
            label: w.intl.string(w.t["5mVOCb"]),
            checked: U,
            onChange: D
          }), (0, n.jsx)(s.Ad5, {
            label: w.intl.string(w.t["8K7Ges"]),
            checked: B,
            onChange: _
          })]
        }), (0, n.jsx)(s.D0$, {
          label: w.intl.string(w.t.g8pDeY),
          layout: "horizontal",
          children: (0, n.jsx)(s.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: (0, b.mk)(ee)
          })
        }), (0, n.jsx)(s.D0$, {
          label: w.intl.string(w.t.WTozwe),
          layout: "horizontal",
          children: (0, n.jsx)(i.A, {
            users: Z,
            maxUsers: 10
          })
        }), null != et && (0, n.jsx)(s.D0$, {
          label: w.intl.string(w.t.vVKqVh),
          layout: "horizontal",
          children: (0, n.jsxs)("div", {
            className: O._c,
            children: [(0, n.jsx)(m.Ay, {
              guild: et,
              iconSize: 16
            }), (0, n.jsx)(s.Text, {
              variant: "text-sm/normal",
              color: "text-subtle",
              children: et.name
            })]
          })
        }), null != el && null != en && (0, n.jsx)(s.D0$, {
          label: w.intl.string(w.t.GPxI1G),
          layout: "horizontal",
          children: (0, n.jsxs)("div", {
            className: O._c,
            children: [(0, n.jsx)(en, {
              size: "custom",
              width: 16,
              height: 16,
              color: "currentColor"
            }), (0, n.jsx)(s.Text, {
              variant: "text-sm/normal",
              color: "text-subtle",
              children: el.name
            })]
          })
        }), T.version >= 3 && null != T.activity && (null != T.activity.state || null != T.activity.details) && (0, n.jsx)(s.D0$, {
          label: w.intl.string(w.t.aTpwmw),
          layout: "horizontal",
          children: (0, n.jsx)(s.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: [T.activity.state, T.activity.details].filter(Boolean).join(" › ")
          })
        })]
      })
    }), (0, n.jsx)("div", {
      className: O.G3,
      children: (0, n.jsxs)(s.ButtonGroup, {
        direction: "horizontal",
        fullWidth: true,
        children: [(0, n.jsx)(s.Button, {
          loading: X,
          disabled: X,
          variant: "primary",
          icon: s.liv,
          iconPosition: "start",
          onClick: () => $({
            clips: [P()]
          }),
          text: w.intl.string(w.t.RDE0Sc)
        }), (0, n.jsx)(s.K0, {
          "aria-label": w.intl.string(w.t.PdRCRg),
          loading: X,
          disabled: X,
          variant: "secondary",
          onClick: function(e) {
            K(), (0, o.L3)(e, async () => {
              let {
                default: e
              } = await l.e("80628").then(l.bind(l, 183903));
              return t => (0, n.jsx)(e, I(A({}, t), {
                clips: [P()],
                channelId: L,
                onAfterDelete: R
              }))
            })
          },
          icon: s.jNK
        })]
      })
    })]
  })
}