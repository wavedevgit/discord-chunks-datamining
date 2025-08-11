/** Chunk was on 70911 **/
/** chunk id: 436457, original params: e,t,n (module,exports,require) **/
let r, o;
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./781311.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk230711 = require("./230711.js"),
  Chunk881052 = require("./881052.js"),
  Chunk600164 = require("./600164.js"),
  Chunk782605 = require("./782605.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk145575 = require("./145575.js");
let N = (r = window.GLOBAL_ENV.INVITE_HOST, o = "", null == r && (r = location.host, o = Chunk981631.Z5c.INVITE("")), "".concat(location.protocol, "//").concat(r).concat(o, "/"));

function y(e) {
  let {
    onBack: t,
    onComplete: n,
    onConnect: r,
    isSlideReady: o
  } = e, [i, y] = s.useState(""), [v, j] = s.useState(false), [E, C] = s.useState(null), T = s.useRef(null);
  s.useEffect(() => {
    var e;
    o && (null == (e = T.current) || e.focus())
  }, [o]);
  let g = s.useCallback(e => {
    e.preventDefault();
    let t = i.trim();
    if ("" === t) return void C(h.intl.string(h.t.IRq5am));
    C(null), j(true);
    let r = t.split("/"),
      o = r[r.length - 1];
    d.ZP.resolveInvite(o, "Join Guild", {
      inputValue: t
    }).then(e => {
      let {
        invite: t
      } = e;
      if (j(false), null == t) return void C(h.intl.string(h.t["GEYI+f"]));
      if (null != t.channel) {
        let e = d.ZP.getInviteContext("Join Guild", t);
        d.ZP.acceptInvite({
          inviteKey: t.code,
          context: e,
          callback: e => {
            n(), d.ZP.transitionToInvite(e)
          }
        }).catch(e => {
          e instanceof _.yZ || e instanceof _.Hx ? C((0, b.O)(e.code)) : C(h.intl.string(h.t.dDZRd3))
        })
      }
    }, e => {
      j(false);
      let t = new _.yZ(e);
      C((0, b.O)(t.code))
    })
  }, [i, j, C, n]);
  return {
    content: <a.Fragment>{<u.xBx className={x.header} direction={p.Z.Direction.VERTICAL} separator={false}>{<u.X6q variant={"heading-xl/bold"} color={"header-primary"} className={x.title}>{h.intl.string(h.t.riOUtL)}</u.X6q>}{<u.Text variant={"text-md/normal"} color={"header-secondary"}>{h.intl.string(h.t["7jub2t"])}</u.Text>}</u.xBx>}{<u.hzk>{<form onSubmit={g} className={x.inputForm}><u.xJW title={h.intl.string(h.t.qreV29)} error={E} titleClassName={l()(x.formTitle, {
              [x.error]: null != E
            })}><c.Is value={i} onChange={y} className={x.input} inputClassName={x.inputInner} inputRef={T} /></u.xJW></form>}{<u.Text color={"header-secondary"} variant={"text-xs/normal"}>{h.intl.format(h.t.lHTZl5, {
            examples: "".concat(N).concat("wumpus-friends", ", ").concat("hTKzmak")
          })}</u.Text>}{<u.Text variant={"text-xs/normal"} color={"header-secondary"} className={x.connectCTA}>{h.intl.format(h.t["8F/who"], {
            onClick: () => {
              r(), f.Z.open(m.oAB.CONNECTIONS)
            }
          })}</u.Text>}</u.hzk>}</a.Fragment>,
    footer: <a.Fragment>{<u.zxk variant={"primary"} text={h.intl.string(h.t.VJlc0d)} onClick={g} disabled={0 === i.length} loading={v} />}{<c.zx className={x.__invalid_skipButton} look={c.zx.Looks.BLANK} size={c.zx.Sizes.MIN} onClick={t}>{h.intl.string(h.t["13/7kZ"])}</c.zx>}</a.Fragment>
  }
}