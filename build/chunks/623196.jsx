/** Chunk was on 75708 **/
/** chunk id: 623196, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js"), require("./457542.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk594174 = require("./594174.js"),
  Chunk63063 = require("./63063.js"),
  Chunk88658 = require("./88658.js"),
  Chunk398826 = require("./398826.js"),
  Chunk575356 = require("./575356.js"),
  Chunk838436 = require("./838436.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk891170 = require("./891170.js");
let j = e => {
  let {
    onConfirm: t
  } = e;
  (0, o.ZDy)(async () => {
    let {
      default: e
    } = await n.e("25120").then(n.bind(n, 926281));
    return n => <e modalProps={n} onConfirm={t} />
  })
};

function E() {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    {
      currentHarvestType: t,
      awaitingInitialRequest: n
    } = (0, Chunk442837.cj)([Chunk575356.Z], () => ({
      currentHarvestType: Chunk575356.Z.harvestType,
      awaitingInitialRequest: Chunk575356.Z.requestingHarvest
    })),
    [s, E] = Chunk73800.useState(false);
  if (null == module) return null;
  let C = (0, Chunk88658.$6)(exports, module) || require,
    O = null != exports && a()().diff(a()(exports.created_at), "days") < Chunk981631.eBq,
    v = C && O,
    S = () => {
      j({
        onConfirm: e => {
          E(true), (0, p.h)(e).then(e => {
            null != e && null != e.body ? c.Z.show({
              body: x.intl.string(x.t["6Nmv4u"])
            }) : c.Z.show({
              title: x.intl.string(x.t.OjbtDg),
              body: x.intl.string(x.t["0F5Jys"])
            })
          }, e => {
            var t;
            let n = (null == e ? true : e.message) || (null == e || null == (t = e.body) ? true : t.message) || x.intl.string(x.t["0F5Jys"]);
            c.Z.show({
              title: x.intl.string(x.t.OjbtDg),
              body: n
            })
          }).finally(() => E(false))
        }
      })
    };
  return <Chunk838436.U setting={Chunk726985.s6.PRIVACY_DATA_REQUEST_V2}>{<Chunk838436.H header={Chunk388032.intl.string(Chunk388032.t.XAHCgI)} description={Chunk388032.intl.format(Chunk388032.t.P3kNfn, {
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.GDPR_REQUEST_DATA)
      })} />}{v ? <Chunk481060.Zbd className={Chunk891170.card}><Chunk481060.Text variant={"text-md/normal"}>{Chunk388032.intl.format(Chunk388032.t.RNDlV1, {
          date: a()(exports.created_at).add(Chunk981631.eBq, "days").format("MMMM Do YYYY")
        })}</Chunk481060.Text></Chunk481060.Zbd> : <div className={Chunk891170.button}><Chunk481060.ua7 text={module.isStaff() ? Chunk388032.intl.string(Chunk388032.t.ZPQLHx) : module.verified ? null : Chunk388032.intl.string(Chunk388032.t["c1f88/"])}>{e => {
          let {
            onMouseEnter: t,
            onMouseLeave: r
          } = e;
          return (0, i.jsx)(o.zxk, {
            variant: "primary",
            text: x.intl.string(x.t.dmBSKi),
            disabled: C,
            onClick: S,
            onMouseEnter: t,
            onMouseLeave: r,
            loading: s || n
          })
        }}</Chunk481060.ua7></div>}</Chunk838436.U>
}