/** Chunk was on 22988 **/
/** chunk id: 662379, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk293810 = require("./293810.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk14920 = require("./14920.js"),
  Chunk961618 = require("./961618.js"),
  Chunk217684 = require("./217684.js"),
  Chunk174618 = require("./174618.js");

function u(e) {
  let {
    imageSrc: t,
    description: n
  } = e;
  return <div className={s.howItWorksCard}>{<div className={s.howItWorksImageContainer}><img className={s.howItWorksImage} src={t} alt={""} /></div>}{<div className={s.howItWorksDescription}><i.Text variant={"text-sm/normal"} color={"header-primary"}>{n}</i.Text></div>}</div>
}

function m() {
  let e = [{
    imageSrc: Chunk174618,
    description: Chunk388032.intl.string(Chunk388032.t.lT0ZNT)
  }, {
    imageSrc: Chunk961618,
    description: Chunk388032.intl.string(Chunk388032.t.ihN2WV)
  }, {
    imageSrc: Chunk217684,
    description: Chunk388032.intl.string(Chunk388032.t.c8krDQ)
  }];
  return <div>{<Chunk481060.X6q variant={"heading-lg/semibold"} color={"header-primary"}>{Chunk388032.intl.string(Chunk388032.t.R9rNIi)}</Chunk481060.X6q>}{<Chunk481060.LZC size={24} />}{<div className={Chunk14920.howItWorksContainer}>{module.map(e => (0, r.jsx)(u, {
        imageSrc: e.imageSrc,
        description: e.description
      }, e.imageSrc))}</div>}{<Chunk481060.LZC size={24} />}{<Chunk481060.Text variant={"text-sm/normal"} color={"header-secondary"}>{Chunk388032.intl.format(Chunk388032.t.oxW30N, {
        creatorPortalUrl: Chunk293810.C5
      })}</Chunk481060.Text>}</div>
}