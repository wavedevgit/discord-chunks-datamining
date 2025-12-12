/** Chunk was on 56035 **/
/** chunk id: 203437, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk668339 = require("./668339.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk357156 = require("./357156.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk771845 = require("./771845.js"),
  Chunk594174 = require("./594174.js"),
  Chunk267642 = require("./267642.js"),
  Chunk709054 = require("./709054.js"),
  Chunk208049 = require("./208049.js"),
  Chunk763296 = require("./763296.js"),
  Chunk710111 = require("./710111.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk697847 = require("./697847.js");

function C(e) {
  let {
    availableSlots: n,
    className: t
  } = e;
  return (0, l.jsxs)(u.Text, {
    className: r()(w.suffixNode, t),
    variant: "text-sm/medium",
    color: "text-strong",
    children: [(0, l.jsx)(u.gj8, {
      size: "md",
      color: "currentColor",
      className: w.speakerIcon
    }), N.intl.format(N.t["8Dyg1C"], {
      slots: n
    })]
  })
}

function S(e) {
  let {
    label: n,
    value: t,
    className: i,
    onChange: u
  } = e, S = (0, s.cj)([g.ZP, m.Z, h.default, f.Z], () => {
    let e = {};
    for (let n of g.ZP.getFlattenedGuildIds()) {
      let t = f.Z.getGuild(n);
      null != t && (0, d.Gw)(t, m.Z, h.default).canCreateExpressions && (e[t.id] = t)
    }
    return e
  }), O = (0, s.cj)([y.Z], () => {
    let e = {};
    for (let [t, l] of p.default.entries(S)) {
      var n;
      let a = (0, v.yw)(l, null != (n = y.Z.getSoundsForGuild(t)) ? n : j.Hy, l.premiumTier);
      e[t] = a
    }
    return e
  }, [S]);
  a.useEffect(() => {
    (0, b.w)()
  }, []);
  let Z = a.useMemo(() => Object.values(S).map(e => {
      let {
        name: n,
        id: t
      } = e;
      return {
        label: n,
        value: t,
        disabled: O[t] <= 0
      }
    }), [S, O]),
    P = a.useCallback(e => null == e || "" === e.value ? null : (0, l.jsx)(c.Z, {
      className: r()(w.guildSelectOptionIcon, {
        [w.disabledOption]: e.disabled
      }),
      guild: S[e.value],
      size: c.Z.Sizes.SMOL,
      active: true
    }), [S]),
    E = a.useCallback(e => {
      let n = null == e ? true : e.value;
      return null == n || "" === n ? null : (0, l.jsx)(C, {
        className: r()({
          [w.disabledOption]: null == e ? true : e.disabled
        }),
        availableSlots: O[n]
      })
    }, [O]),
    k = a.useCallback(e => (0, l.jsx)("div", {
      className: r()({
        [w.disabledOption]: e.disabled
      }),
      children: e.label
    }), []),
    M = a.useCallback(e => {
      O[e] <= 0 || u(e)
    }, [O, u]),
    I = (() => {
      let e = O[null != t ? t : x.lds];
      return null == e || e > 0 ? t : true
    })();
  return (0, l.jsx)(o.d, {
    label: n,
    className: i,
    onChange: M,
    value: I,
    multi: false,
    options: Z,
    renderOptionPrefix: P,
    renderOptionSuffix: E,
    renderOptionLabel: k,
    placeholder: 0 === Z.length ? N.intl.string(N.t.O3i2gV) : N.intl.string(N.t.CunCMN)
  })
}