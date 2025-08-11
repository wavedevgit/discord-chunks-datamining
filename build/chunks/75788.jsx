/** Chunk was on 9343 **/
/** chunk id: 75788, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk393869 = require("./393869.js"),
  Chunk25990 = require("./25990.js"),
  Chunk388032 = require("./388032.js"),
  Chunk652297 = require("./652297.js");

function m(e) {
  var t;
  let {
    isSlideReady: n,
    error: m,
    setEmailToken: u,
    setError: _,
    onNext: E,
    onClose: N
  } = e, [h, A] = a.useState(false), [p, C] = a.useState(""), [j, f] = a.useState(false), S = (0, r.e7)([c.Z], () => c.Z.getErrors()), g = a.useRef(null);
  a.useEffect(() => {
    if (n) {
      var e;
      null == (e = g.current) || e.focus()
    }
  }, [n]);
  let v = async e => {
    e.preventDefault(), _(null), A(true);
    try {
      let {
        token: e
      } = await (0, o.w)(p);
      u(e), E()
    } catch (e) {
      _(new l.Z(e).getAnyErrorMessage())
    } finally {
      A(false)
    }
  }, O = async () => {
    if (!j) {
      f(true);
      try {
        await (0, o.i)(true), (0, i.showToast)((0, i.createToast)(d.intl.string(d.t["84yeo6"]), i.ToastType.SUCCESS))
      } catch (t) {
        let e = new l.Z(t).getAnyErrorMessage();
        null != e && (0, i.showToast)((0, i.createToast)(e, i.ToastType.FAILURE))
      } finally {
        f(false)
      }
    }
  };
  return <form onSubmit={v}>{<i.xBx separator={false} className={x.header}>{<i.X6q className={x.title} variant={"heading-xl/extrabold"}>{d.intl.string(d.t.jMGc4O)}</i.X6q>}{<i.Text color={"header-secondary"} variant={"text-md/normal"} className={x.subtitle}>{d.intl.string(d.t.SZJow8)}</i.Text>}{<i.olH onClick={N} className={x.modalCloseButton} />}</i.xBx>}{<i.hzk className={x.content}>{<i.xJW title={d.intl.string(d.t["8mZX6O"])} error={null != m ? m : null == S || null == (t = S.email_token) ? true : t[0]}><i.oil value={p} onChange={C} inputRef={g} /></i.xJW>}{<i.Text className={x.help} variant={"text-sm/normal"}>{d.intl.format(d.t.P0sak5, {
          onResend: O
        })}</i.Text>}</i.hzk>}{<i.mzw><i.zxk variant={"primary"} text={d.intl.string(d.t.PDTjLC)} type={"submit"} loading={h} /></i.mzw>}</form>
}