/** Chunk was on 62684 **/
/** chunk id: 228855, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => D
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk731738 = require("./731738.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk831062 = require("./831062.js"),
  Chunk253932 = require("./253932.js"),
  Chunk71393 = require("./71393.js"),
  Chunk115063 = require("./115063.js"),
  Chunk360966 = require("./360966.js"),
  Chunk386936 = require("./386936.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk818639 = require("./818639.js");

function D(t) {
  let {
    transitionState: e,
    guildId: i,
    onClose: D
  } = t, p = (0, s.bG)([S.A], () => S.A.getGuild(i));
  if (l.useEffect(() => {
      (0, g.Q)(i), (0, _.$)(_.s.MODAL_VIEWED, i), o.A.increment({
        name: a.K.DM_SETTINGS_UPSELL_VIEW
      })
    }, [i]), null == p) return null;
  let T = t => {
    t.preventDefault();
    let e = (0, A.Tb)();
    e.add(i), c.$s.updateSetting(Array.from(e)).then(() => (0, u.showToast)((0, u.createToast)(f.intl.string(f.t.rlYD1W), u.ToastType.SUCCESS))), D(), (0, _.$)(_.s.MODAL_DISABLED_DMS, i)
  };
  return (0, n.jsx)("form", {
    onSubmit: T,
    children: (0, n.jsx)(r.Modal, {
      transitionState: e,
      onClose: D,
      title: f.intl.string(f.t.w2BvnL),
      subtitle: f.intl.format(f.t.Depjkv, {
        guild_name: p.name
      }),
      actions: [{
        text: f.intl.string(f.t.PsWbcp),
        onClick: () => {
          D(), (0, _.$)(_.s.MODAL_DISMISSED, i)
        },
        variant: "secondary"
      }, {
        text: f.intl.string(f.t.TD7iUx),
        onClick: T
      }],
      children: (0, n.jsxs)(u.BJc, {
        direction: "vertical",
        gap: 8,
        children: [(0, n.jsx)(u.Text, {
          variant: "text-md/medium",
          color: "text-muted",
          children: f.intl.string(f.t.KPB2iw)
        }), (0, n.jsx)("div", {
          className: m.bo,
          children: (0, n.jsxs)("div", {
            className: m.OA,
            children: [(0, n.jsx)(d.A, {
              guild: p,
              size: d.A.Sizes.SMALL
            }), (0, n.jsx)(u.Text, {
              className: m.J5,
              variant: "text-md/semibold",
              children: p.name
            })]
          })
        })]
      })
    })
  })
}