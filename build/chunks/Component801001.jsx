/** Chunk was on 1862 **/
/** chunk id: 801001, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => I
}), require("./388685.js"), require("./953529.js"), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk257465 = require("./257465.jsx"),
  Chunk369585 = require("./369585.jsx"),
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

function I(e) {
  let {
    transitionState: t,
    onClose: n,
    onSave: r,
    onDelete: h,
    option: x,
    guild: I,
    prompt: P,
    index: S
  } = e, w = (0, v.Dt)(), E = (0, s.e7)([g.ZP], () => g.ZP.getDefaultChannel(I.id)), [Z, k] = i.useState(() => {
    var e;
    return null != (e = null == x ? true : x.emoji) ? e : null
  }), [R, M] = i.useState(() => {
    var e;
    return null != (e = null == x ? true : x.title) ? e : ""
  }), [T, _] = i.useState(() => {
    var e;
    return null != (e = null == x ? true : x.description) ? e : ""
  }), [B, D] = i.useState(() => {
    var e;
    return new Set(null != (e = null == x ? true : x.channelIds) ? e : [])
  }), [q, z] = i.useState(() => {
    var e;
    return new Set(null != (e = null == x ? true : x.roleIds) ? e : [])
  }), [A, F] = i.useState({}), H = i.useRef(null);
  i.useLayoutEffect(() => {
    var e;
    return null == (e = H.current) ? true : e.focus()
  }, []);
  let J = i.useCallback(() => {
      var e;
      let t = {
          id: null != (e = null == x ? true : x.id) ? e : "".concat(Date.now()),
          title: R,
          description: T,
          channelIds: Array.from(B).sort(),
          roleIds: Array.from(q).sort(),
          emoji: null == Z ? true : Z
        },
        l = function(e, t, n, l) {
          let i = {};
          l.title.length <= 0 && (i.title = O.intl.string(O.t.p3PKzM));
          let r = (0, p.en)(e, t, n, l);
          return null != r && (i.roles = r), i
        }(I, f.Z.editedOnboardingPrompts, P, t);
      F(l), o().isEmpty(l) && (r(t), n())
    }, [B, T, Z, I, n, r, null == x ? true : x.id, P, q, R]),
    K = i.useMemo(() => [{
      text: O.intl.string(O.t["ETE/oK"]),
      onClick: n,
      variant: "secondary"
    }, {
      text: O.intl.string(O.t.R3BPHx),
      onClick: J,
      variant: "primary"
    }], [J, n]);
  return (0, l.jsxs)(a.I, {
    transitionState: t,
    onClose: n,
    children: [(0, l.jsx)("div", {
      className: C.closeButton,
      children: (0, l.jsx)(u.PZ7, {
        onClick: n
      })
    }), (0, l.jsxs)("div", {
      className: C.container,
      children: [(0, l.jsx)(d.Text, {
        className: C.questionNumber,
        variant: "text-xs/semibold",
        color: "text-muted",
        children: O.intl.format(O.t.yjS3zs, {
          index: S + 1
        })
      }), (0, l.jsx)(d.X6q, {
        id: w,
        variant: "heading-lg/semibold",
        children: null != P.title && P.title.length > 0 ? P.title : O.intl.string(O.t.vY91Cw)
      }), (0, l.jsx)(d.xJW, {
        title: O.intl.string(O.t.VWdcBg),
        children: (0, l.jsxs)(d.Kqy, {
          gap: 8,
          children: [(0, l.jsx)(d.oil, {
            inputRef: H,
            placeholder: O.intl.string(O.t.EHe6gY),
            value: R,
            onChange: e => M(e),
            maxLength: y.NE,
            autoFocus: true,
            error: A.title
          }), (0, l.jsx)(d.oil, {
            placeholder: O.intl.string(O.t.mIjgJC),
            value: T,
            onChange: e => _(e),
            maxLength: y.NO
          })]
        })
      }), (0, l.jsx)(d.$i$, {}), (0, l.jsxs)(d.xJW, {
        title: O.intl.string(O.t.TtIbPD),
        children: [(0, l.jsxs)(d.Kqy, {
          gap: 8,
          children: [(0, l.jsx)(m.Z, {
            guildId: I.id,
            selectedChannelIds: B,
            placeholder: O.intl.string(O.t.vephiI),
            onChange: D,
            helperText: O.intl.string(O.t.SoT6wc)
          }), (0, l.jsx)(j.Z, {
            guildId: I.id,
            selectedRoleIds: q,
            disableEveryoneRole: true,
            placeholder: O.intl.string(O.t.aFO1Iy),
            onChange: z,
            helperText: O.intl.string(O.t.Mbvpv7),
            selectableRoleFilter: e => !e.managed
          })]
        }), null == A.roles ? null : (0, l.jsx)(d.pdY, {
          error: A.roles
        }), (0, l.jsx)(N, {
          guild: I,
          roleIds: q
        })]
      }), (0, l.jsx)(d.$i$, {}), (0, l.jsxs)("div", {
        className: C.emojiQuestionContainer,
        children: [(0, l.jsxs)("div", {
          children: [(0, l.jsx)(d.vwX, {
            children: O.intl.string(O.t["4ahTBg"])
          }), (0, l.jsx)(d.R94, {
            type: d.geA.DESCRIPTION,
            children: O.intl.string(O.t.Iv9RGh)
          })]
        }), (0, l.jsx)(b.Z, {
          emoji: Z,
          setEmoji: k,
          channel: E
        })]
      })]
    }), (0, l.jsx)(c.G, {
      actions: K,
      leading: (0, l.jsx)(d.Avr, {
        text: O.intl.string(O.t.N86XcH),
        onClick: () => {
          h(), n()
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
  } = e, i = (0, s.e7)([h.Z], () => h.Z.getManyRoles(t.id, n).find(x.F));
  return null == i ? null : (0, l.jsx)("div", {
    className: C.notice,
    children: (0, l.jsxs)("div", {
      className: C.noticeMessage,
      children: [(0, l.jsx)(d.Mgn, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        className: C.noticeIcon
      }), (0, l.jsx)(d.Text, {
        variant: "text-sm/normal",
        children: O.intl.format(O.t["5zPJER"], {
          permissions: (0, x.i)(t, i).join(", ")
        })
      })]
    })
  })
}