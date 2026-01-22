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
  } = t, b = (0, r.bG)([m.A], () => m.A.getGuild(i));
  if (s.useEffect(() => {
      (0, S.Q)(i), (0, f.$)(f.s.MODAL_VIEWED, i), o.A.increment({
        name: a.K.DM_SETTINGS_UPSELL_VIEW
      })
    }, [i]), null == b) return null;
  let A = t => {
    t.preventDefault();
    let e = (0, x.Tb)();
    e.add(i), u.$s.updateSetting(Array.from(e)).then(() => (0, c.showToast)((0, c.createToast)(h.intl.string(h.t.rlYD1W), c.ToastType.SUCCESS))), D(), (0, f.$)(f.s.MODAL_DISABLED_DMS, i)
  };
  return (0, n.jsx)("form", {
    onSubmit: A,
    children: (0, n.jsx)(l.Modal, {
      transitionState: e,
      onClose: D,
      title: h.intl.string(h.t.w2BvnL),
      subtitle: h.intl.format(h.t.Depjkv, {
        guild_name: b.name
      }),
      actions: [{
        text: h.intl.string(h.t.PsWbcp),
        onClick: () => {
          D(), (0, f.$)(f.s.MODAL_DISMISSED, i)
        },
        variant: "secondary"
      }, {
        text: h.intl.string(h.t.TD7iUx),
        onClick: A
      }],
      children: (0, n.jsxs)(c.BJc, {
        direction: "vertical",
        gap: 8,
        children: [(0, n.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "text-muted",
          children: h.intl.string(h.t.KPB2iw)
        }), (0, n.jsx)("div", {
          className: p.bo,
          children: (0, n.jsxs)("div", {
            className: p.OA,
            children: [(0, n.jsx)(d.A, {
              guild: b,
              size: d.A.Sizes.SMALL
            }), (0, n.jsx)(c.Text, {
              className: p.J5,
              variant: "text-md/semibold",
              children: b.name
            })]
          })
        })]
      })
    })
  })
}