/** Chunk was on 31815 **/
/** chunk id: 21754, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk262577 = require("./262577.js"),
  Chunk964486 = require("./964486.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk576470 = require("./576470.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk870136 = require("./870136.js"),
  Chunk200700 = require("./200700.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk330432 = require("./330432.js");

function g(t) {
  var n, e;
  let {
    guildId: g,
    userId: w,
    anaylticsLocations: C,
    transitionState: x,
    onClose: A
  } = t, {
    analyticsLocations: k
  } = (0, d.Ay)(), D = null != (n = null != (e = null == C ? true : C[0]) ? e : null == k ? true : k[0]) ? n : null, _ = (0, s.bG)([h.default], () => h.default.getUser(w), [w]), [T, S] = (0, f.Ay)(w, g), [U, E] = a.useState(false), O = a.useCallback(async () => {
    if (null != _) {
      E(true);
      try {
        await o.A.setCommunicationDisabledDuration(g, w, null, null, D), (0, r.showToast)((0, r.createToast)(y.intl.string(y.t["/Mmbfv"]), r.ToastType.SUCCESS)), A()
      } catch (t) {
        (0, r.showToast)((0, r.createToast)(y.intl.string(y.t.epyCuh), r.ToastType.FAILURE))
      } finally {
        E(false)
      }
    }
  }, [g, _, w, A, D]), j = a.useCallback(() => {
    S || A()
  }, [S, A]);
  return ((0, u.Ay)(() => {
    null != _ && p.default.track(v.HAw.OPEN_MODAL, {
      type: m.Rv,
      guild_id: g,
      other_user_id: _.id
    })
  }), a.useEffect(() => {
    (null == _ || null == g) && A()
  }), null == _ || null == g) ? null : (0, l.jsx)(i.Modal, {
    transitionState: x,
    onClose: A,
    title: y.intl.string(y.t["+ZD3ou"]),
    subtitle: y.intl.format(y.t["t+abNU"], {
      username: _.username,
      countdown: t => null == T ? null : (0, l.jsx)(c.A, {
        className: b.q,
        deadline: new Date(T),
        onInterval: j,
        showUnits: true,
        stopAtOneSec: true
      })
    }),
    actions: [{
      text: y.intl.string(y.t["ETE/oC"]),
      onClick: A,
      variant: "secondary"
    }, {
      text: y.intl.string(y.t.qXtNtS),
      onClick: O,
      loading: U,
      variant: "critical-primary"
    }],
    children: (0, l.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "interactive-text-default",
      children: y.intl.format(y.t.KtENkK, {
        link: m.MO
      })
    })
  })
}