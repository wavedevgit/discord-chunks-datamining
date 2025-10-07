/** Chunk was on 17712 **/
/** chunk id: 620021, original params: l,n,e (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk120526 = require("./120526.js");

function p(l) {
  let {
    disabled: n = false,
    user: e,
    setNickname: i,
    nickname: a,
    error: d,
    hasNick: o
  } = l, x = r.useRef(null), h = r.useCallback(() => {
    var l;
    i(""), null == (l = x.current) || l.focus()
  }, [i]);
  return (0, t.jsxs)(t.Fragment, {
    children: [n || null == e || e.id === c.default.getId() ? null : (0, t.jsx)(u.Zbd, {
      type: u.Zbd.Types.WARNING,
      className: E.card,
      children: (0, t.jsx)(u.Text, {
        variant: "text-md/normal",
        children: C.intl.string(C.t.dq3At7)
      })
    }), (0, t.jsx)(u.oil, {
      label: n ? C.intl.string(C.t.EyA4q6) : C.intl.string(C.t["621LJC"]),
      disabled: n,
      inputRef: x,
      maxLength: v.l$U,
      value: a,
      placeholder: m.ZP.getName(e),
      onChange: i,
      autoFocus: true
    }), null != d ? (0, t.jsx)(u.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      className: E.nickError,
      children: d
    }) : null, o && !n ? (0, t.jsx)(s.zx, {
      look: s.zx.Looks.LINK,
      color: s.zx.Colors.LINK,
      size: s.zx.Sizes.NONE,
      onClick: h,
      className: E.reset,
      children: C.intl.string(C.t.aE02R0)
    }) : null]
  })
}
let _ = function(l) {
  var n;
  let {
    transitionState: e,
    user: s,
    guildId: c,
    onClose: m,
    analyticsSource: _,
    analyticsLocations: j
  } = l, b = (0, i.e7)([x.ZP], () => null != c ? x.ZP.getMember(c, s.id) : null), A = (0, i.e7)([N.Z, g.default, h.Z], () => {
    var l;
    let n = h.Z.getGuild(c);
    return null != n && ((null == (l = g.default.getCurrentUser()) ? true : l.id) === s.id ? N.Z.can(v.Plq.CHANGE_NICKNAME, n) || N.Z.can(v.Plq.MANAGE_NICKNAMES, n) : N.Z.canManageUser(v.Plq.MANAGE_NICKNAMES, s.id, n))
  }), [f, y] = r.useState(false), [I, M] = r.useState(null != (n = null == b ? true : b.nick) ? n : ""), [Z, z] = r.useState({});
  (0, d.ZP)(() => {
    k.default.track(v.rMx.OPEN_MODAL, {
      type: "Change Server Identity",
      location: v.ZY5.GUILD_CHANNEL,
      source: _
    })
  });
  let P = (0, o.sE)(c, {
      location: null == j ? true : j[0],
      targetUserId: s.id
    }),
    S = r.useCallback(async l => {
      var n, e, t, r, i, u, d, x, h;
      l.preventDefault();
      let N = null;
      if (I !== (null != (n = null == b ? true : b.nick) ? n : "") && ((N = null != N ? N : {}).nick = I), null == N) return void m();
      try {
        y(true), await a.tn.patch({
          url: v.ANM.GUILD_MEMBER(c, s.id),
          body: N,
          rejectWithError: false
        }), P(o.jQ.CHANGE_NICKNAME), m()
      } catch (a) {
        let l;
        y(false);
        let n = null != (t = null == (e = a.body) ? true : e.errors) ? t : null;
        (null == n ? true : n.nick) != null ? l = (null == (u = n.nick) || null == (i = u._errors) || null == (r = i[0]) ? true : r.message) || C.intl.string(C.t.xex86u) : (null == n ? true : n.username) != null && (l = (null == (h = n.username) || null == (x = h._errors) || null == (d = x[0]) ? true : d.message) || C.intl.string(C.t.xex86u)), z({
          nick: l
        })
      }
    }, [c, I, m, s, b, P]);
  return (0, t.jsx)(u.Y0X, {
    "aria-label": C.intl.string(C.t["PKQB/P"]),
    transitionState: e,
    parentComponent: "ChangeGuildIdentity",
    children: (0, t.jsxs)("form", {
      onSubmit: S,
      children: [(0, t.jsx)(u.xBx, {
        separator: false,
        children: (0, t.jsx)(u.X6q, {
          variant: "heading-lg/semibold",
          children: C.intl.string(C.t.dilOFx)
        })
      }), (0, t.jsx)(u.hzk, {
        className: E.modalContent,
        children: (0, t.jsx)(p, {
          disabled: !A,
          user: s,
          error: Z.nick,
          nickname: I,
          setNickname: M,
          hasNick: (null == b ? true : b.nick) != null
        })
      }), (0, t.jsx)(u.mzw, {
        children: (0, t.jsxs)(u.hE2, {
          direction: "horizontal-reverse",
          children: [(0, t.jsx)(u.zxk, {
            variant: "primary",
            text: C.intl.string(C.t.R3BPHx),
            type: "submit",
            disabled: f
          }), (0, t.jsx)(u.zxk, {
            variant: "secondary",
            text: C.intl.string(C.t["ETE/oK"]),
            onClick: m
          })]
        })
      })]
    })
  })
}