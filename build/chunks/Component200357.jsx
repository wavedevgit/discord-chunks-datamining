/** Chunk was on web.js **/
/** chunk id: 200357, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk217986 = require("./217986.js"),
  Chunk886025 = require("./886025.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk133080 = require("./133080.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk984392 = require("./984392.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = new Map(Chunk217986.Z.flatMap(e => {
    let {
      alpha2: t,
      phoneCountryCodes: n
    } = e, r = (0, u.q9)(t);
    return n.map(e => ["".concat(t, "-").concat(e), {
      code: e,
      alpha2: t,
      name: r
    }])
  })),
  h = Array.from(p.entries()).map(e => {
    let [t, {
      name: n
    }] = e;
    return {
      value: t,
      label: n
    }
  });

function m(e) {
  return String.fromCodePoint(...e.toUpperCase().split("").map(e => 127397 + e.charCodeAt(0)))
}
class g extends Chunk647438.PureComponent {
  render() {
    let {
      countryCodeId: e,
      phone: t
    } = this.state, {
      className: n,
      submitting: i,
      errorMessage: a
    } = this.props, s = p.get(module);
    return (0, Chunk951288.jsx)("fieldset", {
      children: (0, Chunk951288.jsxs)("div", {
        className: o()(Chunk984392.phoneField, require),
        children: [(0, Chunk951288.jsx)(Chunk886025.N, {
          label: Chunk388032.intl.string(Chunk388032.t["k+bvrK"]),
          children: (0, Chunk951288.jsx)(Chunk481060.VcW, {
            value: module,
            onChange: this.handleCountryChange,
            renderOptionPrefix: this.renderOptionPrefix,
            options: h,
            popoutWidth: 280,
            isDisabled: Chunk647438
          })
        }), (0, Chunk951288.jsx)(Chunk481060.oil, {
          label: Chunk388032.intl.string(Chunk388032.t["64bX0N"]),
          error: Chunk120356,
          leading: null == Chunk217986 ? true : Chunk217986.code,
          type: "tel",
          onChange: this.handlePhoneChange,
          autoFocus: true,
          inputRef: this.inputRef,
          disabled: Chunk647438,
          value: exports
        })]
      })
    })
  }
  constructor(e) {
    super(e), _(this, "inputRef", i.createRef()), _(this, "renderOptionLabel", e => {
      let {
        name: t
      } = p.get(e.value);
      return t
    }), _(this, "renderOptionPrefix", e => {
      var t, n;
      if (null != e) return m(null != (n = null == (t = p.get(e.value)) ? true : t.alpha2) ? n : "")
    }), _(this, "handleCountryChange", e => {
      var t;
      this.setState({
        countryCodeId: e
      }), null == (t = this.inputRef.current) || t.focus(), this.handleChange(e, this.state.phone)
    }), _(this, "handlePhoneChange", e => {
      this.setState({
        phone: e
      });
      let {
        countryCodeId: t
      } = this.state;
      this.handleChange(t, e)
    }), _(this, "handleChange", (e, t) => {
      var n, r, i;
      let a = null == (n = p.get(e)) ? true : n.code;
      null == (r = (i = this.props).onChange) || r.call(i, "".concat(a).concat(t))
    });
    let t = s.Z.find(e => "United States" === e.name),
      [n, r] = t.phoneCountryCode.split(" "),
      a = "".concat(t.alpha2, "-").concat(t.phoneCountryCode);
    this.state = {
      countryCodeId: a,
      phone: null != r ? r : ""
    }
  }
}
let E = g