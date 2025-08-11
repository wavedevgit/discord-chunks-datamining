/** Chunk was on 75708 **/
/** chunk id: 130310, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk785681 = require("./785681.js"),
  Chunk231994 = require("./231994.js"),
  Chunk916723 = require("./916723.js"),
  Chunk388032 = require("./388032.js"),
  Chunk634789 = require("./634789.js"),
  Chunk20493 = require("./20493.js");
let p = e => {
    let {
      header: t,
      description: n,
      icon: r,
      inModal: l
    } = e;
    return <div className={s()(u.row, m.marginBottom8, {
        [u.inModal]: l
      })}>{<div className={u.iconContainer}>{r}</div>}{<div>{<a.Text className={u.header} variant={"text-sm/bold"} color={"header-primary"}>{t}</a.Text>}{<a.Text variant={"text-xs/medium"} color={"header-secondary"}>{n}</a.Text>}</div>}</div>
  },
  g = e => {
    let {
      inModal: t
    } = e, n = (0, l.o)(d.intl.string(c.default.Sm8Gq6), d.intl.string(c.default.YU7aaW)), r = (0, l.o)(d.intl.string(c.default["TCzk/f"]), d.intl.string(c.default["2OqtJC"])), s = (0, l.o)(d.intl.string(c.default.ASf7XF), d.intl.string(c.default["82y87e"])), m = (0, l.o)(d.intl.string(c.default["0QDVFB"]), d.intl.string(c.default["1xBHHR"]));
    return <div>{<a.Text className={u.groupHeader} variant={"text-xxs/bold"} color={"header-secondary"}>{n}</a.Text>}{<p header={d.intl.string(c.default["/zMYZW"])} description={d.intl.string(c.default.DxFKkZ)} icon={(0, i.jsx)(a.iFz, {
          size: "custom",
          width: 20,
          height: 20,
          color: a.TVs.colors.TEXT_PRIMARY.css
        })} inModal={t} />}{<p header={d.intl.string(c.default["44NEx8"])} description={d.intl.string(c.default.WrY56O)} icon={(0, i.jsx)(a.dRF, {
          size: "custom",
          width: 20,
          height: 20,
          color: a.TVs.colors.TEXT_PRIMARY.css
        })} inModal={t} />}{<p header={d.intl.string(c.default["Z3G+8v"])} description={d.intl.string(c.default.KBgAra)} icon={(0, i.jsx)(o.Z, {
          width: 20,
          height: 20,
          color: a.TVs.colors.TEXT_PRIMARY.css
        })} inModal={t} />}{<a.Text className={u.groupHeader} variant={"text-xxs/bold"} color={"header-secondary"}>{r}</a.Text>}{<p header={s} description={m} icon={(0, i.jsx)(a.Dio, {
          size: "custom",
          width: 20,
          height: 20,
          color: a.TVs.colors.TEXT_PRIMARY.css
        })} inModal={t} />}</div>
  }