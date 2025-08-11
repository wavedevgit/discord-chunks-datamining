/** Chunk was on 76233 **/
/** chunk id: 171494, original params: t,n,l (module,exports,require) **/
require.d(exports, {
  default: () => k
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk91176 = require("./91176.js"),
  Chunk493773 = require("./493773.js"),
  Chunk906732 = require("./906732.js"),
  Chunk346486 = require("./346486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk71619 = require("./71619.js"),
  Chunk590433 = require("./590433.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk209564 = require("./209564.js");

function k(t) {
  var n, l;
  let {
    guildId: k,
    userId: v,
    anaylticsLocations: y,
    transitionState: T,
    onClose: g
  } = t, {
    analyticsLocations: x
  } = (0, c.ZP)(), D = null != (l = null != (n = null == y ? true : y[0]) ? n : null == x ? true : x[0]) ? l : null, S = (0, e.e7)([m.default], () => m.default.getUser(v), [v]), [Z, _] = (0, p.ZP)(v, k), [E, N] = i.useState(false), U = i.useCallback(async () => {
    if (null != S) {
      N(true);
      try {
        await u.Z.setCommunicationDisabledDuration(k, v, null, null, D), (0, s.showToast)((0, s.createToast)(h.intl.string(h.t["/Mmbfn"]), s.ToastType.SUCCESS)), g()
      } catch (t) {
        (0, s.showToast)((0, s.createToast)(h.intl.string(h.t.epyCur), s.ToastType.FAILURE))
      } finally {
        N(false)
      }
    }
  }, [k, S, v, g, D]), I = i.useCallback(() => {
    _ || g()
  }, [_, g]);
  return ((0, r.ZP)(() => {
    null != S && f.default.track(b.rMx.OPEN_MODAL, {
      type: C.av,
      guild_id: k,
      other_user_id: S.id
    })
  }), i.useEffect(() => {
    (null == S || null == k) && g()
  }), null == S || null == k) ? null : <o.Modal transitionState={T} onClose={g} title={h.intl.string(h.t["+ZD3oq"])} subtitle={h.intl.format(h.t["t+abNT"], {
      username: S.username,
      countdown: t => null == Z ? null : (0, a.jsx)(d.Z, {
        className: w.countdown,
        deadline: new Date(Z),
        onInterval: I,
        showUnits: true,
        stopAtOneSec: true
      })
    })} actions={[{
      text: h.intl.string(h.t["ETE/oK"]),
      onClick: g,
      variant: "secondary"
    }, {
      text: h.intl.string(h.t.qXtNtb),
      onClick: U,
      loading: E,
      variant: "critical-primary"
    }]}><s.Text variant={"text-md/normal"} color={"interactive-normal"}>{h.intl.format(h.t.KtENkJ, {
        link: C.cu
      })}</s.Text></o.Modal>
}