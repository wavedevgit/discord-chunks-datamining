/** Chunk was on 56035 **/
/** chunk id: 203437, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
  Chunk672046 = require("./672046.js");

function _(e) {
  let {
    availableSlots: n,
    className: t
  } = e;
  return (0, a.jsxs)(s.Text, {
    className: i()(w.suffixNode, t),
    variant: "text-sm/medium",
    color: "text-primary",
    children: [(0, a.jsx)(s.gj8, {
      size: "md",
      color: "currentColor",
      className: w.speakerIcon
    }), j.intl.format(j.t["8Dyg1N"], {
      slots: n
    })]
  })
}

function C(e) {
  let {
    label: n,
    value: t,
    className: r,
    onChange: C
  } = e, N = (0, o.cj)([m.ZP, f.Z, g.default, d.Z], () => {
    let e = {};
    for (let n of m.ZP.getFlattenedGuildIds()) {
      let t = d.Z.getGuild(n);
      null != t && (0, c.Gw)(t, f.Z, g.default).canCreateExpressions && (e[t.id] = t)
    }
    return e
  }), S = (0, o.cj)([y.Z], () => {
    let e = {};
    for (let [t, a] of p.default.entries(N)) {
      var n;
      let l = (0, h.yw)(a, null != (n = y.Z.getSoundsForGuild(t)) ? n : v.Hy, a.premiumTier);
      e[t] = l
    }
    return e
  }, [N]);
  l.useEffect(() => {
    (0, b.w)()
  }, []);
  let O = l.useMemo(() => Object.values(N).map(e => {
      let {
        name: n,
        id: t
      } = e;
      return {
        label: n,
        value: t,
        disabled: S[t] <= 0
      }
    }), [N, S]),
    E = l.useCallback(e => null == e || "" === e.value ? null : (0, a.jsx)(u.Z, {
      className: i()(w.guildSelectOptionIcon, {
        [w.disabledOption]: e.disabled
      }),
      guild: N[e.value],
      size: u.Z.Sizes.SMOL,
      active: true
    }), [N]),
    P = l.useCallback(e => {
      let n = null == e ? true : e.value;
      return null == n || "" === n ? null : (0, a.jsx)(_, {
        className: i()({
          [w.disabledOption]: null == e ? true : e.disabled
        }),
        availableSlots: S[n]
      })
    }, [S]),
    I = l.useCallback(e => (0, a.jsx)("div", {
      className: i()({
        [w.disabledOption]: e.disabled
      }),
      children: e.label
    }), []),
    M = l.useCallback(e => {
      S[e] <= 0 || C(e)
    }, [S, C]),
    Z = (() => {
      let e = S[null != t ? t : x.lds];
      return null == e || e > 0 ? t : true
    })();
  return (0, a.jsx)(s.VcW, {
    label: n,
    className: r,
    onChange: M,
    value: Z,
    multi: false,
    options: O,
    renderOptionPrefix: E,
    renderOptionSuffix: P,
    renderOptionLabel: I,
    placeholder: 0 === O.length ? j.intl.string(j.t.O3i2gY) : j.intl.string(j.t.CunCMD)
  })
}