/** Chunk was on 94390 **/
/** chunk id: 524085, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk262577 = require("./262577.js"),
  Chunk964486 = require("./964486.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk504049 = require("./504049.js"),
  Chunk226698 = require("./226698.js"),
  Chunk734057 = require("./734057.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk562153 = require("./562153.js"),
  Chunk200700 = require("./200700.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk641131 = require("./641131.js"),
  Chunk471053 = require("./471053.js");

function S(t) {
  return {
    value: t,
    get label() {
      return (0, g.getFriendlyDurationString)(t)
    }
  }
}
let f = [S(Chunk200700.DisableCommunicationDuration.DURATION_60_SEC), S(Chunk200700.DisableCommunicationDuration.DURATION_5_MIN), S(Chunk200700.DisableCommunicationDuration.DURATION_10_MIN), S(Chunk200700.DisableCommunicationDuration.DURATION_1_HOUR), S(Chunk200700.DisableCommunicationDuration.DURATION_1_DAY), S(Chunk200700.DisableCommunicationDuration.DURATION_1_WEEK)];

function p(t) {
  var e, n;
  let {
    guildId: S,
    userId: p,
    anaylticsLocations: I,
    transitionState: M,
    onClose: R,
    modReportId: y
  } = t, {
    analyticsLocations: N
  } = (0, _.Ay)(), v = null != (e = null != (n = null == I ? true : I[0]) ? n : null == N ? true : N[0]) ? e : null, U = (0, o.bG)([m.default], () => m.default.getUser(p), [p]), [k, j] = a.useState(g.DisableCommunicationDuration.DURATION_60_SEC), [x, w] = a.useState(""), [H, B] = a.useState(false), [L, P] = a.useState(false), F = (0, o.bG)([E.A], () => {
    var t;
    return null == (t = E.A.getChannel(y)) ? true : t.isArchivedThread()
  }), G = (0, d.$9)(S, {
    location: v,
    targetUserId: p
  }), K = a.useCallback(async () => {
    if (null != U) {
      B(true);
      try {
        await s.A.setCommunicationDisabledDuration(S, p, k, x, v, y), L && null != y && A.A.resolveFlag(y), G(d.Nj.TIMEOUT), (0, u.showToast)((0, u.createToast)(C.intl.formatToPlainString(C.t.O9C3Nt, {
          user: D.Ay.getName(S, null, U)
        }), u.ToastType.SUCCESS)), R()
      } catch (t) {
        (0, u.showToast)((0, u.createToast)(C.intl.string(C.t.epyCuh), u.ToastType.FAILURE))
      } finally {
        B(false)
      }
    }
  }, [S, U, p, R, k, x, v, G, y, L]);
  return ((0, c.Ay)(() => {
    null != U && T.default.track(O.HAw.OPEN_MODAL, {
      type: g.aZ,
      guild_id: S,
      other_user_id: U.id
    })
  }), a.useEffect(() => {
    (null == U || null == S) && R()
  }, [S, U, R]), null == U || null == S) ? null : (0, l.jsx)(i.Modal, {
    transitionState: M,
    title: C.intl.formatToPlainString(C.t.OhsOy0, {
      user: D.Ay.getName(S, null, U)
    }),
    subtitle: C.intl.format(C.t.Ns83GT, {
      helpdeskArticle: g.MO
    }),
    actions: [{
      text: C.intl.string(C.t["ETE/oC"]),
      onClick: R,
      variant: "secondary"
    }, {
      text: C.intl.string(C.t.MlPTIi),
      onClick: K,
      loading: H
    }],
    actionBarInput: null == y || F ? true : (0, l.jsx)(u.Checkbox, {
      checked: L,
      onChange: t => P(t),
      labelType: "secondary",
      label: C.intl.string(b.default["8yIKem"])
    }),
    onClose: R,
    children: (0, l.jsxs)(u.BJc, {
      gap: 16,
      children: [(0, l.jsxs)(u.BJc, {
        gap: 8,
        children: [(0, l.jsx)(u.Heading, {
          variant: "heading-sm/semibold",
          children: C.intl.string(C.t["9XsExm"])
        }), (0, l.jsx)(r.e2, {
          buttons: f.map(t => (function(t, e, n) {
            let {
              value: a,
              label: i
            } = t;
            return {
              content: (0, l.jsx)(u.Text, {
                variant: "text-sm/semibold",
                className: e ? h.u$ : h.nM,
                children: i
              }),
              className: e ? h.XZ : h.aK,
              onClick: () => n(a)
            }
          })(t, t.value === k, j))
        })]
      }), (0, l.jsxs)(u.BJc, {
        gap: 8,
        children: [(0, l.jsx)(u.Heading, {
          variant: "heading-sm/semibold",
          children: C.intl.string(C.t.ewHW15)
        }), (0, l.jsx)(u.fs1, {
          value: x,
          onChange: t => w(t),
          placeholder: C.intl.string(C.t.GakiH1),
          rows: 4,
          maxLength: g.hl
        })]
      })]
    })
  })
}