/** Chunk was on 35489 **/
/** chunk id: 582712, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => h
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
  Chunk578671 = require("./578671.js");

function h(t) {
  let {
    transitionState: e,
    guildId: i,
    onClose: h
  } = t, p = (0, r.e7)([f.Z], () => f.Z.getGuild(i));
  if (l.useEffect(() => {
      (0, g.Y)(i), (0, x.L)(x.Q.MODAL_VIEWED, i), o.Z.increment({
        name: a.V.DM_SETTINGS_UPSELL_VIEW
      })
    }, [i]), null == p) return null;
  let D = t => {
    t.preventDefault();
    let e = (0, m.YK)();
    e.add(i), u.h2.updateSetting(Array.from(e)).then(() => (0, d.showToast)((0, d.createToast)(S.intl.string(S.t.rlYD1W), d.ToastType.SUCCESS))), h(), (0, x.L)(x.Q.MODAL_DISABLED_DMS, i)
  };
  return (0, n.jsx)("form", {
    onSubmit: D,
    children: (0, n.jsx)(s.Modal, {
      transitionState: e,
      onClose: h,
      title: S.intl.string(S.t.w2BvnL),
      subtitle: S.intl.format(S.t.Depjkv, {
        guild_name: p.name
      }),
      actions: [{
        text: S.intl.string(S.t.PsWbcp),
        onClick: () => {
          h(), (0, x.L)(x.Q.MODAL_DISMISSED, i)
        },
        variant: "secondary"
      }, {
        text: S.intl.string(S.t.TD7iUx),
        onClick: D
      }],
      children: (0, n.jsxs)(d.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [(0, n.jsx)(d.Text, {
          variant: "text-md/medium",
          color: "text-muted",
          children: S.intl.string(S.t.KPB2iw)
        }), (0, n.jsx)("div", {
          className: b.guildContainer,
          children: (0, n.jsxs)("div", {
            className: b.guildInfo,
            children: [(0, n.jsx)(c.Z, {
              guild: p,
              size: c.Z.Sizes.SMALL
            }), (0, n.jsx)(d.Text, {
              className: b.guildName,
              variant: "text-md/semibold",
              children: p.name
            })]
          })
        })]
      })
    })
  })
}