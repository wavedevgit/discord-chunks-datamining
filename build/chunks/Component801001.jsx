/** Chunk was on 1862 **/
/** chunk id: 801001, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./388685.js"), require("./953529.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk706371 = require("./706371.jsx"),
  Chunk563115 = require("./563115.jsx"),
  Chunk984933 = require("./984933.js"),
  Chunk485386 = require("./485386.js"),
  Chunk402148 = require("./402148.js"),
  Chunk570961 = require("./570961.js"),
  Chunk208665 = require("./208665.js"),
  Chunk460117 = require("./460117.jsx"),
  Chunk290511 = require("./290511.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk304256 = require("./304256.js");

function y(e) {
  let {
    transitionState: t,
    onClose: n,
    onSave: r,
    onDelete: j,
    option: g,
    guild: y,
    prompt: C,
    index: P
  } = e, I = (0, s.e7)([m.ZP], () => m.ZP.getDefaultChannel(y.id)), [S, N] = i.useState(() => {
    var e;
    return null != (e = null == g ? true : g.emoji) ? e : null
  }), [Z, w] = i.useState(() => {
    var e;
    return null != (e = null == g ? true : g.title) ? e : ""
  }), [E, k] = i.useState(() => {
    var e;
    return null != (e = null == g ? true : g.description) ? e : ""
  }), [M, R] = i.useState(() => {
    var e;
    return new Set(null != (e = null == g ? true : g.channelIds) ? e : [])
  }), [T, B] = i.useState(() => {
    var e;
    return new Set(null != (e = null == g ? true : g.roleIds) ? e : [])
  }), [z, D] = i.useState({}), A = i.useRef(null);
  i.useLayoutEffect(() => {
    var e;
    return null == (e = A.current) ? true : e.focus()
  }, []);
  let L = i.useCallback(() => {
      var e;
      let t = {
          id: null != (e = null == g ? true : g.id) ? e : "".concat(Date.now()),
          title: Z,
          description: E,
          channelIds: Array.from(M).sort(),
          roleIds: Array.from(T).sort(),
          emoji: null == S ? true : S
        },
        l = function(e, t, n, l) {
          let i = {};
          l.title.length <= 0 && (i.title = b.intl.string(b.t.p3PKzA));
          let r = (0, p.en)(e, t, n, l);
          return null != r && (i.roles = r), i
        }(y, v.Z.editedOnboardingPrompts, C, t);
      D(l), o().isEmpty(l) && (r(t), n())
    }, [M, E, S, y, n, r, null == g ? true : g.id, C, T, Z]),
    q = i.useMemo(() => [{
      text: b.intl.string(b.t["ETE/oC"]),
      onClick: n,
      variant: "secondary"
    }, {
      text: b.intl.string(b.t["R3BPH+"]),
      onClick: L,
      variant: "primary"
    }], [L, n]);
  return (0, l.jsx)(a.Modal, {
    title: b.intl.formatToPlainString(b.t.yjS3zs, {
      index: P + 1
    }),
    subtitle: null != C.title && C.title.length > 0 ? C.title : b.intl.string(b.t.vY91C9),
    transitionState: t,
    onClose: n,
    actions: q,
    actionBarInput: (0, l.jsx)(c.Avr, {
      text: b.intl.string(b.t.N86XcP),
      onClick: () => {
        j(), n()
      },
      variant: "critical"
    }),
    children: (0, l.jsxs)("div", {
      className: x.container,
      children: [(0, l.jsxs)(c.Kqy, {
        gap: 8,
        children: [(0, l.jsx)(c.oil, {
          label: b.intl.string(b.t.VWdcBp),
          required: true,
          inputRef: A,
          placeholder: b.intl.string(b.t.EHe6gZ),
          value: Z,
          onChange: e => w(e),
          maxLength: f.NE,
          autoFocus: true,
          error: z.title
        }), (0, l.jsx)(c.oil, {
          placeholder: b.intl.string(b.t.mIjgJK),
          value: E,
          onChange: e => k(e),
          maxLength: f.NO
        })]
      }), (0, l.jsx)(c.izJ, {}), (0, l.jsxs)(a.gNt, {
        label: b.intl.string(b.t.TtIbPA),
        children: [(0, l.jsxs)(c.Kqy, {
          gap: 8,
          children: [(0, l.jsx)(u.Z, {
            guildId: y.id,
            selectedChannelIds: M,
            placeholder: b.intl.string(b.t.vephiL),
            onChange: R,
            helperText: b.intl.string(b.t.SoT6we)
          }), (0, l.jsx)(d.Z, {
            guildId: y.id,
            selectedRoleIds: T,
            disableEveryoneRole: true,
            placeholder: b.intl.string(b.t.aFO1I6),
            onChange: B,
            helperText: b.intl.string(b.t.Mbvpv8),
            selectableRoleFilter: e => !e.managed
          })]
        }), null == z.roles ? null : (0, l.jsx)(c.pdY, {
          error: z.roles
        }), (0, l.jsx)(O, {
          guild: y,
          roleIds: T
        })]
      }), (0, l.jsx)(c.izJ, {}), (0, l.jsx)("div", {
        className: x.emojiQuestionContainer,
        children: (0, l.jsx)(a.gNt, {
          label: b.intl.string(b.t["4ahTBl"]),
          description: b.intl.string(b.t.Iv9RGg),
          children: (0, l.jsx)(h.Z, {
            emoji: S,
            setEmoji: N,
            channel: I
          })
        })
      })]
    })
  })
}

function O(e) {
  let {
    guild: t,
    roleIds: n
  } = e, i = (0, s.e7)([j.Z], () => j.Z.getManyRoles(t.id, n).find(g.F));
  return null == i ? null : (0, l.jsx)("div", {
    className: x.notice,
    children: (0, l.jsxs)("div", {
      className: x.noticeMessage,
      children: [(0, l.jsx)(c.Mgn, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        className: x.noticeIcon
      }), (0, l.jsx)(c.Text, {
        variant: "text-sm/normal",
        children: b.intl.format(b.t["5zPJEZ"], {
          permissions: (0, g.i)(t, i).join(", ")
        })
      })]
    })
  })
}