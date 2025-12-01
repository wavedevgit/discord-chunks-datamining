/** Chunk was on 56035 **/
/** chunk id: 203437, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
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

function w(e) {
  let {
    availableSlots: n,
    className: t
  } = e;
  return (0, l.jsxs)(o.Text, {
    className: r()(N.suffixNode, t),
    variant: "text-sm/medium",
    color: "text-primary",
    children: [(0, l.jsx)(o.gj8, {
      size: "md",
      color: "currentColor",
      className: N.speakerIcon
    }), x.intl.format(x.t["8Dyg1C"], {
      slots: n
    })]
  })
}

function C(e) {
  let {
    label: n,
    value: t,
    className: i,
    onChange: C
  } = e, S = (0, s.cj)([m.ZP, f.Z, g.default, d.Z], () => {
    let e = {};
    for (let n of m.ZP.getFlattenedGuildIds()) {
      let t = d.Z.getGuild(n);
      null != t && (0, c.Gw)(t, f.Z, g.default).canCreateExpressions && (e[t.id] = t)
    }
    return e
  }), O = (0, s.cj)([b.Z], () => {
    let e = {};
    for (let [t, l] of v.default.entries(S)) {
      var n;
      let a = (0, h.yw)(l, null != (n = b.Z.getSoundsForGuild(t)) ? n : y.Hy, l.premiumTier);
      e[t] = a
    }
    return e
  }, [S]);
  a.useEffect(() => {
    (0, p.w)()
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
    P = a.useCallback(e => null == e || "" === e.value ? null : (0, l.jsx)(u.Z, {
      className: r()(N.guildSelectOptionIcon, {
        [N.disabledOption]: e.disabled
      }),
      guild: S[e.value],
      size: u.Z.Sizes.SMOL,
      active: true
    }), [S]),
    E = a.useCallback(e => {
      let n = null == e ? true : e.value;
      return null == n || "" === n ? null : (0, l.jsx)(w, {
        className: r()({
          [N.disabledOption]: null == e ? true : e.disabled
        }),
        availableSlots: O[n]
      })
    }, [O]),
    M = a.useCallback(e => (0, l.jsx)("div", {
      className: r()({
        [N.disabledOption]: e.disabled
      }),
      children: e.label
    }), []),
    k = a.useCallback(e => {
      O[e] <= 0 || C(e)
    }, [O, C]),
    I = (() => {
      let e = O[null != t ? t : j.lds];
      return null == e || e > 0 ? t : true
    })();
  return (0, l.jsx)(o.VcW, {
    label: n,
    className: i,
    onChange: k,
    value: I,
    multi: false,
    options: Z,
    renderOptionPrefix: P,
    renderOptionSuffix: E,
    renderOptionLabel: M,
    placeholder: 0 === Z.length ? x.intl.string(x.t.O3i2gV) : x.intl.string(x.t.CunCMN)
  })
}