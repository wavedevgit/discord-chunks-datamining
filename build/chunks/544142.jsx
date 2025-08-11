/** Chunk was on web.js **/
/** chunk id: 544142, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk471445 = require("./471445.js"),
  Chunk884902 = require("./884902.js"),
  Chunk670188 = require("./670188.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk967128 = require("./967128.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk128337 = require("./128337.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e) {
  var t, o, f;
  let {
    userId: E,
    channel: b
  } = e, y = i.useRef(null), {
    analyticsLocations: v
  } = (0, d.ZP)(u.Z.USERNAME), T = (0, s.e7)([m.default], () => m.default.getUser(E)), A = (0, s.e7)([h.ZP], () => null != E ? h.ZP.getMember(b.guild_id, E) : null), N = (0, _.X7)(b.guild_id, null != E ? E : true, null != (t = null == A ? true : A.colorStrings) ? t : null);

  function C(e) {
    if (null == T) return null;
    (0, c.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("70675"), n.e("69526")]).then(n.bind(n, 654663));
      return t => <e{...S(I({}, t), {
        user: T,
        guildId: b.guild_id,
        channel: b
      })} />
    })
  }
  let R = null != (f = null != (o = null == A ? true : A.nick) ? o : g.ZP.getName(T)) ? f : "???",
    P = null == A ? true : A.colorString;
  return null == T ? <span className={a()(O.threadCreatorName, O.unknownCreatorName)}>{R}</span> : <d.Gt value={v}><p.Z targetElementRef={y} user={T} guildId={b.guild_id} channelId={b.id} roleId={null == A ? true : A.colorRoleId} clickTrap={true}>{e => (0, r.jsx)(l.P3F, S(I({}, e), {
        innerRef: y,
        tag: "span",
        className: O.threadCreatorName,
        onContextMenu: C,
        children: (0, r.jsx)(l.PUh, {
          name: R,
          colorString: null != P ? P : null,
          colorStrings: N
        })
      }))}</p.Z></d.Gt>
}

function N(e) {
  let {
    channel: t
  } = e, {
    threadMetadata: n
  } = t;
  return null == n ? <div style={{
      marginTop: false
    }} /> : <r.Fragment>{<l.Text variant={"text-md/normal"} color={"header-secondary"}><div className={O.subtitle}>{y.intl.format(y.t.imPXd3, {
          usernameHook: (e, n) => (0, r.jsx)(A, {
            userId: t.ownerId,
            channel: t
          }, n)
        })}</div></l.Text>}{t.type === b.d4z.PRIVATE_THREAD ? <l.Text variant={"text-md/normal"} color={"header-secondary"}>{y.intl.string(y.t["1awbZG"])}</l.Text> : null}</r.Fragment>
}

function C(e) {
  var t;
  let {
    channel: n
  } = e, i = null != (t = (0, f.KS)(n)) ? t : l.or_;
  return <E.ZP channelId={n.id}>{<div className={O.iconWrapper}><i className={O.icon} /></div>}{<E.Ot>{n.name}</E.Ot>}{<N channel={n} />}</E.ZP>
}