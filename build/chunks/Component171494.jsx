/** Chunk was on 76233 **/
/** chunk id: 171494, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk91176 = require("./91176.js"),
  Chunk493773 = require("./493773.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk346486 = require("./346486.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk71619 = require("./71619.js"),
  Chunk590433 = require("./590433.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk266973 = require("./266973.js");

function g(t) {
  var n, e;
  let {
    guildId: g,
    userId: w,
    anaylticsLocations: C,
    transitionState: x,
    onClose: D
  } = t, {
    analyticsLocations: k
  } = (0, c.ZP)(), _ = null != (e = null != (n = null == C ? true : C[0]) ? n : null == k ? true : k[0]) ? e : null, T = (0, s.e7)([h.default], () => h.default.getUser(w), [w]), [S, U] = (0, f.ZP)(w, g), [Z, E] = i.useState(false), P = i.useCallback(async () => {
    if (null != T) {
      E(true);
      try {
        await o.Z.setCommunicationDisabledDuration(g, w, null, null, _), (0, r.showToast)((0, r.createToast)(b.intl.string(b.t["/Mmbfv"]), r.ToastType.SUCCESS)), D()
      } catch (t) {
        (0, r.showToast)((0, r.createToast)(b.intl.string(b.t.epyCuh), r.ToastType.FAILURE))
      } finally {
        E(false)
      }
    }
  }, [g, T, w, D, _]), j = i.useCallback(() => {
    U || D()
  }, [U, D]);
  return ((0, u.ZP)(() => {
    null != T && p.default.track(v.rMx.OPEN_MODAL, {
      type: m.av,
      guild_id: g,
      other_user_id: T.id
    })
  }), i.useEffect(() => {
    (null == T || null == g) && D()
  }), null == T || null == g) ? null : (0, l.jsx)(a.Modal, {
    transitionState: x,
    onClose: D,
    title: b.intl.string(b.t["+ZD3ou"]),
    subtitle: b.intl.format(b.t["t+abNU"], {
      username: T.username,
      countdown: t => null == S ? null : (0, l.jsx)(d.Z, {
        className: y.countdown,
        deadline: new Date(S),
        onInterval: j,
        showUnits: true,
        stopAtOneSec: true
      })
    }),
    actions: [{
      text: b.intl.string(b.t["ETE/oC"]),
      onClick: D,
      variant: "secondary"
    }, {
      text: b.intl.string(b.t.qXtNtS),
      onClick: P,
      loading: Z,
      variant: "critical-primary"
    }],
    children: (0, l.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "interactive-normal",
      children: b.intl.format(b.t.KtENkK, {
        link: m.cu
      })
    })
  })
}