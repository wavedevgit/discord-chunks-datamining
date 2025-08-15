/** Chunk was on 72920 **/
/** chunk id: 109730, original params: t,e,l (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk764295 = require("./764295.js"),
  Chunk678437 = require("./678437.js");

function U(t) {
  return {
    value: t,
    get label() {
      return (0, O.L9)(t)
    }
  }
}
let N = [U(Chunk590433.UK.DURATION_60_SEC), U(Chunk590433.UK.DURATION_5_MIN), U(Chunk590433.UK.DURATION_10_MIN), U(Chunk590433.UK.DURATION_1_HOUR), U(Chunk590433.UK.DURATION_1_DAY), U(Chunk590433.UK.DURATION_1_WEEK)];

function f(t) {
  var e, l;
  let {
    guildId: U,
    userId: f,
    anaylticsLocations: v,
    transitionState: R,
    onClose: I,
    modReportId: y
  } = t, {
    analyticsLocations: D
  } = (0, d.ZP)(), A = null != (l = null != (e = null == v ? true : v[0]) ? e : null == D ? true : D[0]) ? l : null, j = (0, a.e7)([g.default], () => g.default.getUser(f), [f]), [K, b] = s.useState(O.UK.DURATION_60_SEC), [M, Z] = s.useState(""), [k, P] = s.useState(false), [w, B] = s.useState(false), L = (0, a.e7)([h.Z], () => {
    var t;
    return null == (t = h.Z.getChannel(y)) ? true : t.isArchivedThread()
  }), q = (0, _.sE)(U, {
    location: A,
    targetUserId: f
  }), W = s.useCallback(async () => {
    if (null != j) {
      P(true);
      try {
        await c.Z.setCommunicationDisabledDuration(U, f, K, M, A, y), w && null != y && T.Z.resolveFlag(y), q(_.jQ.TIMEOUT), (0, o.showToast)((0, o.createToast)(E.intl.formatToPlainString(E.t.O9C3Nj, {
          user: p.ZP.getName(U, null, j)
        }), o.ToastType.SUCCESS)), I()
      } catch (t) {
        (0, o.showToast)((0, o.createToast)(E.intl.string(E.t.epyCur), o.ToastType.FAILURE))
      } finally {
        P(false)
      }
    }
  }, [U, j, f, I, K, M, A, q, y, w]);
  return ((0, u.ZP)(() => {
    null != j && x.default.track(m.rMx.OPEN_MODAL, {
      type: O.Cl,
      guild_id: U,
      other_user_id: j.id
    })
  }), s.useEffect(() => {
    (null == j || null == U) && I()
  }, [U, j, I]), null == j || null == U) ? null : (0, n.jsx)(r.Modal, {
    transitionState: R,
    title: E.intl.formatToPlainString(E.t.OhsOy8, {
      user: p.ZP.getName(U, null, j)
    }),
    subtitle: E.intl.format(E.t.Ns83GR, {
      helpdeskArticle: O.cu
    }),
    actions: [{
      text: E.intl.string(E.t["ETE/oK"]),
      onClick: I,
      variant: "secondary"
    }, {
      text: E.intl.string(E.t.MlPTIi),
      onClick: W,
      loading: k
    }],
    actionBarInput: null == y || L ? true : (0, n.jsx)(o.XZJ, {
      value: w,
      onChange: (t, e) => {
        B(e)
      },
      children: E.intl.string(C.default["8yIKen"])
    }),
    onClose: I,
    children: (0, n.jsxs)(o.Kqy, {
      gap: 16,
      children: [(0, n.jsxs)(o.Kqy, {
        gap: 8,
        children: [(0, n.jsx)(o.X6q, {
          variant: "heading-sm/semibold",
          children: E.intl.string(E.t["9XsExs"])
        }), (0, n.jsx)(i.hE, {
          buttons: N.map(t => (function(t, e, l) {
            let {
              value: s,
              label: a
            } = t;
            return {
              content: (0, n.jsx)(o.Text, {
                variant: "text-sm/semibold",
                className: e ? S.selectorTextSelected : S.selectorText,
                children: a
              }),
              className: e ? S.selectorButtonSelected : S.selectorButton,
              onClick: () => l(s)
            }
          })(t, t.value === K, b))
        })]
      }), (0, n.jsxs)(o.Kqy, {
        gap: 8,
        children: [(0, n.jsx)(o.X6q, {
          variant: "heading-sm/semibold",
          children: E.intl.string(E.t.ewHW19)
        }), (0, n.jsx)(o.Kx8, {
          value: M,
          onChange: t => Z(t),
          placeholder: E.intl.string(E.t.GakiHx),
          rows: 4,
          maxLength: O.GN
        })]
      })]
    })
  })
}