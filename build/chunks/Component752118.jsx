/** Chunk was on 48635 **/
/** chunk id: 752118, original params: l,t,e (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk504049 = require("./504049.js"),
  Chunk961350 = require("./961350.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk427262 = require("./427262.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk940892 = require("./940892.js");

function f(l) {
  let {
    disabled: t = false,
    user: e,
    setNickname: r,
    nickname: a,
    error: s,
    hasNick: c
  } = l, d = i.useRef(null), x = i.useCallback(() => {
    var l;
    r(""), null == (l = d.current) || l.focus()
  }, [r]);
  return (0, n.jsxs)(n.Fragment, {
    children: [t || null == e || e.id === o.default.getId() ? null : (0, n.jsx)(u.ZpM, {
      type: u.ZpM.Types.WARNING,
      className: p.Nr,
      children: (0, n.jsx)(u.Text, {
        variant: "text-md/normal",
        children: k.intl.string(k.t.dq3At2)
      })
    }), (0, n.jsx)(u.ksK, {
      label: t ? k.intl.string(k.t.EyA4q5) : k.intl.string(k.t["621LJD"]),
      disabled: t,
      inputRef: d,
      maxLength: h.d0r,
      value: a,
      placeholder: m.Ay.getName(e),
      onChange: r,
      autoFocus: true
    }), null != s ? (0, n.jsx)(u.Text, {
      variant: "text-xs/normal",
      color: "text-feedback-critical",
      className: p.wt,
      children: s
    }) : null, c && !t ? (0, n.jsx)("div", {
      className: p.cL,
      children: (0, n.jsx)(u.QWc, {
        text: k.intl.string(k.t.aE02Rz),
        onClick: x,
        textVariant: "text-sm/normal"
      })
    }) : null]
  })
}
let C = function(l) {
  var t;
  let {
    transitionState: e,
    user: u,
    guildId: o,
    onClose: m,
    analyticsSource: p,
    analyticsLocations: C
  } = l, E = (0, r.bG)([x.Ay], () => null != o ? x.Ay.getMember(o, u.id) : null), b = (0, r.bG)([N.A, v.default, A.A], () => {
    var l;
    let t = A.A.getGuild(o);
    return null != t && ((null == (l = v.default.getCurrentUser()) ? true : l.id) === u.id ? N.A.can(h.xBc.CHANGE_NICKNAME, t) || N.A.can(h.xBc.MANAGE_NICKNAMES, t) : N.A.canManageUser(h.xBc.MANAGE_NICKNAMES, u.id, t))
  }), [y, M] = i.useState(false), [j, _] = i.useState(null != (t = null == E ? true : E.nick) ? t : ""), [G, I] = i.useState({});
  (0, c.Ay)(() => {
    g.default.track(h.HAw.OPEN_MODAL, {
      type: "Change Server Identity",
      location: h.liQ.GUILD_CHANNEL,
      source: p
    })
  });
  let S = (0, d.$9)(o, {
      location: null == C ? true : C[0],
      targetUserId: u.id
    }),
    L = i.useCallback(async l => {
      var t, e, n, i, r, s, c, x, A;
      l.preventDefault();
      let N = null;
      if (j !== (null != (t = null == E ? true : E.nick) ? t : "") && ((N = null != N ? N : {}).nick = j), null == N) return void m();
      try {
        M(true), await a.Bo.patch({
          url: h.Rsh.GUILD_MEMBER(o, u.id),
          body: N,
          rejectWithError: false
        }), S(d.Nj.CHANGE_NICKNAME), m()
      } catch (a) {
        let l;
        M(false);
        let t = null != (e = null == (n = a.body) ? true : n.errors) ? e : null;
        (null == t ? true : t.nick) != null ? l = (null == (s = t.nick) || null == (r = s._errors) || null == (i = r[0]) ? true : i.message) || k.intl.string(k.t.xex86n) : (null == t ? true : t.username) != null && (l = (null == (A = t.username) || null == (x = A._errors) || null == (c = x[0]) ? true : c.message) || k.intl.string(k.t.xex86n)), I({
          nick: l
        })
      }
    }, [o, j, m, u, E, S]);
  return (0, n.jsx)("form", {
    onSubmit: L,
    children: (0, n.jsx)(s.aFV, {
      transitionState: e,
      onClose: m,
      title: k.intl.string(k.t.dilOF6),
      actions: [{
        text: k.intl.string(k.t["ETE/oC"]),
        onClick: m,
        variant: "secondary"
      }, {
        text: k.intl.string(k.t["R3BPH+"]),
        variant: "primary",
        type: "submit",
        disabled: y
      }],
      children: (0, n.jsx)(f, {
        disabled: !b,
        user: u,
        error: G.nick,
        nickname: j,
        setNickname: _,
        hasNick: (null == E ? true : E.nick) != null
      })
    })
  })
}