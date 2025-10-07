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
  Chunk82513 = require("./82513.js");

function C(e) {
  let {
    transitionState: t,
    onClose: n,
    onSave: r,
    onDelete: v,
    option: h,
    guild: C,
    prompt: I,
    index: P
  } = e, S = (0, j.Dt)(), w = (0, a.e7)([g.ZP], () => g.ZP.getDefaultChannel(C.id)), [E, Z] = i.useState(() => {
    var e;
    return null != (e = null == h ? true : h.emoji) ? e : null
  }), [k, M] = i.useState(() => {
    var e;
    return null != (e = null == h ? true : h.title) ? e : ""
  }), [R, _] = i.useState(() => {
    var e;
    return null != (e = null == h ? true : h.description) ? e : ""
  }), [T, B] = i.useState(() => {
    var e;
    return new Set(null != (e = null == h ? true : h.channelIds) ? e : [])
  }), [D, q] = i.useState(() => {
    var e;
    return new Set(null != (e = null == h ? true : h.roleIds) ? e : [])
  }), [z, J] = i.useState({}), F = i.useRef(null);
  i.useLayoutEffect(() => {
    var e;
    return null == (e = F.current) ? true : e.focus()
  }, []);
  let H = i.useCallback(() => {
      var e;
      let t = {
          id: null != (e = null == h ? true : h.id) ? e : "".concat(Date.now()),
          title: k,
          description: R,
          channelIds: Array.from(T).sort(),
          roleIds: Array.from(D).sort(),
          emoji: null == E ? true : E
        },
        l = function(e, t, n, l) {
          let i = {};
          l.title.length <= 0 && (i.title = y.intl.string(y.t.p3PKzM));
          let r = (0, p.en)(e, t, n, l);
          return null != r && (i.roles = r), i
        }(C, x.Z.editedOnboardingPrompts, I, t);
      J(l), o().isEmpty(l) && (r(t), n())
    }, [T, R, E, C, n, r, null == h ? true : h.id, I, D, k]),
    K = i.useMemo(() => [{
      text: y.intl.string(y.t["ETE/oK"]),
      onClick: n,
      variant: "secondary"
    }, {
      text: y.intl.string(y.t.R3BPHx),
      onClick: H,
      variant: "primary"
    }], [H, n]);
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
          index: P + 1
        })
      }), (0, l.jsx)(u.X6q, {
        id: S,
        variant: "heading-lg/semibold",
        children: null != I.title && I.title.length > 0 ? I.title : y.intl.string(y.t.vY91Cw)
      }), (0, l.jsxs)(u.Kqy, {
        gap: 8,
        children: [(0, l.jsx)(u.oil, {
          label: y.intl.string(y.t.VWdcBg),
          required: true,
          inputRef: F,
          placeholder: y.intl.string(y.t.EHe6gY),
          value: k,
          onChange: e => M(e),
          maxLength: b.NE,
          autoFocus: true,
          error: z.title
        }), (0, l.jsx)(u.oil, {
          placeholder: y.intl.string(y.t.mIjgJC),
          value: R,
          onChange: e => _(e),
          maxLength: b.NO
        })]
      }), (0, l.jsx)(u.izJ, {}), (0, l.jsxs)(u.xJW, {
        title: y.intl.string(y.t.TtIbPD),
        children: [(0, l.jsxs)(u.Kqy, {
          gap: 8,
          children: [(0, l.jsx)(d.Z, {
            guildId: C.id,
            selectedChannelIds: T,
            placeholder: y.intl.string(y.t.vephiI),
            onChange: B,
            helperText: y.intl.string(y.t.SoT6wc)
          }), (0, l.jsx)(m.Z, {
            guildId: C.id,
            selectedRoleIds: D,
            disableEveryoneRole: true,
            placeholder: y.intl.string(y.t.aFO1Iy),
            onChange: q,
            helperText: y.intl.string(y.t.Mbvpv7),
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
          label: y.intl.string(y.t["4ahTBg"]),
          description: y.intl.string(y.t.Iv9RGh),
          children: (0, l.jsx)(f.Z, {
            emoji: E,
            setEmoji: Z,
            channel: w
          })
        })
      })]
    }), (0, l.jsx)(s.Go$, {
      actions: K,
      leading: (0, l.jsx)(u.Avr, {
        text: y.intl.string(y.t.N86XcH),
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
  } = e, i = (0, a.e7)([v.Z], () => v.Z.getManyRoles(t.id, n).find(h.F));
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
        children: y.intl.format(y.t["5zPJER"], {
          permissions: (0, h.i)(t, i).join(", ")
        })
      })]
    })
  })
}