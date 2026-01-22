/** Chunk was on 94390 **/
/** chunk id: 524085, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => I
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

function f(t) {
  return {
    value: t,
    get label() {
      return (0, T.getFriendlyDurationString)(t)
    }
  }
}
let p = [f(Chunk200700.DisableCommunicationDuration.DURATION_60_SEC), f(Chunk200700.DisableCommunicationDuration.DURATION_5_MIN), f(Chunk200700.DisableCommunicationDuration.DURATION_10_MIN), f(Chunk200700.DisableCommunicationDuration.DURATION_1_HOUR), f(Chunk200700.DisableCommunicationDuration.DURATION_1_DAY), f(Chunk200700.DisableCommunicationDuration.DURATION_1_WEEK)];

function I(t) {
  var e, n;
  let {
    guildId: f,
    userId: I,
    anaylticsLocations: M,
    transitionState: R,
    onClose: S,
    modReportId: y
  } = t, {
    analyticsLocations: N
  } = (0, d.Ay)(), v = null != (e = null != (n = null == M ? true : M[0]) ? n : null == N ? true : N[0]) ? e : null, U = (0, r.bG)([m.default], () => m.default.getUser(I), [I]), [k, j] = i.useState(T.DisableCommunicationDuration.DURATION_60_SEC), [w, x] = i.useState(""), [H, L] = i.useState(false), [P, B] = i.useState(false), F = (0, r.bG)([E.A], () => {
    var t;
    return null == (t = E.A.getChannel(y)) ? true : t.isArchivedThread()
  }), G = (0, _.$9)(f, {
    location: v,
    targetUserId: I
  }), K = i.useCallback(async () => {
    if (null != U) {
      L(true);
      try {
        await s.A.setCommunicationDisabledDuration(f, I, k, w, v, y), P && null != y && A.A.resolveFlag(y), G(_.Nj.TIMEOUT), (0, u.showToast)((0, u.createToast)(O.intl.formatToPlainString(O.t.O9C3Nt, {
          user: D.Ay.getName(f, null, U)
        }), u.ToastType.SUCCESS)), S()
      } catch (t) {
        (0, u.showToast)((0, u.createToast)(O.intl.string(O.t.epyCuh), u.ToastType.FAILURE))
      } finally {
        L(false)
      }
    }
  }, [f, U, I, S, k, w, v, G, y, P]);
  return ((0, c.Ay)(() => {
    null != U && b.default.track(g.HAw.OPEN_MODAL, {
      type: T.aZ,
      guild_id: f,
      other_user_id: U.id
    })
  }), i.useEffect(() => {
    (null == U || null == f) && S()
  }, [f, U, S]), null == U || null == f) ? null : (0, a.jsx)(l.Modal, {
    transitionState: R,
    title: O.intl.formatToPlainString(O.t.OhsOy0, {
      user: D.Ay.getName(f, null, U)
    }),
    subtitle: O.intl.format(O.t.Ns83GT, {
      helpdeskArticle: T.MO
    }),
    actions: [{
      text: O.intl.string(O.t["ETE/oC"]),
      onClick: S,
      variant: "secondary"
    }, {
      text: O.intl.string(O.t.MlPTIi),
      onClick: K,
      loading: H
    }],
    actionBarInput: null == y || F ? true : (0, a.jsx)(u.Checkbox, {
      checked: P,
      onChange: t => B(t),
      labelType: "secondary",
      label: O.intl.string(C.default["8yIKem"])
    }),
    onClose: S,
    children: (0, a.jsxs)(u.BJc, {
      gap: 16,
      children: [(0, a.jsxs)(u.BJc, {
        gap: 8,
        children: [(0, a.jsx)(u.Heading, {
          variant: "heading-sm/semibold",
          children: O.intl.string(O.t["9XsExm"])
        }), (0, a.jsx)(o.e2, {
          buttons: p.map(t => (function(t, e, n) {
            let {
              value: i,
              label: l
            } = t;
            return {
              content: (0, a.jsx)(u.Text, {
                variant: "text-sm/semibold",
                className: e ? h.u$ : h.nM,
                children: l
              }),
              className: e ? h.XZ : h.aK,
              onClick: () => n(i)
            }
          })(t, t.value === k, j))
        })]
      }), (0, a.jsxs)(u.BJc, {
        gap: 8,
        children: [(0, a.jsx)(u.Heading, {
          variant: "heading-sm/semibold",
          children: O.intl.string(O.t.ewHW15)
        }), (0, a.jsx)(u.fs1, {
          value: w,
          onChange: t => x(t),
          placeholder: O.intl.string(O.t.GakiH1),
          rows: 4,
          maxLength: T.hl
        })]
      })]
    })
  })
}