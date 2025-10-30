/** Chunk was on web.js **/
/** chunk id: 464179, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => K
}), require("./388685.js"), require("./35282.js"), require("./415506.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk588391 = require("./588391.js"),
  Chunk217986 = require("./217986.js"),
  Chunk971809 = require("./971809.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk823379 = require("./823379.js"),
  Chunk754103 = require("./754103.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk189068 = require("./189068.js");

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

function b(e, t) {
  if (null == e) return {};
  var n, r, i = y(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let O = "US",
  v = "CA",
  I = 5,
  S = ["AE", "AG", "AN", "AO", "AW", "BF", "BI", "BJ", "BM", "BO", "BQ", "BS", "BW", "BZ", "CD", "CF", "CG", "CI", "CK", "CM", "CW", "DJ", "DM", "ER", "FJ", "GA", "GD", "GH", "GM", "GQ", "GY", "HK", "HM", "IE", "JM", "KE", "KI", "KM", "KN", "KP", "LY", "ML", "MO", "MR", "MW", "NA", "NR", "NU", "QA", "RW", "SB", "SC", "SL", "SR", "ST", "SX", "SY", "TD", "TF", "TG", "TK", "TL", "TO", "TV", "UG", "VU", "YE", "ZA", "ZW"],
  T = Chunk217986.Z.map(e => ({
    value: e.alpha2,
    label: e.name
  })).filter(e => "KP" !== e.value && "SY" !== e.value),
  A = Object.freeze(T.reduce((e, t) => E(m({}, e), {
    [t.label.toLowerCase()]: t.value
  }), {})),
  C = (0, Chunk313201.hQ)(),
  N = (0, Chunk313201.hQ)(),
  R = (0, Chunk313201.hQ)(),
  P = (0, Chunk313201.hQ)(),
  w = (0, Chunk313201.hQ)(),
  D = (0, Chunk313201.hQ)(),
  L = (0, Chunk313201.hQ)();
var x = function(e) {
    return e.MODAL_US = "modalUS", e.MODAL_INTL = "modalInternational", e.MODAL_US_WITH_NAME = "modalUSWithName", e.MODAL_INTL_WITH_NAME = "modalInternationalWithName", e.SETTINGS_US = "settingsUS", e.SETTINGS_INTL = "settingsInternational", e.SETTINGS_INTL_NO_NAME = "settingsInternationalWithoutName", e.SETTINGS_US_MOBILE = "settingsUSMobile", e.SETTINGS_INTL_MOBILE = "settingsInternationalMobile", e.SETTINGS_INTL_NO_NAME_MOBILE = "settingsInternationalWithoutNameMobile", e
  }(x || {}),
  M = function(e) {
    return e.EDIT = "edit", e.CREATE = "create", e
  }(M || {});
let k = {
    [O]: Chunk971809.G,
    [v]: Chunk588391.X
  },
  j = {
    [O]: Chunk971809.T,
    [v]: Chunk588391.j
  },
  U = e => ({
    name: "name",
    id: C,
    title: () => _.intl.string(_.t.vyuULb),
    autoComplete: "name",
    getClassNameForLayout: e => ["modalUS", "modalInternational", "modalUSWithName", "modalInternationalWithName", "settingsUSMobile", "settingsInternationalMobile", "settingsInternationalWithoutNameMobile"].includes(e) ? p.width100 : p.width60,
    renderInput: e => (0, i.jsx)(c.oil, m({}, e))
  }),
  G = e => ({
    name: "country",
    id: N,
    title: () => _.intl.string(_.t.eDdrAD),
    autoComplete: "country",
    getClassNameForLayout: e => {
      switch (e) {
        case "modalUS":
        case "modalInternational":
        case "modalUSWithName":
        case "modalInternationalWithName":
          return p.width100;
        default:
          return p.width75
      }
    },
    renderInput(e, t) {
      let {
        onChange: n
      } = e, r = b(e, ["onChange"]);
      return (0, i.jsx)(c.VcW, E(m({}, r), {
        autoFocus: true,
        maxVisibleItems: 8,
        isDisabled: "edit" === t.mode,
        options: T,
        onSearchChange: t => {
          if (null == n) return;
          let r = t.toLowerCase();
          r in A && n(A[r], e.name)
        },
        onChange: t => {
          null != n && n(t, e.name)
        }
      }))
    }
  }),
  B = e => ({
    name: "line1",
    id: R,
    title: () => _.intl.string(_.t.x0beVT),
    autoComplete: "address-line1",
    placeholder: () => _.intl.string(_.t["ynII/6"]),
    getClassNameForLayout: e => ["modalUS", "modalInternational", "modalUSWithName", "modalInternationalWithName", "settingsUSMobile", "settingsInternationalMobile", "settingsInternationalWithoutNameMobile"].includes(e) ? p.width100 : p.width60,
    renderInput: e => (0, i.jsx)(c.oil, m({}, e))
  }),
  Z = e => ({
    name: "line2",
    id: P,
    title: () => _.intl.string(_.t.i2Z0gI),
    placeholder: () => _.intl.string(_.t.fKLoNo),
    autoComplete: "address-line2",
    getClassNameForLayout: e => ["modalUS", "modalInternational", "modalUSWithName", "modalInternationalWithName", "settingsUSMobile", "settingsInternationalMobile", "settingsInternationalWithoutNameMobile"].includes(e) ? p.width100 : p.width40,
    renderInput: e => (0, i.jsx)(c.oil, m({}, e))
  }),
  F = e => ({
    name: "city",
    id: w,
    title: () => _.intl.string(_.t.bUSWlw),
    autoComplete: "address-level2",
    placeholder: () => _.intl.string(_.t["5rRx31"]),
    getClassNameForLayout: e => {
      switch (e) {
        case "modalInternational":
        case "modalUS":
        case "modalInternationalWithName":
        case "modalUSWithName":
        case "settingsUSMobile":
        case "settingsInternationalMobile":
        case "settingsInternationalWithoutNameMobile":
          return p.width100;
        case "settingsInternational":
          return p.width60;
        default:
          return p.width50
      }
    },
    renderInput: e => (0, i.jsx)(c.oil, m({}, e))
  }),
  V = e => {
    let t, n;
    switch (e) {
      case O:
        t = _.intl.string(_.t["/95CeM"]), n = _.intl.string(_.t["9xLNmi"]);
        break;
      case v:
        t = _.intl.string(_.t.mfpJ9m), n = _.intl.string(_.t.Nc4Rzt);
        break;
      default:
        t = _.intl.string(_.t.mfpJ9m)
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
            return p.width100;
          case "modalUS":
          case "modalUSWithName":
          case "settingsUSMobile":
          case "settingsInternationalMobile":
          case "settingsInternationalWithoutNameMobile":
            return p.width50;
          case "settingsInternational":
            return p.width30;
          default:
            return p.width25
        }
      },
      renderInput: e => (0, i.jsx)(c.oil, m({}, e))
    }
  },
  H = e => {
    let t;
    switch (e) {
      case O:
        t = _.intl.string(_.t.PNfx5f);
        break;
      case v:
        t = _.intl.string(_.t["7A/tE0"]);
        break;
      default:
        t = _.intl.string(_.t.w0xG2u)
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
            return p.width100;
          case "modalUS":
          case "modalUSWithName":
            return p.width50;
          case "settingsInternational":
            return p.width30;
          default:
            return p.width25
        }
      },
      renderInput(t, n, r) {
        let a = k[e],
          o = null == t.value || "" === t.value || null != a && null != a.find(e => {
            let {
              value: n
            } = e;
            return n === t.value
          }),
          {
            onChange: s
          } = t,
          l = b(t, ["onChange"]),
          u = j[e];
        return [O, v].includes(e) && o ? (0, i.jsx)(c.VcW, E(m({}, l), {
          popoutPosition: ["modalUS", "modalInternational"].includes(r) ? "top" : true,
          options: a,
          onSearchChange: e => {
            let n = e.toLowerCase();
            n in u && null != s && s(u[n], t.name)
          },
          onChange: e => {
            null != s && s(e, t.name)
          }
        })) : (0, i.jsx)(c.oil, m({}, t))
      }
    }
  },
  Y = {
    modalUS: [
      [G],
      [B],
      [Z],
      [F],
      [H, V]
    ],
    modalInternational: [
      [G],
      [B],
      [Z],
      [F],
      [H],
      [V]
    ],
    modalUSWithName: [
      [G],
      [U],
      [B],
      [Z],
      [F],
      [H, V]
    ],
    modalInternationalWithName: [
      [G],
      [U],
      [B],
      [Z],
      [F],
      [H],
      [V]
    ],
    settingsUS: [
      [U],
      [B, Z],
      [F, H, V],
      [G]
    ],
    settingsUSMobile: [
      [U],
      [B],
      [Z],
      [F],
      [H],
      [V],
      [G]
    ],
    settingsInternational: [
      [U],
      [B, Z],
      [F],
      [H, V],
      [G]
    ],
    settingsInternationalMobile: [
      [U],
      [B],
      [Z],
      [F],
      [H],
      [V],
      [G]
    ],
    settingsInternationalWithoutName: [
      [B, Z],
      [F],
      [H, V],
      [G]
    ],
    settingsInternationalWithoutNameMobile: [
      [B],
      [Z],
      [F],
      [H],
      [V],
      [G]
    ]
  };
class W extends(r = Chunk647438.PureComponent) {
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
    e && !n.name || this.hasValue(t.name) || "edit" !== this.props.mode || (r.name = _.intl.string(_.t.KU5mWF)), e && !n.country || this.hasValue(t.country) || (r.country = _.intl.string(_.t["+bm+zE"])), e && !n.line1 || this.hasValue(t.line1) || (r.line1 = _.intl.string(_.t["6HMkB4"])), e && !n.city || this.hasValue(t.city) || (r.city = _.intl.string(_.t.kOrBmU));
    let i = t.country;
    switch (i) {
      case O:
        if (!e || n.postalCode) {
          let e = t.postalCode;
          this.hasValue(e) ? e.length !== I ? r.postalCode = _.intl.string(_.t["+zjAbg"]) : /^\d{5}$/.test(e) || (r.postalCode = _.intl.string(_.t.CuZPea)) : r.postalCode = _.intl.string(_.t["iXID+2"])
        }
        e && !n.state || this.hasValue(t.state) || (r.state = _.intl.string(_.t.RIaPdF));
        break;
      case v:
        e && !n.postalCode || this.hasValue(t.postalCode) || (r.postalCode = _.intl.string(_.t.LRlhb1)), e && !n.state || this.hasValue(t.state) || (r.state = _.intl.string(_.t.PsJCcj));
        break;
      default:
        e && !n.postalCode || this.hasValue(t.postalCode) || S.includes(null != i ? i : "") || (r.postalCode = _.intl.string(_.t.LRlhb1))
    }
    return r
  }
  handleInfoChange() {
    let {
      values: e,
      dirtyFields: t
    } = this.state, n = this.validateForm(false);
    this.props.onBillingAddressChange(module, 0 === Object.keys(require).length, Object.keys(exports).length > 0)
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
    } = this.props, s = Y[require];
    if (null == Chunk217986) throw Error("Provide a proper layout property.");
    let l = exports.country,
      c = Chunk217986.map(e => {
        let t = e.map(e => e(null != l ? l : "")).filter(d.lm);
        return t.length > 0 ? {
          fields: t
        } : null
      }).filter(Chunk823379.lm);
    return (0, Chunk951288.jsx)(Chunk754103.Z, {
      className: Chunk647438,
      form: Chunk481060,
      layout: require,
      values: exports,
      errors: module,
      formError: Chunk588391,
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
h(W, "Layouts", x), h(W, "Modes", M), h(W, "defaultProps", {
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
let K = W