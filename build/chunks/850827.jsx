/** Chunk was on web.js **/
/** chunk id: 850827, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => H
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk730749 = require("./730749.jsx"),
  Chunk726542 = require("./726542.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk750154 = require("./750154.js"),
  Chunk892001 = require("./892001.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk374129 = require("./374129.jsx"),
  Chunk639351 = require("./639351.jsx"),
  Chunk503438 = require("./503438.js"),
  Chunk802856 = require("./802856.js"),
  Chunk387903 = require("./387903.jsx"),
  Chunk606925 = require("./606925.jsx"),
  Chunk719216 = require("./719216.jsx"),
  Chunk429589 = require("./429589.jsx"),
  Chunk276149 = require("./276149.jsx"),
  Chunk636245 = require("./636245.jsx"),
  Chunk697761 = require("./697761.jsx"),
  Chunk611459 = require("./611459.jsx"),
  Chunk544671 = require("./544671.jsx"),
  Chunk757182 = require("./757182.jsx"),
  Chunk910424 = require("./910424.js"),
  Chunk981631 = require("./981631.js"),
  Chunk477839 = require("./477839.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk603571 = require("./603571.js"),
  Chunk126485 = require("./126485.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      G(e, t, n[t])
    })
  }
  return e
}

function Z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function F(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let V = e => {
    let {
      user: t,
      color: n,
      look: i,
      activity: o,
      onAction: a
    } = e, s = (0, f.Aq)(), l = () => {
      s.dispatch(x.CkL.POPOUT_CLOSE), (0, h.closeUserProfileModal)(), null == a || a()
    };
    return <S.Z user={t} color={n} look={i} activity={o} onAction={l} />
  },
  H = (0, Chunk730749.Z)(e => {
    let {
      activity: t,
      embeddedActivity: n,
      user: i,
      applicationStream: a,
      className: u,
      guildId: f,
      channelId: h,
      source: G,
      color: Z = c.zx.Colors.WHITE,
      look: H = c.zx.Looks.OUTLINED,
      type: Y,
      onAction: W
    } = e, K = (0, l.e7)([g.default], () => {
      let e = g.default.getCurrentUser();
      return s()(null != e, "UserActivityActions: currentUser cannot be undefined"), e
    }), z = Y === I.Y.STREAM_PREVIEW || null != a, q = (0, O.Z)(t), X = q || z ? _.Z.Direction.HORIZONTAL : _.Z.Direction.VERTICAL, Q = (null == t ? true : t.type) === x.IIU.HANG_STATUS, J = (0, l.e7)([E.Z, m.Z], () => {
      var e;
      return Q ? m.Z.getChannel(null == (e = E.Z.getVoiceStateForUser(i.id)) ? true : e.channelId) : null
    });
    if ((null == t ? true : t.application_id) === M.bO) return t = F(B({}, t), {
      buttons: [k.intl.string(j.default["Fv/2Oz"])],
      metadata: {
        button_urls: [M.U8]
      }
    }), <V user={i} color={Z} look={H} activity={t} onAction={W} />;
    let $ = () => {
        if ((0, v.Z)(t)) return <T.Z platform={d.Z.get(x.ABu.XBOX)} look={H} color={Z} onAction={W} Icon={y.Z} />;
        if ((null == t ? true : t.platform) === x.M7m.PS4 || (null == t ? true : t.platform) === x.M7m.PS5) return <T.Z look={H} color={Z} platform={d.Z.get(x.ABu.PLAYSTATION)} onAction={W} Icon={b.Z} />;
        if (q) {
          let e = <w.Z activity={t} user={i} guildId={f} channelId={h} source={G} look={H} color={Z} onAction={W} />,
            n = <P.Z activity={t} user={i} source={G} look={H} color={Z} onAction={W} />;
          return <r.Fragment>{n}{e}</r.Fragment>
        }
        if ((0, p.dS)(t)) {
          let e = (0, p.rq)(t);
          return null == e ? null : <C.Z guildId={e.guildId} channelId={e.channelId} color={Z} look={H} onAction={W} />
        }
        return z ? <L.Z isCurrentUser={K.id === i.id} color={Z} look={H} applicationStream={a} onAction={W} /> : Q && null != J ? <N.Z color={Z} look={H} hangStatusChannel={J} onAction={W} /> : <r.Fragment>{<D.Z activity={t} color={Z} look={H} onAction={W} />}{<A.Z activity={t} embeddedActivity={n} user={i} color={Z} look={H} onAction={W} />}{<R.Z activity={t} user={i} color={Z} look={H} onAction={W} />}{<S.Z user={i} color={Z} look={H} activity={t} onAction={W} />}</r.Fragment>
      },
      ee = X === _.Z.Direction.VERTICAL;
    return <_.Z grow={0} align={_.Z.Align.STRETCH} direction={X} wrap={ee ? _.Z.Wrap.WRAP : _.Z.Wrap.NO_WRAP} className={o()(u, U.buttonsWrapper, ee ? U.vertical : U.horizontal)}>{$()}</_.Z>
  })