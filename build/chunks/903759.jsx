/** Chunk was on 43404 **/
/** chunk id: 903759, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  u: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk327802 = require("./327802.jsx"),
  Chunk372129 = require("./372129.jsx"),
  Chunk598117 = require("./598117.js"),
  Chunk746622 = require("./746622.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk162337 = require("./162337.js");
let m = e => {
    let {
      setImage: t
    } = e, [n, o] = l.useState(null);
    return <div className={d.emptyState}><div className={d.dropZone}>{<i.FmF size={"lg"} color={i.TVs.colors.HEADER_MUTED} className={d.imagePlusIcon} />}{<div className={d.textContainer}>{<i.Text variant={"text-md/medium"}>{c.intl.format(c.t["Ks2/3d"], {
              selectFileHook: (e, n) => (0, r.jsx)(h, {
                translatedContent: e,
                setUserImage: t
              }, n)
            })}</i.Text>}{<i.Text variant={"text-xs/normal"} color={"text-tertiary"}>{c.intl.string(c.t.UTE8Cw)}</i.Text>}</div>}{null !== n && <u.H error={s.ze.IMAGE_LOAD} variant={"text-sm/normal"} color={"text-danger"} />}{<a.X onSuccess={t} onError={o} />}</div></div>
  },
  h = e => {
    let {
      setUserImage: t,
      translatedContent: n
    } = e;
    return <i.P3F focusProps={{
        within: true
      }} tag={"a"}><label>{n}{<o.ZP tabIndex={0} onChange={(e, n, r) => (t({
            data: e,
            file: n,
            image: r
          }), Promise.resolve(true))} multiple={false} title={""} />}</label></i.P3F>
  }