/** Chunk was on 56035 **/
/** chunk id: 203437, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk696200 = require("./696200.js");

function N(e) {
  let {
    availableSlots: t,
    className: n
  } = e;
  return (0, l.jsxs)(o.Text, {
    className: r()(w.suffixNode, n),
    variant: "text-sm/medium",
    color: "text-primary",
    children: [(0, l.jsx)(o.gj8, {
      size: "md",
      color: "currentColor",
      className: w.speakerIcon
    }), j.intl.format(j.t["8Dyg1N"], {
      slots: t
    })]
  })
}

function C(e) {
  let {
    value: t,
    className: n,
    onChange: i
  } = e, C = (0, s.cj)([m.ZP, f.Z, h.default, d.Z], () => {
    let e = {};
    for (let t of m.ZP.getFlattenedGuildIds()) {
      let n = d.Z.getGuild(t);
      null != n && (0, c.Gw)(n, f.Z, h.default).canCreateExpressions && (e[n.id] = n)
    }
    return e
  }), S = (0, s.cj)([b.Z], () => {
    let e = {};
    for (let [n, l] of p.default.entries(C)) {
      var t;
      let a = (0, g.yw)(l, null != (t = b.Z.getSoundsForGuild(n)) ? t : v.Hy, l.premiumTier);
      e[n] = a
    }
    return e
  }, [C]);
  a.useEffect(() => {
    (0, y.w)()
  }, []);
  let O = a.useMemo(() => Object.values(C).map(e => {
      let {
        name: t,
        id: n
      } = e;
      return {
        label: t,
        value: n,
        disabled: S[n] <= 0
      }
    }), [C, S]),
    E = a.useCallback(e => null == e || "" === e.value ? null : (0, l.jsx)(u.Z, {
      className: r()(w.guildSelectOptionIcon, {
        [w.disabledOption]: e.disabled
      }),
      guild: C[e.value],
      size: u.Z.Sizes.SMOL,
      active: true
    }), [C]),
    P = a.useCallback(e => {
      let t = null == e ? true : e.value;
      return null == t || "" === t ? null : (0, l.jsx)(N, {
        className: r()({
          [w.disabledOption]: null == e ? true : e.disabled
        }),
        availableSlots: S[t]
      })
    }, [S]),
    Z = a.useCallback(e => (0, l.jsx)("div", {
      className: r()({
        [w.disabledOption]: e.disabled
      }),
      children: e.label
    }), []),
    M = a.useCallback(e => {
      S[e] <= 0 || i(e)
    }, [S, i]),
    k = (() => {
      let e = S[null != t ? t : x.lds];
      return null == e || e > 0 ? t : true
    })();
  return (0, l.jsx)(o.VcW, {
    className: n,
    onChange: M,
    value: k,
    multi: false,
    options: O,
    renderOptionPrefix: E,
    renderOptionSuffix: P,
    renderOptionLabel: Z,
    placeholder: 0 === O.length ? j.intl.string(j.t.O3i2gY) : j.intl.string(j.t.CunCMD)
  })
}