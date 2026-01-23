/** Chunk was on 48635 **/
/** chunk id: 752118, original params: l,t,e (module,exports,require) **/
require.d(exports, {
  default: () => E
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

function C(l) {
  let {
    disabled: t = false,
    user: e,
    setNickname: i,
    nickname: a,
    error: s,
    hasNick: c
  } = l, d = r.useRef(null), x = r.useCallback(() => {
    var l;
    i(""), null == (l = d.current) || l.focus()
  }, [i]);
  return (0, n.jsxs)(n.Fragment, {
    children: [t || null == e || e.id === o.default.getId() ? null : (0, n.jsx)(u.ZpM, {
      type: u.ZpM.Types.WARNING,
      className: p.Nr,
      children: (0, n.jsx)(u.Text, {
        variant: "text-md/normal",
        children: h.intl.string(h.t.dq3At2)
      })
    }), (0, n.jsx)(u.ksK, {
      label: t ? h.intl.string(h.t.EyA4q5) : h.intl.string(h.t["621LJD"]),
      disabled: t,
      inputRef: d,
      maxLength: m.d0r,
      value: a,
      placeholder: k.Ay.getName(e),
      onChange: i,
      autoFocus: true
    }), null != s ? (0, n.jsx)(u.Text, {
      variant: "text-xs/normal",
      color: "text-feedback-critical",
      className: p.wt,
      children: s
    }) : null, c && !t ? (0, n.jsx)("div", {
      className: p.cL,
      children: (0, n.jsx)(u.QWc, {
        text: h.intl.string(h.t.aE02Rz),
        onClick: x,
        textVariant: "text-sm/normal"
      })
    }) : null]
  })
}
let E = function(l) {
  var t;
  let {
    transitionState: e,
    user: u,
    guildId: o,
    onClose: k,
    analyticsSource: p,
    analyticsLocations: E
  } = l, y = (0, i.bG)([x.Ay], () => null != o ? x.Ay.getMember(o, u.id) : null), b = (0, i.bG)([N.A, v.default, A.A], () => {
    var l;
    let t = A.A.getGuild(o);
    return null != t && ((null == (l = v.default.getCurrentUser()) ? true : l.id) === u.id ? N.A.can(m.xBc.CHANGE_NICKNAME, t) || N.A.can(m.xBc.MANAGE_NICKNAMES, t) : N.A.canManageUser(m.xBc.MANAGE_NICKNAMES, u.id, t))
  }), [f, _] = r.useState(false), [M, j] = r.useState(null != (t = null == y ? true : y.nick) ? t : ""), [G, I] = r.useState({});
  (0, c.Ay)(() => {
    g.default.track(m.HAw.OPEN_MODAL, {
      type: "Change Server Identity",
      location: m.liQ.GUILD_CHANNEL,
      source: p
    })
  });
  let S = (0, d.$9)(o, {
      location: null == E ? true : E[0],
      targetUserId: u.id
    }),
    L = r.useCallback(async l => {
      var t, e, n, r, i, s, c, x, A;
      l.preventDefault();
      let N = null;
      if (M !== (null != (t = null == y ? true : y.nick) ? t : "") && ((N = null != N ? N : {}).nick = M), null == N) return void k();
      try {
        _(true), await a.Bo.patch({
          url: m.Rsh.GUILD_MEMBER(o, u.id),
          body: N,
          rejectWithError: false
        }), S(d.Nj.CHANGE_NICKNAME), k()
      } catch (a) {
        let l;
        _(false);
        let t = null != (e = null == (n = a.body) ? true : n.errors) ? e : null;
        (null == t ? true : t.nick) != null ? l = (null == (s = t.nick) || null == (i = s._errors) || null == (r = i[0]) ? true : r.message) || h.intl.string(h.t.xex86n) : (null == t ? true : t.username) != null && (l = (null == (A = t.username) || null == (x = A._errors) || null == (c = x[0]) ? true : c.message) || h.intl.string(h.t.xex86n)), I({
          nick: l
        })
      }
    }, [o, M, k, u, y, S]);
  return (0, n.jsx)("form", {
    onSubmit: L,
    children: (0, n.jsx)(s.aFV, {
      transitionState: e,
      onClose: k,
      title: h.intl.string(h.t.dilOF6),
      actions: [{
        text: h.intl.string(h.t["ETE/oC"]),
        onClick: k,
        variant: "secondary"
      }, {
        text: h.intl.string(h.t["R3BPH+"]),
        variant: "primary",
        type: "submit",
        disabled: f
      }],
      children: (0, n.jsx)(C, {
        disabled: !b,
        user: u,
        error: G.nick,
        nickname: M,
        setNickname: j,
        hasNick: (null == y ? true : y.nick) != null
      })
    })
  })
}