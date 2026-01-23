/** Chunk was on 62765 **/
/** chunk id: 826204, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./896048.js"), require("./228524.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk508595 = require("./508595.jsx"),
  Chunk57222 = require("./57222.jsx"),
  Chunk808728 = require("./808728.js"),
  Chunk317525 = require("./317525.js"),
  Chunk957545 = require("./957545.js"),
  Chunk107795 = require("./107795.js"),
  Chunk655943 = require("./655943.js"),
  Chunk76596 = require("./76596.jsx"),
  Chunk539916 = require("./539916.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk186314 = require("./186314.js");

function y(e) {
  let {
    transitionState: t,
    onClose: n,
    onSave: i,
    onDelete: j,
    option: p,
    guild: y,
    prompt: C,
    index: P
  } = e, k = (0, a.bG)([m.Ay], () => m.Ay.getDefaultChannel(y.id)), [S, A] = r.useState(() => {
    var e;
    return null != (e = null == p ? true : p.emoji) ? e : null
  }), [I, E] = r.useState(() => {
    var e;
    return null != (e = null == p ? true : p.title) ? e : ""
  }), [w, N] = r.useState(() => {
    var e;
    return null != (e = null == p ? true : p.description) ? e : ""
  }), [_, D] = r.useState(() => {
    var e;
    return new Set(null != (e = null == p ? true : p.channelIds) ? e : [])
  }), [T, R] = r.useState(() => {
    var e;
    return new Set(null != (e = null == p ? true : p.roleIds) ? e : [])
  }), [M, B] = r.useState({}), L = r.useRef(null);
  r.useLayoutEffect(() => {
    var e;
    return null == (e = L.current) ? true : e.focus()
  }, []);
  let z = r.useCallback(() => {
      var e, t, l, r, s;
      let a, c, u = {
          id: null != (e = null == p ? true : p.id) ? e : "".concat(Date.now()),
          title: I,
          description: w,
          channelIds: Array.from(_).sort(),
          roleIds: Array.from(T).sort(),
          emoji: null == S ? true : S
        },
        d = (t = y, l = v.A.editedOnboardingPrompts, r = C, a = {}, (s = u).title.length <= 0 && (a.title = b.intl.string(b.t.p3PKzA)), null != (c = (0, g.fO)(t, l, r, s)) && (a.roles = c), a);
      B(d), o().isEmpty(d) && (i(u), n())
    }, [_, w, S, y, n, i, null == p ? true : p.id, C, T, I]),
    G = r.useMemo(() => [{
      text: b.intl.string(b.t["ETE/oC"]),
      onClick: n,
      variant: "secondary"
    }, {
      text: b.intl.string(b.t["R3BPH+"]),
      onClick: z,
      variant: "primary"
    }], [z, n]);
  return (0, l.jsx)(s.Modal, {
    title: b.intl.formatToPlainString(b.t.yjS3zs, {
      index: P + 1
    }),
    subtitle: null != C.title && C.title.length > 0 ? C.title : b.intl.string(b.t.vY91C9),
    transitionState: t,
    onClose: n,
    actions: G,
    actionBarInput: (0, l.jsx)(c.QWc, {
      text: b.intl.string(b.t.N86XcP),
      onClick: () => {
        j(), n()
      },
      variant: "critical"
    }),
    children: (0, l.jsxs)("div", {
      className: f.kL,
      children: [(0, l.jsxs)(c.BJc, {
        gap: 8,
        children: [(0, l.jsx)(c.ksK, {
          label: b.intl.string(b.t.VWdcBp),
          required: true,
          inputRef: L,
          placeholder: b.intl.string(b.t.EHe6gZ),
          value: I,
          onChange: e => E(e),
          maxLength: x.Q_,
          autoFocus: true,
          error: M.title
        }), (0, l.jsx)(c.ksK, {
          placeholder: b.intl.string(b.t.mIjgJK),
          value: w,
          onChange: e => N(e),
          maxLength: x.QY
        })]
      }), (0, l.jsx)(c.cGx, {}), (0, l.jsxs)(s.D0$, {
        label: b.intl.string(b.t.TtIbPA),
        children: [(0, l.jsxs)(c.BJc, {
          gap: 8,
          children: [(0, l.jsx)(u.A, {
            guildId: y.id,
            selectedChannelIds: _,
            placeholder: b.intl.string(b.t.vephiL),
            onChange: D,
            helperText: b.intl.string(b.t.SoT6we)
          }), (0, l.jsx)(d.A, {
            guildId: y.id,
            selectedRoleIds: T,
            disableEveryoneRole: true,
            placeholder: b.intl.string(b.t.aFO1I6),
            onChange: R,
            helperText: b.intl.string(b.t.Mbvpv8),
            selectableRoleFilter: e => !e.managed
          })]
        }), null == M.roles ? null : (0, l.jsx)(c.dzK, {
          error: M.roles
        }), (0, l.jsx)(O, {
          guild: y,
          roleIds: T
        })]
      }), (0, l.jsx)(c.cGx, {}), (0, l.jsx)("div", {
        className: f.C2,
        children: (0, l.jsx)(s.D0$, {
          label: b.intl.string(b.t["4ahTBl"]),
          description: b.intl.string(b.t.Iv9RGg),
          children: (0, l.jsx)(h.A, {
            emoji: S,
            setEmoji: A,
            channel: k
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
  } = e, r = (0, a.bG)([j.A], () => j.A.getManyRoles(t.id, n).find(p.J));
  return null == r ? null : (0, l.jsx)("div", {
    className: f.lm,
    children: (0, l.jsxs)("div", {
      className: f.Ux,
      children: [(0, l.jsx)(c.EpV, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        className: f.EP
      }), (0, l.jsx)(c.Text, {
        variant: "text-sm/normal",
        children: b.intl.format(b.t["5zPJEZ"], {
          permissions: (0, p.P)(t, r).join(", ")
        })
      })]
    })
  })
}