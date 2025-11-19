/** Chunk was on 56698 **/
/** chunk id: 82035, original params: l,t,n (module,exports,require) **/
require.d(exports, {
  default: () => A
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk910693 = require("./910693.js"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk277081 = require("./277081.js");

function p(l) {
  let {
    disabled: t = false,
    user: n,
    setNickname: i,
    nickname: a,
    error: s,
    hasNick: d
  } = l, c = r.useRef(null), x = r.useCallback(() => {
    var l;
    i(""), null == (l = c.current) || l.focus()
  }, [i]);
  return (0, e.jsxs)(e.Fragment, {
    children: [t || null == n || n.id === o.default.getId() ? null : (0, e.jsx)(u.Zbd, {
      type: u.Zbd.Types.WARNING,
      className: C.card,
      children: (0, e.jsx)(u.Text, {
        variant: "text-md/normal",
        children: h.intl.string(h.t.dq3At2)
      })
    }), (0, e.jsx)(u.oil, {
      label: t ? h.intl.string(h.t.EyA4q5) : h.intl.string(h.t["621LJD"]),
      disabled: t,
      inputRef: c,
      maxLength: E.l$U,
      value: a,
      placeholder: m.ZP.getName(n),
      onChange: i,
      autoFocus: true
    }), null != s ? (0, e.jsx)(u.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      className: C.nickError,
      children: s
    }) : null, d && !t ? (0, e.jsx)("div", {
      className: C.reset,
      children: (0, e.jsx)(u.Avr, {
        text: h.intl.string(h.t.aE02Rz),
        onClick: x,
        textVariant: "text-sm/normal"
      })
    }) : null]
  })
}
let A = function(l) {
  var t;
  let {
    transitionState: n,
    user: u,
    guildId: o,
    onClose: m,
    analyticsSource: C,
    analyticsLocations: A
  } = l, f = (0, i.e7)([x.ZP], () => null != o ? x.ZP.getMember(o, u.id) : null), _ = (0, i.e7)([N.Z, g.default, v.Z], () => {
    var l;
    let t = v.Z.getGuild(o);
    return null != t && ((null == (l = g.default.getCurrentUser()) ? true : l.id) === u.id ? N.Z.can(E.Plq.CHANGE_NICKNAME, t) || N.Z.can(E.Plq.MANAGE_NICKNAMES, t) : N.Z.canManageUser(E.Plq.MANAGE_NICKNAMES, u.id, t))
  }), [b, M] = r.useState(false), [Z, j] = r.useState(null != (t = null == f ? true : f.nick) ? t : ""), [y, I] = r.useState({});
  (0, d.ZP)(() => {
    k.default.track(E.rMx.OPEN_MODAL, {
      type: "Change Server Identity",
      location: E.ZY5.GUILD_CHANNEL,
      source: C
    })
  });
  let P = (0, c.sE)(o, {
      location: null == A ? true : A[0],
      targetUserId: u.id
    }),
    S = r.useCallback(async l => {
      var t, n, e, r, i, s, d, x, v;
      l.preventDefault();
      let N = null;
      if (Z !== (null != (t = null == f ? true : f.nick) ? t : "") && ((N = null != N ? N : {}).nick = Z), null == N) return void m();
      try {
        M(true), await a.tn.patch({
          url: E.ANM.GUILD_MEMBER(o, u.id),
          body: N,
          rejectWithError: false
        }), P(c.jQ.CHANGE_NICKNAME), m()
      } catch (a) {
        let l;
        M(false);
        let t = null != (e = null == (n = a.body) ? true : n.errors) ? e : null;
        (null == t ? true : t.nick) != null ? l = (null == (s = t.nick) || null == (i = s._errors) || null == (r = i[0]) ? true : r.message) || h.intl.string(h.t.xex86n) : (null == t ? true : t.username) != null && (l = (null == (v = t.username) || null == (x = v._errors) || null == (d = x[0]) ? true : d.message) || h.intl.string(h.t.xex86n)), I({
          nick: l
        })
      }
    }, [o, Z, m, u, f, P]);
  return (0, e.jsx)("form", {
    onSubmit: S,
    children: (0, e.jsx)(s.u_l, {
      transitionState: n,
      onClose: m,
      title: h.intl.string(h.t.dilOF6),
      actions: [{
        text: h.intl.string(h.t["ETE/oC"]),
        onClick: m,
        variant: "secondary"
      }, {
        text: h.intl.string(h.t["R3BPH+"]),
        variant: "primary",
        type: "submit",
        disabled: b
      }],
      children: (0, e.jsx)(p, {
        disabled: !_,
        user: u,
        error: y.nick,
        nickname: Z,
        setNickname: j,
        hasNick: (null == f ? true : f.nick) != null
      })
    })
  })
}