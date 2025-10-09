/** Chunk was on 72920 **/
/** chunk id: 109730, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk764295 = require("./764295.js"),
  Chunk678437 = require("./678437.js");

function M(t) {
  return {
    value: t,
    get label() {
      return (0, O.getFriendlyDurationString)(t)
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
    analyticsLocations: x
  } = (0, d.ZP)(), y = null != (n = null != (e = null == I ? true : I[0]) ? e : null == x ? true : x[0]) ? n : null, v = (0, o.e7)([m.default], () => m.default.getUser(h), [h]), [U, k] = i.useState(O.DisableCommunicationDuration.DURATION_60_SEC), [j, P] = i.useState(""), [B, L] = i.useState(false), [Z, w] = i.useState(false), H = (0, o.e7)([T.Z], () => {
    var t;
    return null == (t = T.Z.getChannel(R)) ? true : t.isArchivedThread()
  }), F = (0, _.sE)(M, {
    location: y,
    targetUserId: h
  }), K = i.useCallback(async () => {
    if (null != v) {
      L(true);
      try {
        await c.Z.setCommunicationDisabledDuration(M, h, U, j, y, R), Z && null != R && E.Z.resolveFlag(R), F(_.jQ.TIMEOUT), (0, u.showToast)((0, u.createToast)(C.intl.formatToPlainString(C.t.O9C3Nj, {
          user: D.ZP.getName(M, null, v)
        }), u.ToastType.SUCCESS)), N()
      } catch (t) {
        (0, u.showToast)((0, u.createToast)(C.intl.string(C.t.epyCur), u.ToastType.FAILURE))
      } finally {
        L(false)
      }
    }
  }, [M, v, h, N, U, j, y, F, R, Z]);
  return ((0, s.ZP)(() => {
    null != v && g.default.track(A.rMx.OPEN_MODAL, {
      type: O.Cl,
      guild_id: M,
      other_user_id: v.id
    })
  }), i.useEffect(() => {
    (null == v || null == M) && N()
  }, [M, v, N]), null == v || null == M) ? null : (0, l.jsx)(a.Modal, {
    transitionState: p,
    title: C.intl.formatToPlainString(C.t.OhsOy8, {
      user: D.ZP.getName(M, null, v)
    }),
    subtitle: C.intl.format(C.t.Ns83GR, {
      helpdeskArticle: O.cu
    }),
    actions: [{
      text: C.intl.string(C.t["ETE/oK"]),
      onClick: N,
      variant: "secondary"
    }, {
      text: C.intl.string(C.t.MlPTIi),
      onClick: K,
      loading: B
    }],
    actionBarInput: null == R || H ? true : (0, l.jsx)(u.Checkbox, {
      checked: Z,
      onChange: t => w(t),
      labelType: "secondary",
      label: C.intl.string(S.default["8yIKen"])
    }),
    onClose: N,
    children: (0, l.jsxs)(u.Kqy, {
      gap: 16,
      children: [(0, l.jsxs)(u.Kqy, {
        gap: 8,
        children: [(0, l.jsx)(u.Heading, {
          variant: "heading-sm/semibold",
          children: C.intl.string(C.t["9XsExs"])
        }), (0, l.jsx)(r.hE, {
          buttons: f.map(t => (function(t, e, n) {
            let {
              value: i,
              label: a
            } = t;
            return {
              content: (0, l.jsx)(u.Text, {
                variant: "text-sm/semibold",
                className: e ? b.selectorTextSelected : b.selectorText,
                children: a
              }),
              className: e ? b.selectorButtonSelected : b.selectorButton,
              onClick: () => n(i)
            }
          })(t, t.value === U, k))
        })]
      }), (0, l.jsxs)(u.Kqy, {
        gap: 8,
        children: [(0, l.jsx)(u.Heading, {
          variant: "heading-sm/semibold",
          children: C.intl.string(C.t.ewHW19)
        }), (0, l.jsx)(u.Kx8, {
          value: j,
          onChange: t => P(t),
          placeholder: C.intl.string(C.t.GakiHx),
          rows: 4,
          maxLength: O.GN
        })]
      })]
    })
  })
}