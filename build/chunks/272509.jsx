/** Chunk was on 77046 **/
/** chunk id: 272509, original params: t,i,e (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk704215 = require("./704215.js"),
  Chunk667202 = require("./667202.js"),
  Chunk481060 = require("./481060.js"),
  Chunk266454 = require("./266454.js"),
  Chunk749681 = require("./749681.js"),
  Chunk661824 = require("./661824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk258971 = require("./258971.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk49898 = require("./49898.js"),
  Chunk388032 = require("./388032.js"),
  Chunk676305 = require("./676305.js");

function p(t) {
  let {
    guildId: i,
    transitionState: p,
    onClose: h,
    analyticsType: v = o.z.APP_DIRECTORY_UPSELL_MODAL
  } = t;
  return n.useEffect(() => {
    d.default.track(x.rMx.DISMISSIBLE_CONTENT_SHOWN, {
      type: o.z[v],
      guild_id: i
    })
  }, [i, v]), <r.I title={_.intl.string(_.t["2tv5YG"])} subtitle={_.intl.string(_.t.pgwlDw)} transitionState={p} size={"sm"} graphic={{
      type: "lottie",
      lottie: () => e.e("94792").then(e.t.bind(e, 972951, 19)),
      aspectRatio: "6/4"
    }} onClose={h} actions={[{
      variant: "secondary",
      text: _.intl.string(_.t.L5eIZ2),
      onClick: () => {
        h(), (0, c.Q3)(v, {
          forceTrack: true,
          dismissAction: I.L.SECONDARY,
          guildId: i
        })
      }
    }, {
      variant: "primary",
      text: _.intl.string(_.t["5e8Mrq"]),
      onClick: () => {
        h(), (0, c.Q3)(v, {
          forceTrack: true,
          dismissAction: I.L.PRIMARY,
          guildId: i
        }), (0, a.transitionToGlobalDiscovery)({
          tab: u.GlobalDiscoveryTab.APPS,
          newSessionState: {
            guildId: i,
            entrypoint: {
              name: m.xF.APPLICATION_DIRECTORY_UPSELL_MODAL
            }
          }
        })
      }
    }]}><ul className={C.listContainer}>{<li className={C.listItem}>{<l.$2U color={"currentColor"} className={C.wandIcon} />}{<l.Text variant={"text-sm/medium"} color={"text-default"}>{_.intl.string(_.t["0vKo5O"])}</l.Text>}</li>}{<b.Z className={C.divider} />}{<li className={C.listItem}>{<l.wGt color={"currentColor"} className={C.robotIcon} />}{<l.Text variant={"text-sm/medium"} color={"text-default"}>{_.intl.string(_.t.CprEDA)}</l.Text>}</li>}{<b.Z className={C.divider} />}{<li className={C.listItem}>{<l.EO4 color={"currentColor"} className={C.smileIcon} />}{<l.Text variant={"text-sm/medium"} color={"text-default"}>{_.intl.string(_.t.wQJMPD)}</l.Text>}</li>}</ul></r.I>
}