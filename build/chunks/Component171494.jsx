/** Chunk was on 76233 **/
/** chunk id: 171494, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
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
  Chunk582874 = require("./582874.js");

function g(t) {
  var n, e;
  let {
    guildId: g,
    userId: w,
    anaylticsLocations: x,
    transitionState: C,
    onClose: D
  } = t, {
    analyticsLocations: k
  } = (0, c.ZP)(), T = null != (e = null != (n = null == x ? true : x[0]) ? n : null == k ? true : k[0]) ? e : null, _ = (0, a.e7)([p.default], () => p.default.getUser(w), [w]), [S, Z] = (0, f.ZP)(w, g), [E, P] = i.useState(false), U = i.useCallback(async () => {
    if (null != _) {
      P(true);
      try {
        await o.Z.setCommunicationDisabledDuration(g, w, null, null, T), (0, r.showToast)((0, r.createToast)(b.intl.string(b.t["/Mmbfn"]), r.ToastType.SUCCESS)), D()
      } catch (t) {
        (0, r.showToast)((0, r.createToast)(b.intl.string(b.t.epyCur), r.ToastType.FAILURE))
      } finally {
        P(false)
      }
    }
  }, [g, _, w, D, T]), j = i.useCallback(() => {
    Z || D()
  }, [Z, D]);
  return ((0, u.ZP)(() => {
    null != _ && h.default.track(v.rMx.OPEN_MODAL, {
      type: m.av,
      guild_id: g,
      other_user_id: _.id
    })
  }), i.useEffect(() => {
    (null == _ || null == g) && D()
  }), null == _ || null == g) ? null : (0, l.jsx)(s.Modal, {
    transitionState: C,
    onClose: D,
    title: b.intl.string(b.t["+ZD3oq"]),
    subtitle: b.intl.format(b.t["t+abNT"], {
      username: _.username,
      countdown: t => null == S ? null : (0, l.jsx)(d.Z, {
        className: y.countdown,
        deadline: new Date(S),
        onInterval: j,
        showUnits: true,
        stopAtOneSec: true
      })
    }),
    actions: [{
      text: b.intl.string(b.t["ETE/oK"]),
      onClick: D,
      variant: "secondary"
    }, {
      text: b.intl.string(b.t.qXtNtb),
      onClick: U,
      loading: E,
      variant: "critical-primary"
    }],
    children: (0, l.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "interactive-normal",
      children: b.intl.format(b.t.KtENkJ, {
        link: m.cu
      })
    })
  })
}