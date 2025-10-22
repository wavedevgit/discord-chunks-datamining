/** Chunk was on 1862 **/
/** chunk id: 801001, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./388685.js"), require("./953529.js"), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk706371 = require("./706371.jsx"),
  Chunk563115 = require("./563115.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk984933 = require("./984933.js"),
  Chunk485386 = require("./485386.js"),
  Chunk402148 = require("./402148.js"),
  Chunk570961 = require("./570961.js"),
  Chunk208665 = require("./208665.js"),
  Chunk460117 = require("./460117.jsx"),
  Chunk290511 = require("./290511.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk421261 = require("./421261.js");

function C(e) {
  let {
    transitionState: t,
    onClose: n,
    onSave: r,
    onDelete: v,
    option: p,
    guild: C,
    prompt: P,
    index: I
  } = e, S = (0, j.Dt)(), Z = (0, a.e7)([g.ZP], () => g.ZP.getDefaultChannel(C.id)), [w, E] = i.useState(() => {
    var e;
    return null != (e = null == p ? true : p.emoji) ? e : null
  }), [k, _] = i.useState(() => {
    var e;
    return null != (e = null == p ? true : p.title) ? e : ""
  }), [M, R] = i.useState(() => {
    var e;
    return null != (e = null == p ? true : p.description) ? e : ""
  }), [T, B] = i.useState(() => {
    var e;
    return new Set(null != (e = null == p ? true : p.channelIds) ? e : [])
  }), [D, q] = i.useState(() => {
    var e;
    return new Set(null != (e = null == p ? true : p.roleIds) ? e : [])
  }), [z, A] = i.useState({}), L = i.useRef(null);
  i.useLayoutEffect(() => {
    var e;
    return null == (e = L.current) ? true : e.focus()
  }, []);
  let F = i.useCallback(() => {
      var e;
      let t = {
          id: null != (e = null == p ? true : p.id) ? e : "".concat(Date.now()),
          title: k,
          description: M,
          channelIds: Array.from(T).sort(),
          roleIds: Array.from(D).sort(),
          emoji: null == w ? true : w
        },
        l = function(e, t, n, l) {
          let i = {};
          l.title.length <= 0 && (i.title = y.intl.string(y.t.p3PKzA));
          let r = (0, h.en)(e, t, n, l);
          return null != r && (i.roles = r), i
        }(C, x.Z.editedOnboardingPrompts, P, t);
      A(l), o().isEmpty(l) && (r(t), n())
    }, [T, M, w, C, n, r, null == p ? true : p.id, P, D, k]),
    H = i.useMemo(() => [{
      text: y.intl.string(y.t["ETE/oC"]),
      onClick: n,
      variant: "secondary"
    }, {
      text: y.intl.string(y.t["R3BPH+"]),
      onClick: F,
      variant: "primary"
    }], [F, n]);
  return (0, l.jsxs)(s.IX, {
    transitionState: t,
    onClose: n,
    children: [(0, l.jsx)("div", {
      className: O.closeButton,
      children: (0, l.jsx)(c.PZ7, {
        onClick: n
      })
    }), (0, l.jsxs)("div", {
      className: O.container,
      children: [(0, l.jsx)(u.Text, {
        className: O.questionNumber,
        variant: "text-xs/semibold",
        color: "text-muted",
        children: y.intl.format(y.t.yjS3zs, {
          index: I + 1
        })
      }), (0, l.jsx)(u.Heading, {
        id: S,
        variant: "heading-lg/semibold",
        children: null != P.title && P.title.length > 0 ? P.title : y.intl.string(y.t.vY91C9)
      }), (0, l.jsxs)(u.Kqy, {
        gap: 8,
        children: [(0, l.jsx)(u.oil, {
          label: y.intl.string(y.t.VWdcBp),
          required: true,
          inputRef: L,
          placeholder: y.intl.string(y.t.EHe6gZ),
          value: k,
          onChange: e => _(e),
          maxLength: b.NE,
          autoFocus: true,
          error: z.title
        }), (0, l.jsx)(u.oil, {
          placeholder: y.intl.string(y.t.mIjgJK),
          value: M,
          onChange: e => R(e),
          maxLength: b.NO
        })]
      }), (0, l.jsx)(u.izJ, {}), (0, l.jsxs)(s.gNt, {
        label: y.intl.string(y.t.TtIbPA),
        children: [(0, l.jsxs)(u.Kqy, {
          gap: 8,
          children: [(0, l.jsx)(d.Z, {
            guildId: C.id,
            selectedChannelIds: T,
            placeholder: y.intl.string(y.t.vephiL),
            onChange: B,
            helperText: y.intl.string(y.t.SoT6we)
          }), (0, l.jsx)(m.Z, {
            guildId: C.id,
            selectedRoleIds: D,
            disableEveryoneRole: true,
            placeholder: y.intl.string(y.t.aFO1I6),
            onChange: q,
            helperText: y.intl.string(y.t.Mbvpv8),
            selectableRoleFilter: e => !e.managed
          })]
        }), null == z.roles ? null : (0, l.jsx)(u.pdY, {
          error: z.roles
        }), (0, l.jsx)(N, {
          guild: C,
          roleIds: D
        })]
      }), (0, l.jsx)(u.izJ, {}), (0, l.jsx)("div", {
        className: O.emojiQuestionContainer,
        children: (0, l.jsx)(s.gNt, {
          label: y.intl.string(y.t["4ahTBl"]),
          description: y.intl.string(y.t.Iv9RGg),
          children: (0, l.jsx)(f.Z, {
            emoji: w,
            setEmoji: E,
            channel: Z
          })
        })
      })]
    }), (0, l.jsx)(s.Go$, {
      actions: H,
      leading: (0, l.jsx)(u.Avr, {
        text: y.intl.string(y.t.N86XcP),
        onClick: () => {
          v(), n()
        },
        variant: "critical"
      })
    })]
  })
}

function N(e) {
  let {
    guild: t,
    roleIds: n
  } = e, i = (0, a.e7)([v.Z], () => v.Z.getManyRoles(t.id, n).find(p.F));
  return null == i ? null : (0, l.jsx)("div", {
    className: O.notice,
    children: (0, l.jsxs)("div", {
      className: O.noticeMessage,
      children: [(0, l.jsx)(u.Mgn, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        className: O.noticeIcon
      }), (0, l.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: y.intl.format(y.t["5zPJEZ"], {
          permissions: (0, p.i)(t, i).join(", ")
        })
      })]
    })
  })
}