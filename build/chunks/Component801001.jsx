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
  Chunk82513 = require("./82513.js");

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
  }), [T, _] = i.useState(() => {
    var e;
    return new Set(null != (e = null == g ? true : g.roleIds) ? e : [])
  }), [B, z] = i.useState({}), D = i.useRef(null);
  i.useLayoutEffect(() => {
    var e;
    return null == (e = D.current) ? true : e.focus()
  }, []);
  let A = i.useCallback(() => {
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
          l.title.length <= 0 && (i.title = x.intl.string(x.t.p3PKzA));
          let r = (0, p.en)(e, t, n, l);
          return null != r && (i.roles = r), i
        }(y, v.Z.editedOnboardingPrompts, C, t);
      z(l), o().isEmpty(l) && (r(t), n())
    }, [M, E, S, y, n, r, null == g ? true : g.id, C, T, Z]),
    L = i.useMemo(() => [{
      text: x.intl.string(x.t["ETE/oC"]),
      onClick: n,
      variant: "secondary"
    }, {
      text: x.intl.string(x.t["R3BPH+"]),
      onClick: A,
      variant: "primary"
    }], [A, n]);
  return (0, l.jsx)(a.Modal, {
    title: x.intl.formatToPlainString(x.t.yjS3zs, {
      index: P + 1
    }),
    subtitle: null != C.title && C.title.length > 0 ? C.title : x.intl.string(x.t.vY91C9),
    transitionState: t,
    onClose: n,
    actions: L,
    actionBarInput: (0, l.jsx)(c.Avr, {
      text: x.intl.string(x.t.N86XcP),
      onClick: () => {
        j(), n()
      },
      variant: "critical"
    }),
    children: (0, l.jsxs)("div", {
      className: b.container,
      children: [(0, l.jsxs)(c.Kqy, {
        gap: 8,
        children: [(0, l.jsx)(c.oil, {
          label: x.intl.string(x.t.VWdcBp),
          required: true,
          inputRef: D,
          placeholder: x.intl.string(x.t.EHe6gZ),
          value: Z,
          onChange: e => w(e),
          maxLength: f.NE,
          autoFocus: true,
          error: B.title
        }), (0, l.jsx)(c.oil, {
          placeholder: x.intl.string(x.t.mIjgJK),
          value: E,
          onChange: e => k(e),
          maxLength: f.NO
        })]
      }), (0, l.jsx)(c.izJ, {}), (0, l.jsxs)(a.gNt, {
        label: x.intl.string(x.t.TtIbPA),
        children: [(0, l.jsxs)(c.Kqy, {
          gap: 8,
          children: [(0, l.jsx)(u.Z, {
            guildId: y.id,
            selectedChannelIds: M,
            placeholder: x.intl.string(x.t.vephiL),
            onChange: R,
            helperText: x.intl.string(x.t.SoT6we)
          }), (0, l.jsx)(d.Z, {
            guildId: y.id,
            selectedRoleIds: T,
            disableEveryoneRole: true,
            placeholder: x.intl.string(x.t.aFO1I6),
            onChange: _,
            helperText: x.intl.string(x.t.Mbvpv8),
            selectableRoleFilter: e => !e.managed
          })]
        }), null == B.roles ? null : (0, l.jsx)(c.pdY, {
          error: B.roles
        }), (0, l.jsx)(O, {
          guild: y,
          roleIds: T
        })]
      }), (0, l.jsx)(c.izJ, {}), (0, l.jsx)("div", {
        className: b.emojiQuestionContainer,
        children: (0, l.jsx)(a.gNt, {
          label: x.intl.string(x.t["4ahTBl"]),
          description: x.intl.string(x.t.Iv9RGg),
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
    className: b.notice,
    children: (0, l.jsxs)("div", {
      className: b.noticeMessage,
      children: [(0, l.jsx)(c.Mgn, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        className: b.noticeIcon
      }), (0, l.jsx)(c.Text, {
        variant: "text-sm/normal",
        children: x.intl.format(x.t["5zPJEZ"], {
          permissions: (0, g.i)(t, i).join(", ")
        })
      })]
    })
  })
}