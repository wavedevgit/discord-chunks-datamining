/** Chunk was on 35489 **/
/** chunk id: 582712, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk286379 = require("./286379.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk797614 = require("./797614.js"),
  Chunk695346 = require("./695346.js"),
  Chunk430824 = require("./430824.js"),
  Chunk88658 = require("./88658.js"),
  Chunk401416 = require("./401416.js"),
  Chunk920133 = require("./920133.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk956051 = require("./956051.js");

function p(t) {
  let {
    transitionState: e,
    guildId: i,
    onClose: p
  } = t, D = (0, r.e7)([m.Z], () => m.Z.getGuild(i));
  if (l.useEffect(() => {
      (0, x.Y)(i), (0, S.L)(S.Q.MODAL_VIEWED, i), o.Z.increment({
        name: a.V.DM_SETTINGS_UPSELL_VIEW
      })
    }, [i]), null == D) return null;
  let _ = t => {
    t.preventDefault();
    let e = (0, g.YK)();
    e.add(i), u.h2.updateSetting(Array.from(e)).then(() => (0, d.showToast)((0, d.createToast)(h.intl.string(h.t.rlYD1W), d.ToastType.SUCCESS))), p(), (0, S.L)(S.Q.MODAL_DISABLED_DMS, i)
  };
  return (0, n.jsx)("form", {
    onSubmit: _,
    children: (0, n.jsx)(s.Modal, {
      transitionState: e,
      onClose: p,
      title: h.intl.string(h.t.w2BvnL),
      subtitle: h.intl.format(h.t.Depjkv, {
        guild_name: D.name
      }),
      actions: [{
        text: h.intl.string(h.t.PsWbcp),
        onClick: () => {
          p(), (0, S.L)(S.Q.MODAL_DISMISSED, i)
        },
        variant: "secondary"
      }, {
        text: h.intl.string(h.t.TD7iUx),
        onClick: _
      }],
      children: (0, n.jsxs)(d.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [(0, n.jsx)(d.Text, {
          variant: "text-md/medium",
          color: "text-muted",
          children: h.intl.string(h.t.KPB2iw)
        }), (0, n.jsx)("div", {
          className: f.guildContainer,
          children: (0, n.jsxs)("div", {
            className: f.guildInfo,
            children: [(0, n.jsx)(c.Z, {
              guild: D,
              size: c.Z.Sizes.SMALL
            }), (0, n.jsx)(d.Text, {
              className: f.guildName,
              variant: "text-md/semibold",
              children: D.name
            })]
          })
        })]
      })
    })
  })
}