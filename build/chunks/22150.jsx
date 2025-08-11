/** Chunk was on 9343 **/
/** chunk id: 22150, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk393869 = require("./393869.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.js"),
  Chunk652297 = require("./652297.js");

function m(e) {
  let {
    onNext: t,
    onClose: n
  } = e, [m, u] = a.useState(false), _ = (0, r.e7)([c.default], () => c.default.getCurrentUser()), E = async e => {
    e.preventDefault(), u(true);
    try {
      await (0, o.i)(), t()
    } catch (t) {
      let e = new l.Z(t).getAnyErrorMessage();
      null != e && (0, i.showToast)((0, i.createToast)(e, i.ToastType.FAILURE))
    } finally {
      u(false)
    }
  };
  return <form onSubmit={E}>{<i.xBx separator={false} className={x.header}>{<i.X6q className={x.title} variant={"heading-xl/extrabold"}>{d.intl.string(d.t.uFxYq6)}</i.X6q>}{<i.olH onClick={n} className={x.modalCloseButton} />}</i.xBx>}{<i.hzk className={x.content}><i.Text className={x.description} variant={"text-md/normal"}>{d.intl.format(d.t.oMFSgo, {
          oldEmail: null == _ ? true : _.email
        })}</i.Text></i.hzk>}{<i.mzw className={x.modalFooter}>{<div data-button-hoisted-classname-wrapper={true} className={x.__invalid_submit}><i.zxk variant={"primary"} text={d.intl.string(d.t.rXV81N)} type={"submit"} loading={m} /></div>}{<div data-button-hoisted-classname-wrapper={true} className={x.__invalid_cancel}><i.zxk variant={"secondary"} text={d.intl.string(d.t["ETE/oK"])} onClick={n} /></div>}</i.mzw>}</form>
}