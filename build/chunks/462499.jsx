/** Chunk was on 84725 **/
/** chunk id: 462499, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk658722 = require("./658722.js"),
  t = require.n(Chunk658722),
  Chunk399606 = require("./399606.js"),
  Chunk146187 = require("./146187.jsx"),
  Chunk257465 = require("./257465.jsx"),
  Chunk369585 = require("./369585.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk471445 = require("./471445.js"),
  Chunk734893 = require("./734893.js"),
  Chunk208567 = require("./208567.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk768581 = require("./768581.js"),
  Chunk969632 = require("./969632.js"),
  Chunk580357 = require("./580357.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk70164 = require("./70164.js");

function b(e, n, l, a) {
  return {
    channelId: e.value,
    title: n,
    description: l,
    emoji: null,
    icon: null != a ? a : null
  }
}

function f(e) {
  var n, l;
  let {
    transitionState: i,
    onClose: f,
    resourceChannel: N,
    guildId: Z,
    onSave: y,
    onDelete: G,
    onIconUpload: S
  } = e, [P, U] = r.useState(null != (n = null == N ? true : N.title) ? n : ""), [X, B] = r.useState(null != (l = null == N ? true : N.description) ? l : ""), [R, T] = r.useState(function(e) {
    if (null == e) return null;
    let n = p.Z.getChannel(e.channelId);
    return null == n ? null : {
      value: n.id,
      label: n.name
    }
  }(N)), W = (0, s.e7)([C.Z], () => {
    var e;
    return null == (e = C.Z.getResourceChannel(null == N ? true : N.channelId)) ? true : e.icon
  }), q = (0, s.Wu)([C.Z], () => {
    var e, n;
    return (null != (n = null == (e = C.Z.getSettings()) ? true : e.resourceChannels) ? n : []).map(e => e.channelId)
  }), w = P.length < h.n || null == R, H = r.useCallback(() => {
    null == R || P.length <= 0 || (y(b(R, P, X, W)), f())
  }, [y, f, P, R, W, X]), K = r.useCallback(() => {
    null == G || G(), f()
  }, [G, f]), L = r.useCallback(e => {
    T(e)
  }, [T]), M = r.useCallback(e => Promise.resolve(g.ZP.getSelectableChannels(Z).filter(n => (0, h.k3)(n.channel) && !q.includes(n.channel.id) && t()(e, n.channel.name)).map(e => ({
    value: e.channel.id,
    label: e.channel.name
  }))), [Z, q]), O = r.useCallback(e => {
    if (null == e || null == Z) return null;
    let n = p.Z.getChannel(e.value),
      l = v.Z.getGuild(Z);
    if (null == n || null == l) return null;
    let r = (0, m.KS)(n, l);
    return null == r ? null : <r size={"xs"} color={"currentColor"} className={_.channelIcon} />
  }, [Z]), E = r.useCallback(e => {
    null != S && null != R && S(b(R, P, X), e)
  }, [R, P, S, X]), J = r.useCallback(() => null == W || null == R ? null : j.ZP.getResourceChannelIconURL({
    channelId: R.value,
    icon: W
  }), [R, W]), z = r.useMemo(() => [{
    variant: "secondary",
    text: I.intl.string(I.t["ETE/oK"]),
    onClick: f
  }, {
    variant: "primary",
    text: I.intl.string(I.t.R3BPHx),
    onClick: H,
    disabled: w
  }], [H, w, f]);
  return <c.I transitionState={i} onClose={f}>{<div className={_.closeButton}><o.P onClick={f} /></div>}{<div className={_.containerWithHeader}>{<div className={_.splitGroup}><div className={_.header}><u.X6q variant={"heading-md/semibold"} color={"header-primary"}>{I.intl.string(I.t.iREYFB)}</u.X6q></div></div>}{<div className={_.formGroup}>{<u.X6q variant={"heading-md/semibold"} color={"header-primary"}>{I.intl.string(I.t.nPa4Ji)}{<k.Z />}</u.X6q>}{<u.VcW value={R} renderOptionPrefix={O} options={M} onChange={L} />}{<u.Text variant={"text-xs/medium"} color={"text-muted"}>{I.intl.string(I.t.eNDtJC)}</u.Text>}</div>}{<div className={_.separator} />}{<div className={_.formGroup}>{<u.X6q variant={"heading-md/semibold"} color={"header-primary"}>{I.intl.string(I.t["lFy+aW"])}{<k.Z />}</u.X6q>}{<u.oil value={P} onChange={U} placeholder={I.intl.string(I.t.XKUimJ)} maxLength={h.am} />}</div>}{<div className={_.separator} />}{<div className={_.formGroup}>{<u.X6q variant={"heading-md/semibold"} color={"header-primary"}>{I.intl.string(I.t.CnkilJ)}</u.X6q>}{<u.Kx8 value={X} onChange={B} placeholder={I.intl.string(I.t.na0V4O)} maxLength={h.Vu} />}</div>}{<div className={_.separator} />}{<div className={_.splitGroup}>{<div>{<u.X6q variant={"heading-md/semibold"} color={"header-primary"}>{I.intl.string(I.t.CB6dys)}</u.X6q>}{<u.Text variant={"text-xs/medium"} color={"text-muted"}>{I.intl.string(I.t.Kcdk7O)}</u.Text>}</div>}{<div><x.Z className={_.uploader} imageClassName={_.uploadImage} image={W} makeURL={J} icon={(0, a.jsx)(u.rG2, {
              size: "md",
              color: "currentColor"
            })} hideSize={true} onChange={E} iconClassName={_.uploadImageIcon} showIcon={null == W} /></div>}</div>}</div>}{<d.G actions={z} leading={null != N ? (0, a.jsx)(u.Avr, {
        text: I.intl.string(I.t.N86XcH),
        variant: "critical",
        onClick: K
      }) : true} />}</c.I>
}