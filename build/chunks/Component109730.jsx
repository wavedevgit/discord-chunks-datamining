/** Chunk was on 72920 **/
/** chunk id: 109730, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => U
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk91176 = require("./91176.js"),
  Chunk493773 = require("./493773.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk910693 = require("./910693.js"),
  Chunk501517 = require("./501517.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk5192 = require("./5192.js"),
  Chunk590433 = require("./590433.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk130883 = require("./130883.js"),
  Chunk678960 = require("./678960.js");

function M(t) {
  return {
    value: t,
    get label() {
      return (0, S.L9)(t)
    }
  }
}
let h = [M(Chunk590433.UK.DURATION_60_SEC), M(Chunk590433.UK.DURATION_5_MIN), M(Chunk590433.UK.DURATION_10_MIN), M(Chunk590433.UK.DURATION_1_HOUR), M(Chunk590433.UK.DURATION_1_DAY), M(Chunk590433.UK.DURATION_1_WEEK)];

function U(t) {
  var e, n;
  let {
    guildId: M,
    userId: U,
    anaylticsLocations: D,
    transitionState: x,
    onClose: N,
    modReportId: v
  } = t, {
    analyticsLocations: b
  } = (0, _.ZP)(), p = null != (n = null != (e = null == D ? true : D[0]) ? e : null == b ? true : b[0]) ? n : null, y = (0, i.e7)([g.default], () => g.default.getUser(U), [U]), [R, k] = a.useState(S.UK.DURATION_60_SEC), [j, B] = a.useState(""), [K, P] = a.useState(false), [L, Z] = a.useState(false), w = (0, i.e7)([T.Z], () => {
    var t;
    return null == (t = T.Z.getChannel(v)) ? true : t.isArchivedThread()
  }), H = (0, d.sE)(M, {
    location: p,
    targetUserId: U
  }), F = a.useCallback(async () => {
    if (null != y) {
      P(true);
      try {
        await s.Z.setCommunicationDisabledDuration(M, U, R, j, p, v), L && null != v && E.Z.resolveFlag(v), H(d.jQ.TIMEOUT), (0, u.showToast)((0, u.createToast)(m.intl.formatToPlainString(m.t.O9C3Nj, {
          user: O.ZP.getName(M, null, y)
        }), u.ToastType.SUCCESS)), N()
      } catch (t) {
        (0, u.showToast)((0, u.createToast)(m.intl.string(m.t.epyCur), u.ToastType.FAILURE))
      } finally {
        P(false)
      }
    }
  }, [M, y, U, N, R, j, p, H, v, L]);
  return ((0, c.ZP)(() => {
    null != y && A.default.track(f.rMx.OPEN_MODAL, {
      type: S.Cl,
      guild_id: M,
      other_user_id: y.id
    })
  }), a.useEffect(() => {
    (null == y || null == M) && N()
  }, [M, y, N]), null == y || null == M) ? null : (0, l.jsx)(r.Modal, {
    transitionState: x,
    title: m.intl.formatToPlainString(m.t.OhsOy8, {
      user: O.ZP.getName(M, null, y)
    }),
    subtitle: m.intl.format(m.t.Ns83GR, {
      helpdeskArticle: S.cu
    }),
    actions: [{
      text: m.intl.string(m.t["ETE/oK"]),
      onClick: N,
      variant: "secondary"
    }, {
      text: m.intl.string(m.t.MlPTIi),
      onClick: F,
      loading: K
    }],
    actionBarInput: null == v || w ? true : (0, l.jsx)(u.XZJ, {
      value: L,
      onChange: (t, e) => {
        Z(e)
      },
      children: m.intl.string(C.default["8yIKen"])
    }),
    onClose: N,
    children: (0, l.jsxs)(u.Kqy, {
      gap: 16,
      children: [(0, l.jsxs)(u.Kqy, {
        gap: 8,
        children: [(0, l.jsx)(u.X6q, {
          variant: "heading-sm/semibold",
          children: m.intl.string(m.t["9XsExs"])
        }), (0, l.jsx)(o.hE, {
          buttons: h.map(t => (function(t, e, n) {
            let {
              value: a,
              label: i
            } = t;
            return {
              content: (0, l.jsx)(u.Text, {
                variant: "text-sm/semibold",
                className: e ? I.selectorTextSelected : I.selectorText,
                children: i
              }),
              className: e ? I.selectorButtonSelected : I.selectorButton,
              onClick: () => n(a)
            }
          })(t, t.value === R, k))
        })]
      }), (0, l.jsxs)(u.Kqy, {
        gap: 8,
        children: [(0, l.jsx)(u.X6q, {
          variant: "heading-sm/semibold",
          children: m.intl.string(m.t.ewHW19)
        }), (0, l.jsx)(u.Kx8, {
          value: j,
          onChange: t => B(t),
          placeholder: m.intl.string(m.t.GakiHx),
          rows: 4,
          maxLength: S.GN
        })]
      })]
    })
  })
}