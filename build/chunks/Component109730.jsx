/** Chunk was on 72920 **/
/** chunk id: 109730, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
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
  Chunk162085 = require("./162085.js"),
  Chunk32930 = require("./32930.js");

function M(t) {
  return {
    value: t,
    get label() {
      return (0, D.getFriendlyDurationString)(t)
    }
  }
}
let f = [M(Chunk590433.DisableCommunicationDuration.DURATION_60_SEC), M(Chunk590433.DisableCommunicationDuration.DURATION_5_MIN), M(Chunk590433.DisableCommunicationDuration.DURATION_10_MIN), M(Chunk590433.DisableCommunicationDuration.DURATION_1_HOUR), M(Chunk590433.DisableCommunicationDuration.DURATION_1_DAY), M(Chunk590433.DisableCommunicationDuration.DURATION_1_WEEK)];

function h(t) {
  var e, n;
  let {
    guildId: M,
    userId: h,
    anaylticsLocations: I,
    transitionState: p,
    onClose: N,
    modReportId: R
  } = t, {
    analyticsLocations: y
  } = (0, d.ZP)(), v = null != (n = null != (e = null == I ? true : I[0]) ? e : null == y ? true : y[0]) ? n : null, x = (0, o.e7)([m.default], () => m.default.getUser(h), [h]), [U, k] = i.useState(D.DisableCommunicationDuration.DURATION_60_SEC), [j, P] = i.useState(""), [B, L] = i.useState(false), [Z, w] = i.useState(false), H = (0, o.e7)([T.Z], () => {
    var t;
    return null == (t = T.Z.getChannel(R)) ? true : t.isArchivedThread()
  }), F = (0, _.sE)(M, {
    location: v,
    targetUserId: h
  }), G = i.useCallback(async () => {
    if (null != x) {
      L(true);
      try {
        await c.Z.setCommunicationDisabledDuration(M, h, U, j, v, R), Z && null != R && E.Z.resolveFlag(R), F(_.jQ.TIMEOUT), (0, u.showToast)((0, u.createToast)(C.intl.formatToPlainString(C.t.O9C3Nt, {
          user: g.ZP.getName(M, null, x)
        }), u.ToastType.SUCCESS)), N()
      } catch (t) {
        (0, u.showToast)((0, u.createToast)(C.intl.string(C.t.epyCuh), u.ToastType.FAILURE))
      } finally {
        L(false)
      }
    }
  }, [M, x, h, N, U, j, v, F, R, Z]);
  return ((0, s.ZP)(() => {
    null != x && b.default.track(O.rMx.OPEN_MODAL, {
      type: D.Cl,
      guild_id: M,
      other_user_id: x.id
    })
  }), i.useEffect(() => {
    (null == x || null == M) && N()
  }, [M, x, N]), null == x || null == M) ? null : (0, l.jsx)(a.Modal, {
    transitionState: p,
    title: C.intl.formatToPlainString(C.t.OhsOy0, {
      user: g.ZP.getName(M, null, x)
    }),
    subtitle: C.intl.format(C.t.Ns83GT, {
      helpdeskArticle: D.cu
    }),
    actions: [{
      text: C.intl.string(C.t["ETE/oC"]),
      onClick: N,
      variant: "secondary"
    }, {
      text: C.intl.string(C.t.MlPTIi),
      onClick: G,
      loading: B
    }],
    actionBarInput: null == R || H ? true : (0, l.jsx)(u.Checkbox, {
      checked: Z,
      onChange: t => w(t),
      labelType: "secondary",
      label: C.intl.string(A.default["8yIKem"])
    }),
    onClose: N,
    children: (0, l.jsxs)(u.Kqy, {
      gap: 16,
      children: [(0, l.jsxs)(u.Kqy, {
        gap: 8,
        children: [(0, l.jsx)(u.Heading, {
          variant: "heading-sm/semibold",
          children: C.intl.string(C.t["9XsExm"])
        }), (0, l.jsx)(r.hE, {
          buttons: f.map(t => (function(t, e, n) {
            let {
              value: i,
              label: a
            } = t;
            return {
              content: (0, l.jsx)(u.Text, {
                variant: "text-sm/semibold",
                className: e ? S.selectorTextSelected : S.selectorText,
                children: a
              }),
              className: e ? S.selectorButtonSelected : S.selectorButton,
              onClick: () => n(i)
            }
          })(t, t.value === U, k))
        })]
      }), (0, l.jsxs)(u.Kqy, {
        gap: 8,
        children: [(0, l.jsx)(u.Heading, {
          variant: "heading-sm/semibold",
          children: C.intl.string(C.t.ewHW15)
        }), (0, l.jsx)(u.Kx8, {
          value: j,
          onChange: t => P(t),
          placeholder: C.intl.string(C.t.GakiH1),
          rows: 4,
          maxLength: D.GN
        })]
      })]
    })
  })
}