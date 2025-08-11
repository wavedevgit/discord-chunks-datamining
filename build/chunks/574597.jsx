/** Chunk was on web.js **/
/** chunk id: 574597, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk129861 = require("./129861.jsx"),
  Chunk91218 = require("./91218.jsx"),
  Chunk829883 = require("./829883.js"),
  Chunk518738 = require("./518738.js"),
  Chunk14263 = require("./14263.js"),
  Chunk592125 = require("./592125.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk158776 = require("./158776.js"),
  Chunk594174 = require("./594174.js"),
  Chunk970184 = require("./970184.js"),
  Chunk280501 = require("./280501.js"),
  Chunk811654 = require("./811654.js"),
  Chunk344991 = require("./344991.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk922127 = require("./922127.js");

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

function T(e) {
  var t;
  let n = (0, m.CJ)(),
    v = null == n || null == (t = n.message) ? true : t.getChannelId(),
    T = d.Z.getChannel(v),
    S = _.Z.getGuild(null == T ? true : T.getGuildId()),
    A = (0, u.Z)(null == S ? true : S.id, E.HI),
    N = t => (0, E._H)(e.type, t, v),
    C = (e, t) => {
      let n = t === b.tE.PILL_ICON_SIZE;
      if ((null == e ? true : e.type) === g.tM.USER) {
        let i = h.default.getUser(e.value);
        if (null == i) return;
        return <o.qEK size={n ? o.EFr.SIZE_16 : o.EFr.SIZE_24} src={i.getAvatarURL(null == S ? true : S.id, t)} status={n ? null : p.Z.getStatus(i.id)} aria-hidden={true} />
      }
      if ((null == e ? true : e.type) === g.tM.ROLE) {
        var i;
        let n = null != S ? f.Z.getRole(S.id, e.value) : true;
        if (null == n || null == S) return;
        let a = (0, l._b)(S, n) ? (0, c.Kz)(n, t) : null;
        return null != a ? <s.Z{...I({}, a)} /> : <o.lZ8 size={"custom"} color={null != (i = n.colorString) ? i : y.Pbq} height={t} width={t} />
      }
    },
    R = e => {
      let t = null;
      if (e.type === g.tM.USER) {
        let n = h.default.getUser(e.value);
        null != n && (t = <a.Z className={O.tag} usernameClass={O.username} discriminatorClass={O.discriminator} botClass={O.bot} user={n} forceUsername={true} />)
      } else if (e.type === g.tM.ROLE) {
        let n = null != S ? f.Z.getRole(S.id, e.value) : true,
          i = null == n ? null : null == A ? true : A[n.id];
        null != i && (t = <div className={O.roleCountContainer}>{<o.tBG size={"sm"} color={"currentColor"} className={O.roleCountIcon} />}{<span className={O.roleCountText}>{i}</span>}</div>)
      }
      return <span className={O.label}>{<span className={O.labelText}>{e.label}</span>}{t}</span>
    },
    P = i.useMemo(() => (0, E.tx)(e.defaultValues, null == S ? true : S.id), [e.defaultValues, S]);
  return <b.ZP selectActionComponent={e} queryOptions={N} renderIcon={C} renderOptionLabel={R} defaultValues={P} />
}