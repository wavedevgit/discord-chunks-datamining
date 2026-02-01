/** Chunk was on web.js **/
/** chunk id: 450233, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => z
}), require("./896048.js"), require("./747238.js"), require("./65821.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk534834 = require("./534834.js"),
  Chunk96337 = require("./96337.js"),
  Chunk445737 = require("./445737.js"),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk403362 = require("./403362.js"),
  Chunk832208 = require("./832208.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk784550 = require("./784550.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = b(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let O = "US",
  v = "CA",
  A = 5,
  I = ["AE", "AG", "AN", "AO", "AW", "BF", "BI", "BJ", "BM", "BO", "BQ", "BS", "BW", "BZ", "CD", "CF", "CG", "CI", "CK", "CM", "CW", "DJ", "DM", "ER", "FJ", "GA", "GD", "GH", "GM", "GQ", "GY", "HK", "HM", "IE", "JM", "KE", "KI", "KM", "KN", "KP", "LY", "ML", "MO", "MR", "MW", "NA", "NR", "NU", "QA", "RW", "SB", "SC", "SL", "SR", "ST", "SX", "SY", "TD", "TF", "TG", "TK", "TL", "TO", "TV", "UG", "VU", "YE", "ZA", "ZW"],
  S = Chunk96337.A.map(e => ({
    id: e.alpha2,
    value: e.alpha2,
    label: e.name
  })).filter(e => "KP" !== e.value && "SY" !== e.value),
  T = Object.freeze(S.reduce((e, t) => E(m({}, e), {
    [t.label.toLowerCase()]: t.value
  }), {})),
  C = (0, Chunk915089.Ld)(),
  N = (0, Chunk915089.Ld)(),
  w = (0, Chunk915089.Ld)(),
  R = (0, Chunk915089.Ld)(),
  P = (0, Chunk915089.Ld)(),
  D = (0, Chunk915089.Ld)(),
  L = (0, Chunk915089.Ld)();
var x = function(e) {
    return e.MODAL_US = "modalUS", e.MODAL_INTL = "modalInternational", e.MODAL_US_WITH_NAME = "modalUSWithName", e.MODAL_INTL_WITH_NAME = "modalInternationalWithName", e.SETTINGS_US = "settingsUS", e.SETTINGS_INTL = "settingsInternational", e.SETTINGS_INTL_NO_NAME = "settingsInternationalWithoutName", e.SETTINGS_US_MOBILE = "settingsUSMobile", e.SETTINGS_INTL_MOBILE = "settingsInternationalMobile", e.SETTINGS_INTL_NO_NAME_MOBILE = "settingsInternationalWithoutNameMobile", e
  }(x || {}),
  M = function(e) {
    return e.EDIT = "edit", e.CREATE = "create", e
  }(M || {});
let j = {
    [O]: Chunk445737.D,
    [v]: Chunk534834.i
  },
  k = {
    [O]: Chunk445737.J,
    [v]: Chunk534834.d
  },
  U = e => ({
    name: "name",
    id: C,
    title: () => p.intl.string(p.t.vyuULb),
    autoComplete: "name",
    getClassNameForLayout: e => ["modalUS", "modalInternational", "modalUSWithName", "modalInternationalWithName", "settingsUSMobile", "settingsInternationalMobile", "settingsInternationalWithoutNameMobile"].includes(e) ? _.c6 : _.bt,
    renderInput: e => (0, i.jsx)(c.ksK, m({}, e))
  }),
  G = e => ({
    name: "country",
    id: N,
    title: () => p.intl.string(p.t.eDdrAD),
    autoComplete: "country",
    getClassNameForLayout: e => {
      switch (e) {
        case "modalUS":
        case "modalInternational":
        case "modalUSWithName":
        case "modalInternationalWithName":
          return _.c6;
        default:
          return _.vO
      }
    },
    renderInput(e, t) {
      let {
        onChange: n
      } = e, r = y(e, ["onChange"]);
      return (0, i.jsx)(c.ZiE, E(m({}, r), {
        selectionMode: "single",
        autoFocus: true,
        maxOptionsVisible: 8,
        disabled: "edit" === t.mode,
        options: S,
        onQueryChange: t => {
          let r = t.target.value;
          if (null == n) return;
          let i = r.toLowerCase();
          i in T && n(T[i], e.name)
        },
        onSelectionChange: t => {
          null != n && n(t, e.name)
        }
      }))
    }
  }),
  V = e => ({
    name: "line1",
    id: w,
    title: () => p.intl.string(p.t.x0beVT),
    autoComplete: "address-line1",
    placeholder: () => p.intl.string(p.t["ynII/6"]),
    getClassNameForLayout: e => ["modalUS", "modalInternational", "modalUSWithName", "modalInternationalWithName", "settingsUSMobile", "settingsInternationalMobile", "settingsInternationalWithoutNameMobile"].includes(e) ? _.c6 : _.bt,
    renderInput: e => (0, i.jsx)(c.ksK, m({}, e))
  }),
  F = e => ({
    name: "line2",
    id: R,
    title: () => p.intl.string(p.t.i2Z0gI),
    placeholder: () => p.intl.string(p.t.fKLoNo),
    autoComplete: "address-line2",
    getClassNameForLayout: e => ["modalUS", "modalInternational", "modalUSWithName", "modalInternationalWithName", "settingsUSMobile", "settingsInternationalMobile", "settingsInternationalWithoutNameMobile"].includes(e) ? _.c6 : _.JH,
    renderInput: e => (0, i.jsx)(c.ksK, m({}, e))
  }),
  B = e => ({
    name: "city",
    id: P,
    title: () => p.intl.string(p.t.bUSWlw),
    autoComplete: "address-level2",
    placeholder: () => p.intl.string(p.t["5rRx31"]),
    getClassNameForLayout: e => {
      switch (e) {
        case "modalInternational":
        case "modalUS":
        case "modalInternationalWithName":
        case "modalUSWithName":
        case "settingsUSMobile":
        case "settingsInternationalMobile":
        case "settingsInternationalWithoutNameMobile":
          return _.c6;
        case "settingsInternational":
          return _.bt;
        default:
          return _.ep
      }
    },
    renderInput: e => (0, i.jsx)(c.ksK, m({}, e))
  }),
  H = e => {
    let t, n;
    switch (e) {
      case O:
        t = p.intl.string(p.t["/95CeM"]), n = p.intl.string(p.t["9xLNmi"]);
        break;
      case v:
        t = p.intl.string(p.t.mfpJ9m), n = p.intl.string(p.t.Nc4Rzt);
        break;
      default:
        t = p.intl.string(p.t.mfpJ9m)
    }
    return {
      name: "postalCode",
      id: D,
      title: () => t,
      autoComplete: "postal-code",
      placeholder: () => n,
      getClassNameForLayout: e => {
        switch (e) {
          case "modalInternational":
          case "modalInternationalWithName":
            return _.c6;
          case "modalUS":
          case "modalUSWithName":
          case "settingsUSMobile":
          case "settingsInternationalMobile":
          case "settingsInternationalWithoutNameMobile":
            return _.ep;
          case "settingsInternational":
            return _.kN;
          default:
            return _.IW
        }
      },
      renderInput: e => (0, i.jsx)(c.ksK, m({}, e))
    }
  },
  Y = e => {
    let t;
    switch (e) {
      case O:
        t = p.intl.string(p.t.PNfx5f);
        break;
      case v:
        t = p.intl.string(p.t["7A/tE0"]);
        break;
      default:
        t = p.intl.string(p.t.w0xG2u)
    }
    return {
      name: "state",
      id: L,
      title: () => t,
      autoComplete: "address-level1",
      getClassNameForLayout: e => {
        switch (e) {
          case "modalInternational":
          case "modalInternationalWithName":
          case "settingsUSMobile":
          case "settingsInternationalMobile":
          case "settingsInternationalWithoutNameMobile":
            return _.c6;
          case "modalUS":
          case "modalUSWithName":
            return _.ep;
          case "settingsInternational":
            return _.kN;
          default:
            return _.IW
        }
      },
      renderInput(t, n) {
        let r = j[e],
          a = null == t.value || "" === t.value || null != r && null != r.find(e => {
            let {
              value: n
            } = e;
            return n === t.value
          }),
          {
            onChange: o
          } = t,
          s = y(t, ["onChange"]),
          l = k[e];
        return [O, v].includes(e) && a ? (0, i.jsx)(c.ZiE, E(m({}, s), {
          selectionMode: "single",
          options: r,
          formatOption: e => {
            let {
              value: t,
              label: n
            } = e;
            return {
              id: t,
              value: t,
              label: n
            }
          },
          onQueryChange: e => {
            let n = e.target.value.toLowerCase();
            n in l && null != o && o(l[n], t.name)
          },
          onSelectionChange: e => {
            null != o && o(e, t.name)
          }
        })) : (0, i.jsx)(c.ksK, m({}, t))
      }
    }
  },
  W = {
    modalUS: [
      [G],
      [V],
      [F],
      [B],
      [Y, H]
    ],
    modalInternational: [
      [G],
      [V],
      [F],
      [B],
      [Y],
      [H]
    ],
    modalUSWithName: [
      [G],
      [U],
      [V],
      [F],
      [B],
      [Y, H]
    ],
    modalInternationalWithName: [
      [G],
      [U],
      [V],
      [F],
      [B],
      [Y],
      [H]
    ],
    settingsUS: [
      [U],
      [V, F],
      [B, Y, H],
      [G]
    ],
    settingsUSMobile: [
      [U],
      [V],
      [F],
      [B],
      [Y],
      [H],
      [G]
    ],
    settingsInternational: [
      [U],
      [V, F],
      [B],
      [Y, H],
      [G]
    ],
    settingsInternationalMobile: [
      [U],
      [V],
      [F],
      [B],
      [Y],
      [H],
      [G]
    ],
    settingsInternationalWithoutName: [
      [V, F],
      [B],
      [Y, H],
      [G]
    ],
    settingsInternationalWithoutNameMobile: [
      [V],
      [F],
      [B],
      [Y],
      [H],
      [G]
    ]
  };
class K extends(r = Chunk64700.PureComponent) {
  componentDidMount() {
    this.handleInfoChange()
  }
  componentDidUpdate(e, t) {
    this.state !== t && this.handleInfoChange()
  }
  hasValue(e) {
    return null != e && "" !== e
  }
  validateForm(e) {
    let {
      values: t,
      dirtyFields: n
    } = this.state, r = {};
    e && !n.name || this.hasValue(t.name) || "edit" !== this.props.mode || (r.name = p.intl.string(p.t.KU5mWF)), e && !n.country || this.hasValue(t.country) || (r.country = p.intl.string(p.t["+bm+zE"])), e && !n.line1 || this.hasValue(t.line1) || (r.line1 = p.intl.string(p.t["6HMkB4"])), e && !n.city || this.hasValue(t.city) || (r.city = p.intl.string(p.t.kOrBmU));
    let i = t.country;
    switch (i) {
      case O:
        if (!e || n.postalCode) {
          let e = t.postalCode;
          this.hasValue(e) ? e.length !== A ? r.postalCode = p.intl.string(p.t["+zjAbg"]) : /^\d{5}$/.test(e) || (r.postalCode = p.intl.string(p.t.CuZPea)) : r.postalCode = p.intl.string(p.t["iXID+2"])
        }
        e && !n.state || this.hasValue(t.state) || (r.state = p.intl.string(p.t.RIaPdF));
        break;
      case v:
        e && !n.postalCode || this.hasValue(t.postalCode) || (r.postalCode = p.intl.string(p.t.LRlhb1)), e && !n.state || this.hasValue(t.state) || (r.state = p.intl.string(p.t.PsJCcj));
        break;
      default:
        e && !n.postalCode || this.hasValue(t.postalCode) || I.includes(null != i ? i : "") || (r.postalCode = p.intl.string(p.t.LRlhb1))
    }
    return r
  }
  handleInfoChange() {
    let {
      values: e,
      dirtyFields: t
    } = this.state, n = this.validateForm(false);
    this.props.onBillingAddressChange(e, 0 === Object.keys(n).length, Object.keys(t).length > 0)
  }
  render() {
    let {
      errors: e,
      values: t
    } = this.state, {
      layout: n,
      mode: r,
      className: a,
      error: o
    } = this.props, s = W[n];
    if (null == s) throw Error("Provide a proper layout property.");
    let l = t.country,
      c = s.map(e => {
        let t = e.map(e => e(null != l ? l : "")).filter(d.Vq);
        return t.length > 0 ? {
          fields: t
        } : null
      }).filter(d.Vq);
    return (0, i.jsx)(f.A, {
      className: a,
      form: c,
      layout: n,
      values: t,
      errors: e,
      formError: o,
      onFieldChange: this.handleFieldChange,
      onFieldBlur: this.handleFieldBlur,
      mode: r
    })
  }
  constructor(...e) {
    super(...e), h(this, "state", {
      values: {
        name: this.props.name,
        country: this.props.country,
        line1: this.props.line1,
        line2: this.props.line2,
        city: this.props.city,
        postalCode: this.props.postalCode,
        state: this.props.state
      },
      dirtyFields: {},
      errors: {}
    }), h(this, "handleFieldBlur", () => {
      this.setState({
        errors: this.validateForm(true)
      })
    }), h(this, "handleFieldChange", (e, t) => {
      if (null == t) return;
      let {
        values: n,
        errors: r,
        dirtyFields: i
      } = this.state;
      delete r[t], this.setState({
        values: E(m({}, n), {
          [t]: e
        }),
        dirtyFields: E(m({}, i), {
          [t]: true
        }),
        errors: r
      })
    })
  }
}
h(K, "Layouts", x), h(K, "Modes", M), h(K, "defaultProps", {
  name: "",
  country: "",
  line1: "",
  line2: "",
  city: "",
  postalCode: "",
  state: "",
  layout: "modalUS",
  mode: "create",
  error: null
});
let z = K