/** Chunk was on web.js **/
/** chunk id: 464179, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => z
}), require("./388685.js"), require("./35282.js"), require("./415506.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk588391 = require("./588391.js"),
  Chunk217986 = require("./217986.js"),
  Chunk971809 = require("./971809.js"),
  Chunk668339 = require("./668339.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk823379 = require("./823379.js"),
  Chunk754103 = require("./754103.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk94627 = require("./94627.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
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

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = O(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let v = "US",
  S = "CA",
  I = 5,
  T = ["AE", "AG", "AN", "AO", "AW", "BF", "BI", "BJ", "BM", "BO", "BQ", "BS", "BW", "BZ", "CD", "CF", "CG", "CI", "CK", "CM", "CW", "DJ", "DM", "ER", "FJ", "GA", "GD", "GH", "GM", "GQ", "GY", "HK", "HM", "IE", "JM", "KE", "KI", "KM", "KN", "KP", "LY", "ML", "MO", "MR", "MW", "NA", "NR", "NU", "QA", "RW", "SB", "SC", "SL", "SR", "ST", "SX", "SY", "TD", "TF", "TG", "TK", "TL", "TO", "TV", "UG", "VU", "YE", "ZA", "ZW"],
  C = Chunk217986.Z.map(e => ({
    value: e.alpha2,
    label: e.name
  })).filter(e => "KP" !== e.value && "SY" !== e.value),
  A = Object.freeze(C.reduce((e, t) => b(g({}, e), {
    [t.label.toLowerCase()]: t.value
  }), {})),
  N = (0, Chunk313201.hQ)(),
  P = (0, Chunk313201.hQ)(),
  R = (0, Chunk313201.hQ)(),
  w = (0, Chunk313201.hQ)(),
  D = (0, Chunk313201.hQ)(),
  x = (0, Chunk313201.hQ)(),
  L = (0, Chunk313201.hQ)();
var j = function(e) {
    return e.MODAL_US = "modalUS", e.MODAL_INTL = "modalInternational", e.MODAL_US_WITH_NAME = "modalUSWithName", e.MODAL_INTL_WITH_NAME = "modalInternationalWithName", e.SETTINGS_US = "settingsUS", e.SETTINGS_INTL = "settingsInternational", e.SETTINGS_INTL_NO_NAME = "settingsInternationalWithoutName", e.SETTINGS_US_MOBILE = "settingsUSMobile", e.SETTINGS_INTL_MOBILE = "settingsInternationalMobile", e.SETTINGS_INTL_NO_NAME_MOBILE = "settingsInternationalWithoutNameMobile", e
  }(j || {}),
  M = function(e) {
    return e.EDIT = "edit", e.CREATE = "create", e
  }(M || {});
let k = {
    [v]: Chunk971809.G,
    [S]: Chunk588391.X
  },
  U = {
    [v]: Chunk971809.T,
    [S]: Chunk588391.j
  },
  G = e => ({
    name: "name",
    id: N,
    title: () => _.intl.string(_.t.vyuULb),
    autoComplete: "name",
    getClassNameForLayout: e => ["modalUS", "modalInternational", "modalUSWithName", "modalInternationalWithName", "settingsUSMobile", "settingsInternationalMobile", "settingsInternationalWithoutNameMobile"].includes(e) ? m.width100 : m.width60,
    renderInput: e => (0, i.jsx)(u.oil, g({}, e))
  }),
  Z = e => ({
    name: "country",
    id: P,
    title: () => _.intl.string(_.t.eDdrAD),
    autoComplete: "country",
    getClassNameForLayout: e => {
      switch (e) {
        case "modalUS":
        case "modalInternational":
        case "modalUSWithName":
        case "modalInternationalWithName":
          return m.width100;
        default:
          return m.width75
      }
    },
    renderInput(e, t) {
      let {
        onChange: n
      } = e, r = y(e, ["onChange"]);
      return (0, i.jsx)(c.d, b(g({}, r), {
        autoFocus: true,
        maxVisibleItems: 8,
        isDisabled: "edit" === t.mode,
        options: C,
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
  F = e => ({
    name: "line1",
    id: R,
    title: () => _.intl.string(_.t.x0beVT),
    autoComplete: "address-line1",
    placeholder: () => _.intl.string(_.t["ynII/6"]),
    getClassNameForLayout: e => ["modalUS", "modalInternational", "modalUSWithName", "modalInternationalWithName", "settingsUSMobile", "settingsInternationalMobile", "settingsInternationalWithoutNameMobile"].includes(e) ? m.width100 : m.width60,
    renderInput: e => (0, i.jsx)(u.oil, g({}, e))
  }),
  B = e => ({
    name: "line2",
    id: w,
    title: () => _.intl.string(_.t.i2Z0gI),
    placeholder: () => _.intl.string(_.t.fKLoNo),
    autoComplete: "address-line2",
    getClassNameForLayout: e => ["modalUS", "modalInternational", "modalUSWithName", "modalInternationalWithName", "settingsUSMobile", "settingsInternationalMobile", "settingsInternationalWithoutNameMobile"].includes(e) ? m.width100 : m.width40,
    renderInput: e => (0, i.jsx)(u.oil, g({}, e))
  }),
  V = e => ({
    name: "city",
    id: D,
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
          return m.width100;
        case "settingsInternational":
          return m.width60;
        default:
          return m.width50
      }
    },
    renderInput: e => (0, i.jsx)(u.oil, g({}, e))
  }),
  H = e => {
    let t, n;
    switch (e) {
      case v:
        t = _.intl.string(_.t["/95CeM"]), n = _.intl.string(_.t["9xLNmi"]);
        break;
      case S:
        t = _.intl.string(_.t.mfpJ9m), n = _.intl.string(_.t.Nc4Rzt);
        break;
      default:
        t = _.intl.string(_.t.mfpJ9m)
    }
    return {
      name: "postalCode",
      id: x,
      title: () => t,
      autoComplete: "postal-code",
      placeholder: () => n,
      getClassNameForLayout: e => {
        switch (e) {
          case "modalInternational":
          case "modalInternationalWithName":
            return m.width100;
          case "modalUS":
          case "modalUSWithName":
          case "settingsUSMobile":
          case "settingsInternationalMobile":
          case "settingsInternationalWithoutNameMobile":
            return m.width50;
          case "settingsInternational":
            return m.width30;
          default:
            return m.width25
        }
      },
      renderInput: e => (0, i.jsx)(u.oil, g({}, e))
    }
  },
  Y = e => {
    let t;
    switch (e) {
      case v:
        t = _.intl.string(_.t.PNfx5f);
        break;
      case S:
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
            return m.width100;
          case "modalUS":
          case "modalUSWithName":
            return m.width50;
          case "settingsInternational":
            return m.width30;
          default:
            return m.width25
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
          l = y(t, ["onChange"]),
          d = U[e];
        return [v, S].includes(e) && o ? (0, i.jsx)(c.d, b(g({}, l), {
          popoutPosition: ["modalUS", "modalInternational"].includes(r) ? "top" : true,
          options: a,
          onSearchChange: e => {
            let n = e.toLowerCase();
            n in d && null != s && s(d[n], t.name)
          },
          onChange: e => {
            null != s && s(e, t.name)
          }
        })) : (0, i.jsx)(u.oil, g({}, t))
      }
    }
  },
  W = {
    modalUS: [
      [Z],
      [F],
      [B],
      [V],
      [Y, H]
    ],
    modalInternational: [
      [Z],
      [F],
      [B],
      [V],
      [Y],
      [H]
    ],
    modalUSWithName: [
      [Z],
      [G],
      [F],
      [B],
      [V],
      [Y, H]
    ],
    modalInternationalWithName: [
      [Z],
      [G],
      [F],
      [B],
      [V],
      [Y],
      [H]
    ],
    settingsUS: [
      [G],
      [F, B],
      [V, Y, H],
      [Z]
    ],
    settingsUSMobile: [
      [G],
      [F],
      [B],
      [V],
      [Y],
      [H],
      [Z]
    ],
    settingsInternational: [
      [G],
      [F, B],
      [V],
      [Y, H],
      [Z]
    ],
    settingsInternationalMobile: [
      [G],
      [F],
      [B],
      [V],
      [Y],
      [H],
      [Z]
    ],
    settingsInternationalWithoutName: [
      [F, B],
      [V],
      [Y, H],
      [Z]
    ],
    settingsInternationalWithoutNameMobile: [
      [F],
      [B],
      [V],
      [Y],
      [H],
      [Z]
    ]
  };
class K extends(r = Chunk473749.PureComponent) {
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
      case v:
        if (!e || n.postalCode) {
          let e = t.postalCode;
          this.hasValue(e) ? e.length !== I ? r.postalCode = _.intl.string(_.t["+zjAbg"]) : /^\d{5}$/.test(e) || (r.postalCode = _.intl.string(_.t.CuZPea)) : r.postalCode = _.intl.string(_.t["iXID+2"])
        }
        e && !n.state || this.hasValue(t.state) || (r.state = _.intl.string(_.t.RIaPdF));
        break;
      case S:
        e && !n.postalCode || this.hasValue(t.postalCode) || (r.postalCode = _.intl.string(_.t.LRlhb1)), e && !n.state || this.hasValue(t.state) || (r.state = _.intl.string(_.t.PsJCcj));
        break;
      default:
        e && !n.postalCode || this.hasValue(t.postalCode) || T.includes(null != i ? i : "") || (r.postalCode = _.intl.string(_.t.LRlhb1))
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
    } = this.props, s = W[require];
    if (null == Chunk217986) throw Error("Provide a proper layout property.");
    let l = exports.country,
      c = Chunk217986.map(e => {
        let t = e.map(e => e(null != l ? l : "")).filter(f.lm);
        return t.length > 0 ? {
          fields: t
        } : null
      }).filter(Chunk823379.lm);
    return (0, Chunk54381.jsx)(Chunk754103.Z, {
      className: Chunk473749,
      form: Chunk668339,
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
        values: b(g({}, n), {
          [t]: e
        }),
        dirtyFields: b(g({}, i), {
          [t]: true
        }),
        errors: r
      })
    })
  }
}
h(K, "Layouts", j), h(K, "Modes", M), h(K, "defaultProps", {
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