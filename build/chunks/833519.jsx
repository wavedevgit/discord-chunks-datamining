/** Chunk was on web.js **/
/** chunk id: 833519, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => q,
  _: () => z
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk872810 = require("./872810.js"),
  Chunk493773 = require("./493773.js"),
  Chunk763520 = require("./763520.js"),
  Chunk194082 = require("./194082.jsx"),
  Chunk710845 = require("./710845.js"),
  Chunk965048 = require("./965048.js"),
  Chunk590293 = require("./590293.js"),
  Chunk863908 = require("./863908.js"),
  Chunk871118 = require("./871118.js"),
  Chunk517525 = require("./517525.jsx"),
  Chunk352978 = require("./352978.jsx"),
  Chunk590076 = require("./590076.jsx"),
  Chunk507675 = require("./507675.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk451478 = require("./451478.js"),
  Chunk685203 = require("./685203.jsx"),
  Chunk112560 = require("./112560.jsx"),
  Chunk442168 = require("./442168.jsx"),
  Chunk822296 = require("./822296.jsx"),
  Chunk916771 = require("./916771.js"),
  Chunk792517 = require("./792517.jsx"),
  Chunk351483 = require("./351483.jsx"),
  Chunk979425 = require("./979425.js"),
  Chunk651183 = require("./651183.jsx"),
  Chunk623825 = require("./623825.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk519417 = require("./519417.js");

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      V(e, t, n[t])
    })
  }
  return e
}
let Y = 195,
  W = 175,
  K = new Chunk710845.Z("StreamTile");

function z(e) {
  let {
    participant: t,
    selected: n,
    focused: i,
    idle: o,
    width: a,
    premiumIndicator: l
  } = e, c = (0, s.e7)([I.Z], () => I.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)), u = (0, j.K)(a);
  return <r.Fragment>{n || i ? null : <k.Z participant={t} />}{i || null == c || c.state === U.jm8.ENDED || c.state === U.jm8.FAILED ? null : <b.Z size={_.ZP.Sizes.SMALL} className={F.liveIndicator} participant={t} showQuality={!u && !o} isUpsellEnabled={false} premiumIndicator={l} />}</r.Fragment>
}

function q(e) {
  let {
    participant: t,
    selected: n,
    onVideoResize: o,
    fit: _,
    inPopout: p,
    inOverlayPopout: b = false,
    width: k,
    focused: j,
    wrapperClassName: V,
    paused: z = false
  } = e, q = A.Z.getVideoComponent(), X = (0, s.e7)([T.default], () => T.default.getId()), Q = (0, m.Z)(), {
    stream: J,
    user: $,
    streamId: ee
  } = t, et = (0, s.e7)([S.Z], () => S.Z.getChannel(J.channelId)), en = (0, s.e7)([I.Z], () => I.Z.getActiveStreamForUser($.id, J.guildId), [$.id, J.guildId]), er = (0, s.e7)([I.Z], () => I.Z.getAllActiveStreams().length > 0), ei = (0, s.e7)([N.Z], () => N.Z.isFocused()), eo = (null == en ? true : en.ownerId) === X, ea = eo && !ei && !p, es = null != en ? (0, g.Z)(en, $, $.id === X, ea) : null, el = k < Y;
  (0, d.ZP)(() => {
    !er && (null == et ? true : et.isGuildStageVoice()) && !eo && ((0, u.rn)(J), c.Z.updateStageStreamSize(J.channelId, false))
  });
  let ec = (0, h.c)(B.Yn.STREAM, t.user.id);
  i.useEffect(() => {
    K.info("Stream Tile State - activeStream: ".concat(null != en, " | selected: ").concat(n, " | Video: ").concat(null != q, " | MediaEngine: ").concat(A.Z.supports(B.AN.VIDEO)))
  }, [q, en, n]);
  let eu = false;
  if (Q) return <M.Z stream={t.stream} isSmall={el} selected={n} isSelfStream={$.id === X} />;
  if ((null == en ? true : en.state) === U.jm8.ENDED) return <w.Z selected={n} stream={en} width={k} />;
  if (null != ec || (null == en ? true : en.state) === U.jm8.FAILED) return <D.Z avError={null == ec ? true : ec.type} avErrorContext={ec} selected={n} stream={t.stream} width={k} />;
  if (t.type === G.fO.HIDDEN_STREAM) return <L.Z selected={n} participant={t} width={k} />;
  if (!(null != en && !n && null != q && A.Z.supports(B.AN.VIDEO))) return <div className={a()(F.content, F.streamPreview, {
      [F.small]: el
    })}>{<E.Z noImage={true} noText={true} className={a()(F.absoluteFill, {
        [F.streamPreviewOpacity]: null == en
      })} stream={t.stream} />}{n ? null : <r.Fragment>{<C.a isSmall={el}><l.Text variant={el ? "text-sm/semibold" : "text-md/semibold"} color={"none"}>{k < W ? Z.intl.string(Z.t["I6JG4+"]) : Z.intl.string(Z.t["7Xq/nZ"])}</l.Text></C.a>}{er ? <C.a className={F.addCTA} tooltip={Z.intl.string(Z.t.wCrzur)} onClick={e => {
          e.stopPropagation(), (0, u.rn)(J, {
            forceMultiple: true
          })
        }} isSmall={el}><l.OgY size={"xs"} color={"currentColor"} className={F.addStreamIcon} /></C.a> : null}</r.Fragment>}</div>;
  else return eu && !b ? <x.Z selected={n} width={k} /> : <r.Fragment>{null != et ? <O.Z focused={j} channelId={et.id} guildId={et.guild_id} streamerId={$.id} hasScreenMessage={null != es} stream={J} /> : null}{<y.Z onResize={o} wrapperClassName={a()(F.videoWrapper, V)} className={F.content} streamId={ee} videoComponent={q} fit={_} paused={z || (null == en ? true : en.state) === U.jm8.PAUSED || ea} videoSpinnerContext={eo ? f.m.SELF_STREAM : f.m.REMOTE_STREAM} userId={$.id} streamKey={t.id} />}{null != es ? <v.Z{...H({
      size: (0, R.L)(k)
    }, es)} /> : null}{<P.Z stream={J} inPopout={p} />}</r.Fragment>
}