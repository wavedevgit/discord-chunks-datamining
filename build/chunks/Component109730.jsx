/** Chunk was on 72920 **/
/** chunk id: 109730, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => D
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

function m(t) {
  return {
    value: t,
    get label() {
      return (0, M.L9)(t)
    }
  }
}
let I = [m(Chunk590433.UK.DURATION_60_SEC), m(Chunk590433.UK.DURATION_5_MIN), m(Chunk590433.UK.DURATION_10_MIN), m(Chunk590433.UK.DURATION_1_HOUR), m(Chunk590433.UK.DURATION_1_DAY), m(Chunk590433.UK.DURATION_1_WEEK)];

function D(t) {
  var e, n;
  let {
    guildId: m,
    userId: D,
    anaylticsLocations: N,
    transitionState: R,
    onClose: p,
    modReportId: U
  } = t, {
    analyticsLocations: v
  } = (0, _.ZP)(), x = null != (n = null != (e = null == N ? true : N[0]) ? e : null == v ? true : v[0]) ? n : null, b = (0, a.e7)([O.default], () => O.default.getUser(D), [D]), [y, j] = r.useState(M.UK.DURATION_60_SEC), [k, P] = r.useState(""), [B, K] = r.useState(false), [L, Z] = r.useState(false), w = (0, a.e7)([T.Z], () => {
    var t;
    return null == (t = T.Z.getChannel(U)) ? true : t.isArchivedThread()
  }), F = (0, d.sE)(m, {
    location: x,
    targetUserId: D
  }), H = r.useCallback(async () => {
    if (null != b) {
      K(true);
      try {
        await s.Z.setCommunicationDisabledDuration(m, D, y, k, x, U), L && null != U && E.Z.resolveFlag(U), F(d.jQ.TIMEOUT), (0, u.showToast)((0, u.createToast)(f.intl.formatToPlainString(f.t.O9C3Nj, {
          user: A.ZP.getName(m, null, b)
        }), u.ToastType.SUCCESS)), p()
      } catch (t) {
        (0, u.showToast)((0, u.createToast)(f.intl.string(f.t.epyCur), u.ToastType.FAILURE))
      } finally {
        K(false)
      }
    }
  }, [m, b, D, p, y, k, x, F, U, L]);
  return ((0, c.ZP)(() => {
    null != b && g.default.track(S.rMx.OPEN_MODAL, {
      type: M.Cl,
      guild_id: m,
      other_user_id: b.id
    })
  }), r.useEffect(() => {
    (null == b || null == m) && p()
  }, [m, b, p]), null == b || null == m) ? null : (0, l.jsx)(i.Modal, {
    transitionState: R,
    title: f.intl.formatToPlainString(f.t.OhsOy8, {
      user: A.ZP.getName(m, null, b)
    }),
    subtitle: f.intl.format(f.t.Ns83GR, {
      helpdeskArticle: M.cu
    }),
    actions: [{
      text: f.intl.string(f.t["ETE/oK"]),
      onClick: p,
      variant: "secondary"
    }, {
      text: f.intl.string(f.t.MlPTIi),
      onClick: H,
      loading: B
    }],
    actionBarInput: null == U || w ? true : (0, l.jsx)(o.$q, {
      value: L,
      onChange: (t, e) => {
        Z(e)
      },
      children: f.intl.string(C.default["8yIKen"])
    }),
    onClose: p,
    children: (0, l.jsxs)(u.Kqy, {
      gap: 16,
      children: [(0, l.jsxs)(u.Kqy, {
        gap: 8,
        children: [(0, l.jsx)(u.X6q, {
          variant: "heading-sm/semibold",
          children: f.intl.string(f.t["9XsExs"])
        }), (0, l.jsx)(o.hE, {
          buttons: I.map(t => (function(t, e, n) {
            let {
              value: r,
              label: a
            } = t;
            return {
              content: (0, l.jsx)(u.Text, {
                variant: "text-sm/semibold",
                className: e ? h.selectorTextSelected : h.selectorText,
                children: a
              }),
              className: e ? h.selectorButtonSelected : h.selectorButton,
              onClick: () => n(r)
            }
          })(t, t.value === y, j))
        })]
      }), (0, l.jsxs)(u.Kqy, {
        gap: 8,
        children: [(0, l.jsx)(u.X6q, {
          variant: "heading-sm/semibold",
          children: f.intl.string(f.t.ewHW19)
        }), (0, l.jsx)(u.Kx8, {
          value: k,
          onChange: t => P(t),
          placeholder: f.intl.string(f.t.GakiHx),
          rows: 4,
          maxLength: M.GN
        })]
      })]
    })
  })
}