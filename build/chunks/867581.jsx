/** Chunk was on 61007 **/
/** chunk id: 867581, original params: e,t,n (module,exports,require) **/
let r, o;
require.d(exports, {
  Z: () => L
}), require("./388685.js"), require("./781311.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk881052 = require("./881052.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk703656 = require("./703656.js"),
  Chunk782605 = require("./782605.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk400024 = require("./400024.js"),
  Chunk216019 = require("./216019.js"),
  Chunk286359 = require("./286359.js");
let S = "hTKzmak",
  C = (0, Chunk313201.hQ)(),
  g = (r = window.GLOBAL_ENV.INVITE_HOST, o = "", null == r && (r = location.host, o = Chunk981631.Z5c.INVITE("")), "".concat(location.protocol, "//").concat(r).concat(o, "/")),
  x = [S, "".concat(g).concat(S), "".concat(g).concat("wumpus-friends")],
  h = e => {
    let {
      onClick: t
    } = e;
    return <u.P3F className={E.rowContainer} onClick={() => {
        t(), (0, f.uL)(N.Z5c.GUILD_DISCOVERY)
      }}>{<img width={40} height={40} className={E.rowIcon} alt={""} src={b} />}{<div>{<u.X6q className={E.rowText} variant={"heading-md/semibold"}>{T.intl.string(T.t.DwDxDQ)}</u.X6q>}{<u.Text className={E.rowText} variant={"text-xs/normal"}>{T.intl.string(T.t["5RL4CA"])}</u.Text>}</div>}{<img className={E.rowArrow} alt={""} src={O} />}</u.P3F>
  };

function L(e) {
  let {
    onBack: t,
    onClose: n,
    isSlideReady: r
  } = e, [o, a] = i.useState(""), [p, f] = i.useState(false), [N, O] = i.useState(null), b = i.useRef(null);
  i.useEffect(() => {
    var e;
    r && (null == (e = b.current) || e.focus())
  }, [r]);
  let L = e => {
    e.preventDefault();
    let t = o.trim();
    if ("" === t) return void O(T.intl.string(T.t.IRq5am));
    O(null), f(true);
    let r = t.split("/"),
      l = r[r.length - 1];
    _.ZP.resolveInvite(l, "Join Guild", {
      inputValue: t
    }).then(e => {
      let {
        invite: t
      } = e;
      if (f(false), null == t) return void O(T.intl.string(T.t["GEYI+f"]));
      if (null != t.channel) {
        let e = _.ZP.getInviteContext("Join Guild", t);
        _.ZP.acceptInvite({
          inviteKey: t.code,
          context: e,
          callback: e => {
            n(), _.ZP.transitionToInvite(e)
          }
        }).then(() => {}, e => {
          e instanceof d.yZ || e instanceof d.Hx ? O((0, I.O)(e.code)) : O(T.intl.string(T.t.dDZRd3))
        })
      }
    }, e => {
      f(false);
      let t = new d.yZ(e);
      O((0, I.O)(t.code))
    })
  };
  return <div>{<u.xBx className={E.header} direction={m.Z.Direction.VERTICAL} separator={false}>{<u.X6q className={E.title} variant={"heading-xl/semibold"}>{T.intl.string(T.t.riOUtL)}</u.X6q>}{<u.Text color={"header-secondary"} variant={"text-sm/normal"}>{T.intl.string(T.t["7jub2t"])}</u.Text>}{<u.olH className={E.closeButton} onClick={n} />}</u.xBx>}{<u.hzk className={E.__invalid_content}>{<form onSubmit={L} className={E.inputForm}><u.xJW>{<u.vwX id={C} error={N} className={s()(E.formTitle, {
              [E.error]: null != N
            })} required={true}>{T.intl.string(T.t.qreV29)}</u.vwX>}{<u.oil value={o} onChange={a} placeholder={"".concat(g).concat(S)} inputRef={b} required={true} aria-labelledby={C} />}</u.xJW></form>}{<u.xJW title={T.intl.string(T.t.Bnq46O)} titleClassName={E.formTitle} className={E.examplesForm}>{x.map(e => (0, l.jsx)(u.P3F, {
          className: E.sampleLink,
          onClick: () => a(e),
          children: e
        }, e))}</u.xJW>}{<h onClick={n} />}</u.hzk>}{<u.mzw className={E.footer}>{<u.zxk variant={"primary"} text={T.intl.string(T.t["Ts/9AQ"])} loading={p} onClick={L} />}{<c.zx color={c.zx.Colors.PRIMARY} look={c.zx.Looks.LINK} size={c.zx.Sizes.MIN} onClick={t}>{T.intl.string(T.t["13/7kZ"])}</c.zx>}</u.mzw>}</div>
}