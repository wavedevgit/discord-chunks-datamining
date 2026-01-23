/** Chunk was on 62684 **/
/** chunk id: 228855, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => b
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

function b(t) {
  let {
    transitionState: e,
    guildId: i,
    onClose: b
  } = t, g = (0, r.bG)([m.A], () => m.A.getGuild(i));
  if (s.useEffect(() => {
      (0, S.Q)(i), (0, h.$)(h.s.MODAL_VIEWED, i), o.A.increment({
        name: l.K.DM_SETTINGS_UPSELL_VIEW
      })
    }, [i]), null == g) return null;
  let A = t => {
    t.preventDefault();
    let e = (0, x.Tb)();
    e.add(i), u.$s.updateSetting(Array.from(e)).then(() => (0, d.showToast)((0, d.createToast)(p.intl.string(p.t.rlYD1W), d.ToastType.SUCCESS))), b(), (0, h.$)(h.s.MODAL_DISABLED_DMS, i)
  };
  return (0, n.jsx)("form", {
    onSubmit: A,
    children: (0, n.jsx)(a.Modal, {
      transitionState: e,
      onClose: b,
      title: p.intl.string(p.t.w2BvnL),
      subtitle: p.intl.format(p.t.Depjkv, {
        guild_name: g.name
      }),
      actions: [{
        text: p.intl.string(p.t.PsWbcp),
        onClick: () => {
          b(), (0, h.$)(h.s.MODAL_DISMISSED, i)
        },
        variant: "secondary"
      }, {
        text: p.intl.string(p.t.TD7iUx),
        onClick: A
      }],
      children: (0, n.jsxs)(d.BJc, {
        direction: "vertical",
        gap: 8,
        children: [(0, n.jsx)(d.Text, {
          variant: "text-md/medium",
          color: "text-muted",
          children: p.intl.string(p.t.KPB2iw)
        }), (0, n.jsx)("div", {
          className: D.bo,
          children: (0, n.jsxs)("div", {
            className: D.OA,
            children: [(0, n.jsx)(c.A, {
              guild: g,
              size: c.A.Sizes.SMALL
            }), (0, n.jsx)(d.Text, {
              className: D.J5,
              variant: "text-md/semibold",
              children: g.name
            })]
          })
        })]
      })
    })
  })
}